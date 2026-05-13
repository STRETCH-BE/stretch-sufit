/**
 * Process — 4-step timeline.
 * File path: /components/sections/process.tsx
 *
 * Paper background with a connecting line behind the numbered circles.
 * Odd-indexed steps render red, even render black, alternating across the row.
 * On mobile the line is suppressed and the steps stack vertically.
 */

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";

const steps = [
  {
    num: "01",
    title: "Kontakt",
    body:
      "Zadzwoń lub wyślij formularz. W ciągu 24 h ustalamy termin bezpłatnej wizyty.",
  },
  {
    num: "02",
    title: "Pomiar i wycena",
    body:
      "Specjalista przyjeżdża do Ciebie, mierzy pomieszczenie, doradza materiał i przedstawia wycenę na miejscu.",
  },
  {
    num: "03",
    title: "Produkcja",
    body:
      "Sufit szyjemy na wymiar w naszym zakładzie. 1–3 dni roboczych od podpisania umowy.",
  },
  {
    num: "04",
    title: "Montaż w 1 dzień",
    body:
      "Zespół 2 monterów. Bez kurzu, bez bałaganu. Możesz mieszkać w trakcie prac. 15 lat gwarancji.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-paper py-24 text-bg md:py-32">
      <Container>
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-16">
          <FadeIn>
            <Eyebrow tone="on-paper">Realizacja</Eyebrow>
            <SectionTitle className="mt-5 text-bg">
              Od kontaktu
              <br />
              do gotowego sufitu
              <br />
              <span className="it">w 4 krokach.</span>
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="max-w-md text-[16px] leading-[1.6] text-bg/65">
              Bez stresu, bez niespodzianek. Pomiar i wycena są bezpłatne.
              Płacisz dopiero, gdy zaakceptujesz projekt — i nigdy nie zlecamy
              nic na zewnątrz.
            </p>
          </FadeIn>
        </div>

        <ol className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Connecting line behind the circles (desktop only) */}
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
