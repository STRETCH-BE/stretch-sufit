/**
 * Cities hub page — English. /en/stretch-ceilings
 * File path: /app/en/stretch-ceilings/page.tsx
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { Nav } from "@/components/sections/en/nav";
import { Footer } from "@/components/sections/en/footer";
import { MobileStickyCTA } from "@/components/sections/en/mobile-sticky-cta";

import { cities } from "@/content/en/cities";
import { citiesFull } from "@/content/en/cities-full";
import { languageAlternates, routes } from "@/lib/i18n-routes";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://altodesign.pl";

export const metadata: Metadata = {
  title: "Stretch ceilings — 17 cities across Poland | Stretch Sufit",
  description:
    "Stretch ceilings in 17 Polish cities — Warsaw, Kraków, Wrocław, Poznań, Gdańsk, Łódź, Katowice and more. PVC manufactured in Poland, polyester from Belgium. Installed in 1 day, up to 15 years warranty.",
  alternates: {
    canonical: "/en/stretch-ceilings",
    languages: languageAlternates(routes.cities),
  },
  openGraph: {
    title: "Stretch ceilings in 17 Polish cities | Stretch Sufit",
    description:
      "Part of the Belgian Stretchgroup. PVC manufactured in Poland, polyester in Belgium. Installation across Poland.",
    type: "website",
    url: `${BASE_URL}/en/stretch-ceilings`,
  },
};

const featuredSlugs = new Set(citiesFull.map((c) => c.slug));

export default function CitiesHubPageEn() {
  return (
    <>
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
              <li className="text-white" aria-current="page">Stretch ceilings — cities</li>
            </ol>
          </Container>
        </nav>

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
                <Eyebrow>17 cities · one team · one standard</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                  Stretch ceilings{" "}
                  <span className="it text-paper">across Poland.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={160}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                  Based in Częstochowa, we serve 17 Polish cities directly with our in-house installation teams. For larger projects (&gt; 200 m²) we travel anywhere in Poland. Free measurement, no travel surcharges — wherever you are.
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="text-bg bg-paper py-24 md:py-32">
          <Container>
            <FadeIn>
              <Eyebrow tone="on-paper">Featured cities</Eyebrow>
            </FadeIn>
            <FadeIn delay={80}>
              <SectionTitle className="mt-5 text-bg">
                Detailed pages —{" "}
                <span className="it">top three.</span>
              </SectionTitle>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
              {citiesFull.map((city, i) => (
                <FadeIn key={city.slug} delay={i * 80}>
                  <Link
                    href={`/en/stretch-ceilings/${city.slug}`}
                    className="group block rounded border border-bg/10 bg-paper-2 p-8 transition-all hover:border-red hover:bg-white"
                  >
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                      {city.region}
                    </div>
                    <div className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-bg">
                      {city.name}
                    </div>
                    <p className="mt-3 text-sm text-bg/60">
                      {city.populationDisplay} · {city.distanceFromHq} km from HQ
                    </p>
                    <p className="mt-5 text-[15px] leading-relaxed text-bg/75">
                      {city.intro.split(".")[0]}.
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-red">
                      Read more
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <FadeIn>
              <Eyebrow>All service cities</Eyebrow>
            </FadeIn>
            <FadeIn delay={80}>
              <SectionTitle className="mt-5 text-white">
                All 17 cities{" "}
                <span className="it text-paper">we serve.</span>
              </SectionTitle>
            </FadeIn>

            <FadeIn delay={140}>
              <ul className="mt-12 grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4">
                {cities.map((city) => {
                  const hasFullPage = featuredSlugs.has(city.slug);
                  return (
                    <li key={city.slug}>
                      <Link
                        href={
                          hasFullPage
                            ? `/en/stretch-ceilings/${city.slug}`
                            : "/en/contact"
                        }
                        className="group block rounded border border-white/10 p-4 transition-colors hover:border-red hover:bg-bg-card"
                      >
                        <span className="block text-[15px] font-medium text-white">
                          {city.name}
                          {hasFullPage && (
                            <span className="ml-2 inline-flex h-1.5 w-1.5 rounded-full bg-red" aria-label="Detailed page" />
                          )}
                        </span>
                        <span className="mt-0.5 block text-[11px] uppercase tracking-[0.1em] text-white/55">
                          {city.region}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mt-8 max-w-2xl text-sm text-white/55">
                Cities marked <span className="inline-flex h-1.5 w-1.5 rounded-full bg-red align-middle" /> have dedicated pages with local information. For other cities, contact us directly for a free quote.
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="relative isolate overflow-hidden bg-red py-20 text-white md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Your city not listed?</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
                Call us —{" "}
                <span className="it">we cover all of Poland for larger projects.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                For projects above 200 m² we install anywhere in Poland. Free phone consultation, no commitment.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="tel:+48730700333"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  +48 730 700 333
                </a>
                <Link
                  href="/en#cta"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Book a measurement →
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
