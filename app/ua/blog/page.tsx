/**
 * Blog & FAQ hub — /ua/blog
 * File path: /app/ua/blog/page.tsx
 *
 * Ukrainian translation of /blog. Editorial pipeline of upcoming articles
 * plus 6 featured FAQs from /content/ua/faq.ts.
 */

import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { Nav } from "@/components/sections/ua/nav";
import { Footer } from "@/components/sections/ua/footer";
import { MobileStickyCTA } from "@/components/sections/ua/mobile-sticky-cta";
import { JsonLd } from "@/components/seo/json-ld";

import { faqs, faqCategoriesUk } from "@/content/ua/faq";
import type { FaqCategory } from "@/content/faq";
import { products } from "@/content/ua/products";
import { languageAlternates, routes } from "@/lib/i18n-routes";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://altodesign.pl";

export const metadata: Metadata = {
  title: "Блог і FAQ — знання про натяжні стелі | Stretch Sufit",
  description:
    "Нотатник і FAQ Stretch Sufit. Статті про матеріали, акустику, LED-освітлення, догляд за натяжними стелями + 28 відповідей на найчастіші питання.",
  alternates: {
    canonical: "/ua/blog",
    languages: languageAlternates(routes.blog),
  },
  openGraph: {
    title: "Блог і FAQ | Stretch Sufit",
    description:
      "Знання, яке формує впевненість у рішенні — статті та відповіді про натяжні стелі.",
    type: "website",
    url: `${BASE_URL}/ua/blog`,
    locale: "uk_UA",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Головна", item: `${BASE_URL}/ua` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Блог і FAQ",
      item: `${BASE_URL}/ua/blog`,
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

const editorialPipeline: EditorialEntry[] = [
  {
    no: "01",
    category: "Матеріали",
    title:
      "ПВХ чи поліестер — який матеріал обрати для сучасного інтер'єру?",
    excerpt:
      "Повне порівняння двох флагманських мембран Stretch. Естетика, технічні параметри, поведінка у ванній, при затопленні, ситуації, у яких один матеріал — єдиний розумний вибір.",
    readTime: "8 хв",
  },
  {
    no: "02",
    category: "Акустика",
    title:
      "Акустична стеля в опен-спейс: як виміряти та наскільки зменшити реверберацію",
    excerpt:
      "Практичний посібник для архітекторів і менеджерів об'єктів. RT60, клас поглинання A, комбінації матеріалів, помилки при розрахунку площі поглинання.",
    readTime: "12 хв",
  },
  {
    no: "03",
    category: "Освітлення",
    title:
      "Світлова LED-стеля — коли має сенс, а коли це overkill",
    excerpt:
      "Світлова стеля виглядає видовищно, але не завжди є правильним вибором. Повний розклад вартості, домашніх і комерційних сценаріїв, а також альтернатив — LED-лінії та RGB.",
    readTime: "10 хв",
  },
  {
    no: "04",
    category: "Кам'яниці",
    title:
      "Натяжна стеля у приміщенні під охороною — що є легальним",
    excerpt:
      "Безінвазивність монтажу робить натяжну стелю часто єдиним варіантом у приміщеннях під охороною. Що саме узгоджувати з охоронцем, які документи мати при здачі.",
    readTime: "7 хв",
  },
  {
    no: "05",
    category: "Ремонти",
    title:
      "Натяжна стеля у заселеному будинку — крок за кроком підготовка",
    excerpt:
      "Що саме підготувати, якщо не хочете виїжджати на час монтажу. ПВХ vs поліестер у контексті заселеного будинку, тварин, рослин, меблів.",
    readTime: "6 хв",
  },
  {
    no: "06",
    category: "Догляд",
    title:
      "Як чистити та доглядати натяжну стелю протягом 15 років",
    excerpt:
      "Що використовувати, а чого уникати. Дрібні механічні пошкодження — що відремонтувати самому, коли подзвонити гаранту. Затоплення згори — протокол дій крок за кроком.",
    readTime: "5 хв",
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

const categoryList = Object.keys(faqCategoriesUk) as FaqCategory[];

export default function BlogPageUa() {
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
                <Link href="/ua" className="hover:text-white">
                  Головна
                </Link>
              </li>
              <li aria-hidden="true">·</li>
              <li className="text-white" aria-current="page">
                Блог і FAQ
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
                  <Eyebrow>Нотатник · Знання про натяжні стелі</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <h1 className="mt-6 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                    Знання, яке{" "}
                    <span className="it text-paper">формує впевненість</span>
                    <br />
                    <span className="text-red">рішення.</span>
                  </h1>
                </FadeIn>
                <FadeIn delay={160}>
                  <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                    Статті та відповіді, підготовлені тими ж людьми, які
                    міряють Вашу стелю, виробляють мембрану і проводять
                    монтаж. Без копірайтерів і маркетингових скорочень.
                  </p>
                </FadeIn>
              </div>

              <div className="md:col-span-4">
                <FadeIn delay={220}>
                  <div className="rounded border border-white/10 bg-bg-card/60 p-6">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                      Перейти до
                    </div>
                    <ul className="mt-5 space-y-3">
                      <li>
                        <a
                          href="#faq"
                          className="group flex items-baseline justify-between gap-3 border-b border-white/10 pb-3 text-sm text-white/75 hover:text-white"
                        >
                          <span>Питання та відповіді</span>
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
                          <span>Статті у підготовці</span>
                          <span className="font-mono text-[11px] text-white/40 group-hover:text-red">
                            {editorialPipeline.length}
                          </span>
                        </a>
                      </li>
                      <li>
                        <Link
                          href="/ua/rishennya"
                          className="group flex items-baseline justify-between gap-3 text-sm text-white/75 hover:text-white"
                        >
                          <span>Каталог рішень</span>
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

        <section id="articles" className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <FadeIn>
                  <Eyebrow tone="on-paper">
                    Розділ 01 · Нотатник (у підготовці)
                  </Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Шість статей,{" "}
                    <span className="it">на які варто чекати.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-5">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-bg/75 md:text-lg">
                    Перша хвиля публікацій стартує у 2026. Кожен текст пише
                    інженер або PM, редагує редакція — без SEO-води.
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
                        ● У підготовці
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
                    Розсилка
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-bg">
                    Сповістіть, коли вийде перша стаття.
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-bg/70">
                    Без спаму — 1 лист, коли публікуємо щось вагоме. Адреса
                    використовується виключно для цього.
                  </p>
                </div>
                <a
                  href="mailto:info@stretch-sufit.pl?subject=%D0%9F%D1%96%D0%B4%D0%BF%D0%B8%D1%81%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D1%80%D0%BE%D0%B7%D1%81%D0%B8%D0%BB%D0%BA%D1%83"
                  className="inline-flex items-center gap-2 rounded-full bg-bg px-6 py-3 font-display text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Підписати мене →
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
                  <Eyebrow>Розділ 02 · Найчастіші питання</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Шість питань,{" "}
                    <span className="it text-paper">які чуємо щодня.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-5">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    Підбірка з {faqs.length} відповідей на{" "}
                    <Link
                      href="/ua/pytannya"
                      className="underline decoration-red/60 underline-offset-4 hover:text-white"
                    >
                      сторінці FAQ
                    </Link>
                    . По одному питанню з кожної категорії.
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
                      href={`/ua/pytannya#${entry.slug}`}
                      className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-red hover:text-white"
                    >
                      Відкрити у FAQ →
                    </Link>
                  </details>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={520}>
              <div className="mt-14 text-center">
                <Link
                  href="/ua/pytannya"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:border-red hover:text-red"
                >
                  Усі {faqs.length} відповідей →
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
                  <Eyebrow>Розділ 03 · Теми</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Почніть з{" "}
                    <span className="it text-paper">категорії.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-6">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    Відфільтровані секції FAQ — оберіть тему, яка Вас цікавить,
                    і переходьте напряму до відповідей.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-4 md:mt-20 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
              {categoryList.map((cat, i) => {
                const meta = faqCategoriesUk[cat];
                const count = faqs.filter((f) => f.category === cat).length;
                return (
                  <FadeIn delay={100 + i * 50} key={cat}>
                    <Link
                      href={`/ua/pytannya?kategoriya=${cat}`}
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
                        Відкрити категорію →
                      </span>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <FadeIn>
                  <Eyebrow tone="on-paper">Розділ 04 · Каталог</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Шість рішень{" "}
                    <span className="it">у каталозі.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-5">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-bg/75 md:text-lg">
                    Кожне рішення має окрему сторінку з технічними
                    параметрами, фото реалізацій та конфігуратором вартості.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-4 md:mt-20 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
              {products.map((p, i) => (
                <FadeIn delay={100 + i * 50} key={p.slug}>
                  <Link
                    href={`/ua/rishennya/${p.slug}`}
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
                      Відкрити рішення →
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
              <Eyebrow tone="on-dark">Ще маєте питання?</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Знання в інтернеті мають межі.{" "}
                <span className="it">Замір — ні.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Безкоштовний замір зі зразками у Вас вдома — найшвидший
                спосіб побачити матеріал наживо й отримати конкретну вартість.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/ua#cta"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Замовити безкоштовний замір →
                </Link>
                <a
                  href="tel:+48455444475"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  +48 455 444 475
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
