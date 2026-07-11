/**
 * B2B Cooperation page — /ua/b2b
 * File path: /app/ua/b2b/page.tsx
 *
 * Ukrainian translation of /wspolpraca-b2b. Audience: Ukrainian-speaking
 * architects, contractors and developers operating in Poland. Phone CTA
 * uses the UA-speaking line (+48 455 444 475).
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
import { siteConfig } from "@/lib/site-config";
import { languageAlternates, routes } from "@/lib/i18n-routes";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://altodesign.pl";

const B2B_MAILTO =
  "mailto:info@stretch-sufit.pl?subject=B2B%20%D1%81%D0%BF%D1%96%D0%B2%D0%BF%D1%80%D0%B0%D1%86%D1%8F";

export const metadata: Metadata = {
  title:
    "B2B співпраця — архітектори, підрядники, забудовники | Stretch Sufit",
  description:
    "B2B співпраця зі Stretch Sufit: виділений project manager, зразки та файли BIM/CAD, проєктні ціни, монтаж після робочого часу, ПДВ-фактура, гарантовані терміни. Гарантія до 15 років на матеріал.",
  alternates: {
    canonical: "/ua/b2b",
    languages: languageAlternates(routes.b2b),
  },
  openGraph: {
    title: "B2B співпраця | Stretch Sufit",
    description:
      "Натяжні стелі Stretch для архітекторів, проєктантів, генпідрядників і забудовників. ПВХ — Польща, поліестер — Бельгія.",
    type: "website",
    url: `${BASE_URL}/ua/b2b`,
    locale: "uk_UA",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Головна",
      item: `${BASE_URL}/ua`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "B2B співпраця",
      item: `${BASE_URL}/ua/b2b`,
    },
  ],
};

const audiences = [
  {
    no: "01",
    title: "Архітектори та проєктанти інтер'єрів",
    body: "Файли BIM/Revit і AutoCAD, безкоштовні набори зразків для студій, виділений технічний радник і комісійна програма від підписаного проєкту.",
    tag: "Студія",
  },
  {
    no: "02",
    title: "Генпідрядники",
    body: "Стеля як окреме замовлення — з власним керівником, графіком, узгодженим з рештою оздоблення, ПДВ-фактурою та 15-річною гарантією на матеріал.",
    tag: "ГП",
  },
  {
    no: "03",
    title: "Забудовники, готелі, HoReCa",
    body: "Повторювані реалізації: десятки квартир в одному проєкті, ресторани з акустикою, готельні мережі з єдиним стандартом оздоблення.",
    tag: "Масштаб",
  },
];

const offerings = [
  {
    label: "Project Manager",
    title: "Одна людина до кінця проєкту",
    body: "Кожен B2B-проєкт веде виділений PM — від заміру через акцепт документації до протоколу здачі. Без передачі між відділами.",
  },
  {
    label: "Матеріали до проєкту",
    title: "BIM, CAD, зразки",
    body: "Блоки Revit і AutoCAD на запит, технічні картки мембран (ПВХ, поліестер, акустика), повна палітра RAL — все електронною поштою протягом 24 годин.",
  },
  {
    label: "Проєктна вартість",
    title: "B2B-ціни з порогами обсягу",
    body: "Індивідуальна ціна понад 200 м² сумарної площі проєкту. Відтермінований платіж для перевірених ГП.",
  },
  {
    label: "Логістика",
    title: "Монтаж після годин і у вихідні",
    body: "Опен-спейс, ресторани, магазини — монтуємо поза робочими годинами об'єкта. Бригади доступні у вихідні без авральних доплат.",
  },
  {
    label: "Документація",
    title: "Повний пакет на здачу",
    body: "Гігієнічний сертифікат PZH, клас реакції на вогонь, декларації матеріалів, протокол монтажу, гарантійний талон. Все підписане, в PDF.",
  },
  {
    label: "Масштаб",
    title: "Реалізації 200 – 5 000 м²",
    body: "Локальне виробництво в Ченстохові — без очікування поставок з Бельгії. Великі проєкти закриваємо у заявлені терміни.",
  },
];

const stats = [
  { value: "200+", label: "м²", italic: "поріг B2B-цін" },
  { value: "24 год", label: "контакт", italic: "PM передзвонить" },
  { value: "15", label: "років", italic: "гарантії матеріалу" },
  { value: "17", label: "міст", italic: "обслуговуємо регулярно" },
];

const processSteps = [
  {
    no: "01",
    title: "Перша розмова",
    body: "20-хвилинна розмова з PM — обсяг проєкту, терміни, технічні параметри, орієнтовна вартість. Безкоштовно, без зобов'язань.",
  },
  {
    no: "02",
    title: "Замір і документація",
    body: "Замірник на об'єкті зі зразками та технічними картками. Детальна вартість за 48 годин, документація BIM/CAD на запит.",
  },
  {
    no: "03",
    title: "Договір і графік",
    body: "B2B-договір з гарантованим терміном монтажу та штрафами за зрив. Аванс 30%, решта після протоколу здачі.",
  },
  {
    no: "04",
    title: "Реалізація та здача",
    body: "Монтаж у заявлене вікно, протокол здачі з керівником будівництва, гарантійний талон на 15 років. ПДВ-фактура переказом.",
  },
];

export default function B2BPageUa() {
  return (
    <>
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
                B2B співпраця
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
                "radial-gradient(ellipse at 15% 10%, rgba(225,16,26,0.08), transparent 55%)",
            }}
          />
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-8">
                <FadeIn>
                  <Eyebrow>B2B · Співпраця для професіоналів</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <h1 className="mt-6 font-display text-[clamp(2.5rem,6.5vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                    Студія, підрядник,{" "}
                    <span className="it text-paper">забудовник.</span>
                    <br />
                    Одна команда.{" "}
                    <span className="text-red">Один стандарт.</span>
                  </h1>
                </FadeIn>
                <FadeIn delay={160}>
                  <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                    Натяжні стелі Stretch для команд, для яких повторювана
                    якість, дотримані терміни та повна документація — не опція,
                    а умова старту.
                  </p>
                </FadeIn>
              </div>
              <div className="md:col-span-4">
                <FadeIn delay={220}>
                  <div className="rounded border border-white/10 bg-bg-card/60 p-6">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                      ● B2B-лінія
                    </div>
                    <a
                      href="tel:+48455444475"
                      className="mt-4 block font-display text-2xl font-semibold tracking-[-0.02em] text-white hover:text-red"
                    >
                      +48 455 444 475
                    </a>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      Пн–Пт 09:00–15:30. Поза годинами залиште повідомлення —
                      передзвонимо протягом 24 робочих годин.
                    </p>
                    <a
                      href={B2B_MAILTO}
                      className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold text-red hover:text-white"
                    >
                      info@stretch-sufit.pl →
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section className="text-bg bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow tone="on-paper">Розділ 01 · Для кого</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Три групи.{" "}
                    <span className="it">Один режим роботи.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-7">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-bg/75 md:text-lg">
                    Працюємо з партнерами, які цінують передбачуваність. Менше
                    значить більше — беремо проєкти, обсяг яких розуміємо і
                    терміни яких можемо гарантувати.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
              {audiences.map((a, i) => (
                <FadeIn delay={140 + i * 80} key={a.no}>
                  <div className="h-full rounded border border-bg/10 bg-paper-2 p-8 transition-colors hover:border-red/40">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                        {a.no}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-bg/50">
                        {a.tag}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-bg">
                      {a.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-bg/70">
                      {a.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-6">
                <FadeIn>
                  <Eyebrow>Розділ 02 · Що надаємо</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Не послуга.{" "}
                    <span className="it text-paper">Процес.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-6">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    Шість елементів, що визначають B2B-стандарт Stretch Sufit.
                    Кожен з них прописаний у договорі — не у комерційній
                    обіцянці.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {offerings.map((o, i) => (
                <FadeIn delay={140 + i * 60} key={o.label}>
                  <div className="h-full rounded border border-white/10 bg-bg-card/60 p-7 transition-colors hover:border-white/20">
                    <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                      {o.label}
                    </div>
                    <div className="mt-3 font-display text-lg font-semibold leading-tight text-white">
                      {o.title}
                    </div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">
                      {o.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <section className="text-bg bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow tone="on-paper">
                    Розділ 03 · Програма для студій
                  </Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Архітектор рекомендує.{" "}
                    <span className="it">Студія заробляє.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-8 text-[17px] leading-[1.7] text-bg/80">
                    Для архітекторів і проєктантів інтер'єрів діє комісійна
                    програма — виплачується від підписаного контракту з
                    кінцевим клієнтом. Без прихованих порогів, без угод
                    ексклюзивності. Рекомендуйте лише тоді, коли впевнені, що
                    рішення справді підходить проєкту.
                  </p>
                </FadeIn>
                <FadeIn delay={200}>
                  <a
                    href={B2B_MAILTO}
                    className="mt-10 inline-flex items-center gap-2 rounded-full bg-bg px-6 py-3 font-display text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                  >
                    Долучитися до програми →
                  </a>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <div className="grid gap-4 md:gap-5">
                  {[
                    {
                      no: "•",
                      title: "Комісія від контракту",
                      body: "Винагорода рахується від нетто-вартості контракту з кінцевим клієнтом — переказ після оплати авансу.",
                    },
                    {
                      no: "•",
                      title: "Безкоштовні зразки та матеріали",
                      body: "Валіза зі зразками всіх плівок, карток RAL, технічних карток. Оновлюється щороку.",
                    },
                    {
                      no: "•",
                      title: "Файли BIM і CAD на запит",
                      body: "Блоки Revit, AutoCAD і SketchUp для кожного з 6 рішень у каталозі — готуються індивідуально під проєкт.",
                    },
                    {
                      no: "•",
                      title: "Технічна консультація",
                      body: "Інженер з виробництва відповідає на питання щодо інтеграції з освітленням, акустикою, кондиціонуванням. Без очікування на пропозицію.",
                    },
                  ].map((row, i) => (
                    <FadeIn delay={160 + i * 70} key={row.title}>
                      <div className="rounded border border-bg/10 bg-paper p-6 transition-colors hover:border-red/40">
                        <div className="flex items-baseline gap-4">
                          <span className="font-display text-red">
                            {row.no}
                          </span>
                          <div>
                            <div className="font-display text-base font-semibold text-bg">
                              {row.title}
                            </div>
                            <p className="mt-2 text-[14.5px] leading-relaxed text-bg/70">
                              {row.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-white/10 bg-bg-soft py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {stats.map((s, i) => (
                <FadeIn delay={i * 80} key={s.label}>
                  <div>
                    <div className="font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none tracking-[-0.03em] text-white">
                      {s.value}
                    </div>
                    <div className="mt-3 text-sm text-white/65">
                      {s.label}{" "}
                      <span className="it text-white/45">— {s.italic}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-6">
                <FadeIn>
                  <Eyebrow>Розділ 04 · Процес</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Чотири кроки від email{" "}
                    <span className="it text-paper">до здачі.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-6">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    Без сюрпризів. Ви знаєте, що відбувається на кожному
                    етапі — і що підписуєте перед запуском виробництва.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              {processSteps.map((step, i) => (
                <FadeIn delay={140 + i * 80} key={step.no}>
                  <div className="h-full rounded border border-white/10 bg-bg-card/40 p-7">
                    <div className="font-display text-3xl font-semibold tracking-[-0.02em] text-red">
                      {step.no}
                    </div>
                    <div className="mt-5 font-display text-lg font-semibold leading-tight text-white">
                      {step.title}
                    </div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">
                      {step.body}
                    </p>
                  </div>
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
              <Eyebrow tone="on-dark">Поговорімо про проєкт</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Проєкт понад 200 м²?{" "}
                <span className="it">Почніть з розмови.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Коротка 20-хвилинна розмова — наш Project Manager оцінить
                обсяг, дасть орієнтовну вартість і виробничий календар.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={B2B_MAILTO}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Написати нам →
                </a>
                <a
                  href={`tel:${siteConfig.contact.phonePLUA}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  +48 455 444 475
                </a>
              </div>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-white/65">
                Приватний клієнт? · Заповніть форму на{" "}
                <Link href="/ua#cta" className="underline hover:text-white">
                  головній сторінці
                </Link>
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <MobileStickyCTA />
    </>
  );
}
