/**
 * /wycena lead-form API route.
 * File path: /app/api/wycena/route.ts
 *
 * Receives the multi-step quote form POSTs from /wycena, validates, and
 * emails the lead to info@stretch-sufit.pl via Microsoft Graph — the same
 * mechanism as /api/quote (lib/email.ts).
 *
 * Differences vs /api/quote:
 *   - richer lead payload: pomieszczenie, metraż, podświetlenie LED
 *   - attribution: utm_* + gclid captured on the landing page ride along
 *     and are printed in the email so ad spend can be tied to leads
 *   - anti-spam: honeypot AND a minimum-time-to-submit check (no captcha)
 *
 * The email keeps the phone-notification-first design of the quote email:
 * name + city in the subject, tap-to-call / tap-to-WhatsApp up top.
 */

import { NextResponse } from "next/server";
import { sendMail } from "@/lib/email";
import { cities } from "@/content/cities";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type WycenaBody = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  room?: unknown;
  area?: unknown;
  led?: unknown;
  /** City slug from the whitelist select, or "inna" */
  city?: unknown;
  /** Free-text locality, only when city === "inna" */
  cityName?: unknown;
  /** RODO checkbox — must be true */
  consent?: unknown;
  utm_source?: unknown;
  utm_medium?: unknown;
  utm_campaign?: unknown;
  utm_term?: unknown;
  utm_content?: unknown;
  gclid?: unknown;
  /** Honeypot — bots tick every field they see */
  website?: unknown;
  /** Milliseconds between form mount and submit — bots submit instantly */
  formMs?: unknown;
};

const ROOM_LABELS: Record<string, string> = {
  salon: "Salon",
  lazienka: "Łazienka",
  kuchnia: "Kuchnia",
  sypialnia: "Sypialnia",
  lokal: "Lokal / biuro",
  inne: "Inne",
};

const AREA_LABELS: Record<string, string> = {
  "do-10": "do 10 m²",
  "10-20": "10–20 m²",
  "20-40": "20–40 m²",
  "powyzej-40": "powyżej 40 m²",
};

const LED_LABELS: Record<string, string> = {
  tak: "Tak",
  nie: "Nie",
  "nie-wiem": "Jeszcze nie wiem",
};

/** Submissions faster than this are dropped as bots (silent success). */
const MIN_FORM_MS = 3000;

/**
 * Best-effort per-IP rate limit. In-memory, so on serverless it only
 * spans a single warm instance — that still blunts naive mail-bomb
 * scripts hammering one function instance, at zero infra cost.
 */
const RATE_LIMIT_WINDOW_MS = 10 * 60_000;
const RATE_LIMIT_MAX = 5;
const rateBuckets = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (rateBuckets.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  hits.push(now);
  // Memory guard — an attacker rotating IPs must not grow the map forever
  if (rateBuckets.size > 10_000) rateBuckets.clear();
  rateBuckets.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX;
}

const BRAND_RED = "#e1101a";
const BRAND_BG = "#0a0a0a";

function asString(value: unknown, max = 200): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Canonicalize to E.164. The form accepts '+48…', '0048…', '48…' and bare
 * 9-digit numbers — all four must become +48XXXXXXXXX, otherwise the
 * tap-to-call and wa.me buttons in the lead email dial the wrong thing
 * (wa.me/601234567 parses '60' as Malaysia and dead-ends).
 */
function toE164Polish(phone: string): string {
  const digits = phone.replace(/\D/g, "").replace(/^00/, "");
  const national =
    digits.length === 11 && digits.startsWith("48") ? digits.slice(2) : digits;
  if (national.length === 9) return `+48${national}`;
  return digits ? `+${digits}` : "";
}

/** Add spaces in groups for human-readable display */
function formatPhone(e164: string): string {
  const pl = e164.match(/^(\+\d{2})(\d{3})(\d{3})(\d{3})$/);
  if (pl) return `${pl[1]} ${pl[2]} ${pl[3]} ${pl[4]}`;
  return e164;
}

function detectDevice(userAgent: string): string {
  const ua = userAgent.toLowerCase();
  if (ua.includes("iphone")) return "iPhone";
  if (ua.includes("ipad")) return "iPad";
  if (ua.includes("android")) return "Android";
  if (ua.includes("macintosh") || ua.includes("mac os")) return "Mac";
  if (ua.includes("windows")) return "Windows";
  if (ua.includes("linux")) return "Linux";
  return "Nieznane";
}

function detectBrowser(userAgent: string): string {
  // Order matters — Edge contains "Chrome", Chrome contains "Safari"
  if (/edg\//i.test(userAgent)) return "Edge";
  if (/chrome/i.test(userAgent)) return "Chrome";
  if (/firefox/i.test(userAgent)) return "Firefox";
  if (/safari/i.test(userAgent)) return "Safari";
  return "";
}

function formatWarsawTime(date: Date): string {
  return new Intl.DateTimeFormat("pl-PL", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Warsaw",
  }).format(date);
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    // eslint-disable-next-line no-console
    console.warn("[wycena API] rate limit hit for", ip);
    return NextResponse.json(
      {
        ok: false,
        error: "Zbyt wiele zgłoszeń. Zadzwoń: +48 730 700 333.",
      },
      { status: 429 }
    );
  }

  let body: WycenaBody;
  try {
    body = (await request.json()) as WycenaBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 }
    );
  }

  if (asString(body.website)) {
    // Silent honeypot — pretend success, drop the submission. Logged so
    // a false-positive wave (e.g. browser autofill) is visible in ops.
    // eslint-disable-next-line no-console
    console.warn("[wycena API] honeypot tripped — submission dropped");
    return NextResponse.json({ ok: true });
  }

  // Minimum-time-to-submit: the client stamps mount time and sends the
  // elapsed ms. Humans need multiple seconds to walk 4 steps; bots that
  // POST instantly (or skip the form entirely, omitting formMs) are
  // dropped with a fake success so they don't adapt.
  const formMs = typeof body.formMs === "number" ? body.formMs : NaN;
  if (!Number.isFinite(formMs) || formMs < MIN_FORM_MS) {
    // eslint-disable-next-line no-console
    console.warn("[wycena API] min-time check failed — dropped", { formMs });
    return NextResponse.json({ ok: true });
  }

  const name = asString(body.name, 100);
  const phone = asString(body.phone, 30);
  const emailRaw = asString(body.email, 200).toLowerCase();
  // Light-touch email validation — only reject if obviously malformed.
  // Empty is fine (it's optional).
  const emailValid = !emailRaw || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRaw);
  const email = emailValid ? emailRaw : "";

  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "Imię i telefon są wymagane." },
      { status: 400 }
    );
  }

  // Server-side phone sanity check — the client validates Polish formats,
  // but direct POSTs must not be able to plant arbitrary tel:/wa.me hrefs
  // in the lead email.
  const phoneClean = toE164Polish(phone);
  if (!/^\+\d{9,15}$/.test(phoneClean)) {
    return NextResponse.json(
      { ok: false, error: "Podaj poprawny numer telefonu." },
      { status: 400 }
    );
  }

  if (body.consent !== true) {
    return NextResponse.json(
      { ok: false, error: "Wymagana zgoda na przetwarzanie danych." },
      { status: 400 }
    );
  }

  const room = ROOM_LABELS[asString(body.room, 30)] || "Nie podano";
  const area = AREA_LABELS[asString(body.area, 30)] || "Nie podano";
  const led = LED_LABELS[asString(body.led, 30)] || "Nie podano";

  // City: resolve the whitelist slug to its display name; "inna" falls
  // back to the visitor's free-text locality (or a generic label).
  const citySlug = asString(body.city, 60);
  const knownCity = cities.find((c) => c.slug === citySlug);
  const city = knownCity
    ? knownCity.name
    : citySlug === "inna"
      ? asString(body.cityName, 100) || "Inna miejscowość"
      : "";

  const attribution: [string, string][] = (
    [
      ["utm_source", body.utm_source],
      ["utm_medium", body.utm_medium],
      ["utm_campaign", body.utm_campaign],
      ["utm_term", body.utm_term],
      ["utm_content", body.utm_content],
      ["gclid", body.gclid],
    ] as [string, unknown][]
  )
    .map(([key, value]): [string, string] => [key, asString(value, 300)])
    .filter(([, value]) => value !== "");

  const userAgent = request.headers.get("user-agent") || "";
  const referer = request.headers.get("referer") || "";
  const device = detectDevice(userAgent);
  const browser = detectBrowser(userAgent);
  const deviceStr = browser ? `${device} · ${browser}` : device;
  const submittedAt = formatWarsawTime(new Date());

  const phoneDisplay = formatPhone(phoneClean);
  const whatsappNumber = phoneClean.replace(/^\+/, "");
  const firstName = name.split(" ")[0];
  const whatsappMessage = encodeURIComponent(
    `Dzień dobry${firstName ? ` ${firstName}` : ""}, dzwonię ze Stretch Sufit w odpowiedzi na zapytanie o bezpłatną wycenę. Czy to dobry moment na krótką rozmowę?`
  );

  const refererDisplay = referer
    ? referer.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "altodesign.pl/wycena";

  const subject = `🔴 Nowy lead (wycena) — ${name}${city ? ` · ${city}` : ""}`;

  const html = buildWycenaLeadEmail({
    name,
    phoneDisplay,
    phoneClean,
    whatsappNumber,
    whatsappMessage,
    email,
    city,
    room,
    area,
    led,
    attribution,
    submittedAt,
    deviceStr,
    refererDisplay,
  });

  const text = [
    `NOWY LEAD (WYCENA) — ${name}${city ? ` (${city})` : ""}`,
    "",
    `Imię:          ${name}`,
    `Telefon:       ${phoneDisplay}`,
    `Email:         ${email || "Nie podano"}`,
    `Miasto:        ${city || "Nie podano"}`,
    `Pomieszczenie: ${room}`,
    `Metraż:        ${area}`,
    `LED:           ${led}`,
    "",
    `Zadzwoń:       tel:${phoneClean}`,
    `WhatsApp:      https://wa.me/${whatsappNumber}`,
    email ? `Email:         mailto:${email}` : "",
    "",
    attribution.length ? "— Źródło kampanii —" : "",
    ...attribution.map(([key, value]) => `${key}: ${value}`),
    "",
    "—",
    `Zgłoszone: ${submittedAt} (Warszawa)`,
    `Urządzenie: ${deviceStr}`,
    `Strona: ${refererDisplay}`,
    "",
    "Klient oczekuje kontaktu — oddzwoń jak najszybciej.",
  ]
    .filter(Boolean)
    .join("\n");

  try {
    await sendMail({
      to: "info@stretch-sufit.pl",
      subject,
      html,
      text,
      importance: "high",
      // If the lead gave an email, clicking Reply in Outlook goes to them
      replyTo: email || undefined,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[wycena API] sendMail failed:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Nie udało się wysłać zgłoszenia. Zadzwoń: +48 730 700 333.",
      },
      { status: 500 }
    );
  }
}

/* ─────────────────────────────────────────────────────────────────────
   Email template
   Inline styles only — most email clients strip <style> tags.
   Tables for layout — most reliable across Outlook / Gmail / Apple Mail.
   ───────────────────────────────────────────────────────────────────── */

type WycenaLeadEmailData = {
  name: string;
  phoneDisplay: string;
  phoneClean: string;
  whatsappNumber: string;
  /** Pre-URL-encoded */
  whatsappMessage: string;
  email: string;
  city: string;
  room: string;
  area: string;
  led: string;
  attribution: [string, string][];
  submittedAt: string;
  deviceStr: string;
  refererDisplay: string;
};

function detailRow(label: string, value: string, last = false): string {
  const border = last ? "" : "border-bottom:1px solid #eee;";
  return `
              <tr>
                <td style="padding:14px 0; ${border} font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-size:11px; color:#999; width:42%; text-transform:uppercase; letter-spacing:0.1em; font-weight:600;">
                  ${label}
                </td>
                <td style="padding:14px 0; ${border} font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-size:15px; color:${BRAND_BG}; font-weight:500;">
                  ${value}
                </td>
              </tr>`;
}

function buildWycenaLeadEmail(d: WycenaLeadEmailData): string {
  const safe = {
    name: escapeHtml(d.name),
    phoneDisplay: escapeHtml(d.phoneDisplay),
    phoneClean: escapeHtml(d.phoneClean),
    whatsappNumber: escapeHtml(d.whatsappNumber),
    whatsappMessage: d.whatsappMessage, // already URL-encoded, safe in href
    email: d.email ? escapeHtml(d.email) : "",
    city: d.city ? escapeHtml(d.city) : "",
    room: escapeHtml(d.room),
    area: escapeHtml(d.area),
    led: escapeHtml(d.led),
    submittedAt: escapeHtml(d.submittedAt),
    deviceStr: escapeHtml(d.deviceStr),
    refererDisplay: escapeHtml(d.refererDisplay),
  };

  const detailRows = [
    detailRow("Pomieszczenie", safe.room),
    detailRow("Metraż", safe.area),
    detailRow("Podświetlenie LED", safe.led),
    safe.city ? detailRow("Miasto", safe.city) : "",
    detailRow("Zgłoszone", safe.submittedAt, true),
  ].join("");

  const attributionBlock = d.attribution.length
    ? `
        <tr>
          <td style="padding:0 32px 24px;">
            <div style="background:#fafafa; border:1px solid #eee; border-radius:6px; padding:16px 20px;">
              <div style="font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-size:11px; font-weight:700; color:#999; text-transform:uppercase; letter-spacing:0.12em; margin-bottom:8px;">
                Źródło kampanii
              </div>
              ${d.attribution
                .map(
                  ([key, value]) =>
                    `<div style="font-family:ui-monospace,'SF Mono',Menlo,Consolas,monospace; font-size:12px; color:#555; line-height:1.8;"><strong style="color:#333;">${escapeHtml(key)}</strong>: ${escapeHtml(value)}</div>`
                )
                .join("")}
            </div>
          </td>
        </tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nowy lead (wycena) — ${safe.name}</title>
</head>
<body style="margin:0; padding:0; background:#f5f1eb; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">

<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f5f1eb;">
  <tr>
    <td align="center" style="padding:24px 16px;">

      <!-- ════════ Wrapper ════════ -->
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width:600px; width:100%; background:#ffffff; border-radius:8px; overflow:hidden;">

        <!-- Header -->
        <tr>
          <td style="background:${BRAND_BG}; padding:22px 32px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-size:11px; font-weight:600; letter-spacing:0.2em; color:#ffffff; text-transform:uppercase;">
                  <span style="color:${BRAND_RED};">●</span> &nbsp;Nowy lead — formularz wyceny
                </td>
                <td align="right" style="font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-size:15px; font-weight:700; letter-spacing:-0.02em; color:#ffffff;">
                  <span style="color:${BRAND_RED};">stretch</span>sufit<span style="color:${BRAND_RED};">.</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Customer name + city -->
        <tr>
          <td style="padding:32px 32px 12px;">
            <div style="font-family:Georgia,'Times New Roman',serif; font-style:italic; font-size:14px; color:#999;">
              Klient prosi o wycenę:
            </div>
            <div style="font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-size:30px; font-weight:700; letter-spacing:-0.02em; color:${BRAND_BG}; margin-top:4px; line-height:1.15;">
              ${safe.name}
            </div>
            ${
              safe.city
                ? `<div style="font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-size:15px; color:#666; margin-top:8px;">📍 ${safe.city}</div>`
                : ""
            }
          </td>
        </tr>

        <!-- Action buttons -->
        <tr>
          <td style="padding:8px 32px 24px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="padding-right:6px;">
                  <a href="tel:${safe.phoneClean}"
                     style="display:block; background:${BRAND_RED}; color:#ffffff; text-decoration:none; padding:16px 12px; border-radius:6px; font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-weight:700; font-size:15px; text-align:center; letter-spacing:0.02em;">
                    📞 Zadzwoń teraz
                  </a>
                </td>
                <td style="padding-left:6px;">
                  <a href="https://wa.me/${safe.whatsappNumber}?text=${safe.whatsappMessage}"
                     style="display:block; background:#25d366; color:#ffffff; text-decoration:none; padding:16px 12px; border-radius:6px; font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-weight:700; font-size:15px; text-align:center; letter-spacing:0.02em;">
                    💬 WhatsApp
                  </a>
                </td>
              </tr>
            </table>
            <div style="margin-top:14px; font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-size:13px; color:#888; text-align:center;">
              <a href="tel:${safe.phoneClean}" style="color:${BRAND_RED}; text-decoration:none; font-weight:600; font-size:16px; letter-spacing:0.02em;">${safe.phoneDisplay}</a>
              ${
                safe.email
                  ? `<br><a href="mailto:${safe.email}" style="color:${BRAND_RED}; text-decoration:none; font-weight:500; font-size:14px; margin-top:6px; display:inline-block;">✉️ ${safe.email}</a>`
                  : ""
              }
            </div>
          </td>
        </tr>

        <!-- Details table -->
        <tr>
          <td style="padding:0 32px 24px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:1px solid #eee;">
              ${detailRows}
            </table>
          </td>
        </tr>

        ${attributionBlock}

        <!-- Action callout -->
        <tr>
          <td style="padding:0 32px 32px;">
            <div style="background:#f5f1eb; padding:18px 22px; border-left:3px solid ${BRAND_RED}; border-radius:0 4px 4px 0;">
              <div style="font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-size:11px; font-weight:700; color:${BRAND_BG}; text-transform:uppercase; letter-spacing:0.12em;">
                Lead z kampanii — cel: 15 minut
              </div>
              <div style="font-family:Georgia,'Times New Roman',serif; font-style:italic; font-size:15px; color:#444; margin-top:6px; line-height:1.5;">
                Klient właśnie wypełnił formularz wyceny z reklamy. Obiecaliśmy oddzwonienie w 15 minut w godzinach pracy — im szybciej, tym większa szansa na zlecenie.
              </div>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#fafafa; padding:18px 32px; border-top:1px solid #eee;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-size:11px; color:#999; line-height:1.7;">
                  Urządzenie klienta: <strong style="color:#666;">${safe.deviceStr}</strong><br>
                  Strona źródłowa: <strong style="color:#666;">${safe.refererDisplay}</strong>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>
      <!-- ════════ /Wrapper ════════ -->

      <div style="margin-top:16px; font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-size:11px; color:#999; text-align:center;">
        Automatyczna wiadomość z formularza wyceny na altodesign.pl/wycena<br>
        <span style="color:#bbb;">Stretch Sufit — część Stretchgroup · PVC made in Poland, polyester made in Belgium</span>
      </div>

    </td>
  </tr>
</table>

</body>
</html>`;
}
