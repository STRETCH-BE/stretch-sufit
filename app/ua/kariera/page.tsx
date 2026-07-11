/**
 * Career page — /ua/kariera
 * File path: /app/ua/kariera/page.tsx
 *
 * Ukrainian translation of /kariera. Open roles for Ukrainian speakers
 * working in Poland — installers, surveyors, customer advisors,
 * production operators. Slug "kariera" coincides with PL spelling.
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

const HR_EMAIL = "info@stretch-sufit.pl";

function mailto(role: string) {
  return `mailto:${HR_EMAIL}?subject=${encodeURIComponent(
    `Заявка — ${role}`
  )}`;
}

export const metadata: Metadata = {
  title:
    "Кар'єра — робота в Stretch Sufit | Бельгійська технологія, польське виробництво",
  description:
    "Працюйте у Stretch Sufit — частина бельгійської Stretchgroup. Монтажник натяжних стель, замірник, консультант, виробництво. Трудовий договір, службовий автомобіль, навчання в Бельгії. Ченстохова і вся Польща.",
  alternates: {
    canonical: "/ua/kariera",
    languages: languageAlternates(routes.careers),
  },
  openGraph: {
    title: "Кар'єра у Stretch Sufit",
    description:
      "Відкриті вакансії у Stretch Sufit — монтажники, замірники, консультанти. Трудовий договір, авто, навчання.",
    type: "website",
    url: `${BASE_URL}/ua/kariera`,
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
      name: "Кар'єра",
      item: `${BASE_URL}/ua/kariera`,
    },
  ],
};

type Role = {
  no: string;
  title: string;
  type: string;
  location: string;
  body: string;
  responsibilities: string[];
  requirements: string[];
};

const roles: Role[] = [
  {
    no: "01",
    title: "Монтажник натяжних стель",
    type: "Повна зайнятість · Трудовий договір",
    location: "Ченстохова + відрядження (PL)",
    body: "Працюєте у 2-особовій монтажній бригаді. Виконуєте повний цикл монтажу на об'єкті клієнта — від укладання захисту, через монтаж профілів і натягування мембрани, до протоколу здачі.",
    responsibilities: [
      "Монтаж ПВХ, поліестрових і акустичних стель за протоколом Stretch",
      "Монтаж LED-освітлення та точкових світильників, інтегрованих у стелю",
      "Представлення компанії при прямому контакті з клієнтом",
      "Догляд за обладнанням і службовим автомобілем",
    ],
    requirements: [
      "Точність і культура роботи у чужому домі / офісі",
      "Досвід в оздобленні інтер'єрів вітається (але не вимагається)",
      "Водійські права категорії B",
      "Готовність до відряджень у межах Польщі (1–3 ночі на місяць)",
    ],
  },
  {
    no: "02",
    title: "Замірник / Технічний консультант",
    type: "Повна зайнятість · Трудовий договір + премії",
    location: "Обраний регіон (PL)",
    body: "Перший контакт клієнта з фірмою після телефонного дзвінка. Приїжджаєте до квартири / офісу / ресторану зі зразками, міряєте, радите матеріал, презентуєте пропозицію.",
    responsibilities: [
      "Виїзди на замір до клієнта з повним набором зразків матеріалів",
      "Технічна консультація: тип мембрани, освітлення, акустика",
      "Підготовка вартості та оферування у системі CRM",
      "Закриття продажу — премія від авансу та фінальної вартості контракту",
    ],
    requirements: [
      "Уміння спілкуватися з преміум-клієнтом",
      "Знання ринку оздоблення або дизайну інтер'єрів (вітається)",
      "Водійські права категорії B і комфорт за кермом службового SUV",
      "Самостійність — Ви працюєте в полі, в офісі буваєте раз на тиждень",
    ],
  },
  {
    no: "03",
    title: "Консультант клієнта — офіс / гаряча лінія",
    type: "Повна зайнятість · Трудовий договір",
    location: "Ченстохова · офіс",
    body: "Перша лінія телефонного та поштового контакту. Приймаєте звернення з форми, кваліфікуєте лід, домовляєтеся про замір, координуєте графік замірників.",
    responsibilities: [
      "Обслуговування телефону та пошти info@ у годинах 09:00–15:30",
      "Кваліфікація лідів і призначення замірникам",
      "Післяпродажна підтримка та перші гарантійні розмови",
      "Оновлення CRM і проста звітність",
    ],
    requirements: [
      "Дуже добра польська у мові та письмі",
      "Комфортна робота в системах CRM (вчимо конкретної)",
      "Вітається: англійська або українська / російська",
      "Терпіння та щира цікавість до проблеми клієнта",
    ],
  },
  {
    no: "04",
    title: "Оператор виробництва мембран",
    type: "Повна зайнятість · Трудовий договір",
    location: "Ченстохова · вул. Лєгіонів 59",
    body: "Робота у виробничому цеху. Розкрій і зварювання мембран ПВХ та поліестру згідно з виробничими аркушами, підготовленими після заміру.",
    responsibilities: [
      "Обслуговування машин для різання та зварювання мембран",
      "Контроль якості матеріалу на кожному етапі",
      "Пакування та підготовка до відправки на об'єкт",
      "Безпечна робота з матеріалами та обладнанням",
    ],
    requirements: [
      "Точність і відповідальність за якість продукту",
      "Досвід у виробництві (пошиття, широкоформатний друк) вітається",
      "Готовність до роботи у однозмінному режимі (07:00–15:00)",
    ],
  },
];

const benefits = [
  {
    label: "Форма зайнятості",
    title: "Трудовий договір. Без винятків.",
    body: "Усі штатні позиції на трудовому договорі — з першого дня. Без «випробувальних періодів на B2B», без фіктивного самозайнятого. ZUS, відпустка, лікарняний у звичайному режимі.",
  },
  {
    label: "Винагорода",
    title: "Основа + квартальні премії",
    body: "Стабільна основа відповідно до ролі + система премій залежно від позиції: монтажник — за реалізованими проєктами, замірник — за закритим продажем, офіс — за KPI команди.",
  },
  {
    label: "Обладнання",
    title: "Повне фірмове спорядження",
    body: "Службовий автомобіль для виїзних посад, телефон, інструменти, одяг з логотипом. Без «додавання власного спорядження». Все брендоване Stretch.",
  },
  {
    label: "Навчання",
    title: "Протокол Stretch — у Бельгії або Ченстохові",
    body: "Повне вступне навчання за протоколом виробника, додаткове навчання при кожному новому продукті. Для тих, хто виділяється — виїзди до цеху в Брюсселі.",
  },
  {
    label: "Шлях розвитку",
    title: "Junior → Senior → Team Lead",
    body: "Шлях зрозумілий і вимірюваний: кількість завершених об'єктів, сертифікації у продуктових протоколах, оцінка клієнтів. Просуваємо з середини.",
  },
  {
    label: "Культура",
    title: "Робота з ефектом, видимим того ж дня",
    body: "Заходите до квартири о 8:00 з потрісканою стелею. О 14:00 виходите, клієнт плаче від щастя. Це рідкість в інших галузях.",
  },
];

const values = [
  {
    no: "Робимо.",
    yes: "Не консультуємо монтаж, не передаємо підрядникам, не продаємо «рішень». Маємо бригади, інструменти, виробничий цех і клієнтів. Робота справжня.",
  },
  {
    no: "Рахуємо.",
    yes: "Кожен проєкт має ціну, кожен монтаж — час, кожна бригада — KPI. Не вдаємо, що «головне — пристрасть». Головне — результат, і ми його винагороджуємо.",
  },
  {
    no: "Вчимо.",
    yes: "Новий монтажник проводить перші 2 тижні на об'єкті із сеньйором. Замірник вчиться продавати без тиску. Офісний консультант вчиться розмовляти з архітектором. Інвестуємо в це.",
  },
];

export default function KarieraPageUa() {
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
                Кар'єра
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
                "radial-gradient(ellipse at 20% 0%, rgba(225,16,26,0.07), transparent 60%)",
            }}
          />
          <Container>
            <FadeIn>
              <Eyebrow>Кар'єра · Ченстохова і Польща</Eyebrow>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                Робота, у якій{" "}
                <span className="it text-paper">видно результат</span>
                <br />
                <span className="text-red">наприкінці</span> дня.
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                Stretch Sufit — польський стовп бельгійської групи Stretch.
                Зростаємо у 17 польських містах, виробляємо у Ченстохові,
                монтуємо у домах, офісах, ресторанах. Шукаємо людей, які
                люблять роботу з вимірюваним результатом.
              </p>
            </FadeIn>
            <FadeIn delay={220}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#positions"
                  className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-4 font-display text-base font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Відкриті вакансії →
                </a>
                <a
                  href={mailto("загальна заявка")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/5"
                >
                  Подати спонтанно
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
                  <Eyebrow tone="on-paper">Розділ 01 · Чому ми</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Бельгійська стеля.{" "}
                    <span className="it">Польська компанія.</span>
                  </SectionTitle>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <FadeIn delay={120}>
                  <div className="space-y-6 text-[17px] leading-[1.7] text-bg/80 md:text-lg">
                    <p>
                      Працюєте у польській компанії з польською культурою,
                      польською бухгалтерією та польським керівником
                      виробництва. Але продукт, який монтуєте — частково
                      походить з нашої ПВХ-фабрики в Ченстохові (з 2016),
                      частково з поліестрової фабрики Stretch Productions у
                      Бельгії (з 2018). Уся система, в якій працюєте,
                      належить{" "}
                      <strong className="text-bg">Stretchgroup</strong>.
                    </p>
                    <p>
                      Це не «працюємо на закордонну фірму». Це{" "}
                      <span className="font-serif italic">ми частина міжнародної групи,</span>{" "}
                      у якій польська компанія — Alto Design Sp. z o.o., що
                      працює під брендом Stretch Sufit — відповідає за
                      виробництво ПВХ і монтаж у 17 польських містах.
                      Операційні рішення ухвалюються у Ченстохові, стратегічні
                      — спільно з центром у Бельгії.
                    </p>
                    <p className="border-l-2 border-red pl-5 font-serif text-xl italic text-bg">
                      «Ми взяли найкращу виробничу компанію у Ченстохові й
                      вмонтували у неї бельгійський стандарт. Польська
                      команда, польська ПВХ-фабрика, бельгійська технологія
                      поліестру —{" "}
                      <span className="not-italic">одна група, дві фабрики, один стандарт.</span>»
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section id="positions" className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <FadeIn>
                  <Eyebrow>Розділ 02 · Відкриті позиції</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Чотири ролі,{" "}
                    <span className="it text-paper">на які постійно рекрутуємо.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-5">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    Ростемо, тож ці позиції відкриті практично цілий рік. Якщо
                    підходите — напишіть, навіть якщо немає формального
                    оголошення.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 space-y-5 md:mt-20 md:space-y-6">
              {roles.map((role, i) => (
                <FadeIn delay={120 + i * 80} key={role.no}>
                  <details className="group rounded border border-white/10 bg-bg-card/40 p-7 transition-colors open:border-red/40 md:p-9">
                    <summary className="grid cursor-pointer list-none grid-cols-1 items-start gap-4 md:grid-cols-12 md:items-center md:gap-6">
                      <div className="font-display text-xl font-semibold tracking-[-0.02em] text-red md:col-span-1 md:text-2xl">
                        {role.no}
                      </div>
                      <div className="md:col-span-6">
                        <div className="font-display text-xl font-semibold leading-tight text-white md:text-2xl">
                          {role.title}
                        </div>
                      </div>
                      <div className="md:col-span-4">
                        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/55">
                          {role.type}
                        </div>
                        <div className="mt-1 text-[13px] text-white/55">
                          {role.location}
                        </div>
                      </div>
                      <div className="hidden md:col-span-1 md:flex md:justify-end">
                        <span
                          aria-hidden="true"
                          className="font-display text-2xl text-red transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </div>
                    </summary>

                    <div className="mt-8 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-12 md:gap-12">
                      <div className="md:col-span-12">
                        <p className="text-[15.5px] leading-[1.7] text-white/75 md:text-base">
                          {role.body}
                        </p>
                      </div>

                      <div className="md:col-span-6">
                        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                          Обов'язки
                        </div>
                        <ul className="mt-4 space-y-2.5">
                          {role.responsibilities.map((r) => (
                            <li
                              key={r}
                              className="grid grid-cols-[auto_1fr] gap-3 text-[14.5px] leading-relaxed text-white/75"
                            >
                              <span className="text-red">·</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="md:col-span-6">
                        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                          Вимоги
                        </div>
                        <ul className="mt-4 space-y-2.5">
                          {role.requirements.map((r) => (
                            <li
                              key={r}
                              className="grid grid-cols-[auto_1fr] gap-3 text-[14.5px] leading-relaxed text-white/75"
                            >
                              <span className="text-red">·</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="md:col-span-12">
                        <a
                          href={mailto(role.title)}
                          className="inline-flex items-center gap-2 rounded-full bg-red px-6 py-3 font-display text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                        >
                          Подати на цю позицію →
                        </a>
                      </div>
                    </div>
                  </details>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-6">
                <FadeIn>
                  <Eyebrow tone="on-paper">Розділ 03 · Що пропонуємо</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Шість речей,{" "}
                    <span className="it">на які робимо ставку.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-6">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-bg/75 md:text-lg">
                    Без «безкоштовної піци у п'ятницю» та інших удаваних
                    бенефітів. Зосереджуємось на речах, які справді
                    покращують якість роботи й життя.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {benefits.map((b, i) => (
                <FadeIn delay={140 + i * 60} key={b.label}>
                  <div className="h-full rounded border border-bg/10 bg-paper-2 p-7 transition-colors hover:border-red/40">
                    <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                      {b.label}
                    </div>
                    <div className="mt-3 font-display text-lg font-semibold leading-tight text-bg">
                      {b.title}
                    </div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-bg/70">
                      {b.body}
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
                <Eyebrow>Маніфест команди</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                  Три слова, які{" "}
                  <span className="it text-red">описують</span> нас найкраще.
                </h2>
              </FadeIn>

              <div className="mt-14 space-y-12 md:space-y-14">
                {values.map((item, i) => (
                  <FadeIn delay={140 + i * 80} key={item.no}>
                    <div className="grid gap-5 md:grid-cols-12 md:gap-8">
                      <div className="md:col-span-4">
                        <div className="font-display text-2xl font-semibold tracking-[-0.02em] text-red md:text-3xl">
                          <span className="it">{item.no}</span>
                        </div>
                      </div>
                      <div className="md:col-span-8">
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
                "radial-gradient(circle at 80% 80%, rgba(0,0,0,0.2), transparent 50%)",
            }}
          />
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Надіслати CV</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Не чекайте оголошення.{" "}
                <span className="it">Пишіть зараз.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Надішліть CV і коротке повідомлення про себе. Кожну заявку
                читає конкретна людина — відповідаємо протягом 7 робочих днів
                незалежно від рішення.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={mailto("загальна заявка")}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Подати поштою →
                </a>
                <a
                  href={`tel:${siteConfig.contact.phonePLUA}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Подзвонити: +48 455 444 475
                </a>
              </div>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-white/65">
                GDPR: подаючи заявку, Ви погоджуєтесь на обробку даних згідно з{" "}
                <Link
                  href="/polityka-prywatnosci"
                  className="underline hover:text-white"
                >
                  політикою конфіденційності
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
