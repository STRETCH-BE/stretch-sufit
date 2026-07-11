/**
 * City landing page — dynamic route.
 * File path: /app/sufity-napinane/[miasto]/page.tsx
 *
 * Renders one landing page per Polish city using data from /content/cities.ts.
 * Statically generated at build time via generateStaticParams — all 17 pages
 * ship as pre-rendered HTML, so they're fast and SEO-friendly.
 *
 * To add a new city: add an entry to /content/cities.ts. This file doesn't need
 * to change.
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCTA } from "@/components/sections/mobile-sticky-cta";
import { JsonLd } from "@/components/seo/json-ld";

import { cities } from "@/content/cities";
import { findCity, cityPaths, languageAlternates } from "@/lib/i18n-routes";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://altodesign.pl";

type CityRouteParams = { miasto: string };

// Statically generate one page per city at build time
export function generateStaticParams(): CityRouteParams[] {
  return cities.map((city) => ({ miasto: city.slug }));
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

  const title = `Sufity napinane ${city.locative} — montaż w 1 dzień | Stretch Sufit`;
  const description = `Sufity napinane ${city.locative} — PVC z naszej fabryki w Polsce, polyester z Belgii. Część Stretchgroup. Montaż w 1 dzień, bez kurzu, do 15 lat gwarancji. Bezpłatny pomiar. ${city.populationDisplay}, pełna obsługa miasta.`;

  return {
    title,
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

  const otherCities = cities.filter((c) => c.slug !== city.slug).slice(0, 6);

  // JSON-LD: LocalBusiness for this city + BreadcrumbList + FAQPage
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/sufity-napinane/${city.slug}#business`,
    name: `Stretch Sufit — ${city.name}`,
    description: `Sufity napinane ${city.locative}. Belgijska technologia, polska produkcja.`,
    url: `${BASE_URL}/sufity-napinane/${city.slug}`,
    telephone: "+48730700333",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Legionów 59",
      addressLocality: "Częstochowa",
      postalCode: "42-200",
      addressCountry: "PL",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    priceRange: "$$",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sufity napinane",
        item: `${BASE_URL}/sufity-napinane`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: city.name,
        item: `${BASE_URL}/sufity-napinane/${city.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <JsonLd data={localBusinessSchema} />
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
                <Link
                  href="/sufity-napinane"
                  className="hover:text-white"
                >
                  Sufity napinane
                </Link>
              </li>
              <li aria-hidden="true">·</li>
              <li className="text-white" aria-current="page">
                {city.name}
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
                "radial-gradient(ellipse at 15% 20%, rgba(225,16,26,0.08), transparent 55%)",
            }}
          />
          <Container>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-7">
                <FadeIn>
                  <Eyebrow>
                    {city.region} · {city.populationDisplay}
                  </Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                    Sufity napinane{" "}
                    <span className="it text-paper">{city.locative}.</span>
                    <br />
                    <span className="text-red">Montaż w 1 dzień.</span>
                  </h1>
                </FadeIn>
                <FadeIn delay={160}>
                  <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                    {city.intro}
                  </p>
                </FadeIn>
                <FadeIn delay={220}>
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <Link
                      href="/#cta"
                      className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-4 font-display text-base font-semibold text-white transition-transform hover:scale-[1.02]"
                    >
                      Zamów bezpłatny pomiar →
                    </Link>
                    <a
                      href="tel:+48730700333"
                      className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/5"
                    >
                      +48 730 700 333
                    </a>
                  </div>
                </FadeIn>
              </div>
              <div className="md:col-span-5">
                <FadeIn delay={120}>
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
                    <figcaption className="absolute bottom-4 left-4 z-10 font-serif text-sm italic text-white">
                      — Realizacja, {city.name}
                    </figcaption>
                  </figure>
                </FadeIn>
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
                    <span className="it text-white/40">— 15 lat PVC · 10 lat polyester</span>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={160}>
                <div>
                  <div className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.02em] text-white">
                    {city.distanceFromHq === 0
                      ? "0 km"
                      : `${city.distanceFromHq} km`}
                  </div>
                  <div className="mt-3 text-sm text-white/60">
                    {city.distanceFromHq === 0 ? "Centrala" : "Od centrali"}{" "}
                    <span className="it text-white/40">
                      —{" "}
                      {city.distanceFromHq === 0
                        ? "tutaj jesteśmy"
                        : "Częstochowa"}
                    </span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* ════════ Trust blocks ════════ */}
        <section className="bg-paper py-24 md:py-32">
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

        {/* ════════ Districts (only for top 3 cities) ════════ */}
        {city.districts.length > 0 && (
          <section className="bg-bg py-24 md:py-32">
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
                      Montujemy w każdej dzielnicy {city.name}
                      {city.slug === "warszawa" ? " i okolicach" : ""} — od
                      apartamentowców po historyczne kamienice.
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
                Inne miasta —{" "}
                <span className="it text-paper">17 lokalizacji w Polsce.</span>
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
                    {other.name}
                  </Link>
                ))}
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
              <Eyebrow tone="on-dark">Zamów pomiar</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Nowy sufit{" "}
                <span className="it">{city.locative}.</span>
                <br />
                <span className="text-white/85">Bezpłatny pomiar,</span>{" "}
                <span className="it">oddzwonienie w 24 h.</span>
              </h2>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#cta"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Zamów bezpłatny pomiar →
                </Link>
                <a
                  href="tel:+48730700333"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  +48 730 700 333
                </a>
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
