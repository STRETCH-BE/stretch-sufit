/**
 * Stats band.
 * File path: /components/sections/stats.tsx
 *
 * Four oversized numbers used as confidence-builders below the heritage strip.
 * Concrete, factual, and short — written to be quotable by AI engines.
 *
 *   1 dzień   25 lat   130+   0 kurzu
 *
 * Reusable: pass `items` to override. Default = original homepage stats so
 * existing <Stats /> call site keeps working unchanged.
 */

import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";

export type Stat = {
  /** Leading number — accepts JSX so a digit can be colored red, etc. */
  number: ReactNode;
  suffix?: string;
  emphasis: string;
  description: string;
};

const DEFAULT_STATS: Stat[] = [
  {
    number: <span className="text-red">1</span>,
    suffix: "dzień",
    emphasis: "Cały sufit gotowy.",
    description: "Montaż do 50 m² dziennie przez zespół 2-osobowy.",
  },
  {
    number: "25",
    suffix: "lat",
    emphasis: "Żywotność.",
    description: "Sufit odporny na wilgoć, temperaturę i czas.",
  },
  {
    number: "130",
    suffix: "+",
    emphasis: "Kolorów i wykończeń.",
    description: "Mat, połysk, satyna, fotodruk, transparentny.",
  },
  {
    number: <span className="text-red">0</span>,
    suffix: "kurzu",
    emphasis: "Czysty montaż.",
    description: "Bez gładzi, bez malowania, bez bałaganu.",
  },
];

type Props = {
  items?: Stat[];
  ariaLabel?: string;
};

export function Stats({
  items = DEFAULT_STATS,
  ariaLabel = "Kluczowe parametry",
}: Props = {}) {
  return (
    <section aria-label={ariaLabel} className="bg-bg py-20 md:py-28">
      <Container>
        <ul className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((stat, i) => (
            <FadeIn key={i} as="li" delay={i * 80}>
              <div className="font-display text-[clamp(64px,8vw,112px)] font-medium leading-[0.92] tracking-[-0.04em] text-white">
                {stat.number}
                {stat.suffix && (
                  <sup className="ml-1 text-[24px] font-medium text-red">
                    {stat.suffix}
                  </sup>
                )}
              </div>
              <div className="mt-4 text-[15px] leading-[1.5] text-white/55">
                <span className="text-white">{stat.emphasis}</span>{" "}
                {stat.description}
              </div>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  );
}
