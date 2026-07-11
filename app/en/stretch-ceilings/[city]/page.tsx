/**
 * City page — English. /en/stretch-ceilings/[city]
 * File path: /app/en/stretch-ceilings/[city]/page.tsx
 *
 * For v1, only top 3 cities (warsaw, krakow, wroclaw) have full pages.
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { Nav } from "@/components/sections/en/nav";
import { Footer } from "@/components/sections/en/footer";
import { MobileStickyCTA } from "@/components/sections/en/mobile-sticky-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { buildLocalBusiness, buildBreadcrumbs } from "@/lib/schema";

import { citiesFull } from "@/content/en/cities-full";
import { products } from "@/content/en/products";
import { cityPaths, findCity, languageAlternates } from "@/lib/i18n-routes";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://altodesign.pl";

type CityRouteParams = { city: string };

export function generateStaticParams(): CityRouteParams[] {
  return citiesFull.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<CityRouteParams>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = citiesFull.find((c) => c.slug === citySlug);
  if (!city) return {};

  const i18nEntry = findCity("en", city.slug);

  return {
    title: `Stretch ceilings ${city.locative} | Stretch Sufit ${city.name}`,
    description: `Stretch ceilings ${city.locative} — PVC manufactured in our factory in Poland, polyester from Belgium. Part of Stretchgroup. Installed in 1 day, no dust, up to 15 years warranty. Free measurement. ${city.populationDisplay}, full city coverage.`,
    alternates: {
      canonical: `/en/stretch-ceilings/${city.slug}`,
      languages: i18nEntry
        ? languageAlternates(cityPaths(i18nEntry))
        : undefined,
    },
    openGraph: {
      title: `Stretch ceilings ${city.locative} | Stretch Sufit`,
      description: city.intro,
      type: "website",
      url: `${BASE_URL}/en/stretch-ceilings/${city.slug}`,
      locale: "en_US",
    },
  };
}

export default async function CityPageEn({
  params,
}: {
  params: Promise<CityRouteParams>;
}) {
  const { city: citySlug } = await params;
  const city = citiesFull.find((c) => c.slug === citySlug);
  if (!city) notFound();

  const breadcrumbSchema = buildBreadcrumbs([
    { name: "Home", url: `${BASE_URL}/en` },
    { name: "Stretch ceilings", url: `${BASE_URL}/en/stretch-ceilings` },
    { name: city.name, url: `${BASE_URL}/en/stretch-ceilings/${city.slug}` },
  ]);

  const localBusinessSchema = buildLocalBusiness({
    citySlug: city.slug,
    cityName: city.name,
  });

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
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      <Nav />

      <main>
        <nav
          aria-label="breadcrumb"
          className="border-b border-white/5 bg-bg pb-4 pt-28 md:pt-32"
        >
          <Container>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
              <li><Link href="/en" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">·</li>
              <li><Link href="/en/stretch-ceilings" className="hover:text-white">Stretch ceilings</Link></li>
              <li aria-hidden="true">·</li>
              <li className="text-white" aria-current="page">{city.name}</li>
            </ol>
          </Container>
        </nav>

        <section className="relative isolate overflow-hidden bg-bg pb-16 pt-12 md:pb-20 md:pt-16">
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
                  <Eyebrow>{city.region} · {city.populationDisplay}</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                    Stretch ceilings{" "}
                    <span className="it text-paper">{city.locative}.</span>
                  </h1>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
                    {city.intro}
                  </p>
                </FadeIn>
                <FadeIn delay={200}>
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <Link
                      href="/en#cta"
                      className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-4 font-display text-base font-semibold text-white transition-transform hover:scale-[1.02]"
                    >
                      Free measurement →
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
                  </figure>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-white/10 bg-bg-soft py-14 md:py-16">
          <Container>
            <div className="grid grid-cols-3 gap-x-6 gap-y-8">
              <FadeIn>
                <div>
                  <div className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.02em] text-white">
                    1 day
                  </div>
                  <div className="mt-3 text-sm text-white/60">
                    Installation{" "}
                    <span className="it text-white/40">— complete</span>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={80}>
                <div>
                  <div className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.02em] text-white">
                    up to 15 yrs
                  </div>
                  <div className="mt-3 text-sm text-white/60">
                    Warranty{" "}
                    <span className="it text-white/40">— 15 yr PVC · 10 yr polyester</span>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={160}>
                <div>
                  <div className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-none tracking-[-0.02em] text-white">
                    {city.distanceFromHq === 0 ? "0 km" : `${city.distanceFromHq} km`}
                  </div>
                  <div className="mt-3 text-sm text-white/60">
                    {city.distanceFromHq === 0 ? "HQ" : "From HQ"}{" "}
                    <span className="it text-white/40">— {city.distanceFromHq === 0 ? "we're here" : "Częstochowa"}</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow>Why Stretch Sufit {city.locative}</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Local team,{" "}
                    <span className="it text-paper">national factory.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-7">
                <div className="space-y-6">
                  {city.trustBlocks.map((block, i) => (
                    <FadeIn delay={120 + i * 60} key={block.title}>
                      <div className="border-l-2 border-red/40 pl-6 transition-colors hover:border-red">
                        <div className="font-display text-lg font-semibold tracking-[-0.01em] text-white">
                          {block.title}
                        </div>
                        <p className="mt-2 text-[15px] leading-relaxed text-white/65">
                          {block.body}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {city.districts.length > 0 && (
          <section className="text-bg bg-paper py-24 md:py-32">
            <Container>
              <div className="mx-auto max-w-4xl">
                <FadeIn>
                  <Eyebrow tone="on-paper">Districts we cover</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    We install across{" "}
                    <span className="it">all of {city.name}.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {city.districts.map((district) => (
                      <li
                        key={district}
                        className="rounded border border-bg/10 bg-paper-2 px-4 py-3 text-[14px] font-medium text-bg/80"
                      >
                        {district}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            </Container>
          </section>
        )}

        <section className="bg-bg-soft py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl">
              <FadeIn>
                <Eyebrow>Products available {city.locative}</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-white">
                  Full catalogue —{" "}
                  <span className="it text-paper">6 products.</span>
                </SectionTitle>
              </FadeIn>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {products.map((p, i) => (
                  <FadeIn delay={120 + i * 50} key={p.slug}>
                    <Link
                      href={`/en/solutions/${p.slug}`}
                      className="group block rounded border border-white/10 bg-bg-card/40 p-5 transition-colors hover:border-red/40"
                    >
                      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                        {p.number} · {p.label}
                      </div>
                      <div className="mt-2 font-display text-base font-semibold text-white">
                        {p.linkLabel}
                      </div>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl">
              <FadeIn>
                <Eyebrow>FAQ — {city.name}</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-white">
                  Local{" "}
                  <span className="it text-paper">questions.</span>
                </SectionTitle>
              </FadeIn>

              <div className="mt-12 space-y-2">
                {city.faq.map((item, i) => (
                  <FadeIn delay={120 + i * 50} key={item.q}>
                    <details className="group rounded border border-white/10 bg-bg-card/40 p-6 transition-colors hover:border-white/20 open:border-red/40">
                      <summary className="flex cursor-pointer items-start justify-between gap-4 font-display text-base font-semibold text-white md:text-lg">
                        <span>{item.q}</span>
                        <span aria-hidden="true" className="mt-1 text-red transition-transform group-open:rotate-45">+</span>
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

        <section className="relative isolate overflow-hidden bg-red py-24 text-white md:py-28">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Free measurement {city.locative}</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Your project, {city.name}.{" "}
                <span className="it">Our team, on site.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                We respond within 24 hours. Measurement and quote are always free.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/en#cta"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Book a free measurement →
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
