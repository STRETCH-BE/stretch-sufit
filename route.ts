/**
 * Lead-form API route.
 * File path: /app/api/quote/route.ts
 *
 * Receives form POSTs, validates, and emails the lead to
 * info@stretch-sufit.pl via Microsoft Graph.
 *
 * The email is designed to be read on a phone notification screen:
 *   - Subject line shows name + city for instant context
 *   - Tap-to-call (red) and tap-to-WhatsApp (green) buttons up top
 *   - Submission metadata (Warsaw time, device, page) at the bottom
 *   - Flagged high-importance in Outlook
 */

import { NextResponse } from "next/server";
import { sendMail } from "@/lib/email";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type QuoteBody = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  city?: unknown;
  surface?: unknown;
  /** Honeypot — bots tick every field they see */
  website?: unknown;
};

const SURFACE_LABELS: Record<string, string> = {
  "do-20": "do 20 m²",
  "20-50": "20–50 m²",
  "50-100": "50–100 m²",
  "powyzej-100": "powyżej 100 m²",
};

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

/** Strip everything except + and digits */
function normalizePhone(phone: string): string {
  return phone.replace(/[^\d+]/g, "");
}

/** Add spaces in groups for human-readable display */
function formatPhone(phone: string): string {
  const cleaned = normalizePhone(phone);
  // Polish 9-digit: +48 NNN NNN NNN
  const pl = cleaned.match(/^(\+\d{2})(\d{3})(\d{3})(\d{3})$/);
  if (pl) return `${pl[1]} ${pl[2]} ${pl[3]} ${pl[4]}`;
  // Generic international: +CC NNN NN NN NN
  const intl = cleaned.match(/^(\+\d{1,3})(\d{3})(\d{2,3})(\d{2,3})(\d{2,3})$/);
  if (intl) return `${intl[1]} ${intl[2]} ${intl[3]} ${intl[4]} ${intl[5]}`;
  return phone;
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
  let body: QuoteBody;
  try {
    body = (await request.json()) as QuoteBody;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 }
    );
  }

  if (asString(body.website)) {
    // Silent honeypot — pretend success, drop the submission
    return NextResponse.json({ ok: true });
  }

  const name = asString(body.name, 100);
  const phone = asString(body.phone, 30);
  const emailRaw = asString(body.email, 200).toLowerCase();
  // Light-touch email validation — only reject if obviously malformed.
  // Empty is fine (it's optional). A real validator would be overkill.
  const emailValid = !emailRaw || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailRaw);
  const email = emailValid ? emailRaw : "";
  const city = asString(body.city, 100);
  const surfaceKey = asString(body.surface, 30);
  const surface = SURFACE_LABELS[surfaceKey] || "Nie podano";

  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "Imię i telefon są wymagane." },
      { status: 400 }
    );
  }

  const userAgent = request.headers.get("user-agent") || "";
  const referer = request.headers.get("referer") || "";
  const device = detectDevice(userAgent);
  const browser = detectBrowser(userAgent);
  const deviceStr = browser ? `${device} · ${browser}` : device;
  const submittedAt = formatWarsawTime(new Date());

  const phoneClean = normalizePhone(phone);
  const phoneDisplay = formatPhone(phone);
  const whatsappNumber = phoneClean.replace(/^\+/, "");
  const firstName = name.split(" ")[0];
  const whatsappMessage = encodeURIComponent(
    `Dzień dobry${firstName ? ` ${firstName}` : ""}, dzwonię z Stretch Sufit w odpowiedzi na zapytanie o bezpłatny pomiar. Czy to dobry moment na krótką rozmowę?`
  );

  const refererDisplay = referer
    ? referer.replace(/^https?:\/\//, "").replace(/\/$/, "")
    : "stretchsufit.pl";

  const subject = `🔴 Nowy lead — ${name}${city ? ` · ${city}` : ""}`;

  const html = buildLeadEmail({
    name,
    phoneDisplay,
    phoneClean,
    whatsappNumber,
    whatsappMessage,
    email,
    city,
    surface,
    submittedAt,
    deviceStr,
    refererDisplay,
  });

  const text = [
    `NOWY LEAD — ${name}${city ? ` (${city})` : ""}`,
    "",
    `Imię:         ${name}`,
    `Telefon:      ${phoneDisplay}`,
    `Email:        ${email || "Nie podano"}`,
    `Miasto:       ${city || "Nie podano"}`,
    `Powierzchnia: ${surface}`,
    "",
    `Zadzwoń:      tel:${phoneClean}`,
    `WhatsApp:     https://wa.me/${whatsappNumber}`,
    email ? `Email:        mailto:${email}` : "",
    "",
    "—",
    `Zgłoszone: ${submittedAt} (Warszawa)`,
    `Urządzenie: ${deviceStr}`,
    `Strona: ${refererDisplay}`,
    "",
    "Oddzwoń w ciągu 24 godzin.",
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
    console.error("[quote API] sendMail failed:", err);
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

type LeadEmailData = {
  name: string;
  phoneDisplay: string;
  phoneClean: string;
  whatsappNumber: string;
  /** Pre-URL-encoded */
  whatsappMessage: string;
  email: string;
  city: string;
  surface: string;
  submittedAt: string;
  deviceStr: string;
  refererDisplay: string;
};

function buildLeadEmail(d: LeadEmailData): string {
  const safe = {
    name: escapeHtml(d.name),
    phoneDisplay: escapeHtml(d.phoneDisplay),
    phoneClean: escapeHtml(d.phoneClean),
    whatsappNumber: escapeHtml(d.whatsappNumber),
    whatsappMessage: d.whatsappMessage, // already URL-encoded, safe in href
    email: d.email ? escapeHtml(d.email) : "",
    city: d.city ? escapeHtml(d.city) : "",
    surface: escapeHtml(d.surface),
    submittedAt: escapeHtml(d.submittedAt),
    deviceStr: escapeHtml(d.deviceStr),
    refererDisplay: escapeHtml(d.refererDisplay),
  };

  return `<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nowy lead — ${safe.name}</title>
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
                  <span style="color:${BRAND_RED};">●</span> &nbsp;Nowy lead — pomiar bezpłatny
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
              Klient pisze:
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
              <tr>
                <td style="padding:14px 0; border-bottom:1px solid #eee; font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-size:11px; color:#999; width:42%; text-transform:uppercase; letter-spacing:0.1em; font-weight:600;">
                  Powierzchnia
                </td>
                <td style="padding:14px 0; border-bottom:1px solid #eee; font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-size:15px; color:${BRAND_BG}; font-weight:500;">
                  ${safe.surface}
                </td>
              </tr>
              ${
                safe.city
                  ? `
              <tr>
                <td style="padding:14px 0; border-bottom:1px solid #eee; font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-size:11px; color:#999; text-transform:uppercase; letter-spacing:0.1em; font-weight:600;">
                  Miasto
                </td>
                <td style="padding:14px 0; border-bottom:1px solid #eee; font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-size:15px; color:${BRAND_BG};">
                  ${safe.city}
                </td>
              </tr>
              `
                  : ""
              }
              <tr>
                <td style="padding:14px 0; font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-size:11px; color:#999; text-transform:uppercase; letter-spacing:0.1em; font-weight:600;">
                  Zgłoszone
                </td>
                <td style="padding:14px 0; font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-size:14px; color:${BRAND_BG};">
                  ${safe.submittedAt}
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Action callout -->
        <tr>
          <td style="padding:0 32px 32px;">
            <div style="background:#f5f1eb; padding:18px 22px; border-left:3px solid ${BRAND_RED}; border-radius:0 4px 4px 0;">
              <div style="font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif; font-size:11px; font-weight:700; color:${BRAND_BG}; text-transform:uppercase; letter-spacing:0.12em;">
                Standard: 24 godziny
              </div>
              <div style="font-family:Georgia,'Times New Roman',serif; font-style:italic; font-size:15px; color:#444; margin-top:6px; line-height:1.5;">
                Oddzwoń do końca dnia roboczego — klient prawdopodobnie wysłał zapytanie też do konkurencji.
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
        Automatyczna wiadomość z formularza na stretchsufit.pl<br>
        <span style="color:#bbb;">Stretch Sufit — Część grupy STRETCH® · Made in Belgium, installed in Poland</span>
      </div>

    </td>
  </tr>
</table>

</body>
</html>`;
}
