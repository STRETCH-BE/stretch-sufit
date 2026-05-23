/**
 * About page — English. /en/about
 * File path: /app/en/about/page.tsx
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { Nav } from "@/components/sections/en/nav";
import { Footer } from "@/components/sections/en/footer";
import { MobileStickyCTA } from "@/components/sections/en/mobile-sticky-cta";

export const metadata: Metadata = {
  title: "About — Two factories, one group | Stretch Sufit",
  description:
    "Stretch Sufit is part of the Belgian Stretchgroup. PVC is manufactured at our Alto Design factory in Poland (since 2016), polyester at Stretch Productions BV in Belgium (since 2018). In 2024 the group acquired Alto Design — operating since then under the Stretch Sufit brand.",
  alternates: { canonical: "/en/about" },
  openGraph: {
    title: "About — Stretch Sufit",
    description:
      "Two factories, one group. PVC from Poland, polyester from Belgium. The story of Stretchgroup, Alto Design and Stretch Productions.",
    type: "article",
  },
};

const countries = [
  "Belgium",
  "Poland",
  "Netherlands",
  "Germany",
  "France",
  "Switzerland",
  "UK",
  "Malta",
  "Iceland",
  "USA",
  "Canada",
  "UAE",
  "India",
];

export default function AboutPageEn() {
  return (
    <>
      <Nav />

      <main>
        <section className="relative isolate overflow-hidden bg-bg pb-24 pt-32 md:pb-32 md:pt-40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 20% 0%, rgba(225,16,26,0.06), transparent 60%)",
            }}
          />
          <Container>
            <FadeIn>
              <Eyebrow>Two factories · one group · one standard</Eyebrow>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                Belgium makes the{" "}
                <span className="it text-paper">polyester.</span>
                <br />
                <span className="text-red">Poland</span>{" "}
                <span className="it">makes the PVC.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
                Stretch Sufit is part of the Belgian{" "}
                <strong className="text-white">Stretchgroup</strong> — a holding company that brings together two stretch ceiling factories: Stretch Productions BV in Belgium and Alto Design in Poland. Not a franchise, not an intermediary. Real production on both sides, trained installation teams on the ground.
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow tone="on-paper">Chapter 01 · Częstochowa, 2016</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Polish production{" "}
                    <span className="it">starts here.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <figure className="mt-10 overflow-hidden rounded">
                    <div className="relative aspect-[4/5] w-full bg-bg-soft">
                      <Image
                        src="/images/about/hala-czestochowa.jpg"
                        alt="Alto Design (Stretch Sufit) production facility in Częstochowa"
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 font-serif text-sm italic text-bg/55">
                      — Alto Design production facility. Częstochowa, ul. Legionów 59.
                    </figcaption>
                  </figure>
                </FadeIn>
              </div>

              <div className="md:col-span-7 md:pl-8">
                <FadeIn delay={120}>
                  <div className="space-y-6 text-[17px] leading-[1.7] text-bg/80 md:text-lg">
                    <p>
                      In 2016, <strong className="text-bg">Roman Pliuta</strong> founded{" "}
                      <strong className="text-bg">Alto Design</strong> in Częstochowa — a Polish manufacturer of PVC stretch ceilings. The goal was specific: produce premium-grade PVC membrane on home soil, in Poland, with full control over every step — from colour calibration to edge finishing.
                    </p>
                    <p>
                      Over the next eight years the company built a reputation as a precision manufacturer — respected within the Polish industry for build quality and an uncompromising approach to detail. Among installers a simple rule circulated:{" "}
                      <span className="font-serif italic">"if you want good PVC, you call Alto Design."</span>
                    </p>
                    <p className="border-l-2 border-red pl-5 font-serif text-xl italic text-bg">
                      "Everything we built here — the factory, the team, the standard — we built with our own hands. Polish PVC isn't inferior to Western product. You just have to know how to make it."
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-7 md:order-2 md:pl-8">
                <FadeIn delay={120}>
                  <div className="space-y-6 text-[17px] leading-[1.7] text-white/75 md:text-lg">
                    <p>
                      Two years later, in 2018, near Antwerp{" "}
                      <strong className="text-white">Michael Nicasens</strong> founded{" "}
                      <strong className="text-white">Stretch Productions BV</strong> — a Belgian manufacturer of stretch ceilings from woven polyester membrane. Polyester with a polyurethane coating: a technically different material from PVC, aimed at the more demanding premium segment.
                    </p>
                    <p className="border-l-2 border-red pl-5 font-serif text-xl italic text-white/85">
                      "I wanted to build a system that could be licensed globally — not a franchise network, but trained partners installing the same technology to the same standard regardless of country."
                    </p>
                    <p>
                      <strong className="text-white">Stretchgroup</strong> grew around Stretch Productions — a holding company in which Nicasens consolidated polyester production, aluminium profiles and the installation protocol. Within a few years the group expanded to over a dozen markets through trained installation partners.
                    </p>
                  </div>
                </FadeIn>
              </div>

              <div className="md:col-span-5 md:order-1">
                <FadeIn>
                  <Eyebrow>Chapter 02 · Antwerp, 2018</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Belgian polyester{" "}
                    <span className="it text-paper">and a system.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <figure className="mt-10 overflow-hidden rounded">
                    <div className="relative aspect-[4/5] w-full bg-bg-soft">
                      <Image
                        src="/images/about/michael-nicasens.jpg"
                        alt="Michael Nicasens, founder of Stretchgroup"
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 font-serif text-sm italic text-white/55">
                      — Michael Nicasens, founder of Stretchgroup. Antwerp, 2018.
                    </figcaption>
                  </figure>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow tone="on-paper">Chapter 03 · Acquisition, 2024</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Two factories —{" "}
                    <span className="it">one group.</span>
                  </SectionTitle>
                </FadeIn>
              </div>

              <div className="md:col-span-7 md:pl-8">
                <FadeIn delay={120}>
                  <div className="space-y-6 text-[17px] leading-[1.7] text-bg/80 md:text-lg">
                    <p>
                      By 2024, Stretchgroup was producing polyester in Belgium and installing through trained teams in over a dozen countries. What was missing was a fully owned, fully controlled PVC production base in Central Europe. The decision: instead of building a factory from scratch, find the best company already on the market — and join forces.
                    </p>
                    <p>
                      In 2024, Michael Nicasens acquired{" "}
                      <strong className="text-bg">Alto Design</strong> from Roman Pliuta — the Częstochowa-based company with a reputation for PVC manufacturing precision. Alto Design joined Stretchgroup as a fully-fledged subsidiary, keeping its Polish workforce, its Polish factory and its Polish standard of craftsmanship.
                    </p>
                    <p className="border-l-2 border-red pl-5 font-serif text-xl italic text-bg">
                      "Poland combines authentic craft culture with proximity to European materials. It's the place where better PVC gets made — and in a more sustainable way."
                    </p>
                    <p>
                      After an operational rebrand, Alto Design now publicly operates under the{" "}
                      <strong className="text-bg">Stretch Sufit</strong> name — simultaneously a Polish PVC manufacturer, an installer across Poland, and the PVC production hub for the entire group.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow>Chapter 04 · System</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Not a service.{" "}
                    <span className="it text-paper">A system.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-7">
                <FadeIn delay={120}>
                  <p className="text-[17px] leading-[1.7] text-white/75 md:text-lg">
                    Stretch isn't a single product. It's a closed ecosystem: proprietary aluminium profiles, calibrated PVC (Poland) and polyester (Belgium) membranes, installation tools and a training protocol. Every component designed to work together — and only together.
                  </p>
                </FadeIn>

                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      label: "Profile",
                      title: "Proprietary aluminium",
                      body: "Our own mounting profiles, unavailable to generic installers. Manufactured in Belgium.",
                    },
                    {
                      label: "Membrane",
                      title: "Two factories",
                      body: "PVC up to 6.50 m from Alto Design (Poland), polyester up to 5.15 m from Stretch Productions (Belgium). Class A2 acoustic materials and 100% recyclability.",
                    },
                    {
                      label: "Protocol",
                      title: "One standard",
                      body: "Every team trained to the same protocol — Brussels, Częstochowa, Dubai, Toronto. Same installation.",
                    },
                    {
                      label: "Warranty",
                      title: "Up to 15 years",
                      body: "15 years on PVC, 10 years on polyester. Group-level liability, not a single installer.",
                    },
                  ].map((card, i) => (
                    <FadeIn delay={140 + i * 60} key={card.label}>
                      <div className="h-full rounded border border-white/10 bg-bg-card/60 p-6 transition-colors hover:border-white/20">
                        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                          {card.label}
                        </div>
                        <div className="mt-3 font-display text-lg font-semibold text-white">
                          {card.title}
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-white/60">
                          {card.body}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-white/10 bg-bg py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {[
                { value: "2016", label: "Poland", italic: "Alto Design — PVC start" },
                { value: "2018", label: "Belgium", italic: "Stretch Productions — polyester start" },
                { value: "2024", label: "Group", italic: "Alto Design joins Stretchgroup" },
                { value: "13+", label: "countries", italic: "globally" },
              ].map((stat, i) => (
                <FadeIn delay={i * 80} key={stat.label}>
                  <div>
                    <div className="font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none tracking-[-0.03em] text-white">
                      {stat.value}
                    </div>
                    <div className="mt-3 text-sm text-white/65">
                      {stat.label} <span className="it text-white/45">— {stat.italic}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-bg-soft py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <Eyebrow>Chapter 05 · Reach</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-white">
                  Poland is our PVC factory.{" "}
                  <span className="it text-paper">The world is our market.</span>
                </SectionTitle>
              </FadeIn>
              <FadeIn delay={140}>
                <p className="mt-6 text-lg leading-relaxed text-white/65">
                  Stretch Sufit serves the Polish market while also supplying the Stretchgroup network across more than a dozen countries on four continents. The polyester factory in Belgium and our PVC factory in Poland together supply the group's installers.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={200}>
              <div className="mx-auto mt-16 flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base md:text-lg">
                {countries.map((country, i) => (
                  <span key={country} className="flex items-center gap-6">
                    <span className="font-display tracking-[-0.01em] text-white/85">
                      {country}
                    </span>
                    {i < countries.length - 1 && (
                      <span className="text-red">·</span>
                    )}
                  </span>
                ))}
              </div>
            </FadeIn>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-7">
                <FadeIn>
                  <Eyebrow tone="on-paper">Chapter 06 · What's next</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Acoustics. Design.{" "}
                    <span className="it">Re-Sound.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-8 text-[17px] leading-[1.7] text-bg/75 md:text-lg">
                    <strong className="text-bg">Re-Sound BV</strong> is the third company in the Stretchgroup portfolio — a Belgian specialist in premium acoustic panels. For Stretch Sufit it means a catalogue extended with design-grade products with real acoustic performance: reverberation reduction up to 75% with no aesthetic compromise.
                  </p>
                </FadeIn>
                <FadeIn delay={200}>
                  <p className="mt-6 text-[17px] leading-[1.7] text-bg/75 md:text-lg">
                    Poland is currently the fastest-growing stretch ceiling market in Europe. It's no coincidence that we're investing here the most — and that we're launching the next generation of acoustic products here too.
                  </p>
                </FadeIn>
              </div>
              <div className="md:col-span-5">
                <FadeIn delay={160}>
                  <div className="rounded bg-bg p-8 text-white md:p-10">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                      ● Coming soon
                    </div>
                    <div className="mt-5 font-display text-2xl font-semibold leading-tight text-white">
                      Stretch Sufit{" "}
                      <span className="it text-paper">×</span> Re-Sound
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-white/65">
                      New line of acoustic panels integrated with the stretch ceiling. Launching in the Stretch Sufit catalogue — Q3 2026.
                    </p>
                    <div className="mt-6 border-t border-white/10 pt-5">
                      <div className="font-serif text-sm italic text-white/55">
                        "A ceiling that looks like art.{" "}
                        <span className="text-white/85">And sounds like a recording studio."</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-4xl">
              <FadeIn>
                <Eyebrow>Manifesto</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                  Three things we{" "}
                  <span className="it text-red">don't</span>{" "}
                  do.
                </h2>
              </FadeIn>

              <div className="mt-16 space-y-12 md:space-y-16">
                {[
                  {
                    no: "Not a franchise.",
                    yes: 'Every installation is performed by a trained Stretch Sufit team. No subcontractors, no "crew from a recommendation." One company, one warranty.',
                  },
                  {
                    no: "Not an intermediary.",
                    yes: "We work with our own production — Belgian profiles, PVC from our Polish factory, polyester from Stretch Productions. No generic substitutes.",
                  },
                  {
                    no: "Not improvisation.",
                    yes: "Every installation to the same protocol, with the same tools. Belgium, Poland, USA, India — same standard.",
                  },
                ].map((item, i) => (
                  <FadeIn delay={140 + i * 80} key={item.no}>
                    <div className="grid gap-6 md:grid-cols-12 md:gap-8">
                      <div className="md:col-span-4">
                        <div className="font-display text-2xl font-semibold tracking-[-0.02em] text-red md:text-3xl">
                          <span className="it">{item.no}</span>
                        </div>
                      </div>
                      <div className="md:col-span-8">
                        <p className="text-[17px] leading-[1.65] text-white/75 md:text-lg">
                          {item.yes}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="relative isolate overflow-hidden bg-red py-24 text-white md:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(0,0,0,0.2), transparent 50%)",
            }}
          />
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Let's talk</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Poland makes the PVC.{" "}
                <span className="it">Belgium makes the polyester.</span>
                <br />
                <span className="text-white/85">You</span>{" "}
                <span className="it">— win.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Book a free measurement or just call. We'll call back within 24 hours.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/en#cta"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Book a free measurement →
                </Link>
                <a
                  href="tel:+48730700333"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  +48 730 700 333
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <MobileStickyCTA />
    </>
  );
}
