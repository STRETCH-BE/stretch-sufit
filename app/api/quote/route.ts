/**
 * Lead-form API route.
 * File path: /app/api/quote/route.ts
 *
 * Receives JSON POSTs from the homepage CTA form, validates the payload,
 * and emails the lead to info@stretch-sufit.pl via Microsoft Graph.
 *
 * Rate-limited at the route level by Vercel's serverless cold-start
 * characteristics — for higher abuse protection, layer in a real rate
 * limiter (e.g. Vercel KV + sliding window) in a follow-up prompt.
 *
 * Returns:
 *   - 200 { ok: true }      on successful submission and email
 *   - 400 { ok: false, ...} on validation failure
 *   - 500 { ok: false, ... } on email send failure (caller retries / phones)
 */

import { NextResponse } from "next/server";
import { sendMail } from "@/lib/email";

// Force Node.js runtime — Edge doesn't have access to all the Node APIs
// we'd want for outgoing fetch in the future. Stay on Node for safety.
export const runtime = "nodejs";

// Don't cache responses
export const dynamic = "force-dynamic";

type QuoteBody = {
  name?: unknown;
  phone?: unknown;
  city?: unknown;
  surface?: unknown;
  /** Honeypot field — if filled, this is a bot */
  website?: unknown;
};

// Map surface select values back to human-readable labels for the email body
const SURFACE_LABELS: Record<string, string> = {
  "do-20": "do 20 m²",
  "20-50": "20–50 m²",
  "50-100": "50–100 m²",
  "powyzej-100": "powyżej 100 m²",
};

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

  // Silent bot trap — if the honeypot field is filled, pretend success
  // but don't actually send anything. Bots tick every field they see.
  if (asString(body.website)) {
    return NextResponse.json({ ok: true });
  }

  const name = asString(body.name, 100);
  const phone = asString(body.phone, 30);
  const city = asString(body.city, 100);
  const surfaceKey = asString(body.surface, 30);
  const surface = SURFACE_LABELS[surfaceKey] || "(nie podano)";

  // Validation — name and phone are required, the rest are nice-to-have
  if (!name || !phone) {
    return NextResponse.json(
      { ok: false, error: "Imię i telefon są wymagane." },
      { status: 400 }
    );
  }

  // Build a clean HTML email — readable in Outlook + on phone
  const subject = `Nowy lead z witryny — ${name}${city ? ` (${city})` : ""}`;
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; padding: 24px; color: #0a0a0a;">
      <h2 style="margin: 0 0 8px; font-size: 20px;">Nowy lead — pomiar bezpłatny</h2>
      <p style="margin: 0 0 20px; color: #666; font-size: 14px;">
        Zgłoszenie z formularza na stretchsufit.pl
      </p>

      <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666; width: 40%;">Imię</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">${escapeHtml(name)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Telefon</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: 600;">
            <a href="tel:${escapeHtml(phone.replace(/\s/g, ""))}" style="color: #e1101a; text-decoration: none;">
              ${escapeHtml(phone)}
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #666;">Miasto</td>
          <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${escapeHtml(city) || "<em style='color:#999'>nie podano</em>"}</td>
        </tr>
        <tr>
          <td style="padding: 10px 0; color: #666;">Powierzchnia</td>
          <td style="padding: 10px 0;">${escapeHtml(surface)}</td>
        </tr>
      </table>

      <p style="margin: 28px 0 0; padding-top: 20px; border-top: 1px solid #eee; font-size: 13px; color: #999;">
        Oddzwoń w ciągu 24 godzin. Klient czeka.
      </p>
    </div>
  `.trim();

  const text = [
    "Nowy lead — pomiar bezpłatny",
    "",
    `Imię:         ${name}`,
    `Telefon:      ${phone}`,
    `Miasto:       ${city || "(nie podano)"}`,
    `Powierzchnia: ${surface}`,
    "",
    "Oddzwoń w ciągu 24 godzin.",
  ].join("\n");

  try {
    await sendMail({
      to: "info@stretch-sufit.pl",
      subject,
      html,
      text,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    // Log to Vercel function logs for debugging — never return raw errors
    // to the client since they may contain auth details
    // eslint-disable-next-line no-console
    console.error("[quote API] sendMail failed:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Nie udało się wysłać zgłoszenia. Zadzwoń: +48 730 700 333.",
      },
      { status: 500 }
    );
  }
}
