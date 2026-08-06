"use client";

/**
 * Cookie consent banner — RODO/GDPR-compliant, trilingual.
 * File path: /components/analytics/cookie-banner.tsx
 *
 * Renders a fixed-bottom banner asking for consent. Hidden once the user
 * has interacted (accept or reject). Two buttons + a link to the policy.
 *
 * The banner is mounted once in the root layout, which wraps all three
 * locale trees — so it localizes itself from the pathname: /en → English,
 * /ua → Ukrainian, anything else → Polish. The privacy policy page exists
 * only in Polish, so all locales link to /polityka-prywatnosci.
 */

import { usePathname } from "next/navigation";

import { useConsent } from "./consent-provider";

type BannerCopy = {
  ariaLabel: string;
  heading: string;
  body: string;
  policyLabel: string;
  accept: string;
  reject: string;
};

const COPY: Record<"pl" | "en" | "ua", BannerCopy> = {
  pl: {
    ariaLabel: "Zgoda na pliki cookies",
    heading: "Używamy plików cookies",
    body: "Pliki cookies pomagają nam mierzyć ruch na stronie i poprawiać Twoje doświadczenie. Możesz wybrać, na co się zgadzasz.",
    policyLabel: "Polityka prywatności",
    accept: "Akceptuj wszystkie",
    reject: "Tylko niezbędne",
  },
  en: {
    ariaLabel: "Cookie consent",
    heading: "We use cookies",
    body: "Cookies help us measure site traffic and improve your experience. You can choose what you agree to.",
    policyLabel: "Privacy policy",
    accept: "Accept all",
    reject: "Essential only",
  },
  ua: {
    ariaLabel: "Згода на файли cookie",
    heading: "Ми використовуємо файли cookie",
    body: "Файли cookie допомагають нам вимірювати відвідуваність сайту та покращувати ваш досвід. Ви можете обрати, на що погоджуєтесь.",
    policyLabel: "Політика конфіденційності",
    accept: "Прийняти всі",
    reject: "Лише необхідні",
  },
};

function localeFromPath(pathname: string | null): "pl" | "en" | "ua" {
  if (!pathname) return "pl";
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/ua" || pathname.startsWith("/ua/")) return "ua";
  return "pl";
}

export function CookieBanner() {
  const { hasInteracted, accept, reject } = useConsent();
  const pathname = usePathname();

  if (hasInteracted) return null;

  const t = COPY[localeFromPath(pathname)];

  return (
    <div
      role="dialog"
      aria-label={t.ariaLabel}
      className="fixed inset-x-3 bottom-3 z-[60] rounded-lg border border-white/10 bg-bg/95 p-5 text-white shadow-2xl backdrop-blur md:inset-x-auto md:bottom-6 md:left-6 md:max-w-md"
    >
      <h2 className="font-display text-base font-semibold">{t.heading}</h2>
      <p className="mt-2 text-sm leading-relaxed text-white/70">
        {t.body}{" "}
        <a
          href="/polityka-prywatnosci"
          className="underline transition-colors hover:text-white"
        >
          {t.policyLabel}
        </a>
        .
      </p>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={() => accept()}
          className="rounded-full bg-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-deep"
        >
          {t.accept}
        </button>
        <button
          type="button"
          onClick={() => reject()}
          className="rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/5"
        >
          {t.reject}
        </button>
      </div>
    </div>
  );
}
