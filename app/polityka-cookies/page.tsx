/**
 * Cookies policy page — /polityka-cookies
 * File path: /app/polityka-cookies/page.tsx
 *
 * Inventory of all cookies/tracking technologies used by the site,
 * organized by category. Required by RODO Art. 13 + ePrivacy Directive.
 *
 * Naming: "polityka cookies" follows current Polish convention
 * (the word "cookies" is used unchanged, more than "ciasteczka" or
 * "pliki cookies"). Most Polish enterprise sites use this exact phrase.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCTA } from "@/components/sections/mobile-sticky-cta";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://altodesign.pl";

const LAST_UPDATED = "14 maja 2026";

export const metadata: Metadata = {
  title: "Polityka cookies | Stretch Sufit",
  description:
    "Pełna informacja o plikach cookies wykorzystywanych w serwisie Stretch Sufit — kategorie, cele, okresy przechowywania, możliwość zarządzania.",
  alternates: { canonical: "/polityka-cookies" },
  robots: { index: true, follow: true },
};

type CookieCategory = {
  id: string;
  title: string;
  required: boolean;
  description: string;
  cookies: {
    name: string;
    provider: string;
    purpose: string;
    duration: string;
  }[];
};

const cookieCategories: CookieCategory[] = [
  {
    id: "niezbedne",
    title: "Cookies niezbędne",
    required: true,
    description:
      "Wymagane do działania strony. Bez nich nie zadziała formularz kontaktowy, mechanizm zgód RODO ani podstawowa nawigacja. Nie można ich wyłączyć.",
    cookies: [
      {
        name: "consent-state",
        provider: "altodesign.pl",
        purpose:
          "Zapisuje Twoje decyzje dotyczące zgód na cookies analityczne i marketingowe.",
        duration: "12 miesięcy",
      },
      {
        name: "next-route-cache",
        provider: "altodesign.pl",
        purpose:
          "Buforowanie odwiedzonych stron w pamięci przeglądarki dla szybszej nawigacji.",
        duration: "Sesja",
      },
    ],
  },
  {
    id: "analityczne",
    title: "Cookies analityczne",
    required: false,
    description:
      "Pomagają zrozumieć, jak odwiedzający korzystają z serwisu — które strony są popularne, gdzie użytkownicy mają trudności, jak skuteczne są kampanie marketingowe. Dane zagregowane, nie służą do identyfikacji konkretnej osoby.",
    cookies: [
      {
        name: "_ga, _ga_*",
        provider: "Google Analytics 4 (Google Ireland Ltd.)",
        purpose:
          "Statystyki ruchu — liczba odwiedzin, źródła, czas spędzony, zachowanie. Adres IP anonimizowany.",
        duration: "13 miesięcy",
      },
      {
        name: "ph_*",
        provider: "PostHog (PostHog Inc., EU instance)",
        purpose:
          "Analityka zdarzeń produktowych — kliknięcia, scroll depth, ścieżki użytkownika. Dane przechowywane w UE.",
        duration: "12 miesięcy",
      },
      {
        name: "_clck, _clsk",
        provider: "Microsoft Clarity (Microsoft Ireland Operations Ltd.)",
        purpose:
          "Heatmapy i nagrania sesji (anonimowe) — pomagają znaleźć błędy UX i poprawić użyteczność strony.",
        duration: "12 miesięcy",
      },
    ],
  },
  {
    id: "marketingowe",
    title: "Cookies marketingowe",
    required: false,
    description:
      "Wykorzystywane do dopasowania reklam i mierzenia skuteczności kampanii reklamowych. Obecnie nie używamy tej kategorii — opcja zarezerwowana na przyszłość, gdyby uruchomione zostały kampanie Meta Ads lub Google Ads z remarketingiem.",
    cookies: [],
  },
];

export default function PolitykaCookiesPage() {
  return (
    <>
      <Nav />

      <main>
        {/* ════════ Breadcrumb ════════ */}
        <nav
          aria-label="breadcrumb"
          className="border-b border-white/5 bg-bg pb-4 pt-28 md:pt-32"
        >
          <Container>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
              <li>
                <Link href="/" className="hover:text-white">
                  Start
                </Link>
              </li>
              <li aria-hidden="true">·</li>
              <li className="text-white" aria-current="page">
                Polityka cookies
              </li>
            </ol>
          </Container>
        </nav>

        {/* ════════ Hero ════════ */}
        <section className="bg-bg pb-12 pt-12 md:pb-16 md:pt-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <Eyebrow>Aktualizacja: {LAST_UPDATED}</Eyebrow>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
                Polityka{" "}
                <span className="it text-paper">cookies.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
                Pełna lista cookies i podobnych technologii używanych w
                serwisie altodesign.pl. Co to za pliki, do czego służą, jak
                długo są przechowywane i jak nimi zarządzać.
              </p>
            </div>
          </Container>
        </section>

        {/* ════════ Categories ════════ */}
        <section className="bg-paper py-20 md:py-24">
          <Container>
            <div className="mx-auto max-w-4xl space-y-14">
              {/* What are cookies — intro */}
              <article>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-bg md:text-3xl">
                  Czym są cookies?
                </h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-bg/80">
                  Cookies (pliki cookies) to małe pliki tekstowe zapisywane
                  przez przeglądarkę na Twoim urządzeniu. Strona internetowa
                  może je odczytać przy kolejnych odwiedzinach, dzięki czemu
                  „pamięta" Twoje preferencje. Same cookies nie zawierają
                  danych identyfikujących Cię osobiście — przechowują anonimowe
                  identyfikatory sesji, ustawienia, zgody RODO.
                </p>
              </article>

              {/* Categories list */}
              {cookieCategories.map((category) => (
                <article key={category.id} id={category.id}>
                  <div className="flex items-baseline gap-4">
                    <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-bg md:text-3xl">
                      {category.title}
                    </h2>
                    {category.required ? (
                      <span className="rounded-full bg-bg/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-bg/70">
                        Wymagane
                      </span>
                    ) : (
                      <span className="rounded-full bg-red/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-red">
                        Opcjonalne · za zgodą
                      </span>
                    )}
                  </div>

                  <p className="mt-5 text-[17px] leading-[1.7] text-bg/80">
                    {category.description}
                  </p>

                  {category.cookies.length > 0 ? (
                    <div className="mt-8 overflow-x-auto">
                      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                        <thead>
                          <tr className="border-b-2 border-bg/15">
                            <th className="pb-3 pr-4 font-mono text-[10px] uppercase tracking-[0.12em] text-bg/55">
                              Nazwa
                            </th>
                            <th className="pb-3 pr-4 font-mono text-[10px] uppercase tracking-[0.12em] text-bg/55">
                              Dostawca
                            </th>
                            <th className="pb-3 pr-4 font-mono text-[10px] uppercase tracking-[0.12em] text-bg/55">
                              Cel
                            </th>
                            <th className="pb-3 font-mono text-[10px] uppercase tracking-[0.12em] text-bg/55">
                              Czas
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {category.cookies.map((cookie) => (
                            <tr
                              key={cookie.name}
                              className="border-b border-bg/10 align-top"
                            >
                              <td className="py-4 pr-4 font-mono text-xs text-bg">
                                {cookie.name}
                              </td>
                              <td className="py-4 pr-4 text-bg/80">
                                {cookie.provider}
                              </td>
                              <td className="py-4 pr-4 text-bg/80">
                                {cookie.purpose}
                              </td>
                              <td className="py-4 text-bg/80">
                                {cookie.duration}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="mt-6 rounded border border-bg/10 bg-paper-2 p-5 text-[15px] text-bg/65">
                      Obecnie nie używamy cookies w tej kategorii. Jeśli się
                      zmieni — zaktualizujemy tę stronę.
                    </div>
                  )}
                </article>
              ))}

              {/* Managing cookies */}
              <article>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-bg md:text-3xl">
                  Jak zarządzać cookies?
                </h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-bg/80">
                  Cookies opcjonalne (analityczne i marketingowe) wymagają
                  Twojej zgody — ustawiasz je przy pierwszej wizycie w banerze
                  zgód RODO. Możesz w każdej chwili zmienić swoje decyzje:
                </p>
                <ul className="mt-6 space-y-3 text-[15px] text-bg/80">
                  <li className="flex gap-3">
                    <span className="text-red">●</span>
                    <span>
                      <strong className="text-bg">W naszym serwisie:</strong>{" "}
                      kliknij „Ustawienia cookies" w stopce — pojawi się
                      ponownie baner z możliwością zmiany.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red">●</span>
                    <span>
                      <strong className="text-bg">W przeglądarce:</strong>{" "}
                      każda przeglądarka pozwala usunąć cookies lub zablokować
                      je dla wybranych witryn (Chrome: Ustawienia → Prywatność,
                      Firefox: Preferencje → Prywatność, Safari: Preferencje →
                      Prywatność).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red">●</span>
                    <span>
                      <strong className="text-bg">Globalnie:</strong>{" "}
                      narzędzia jak{" "}
                      <a
                        href="https://www.youronlinechoices.com/pl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red underline"
                      >
                        Your Online Choices
                      </a>{" "}
                      pozwalają zarządzać preferencjami u wielu dostawców
                      jednocześnie.
                    </span>
                  </li>
                </ul>
                <p className="mt-6 text-[15px] leading-[1.7] text-bg/70">
                  Blokowanie cookies niezbędnych może uniemożliwić korzystanie z
                  niektórych funkcji serwisu (np. wysyłka formularza
                  kontaktowego).
                </p>
              </article>

              {/* Contact + related */}
              <article>
                <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-bg md:text-3xl">
                  Pytania o dane osobowe?
                </h2>
                <p className="mt-5 text-[17px] leading-[1.7] text-bg/80">
                  Cookies to tylko jedna z technologii przetwarzania danych.
                  Pełen opis przetwarzania Twoich danych osobowych znajdziesz w{" "}
                  <Link
                    href="/polityka-prywatnosci"
                    className="text-red underline"
                  >
                    Polityce prywatności
                  </Link>
                  . W razie pytań — napisz na{" "}
                  <a
                    href="mailto:info@altodesign.pl"
                    className="text-red underline"
                  >
                    info@altodesign.pl
                  </a>
                  .
                </p>
              </article>
            </div>
          </Container>
        </section>

        {/* ════════ Footer CTA ════════ */}
        <section className="bg-bg py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-base text-white/65">
                Dokumenty powiązane:
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/polityka-prywatnosci"
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/85 transition-colors hover:border-white/40 hover:text-white"
                >
                  Polityka prywatności
                </Link>
                <Link
                  href="/regulamin"
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/85 transition-colors hover:border-white/40 hover:text-white"
                >
                  Regulamin
                </Link>
                <Link
                  href="/gwarancja"
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/85 transition-colors hover:border-white/40 hover:text-white"
                >
                  Gwarancja
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <MobileStickyCTA />
    </>
  );
}
