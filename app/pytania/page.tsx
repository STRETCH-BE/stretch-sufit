/**
 * Pytania (FAQ) page — /pytania
 * File path: /app/pytania/page.tsx
 *
 * Comprehensive consolidated FAQ page. The 28 Q&As are also dispersed
 * across product/city pages where they serve local context, but this
 * page is the canonical home for FAQ search intent.
 *
 * URL chosen as "pytania" (Polish: "questions") — short, natural,
 * better local SEO than "/faq" or "/czesto-zadawane-pytania".
 */

import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCTA } from "@/components/sections/mobile-sticky-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqGrid } from "@/components/sections/faq-grid";

import { faqs, faqCategories, type FaqCategory } from "@/content/faq";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://stretch-sufit.vercel.app";

export const metadata: Metadata = {
  title: "Pytania i odpowiedzi — sufity napinane | Stretch Sufit",
  description:
    "Odpowiedzi na najczęstsze pytania o sufity napinane Stretch Sufit. Cena, montaż, gwarancja, materiały, terminy. 28 wyczerpujących odpowiedzi.",
  alternates: { canonical: "/pytania" },
  openGraph: {
    title: "Pytania o sufity napinane | Stretch Sufit",
    description:
      "Wyczerpujące odpowiedzi na najczęstsze pytania klientów. Cena, montaż, gwarancja, materiały.",
    type: "website",
    url: `${BASE_URL}/pytania`,
    locale: "pl_PL",
  },
};

export default function PytaniaPage() {
  // Build filter options with counts
  const options = [
    { value: "all" as const, label: "Wszystkie", count: faqs.length },
    ...(Object.keys(faqCategories) as FaqCategory[]).map((cat) => ({
      value: cat,
      label: faqCategories[cat].label,
      count: faqs.filter((f) => f.category === cat).length,
    })),
  ];

  // FAQPage JSON-LD — Google sometimes surfaces this as rich-snippet
  // expandable boxes directly in search results. Big SEO win.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((entry) => ({
      "@type": "Question",
      name: entry.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pytania",
        item: `${BASE_URL}/pytania`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

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
                Pytania
              </li>
            </ol>
          </Container>
        </nav>

        {/* ════════ Hero ════════ */}
        <section className="relative isolate overflow-hidden bg-bg pb-12 pt-12 md:pb-16 md:pt-16">
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
              <Eyebrow>
                {faqs.length} pytań · {Object.keys(faqCategories).length}{" "}
                kategorii
              </Eyebrow>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                Pytania, na które{" "}
                <span className="it text-paper">najczęściej odpowiadamy.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                Zebraliśmy odpowiedzi na 28 pytań, które najczęściej słyszymy
                przed pomiarem. Cena, materiały, gwarancja, montaż, logistyka —
                wszystko w jednym miejscu. Wybierz kategorię, aby zawęzić, lub
                przewiń przez wszystkie.
              </p>
            </div>
          </Container>
        </section>

        {/* ════════ Filterable list (client component) ════════ */}
        <FaqGrid faqs={faqs} options={options} />

        {/* ════════ Final CTA ════════ */}
        <section className="relative isolate overflow-hidden bg-red py-20 text-white md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Nie ma Twojego pytania?</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Zadzwoń —{" "}
                <span className="it">odpowiemy w 10 minut.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Każdy projekt jest inny. Konsultacja telefoniczna z naszym
                doradcą — bezpłatna, bez zobowiązań.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="tel:+48730700333"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  +48 730 700 333
                </a>
                <Link
                  href="/#cta"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Zamów pomiar →
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
