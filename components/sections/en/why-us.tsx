/**
 * Why Us — 6 reasons. English.
 * File path: /components/sections/en/why-us.tsx
 */

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";

const reasons = [
  {
    badge: "A",
    title: "In-house production",
    body:
      "Membrane production, welding and finishing are all ours. Nothing subcontracted — we control every metre.",
  },
  {
    badge: "B",
    title: "Two factories, one system",
    body:
      "We make PVC in our factory in Poland (since 2016), polyester in Belgium (since 2018). PVC + polyester rated to fire class A2 (non-flammable), EU-certified.",
  },
  {
    badge: "C",
    title: "Up to 15 years warranty",
    body:
      "Written warranty on every project — 15 years on PVC, 10 years on polyester. Service and membrane replacement without removing the profiles.",
  },
  {
    badge: "D",
    title: "All of Poland",
    body:
      "17 locations from Gdańsk to Kraków. Measurement and installation by our own teams, never franchised.",
  },
  {
    badge: "E",
    title: "Fast and clean",
    body:
      "Installation in 1 day. No plastering, no painting, no dust. You can stay home during the work.",
  },
  {
    badge: "F",
    title: "Transparent pricing",
    body:
      "Free measurement and quote. No hidden costs. Quotes are valid for 30 days.",
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
            <Eyebrow>Why Stretch</Eyebrow>
            <SectionTitle className="mt-5 text-white">
              A brand.
              <br />
              <span className="it">Not just an installer.</span>
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="max-w-md text-[16px] leading-[1.6] text-white/55">
              Stretch is a system developed in Belgium since 2018. It belongs to{" "}
              <strong className="font-semibold text-white">Stretchgroup</strong>, which since 2024 also owns the Polish manufacturer{" "}
              <strong className="font-semibold text-white">Alto Design</strong> — our PVC factory in Częstochowa (since 2016). Every installation is done by our trained installers, never subcontractors.
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
