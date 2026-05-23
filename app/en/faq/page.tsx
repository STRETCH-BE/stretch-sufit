/**
 * FAQ page — English. /en/faq
 * File path: /app/en/faq/page.tsx
 */

import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Nav } from "@/components/sections/en/nav";
import { Footer } from "@/components/sections/en/footer";
import { MobileStickyCTA } from "@/components/sections/en/mobile-sticky-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqGrid } from "@/components/sections/faq-grid";

import { faqs, faqCategoriesEn } from "@/content/en/faq";
import type { FaqCategory } from "@/content/faq";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://stretch-sufit.vercel.app";

export const metadata: Metadata = {
  title: "Frequently asked questions — stretch ceilings | Stretch Sufit",
  description:
    "Answers to the most common questions about Stretch Sufit ceilings. Pricing, installation, warranty, materials, lead times. 28 thorough answers.",
  alternates: { canonical: "/en/faq" },
  openGraph: {
    title: "Stretch ceiling FAQ | Stretch Sufit",
    description:
      "Comprehensive answers to the questions clients ask most. Pricing, installation, warranty, materials.",
    type: "website",
    url: `${BASE_URL}/en/faq`,
    locale: "en_US",
  },
};

export default function FaqPageEn() {
  const options = [
    { value: "all" as const, label: "All", count: faqs.length },
    ...(Object.keys(faqCategoriesEn) as FaqCategory[]).map((cat) => ({
      value: cat,
      label: faqCategoriesEn[cat].label,
      count: faqs.filter((f) => f.category === cat).length,
    })),
  ];

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
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/en` },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: `${BASE_URL}/en/faq`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Nav />

      <main>
        <nav
          aria-label="breadcrumb"
          className="border-b border-white/5 bg-bg pb-4 pt-28 md:pt-32"
        >
          <Container>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
              <li>
                <Link href="/en" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">·</li>
              <li className="text-white" aria-current="page">
                FAQ
              </li>
            </ol>
          </Container>
        </nav>

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
                {faqs.length} questions · {Object.keys(faqCategoriesEn).length}{" "}
                categories
              </Eyebrow>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                The questions we{" "}
                <span className="it text-paper">answer most often.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                We've collected answers to the 28 questions we hear most often before the measurement. Pricing, materials, warranty, installation, logistics — all in one place. Pick a category to filter, or scroll through all of them.
              </p>
            </div>
          </Container>
        </section>

        <FaqGrid
          faqs={faqs}
          options={options}
          categories={faqCategoriesEn}
          categoryParam="category"
          labels={{ categoryHint: "Category" }}
        />

        <section className="relative isolate overflow-hidden bg-red py-20 text-white md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Question not here?</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Call us —{" "}
                <span className="it">we'll answer in 10 minutes.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Every project is different. Phone consultation with our advisor — free, no commitment.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
