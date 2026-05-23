/**
 * Why Us — Ukrainian.
 * File path: /components/sections/ua/why-us.tsx
 */

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";

const reasons = [
  {
    badge: "A",
    title: "Власне виробництво",
    body:
      "Виробництво мембран, зварювання й оздоблення — усе наше. Нічого не передаємо підрядникам — контролюємо кожен метр.",
  },
  {
    badge: "B",
    title: "Дві фабрики, одна система",
    body:
      "ПВХ виробляємо на нашій фабриці в Польщі (з 2016 року), поліестер у Бельгії (з 2018 року). ПВХ + поліестер з класом пожежної безпеки А2 (негорючі), сертифіковані в ЄС.",
  },
  {
    badge: "C",
    title: "До 15 років гарантії",
    body:
      "Письмова гарантія на кожен проєкт — 15 років на ПВХ, 10 років на поліестер. Сервіс і заміна мембрани без зняття профілів.",
  },
  {
    badge: "D",
    title: "Уся Польща",
    body:
      "17 локацій від Ґданська до Кракова. Замір і монтаж нашими бригадами, ніколи не за франшизою.",
  },
  {
    badge: "E",
    title: "Швидко й чисто",
    body:
      "Монтаж за 1 день. Без штукатурки, без фарбування, без пилу. Можна жити вдома під час робіт.",
  },
  {
    badge: "F",
    title: "Прозорі ціни",
    body:
      "Безкоштовний замір і кошторис. Без прихованих платежів. Кошториси дійсні 30 днів.",
  },
];

export function WhyUs() {
  return (
    <section
      id="why"
      className="border-t border-white/8 bg-bg-soft py-24 md:py-32"
    >
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-16">
          <FadeIn>
            <Eyebrow>Чому Stretch</Eyebrow>
            <SectionTitle className="mt-5 text-white">
              Бренд.
              <br />
              <span className="it">Не випадкова бригада.</span>
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="max-w-md text-[16px] leading-[1.6] text-white/55">
              Stretch — це система, розроблена в Бельгії з 2018 року. Належить{" "}
              <strong className="font-semibold text-white">Stretchgroup</strong>, яка з 2024 року також володіє польським виробником{" "}
              <strong className="font-semibold text-white">Alto Design</strong> — нашою ПВХ-фабрикою в Ченстохові (з 2016 року). Кожен монтаж виконують наші навчені монтажники, ніколи не підрядники.
            </p>
          </FadeIn>
        </div>

        <ul className="grid grid-cols-1 gap-px border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <FadeIn key={reason.badge} as="li" delay={(i % 3) * 80}>
              <article className="flex h-full min-h-[260px] flex-col bg-bg-soft p-9">
                <div
                  aria-hidden="true"
                  className="mb-5 flex size-11 items-center justify-center rounded-full border border-red font-display text-lg font-bold text-red"
                >
                  {reason.badge}
                </div>
                <h3 className="font-display text-[22px] font-semibold leading-tight tracking-[-0.02em] text-white">
                  {reason.title}
                </h3>
                <p className="mt-2.5 text-sm leading-[1.55] text-white/55">
                  {reason.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  );
}
