/**
 * City landing page — dynamic route.
 * File path: /app/sufity-napinane/[miasto]/page.tsx
 *
 * Renders one landing page per Polish city using data from /content/cities.ts.
 * Statically generated at build time via generateStaticParams. Every entry
 * must pass the uniqueness gate (scripts/city-gate.ts, run in `prebuild`)
 * before a build succeeds — thin or templated clones are rejected.
 *
 * To add a new city: add an entry to /content/cities.ts AND to `citySlugs`
 * in /lib/i18n-routes.ts (sitemap + hreflang). This file doesn't change.
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { TrackedCTA } from "@/components/ui/tracked-cta";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCTA } from "@/components/sections/mobile-sticky-cta";
import { JsonLd } from "@/components/seo/json-ld";

import { cities } from "@/content/cities";
import {
  CITY_PRICE_FROM_PLN,
  formatTravel,
  isSilesian,
  nearbyCities,
} from "@/lib/cities";
import {
  findCity,
  cityPaths,
  languageAlternates,
  routes,
} from "@/lib/i18n-routes";
import { buildBreadcrumbs, buildCityService, buildFaqPage } from "@/lib/schema";
import { defaultOgImages, siteConfig } from "@/lib/site-config";
import { miastaCount } from "@/lib/plural";
import { ensureCityGate } from "@/lib/city-gate-input";

const BASE_URL = siteConfig.url;

type CityRouteParams = { miasto: string };

// Statically generate one page per city at build time
export function generateStaticParams(): CityRouteParams[] {
  // Fails `next build` when any city entry is thin, templated or unregistered.
  ensureCityGate();
  return cities.map((city) => ({ miasto: city.slug }));
}

function fallbackDescription(locative: string): string {
  return `Sufity napinane ${locative}: PVC z naszej fabryki w Częstochowie, poliester z Belgii. Montaż w 1 dzień, bez kurzu, do 15 lat gwarancji. Bezpłatny pomiar i wycena.`;
}

// Per-city metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<CityRouteParams>;
}): Promise<Metadata> {
  const { miasto } = await params;
  const city = cities.find((c) => c.slug === miasto);
  if (!city) return {};

  const i18nEntry = findCity("pl", miasto);
  const title =
    city.metaTitle ?? `Sufity napinane ${city.name} — montaż w 1 dzień`;
  const description =
    city.metaDescription ?? fallbackDescription(city.locative);
  const ogImages = city.image.startsWith("/")
    ? [{ url: city.image, alt: city.imageAlt }]
    : defaultOgImages;

  return {
    // Absolute: the per-city title already carries the search phrase and
    // the " | Stretch Sufit" suffix would push it past 60 characters.
    title: { absolute: title },
    description,
    alternates: {
      canonical: `/sufity-napinane/${city.slug}`,
      languages: i18nEntry
        ? languageAlternates(cityPaths(i18nEntry))
        : undefined,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${BASE_URL}/sufity-napinane/${city.slug}`,
      locale: "pl_PL",
      images: ogImages,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<CityRouteParams>;
}) {
  const { miasto } = await params;
  const city = cities.find((c) => c.slug === miasto);
  if (!city) notFound();

  const silesian = isSilesian(city);
  const genitive = city.genitive ?? city.name;
  const otherCities = nearbyCities(city, cities, 8);
  const pageUrl = `${BASE_URL}/sufity-napinane/${city.slug}`;
  const wycenaHref = `/wycena?miasto=${city.slug}`;
  const ctaProps = { city: city.slug, region: city.region };
  const description =
    city.metaDescription ?? fallbackDescription(city.locative);

  // JSON-LD: Service offered in this city (provider = the single
  // organization node from the root layout) + BreadcrumbList + FAQPage
  const serviceSchema = buildCityService({
    url: pageUrl,
    name: `Sufity napinane ${city.locative}`,
    serviceType: "Montaż sufitów napinanych",
    description,
    areaServed: [city.name, ...(city.nearbyTowns ?? [])],
    priceFromPLN: CITY_PRICE_FROM_PLN,
  });

  const breadcrumbSchema = buildBreadcrumbs([
    { name: "Strona główna", url: BASE_URL },
    { name: "Sufity napinane", url: `${BASE_URL}/sufity-napinane` },
    ...(silesian
      ? [{ name: "Śląsk", url: `${BASE_URL}${routes.slask.pl}` }]
      : []),
    { name: city.name, url: pageUrl },
  ]);

  const faqSchema = buildFaqPage(
    city.faq.map((item) => ({ question: item.q, answer: item.a }))
  );

  const sections = city.sections ?? [];
  const nearbyTowns = city.nearbyTowns ?? [];

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

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
              <li>
                <Link href="/sufity-napinane" className="hover:text-white">
                  Sufity napinane
                </Link>
              </li>
              {silesian && (
                <>
                  <li aria-hidden="true">·</li>
                  <li>
                    <Link href={routes.slask.pl} className="hover:text-white">
                      Śląsk
                    </Link>
                  </li>
                </>
              )}
              <li aria-hidden="true">·</li>
              <li className="text-white" aria-current="page">
                {city.name}
              </li>
            </ol>
          </Container>
        </nav>

        {/* ════════ Hero — rendered without FadeIn so the H1 and the
            priority image are real LCP candidates ════════ */}
        <section className="relative isolate overflow-hidden bg-bg pb-20 pt-12 md:pb-28 md:pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 15% 20%, rgba(225,16,26,0.08), transparent 55%)",
            }}
          />
          <Container>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-7">
                <Eyebrow>
                  {city.isHq ? "Centrala · Śląskie" : city.region} ·{" "}
                  {city.populationDisplay}
                </Eyebrow>
                <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                  Sufity napinane{" "}
                  <span className="it text-paper">{city.locative}.</span>
                  <br />
                  <span className="text-red">Montaż w 1 dzień.</span>
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                  {city.intro}
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <TrackedCTA
                    event="cta_wycena"
                    props={{ location: "city_hero", ...ctaProps }}
                    href={wycenaHref}
                    className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-4 font-display text-base font-semibold text-white transition-transform hover:scale-[1.02]"
                  >
                    Bezpłatna wycena w 24 h →
                  </TrackedCTA>
                  <TrackedCTA
                    event="phone_click"
                    props={{ location: "city_hero", ...ctaProps }}
                    href={`tel:${siteConfig.contact.phonePL}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/5"
                  >
                    +48 730 700 333
                  </TrackedCTA>
                </div>
              </div>
              <div className="md:col-span-5">
                <figure className="relative isolate aspect-[4/5] overflow-hidden rounded bg-bg-soft">
                  <Image
                    src={city.image}
                    alt={city.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                  />
                  <figcaption className="absolute bottom-4 left-4 right-4 z-10 font-serif text-sm italic text-white">
                    — {city.imageCaption ?? "Sufit napinany — realizacja Stretch Sufit"}
                  </figcaption>
                </figure>
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ Stats strip ════════ */}
        <section className="border-y border-white/10 bg-bg-soft py-14 md:py-16">
          <Container>
            <div className="grid grid-cols-3 gap-x-6 gap-y-8">
              <FadeIn>
                <div>
                  <div className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.02em] text-white">
                    1 dzień
                  </div>
                  <div className="mt-3 text-sm text-white/60">
                    Montaż{" "}
                    <span className="it text-white/40">
                      — kompletna realizacja
                    </span>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={80}>
                <div>
                  <div className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.02em] text-white">
                    do 15 lat
                  </div>
                  <div className="mt-3 text-sm text-white/60">
                    Gwarancja{" "}
                    <span className="it text-white/40">
                      — 15 lat PVC · 10 lat poliester
                    </span>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={160}>
                {city.isHq ? (
                  <div>
                    <div className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.02em] text-white">
                      0 km
                    </div>
                    <div className="mt-3 text-sm text-white/60">
                      Fabryka i showroom{" "}
                      <span className="it text-white/40">
                        — ul. Legionów 59
                      </span>
                    </div>
                  </div>
                ) : (
                  <Link
                    href="/sufity-napinane/czestochowa"
                    className="group block"
                  >
                    <div className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.02em] text-white">
                      {city.distanceFromHq} km
                    </div>
                    <div className="mt-3 text-sm text-white/60 group-hover:text-white">
                      Od fabryki w Częstochowie{" "}
                      {city.travel && (
                        <span className="it text-white/40">
                          — {formatTravel(city.travel.minutes)}
                          {city.travel.route ? ` · ${city.travel.route}` : ""}
                        </span>
                      )}
                    </div>
                  </Link>
                )}
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* ════════ Trust blocks ════════ */}
        <section className="text-bg bg-paper py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <Eyebrow tone="on-paper">Dlaczego my</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-bg">
                  Trzy powody, dla których klienci{" "}
                  <span className="it">{city.locative}</span>
                  <br />
                  <span className="text-red">wybierają Stretch Sufit.</span>
                </SectionTitle>
              </FadeIn>
            </div>

            <div className="mt-16 grid gap-8 md:mt-20 md:grid-cols-3 md:gap-10">
              {city.trustBlocks.map((block, i) => (
                <FadeIn delay={120 + i * 80} key={block.title}>
                  <div className="rounded border border-bg/10 bg-paper-2 p-7">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                      0{i + 1}
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold leading-tight text-bg">
                      {block.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-bg/75">
                      {block.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* ════════ Long-form sections (long-tail: łazienka, biuro, cennik, LED …) ════════ */}
        {sections.length > 0 && (
          <section className="bg-bg py-24 md:py-32">
            <Container>
              <div className="mx-auto max-w-3xl">
                <FadeIn>
                  <Eyebrow>Sufity napinane {city.locative} — w praktyce</Eyebrow>
                </FadeIn>
                <div className="mt-10 space-y-16 md:space-y-20">
                  {sections.map((section, i) => (
                    <FadeIn delay={60 + i * 40} key={section.heading}>
                      <article>
                        <h2 className="font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-3xl">
                          {section.heading}
                        </h2>
                        {section.body.split(/\n\n+/).map((paragraph, pi) => (
                          <p
                            key={pi}
                            className="mt-5 text-[16px] leading-relaxed text-white/70 md:text-[17px]"
                          >
                            {paragraph}
                          </p>
                        ))}
                        {section.links && section.links.length > 0 && (
                          <ul className="mt-6 flex flex-wrap gap-2">
                            {section.links.map((link) => (
                              <li key={link.href}>
                                <Link
                                  href={link.href}
                                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-display text-sm text-white/85 transition-colors hover:border-red/60 hover:text-white"
                                >
                                  {link.label} →
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </article>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* ════════ Districts ════════ */}
        {city.districts.length > 0 && (
          <section className="bg-bg-soft py-24 md:py-32">
            <Container>
              <div className="grid gap-12 md:grid-cols-12 md:gap-16">
                <div className="md:col-span-5">
                  <FadeIn>
                    <Eyebrow>Dzielnice</Eyebrow>
                  </FadeIn>
                  <FadeIn delay={80}>
                    <SectionTitle className="mt-5 text-white">
                      Pełna obsługa{" "}
                      <span className="it text-paper">{city.locative}.</span>
                    </SectionTitle>
                  </FadeIn>
                  <FadeIn delay={140}>
                    <p className="mt-6 text-lg leading-relaxed text-white/70">
                      Montujemy w każdej dzielnicy {genitive} — od nowych
                      apartamentowców po starsze kamienice i bloki.
                    </p>
                  </FadeIn>
                </div>

                <div className="md:col-span-7">
                  <FadeIn delay={120}>
                    <ul className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                      {city.districts.map((district) => (
                        <li
                          key={district}
                          className="flex items-center gap-3 border-b border-white/10 py-3 font-display text-base text-white/85"
                        >
                          <span className="text-red">●</span>
                          {district}
                        </li>
                      ))}
                    </ul>
                  </FadeIn>
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* ════════ Nearby towns (served from this city, no own page) ════════ */}
        {nearbyTowns.length > 0 && (
          <section className="text-bg bg-paper-2 py-20 md:py-24">
            <Container>
              <div className="grid gap-10 md:grid-cols-12 md:gap-16">
                <div className="md:col-span-5">
                  <FadeIn>
                    <Eyebrow tone="on-paper">Dojazd</Eyebrow>
                  </FadeIn>
                  <FadeIn delay={80}>
                    <h2 className="mt-5 font-display text-2xl font-semibold tracking-[-0.02em] text-bg md:text-3xl">
                      {silesian && !city.isHq
                        ? "Aglomeracja śląska — "
                        : `Okolice ${genitive} — `}
                      <span className="it">dojeżdżamy też do:</span>
                    </h2>
                  </FadeIn>
                  {city.travel?.noTravelFee && (
                    <FadeIn delay={140}>
                      <p className="mt-6 text-[15px] leading-relaxed text-bg/70">
                        Bez osobnej opłaty za dojazd — {city.name}{" "}
                        {city.isHq ? "to siedziba naszej fabryki" : "leży w strefie do 100 km od naszej fabryki w Częstochowie"}
                        . Pomiar i wycena są bezpłatne.
                      </p>
                    </FadeIn>
                  )}
                </div>
                <div className="md:col-span-7">
                  <FadeIn delay={120}>
                    <ul className="flex flex-wrap gap-2">
                      {nearbyTowns.map((town) => (
                        <li
                          key={town}
                          className="rounded-full border border-bg/15 bg-white/60 px-4 py-2 font-display text-sm text-bg/85"
                        >
                          {town}
                        </li>
                      ))}
                    </ul>
                  </FadeIn>
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* ════════ FAQ ════════ */}
        <section className="bg-bg-soft py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl">
              <FadeIn>
                <Eyebrow>FAQ — sufity napinane {city.locative}</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-white">
                  Najczęstsze{" "}
                  <span className="it text-paper">pytania.</span>
                </SectionTitle>
              </FadeIn>

              <div className="mt-12 space-y-2">
                {city.faq.map((item, i) => (
                  <FadeIn delay={120 + i * 50} key={item.q}>
                    <details className="group rounded border border-white/10 bg-bg-card/40 p-6 transition-colors hover:border-white/20 open:border-red/40">
                      <summary className="flex cursor-pointer items-start justify-between gap-4 font-display text-base font-semibold text-white md:text-lg">
                        <span>{item.q}</span>
                        <span
                          aria-hidden="true"
                          className="mt-1 text-red transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-4 text-[15px] leading-relaxed text-white/70">
                        {item.a}
                      </p>
                    </details>
                  </FadeIn>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ Other cities ════════ */}
        <section className="bg-bg py-20 md:py-24">
          <Container>
            <FadeIn>
              <Eyebrow>Obsługujemy też</Eyebrow>
            </FadeIn>
            <FadeIn delay={80}>
              <h2 className="mt-5 font-display text-2xl font-semibold tracking-[-0.02em] text-white md:text-3xl">
                {silesian ? (
                  <>
                    Sufity napinane na Śląsku —{" "}
                    <span className="it text-paper">inne miasta.</span>
                  </>
                ) : (
                  <>
                    Inne miasta —{" "}
                    <span className="it text-paper">
                      {miastaCount(cities.length)} w Polsce.
                    </span>
                  </>
                )}
              </h2>
            </FadeIn>
            <FadeIn delay={120}>
              <div className="mt-10 flex flex-wrap gap-2">
                {otherCities.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/sufity-napinane/${other.slug}`}
                    className="rounded-full border border-white/15 px-4 py-2 font-display text-sm text-white/80 transition-colors hover:border-red/60 hover:text-white"
                  >
                    Sufity napinane {other.name}
                  </Link>
                ))}
                {silesian && (
                  <Link
                    href={routes.slask.pl}
                    className="rounded-full border border-white/15 px-4 py-2 font-display text-sm text-white/80 transition-colors hover:border-red/60 hover:text-white"
                  >
                    Cały Śląsk →
                  </Link>
                )}
                <Link
                  href="/sufity-napinane"
                  className="rounded-full border border-red bg-red/10 px-4 py-2 font-display text-sm text-red transition-colors hover:bg-red hover:text-white"
                >
                  Wszystkie miasta →
                </Link>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* ════════ Final CTA ════════ */}
        <section className="relative isolate overflow-hidden bg-red py-24 text-white md:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(0,0,0,0.2), transparent 50%)",
            }}
          />
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">
                {silesian ? "Showroom w Częstochowie" : "Zamów pomiar"}
              </Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Nowy sufit <span className="it">{city.locative}.</span>
                <br />
                {silesian ? (
                  city.isHq ? (
                    <>
                      <span className="text-white/85">Fabryka i showroom</span>{" "}
                      <span className="it">przy ul. Legionów 59.</span>
                    </>
                  ) : (
                    <>
                      <span className="text-white/85">Showroom</span>{" "}
                      <span className="it">
                        {city.distanceFromHq} km od {genitive}.
                      </span>
                    </>
                  )
                ) : (
                  <>
                    <span className="text-white/85">Bezpłatny pomiar,</span>{" "}
                    <span className="it">oddzwonienie w 24 h.</span>
                  </>
                )}
              </h2>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <TrackedCTA
                  event="cta_wycena"
                  props={{ location: "city_final", ...ctaProps }}
                  href={wycenaHref}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Bezpłatna wycena w 24 h →
                </TrackedCTA>
                {silesian ? (
                  <TrackedCTA
                    event="showroom_click"
                    props={{ location: "city_final", ...ctaProps }}
                    href="/kontakt#showroom"
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Umów wizytę w showroomie →
                  </TrackedCTA>
                ) : (
                  <TrackedCTA
                    event="phone_click"
                    props={{ location: "city_final", ...ctaProps }}
                    href={`tel:${siteConfig.contact.phonePL}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    +48 730 700 333
                  </TrackedCTA>
                )}
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <MobileStickyCTA city={city.slug} />
    </>
  );
}
