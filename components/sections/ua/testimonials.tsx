/**
 * Testimonials section. Ukrainian.
 * File path: /components/sections/ua/testimonials.tsx
 */

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { testimonials } from "@/content/ua/testimonials";

export function Testimonials() {
  return (
    <section className="bg-bg py-24 md:py-32">
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-16">
          <FadeIn>
            <Eyebrow>Відгуки клієнтів</Eyebrow>
            <SectionTitle className="mt-5 text-white">
              5.0 <span className="it">на Google.</span>
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="max-w-md text-[16px] leading-[1.6] text-white/55">
              Понад 230 відгуків у Google Maps і Opineo. Середній рейтинг 4,96 / 5. Найчастіше повторюване слово: «професіоналізм».
            </p>
          </FadeIn>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} as="li" delay={i * 100}>
              <figure className="flex h-full flex-col rounded border border-white/8 p-7 md:p-9">
                <div
                  aria-label={`Оцінка ${t.rating} з 5 зірок`}
                  className="text-sm tracking-[0.2em] text-red"
                >
                  {"★".repeat(t.rating)}
                  <span aria-hidden="true" className="text-white/15">
                    {"★".repeat(5 - t.rating)}
                  </span>
                </div>
                <blockquote className="mt-5 font-serif text-[19px] italic leading-[1.5] text-white">
                  «{t.quote}»
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
