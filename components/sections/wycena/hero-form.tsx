"use client";

/**
 * /wycena above-the-fold hero + 4-step quote form.
 * File path: /components/sections/wycena/hero-form.tsx
 *
 * One client component so the H1 can be personalized from ?miasto=<slug>
 * without useSearchParams() — that hook would push the whole subtree out
 * of the static prerender (see the note in posthog-provider.tsx). Instead
 * the query string is read from window.location in a mount effect, like
 * faq-grid.tsx does: the prerendered HTML always carries the generic H1 +
 * the full form markup, and a whitelisted city swaps the copy after
 * hydration. Raw param input is never rendered — only whitelist matches.
 *
 * Attribution: on first landing, utm_source / utm_medium / utm_campaign /
 * utm_term / utm_content / gclid are persisted to sessionStorage so they
 * survive in-site navigation, and ride along in the submission (hidden
 * fields + JSON body) into the lead email.
 *
 * Anti-spam: honeypot field + minimum-time-to-submit (server drops
 * sub-3s submissions silently). No captcha.
 *
 * Analytics (see /lib/analytics.ts):
 *   wycena_form_start   first interaction with the form, fired once
 *   wycena_form_step    { step } — fired when a step is COMPLETED (1–3)
 *   wycena_form_submit  the key conversion — fired exactly once per lead,
 *                       on confirmed 2xx from /api/wycena, right before
 *                       the redirect to /wycena/dziekujemy (which itself
 *                       fires nothing, so refreshes can't double-count)
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { track } from "@/lib/analytics";
import { siteConfig } from "@/lib/site-config";

export type WycenaCity = { slug: string; name: string };

const ROOMS = [
  { value: "salon", label: "Salon", icon: "🛋️" },
  { value: "lazienka", label: "Łazienka", icon: "🛁" },
  { value: "kuchnia", label: "Kuchnia", icon: "🍳" },
  { value: "sypialnia", label: "Sypialnia", icon: "🛏️" },
  { value: "lokal", label: "Lokal / biuro", icon: "🏢" },
  { value: "inne", label: "Inne", icon: "✚" },
] as const;

const AREAS = [
  { value: "do-10", label: "do 10 m²" },
  { value: "10-20", label: "10–20 m²" },
  { value: "20-40", label: "20–40 m²" },
  { value: "powyzej-40", label: "powyżej 40 m²" },
] as const;

const LED_OPTIONS = [
  { value: "tak", label: "Tak" },
  { value: "nie", label: "Nie" },
  { value: "nie-wiem", label: "Jeszcze nie wiem" },
] as const;

const STEP_TITLES = ["Pomieszczenie", "Metraż", "Miasto", "Kontakt"] as const;

const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
] as const;

const ATTRIBUTION_STORAGE_KEY = "wycena_attribution";
/** Read by nothing today — stamped so /wycena/dziekujemy (or future
 *  tracking there) can verify a real submission preceded the visit. */
const LEAD_FLAG_STORAGE_KEY = "wycena_lead_submitted";

type Attribution = Partial<Record<(typeof ATTRIBUTION_KEYS)[number], string>>;
type Status = "idle" | "submitting" | "error";
type FieldErrors = Partial<
  Record<"name" | "phone" | "email" | "consent", string>
>;

function isValidPolishPhone(raw: string): boolean {
  const digits = raw.replace(/[\s\-().]/g, "");
  return /^(?:\+48|0048|48)?[1-9]\d{8}$/.test(digits);
}

export function WycenaHeroForm({ cities }: { cities: WycenaCity[] }) {
  const router = useRouter();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [room, setRoom] = useState("");
  const [area, setArea] = useState("");
  const [led, setLed] = useState("");
  const [citySlug, setCitySlug] = useState("");
  const [cityName, setCityName] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [attribution, setAttribution] = useState<Attribution>({});
  /** Whitelist match from ?miasto= — personalizes the H1. */
  const [prefillCity, setPrefillCity] = useState<WycenaCity | null>(null);

  const mountedAt = useRef<number | null>(null);
  const startFired = useRef(false);
  /** Steps already reported — back-and-forth must not re-fire events. */
  const stepsFired = useRef<Set<number>>(new Set());
  const progressRef = useRef<HTMLParagraphElement>(null);
  const prevStep = useRef(step);

  useEffect(() => {
    mountedAt.current = Date.now();

    const params = new URLSearchParams(window.location.search);

    // City prefill — whitelist only, the raw param is never rendered
    const miasto = params.get("miasto");
    if (miasto) {
      const match = cities.find((c) => c.slug === miasto);
      if (match) {
        setCitySlug(match.slug);
        setPrefillCity(match);
      }
    }

    // Attribution capture. A landing WITH ad params overwrites the store
    // (it's a fresh tagged click); without params the stored first-landing
    // values survive internal navigation back to /wycena.
    try {
      const found: Attribution = {};
      for (const key of ATTRIBUTION_KEYS) {
        const value = params.get(key);
        if (value) found[key] = value.slice(0, 300);
      }
      if (Object.keys(found).length > 0) {
        sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(found));
        setAttribution(found);
      } else {
        const stored = sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
        if (stored) setAttribution(JSON.parse(stored) as Attribution);
      }
    } catch {
      /* sessionStorage unavailable — submit still works, just untagged */
    }
  }, [cities]);

  // The step buttons unmount on transition, which would silently drop
  // keyboard/screen-reader focus to <body> — re-anchor it on the
  // progress line instead.
  useEffect(() => {
    if (prevStep.current !== step) {
      prevStep.current = step;
      progressRef.current?.focus();
    }
  }, [step]);

  const markStarted = () => {
    if (startFired.current) return;
    startFired.current = true;
    track("wycena_form_start");
  };

  /** Advance after completing `completed` — fires the step event once. */
  const completeStep = (completed: 1 | 2 | 3, next: 2 | 3 | 4) => {
    if (!stepsFired.current.has(completed)) {
      stepsFired.current.add(completed);
      track("wycena_form_step", { step: completed });
    }
    setStep(next);
  };

  const selectRoom = (value: string) => {
    markStarted();
    setRoom(value);
    completeStep(1, 2);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    const errors: FieldErrors = {};
    if (!name.trim()) errors.name = "Podaj imię.";
    if (!phone.trim()) {
      errors.phone = "Podaj numer telefonu.";
    } else if (!isValidPolishPhone(phone)) {
      errors.phone = "Podaj poprawny polski numer telefonu (9 cyfr).";
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = "Podaj poprawny adres e-mail lub zostaw pole puste.";
    }
    if (!consent) errors.consent = "Zgoda jest wymagana, abyśmy mogli oddzwonić.";
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/wycena", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          room,
          area,
          led,
          city: citySlug,
          cityName: citySlug === "inna" ? cityName.trim() : "",
          consent: true,
          ...attribution,
          website: honeypot,
          formMs: mountedAt.current ? Date.now() - mountedAt.current : null,
        }),
      });
      if (!res.ok) throw new Error(`Server responded ${res.status}`);

      // The key conversion — exactly once per lead, before the redirect.
      // track() fans out to GA4 (Google Ads conversion import), PostHog,
      // and Meta Pixel "Lead" (marketing-consent-gated in lib/analytics).
      track("wycena_form_submit", {
        room,
        area,
        led: led || "nie-podano",
        city: citySlug || "nie-podano",
        ...attribution,
      });
      try {
        sessionStorage.setItem(LEAD_FLAG_STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      router.push("/wycena/dziekujemy");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error("[wycena form] submit failed:", err);
      setStatus("error");
    }
  };

  const tileBase =
    "rounded border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red";
  const tileIdle =
    "border-white/15 bg-transparent text-white/80 hover:border-white/40 hover:text-white";
  const tileActive = "border-red bg-red/10 text-white";

  return (
    <section
      id="formularz"
      className="relative isolate overflow-hidden bg-bg pb-14 pt-[104px] md:pb-20 md:pt-[136px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 75% 20%, rgba(225,16,26,0.14), transparent 60%)",
        }}
      />

      <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Copy block — compact on mobile so the form stays above the fold */}
          <div>
            <h1 className="font-display text-[clamp(30px,7.5vw,64px)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
              {prefillCity ? (
                <>
                  Bezpłatna wycena{" "}
                  <span className="text-red">— {prefillCity.name}</span>
                </>
              ) : (
                <>
                  Bezpłatna wycena sufitu napinanego{" "}
                  <span className="text-red">w 24 h</span>
                </>
              )}
            </h1>

            <p className="mt-3 text-[13px] font-medium uppercase tracking-[0.14em] text-white/55 md:mt-5">
              Producent z Polski · Gwarancja do 15 lat · Bezszwowe do 6,5 m
            </p>

            <p className="mt-4 hidden max-w-[440px] text-[17px] leading-[1.55] text-white/55 lg:block">
              Cztery krótkie kroki — mniej niż minuta. Przygotujemy wycenę
              i oddzwonimy w ciągu 24 godzin w dni robocze. Pomiar i wycena
              są bezpłatne i bez zobowiązań.
            </p>
          </div>

          {/* Form card */}
          <form
            onSubmit={onSubmit}
            onFocusCapture={markStarted}
            onPointerDownCapture={markStarted}
            noValidate
            aria-label="Formularz bezpłatnej wyceny"
            className="rounded-lg border border-white/10 bg-bg-card/60 p-5 md:p-7"
          >
            {/* Progress */}
            <div className="mb-5">
              <div aria-hidden="true" className="flex gap-1.5">
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      s <= step ? "bg-red" : "bg-white/15"
                    }`}
                  />
                ))}
              </div>
              <p
                ref={progressRef}
                tabIndex={-1}
                className="mt-2.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white/55 focus:outline-none"
              >
                Krok {step} z 4 · {STEP_TITLES[step - 1]}
              </p>
            </div>

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
              <label htmlFor="wycena-website">Website (leave empty)</label>
              <input
                id="wycena-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            {/* Attribution — hidden fields mirror what the JSON body sends */}
            {ATTRIBUTION_KEYS.map((key) =>
              attribution[key] ? (
                <input
                  key={key}
                  type="hidden"
                  name={key}
                  value={attribution[key]}
                />
              ) : null
            )}

            {/* ── Step 1: Pomieszczenie ── */}
            {step === 1 && (
              <fieldset>
                <legend className="mb-3 text-[15px] font-semibold text-white">
                  Gdzie planujesz sufit napinany?
                </legend>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {ROOMS.map((r) => (
                    <button
                      key={r.value}
                      type="button"
                      onClick={() => selectRoom(r.value)}
                      aria-pressed={room === r.value}
                      className={`flex min-h-[84px] flex-col items-center justify-center gap-1.5 p-3 ${tileBase} ${
                        room === r.value ? tileActive : tileIdle
                      }`}
                    >
                      <span aria-hidden="true" className="text-2xl">
                        {r.icon}
                      </span>
                      {r.label}
                    </button>
                  ))}
                </div>
              </fieldset>
            )}

            {/* ── Step 2: Metraż + LED ── */}
            {step === 2 && (
              <div className="space-y-5">
                <fieldset>
                  <legend className="mb-3 text-[15px] font-semibold text-white">
                    Jaka powierzchnia sufitu?
                  </legend>
                  <div className="grid grid-cols-2 gap-2">
                    {AREAS.map((a) => (
                      <button
                        key={a.value}
                        type="button"
                        onClick={() => setArea(a.value)}
                        aria-pressed={area === a.value}
                        className={`px-3 py-3.5 ${tileBase} ${
                          area === a.value ? tileActive : tileIdle
                        }`}
                      >
                        {a.label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="mb-3 text-[15px] font-semibold text-white">
                    Podświetlenie LED?{" "}
                    <span className="font-normal text-white/45">
                      (opcjonalnie)
                    </span>
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {LED_OPTIONS.map((o) => (
                      <button
                        key={o.value}
                        type="button"
                        onClick={() => setLed(led === o.value ? "" : o.value)}
                        aria-pressed={led === o.value}
                        className={`rounded-full px-4 py-2.5 ${tileBase} ${
                          led === o.value ? tileActive : tileIdle
                        }`}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <StepNav
                  onBack={() => setStep(1)}
                  onNext={() => completeStep(2, 3)}
                  nextDisabled={!area}
                />
              </div>
            )}

            {/* ── Step 3: Miasto ── */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="wycena-city"
                    className="mb-3 block text-[15px] font-semibold text-white"
                  >
                    W jakim mieście?
                  </label>
                  <select
                    id="wycena-city"
                    name="city"
                    value={citySlug}
                    onChange={(e) => setCitySlug(e.target.value)}
                    className="w-full rounded border border-white/15 bg-transparent px-4 py-3.5 text-sm text-white transition-colors focus:border-red focus:outline-none"
                  >
                    <option value="" className="bg-bg">
                      Wybierz miasto
                    </option>
                    {cities.map((c) => (
                      <option key={c.slug} value={c.slug} className="bg-bg">
                        {c.name}
                      </option>
                    ))}
                    <option value="inna" className="bg-bg">
                      Inna miejscowość
                    </option>
                  </select>
                </div>

                {citySlug === "inna" && (
                  <div>
                    <label htmlFor="wycena-city-name" className="sr-only">
                      Nazwa miejscowości
                    </label>
                    <input
                      id="wycena-city-name"
                      name="cityName"
                      type="text"
                      value={cityName}
                      onChange={(e) => setCityName(e.target.value)}
                      placeholder="Wpisz miejscowość (opcjonalnie)"
                      autoComplete="address-level2"
                      className="w-full rounded border border-white/15 bg-transparent px-4 py-3.5 text-sm text-white transition-colors placeholder:text-white/45 focus:border-red focus:outline-none"
                    />
                  </div>
                )}

                <StepNav
                  onBack={() => setStep(2)}
                  onNext={() => completeStep(3, 4)}
                  nextDisabled={!citySlug}
                />
              </div>
            )}

            {/* ── Step 4: Kontakt ── */}
            {step === 4 && (
              <div className="space-y-3">
                <ContactField
                  id="wycena-name"
                  label="Imię *"
                  name="name"
                  value={name}
                  onChange={setName}
                  error={fieldErrors.name}
                  autoComplete="given-name"
                />
                <ContactField
                  id="wycena-phone"
                  label="Telefon *"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={setPhone}
                  error={fieldErrors.phone}
                  autoComplete="tel"
                />
                <ContactField
                  id="wycena-email"
                  label="E-mail (opcjonalnie)"
                  name="email"
                  type="email"
                  inputMode="email"
                  value={email}
                  onChange={setEmail}
                  error={fieldErrors.email}
                  autoComplete="email"
                />

                <div>
                  <label className="flex items-start gap-3 text-[12px] leading-[1.5] text-white/65">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 size-4 shrink-0 accent-red"
                    />
                    <span>
                      Wyrażam zgodę na przetwarzanie moich danych w celu
                      przygotowania wyceny i kontaktu zwrotnego, zgodnie z{" "}
                      <Link
                        href="/polityka-prywatnosci"
                        className="underline decoration-white/30 underline-offset-2 transition-colors hover:text-white"
                      >
                        polityką prywatności
                      </Link>
                      . *
                    </span>
                  </label>
                  {fieldErrors.consent && (
                    <p role="alert" className="mt-1.5 text-xs text-red">
                      {fieldErrors.consent}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 w-full rounded bg-red px-4 py-4 font-display text-sm font-semibold uppercase tracking-[0.04em] text-white transition-colors hover:bg-red-deep disabled:opacity-60"
                >
                  {status === "submitting"
                    ? "Wysyłanie…"
                    : "Wyślij i otrzymaj wycenę"}
                </button>

                {status === "error" && (
                  <p role="alert" className="text-xs leading-[1.5] text-red">
                    Nie udało się wysłać zgłoszenia. Zadzwoń do nas:{" "}
                    <a
                      href={`tel:${siteConfig.contact.phonePL}`}
                      className="font-semibold underline underline-offset-2"
                    >
                      +48 730 700 333
                    </a>
                    .
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="text-[13px] font-medium text-white/55 transition-colors hover:text-white"
                >
                  ← Wstecz
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

/* Back / Dalej row for the middle steps */
function StepNav({
  onBack,
  onNext,
  nextDisabled,
}: {
  onBack: () => void;
  onNext: () => void;
  nextDisabled: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 pt-1">
      <button
        type="button"
        onClick={onBack}
        className="text-[13px] font-medium text-white/55 transition-colors hover:text-white"
      >
        ← Wstecz
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        className="rounded-full bg-red px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-deep disabled:cursor-not-allowed disabled:opacity-40"
      >
        Dalej →
      </button>
    </div>
  );
}

/* Labeled input with inline error */
function ContactField({
  id,
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  inputMode,
  autoComplete,
}: {
  id: string;
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  inputMode?: "tel" | "email";
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        className={`w-full rounded border bg-transparent px-4 py-3.5 text-sm text-white transition-colors placeholder:text-white/45 focus:outline-none ${
          error ? "border-red" : "border-white/15 focus:border-red"
        }`}
      />
      {error && (
        <p role="alert" className="mt-1.5 text-xs text-red">
          {error}
        </p>
      )}
    </div>
  );
}
