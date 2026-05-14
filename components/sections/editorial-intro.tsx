/**
 * Editorial intro — "What is a stretch ceiling?"
 * File path: /components/sections/editorial-intro.tsx
 *
 * AEO/GEO-critical: the first paragraph is a short, declarative, quotable
 * factual answer designed for extraction by ChatGPT/Claude/Perplexity.
 * Do not rewrite without re-testing AI citation behavior.
 */

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";

const benefits = [
  "Idealna gładź bez prac wykończeniowych",
  "Bez pyłu — możesz mieszkać w trakcie montażu",
  "Akustyka, podświetlenie LED, fotodruk w jednej powłoce",
  "Demontowalny i 100% recyklingowy (system PVC)",
];

export function EditorialIntro() {
  return (
    <section className="bg-paper py-24 text-bg md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <figure className="relative isolate aspect-[4/5] overflow-hidden rounded">
              <span className="absolute left-5 top-5 z-10 inline-flex items-center rounded-full bg-bg px-3 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.15em] text-paper">
                Co to jest
              </span>
              <Image
                src="images/details/szczegół sufitu napinanego sufitu napinanego z poliestru.jpg"
                alt="Detal sufitu napinanego — gładka, bezspoinowa powierzchnia"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </figure>
          </FadeIn>

          <FadeIn delay={100}>
            <Eyebrow tone="on-paper">Sufit napinany</Eyebrow>
            <SectionTitle className="mt-5 text-bg">
              To nie zwykły sufit.
              <br />
              <span className="it">To powierzchnia,</span>
              <br />
              która <span className="text-red">zmienia</span> wszystko.
            </SectionTitle>

            {/* AEO-first answer paragraph */}
            <p className="mt-8 text-[17px] leading-[1.6] text-bg/80">
              <strong className="font-semibold text-bg">
                Sufit napinany
              </strong>{" "}
              to elastyczna powłoka z folii PVC lub tkaniny poliestrowej,
              naciągana na aluminiowy profil pod listwą montażową. Powstaje
              idealnie gładka powierzchnia — bez spoin, bez pęknięć, bez
              ograniczeń koloru.
            </p>

            <p className="mt-5 text-[16px] leading-[1.6] text-bg/65">
              W odróżnieniu od sufitu podwieszanego (płyty G-K),{" "}
              <strong className="font-semibold text-bg">Stretch</strong>{" "}
              instaluje się w jeden dzień, nie wymaga gładzi ani malowania
              i może zostać zdjęty oraz ponownie założony bez śladu.
            </p>

            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-[15px] leading-[1.5] text-bg/80"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-red"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
