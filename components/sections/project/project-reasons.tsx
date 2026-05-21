/**
 * Project Reasons — 3-card "why this product" section on white bg.
 * File path: /components/sections/project/project-reasons.tsx
 */

import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

export type ReasonCard = {
  title: string;
  body: string;
};

type Props = {
  heading?: string;
  cards: ReasonCard[];
};

export function ProjectReasons({
  heading = "Dlaczego ten produkt do tego projektu",
  cards,
}: Props) {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <SectionTitle as="h2">{heading}</SectionTitle>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={i}
              className="rounded-2xl border border-bg/10 bg-paper p-7 transition hover:border-bg/25"
            >
              <span aria-hidden className="block h-px w-8 bg-red" />
              <h3 className="mt-5 text-xl font-semibold leading-tight">
                {c.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-bg/70">
                {c.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
