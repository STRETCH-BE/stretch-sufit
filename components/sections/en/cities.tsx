/**
 * Cities — 17 Polish service locations. English.
 * File path: /components/sections/en/cities.tsx
 */

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { cities } from "@/content/en/cities";

export function Cities() {
  return (
    <section className="bg-paper py-24 text-bg md:py-32">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <FadeIn>
            <Eyebrow tone="on-paper">Where you'll find us</Eyebrow>
            <SectionTitle className="mt-5 text-bg" size="section">
              17 cities.
              <br />
              <span className="it">One team.</span>
            </SectionTitle>
            <p className="mt-6 max-w-md text-[16px] leading-[1.6] text-bg/65">
              We come to you. Measurement and quote are always free — wherever you are.
            </p>
          </FadeIn>

          <FadeIn delay={120}>
            <ul className="grid grid-cols-2 gap-1 md:grid-cols-3">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/en/stretch-ceilings/${city.slug}`}
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
