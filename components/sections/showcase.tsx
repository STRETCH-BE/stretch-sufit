/**
 * Showcase — asymmetric gallery.
 * File path: /components/sections/showcase.tsx
 *
 * 12-column grid on desktop with each item's `gridClass` controlling its span.
 * On mobile it collapses to a 2-column grid (the first item gets a 2-col span
 * to preserve hierarchy). Each tile shows an italic room caption and a bold
 * city name.
 */

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { gallery } from "@/content/gallery";

export function Showcase() {
  return (
    <section id="showcase" className="bg-bg py-24 md:py-32">
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-16">
          <FadeIn>
            <Eyebrow>Realizacje</Eyebrow>
            <SectionTitle className="mt-5 text-white">
              Polskie wnętrza,
              <br />
              <span className="it">belgijska precyzja.</span>
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="max-w-md text-[16px] leading-[1.6] text-white/55">
              Ponad 4 000 zrealizowanych projektów w domach, biurach, hotelach
              i obiektach komercyjnych w całej Polsce. Każdy jest inny — i każdy
              gotowy w jeden dzień.
            </p>
          </FadeIn>
        </div>

        <ul className="grid grid-cols-2 auto-rows-[180px] gap-4 md:grid-cols-12 md:auto-rows-[180px]">
          {gallery.map((item, i) => (
            <FadeIn
              key={item.image}
              as="li"
              delay={(i % 3) * 80}
              className={`relative col-span-2 row-span-1 ${
                i === 0 ? "row-span-2" : ""
              } ${item.gridClass}`}
            >
              <figure className="group relative size-full overflow-hidden rounded bg-bg-card">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.05]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5 text-white">
                  <span className="block font-serif text-[13px] italic text-white/70">
                    {item.room}
                  </span>
                  <span className="mt-0.5 block font-display text-lg font-semibold">
                    {item.city}
                  </span>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </ul>

        <FadeIn className="mt-14 text-center">
          <Button href="/realizacje" variant="ghost" arrow>
            Zobacz pełną galerię
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}
