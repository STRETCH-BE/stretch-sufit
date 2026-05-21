"use client";

/**
 * Final CTA — red background, phone/WhatsApp + lead form.
 * File path: /components/sections/cta-final.tsx
 *
 * Client component because the form needs state. The submit handler posts to
 * /api/quote.
 *
 * Reusable: optional props let case-study pages override the heading and tag
 * the analytics events with a different source. Defaults match the original
 * homepage copy, so the existing <CtaFinal /> call keeps working unchanged.
 *
 * Events:
 *   - phone_click          when the phone button is tapped
 *   - whatsapp_click       when the WhatsApp button is tapped
 *   - quote_request        on successful form submit (with city + surface + source)
 *   - form_submit          mirror event for funnel analytics
 */

import { useId, useState, type ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { analytics, track } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";

const surfaces = [
  { value: "", label: "Powierzchnia szacunkowa" },
  { value: "do-20", label: "do 20 m²" },
  { value: "20-50", label: "20–50 m²" },
  { value: "50-100", label: "50–100 m²" },
  { value: "powyzej-100", label: "powyżej 100 m²" },
] as const;

type Status = "idle" | "submitting" | "success" | "error";

type Props = {
  /** Tag for analytics events, e.g. "homepage" or "project_afas_lounge" */
  source?: string;
  /** Override the H2. Pass ReactNode for italic accents. */
  headingOverride?: ReactNode;
  /** Override the lead paragraph below the heading. */
  subheadOverride?: ReactNode;
};

const DEFAULT_HEADING = (
  <>
    Bezpłatny pomiar
    <br />w <span className="it">48 godzinach.</span>
  </>
);

const DEFAULT_SUBHEAD =
  "Zostaw numer, oddzwonimy. Specjalista przyjedzie do Ciebie, zmierzy pomieszczenie, doradzi materiał i kolor, przedstawi wycenę na miejscu.";

export function CtaFinal({
  source = "homepage",
  headingOverride,
  subheadOverride,
}: Props = {}) {
  const formId = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    surface: "",
  });

  const update =
    <K extends keyof typeof data>(key: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setData((d) => ({ ...d, [key]: e.target.value }));

  // Honeypot
  const [honeypot, setHoneypot] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, website: honeypot, source }),
      });

      if (!res.ok) {
        throw new Error(`Server responded ${res.status}`);
      }

      analytics.formSubmit("quote_request", true);
      // Pass `source` through analytics so we can attribute leads
      track("quote_request", {
        city: data.city,
        surface: data.surface,
        source,
      });
      setStatus("success");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("[quote form] submit failed:", err);
      analytics.formSubmit("quote_request", false);
      setStatus("error");
    }
  };

  return (
    <section
      id="cta"
      aria-labelledby={`${formId}-heading`}
      className="relative isolate overflow-hidden bg-red py-24 text-white md:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(0,0,0,0.2), transparent 50%)",
        }}
      />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <h2
              id={`${formId}-heading`}
              className="font-display text-[clamp(40px,6vw,88px)] font-medium leading-[0.95] tracking-[-0.03em]"
            >
              {headingOverride ?? DEFAULT_HEADING}
            </h2>
            <p className="mt-6 max-w-[460px] text-[18px] leading-[1.55] text-white/90">
              {subheadOverride ?? DEFAULT_SUBHEAD}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={`tel:${siteConfig.contact.phonePL}`}
                onClick={() => {
                  analytics.phoneClick("cta_final");
                  track("phone_click", { location: "cta_final", source });
                }}
                className="inline-flex items-center gap-2.5 rounded-full bg-bg px-[26px] py-4 text-sm font-semibold text-white transition-colors hover:bg-[#2a2a2a]"
              >
                📞 {formatPhone(siteConfig.contact.phonePL)}
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  analytics.whatsappClick("cta_final");
                  track("whatsapp_click", { location: "cta_final", source });
                }}
                className="group/btn inline-flex items-center gap-2.5 rounded-full bg-white px-[26px] py-4 text-sm font-semibold text-bg transition-colors hover:bg-paper-2"
              >
                WhatsApp
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover/btn:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Lead form */}
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-lg bg-bg p-7 md:p-9"
            aria-describedby={`${formId}-note`}
          >
            {status === "success" ? (
              <div role="status" className="py-8 text-center">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-red">
                  <span aria-hidden="true" className="text-2xl">
                    ✓
                  </span>
                </div>
                <div className="font-display text-xl font-semibold text-white">
                  Dziękujemy!
                </div>
                <p className="mt-2 text-sm text-white/70">
                  Oddzwonimy w ciągu 24 godzin, aby umówić bezpłatny pomiar.
                </p>
              </div>
            ) : (
              <>
                <div className="font-display text-[22px] font-semibold text-white">
                  Zamów pomiar
                </div>
                <p className="mt-1 text-[13px] text-white/55">
                  Odpowiemy w ciągu 24 godzin
                </p>

                <div className="mt-6 space-y-3">
                  {/* Honeypot */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-10000px",
                      width: "1px",
                      height: "1px",
                      overflow: "hidden",
                    }}
                  >
                    <label htmlFor={`${formId}-website`}>
                      Website (leave empty)
                    </label>
                    <input
                      id={`${formId}-website`}
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <Field
                    label="Imię"
                    name="name"
                    value={data.name}
                    onChange={update("name")}
                    required
                    autoComplete="given-name"
                  />
                  <Field
                    label="Numer telefonu"
                    name="phone"
                    type="tel"
                    value={data.phone}
                    onChange={update("phone")}
                    required
                    autoComplete="tel"
                    inputMode="tel"
                  />
                  <Field
                    label="Adres e-mail"
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={update("email")}
                    autoComplete="email"
                    inputMode="email"
                  />
                  <Field
                    label="Miasto"
                    name="city"
                    value={data.city}
                    onChange={update("city")}
                    autoComplete="address-level2"
                  />

                  <div>
                    <label htmlFor={`${formId}-surface`} className="sr-only">
                      Powierzchnia szacunkowa
                    </label>
                    <select
                      id={`${formId}-surface`}
                      name="surface"
                      value={data.surface}
                      onChange={update("surface")}
                      className="w-full rounded border border-white/10 bg-transparent px-4 py-3.5 text-sm text-white transition-colors focus:border-red focus:outline-none"
                    >
                      {surfaces.map((s) => (
                        <option key={s.value} value={s.value} className="bg-bg">
                          {s.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-2 w-full rounded bg-red px-4 py-4 font-display text-sm font-semibold uppercase tracking-[0.04em] text-white transition-colors hover:bg-red-deep disabled:opacity-60"
                  >
                    {status === "submitting"
                      ? "Wysyłanie…"
                      : "Zamów bezpłatny pomiar"}
                  </button>

                  {status === "error" && (
                    <p role="alert" className="text-xs text-red">
                      Coś poszło nie tak. Zadzwoń:{" "}
                      {formatPhone(siteConfig.contact.phonePL)}.
                    </p>
                  )}
                </div>

                <p
                  id={`${formId}-note`}
                  className="mt-4 text-[11px] leading-[1.5] text-white/55"
                >
                  Klikając, zgadzasz się na kontakt zwrotny. Twoje dane są
                  chronione zgodnie z RODO i nigdy nie są przekazywane podmiotom
                  trzecim.
                </p>
              </>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}

/* Reusable input */
function Field({
  label,
  name,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
}) {
  const id = `field-${name}`;
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        placeholder={label}
        className="w-full rounded border border-white/10 bg-transparent px-4 py-3.5 text-sm text-white transition-colors placeholder:text-white/55 focus:border-red focus:outline-none"
        {...rest}
      />
    </div>
  );
}

function formatPhone(p: string) {
  return p.replace(/^(\+\d{2})(\d{3})(\d{3})(\d{3})$/, "$1 $2 $3 $4");
}
