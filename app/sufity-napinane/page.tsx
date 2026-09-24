/**
 * Cities hub page — /sufity-napinane
 * File path: /app/sufity-napinane/page.tsx
 *
 * Lists every city with a landing page, grouped by voivodeship. The home
 * region (Śląskie, with the Częstochowa factory) comes first and links to
 * the regional hub /sufity-napinane/slask. Counts are derived from
 * content/cities.ts — never hard-code the number of cities.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { TrackedCTA } from "@/components/ui/tracked-cta";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCTA } from "@/components/sections/mobile-sticky-cta";

import { cities } from "@/content/cities";
import { languageAlternates, routes } from "@/lib/i18n-routes";
import { defaultOgImages, siteConfig } from "@/lib/site-config";
import { miastaCount } from "@/lib/plural";

const BASE_URL = siteConfig.url;
const COUNT = miastaCount(cities.length);

export const metadata: Metadata = {
  title: `Sufity napinane — ${COUNT} w Polsce, producent z Częstochowy`,
  description: `Sufity napinane w ${cities.length} miastach: Śląsk (Katowice, Częstochowa, Gliwice, Sosnowiec), Warszawa, Kraków, Wrocław i więcej. PVC z własnej fabryki, poliester z Belgii. Montaż w 1 dzień.`,
  alternates: {
    canonical: "/sufity-napinane",
    languages: languageAlternates(routes.cities),
  },
  openGraph: {
    title: `Sufity napinane w ${cities.length} miastach Polski | Stretch Sufit`,
    description:
      "Producent z Częstochowy, część belgijskiej Stretchgroup. PVC z własnej fabryki, poliester z Belgii. Montaż w całej Polsce.",
    type: "website",
    url: `${BASE_URL}/sufity-napinane`,
    images: defaultOgImages,
  },
};

// Group cities by region for the hub page — home region first
const regionOrder = [
  "Śląskie",
  "Mazowieckie",
  "Małopolskie",
  "Dolnośląskie",
  "Wielkopolskie",
  "Pomorskie",
  "Łódzkie",
  "Opolskie",
  "Świętokrzyskie",
];

export default function CitiesHubPage() {
  const citiesByRegion = regionOrder
    .map((region) => ({
      region,
      cities: cities
        .filter((c) => c.region === region)
        // factory city first, then by distance from it
        .sort(
          (a, b) =>
            Number(Boolean(b.isHq)) - Number(Boolean(a.isHq)) ||
            a.distanceFromHq - b.distanceFromHq
        ),
    }))
    .filter((group) => group.cities.length > 0);

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
                Sufity napinane
              </li>
            </ol>
          </Container>
        </nav>

        {/* ════════ Hero ════════ */}
        <section className="relative isolate overflow-hidden bg-bg pb-20 pt-12 md:pb-28 md:pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 20% 10%, rgba(225,16,26,0.08), transparent 60%)",
            }}
          />
          <Container>
            <div className="mx-auto max-w-4xl">
              <FadeIn>
                <Eyebrow>{COUNT} · jedna ekipa · fabryka w Częstochowie</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                  Sufity napinane{" "}
                  <span className="it text-paper">w całej Polsce.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={160}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                  Produkujemy folię PVC w Częstochowie i montujemy własnymi
                  ekipami w {COUNT} — od aglomeracji śląskiej, przez Warszawę i
                  Kraków, po Gdańsk. Wybierz swoje miasto, aby zobaczyć czas
                  dojazdu, ceny i odpowiedzi na lokalne pytania.
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* ════════ Cities by region ════════ */}
        <section className="text-bg bg-paper py-24 md:py-32">
          <Container>
            <div className="space-y-16 md:space-y-20">
              {citiesByRegion.map((group, gi) => {
                const home = group.region === "Śląskie";
                return (
                  <FadeIn delay={gi * 60} key={group.region}>
                    <div>
                      <div className="mb-8 flex items-baseline gap-4">
                        <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                          {home
                            ? "● Śląsk i Częstochowa — nasz region"
                            : `Województwo ${group.region.toLowerCase()}`}
                        </h2>
                        <div className="h-px flex-1 bg-bg/10" />
                        <span className="font-mono text-xs text-bg/45">
                          {miastaCount(group.cities.length)}
                        </span>
                      </div>
                      {home && (
                        <p className="mb-8 max-w-3xl text-[15px] leading-relaxed text-bg/70">
                          Fabryka i showroom przy ul. Legionów 59 w
                          Częstochowie, aglomeracja katowicka 60–95 km dalej,
                          Rybnik i Bielsko-Biała nieco ponad godzinę drogi.
                          W strefie do 100 km nie doliczamy osobnej opłaty za
                          dojazd, pomiar w aglomeracji zwykle w 3–5 dni
                          roboczych.{" "}
                          <Link
                            href={routes.slask.pl}
                            className="font-semibold text-red underline-offset-4 hover:underline"
                          >
                            Sufity napinane na Śląsku →
                          </Link>
                        </p>
                      )}
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {group.cities.map((city) => (
                          <Link
                            key={city.slug}
                            href={`/sufity-napinane/${city.slug}`}
                            className="group rounded border border-bg/10 bg-paper-2 p-6 transition-all hover:border-red/40 hover:bg-white"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <div className="font-display text-xl font-semibold tracking-[-0.01em] text-bg">
                                  {city.name}
                                  {city.isHq && (
                                    <span className="ml-2 align-middle rounded-full border border-red/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-red">
                                      Centrala
                                    </span>
                                  )}
                                </div>
                                <div className="mt-2 text-sm text-bg/60">
                                  {city.populationDisplay}
                                </div>
                                <div className="mt-1 text-xs text-bg/45">
                                  {city.isHq
                                    ? "Fabryka i showroom"
                                    : `${city.distanceFromHq} km od Częstochowy`}
                                </div>
                              </div>
                              <span
                                aria-hidden="true"
                                className="text-red transition-transform group-hover:translate-x-1"
                              >
                                →
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ════════ CTA ════════ */}
        <section className="relative isolate overflow-hidden bg-red py-20 text-white md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Nie ma Twojego miasta?</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
                Zadzwoń —{" "}
                <span className="it">sprawdzimy, czy dojedziemy.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Działamy też poza listą miast — przy większych projektach
                dojeżdżamy w całej Polsce.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <TrackedCTA
                  event="phone_click"
                  props={{ location: "cities_hub" }}
                  href={`tel:${siteConfig.contact.phonePL}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  +32 485 48 30 35
                </TrackedCTA>
                <TrackedCTA
                  event="cta_wycena"
                  props={{ location: "cities_hub" }}
                  href="/wycena"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Bezpłatna wycena →
                </TrackedCTA>
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
