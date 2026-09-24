/**
 * Regional hub — /sufity-napinane/slask
 * File path: /app/sufity-napinane/slask/page.tsx
 *
 * A static segment wins over the [miasto] dynamic route, so this page
 * coexists with the city pages. Content comes from /content/slask.ts;
 * the city groups are built from content/cities.ts so a new Silesian
 * city page shows up here automatically once it carries a `subregion`.
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
import { JsonLd } from "@/components/seo/json-ld";

import { cities } from "@/content/cities";
import { slask } from "@/content/slask";
import { CITY_PRICE_FROM_PLN, formatTravel } from "@/lib/cities";
import { routes } from "@/lib/i18n-routes";
import { buildBreadcrumbs, buildCityService, buildFaqPage } from "@/lib/schema";
import { defaultOgImages, siteConfig } from "@/lib/site-config";

const BASE_URL = siteConfig.url;
const PAGE_URL = `${BASE_URL}${routes.slask.pl}`;

export const metadata: Metadata = {
  title: { absolute: slask.metaTitle },
  description: slask.metaDescription,
  alternates: { canonical: routes.slask.pl },
  openGraph: {
    title: slask.metaTitle,
    description: slask.metaDescription,
    type: "website",
    url: PAGE_URL,
    locale: "pl_PL",
    images: [
      { url: "/images/about/hala-czestochowa.jpg", alt: "Hala produkcyjna Stretch Sufit w Częstochowie" },
      ...defaultOgImages,
    ],
  },
};

const silesianCities = cities.filter((c) => c.region === "Śląskie");

export default function SlaskPage() {
  const groups = slask.subregions.map((group) => ({
    ...group,
    cities: group.citySlugs
      .map((slug) => silesianCities.find((c) => c.slug === slug))
      .filter((c) => c !== undefined),
  }));

  const serviceSchema = buildCityService({
    url: PAGE_URL,
    name: "Sufity napinane na Śląsku",
    serviceType: "Montaż sufitów napinanych",
    description: slask.metaDescription,
    areaServed: [
      "Województwo śląskie",
      ...silesianCities.map((c) => c.name),
      ...silesianCities.flatMap((c) => c.nearbyTowns ?? []),
    ],
    priceFromPLN: CITY_PRICE_FROM_PLN,
  });
  const breadcrumbSchema = buildBreadcrumbs([
    { name: "Strona główna", url: BASE_URL },
    { name: "Sufity napinane", url: `${BASE_URL}${routes.cities.pl}` },
    { name: "Śląsk", url: PAGE_URL },
  ]);
  const faqSchema = buildFaqPage(
    slask.faq.map((f) => ({ question: f.q, answer: f.a }))
  );

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
                <Link href={routes.cities.pl} className="hover:text-white">
                  Sufity napinane
                </Link>
              </li>
              <li aria-hidden="true">·</li>
              <li className="text-white" aria-current="page">
                Śląsk
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
            <div className="mx-auto max-w-4xl">
              <Eyebrow>Województwo śląskie · fabryka w Częstochowie</Eyebrow>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                Sufity napinane{" "}
                <span className="it text-paper">{slask.h1Italic}</span>
                <br />
                <span className="text-red">{slask.h1Red}</span>
              </h1>
              {slask.intro.map((paragraph, i) => (
                <p
                  key={i}
                  className={`max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl ${i === 0 ? "mt-8" : "mt-5"}`}
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <TrackedCTA
                  event="cta_wycena"
                  props={{ location: "slask_hero", region: "Śląskie" }}
                  href="/wycena"
                  className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-4 font-display text-base font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Bezpłatna wycena w 24 h →
                </TrackedCTA>
                <TrackedCTA
                  event="phone_click"
                  props={{ location: "slask_hero", region: "Śląskie" }}
                  href={`tel:${siteConfig.contact.phonePL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/5"
                >
                  +32 485 48 30 35
                </TrackedCTA>
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ Sub-regions with city pages ════════ */}
        <section className="text-bg bg-paper py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <Eyebrow tone="on-paper">Miasta na Śląsku</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-bg">
                  Wybierz swoje miasto —{" "}
                  <span className="it">czas dojazdu z Częstochowy.</span>
                </SectionTitle>
              </FadeIn>
            </div>
            <div className="mt-16 space-y-14 md:mt-20">
              {groups.map((group, gi) => (
                <FadeIn delay={gi * 60} key={group.key}>
                  <div>
                    <div className="mb-6 flex items-baseline gap-4">
                      <h2 className="font-display text-xl font-semibold tracking-[-0.01em] text-bg md:text-2xl">
                        {group.title}
                      </h2>
                      <div className="h-px flex-1 bg-bg/10" />
                    </div>
                    <p className="mb-6 max-w-3xl text-[15px] leading-relaxed text-bg/70">
                      {group.blurb}
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {group.cities.map((city) => (
                        <Link
                          key={city.slug}
                          href={`/sufity-napinane/${city.slug}`}
                          className="group rounded border border-bg/10 bg-paper-2 p-5 transition-all hover:border-red/40 hover:bg-white"
                        >
                          <div className="font-display text-lg font-semibold tracking-[-0.01em] text-bg">
                            Sufity napinane {city.name}
                          </div>
                          <div className="mt-2 text-xs text-bg/55">
                            {city.isHq
                              ? "Fabryka i showroom · ul. Legionów 59"
                              : `${city.distanceFromHq} km · ${city.travel ? formatTravel(city.travel.minutes) : ""}${city.travel?.noTravelFee ? " · bez opłaty za dojazd" : ""}`}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* ════════ Long-form sections ════════ */}
        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl">
              <FadeIn>
                <Eyebrow>Sufity napinane na Śląsku — w praktyce</Eyebrow>
              </FadeIn>
              <div className="mt-10 space-y-16 md:space-y-20">
                {slask.sections.map((section, i) => (
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
                      {section.links.length > 0 && (
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

        {/* ════════ Reasons ════════ */}
        <section className="text-bg bg-paper-2 py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <Eyebrow tone="on-paper">Dlaczego producent</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-bg">
                  Trzy powody, dla których Śląsk{" "}
                  <span className="text-red">zamawia u źródła.</span>
                </SectionTitle>
              </FadeIn>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-10">
              {slask.reasons.map((reason, i) => (
                <FadeIn delay={120 + i * 80} key={reason.title}>
                  <div className="rounded border border-bg/10 bg-paper p-7">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                      0{i + 1}
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold leading-tight text-bg">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-bg/75">
                      {reason.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* ════════ FAQ ════════ */}
        <section className="bg-bg-soft py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl">
              <FadeIn>
                <Eyebrow>FAQ — sufity napinane na Śląsku</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-white">
                  Najczęstsze <span className="it text-paper">pytania.</span>
                </SectionTitle>
              </FadeIn>
              <div className="mt-12 space-y-2">
                {slask.faq.map((item, i) => (
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

        {/* ════════ Final CTA ════════ */}
        <section className="relative isolate overflow-hidden bg-red py-24 text-white md:py-28">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Showroom w Częstochowie</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Nowy sufit na Śląsku.
                <br />
                <span className="it">Materiał prosto z hali przy Legionów 59.</span>
              </h2>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <TrackedCTA
                  event="cta_wycena"
                  props={{ location: "slask_final", region: "Śląskie" }}
                  href="/wycena"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Bezpłatna wycena w 24 h →
                </TrackedCTA>
                <TrackedCTA
                  event="showroom_click"
                  props={{ location: "slask_final", region: "Śląskie" }}
                  href="/kontakt#showroom"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Umów wizytę w showroomie →
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
