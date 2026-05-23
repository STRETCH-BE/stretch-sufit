/**
 * Editorial intro — English.
 * File path: /components/sections/en/editorial-intro.tsx
 */

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";

const benefits = [
  "Perfectly smooth — no finishing work required",
  "Dust-free — you can live in the room during installation",
  "Acoustics, LED backlighting, photo printing in one membrane",
  "Removable and 100% recyclable (PVC system)",
];

export function EditorialIntro() {
  return (
    <section className="bg-paper py-24 text-bg md:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <figure className="relative isolate aspect-[4/5] overflow-hidden rounded">
              <span className="absolute left-5 top-5 z-10 inline-flex items-center rounded-full bg-bg px-3 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.15em] text-paper">
                What it is
              </span>
              <Image
                src="/images/details/szczegół sufitu napinanego sufitu napinanego z poliestru.jpg"
                alt="Detail of a stretch ceiling — smooth, jointless surface"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </figure>
          </FadeIn>

          <FadeIn delay={100}>
            <Eyebrow tone="on-paper">Stretch ceiling</Eyebrow>
            <SectionTitle className="mt-5 text-bg">
              Not a regular ceiling.
              <br />
              <span className="it">A surface</span>
              <br />
              that <span className="text-red">changes</span> everything.
            </SectionTitle>

            <p className="mt-8 text-[17px] leading-[1.6] text-bg/80">
              A{" "}
              <strong className="font-semibold text-bg">
                stretch ceiling
              </strong>{" "}
              is a flexible membrane — PVC film or woven polyester — stretched onto an aluminium profile fixed at the room's perimeter. The result is a perfectly smooth surface — no joints, no cracks, no colour limits.
            </p>

            <p className="mt-5 text-[16px] leading-[1.6] text-bg/65">
              Unlike a suspended drywall ceiling,{" "}
              <strong className="font-semibold text-bg">Stretch</strong>{" "}
              installs in a single day, requires no plastering or painting, and can be removed and reinstalled without a trace.
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
