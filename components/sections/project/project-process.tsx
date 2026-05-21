/**
 * Project Process — 4-step horizontal timeline on paper bg.
 * File path: /components/sections/project/project-process.tsx
 */

import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

export type ProcessStep = {
  title: string;
  body: string;
};

type Props = {
  heading?: string;
  steps: ProcessStep[];
};

export function ProjectProcess({
  heading = "Jak to zrobiliśmy",
  steps,
}: Props) {
  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <SectionTitle as="h2">{heading}</SectionTitle>

        <ol className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((step, i) => {
            const isRed = i % 2 === 0;
            return (
              <li key={i} className="relative">
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-12 top-5 hidden h-px w-[calc(100%-3rem)] bg-bg/15 md:block"
                  />
                )}
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-mono text-sm font-semibold text-white ${
                    isRed ? "bg-red" : "bg-bg"
                  }`}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bg/70">
                  {step.body}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
