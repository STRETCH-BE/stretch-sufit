/**
 * About page — Ukrainian. /uk/pro-nas
 * File path: /app/uk/pro-nas/page.tsx
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { Nav } from "@/components/sections/uk/nav";
import { Footer } from "@/components/sections/uk/footer";
import { MobileStickyCTA } from "@/components/sections/uk/mobile-sticky-cta";

export const metadata: Metadata = {
  title: "Про нас — Дві фабрики, одна група | Stretch Sufit",
  description:
    "Stretch Sufit — частина бельгійської Stretchgroup. ПВХ виробляється на нашій фабриці Alto Design у Польщі (з 2016 року), поліестер у Stretch Productions BV у Бельгії (з 2018 року). У 2024 році група придбала Alto Design — відтоді компанія публічно працює під брендом Stretch Sufit.",
  alternates: { canonical: "/uk/pro-nas" },
  openGraph: {
    title: "Про нас — Stretch Sufit",
    description:
      "Дві фабрики, одна група. ПВХ з Польщі, поліестер з Бельгії. Історія Stretchgroup, Alto Design і Stretch Productions.",
    type: "article",
  },
};

const countries = [
  "Бельгія",
  "Польща",
  "Нідерланди",
  "Німеччина",
  "Франція",
  "Швейцарія",
  "Велика Британія",
  "Мальта",
  "Ісландія",
  "США",
  "Канада",
  "ОАЕ",
  "Індія",
];

export default function AboutPageUk() {
  return (
    <>
      <Nav />

      <main>
        <section className="relative isolate overflow-hidden bg-bg pb-24 pt-32 md:pb-32 md:pt-40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 20% 0%, rgba(225,16,26,0.06), transparent 60%)",
            }}
          />
          <Container>
            <FadeIn><Eyebrow>Дві фабрики · одна група · один стандарт</Eyebrow></FadeIn>
            <FadeIn delay={80}>
              <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                Бельгія робить{" "}
                <span className="it text-paper">поліестер.</span>
                <br />
                <span className="text-red">Польща</span>{" "}
                <span className="it">робить ПВХ.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
                Stretch Sufit — частина бельгійської{" "}
                <strong className="text-white">Stretchgroup</strong> — холдингу, що об'єднує дві фабрики натяжних стель: Stretch Productions BV у Бельгії та Alto Design у Польщі. Не франшиза, не посередник. Реальне виробництво з обох боків, навчені монтажні бригади на місцях.
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn><Eyebrow tone="on-paper">Розділ 01 · Ченстохова, 2016</Eyebrow></FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Польське виробництво{" "}
                    <span className="it">починається тут.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <figure className="mt-10 overflow-hidden rounded">
                    <div className="relative aspect-[4/5] w-full bg-bg-soft">
                      <Image
                        src="/images/about/hala-czestochowa.jpg"
                        alt="Виробничий цех Alto Design (Stretch Sufit) у Ченстохові"
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 font-serif text-sm italic text-bg/55">
                      — Виробничий цех Alto Design. Ченстохова, вул. Лєгіонів 59.
                    </figcaption>
                  </figure>
                </FadeIn>
              </div>

              <div className="md:col-span-7 md:pl-8">
                <FadeIn delay={120}>
                  <div className="space-y-6 text-[17px] leading-[1.7] text-bg/80 md:text-lg">
                    <p>
                      У 2016 році <strong className="text-bg">Роман Плюта</strong> заснував{" "}
                      <strong className="text-bg">Alto Design</strong> у Ченстохові — польського виробника ПВХ натяжних стель. Мета була конкретна: виробляти ПВХ мембрану преміум-класу на власній землі, у Польщі, з повним контролем над кожним кроком — від калібрування кольору до обробки країв.
                    </p>
                    <p>
                      Протягом наступних восьми років компанія здобула репутацію виробника точності — поважної у польській галузі за якість збірки та безкомпромісний підхід до деталей. Серед монтажників ходило просте правило:{" "}
                      <span className="font-serif italic">«хочеш хороший ПВХ — телефонуй в Alto Design».</span>
                    </p>
                    <p className="border-l-2 border-red pl-5 font-serif text-xl italic text-bg">
                      «Усе, що ми тут побудували — фабрику, команду, стандарт — побудували власними руками. Польський ПВХ не гірший за західний. Просто треба вміти його робити».
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-7 md:order-2 md:pl-8">
                <FadeIn delay={120}>
                  <div className="space-y-6 text-[17px] leading-[1.7] text-white/75 md:text-lg">
                    <p>
                      Двома роками пізніше, у 2018, поблизу Антверпена{" "}
                      <strong className="text-white">Майкл Нікасенс</strong> заснував{" "}
                      <strong className="text-white">Stretch Productions BV</strong> — бельгійського виробника натяжних стель з тканої поліестрової мембрани. Поліестер з поліуретановим покриттям: технічно інший матеріал ніж ПВХ, орієнтований на більш вимогливий преміум-сегмент.
                    </p>
                    <p className="border-l-2 border-red pl-5 font-serif text-xl italic text-white/85">
                      «Я хотів побудувати систему, яку можна було б ліцензувати глобально — не франшизну мережу, а навчених партнерів, які монтують одну й ту саму технологію за одним стандартом, незалежно від країни».
                    </p>
                    <p>
                      <strong className="text-white">Stretchgroup</strong> виросла навколо Stretch Productions — холдинг, у якому Нікасенс об'єднав виробництво поліестру, алюмінієвих профілів і протокол монтажу. Протягом кількох років група розширилася на понад десяток ринків через навчених монтажних партнерів.
                    </p>
                  </div>
                </FadeIn>
              </div>

              <div className="md:col-span-5 md:order-1">
                <FadeIn><Eyebrow>Розділ 02 · Антверпен, 2018</Eyebrow></FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Бельгійський поліестер{" "}
                    <span className="it text-paper">і система.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <figure className="mt-10 overflow-hidden rounded">
                    <div className="relative aspect-[4/5] w-full bg-bg-soft">
                      <Image
                        src="/images/about/michael-nicasens.jpg"
                        alt="Майкл Нікасенс, засновник Stretchgroup"
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 font-serif text-sm italic text-white/55">
                      — Майкл Нікасенс, засновник Stretchgroup. Антверпен, 2018.
                    </figcaption>
                  </figure>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn><Eyebrow tone="on-paper">Розділ 03 · Придбання, 2024</Eyebrow></FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Дві фабрики —{" "}
                    <span className="it">одна група.</span>
                  </SectionTitle>
                </FadeIn>
              </div>

              <div className="md:col-span-7 md:pl-8">
                <FadeIn delay={120}>
                  <div className="space-y-6 text-[17px] leading-[1.7] text-bg/80 md:text-lg">
                    <p>
                      До 2024 року Stretchgroup виробляла поліестер у Бельгії й монтувала через навчені бригади у понад десятку країн. Бракувало повністю власної, повністю контрольованої виробничої бази ПВХ у Центральній Європі. Рішення: замість будувати фабрику з нуля, знайти найкращу компанію, що вже на ринку — і об'єднатися.
                    </p>
                    <p>
                      У 2024 році Майкл Нікасенс придбав{" "}
                      <strong className="text-bg">Alto Design</strong> у Романа Плюти — компанію з Ченстохови з репутацією точності у ПВХ-виробництві. Alto Design приєдналася до Stretchgroup як повноправна дочірня компанія, зберігаючи свою польську робочу силу, свою польську фабрику та свій польський стандарт майстерності.
                    </p>
                    <p className="border-l-2 border-red pl-5 font-serif text-xl italic text-bg">
                      «У Польщі поєднується автентична культура ремесла й близькість до європейських матеріалів. Це місце, де виробляється кращий ПВХ — і у більш сталий спосіб».
                    </p>
                    <p>
                      Після операційного ребрендингу Alto Design тепер публічно працює під назвою{" "}
                      <strong className="text-bg">Stretch Sufit</strong> — одночасно як польський виробник ПВХ, монтажник по всій Польщі та виробничий хаб ПВХ для всієї групи.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn><Eyebrow>Розділ 04 · Система</Eyebrow></FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Не послуга.{" "}
                    <span className="it text-paper">Система.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-7">
                <FadeIn delay={120}>
                  <p className="text-[17px] leading-[1.7] text-white/75 md:text-lg">
                    Stretch — це не один продукт. Це закрита екосистема: власні алюмінієві профілі, калібрований ПВХ (Польща) і поліестерові (Бельгія) мембрани, монтажні інструменти і протокол навчання. Кожен компонент розроблений працювати з іншими — і тільки з ними.
                  </p>
                </FadeIn>

                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      label: "Профіль",
                      title: "Власний алюміній",
                      body: "Наші власні монтажні профілі, недоступні для звичайних монтажників. Виробляються в Бельгії.",
                    },
                    {
                      label: "Мембрана",
                      title: "Дві фабрики",
                      body: "ПВХ до 6,50 м з Alto Design (Польща), поліестер до 5,15 м зі Stretch Productions (Бельгія). Акустичні матеріали класу A2 й 100% переробка.",
                    },
                    {
                      label: "Протокол",
                      title: "Один стандарт",
                      body: "Кожна бригада навчена за одним протоколом — Брюссель, Ченстохова, Дубай, Торонто. Однаковий монтаж.",
                    },
                    {
                      label: "Гарантія",
                      title: "До 15 років",
                      body: "15 років на ПВХ, 10 років на поліестер. Відповідальність на рівні групи, а не одного монтажника.",
                    },
                  ].map((card, i) => (
                    <FadeIn delay={140 + i * 60} key={card.label}>
                      <div className="h-full rounded border border-white/10 bg-bg-card/60 p-6 transition-colors hover:border-white/20">
                        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">{card.label}</div>
                        <div className="mt-3 font-display text-lg font-semibold text-white">{card.title}</div>
                        <p className="mt-3 text-sm leading-relaxed text-white/60">{card.body}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-white/10 bg-bg py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {[
                { value: "2016", label: "Польща", italic: "Alto Design — старт ПВХ" },
                { value: "2018", label: "Бельгія", italic: "Stretch Productions — старт поліестру" },
                { value: "2024", label: "Група", italic: "Alto Design в Stretchgroup" },
                { value: "13+", label: "країн", italic: "глобально" },
              ].map((stat, i) => (
                <FadeIn delay={i * 80} key={stat.label}>
                  <div>
                    <div className="font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none tracking-[-0.03em] text-white">{stat.value}</div>
                    <div className="mt-3 text-sm text-white/65">
                      {stat.label} <span className="it text-white/45">— {stat.italic}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-bg-soft py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn><Eyebrow>Розділ 05 · Охоплення</Eyebrow></FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-white">
                  Польща — наша ПВХ-фабрика.{" "}
                  <span className="it text-paper">Світ — наш ринок.</span>
                </SectionTitle>
              </FadeIn>
              <FadeIn delay={140}>
                <p className="mt-6 text-lg leading-relaxed text-white/65">
                  Stretch Sufit обслуговує польський ринок і одночасно постачає мережу Stretchgroup у понад десятку країн на чотирьох континентах. Поліестрова фабрика у Бельгії та наша ПВХ-фабрика у Польщі разом постачають монтажників групи.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={200}>
              <div className="mx-auto mt-16 flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base md:text-lg">
                {countries.map((country, i) => (
                  <span key={country} className="flex items-center gap-6">
                    <span className="font-display tracking-[-0.01em] text-white/85">{country}</span>
                    {i < countries.length - 1 && (<span className="text-red">·</span>)}
                  </span>
                ))}
              </div>
            </FadeIn>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-7">
                <FadeIn><Eyebrow tone="on-paper">Розділ 06 · Що далі</Eyebrow></FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Акустика. Дизайн.{" "}
                    <span className="it">Re-Sound.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-8 text-[17px] leading-[1.7] text-bg/75 md:text-lg">
                    <strong className="text-bg">Re-Sound BV</strong> — третя компанія в портфелі Stretchgroup — бельгійський спеціаліст з преміум-акустичних панелей. Для Stretch Sufit це означає каталог, розширений дизайн-якісними продуктами з реальною акустичною продуктивністю: зменшення реверберації до 75% без естетичного компромісу.
                  </p>
                </FadeIn>
                <FadeIn delay={200}>
                  <p className="mt-6 text-[17px] leading-[1.7] text-bg/75 md:text-lg">
                    Польща зараз — найшвидше зростаючий ринок натяжних стель у Європі. Не випадково ми інвестуємо тут найбільше — і саме тут запускаємо наступне покоління акустичних продуктів.
                  </p>
                </FadeIn>
              </div>
              <div className="md:col-span-5">
                <FadeIn delay={160}>
                  <div className="rounded bg-bg p-8 text-white md:p-10">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">● Скоро</div>
                    <div className="mt-5 font-display text-2xl font-semibold leading-tight text-white">
                      Stretch Sufit{" "}
                      <span className="it text-paper">×</span> Re-Sound
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-white/65">
                      Нова лінія акустичних панелей, інтегрованих з натяжною стелею. Запуск у каталозі Stretch Sufit — Q3 2026.
                    </p>
                    <div className="mt-6 border-t border-white/10 pt-5">
                      <div className="font-serif text-sm italic text-white/55">
                        «Стеля, що виглядає як мистецтво.{" "}
                        <span className="text-white/85">А звучить як студія звукозапису».</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-4xl">
              <FadeIn><Eyebrow>Маніфест</Eyebrow></FadeIn>
              <FadeIn delay={80}>
                <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                  Три речі, яких ми{" "}
                  <span className="it text-red">не</span>{" "}
                  робимо.
                </h2>
              </FadeIn>

              <div className="mt-16 space-y-12 md:space-y-16">
                {[
                  {
                    no: "Не франшиза.",
                    yes: 'Кожен монтаж виконує навчена бригада Stretch Sufit. Без підрядників, без «бригад за рекомендацією». Одна компанія, одна гарантія.',
                  },
                  {
                    no: "Не посередник.",
                    yes: "Працюємо з власним виробництвом — бельгійські профілі, ПВХ з нашої польської фабрики, поліестер зі Stretch Productions. Без генеричних замінників.",
                  },
                  {
                    no: "Не імпровізація.",
                    yes: "Кожен монтаж за тим самим протоколом, з тими самими інструментами. Бельгія, Польща, США, Індія — той самий стандарт.",
                  },
                ].map((item, i) => (
                  <FadeIn delay={140 + i * 80} key={item.no}>
                    <div className="grid gap-6 md:grid-cols-12 md:gap-8">
                      <div className="md:col-span-4">
                        <div className="font-display text-2xl font-semibold tracking-[-0.02em] text-red md:text-3xl">
                          <span className="it">{item.no}</span>
                        </div>
                      </div>
                      <div className="md:col-span-8">
                        <p className="text-[17px] leading-[1.65] text-white/75 md:text-lg">{item.yes}</p>
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
                "radial-gradient(circle at 80% 20%, rgba(0,0,0,0.2), transparent 50%)",
            }}
          />
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Поговорімо</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Польща робить ПВХ.{" "}
                <span className="it">Бельгія робить поліестер.</span>
                <br />
                <span className="text-white/85">Ви</span>{" "}
                <span className="it">— виграєте.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Замовте безкоштовний замір або просто зателефонуйте. Передзвонимо протягом 24 годин.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/uk#cta" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]">
                  Замовити безкоштовний замір →
                </Link>
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
