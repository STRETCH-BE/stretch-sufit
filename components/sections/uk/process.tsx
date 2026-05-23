/**
 * Process — 4-step timeline. Ukrainian.
 * File path: /components/sections/uk/process.tsx
 */

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";

const steps = [
  {
    num: "01",
    title: "Контакт",
    body:
      "Зателефонуйте або заповніть форму. Протягом 24 год домовляємося про безкоштовний візит.",
  },
  {
    num: "02",
    title: "Замір і кошторис",
    body:
      "Спеціаліст приїжджає до вас, обмірює приміщення, радить матеріал і надає кошторис на місці.",
  },
  {
    num: "03",
    title: "Виробництво",
    body:
      "Стелю виробляємо за розмірами на нашій фабриці. 1–3 робочі дні від підписання договору.",
  },
  {
    num: "04",
    title: "Монтаж за 1 день",
    body:
      "Бригада з 2 монтажників. Без пилу, без безладу. Можна жити вдома під час робіт. До 15 років гарантії.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-paper py-24 text-bg md:py-32">
      <Container>
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-16">
          <FadeIn>
            <Eyebrow tone="on-paper">Процес</Eyebrow>
            <SectionTitle className="mt-5 text-bg">
              Від першого контакту
              <br />
              до готової стелі
              <br />
              <span className="it">за 4 кроки.</span>
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="max-w-md text-[16px] leading-[1.6] text-bg/65">
              Без стресу, без сюрпризів. Замір і кошторис безкоштовні. Платите лише тоді, коли затвердите проєкт — і ми ніколи нічого не передаємо підрядникам.
            </p>
          </FadeIn>
        </div>

        <ol className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div
            aria-hidden="true"
            className="absolute left-[5%] right-[5%] top-9 hidden h-px bg-bg/10 lg:block"
          />

          {steps.map((step, i) => (
            <FadeIn key={step.num} as="li" delay={i * 100}>
              <div
                className={`mb-6 flex size-[72px] items-center justify-center rounded-full border-4 border-paper font-display text-[28px] font-medium ${
                  i % 2 === 0 ? "bg-red text-white" : "bg-bg text-white"
                }`}
              >
                {step.num}
              </div>
              <h3 className="font-display text-[22px] font-semibold leading-tight tracking-[-0.02em]">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-[1.55] text-bg/65">
                {step.body}
              </p>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </section>
  );
}
