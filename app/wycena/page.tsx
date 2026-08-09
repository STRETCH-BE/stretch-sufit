/**
 * Quote funnel landing page — /wycena (Polish only).
 * File path: /app/wycena/page.tsx
 *
 * Conversion layer for the Google Ads campaign. Server component: exports
 * metadata and renders the client multi-step form (hero-form.tsx) plus
 * static trust sections below the fold.
 *
 * PL-only route — self-referencing canonical, no EN/UA hreflang
 * alternates (languageAlternates emits only pl-PL + x-default when the
 * route has no en/ua paths).
 *
 * Deliberately NO MobileStickyCTA here: the sticky bar's primary action
 * points to /wycena, which would be a self-link — and the form IS the
 * page. The contact strip at the bottom covers call/WhatsApp intent.
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { TrackedCTA } from "@/components/ui/tracked-cta";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import {
  WycenaHeroForm,
  type WycenaCity,
} from "@/components/sections/wycena/hero-form";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbs, buildFaqPage } from "@/lib/schema";
import { languageAlternates, routes } from "@/lib/i18n-routes";
import { defaultOgImages, siteConfig } from "@/lib/site-config";
import { cities } from "@/content/cities";
import { projects } from "@/content/projects";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://altodesign.pl";

// TODO: Michael — uzupełnij cenę od / m² (np. 165). Sekcja z ceną pokaże
// się automatycznie, gdy wartość nie będzie null.
const PRICE_FROM_PLN: number | null = null;

export const metadata: Metadata = {
  // Root layout template renders this as
  // "Bezpłatna wycena sufitu napinanego | Stretch Sufit"
  title: "Bezpłatna wycena sufitu napinanego",
  description:
    "Wypełnij krótki formularz — oddzwonimy z bezpłatną wyceną sufitu napinanego w 24 h. Producent z Polski, gwarancja do 15 lat, bezszwowe do 6,5 m, montaż zwykle w 1 dzień.",
  alternates: {
    canonical: "/wycena",
    languages: languageAlternates(routes.wycena),
  },
  openGraph: {
    title: "Bezpłatna wycena sufitu napinanego | Stretch Sufit",
    description:
      "Formularz w 4 krokach — bezpłatna wycena w 24 h. Producent z Polski, gwarancja do 15 lat, montaż zwykle w 1 dzień bez remontu.",
    type: "website",
    url: `${BASE_URL}/wycena`,
    siteName: siteConfig.name,
    locale: "pl_PL",
    images: defaultOgImages,
  },
  // Without this, the root layout's twitter block (homepage copy) inherits
  twitter: {
    card: "summary_large_image",
    title: "Bezpłatna wycena sufitu napinanego | Stretch Sufit",
    description:
      "Formularz w 4 krokach — bezpłatna wycena w 24 h. Producent z Polski, gwarancja do 15 lat.",
    images: [siteConfig.ogImage],
  },
};

const WHATSAPP_HREF = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Dzień dobry, proszę o wycenę sufitu napinanego.')}`;

const whyUs = [
  {
    badge: "A",
    title: "Produkcja własna w Polsce",
    body: "PVC produkujemy w naszej fabryce Alto Design w Częstochowie, poliester w Belgii. Kupujesz prosto od producenta, bez pośredników.",
  },
  {
    badge: "B",
    title: "Gwarancja do 15 lat",
    body: "Pisemna gwarancja producenta: 15 lat na PVC, 10 lat na poliester. Jedna z najdłuższych na rynku sufitów napinanych.",
  },
  {
    badge: "C",
    title: "Realizacja od 5 dni roboczych",
    body: "Materiał z własnej hali produkcyjnej — nie czekamy na dostawy. Pomiar, produkcja i montaż w jednym systemie.",
  },
  {
    badge: "D",
    title: "Bezszwowe do 6,5 m",
    body: "Najszersza folia PVC na rynku. Jedno pomieszczenie to jedna gładka tafla — bez widocznych łączeń.",
  },
  {
    badge: "E",
    title: "Montaż zwykle w 1 dzień",
    body: "Bez remontu, bez kurzu, bez wynoszenia mebli. Możesz zostać w domu w trakcie prac — sufit gotowy od razu.",
  },
];

const faq = [
  {
    q: "Ile trwa montaż sufitu napinanego?",
    a: "W standardowym pomieszczeniu montaż zajmuje zwykle 1 dzień roboczy. Nie wynosimy mebli, nie ma kurzu ani prac wykończeniowych — sufit jest gotowy od razu po montażu.",
  },
  {
    q: "Ile kosztuje sufit napinany?",
    a: "Cena zależy od metrażu, rodzaju folii (PVC, poliester, akustyczna, z fotodrukiem) i oświetlenia. Dlatego przygotowujemy indywidualną wycenę — bezpłatnie i bez zobowiązań. Wycena jest ważna 30 dni.",
  },
  {
    q: "Czy sufit napinany nadaje się do łazienki?",
    a: "Tak. Folia PVC jest odporna na wilgoć i parę wodną, nie pęka i nie łuszczy się jak farba. To jedno z najczęściej wybieranych rozwiązań do łazienek i kuchni.",
  },
  {
    q: "Jak wygląda wycena i pomiar?",
    a: "Po wysłaniu formularza oddzwaniamy, ustalamy szczegóły i umawiamy bezpłatny pomiar. Specjalista przyjedzie, zmierzy pomieszczenie, doradzi materiał i kolor, a wycenę przedstawi na miejscu — bez zobowiązań.",
  },
];

/** 3 case studies as social proof — bathroom one backs up the FAQ claim. */
const FEATURED_PROJECT_SLUGS = [
  "afas-lounge-antwerpia",
  "citizenm-prefab-lazienki",
  "van-der-valk-beveren",
];

const breadcrumbSchema = buildBreadcrumbs([
  { name: "Strona główna", url: BASE_URL },
  { name: "Bezpłatna wycena", url: `${BASE_URL}/wycena` },
]);

const faqSchema = buildFaqPage(faq.map((f) => ({ question: f.q, answer: f.a })));

export default function WycenaPage() {
  const cityOptions: WycenaCity[] = cities.map((c) => ({
    slug: c.slug,
    name: c.name,
  }));

  const featuredProjects = FEATURED_PROJECT_SLUGS.map((slug) =>
    projects.find((p) => p.slug === slug)
  ).filter((p) => p !== undefined);

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <Nav ctaHref="#formularz" />

      <main>
        {/* ════════ Above the fold: H1 + trust line + form ════════ */}
        <WycenaHeroForm cities={cityOptions} />

        {/* ════════ Dlaczego my ════════ */}
        <section className="border-t border-white/8 bg-bg-soft py-20 md:py-28">
          <Container>
            <FadeIn>
              <Eyebrow>Dlaczego Stretch Sufit</Eyebrow>
              <SectionTitle className="mt-5 text-white">
                Kupujesz od producenta,
                <br />
                <span className="it">nie od pośrednika.</span>
              </SectionTitle>
            </FadeIn>

            <ul className="mt-14 grid grid-cols-1 gap-px border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
              {whyUs.map((reason, i) => (
                <FadeIn key={reason.badge} as="li" delay={(i % 3) * 80}>
                  <article className="flex h-full min-h-[220px] flex-col bg-bg-soft p-8">
                    <div
                      aria-hidden="true"
                      className="mb-4 flex size-11 items-center justify-center rounded-full border border-red font-display text-lg font-bold text-red"
                    >
                      {reason.badge}
                    </div>
                    <h2 className="font-display text-[20px] font-semibold leading-tight tracking-[-0.02em] text-white">
                      {reason.title}
                    </h2>
                    <p className="mt-2.5 text-sm leading-[1.55] text-white/55">
                      {reason.body}
                    </p>
                  </article>
                </FadeIn>
              ))}
              {/* Filler cell keeps the 3-column grid lines clean with 5 items */}
              <li aria-hidden="true" className="hidden bg-bg-soft lg:block" />
            </ul>
          </Container>
        </section>

        {/* ════════ Cena od (renders only when the constant is set) ════════ */}
        {PRICE_FROM_PLN !== null && (
          <section className="bg-paper py-20 text-bg md:py-24">
            <Container>
              <div className="mx-auto max-w-3xl text-center">
                <Eyebrow tone="on-paper" className="justify-center">
                  Orientacyjna cena
                </Eyebrow>
                <p className="mt-6 font-display text-[clamp(48px,8vw,96px)] font-semibold leading-none tracking-[-0.03em] text-bg">
                  od {PRICE_FROM_PLN} zł
                  <span className="text-[0.4em] font-medium text-bg/60">
                    {" "}
                    / m²
                  </span>
                </p>
                <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.6] text-bg/70">
                  Ostateczna cena zależy od metrażu, wybranej folii
                  i oświetlenia. Dokładną wycenę przygotujemy bezpłatnie —
                  wypełnij formularz powyżej.
                </p>
              </div>
            </Container>
          </section>
        )}

        {/* ════════ Realizacje / social proof ════════ */}
        <section className="bg-bg py-20 md:py-28">
          <Container>
            <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <FadeIn>
                <Eyebrow>Realizacje</Eyebrow>
                <SectionTitle className="mt-5 text-white">
                  Zobacz nasze
                  <br />
                  <span className="it">sufity w akcji.</span>
                </SectionTitle>
              </FadeIn>
              <FadeIn delay={120}>
                <Link
                  href="/realizacje"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-red hover:text-red"
                >
                  Wszystkie realizacje →
                </Link>
              </FadeIn>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {featuredProjects.map((project, i) => (
                <FadeIn key={project.slug} delay={i * 80}>
                  <Link
                    href={`/realizacje/${project.slug}`}
                    className="group block"
                  >
                    <figure className="relative aspect-[4/3] overflow-hidden rounded bg-bg-card">
                      <Image
                        src={project.cardImage ?? project.heroImage}
                        alt={project.heroAlt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </figure>
                    <h3 className="mt-4 font-display text-lg font-semibold tracking-[-0.01em] text-white">
                      {project.title}
                      <span className="ml-2 font-normal text-white/45">
                        {project.year}
                      </span>
                    </h3>
                    <p className="mt-1.5 text-sm leading-[1.55] text-white/55">
                      {project.cardSummary ?? project.subtitle}
                    </p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* ════════ FAQ ════════ */}
        <section className="border-t border-white/8 bg-bg pb-20 pt-16 md:pb-28 md:pt-20">
          <Container>
            <div className="mx-auto max-w-3xl">
              <FadeIn>
                <Eyebrow>Częste pytania</Eyebrow>
                <SectionTitle className="mt-5 text-white">
                  Zanim wyślesz
                  <br />
                  <span className="it">formularz.</span>
                </SectionTitle>
              </FadeIn>

              <div className="mt-10 space-y-2">
                {faq.map((entry) => (
                  <details
                    key={entry.q}
                    className="group rounded border border-white/10 bg-bg-card/40 p-6 transition-colors hover:border-white/20 open:border-red/40"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-4 font-display text-base font-semibold text-white md:text-lg">
                      <span>{entry.q}</span>
                      <span
                        aria-hidden="true"
                        className="mt-1 text-red transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-[15px] leading-relaxed text-white/75">
                      {entry.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ Contact strip ════════ */}
        <section className="relative isolate overflow-hidden bg-red py-16 text-white md:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-[clamp(28px,4.5vw,44px)] font-semibold leading-[1.05] tracking-[-0.025em]">
                Wolisz rozmowę{" "}
                <span className="it">zamiast formularza?</span>
              </h2>
              <p className="mt-4 text-[16px] leading-[1.6] text-white/85">
                Zadzwoń lub napisz na WhatsApp — doradzimy i przygotujemy
                wycenę w rozmowie.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <TrackedCTA
                  event="phone_click"
                  props={{ location: "wycena_page" }}
                  href={`tel:${siteConfig.contact.phonePL}`}
                  className="inline-flex items-center gap-2.5 rounded-full bg-bg px-[26px] py-4 text-sm font-semibold text-white transition-colors hover:bg-[#2a2a2a]"
                >
                  📞 +48 730 700 333
                </TrackedCTA>
                <TrackedCTA
                  event="whatsapp_click"
                  props={{ location: "wycena_page" }}
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-white px-[26px] py-4 text-sm font-semibold text-bg transition-colors hover:bg-paper-2"
                >
                  WhatsApp →
                </TrackedCTA>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
