/**
 * Why Us — 6 reasons.
 * File path: /components/sections/why-us.tsx
 *
 * 3x2 card grid (down to 2x3 on tablet, 1x6 on mobile). Each card has a
 * circular red-bordered letter badge (A–F) as a typographic icon — kept
 * intentionally restrained to match the editorial aesthetic.
 */

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";

const reasons = [
  {
    badge: "A",
    title: "Własna produkcja",
    body:
      "Foliografia, szycie i konfekcjonowanie u nas. Nie zlecamy niczego na zewnątrz — kontrolujemy każdy metr.",
  },
  {
    badge: "B",
    title: "Belgijska technologia",
    body:
      "System Stretch® z 23-letnią historią, certyfikowany w UE. Folia PVC + poliester klasy A2 (niepalna).",
  },
  {
    badge: "C",
    title: "15 lat gwarancji",
    body:
      "Pisemna gwarancja na każdą realizację. Serwis i wymiana folii bez demontażu profili.",
  },
  {
    badge: "D",
    title: "Cała Polska",
    body:
      "17 lokalizacji od Gdańska po Kraków. Pomiar i montaż realizowany przez nasz zespół, nie franczyzę.",
  },
  {
    badge: "E",
    title: "Szybkość i czystość",
    body:
      "Montaż 1 dzień, bez gładzi, bez malowania, bez kurzu. Możesz zostać w domu w trakcie prac.",
  },
  {
    badge: "F",
    title: "Cena transparentna",
    body:
      "Pomiar i wycena bezpłatne. Bez ukrytych kosztów. Wycena ma 30 dni ważności.",
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
            <Eyebrow>Dlaczego Stretch</Eyebrow>
            <SectionTitle className="mt-5 text-white">
              Marka, nie
              <br />
              <span className="it">przypadkowa ekipa.</span>
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="max-w-md text-[16px] leading-[1.6] text-white/55">
              Stretch to system technologiczny rozwijany w Belgii od 2002 roku.
              W Polsce reprezentowany przez Alto Design — oryginalnego
              producenta i wyłącznego partnera grupy. Każdy montaż wykonują
              nasi przeszkoleni monterzy, nigdy podwykonawcy.
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
