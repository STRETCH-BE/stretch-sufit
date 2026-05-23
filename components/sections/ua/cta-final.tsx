"use client";

/**
 * Final CTA — Ukrainian.
 * File path: /components/sections/ua/cta-final.tsx
 */

import { useId, useState, type ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { analytics, track } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";

const surfaces = [
  { value: "", label: "Орієнтовна площа" },
  { value: "do-20", label: "до 20 м²" },
  { value: "20-50", label: "20–50 м²" },
  { value: "50-100", label: "50–100 м²" },
  { value: "powyzej-100", label: "понад 100 м²" },
] as const;

type Status = "idle" | "submitting" | "success" | "error";

type Props = {
  source?: string;
  headingOverride?: ReactNode;
  subheadOverride?: ReactNode;
};

const DEFAULT_HEADING = (
  <>
    Безкоштовний замір
    <br />
    за <span className="it">48 годин.</span>
  </>
);

const DEFAULT_SUBHEAD =
  "Залишіть номер — передзвонимо. Спеціаліст приїде до вас, обмірює приміщення, порадить матеріал і колір, надасть кошторис на місці.";

export function CtaFinal({
  source = "homepage_uk",
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
      track("quote_request", {
        city: data.city,
        surface: data.surface,
        source,
      });

      setStatus("success");
      setData({ name: "", phone: "", email: "", city: "", surface: "" });
    } catch (err) {
      console.error("Quote form submission failed:", err);
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
                href={`tel:${siteConfig.contact.phonePLUA}`}
                onClick={() => {
                  analytics.phoneClick("cta_final");
                  track("phone_click", { location: "cta_final", source });
                }}
                className="inline-flex items-center gap-2.5 rounded-full bg-bg px-[26px] py-4 text-sm font-semibold text-white transition-colors hover:bg-[#2a2a2a]"
              >
                📞 {formatPhone(siteConfig.contact.phonePLUA)} (UA)
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
                  Дякуємо!
                </div>
                <p className="mt-2 text-sm text-white/70">
                  Передзвонимо протягом 24 годин, щоб домовитися про безкоштовний замір.
                </p>
              </div>
            ) : (
              <>
                <div className="font-display text-[22px] font-semibold text-white">
                  Замовити замір
                </div>
                <p className="mt-1 text-[13px] text-white/55">
                  Відповідаємо протягом 24 годин
                </p>

                <div className="mt-6 space-y-3">
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
                    label="Ім'я"
                    name="name"
                    value={data.name}
                    onChange={update("name")}
                    required
                    autoComplete="given-name"
                  />
                  <Field
                    label="Номер телефону"
                    name="phone"
                    type="tel"
                    value={data.phone}
                    onChange={update("phone")}
                    required
                    autoComplete="tel"
                    inputMode="tel"
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={update("email")}
                    autoComplete="email"
                    inputMode="email"
                  />
                  <Field
                    label="Місто"
                    name="city"
                    value={data.city}
                    onChange={update("city")}
                    autoComplete="address-level2"
                  />

                  <div>
                    <label htmlFor={`${formId}-surface`} className="sr-only">
                      Орієнтовна площа
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
                      ? "Надсилаємо…"
                      : "Замовити безкоштовний замір"}
                  </button>

                  {status === "error" && (
                    <p role="alert" className="text-xs text-red">
                      Щось пішло не так. Зателефонуйте:{" "}
                      {formatPhone(siteConfig.contact.phonePLUA)}.
                    </p>
                  )}
                </div>

                <p
                  id={`${formId}-note`}
                  className="mt-4 text-[11px] leading-[1.5] text-white/55"
                >
                  Натискаючи, ви погоджуєтеся на зворотний контакт. Ваші дані захищені відповідно до GDPR і ніколи не передаються третім особам.
                </p>
              </>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}

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
