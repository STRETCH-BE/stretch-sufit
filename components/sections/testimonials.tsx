/**
 * Testimonials section.
 * File path: /components/sections/testimonials.tsx
 *
 * Three cards rendering data from /content/testimonials.ts. The quotes use
 * Instrument Serif italic for visual cohesion with section accents. The
 * star row is decorative — the rating is also exposed via aria-label so it
 * reads correctly to screen readers.
 */

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-16">
          <FadeIn>
            <Eyebrow>Opinie klientów</Eyebrow>
            <SectionTitle className="mt-5 text-white">
              5.0 <span className="it">na Google.</span>
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="max-w-md text-[16px] leading-[1.6] text-white/55">
              Ponad 230 opinii w Google Maps i Opineo. Średnia 4,96/5.
              Najczęściej powtarzające się słowo: „profesjonalizm”.
            </p>
          </FadeIn>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} as="li" delay={i * 100}>
              <figure className="flex h-full flex-col rounded border border-white/8 p-7 md:p-9">
                <div
                  aria-label={`Ocena ${t.rating} z 5 gwiazdek`}
                  className="text-sm tracking-[0.2em] text-red"
                >
                  {"★".repeat(t.rating)}
                  <span aria-hidden="true" className="text-white/15">
                    {"★".repeat(5 - t.rating)}
                  </span>
                </div>
                <blockquote className="mt-5 font-serif text-[19px] italic leading-[1.5] text-white">
                  „{t.quote}”
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 border-t border-white/8 pt-5">
                  <div
                    aria-hidden="true"
                    className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-deep font-display text-sm font-bold text-white"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {t.name}
                    </div>
                    <div className="mt-px text-[12px] text-white/55">
                      {t.meta}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  );
}
