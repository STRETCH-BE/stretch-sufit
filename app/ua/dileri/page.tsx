/**
 * Stretch Partner Program page — /ua/dileri
 * File path: /app/ua/dileri/page.tsx
 *
 * Ukrainian translation of /dealerzy. International licensing model
 * presentation. Slug uses Latin transliteration ("dileri" from дилери).
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

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://stretch-sufit.vercel.app";

const PARTNER_MAILTO =
  "mailto:info@stretch-sufit.pl?subject=Stretch%20Partner%20Program%20%E2%80%94%20%D0%B7%D0%B0%D1%8F%D0%B2%D0%BA%D0%B0";

export const metadata: Metadata = {
  title: "Стати дилером — Stretch Partner Program | Stretch Sufit",
  description:
    "Ліцензована технологія натяжних стель Stretch для монтажних компаній. Навчання в Бельгії або Польщі, власні алюмінієві профілі, інструменти, маркетингова підтримка. Регіональна ексклюзивність.",
  alternates: {
    canonical: "/ua/dileri",
    languages: {
      "pl-PL": "/dealerzy",
      "en-US": "/en/dealers",
      "uk-UA": "/ua/dileri",
    },
  },
  openGraph: {
    title: "Stretch Partner Program | Stretch Sufit",
    description:
      "Стати ліцензованим партнером Stretch — бельгійська система натяжних стель з польською виробничою базою.",
    type: "website",
    url: `${BASE_URL}/ua/dileri`,
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
      name: "Стати дилером",
      item: `${BASE_URL}/ua/dileri`,
    },
  ],
};

const pillars = [
  {
    label: "Ліцензія",
    title: "Система, а не франшиза",
    body: "Ви не купуєте право на логотип. Отримуєте ліцензію на технологію Stretch: протокол монтажу, авторські алюмінієві профілі, каліброві мембрани та бренд, який щось значить у галузі.",
  },
  {
    label: "Навчання",
    title: "Брюссель або Ченстохова",
    body: "Повна програма навчання в штаб-квартирі Stretch у Бельгії або у польському виробничому центрі. 5–10 днів теорії плюс практика на реальних об'єктах.",
  },
  {
    label: "Інструменти",
    title: "Повністю обладнаний старт",
    body: "Профілі, мембрани, монтажні інструменти (нагрівачі, балони, шпателі), технічна документація, картки зразків — все замовляється напряму з фабрики в Бельгії або Польщі.",
  },
  {
    label: "Бренд",
    title: "Спільний стандарт",
    body: "Візуальна ідентичність, маркетингові матеріали, профіль у польському та міжнародному каталозі. Ваше місто / регіон позначено на stretch-sufit.pl і stretchplafond.be.",
  },
  {
    label: "Підтримка",
    title: "Інженер завжди на зв'язку",
    body: "Черговий інженер виробництва відповідає на технічні запитання в робочі години. На складних проєктах — виїзд на об'єкт разом з Вашою бригадою.",
  },
  {
    label: "Ексклюзивність",
    title: "Регіон зарезервовано для Вас",
    body: "У межах партнерського договору ми резервуємо географічну зону. Не продаємо конкурентну ліцензію в Вашому місті, поки Ви залишаєтесь активним партнером.",
  },
];

const idealProfile = [
  {
    no: "01",
    text: "Ви працюєте в оздобленні інтер'єрів, монтажі підвісних стель, штукатурці або столярці. Маєте бригаду з 2–5 осіб і власну інструментальну базу.",
  },
  {
    no: "02",
    text: "Шукаєте друге, преміум джерело доходу — не чергову загальну послугу для розширення. Розумієте різницю між «ціною за м²» і продажем цінності.",
  },
  {
    no: "03",
    text: "Готові інвестувати в обладнання та навчання. Бар'єр входу реальний — це не курси на вихідних, це система.",
  },
  {
    no: "04",
    text: "Маєте локальну мережу: архітектори, генпідрядники, забудовники, проєктні бюро. Або рішучість побудувати таку мережу за 12 місяців.",
  },
];

const stats = [
  { value: "13+", label: "країн", italic: "глобально" },
  { value: "2018", label: "Бельгія", italic: "рік заснування" },
  { value: "5–10", label: "днів", italic: "навчання" },
  { value: "1", label: "система", italic: "Брюссель → світ" },
];

const processSteps = [
  {
    no: "01",
    title: "Заявка",
    body: "Пишете короткий опис компанії — профіль діяльності, досвід, регіон, бізнес-план у 5 пунктах. Відповідаємо протягом 5 робочих днів.",
  },
  {
    no: "02",
    title: "Кваліфікаційна розмова",
    body: "Відеоконференція з координатором партнерської програми (PL) або міжнародним (EN, RU). Обговорюємо обсяг, регіон, економічні умови.",
  },
  {
    no: "03",
    title: "Договір і навчання",
    body: "Після підписання партнерського договору запрошуємо на навчання в Брюсселі або Ченстохові. Повний стартовий пакет (інструменти, матеріали, маркетинг) висилається під час навчання.",
  },
  {
    no: "04",
    title: "Операційний старт",
    body: "Перші 3 монтажі під наглядом нашого інженера. Після сертифікації — повне право працювати під брендом Stretch у своєму регіоні.",
  },
];

export default function DileriPageUa() {
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
                Стати дилером
              </li>
            </ol>
          </Container>
        </nav>

        <section className="relative isolate overflow-hidden bg-bg pb-24 pt-12 md:pb-32 md:pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 80% 0%, rgba(225,16,26,0.08), transparent 60%)",
            }}
          />
          <Container>
            <FadeIn>
              <Eyebrow>Stretch Partner Program · Belgium → World</Eyebrow>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                Бельгійська система.{" "}
                <span className="it text-paper">Ваш ринок.</span>
                <br />
                <span className="text-red">Один стандарт.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                Для монтажних компаній, які хочуть привнести технологію
                натяжних стель Stretch на свій ринок. Не франшиза —{" "}
                <span className="text-white">ліцензія на систему</span>:
                технологію, інструменти, навчання та бренд.
              </p>
            </FadeIn>
            <FadeIn delay={220}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={PARTNER_MAILTO}
                  className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-4 font-display text-base font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Заявити інтерес →
                </a>
                <a
                  href={`tel:${siteConfig.contact.phonePLUA}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/5"
                >
                  Поговорити з координатором
                </a>
              </div>
            </FadeIn>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow tone="on-paper">Розділ 01 · Модель</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Що саме купуєте —{" "}
                    <span className="it">і чого не купуєте.</span>
                  </SectionTitle>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <FadeIn delay={120}>
                  <div className="space-y-6 text-[17px] leading-[1.7] text-bg/80 md:text-lg">
                    <p>
                      Партнерська програма Stretch — це{" "}
                      <strong className="text-bg">технічна ліцензія</strong>{" "}
                      поєднана з навчанням, постійною інженерною підтримкою та
                      правом працювати під брендом Stretch у погодженому
                      регіоні.
                    </p>
                    <p>
                      Ми не продаємо PDF з інструкцією і логотипом. Продаємо
                      доступ до{" "}
                      <span className="font-serif italic">закритої екосистеми</span>{" "}
                      — авторські алюмінієві профілі, недоступні для звичайних
                      монтажників, каліброві мембрани, інструменти та
                      навчальний протокол, який продовжує еволюціонувати після
                      8 років.
                    </p>
                    <p className="border-l-2 border-red pl-5 font-serif text-xl italic text-bg">
                      «Франчайзинг — про повторюваність. Партнерство — про те,
                      що будь-яка бригада Stretch могла б приїхати на об'єкт
                      іншої — і продовжити той самий монтаж без жодного слова
                      пояснень.»
                    </p>
                    <p>
                      Найважливіша різниця: Ви залишаєтеся{" "}
                      <strong className="text-bg">власником своєї компанії</strong>{" "}
                      — не оператором чужої. Ваша бухгалтерія, Ваші
                      працівники, Ваші цінові рішення в локальних межах. Наш
                      вплив закінчується там, де починається стандарт якості.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-6">
                <FadeIn>
                  <Eyebrow>Розділ 02 · Стартовий пакет</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Шість речей,{" "}
                    <span className="it text-paper">які отримуєте.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-6">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    Без прихованих цінових шарів. Повний перелік складових
                    партнерського пакету — описуємо на першій розмові,
                    підписуємо в договорі.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {pillars.map((p, i) => (
                <FadeIn delay={140 + i * 60} key={p.label}>
                  <div className="h-full rounded border border-white/10 bg-bg-card/60 p-7 transition-colors hover:border-red/40">
                    <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                      {p.label}
                    </div>
                    <div className="mt-3 font-display text-lg font-semibold leading-tight text-white">
                      {p.title}
                    </div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">
                      {p.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow tone="on-paper">
                    Розділ 03 · Ідеальний партнер
                  </Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Кому{" "}
                    <span className="it">вдасться.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-8 text-[17px] leading-[1.7] text-bg/75">
                    Шукаємо не кожного. Шукаємо компанії, які{" "}
                    <span className="font-serif italic">вже добре працюють</span>{" "}
                    у своїй категорії та хочуть додати преміум-розширення — не
                    тих, хто починає з нуля.
                  </p>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <div className="space-y-4 md:space-y-5">
                  {idealProfile.map((row, i) => (
                    <FadeIn delay={120 + i * 80} key={row.no}>
                      <div className="grid grid-cols-[auto_1fr] gap-5 rounded border border-bg/10 bg-paper-2 p-6 md:gap-6 md:p-7">
                        <div className="font-display text-2xl font-semibold tracking-[-0.02em] text-red md:text-3xl">
                          {row.no}
                        </div>
                        <p className="text-[15.5px] leading-[1.65] text-bg/80 md:text-base md:leading-[1.7]">
                          {row.text}
                        </p>
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
                  <Eyebrow>Розділ 04 · Процес приєднання</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Від заявки до{" "}
                    <span className="it text-paper">першого монтажу.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-6">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    Середній час від першого email до повної операційності:{" "}
                    <strong className="text-white">8–12 тижнів</strong>.
                    Більшість часу — підготовка навчання та відправлення
                    обладнання.
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

        <section className="bg-bg-soft py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-4xl">
              <FadeIn>
                <Eyebrow>Маніфест партнерства</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                  Три речі, яких ми{" "}
                  <span className="it text-red">не</span> вимагаємо.
                </h2>
              </FadeIn>

              <div className="mt-14 space-y-12 md:space-y-14">
                {[
                  {
                    no: "Не безповоротний вступний внесок.",
                    yes: "Партнерська інвестиція — це конкретні товари: обладнання, матеріали, навчання. Немає абстрактної «плати за бренд».",
                  },
                  {
                    no: "Не обов'язок купувати все у нас.",
                    yes: "Профілі та мембрани — так, вони мають надходити з нашого виробництва (це серце системи). Все інше (освітлення, аксесуари) можна замовляти локально.",
                  },
                  {
                    no: "Не контроль Вашої бухгалтерії.",
                    yes: "Ви — самостійна компанія. Платите ліцензію та матеріали згідно з договором, решта — Ваші рішення: працівники, локальний маркетинг, ціни.",
                  },
                ].map((item, i) => (
                  <FadeIn delay={140 + i * 80} key={item.no}>
                    <div className="grid gap-5 md:grid-cols-12 md:gap-8">
                      <div className="md:col-span-5">
                        <div className="font-display text-xl font-semibold tracking-[-0.02em] text-red md:text-2xl">
                          <span className="it">{item.no}</span>
                        </div>
                      </div>
                      <div className="md:col-span-7">
                        <p className="text-[16px] leading-[1.65] text-white/75 md:text-[17px]">
                          {item.yes}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="relative isolate overflow-hidden bg-red py-24 text-white md:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(circle at 20% 80%, rgba(0,0,0,0.2), transparent 50%)",
            }}
          />
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Перший крок</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Напишіть у 5 реченнях,{" "}
                <span className="it">хто Ви.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Компанія, досвід, регіон, план на перші 12 місяців.
                Відповідаємо протягом 5 робочих днів. Не надсилаємо
                автоматичних анкет.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={PARTNER_MAILTO}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Надіслати заявку →
                </a>
                <a
                  href={`tel:${siteConfig.contact.phonePLUA}`}
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
