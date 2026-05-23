/**
 * Cities — Ukrainian.
 * File path: /components/sections/ua/cities.tsx
 */

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { cities } from "@/content/ua/cities";

export function Cities() {
  return (
    <section className="bg-paper py-24 text-bg md:py-32">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <FadeIn>
            <Eyebrow tone="on-paper">Де нас знайти</Eyebrow>
            <SectionTitle className="mt-5 text-bg" size="section">
              17 міст.
              <br />
              <span className="it">Одна команда.</span>
            </SectionTitle>
            <p className="mt-6 max-w-md text-[16px] leading-[1.6] text-bg/65">
              Приїжджаємо до вас. Замір і кошторис завжди безкоштовні — незалежно від міста.
            </p>
          </FadeIn>

          <FadeIn delay={120}>
            <ul className="grid grid-cols-2 gap-1 md:grid-cols-3">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/ua/natiazhni-steli/${city.slug}`}
                    className="group block rounded border border-bg/10 p-4 transition-colors hover:border-bg hover:bg-bg hover:text-white"
                  >
                    <span className="block text-[15px] font-medium">
                      {city.name}
                    </span>
                    <span className="mt-0.5 block text-[11px] uppercase tracking-[0.1em] text-bg/55 group-hover:text-white/60">
                      {city.region}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
