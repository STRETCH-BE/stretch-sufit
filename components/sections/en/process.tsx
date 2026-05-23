/**
 * Process — 4-step timeline. English.
 * File path: /components/sections/en/process.tsx
 */

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";

const steps = [
  {
    num: "01",
    title: "Get in touch",
    body:
      "Call us or send the form. Within 24 h we schedule your free site visit.",
  },
  {
    num: "02",
    title: "Measurement & quote",
    body:
      "A specialist visits you, measures the room, advises on materials and provides a quote on the spot.",
  },
  {
    num: "03",
    title: "Production",
    body:
      "We make the ceiling to measure in our facility. 1–3 working days from contract signing.",
  },
  {
    num: "04",
    title: "Installation in 1 day",
    body:
      "A 2-installer team. No dust, no mess. You can stay home during the work. Up to 15 years warranty.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-paper py-24 text-bg md:py-32">
      <Container>
        <div className="mb-20 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-16">
          <FadeIn>
            <Eyebrow tone="on-paper">Process</Eyebrow>
            <SectionTitle className="mt-5 text-bg">
              From first contact
              <br />
              to a finished ceiling
              <br />
              <span className="it">in 4 steps.</span>
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="max-w-md text-[16px] leading-[1.6] text-bg/65">
              No stress, no surprises. Measurement and quote are free. You only pay when you approve the project — and we never subcontract.
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
