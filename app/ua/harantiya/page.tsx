/**
 * Warranty page — Ukrainian. /ua/harantiya
 * File path: /app/ua/harantiya/page.tsx
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
import { languageAlternates, routes } from "@/lib/i18n-routes";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://altodesign.pl";

const LAST_UPDATED = "14 травня 2026";

export const metadata: Metadata = {
  title: "Гарантія до 15 років — натяжні стелі | Stretch Sufit",
  description:
    "Повні умови гарантії Stretch на матеріал — 15 років на ПВХ з нашої фабрики в Польщі, 10 років на поліестер зі Stretch Productions BV у Бельгії. Що покривається, як подати заявку.",
  alternates: {
    canonical: "/ua/harantiya",
    languages: languageAlternates(routes.warranty),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Головна", item: `${BASE_URL}/ua` },
    { "@type": "ListItem", position: 2, name: "Гарантія", item: `${BASE_URL}/ua/harantiya` },
  ],
};

export default function WarrantyPageUk() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <Nav />

      <main>
        <nav aria-label="breadcrumb" className="border-b border-white/5 bg-bg pb-4 pt-28 md:pt-32">
          <Container>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
              <li><Link href="/ua" className="hover:text-white">Головна</Link></li>
              <li aria-hidden="true">·</li>
              <li className="text-white" aria-current="page">Гарантія</li>
            </ol>
          </Container>
        </nav>

        <section className="relative isolate overflow-hidden bg-bg pb-16 pt-12 md:pb-20 md:pt-16">
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
                <FadeIn><Eyebrow>Оновлено: {LAST_UPDATED}</Eyebrow></FadeIn>
                <FadeIn delay={80}>
                  <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                    Гарантія{" "}
                    <span className="it text-paper">до 15 років.</span>
                  </h1>
                </FadeIn>
                <FadeIn delay={160}>
                  <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                    Одна з найдовших гарантій на матеріал на польському ринку натяжних стель.{" "}
                    <strong className="text-white">15 років на ПВХ</strong> з нашої фабрики в Ченстохові,{" "}
                    <strong className="text-white">10 років на поліестер</strong> зі Stretch Productions BV у Бельгії. Обидва матеріали випробовуються в європейських умовах з 2016 та 2018 років відповідно.
                  </p>
                </FadeIn>
              </div>

              <div className="md:col-span-4">
                <FadeIn delay={120}>
                  <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
                    <Stat number="15" label="років ПВХ" />
                    <Stat number="10" label="років поліестер" />
                    <Stat number="5" label="років LED" />
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn><Eyebrow tone="on-paper">Два матеріали, дві гарантії</Eyebrow></FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-bg">
                  Кожен матеріал має свою{" "}
                  <span className="it">криву довговічності.</span>
                </SectionTitle>
              </FadeIn>
              <FadeIn delay={140}>
                <p className="mt-6 text-[17px] leading-[1.7] text-bg/80">
                  Гарантія відповідає реальному терміну служби матеріалу — а не маркетинговій цифрі. ПВХ має УФ-стабілізатори, які зберігають колір і структуру протягом 15 років. Поліестрова тканина — інший матеріал — преміум-сегментна тканина з поліуретановим покриттям, з гарантією 10 років.
                </p>
              </FadeIn>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-10">
              <FadeIn delay={160}>
                <div className="rounded border-2 border-red bg-paper-2 p-8">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">01 · ПВХ</div>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.01em] text-bg md:text-4xl">15 років</h3>
                  <p className="mt-4 text-[15px] leading-[1.7] text-bg/75">
                    Повна гарантія на матеріал мембрани ПВХ, виробленої на нашій фабриці{" "}
                    <strong className="text-bg">Alto Design</strong> у Ченстохові. Покриває стабільність кольору, відсутність тріщин, міцність з'єднань з профілями та водонепроникність до 100 л/м².
                  </p>
                  <p className="mt-3 text-[14px] leading-[1.6] text-bg/55">
                    Виконується в Польщі безпосередньо Stretch Sufit / Alto Design Sp. z o.o.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={220}>
                <div className="rounded border border-bg/10 bg-paper-2 p-8">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">02 · Поліестер</div>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.01em] text-bg md:text-4xl">10 років</h3>
                  <p className="mt-4 text-[15px] leading-[1.7] text-bg/75">
                    Гарантія на матеріал тканої поліестрової мембрани з поліуретановим покриттям, виробленої{" "}
                    <strong className="text-bg">Stretch Productions BV</strong> у Бельгії. Покриває стабільність матовості, відсутність знебарвлення, міцність захисного покриття.
                  </p>
                  <p className="mt-3 text-[14px] leading-[1.6] text-bg/55">
                    Виконується в Польщі Stretch Sufit як уповноваженим монтажником Stretchgroup.
                  </p>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn><Eyebrow>Плюс статутний захист</Eyebrow></FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-white">
                  Незалежно —{" "}
                  <span className="it text-paper">2-річна «rękojmia».</span>
                </SectionTitle>
              </FadeIn>
              <FadeIn delay={140}>
                <p className="mt-6 text-[17px] leading-[1.7] text-white/75">
                  Окрім гарантії від виробника, польське споживче право надає вам «rękojmię» — статутну гарантію за Цивільним кодексом (ст. 556–576). Діє 2 роки від доставки. Від неї не можна відмовитися — це право, а не послуга.
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="mt-4 text-[15px] leading-[1.6] text-white/55">
                  На практиці споживач у Польщі має{" "}
                  <strong className="text-white">15 років гарантії + 2 роки rękojmii</strong> на стелю з ПВХ або{" "}
                  <strong className="text-white">10 + 2</strong> на поліестер.
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="bg-bg-soft py-24 md:py-32">
          <Container>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn><Eyebrow>Що покривається</Eyebrow></FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Дефекти матеріалу та{" "}
                    <span className="it text-paper">монтажу.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-6 text-lg leading-relaxed text-white/70">
                    Повний обсяг того, що ми виправляємо без зайвих питань протягом гарантійного періоду. Потрібен лише підтверджуючий документ (рахунок-фактура або чек) і повідомлення на info@stretch-sufit.pl.
                  </p>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <div className="space-y-4">
                  <CoveredItem
                    title="Стабільність кольору"
                    body="Мембрана зберігає оригінальний колір протягом усього гарантійного періоду. Знебарвлення, пожовтіння, зміна відтінку — повне покриття."
                  />
                  <CoveredItem
                    title="Міцність з'єднання"
                    body="Мембрана залишається прикріпленою до периметральних профілів. Випадання, провисання через дефект матеріалу — ремонтуємо чи замінюємо."
                  />
                  <CoveredItem
                    title="Без тріщин і розривів"
                    body="Мембрана не тріскається, не рветься, не деформується за нормальної експлуатації (температура від –10°C до +50°C)."
                  />
                  <CoveredItem
                    title="Водонепроникність ПВХ"
                    body="ПВХ утримує воду в разі протікання згори. Якщо водонепроникність порушиться — замінюємо."
                  />
                  <CoveredItem
                    title="Акустична продуктивність"
                    body="Акустичні стелі зберігають NRC (коефіцієнт зменшення шуму) протягом усього гарантійного періоду."
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn><Eyebrow>Що не покривається</Eyebrow></FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Справедливі{" "}
                    <span className="it text-paper">виключення.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-6 text-lg leading-relaxed text-white/70">
                    Гарантія не покриває пошкодження поза нашим контролем. Більшість з них можна відремонтувати за окрему плату — не треба замінювати всю стелю.
                  </p>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <div className="space-y-4">
                  <ExcludedItem
                    title="Механічні пошкодження"
                    body="Порізи ножем чи гострими предметами, удари. Мембрана тонка (0,17–0,40 мм) — її можна проколоти. Ремонт платний, зазвичай без заміни всієї стелі."
                  />
                  <ExcludedItem
                    title="Неправильне використання"
                    body="Чищення розчинниками, спиртом, абразивними матеріалами. Вплив температур поза робочим діапазоном (наприклад, відкритий вогонь, протікаюча піч)."
                  />
                  <ExcludedItem
                    title="Зміни третіми особами"
                    body="Демонтаж і повторний монтаж будь-ким, окрім уповноваженого дилера Stretch. Встановлення нових точок освітлення без консультації."
                  />
                  <ExcludedItem
                    title="Форс-мажор"
                    body="Пожежа, повінь, землетрус, вибух. Покривається вашою страховкою на житло."
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn><Eyebrow tone="on-paper">Як подати заявку</Eyebrow></FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-bg">
                  Чотири кроки —{" "}
                  <span className="it">без бюрократії.</span>
                </SectionTitle>
              </FadeIn>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              <ProcessStep number="01" title="Зв'яжіться" body="Напишіть на info@stretch-sufit.pl або зателефонуйте +48 455 444 475. Опишіть проблему й додайте фото." />
              <ProcessStep number="02" title="Первинна оцінка" body="Протягом 3 робочих днів відповідаємо — чи випадок підлягає гарантії або потребує огляду на місці." />
              <ProcessStep number="03" title="Огляд або ремонт" body="Якщо потрібно — відправляємо бригаду. Термін: до 14 днів від звернення, зазвичай швидше." />
              <ProcessStep number="04" title="Розв'язання" body="Ремонт або заміна (якщо покривається) безкоштовно для вас. Стандарт — протягом 30 днів від звернення." />
            </div>

            <FadeIn delay={400}>
              <div className="mx-auto mt-16 max-w-3xl rounded border border-bg/10 bg-paper-2 p-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">Необхідні документи</div>
                <ul className="mt-5 space-y-3 text-[15px] text-bg/80">
                  <li className="flex gap-3"><span className="text-red">●</span><span>Рахунок-фактура ПДВ або чек (підтвердження покупки)</span></li>
                  <li className="flex gap-3"><span className="text-red">●</span><span>Фото пошкоджень (3–5 фотографій з різних відстаней)</span></li>
                  <li className="flex gap-3"><span className="text-red">●</span><span>Короткий опис обставин (коли помітили, умови)</span></li>
                </ul>
                <p className="mt-6 text-[14px] leading-[1.6] text-bg/60">
                  За rękojmią ви додатково маєте право вимагати зниження ціни або розірвання договору (якщо дефект суттєвий). Деталі в{" "}
                  <Link href="/regulamin" className="text-red underline">Правилах</Link>.
                </p>
              </div>
            </FadeIn>
          </Container>
        </section>

        <section className="relative isolate overflow-hidden bg-red py-20 text-white md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Питання?</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Подайте заявку{" "}
                <span className="it">— ми вирішимо.</span>
              </h2>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a href="mailto:info@stretch-sufit.pl?subject=Гарантійна%20заявка" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]">
                  Написати email
                </a>
                <a href="tel:+48455444475" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10">
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

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-semibold leading-none tracking-[-0.02em] text-white md:text-4xl">{number}</div>
      <div className="mt-2 text-sm text-white/60">{label}</div>
    </div>
  );
}

function CoveredItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex gap-5 border-l-2 border-red/40 pl-6">
      <div className="flex-1">
        <div className="font-display text-base font-semibold text-white md:text-lg">{title}</div>
        <p className="mt-2 text-[15px] leading-relaxed text-white/65">{body}</p>
      </div>
    </div>
  );
}

function ExcludedItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex gap-5 border-l-2 border-white/15 pl-6">
      <div className="flex-1">
        <div className="font-display text-base font-semibold text-white md:text-lg">{title}</div>
        <p className="mt-2 text-[15px] leading-relaxed text-white/55">{body}</p>
      </div>
    </div>
  );
}

function ProcessStep({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="rounded border border-bg/10 bg-paper-2 p-6">
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">{number}</div>
      <h3 className="mt-3 font-display text-lg font-semibold leading-tight tracking-[-0.01em] text-bg">{title}</h3>
      <p className="mt-3 text-[14px] leading-[1.6] text-bg/70">{body}</p>
    </div>
  );
}
