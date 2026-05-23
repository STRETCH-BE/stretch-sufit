/**
 * Blog & FAQ hub — /blog
 * File path: /app/blog/page.tsx
 *
 * The label in the footer is "Blog i FAQ" and the project does not yet
 * have a real CMS-backed article system. This page is built as an
 * editorial knowledge hub that:
 *
 *   1. Stages an upcoming editorial calendar (featured cards marked as
 *      "W przygotowaniu" — no fake publish dates, no fake content).
 *   2. Surfaces a curated 6-question preview pulled directly from the
 *      existing /content/faq.ts so this page has real, indexable content
 *      from day one and never drifts out of sync with /pytania.
 *   3. Links to /pytania (the full canonical FAQ) and to all 6 product
 *      category pages so /blog is a useful internal hub for SEO.
 *
 * When real articles are added later, replace the `editorialPipeline`
 * array with the CMS-driven post list and add an Article schema to the
 * JSON-LD block.
 */

import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCTA } from "@/components/sections/mobile-sticky-cta";
import { JsonLd } from "@/components/seo/json-ld";

import { faqs, faqCategories, type FaqCategory } from "@/content/faq";
import { products } from "@/content/products";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://stretch-sufit.vercel.app";

export const metadata: Metadata = {
  title:
    "Blog i FAQ — wiedza o sufitach napinanych | Stretch Sufit",
  description:
    "Notatnik i FAQ Stretch Sufit. Artykuły o materiałach, akustyce, oświetleniu LED, pielęgnacji sufitów napinanych + 28 odpowiedzi na najczęstsze pytania.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog i FAQ | Stretch Sufit",
    description:
      "Wiedza, która buduje pewność decyzji — artykuły i pytania o sufity napinane.",
    type: "website",
    url: `${BASE_URL}/blog`,
    locale: "pl_PL",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Strona główna", item: BASE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog i FAQ",
      item: `${BASE_URL}/blog`,
    },
  ],
};

// FAQPage JSON-LD for the featured questions — rich-snippet eligible.
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

// Curated upcoming articles. No publish dates, no fake archive — these
// are honest "W przygotowaniu" tiles. The slugs are reserved so when real
// articles ship, the URL structure stays the same.
type EditorialEntry = {
  no: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
};

const editorialPipeline: EditorialEntry[] = [
  {
    no: "01",
    category: "Materiały",
    title:
      "PVC vs poliester — który materiał wybrać do nowoczesnego wnętrza?",
    excerpt:
      "Pełne porównanie dwóch flagowych membran Stretch. Estetyka, parametry techniczne, zachowanie w łazience, behawior przy zalaniu, sytuacje, w których jeden materiał jest jedyną sensowną opcją.",
    readTime: "8 min",
  },
  {
    no: "02",
    category: "Akustyka",
    title:
      "Sufit akustyczny w open-space: jak zmierzyć i o ile redukować pogłos",
    excerpt:
      "Praktyczny przewodnik dla architektów i facility managerów. RT60, klasa absorpcji A, kombinacje materiałów, błędy przy obliczaniu powierzchni absorbującej.",
    readTime: "12 min",
  },
  {
    no: "03",
    category: "Oświetlenie",
    title:
      "Sufit świetlny LED — kiedy ma sens, a kiedy to overkill",
    excerpt:
      "Sufit świetlny wygląda spektakularnie, ale nie zawsze jest właściwym wyborem. Kompletny break-down kosztów, sytuacji domowych i komercyjnych, oraz alternatyw — linie LED i RGB.",
    readTime: "10 min",
  },
  {
    no: "04",
    category: "Kamienice",
    title:
      "Sufit napinany w lokalu pod ochroną konserwatora — co jest legalne",
    excerpt:
      "Bezinwazyjność montażu sprawia, że sufit napinany jest często jedyną opcją w lokalach pod ochroną. Co konkretnie konsultować z konserwatorem, jakie dokumenty mieć przy odbiorze.",
    readTime: "7 min",
  },
  {
    no: "05",
    category: "Renowacje",
    title:
      "Sufit napinany w domu zamieszkanym — krok po kroku przygotowanie",
    excerpt:
      "Co dokładnie przygotować, jeśli nie chcesz wyprowadzać się z mieszkania na czas montażu. PVC vs poliester w kontekście domu zamieszkanego, zwierząt, roślin, mebli.",
    readTime: "6 min",
  },
  {
    no: "06",
    category: "Pielęgnacja",
    title:
      "Jak czyścić i utrzymać sufit napinany przez 15 lat",
    excerpt:
      "Czego używać, a czego nie. Drobne uszkodzenia mechaniczne — co naprawić samemu, kiedy zadzwonić do gwaranta. Zalanie z góry — protokół postępowania krok po kroku.",
    readTime: "5 min",
  },
];

// Pick one featured question from each of the 6 FAQ categories — gives
// the page a balanced flavor of the full /pytania scope.
const FEATURED_SLUGS: string[] = [
  "co-to-jest-sufit-napinany", // produkty
  "ile-trwa-montaz", // montaż
  "ile-kosztuje", // ceny
  "jaka-gwarancja", // gwarancja
  "kiedy-zamowic", // logistyka
  "sufit-w-lazience", // zastosowania
];

const featuredFaqs = FEATURED_SLUGS.map((slug) =>
  faqs.find((f) => f.slug === slug)
).filter((entry): entry is (typeof faqs)[number] => Boolean(entry));

const categoryList = Object.keys(faqCategories) as FaqCategory[];

export default function BlogPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={buildFaqSchema(featuredFaqs)} />

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
                Blog i FAQ
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
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-8">
                <FadeIn>
                  <Eyebrow>Notatnik · Wiedza o sufitach napinanych</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                    Wiedza, która{" "}
                    <span className="it text-paper">buduje pewność</span>
                    <br />
                    <span className="text-red">decyzji.</span>
                  </h1>
                </FadeIn>
                <FadeIn delay={160}>
                  <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                    Artykuły i odpowiedzi przygotowane przez tych samych
                    ludzi, którzy mierzą Twój sufit, produkują membranę i
                    prowadzą montaż. Bez ghostwriterów i bez marketingowych
                    skrótów.
                  </p>
                </FadeIn>
              </div>

              <div className="md:col-span-4">
                <FadeIn delay={220}>
                  <div className="rounded border border-white/10 bg-bg-card/60 p-6">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                      Skróty
                    </div>
                    <ul className="mt-5 space-y-3">
                      <li>
                        <a
                          href="#faq"
                          className="group flex items-baseline justify-between gap-3 border-b border-white/10 pb-3 text-sm text-white/75 hover:text-white"
                        >
                          <span>Pytania i odpowiedzi</span>
                          <span className="font-mono text-[11px] text-white/40 group-hover:text-red">
                            {faqs.length}
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#artykuly"
                          className="group flex items-baseline justify-between gap-3 border-b border-white/10 pb-3 text-sm text-white/75 hover:text-white"
                        >
                          <span>Artykuły w przygotowaniu</span>
                          <span className="font-mono text-[11px] text-white/40 group-hover:text-red">
                            {editorialPipeline.length}
                          </span>
                        </a>
                      </li>
                      <li>
                        <Link
                          href="/rozwiazania"
                          className="group flex items-baseline justify-between gap-3 text-sm text-white/75 hover:text-white"
                        >
                          <span>Katalog rozwiązań</span>
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

        {/* ════════ Editorial pipeline ════════ */}
        <section id="artykuly" className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <FadeIn>
                  <Eyebrow tone="on-paper">
                    Rozdział 01 · Notatnik (w przygotowaniu)
                  </Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Sześć artykułów,{" "}
                    <span className="it">na które warto poczekać.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-5">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-bg/75 md:text-lg">
                    Pierwsza fala publikacji startuje w 2026. Każdy tekst
                    pisany przez inżyniera lub PM-a, redagowany przez
                    redakcję — bez SEO-wodolejstwa.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {editorialPipeline.map((post, i) => (
                <FadeIn delay={120 + i * 60} key={post.no}>
                  <article className="flex h-full flex-col rounded border border-bg/10 bg-paper-2 p-7 transition-colors hover:border-red/40">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                        {post.no} · {post.category}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-bg/45">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold leading-[1.3] tracking-[-0.01em] text-bg">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-[14.5px] leading-relaxed text-bg/70">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-6">
                      <span className="inline-flex items-center gap-2 rounded-full border border-bg/15 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-bg/55">
                        ● W przygotowaniu
                      </span>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={520}>
              <div className="mt-14 flex flex-col items-start gap-5 rounded border border-bg/10 bg-paper p-8 md:flex-row md:items-center md:justify-between md:p-10">
                <div className="max-w-xl">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                    Newsletter
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-bg">
                    Daj znać, gdy pierwszy artykuł wyjdzie.
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-bg/70">
                    Bez spamu — 1 mail kiedy publikujemy coś istotnego. Adres
                    wykorzystywany wyłącznie do tej komunikacji.
                  </p>
                </div>
                <a
                  href="mailto:info@stretch-sufit.pl?subject=Newsletter%20%E2%80%94%20zapis"
                  className="inline-flex items-center gap-2 rounded-full bg-bg px-6 py-3 font-display text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Zapisz mnie →
                </a>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* ════════ Featured FAQ ════════ */}
        <section id="faq" className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <FadeIn>
                  <Eyebrow>Rozdział 02 · Najczęstsze pytania</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Sześć pytań,{" "}
                    <span className="it text-paper">które słyszymy codziennie.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-5">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    Wybór z 28 odpowiedzi dostępnych na{" "}
                    <Link
                      href="/pytania"
                      className="underline decoration-red/60 underline-offset-4 hover:text-white"
                    >
                      stronie FAQ
                    </Link>
                    . Po jednym pytaniu z każdej kategorii.
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
                      href={`/pytania#${entry.slug}`}
                      className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-red hover:text-white"
                    >
                      Otwórz w FAQ →
                    </Link>
                  </details>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={520}>
              <div className="mt-14 text-center">
                <Link
                  href="/pytania"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:border-red hover:text-red"
                >
                  Zobacz wszystkie {faqs.length} odpowiedzi →
                </Link>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* ════════ Categories — internal hub ════════ */}
        <section className="bg-bg-soft py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-6">
                <FadeIn>
                  <Eyebrow>Rozdział 03 · Tematy</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Zacznij od{" "}
                    <span className="it text-paper">kategorii.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-6">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    Filtrowane sekcje FAQ — wybierz obszar, który Cię
                    interesuje, i przejdź od razu do odpowiedzi.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-4 md:mt-20 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
              {categoryList.map((cat, i) => {
                const meta = faqCategories[cat];
                const count = faqs.filter((f) => f.category === cat).length;
                return (
                  <FadeIn delay={100 + i * 50} key={cat}>
                    <Link
                      href={`/pytania?kategoria=${cat}`}
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
                        Otwórz kategorię →
                      </span>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ════════ Products as further reading ════════ */}
        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <FadeIn>
                  <Eyebrow tone="on-paper">Rozdział 04 · Katalog</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Sześć rozwiązań{" "}
                    <span className="it">w katalogu.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-5">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-bg/75 md:text-lg">
                    Każde rozwiązanie ma dedykowaną stronę z parametrami
                    technicznymi, zdjęciami realizacji i konfiguratorem
                    wyceny.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-4 md:mt-20 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
              {products.map((p, i) => (
                <FadeIn delay={100 + i * 50} key={p.slug}>
                  <Link
                    href={`/rozwiazania/${p.slug}`}
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
                      Zobacz rozwiązanie →
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
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
              <Eyebrow tone="on-dark">Nadal masz pytanie?</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Wiedza w internecie ma granice.{" "}
                <span className="it">Pomiar nie ma.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Bezpłatny pomiar z próbnikami u Ciebie w domu — najszybsza
                droga, żeby zobaczyć materiał na żywo i dostać konkretną
                wycenę.
              </p>
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
