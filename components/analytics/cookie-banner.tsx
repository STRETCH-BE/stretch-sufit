"use client";

/**
 * Cookie consent banner — Polish RODO-compliant.
 * File path: /components/analytics/cookie-banner.tsx
 *
 * Renders a fixed-bottom banner asking for consent. Hidden once the user
 * has interacted (accept or reject). Two buttons + a link to the policy.
 */

import { useConsent } from "./consent-provider";

export function CookieBanner() {
  const { hasInteracted, accept, reject } = useConsent();

  if (hasInteracted) return null;

  return (
    <div
      role="dialog"
      aria-label="Zgoda na pliki cookies"
      className="fixed inset-x-3 bottom-3 z-[60] rounded-lg border border-white/10 bg-bg/95 p-5 text-white shadow-2xl backdrop-blur md:inset-x-auto md:bottom-6 md:left-6 md:max-w-md"
    >
      <h2 className="font-display text-base font-semibold">
        Używamy plików cookies
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-white/70">
        Pliki cookies pomagają nam mierzyć ruch na stronie i poprawiać Twoje
        doświadczenie. Możesz wybrać, na co się zgadzasz.{" "}
        <a
          href="/polityka-prywatnosci"
          className="underline transition-colors hover:text-white"
        >
          Polityka prywatności
        </a>
        .
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => accept()}
          className="rounded-full bg-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-deep"
        >
          Akceptuj wszystkie
        </button>
        <button
          type="button"
          onClick={() => reject()}
          className="rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/5"
        >
          Tylko niezbędne
        </button>
      </div>
    </div>
  );
}
