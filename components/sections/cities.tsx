/**
 * Cities — 17 Polish service locations.
 * File path: /components/sections/cities.tsx
 *
 * Local-SEO block — each tile links to /sufity-napinane/[slug]. Those pages
 * will be generated in a later prompt (one per city, each with city-scoped
 * LocalBusiness schema). For now the links are real-shaped stubs.
 */

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { cities } from "@/content/cities";

export function Cities() {
  return (
    <section className="bg-paper py-24 text-bg md:py-32">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <FadeIn>
            <Eyebrow tone="on-paper">Gdzie nas znajdziesz</Eyebrow>
            <SectionTitle
              className="mt-5 text-bg"
              size="section"
            >
              17 miast.
              <br />
              <span className="it">Jedna ekipa.</span>
            </SectionTitle>
            <p className="mt-6 max-w-md text-[16px] leading-[1.6] text-bg/65">
              Dojeżdżamy do Ciebie. Pomiar i wycena zawsze bezpłatne —
              niezależnie od miasta.
            </p>
          </FadeIn>

          <FadeIn delay={120}>
            <ul className="grid grid-cols-2 gap-1 md:grid-cols-3">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/sufity-napinane/${city.slug}`}
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
