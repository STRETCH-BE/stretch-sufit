/**
 * Project Solution — dark "rozwiązanie produkt" section.
 * File path: /components/sections/project/project-solution.tsx
 */

import { Container } from "@/components/ui/container";

type Props = {
  productLabel: string;
  bullets: { strong: string; body: string }[];
  caption: string;
};

export function ProjectSolution({ productLabel, bullets, caption }: Props) {
  return (
    <section className="bg-bg text-white">
      <Container className="grid gap-10 py-20 md:grid-cols-12 md:gap-14 md:py-28">
        <div className="md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
            Rozwiązanie
          </p>
          <h2 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
            {productLabel}
          </h2>
        </div>
        <div className="md:col-span-7">
          <ul className="space-y-5 text-base leading-relaxed text-white/85 md:text-lg">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-4">
                <span
                  aria-hidden
                  className="mt-2 block h-2 w-2 flex-none rounded-full bg-red"
                />
                <span>
                  <strong className="font-semibold text-white">
                    {b.strong}
                  </strong>{" "}
                  <span className="text-white/75">— {b.body}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-10 border-l-2 border-red pl-5 text-sm italic leading-relaxed text-white/65 md:text-base">
            {caption}
          </p>
        </div>
      </Container>
    </section>
  );
}
