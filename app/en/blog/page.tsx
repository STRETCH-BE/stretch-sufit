/**
 * Blog & FAQ hub — /en/blog
 * File path: /app/en/blog/page.tsx
 *
 * English translation of /blog. Editorial knowledge hub with an editorial
 * pipeline (no fake dates, all marked "Coming soon") + 6 featured FAQs
 * pulled from /content/en/faq.ts so the page has real indexable content
 * from day one.
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
import { JsonLd } from "@/components/seo/json-ld";

import { faqs, faqCategoriesEn } from "@/content/en/faq";
import type { FaqCategory } from "@/content/faq";
import { products } from "@/content/en/products";
import { blogPosts } from "@/content/en/blog-posts";
import { languageAlternates, routes } from "@/lib/i18n-routes";
import { defaultOgImages } from "@/lib/site-config";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://altodesign.pl";

export const metadata: Metadata = {
  title: "Blog & FAQ — stretch ceiling knowledge",
  description:
    "Stretch Sufit notebook and FAQ. Articles on materials, acoustics, LED lighting, stretch-ceiling care + 28 answers to the most common questions.",
  alternates: {
    canonical: "/en/blog",
    languages: languageAlternates(routes.blog),
  },
  openGraph: {
    title: "Blog & FAQ | Stretch Sufit",
    description:
      "Knowledge that builds decision confidence — articles and answers on stretch ceilings.",
    type: "website",
    url: `${BASE_URL}/en/blog`,
    locale: "en_US",
    images: defaultOgImages,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/en` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog & FAQ",
      item: `${BASE_URL}/en/blog`,
    },
  ],
};

const buildFaqSchema = (entries: typeof faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: entries.map((entry) => ({
    "@type": "Question",
    name: entry.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: entry.a,
    },
  })),
});

type EditorialEntry = {
  no: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
};

// Mirrors the staged entries in /content/blog-drafts.ts — remove a tile
// here when its article moves live.
const editorialPipeline: EditorialEntry[] = [
  {
    no: "07",
    category: "B2B",
    title:
      "Acoustic ceilings for offices — how to really cut reverberation in open-space",
    excerpt:
      "Micro-perforated membrane with an absorber, Class A absorption, RT60 targets for open-space and meeting rooms. The cost of a 100 m² office, installed in 2–3 days without closing the office.",
    readTime: "9 min",
  },
  {
    no: "08",
    category: "Guides",
    title:
      "Stretch ceiling installation step by step — why it really takes 1 day",
    excerpt:
      "Stage by stage: profiles, substructures, hot or cold tensioning, finishing. What to prepare, when installation takes 2 days and whether PVC smells.",
    readTime: "8 min",
  },
  {
    no: "09",
    category: "Guides",
    title:
      "Are stretch ceilings safe? Fire classes, certificates, health",
    excerpt:
      "What A2 and B-s1,d0 mean, where documentation is legally required, where the film comes from and how PVC recycling works.",
    readTime: "8 min",
  },
  {
    no: "10",
    category: "Guides",
    title: "Barrisol, stretch ceiling, tensioned ceiling — are they the same thing?",
    excerpt:
      "Where the colloquial name comes from, how systems differ and what to look at when choosing: manufacturer or importer, origin of the film, service after years.",
    readTime: "7 min",
  },
];

const FEATURED_SLUGS: string[] = [
  "what-is-stretch-ceiling", // products
  "installation-time", // installation
  "how-much-does-it-cost", // pricing
  "warranty-length", // warranty
  "lead-time", // logistics
  "bathroom", // applications
];

const featuredFaqs = FEATURED_SLUGS.map((slug) =>
  faqs.find((f) => f.slug === slug)
).filter((entry): entry is (typeof faqs)[number] => Boolean(entry));

const categoryList = Object.keys(faqCategoriesEn) as FaqCategory[];

export default function BlogPageEn() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={buildFaqSchema(featuredFaqs)} />

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
                Blog & FAQ
              </li>
            </ol>
          </Container>
        </nav>

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
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-8">
                <FadeIn>
                  <Eyebrow>Notebook · Stretch-ceiling knowledge</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                    Knowledge that{" "}
                    <span className="it text-paper">builds confidence</span>
                    <br />
                    <span className="text-red">in your decision.</span>
                  </h1>
                </FadeIn>
                <FadeIn delay={160}>
                  <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                    Articles and answers written by the same people who measure
                    your ceiling, manufacture the membrane and run the
                    installation. No ghost-writers, no marketing short-cuts.
                  </p>
                </FadeIn>
              </div>

              <div className="md:col-span-4">
                <FadeIn delay={220}>
                  <div className="rounded border border-white/10 bg-bg-card/60 p-6">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                      Jump to
                    </div>
                    <ul className="mt-5 space-y-3">
                      <li>
                        <a
                          href="#faq"
                          className="group flex items-baseline justify-between gap-3 border-b border-white/10 pb-3 text-sm text-white/75 hover:text-white"
                        >
                          <span>Questions and answers</span>
                          <span className="font-mono text-[11px] text-white/40 group-hover:text-red">
                            {faqs.length}
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#articles"
                          className="group flex items-baseline justify-between gap-3 border-b border-white/10 pb-3 text-sm text-white/75 hover:text-white"
                        >
                          <span>Published articles</span>
                          <span className="font-mono text-[11px] text-white/40 group-hover:text-red">
                            {blogPosts.length}
                          </span>
                        </a>
                      </li>
                      <li>
                        <Link
                          href="/en/solutions"
                          className="group flex items-baseline justify-between gap-3 text-sm text-white/75 hover:text-white"
                        >
                          <span>Solutions catalogue</span>
                          <span className="font-mono text-[11px] text-white/40 group-hover:text-red">
                            {products.length}
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section id="articles" className="text-bg bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <FadeIn>
                  <Eyebrow tone="on-paper">Chapter 01 · Articles</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    The maker's notebook.{" "}
                    <span className="it">No filler.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-5">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-bg/75 md:text-lg">
                    Every piece is written by the people who measure, manufacture and install — with numbers from our own price list and service practice.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {blogPosts.map((post, i) => (
                <FadeIn delay={120 + i * 60} key={post.slug}>
                  <Link
                    href={`/en/blog/${post.slug}`}
                    className="group flex h-full flex-col rounded border border-bg/10 bg-paper-2 p-7 transition-colors hover:border-red/40"
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                        {post.category}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-bg/45">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold leading-[1.3] tracking-[-0.01em] text-bg group-hover:text-red">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-[14.5px] leading-relaxed text-bg/70">
                      {post.excerpt}
                    </p>
                    <span className="mt-auto pt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                      Read the article →
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <section id="coming-soon" className="text-bg bg-bg-soft py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <FadeIn>
                  <Eyebrow tone="on-paper">
                    Chapter 02 · In preparation
                  </Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    More articles{" "}
                    <span className="it text-paper">on the way.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-5">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    First publication wave launches in 2026. Each piece written
                    by an engineer or PM, edited by editorial — no SEO filler.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {editorialPipeline.map((post, i) => (
                <FadeIn delay={120 + i * 60} key={post.no}>
                  <article className="flex h-full flex-col rounded border border-white/10 bg-bg-card/40 p-7 transition-colors hover:border-red/40">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                        {post.no} · {post.category}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/45">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold leading-[1.3] tracking-[-0.01em] text-white">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-[14.5px] leading-relaxed text-white/65">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-6">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/55">
                        ● Coming soon
                      </span>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={520}>
              <div className="mt-14 flex flex-col items-start gap-5 rounded border border-white/10 bg-bg-card/40 p-8 md:flex-row md:items-center md:justify-between md:p-10">
                <div className="max-w-xl">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                    Newsletter
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-white">
                    Let me know when the first article ships.
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                    No spam — one email when we publish something meaningful.
                    Address used exclusively for this.
                  </p>
                </div>
                <a
                  href="mailto:info@stretch-sufit.pl?subject=Newsletter%20signup"
                  className="inline-flex items-center gap-2 rounded-full bg-red px-6 py-3 font-display text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Sign me up →
                </a>
              </div>
            </FadeIn>
          </Container>
        </section>

        <section id="faq" className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <FadeIn>
                  <Eyebrow>Chapter 03 · Most common questions</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Six questions{" "}
                    <span className="it text-paper">we hear daily.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-5">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    A selection from {faqs.length} answers on the{" "}
                    <Link
                      href="/en/faq"
                      className="underline decoration-red/60 underline-offset-4 hover:text-white"
                    >
                      FAQ page
                    </Link>
                    . One question per category.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-3xl space-y-2 md:mt-20">
              {featuredFaqs.map((entry, i) => (
                <FadeIn delay={80 + i * 50} key={entry.slug}>
                  <details className="group rounded border border-white/10 bg-bg-card/40 p-6 transition-colors hover:border-white/20 open:border-red/40">
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
                    <Link
                      href={`/en/faq#${entry.slug}`}
                      className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-red hover:text-white"
                    >
                      Open in FAQ →
                    </Link>
                  </details>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={520}>
              <div className="mt-14 text-center">
                <Link
                  href="/en/faq"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:border-red hover:text-red"
                >
                  See all {faqs.length} answers →
                </Link>
              </div>
            </FadeIn>
          </Container>
        </section>

        <section className="bg-bg-soft py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-6">
                <FadeIn>
                  <Eyebrow>Chapter 04 · Topics</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Start from a{" "}
                    <span className="it text-paper">category.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-6">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    Filtered FAQ sections — pick the area that interests you
                    and go straight to the answers.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-4 md:mt-20 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
              {categoryList.map((cat, i) => {
                const meta = faqCategoriesEn[cat];
                const count = faqs.filter((f) => f.category === cat).length;
                return (
                  <FadeIn delay={100 + i * 50} key={cat}>
                    <Link
                      href={`/en/faq?category=${cat}`}
                      className="group flex h-full flex-col rounded border border-white/10 bg-bg-card/40 p-6 transition-colors hover:border-red/40"
                    >
                      <div className="flex items-baseline justify-between">
                        <span className="font-display text-base font-semibold tracking-[-0.01em] text-white">
                          {meta.label}
                        </span>
                        <span className="font-mono text-[11px] text-white/40 group-hover:text-red">
                          {count}
                        </span>
                      </div>
                      <p className="mt-3 text-[14px] leading-relaxed text-white/65">
                        {meta.description}
                      </p>
                      <span className="mt-auto pt-5 font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                        Open category →
                      </span>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="text-bg bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <FadeIn>
                  <Eyebrow tone="on-paper">Chapter 05 · Catalogue</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Six solutions{" "}
                    <span className="it">in the catalogue.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-5">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-bg/75 md:text-lg">
                    Each solution has a dedicated page with technical
                    parameters, project photos and a quote configurator.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-4 md:mt-20 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
              {products.map((p, i) => (
                <FadeIn delay={100 + i * 50} key={p.slug}>
                  <Link
                    href={`/en/solutions/${p.slug}`}
                    className="group flex h-full flex-col rounded border border-bg/10 bg-paper-2 p-6 transition-colors hover:border-red/40"
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                        {p.number} · {p.label}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold leading-tight tracking-[-0.01em] text-bg">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-bg/70">
                      {p.description}
                    </p>
                    <span className="mt-auto pt-5 font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                      See solution →
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

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
              <Eyebrow tone="on-dark">Still have a question?</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Online knowledge has limits.{" "}
                <span className="it">A survey doesn't.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Free survey with samples at your place — the fastest way to
                see the material in person and get a concrete quote.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/en#cta"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Order a free survey →
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
