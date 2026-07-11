/**
 * FAQ page — Ukrainian. /ua/pytannya
 * File path: /app/ua/pytannya/page.tsx
 */

import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Nav } from "@/components/sections/ua/nav";
import { Footer } from "@/components/sections/ua/footer";
import { MobileStickyCTA } from "@/components/sections/ua/mobile-sticky-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqGrid } from "@/components/sections/faq-grid";

import { faqs, faqCategoriesUk } from "@/content/ua/faq";
import type { FaqCategory } from "@/content/faq";
import { languageAlternates, routes } from "@/lib/i18n-routes";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://altodesign.pl";

export const metadata: Metadata = {
  title: "Питання та відповіді — натяжні стелі | Stretch Sufit",
  description:
    "Відповіді на найчастіші питання про натяжні стелі Stretch Sufit. Ціна, монтаж, гарантія, матеріали, терміни. 28 вичерпних відповідей.",
  alternates: {
    canonical: "/ua/pytannya",
    languages: languageAlternates(routes.faq),
  },
  openGraph: {
    title: "Питання про натяжні стелі | Stretch Sufit",
    description:
      "Вичерпні відповіді на найчастіші питання клієнтів. Ціна, монтаж, гарантія, матеріали.",
    type: "website",
    url: `${BASE_URL}/ua/pytannya`,
    locale: "uk_UA",
  },
};

export default function FaqPageUk() {
  const options = [
    { value: "all" as const, label: "Усі", count: faqs.length },
    ...(Object.keys(faqCategoriesUk) as FaqCategory[]).map((cat) => ({
      value: cat,
      label: faqCategoriesUk[cat].label,
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
      { "@type": "ListItem", position: 1, name: "Головна", item: `${BASE_URL}/ua` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Питання",
        item: `${BASE_URL}/ua/pytannya`,
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
                <Link href="/ua" className="hover:text-white">
                  Головна
                </Link>
              </li>
              <li aria-hidden="true">·</li>
              <li className="text-white" aria-current="page">
                Питання
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
                {faqs.length} питань · {Object.keys(faqCategoriesUk).length}{" "}
                категорій
              </Eyebrow>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                Питання, на які ми{" "}
                <span className="it text-paper">відповідаємо найчастіше.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                Зібрали відповіді на 28 питань, які найчастіше чуємо перед заміром. Ціна, матеріали, гарантія, монтаж, логістика — все в одному місці. Оберіть категорію, щоб звузити, або прогорніть усі.
              </p>
            </div>
          </Container>
        </section>

        <FaqGrid
          faqs={faqs}
          options={options}
          categories={faqCategoriesUk}
          categoryParam="kategoriya"
          labels={{ categoryHint: "Категорія" }}
        />

        <section className="relative isolate overflow-hidden bg-red py-20 text-white md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Немає вашого питання?</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Зателефонуйте —{" "}
                <span className="it">відповімо за 10 хвилин.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Кожен проєкт інший. Телефонна консультація з нашим спеціалістом — безкоштовно, без зобов'язань.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="tel:+48455444475"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  +48 455 444 475 (UA)
                </a>
                <Link
                  href="/ua#cta"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Замовити замір →
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
