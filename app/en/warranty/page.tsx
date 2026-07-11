/**
 * Warranty page — English. /en/warranty
 * File path: /app/en/warranty/page.tsx
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { Nav } from "@/components/sections/en/nav";
import { Footer } from "@/components/sections/en/footer";
import { MobileStickyCTA } from "@/components/sections/en/mobile-sticky-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { languageAlternates, routes } from "@/lib/i18n-routes";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://altodesign.pl";

const LAST_UPDATED = "14 May 2026";

export const metadata: Metadata = {
  title: "Warranty up to 15 years — Stretch ceilings | Stretch Sufit",
  description:
    "Full terms of the Stretch material warranty — 15 years on PVC manufactured in our factory in Poland, 10 years on polyester from Stretch Productions BV in Belgium. What's covered, how to claim.",
  alternates: {
    canonical: "/en/warranty",
    languages: languageAlternates(routes.warranty),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/en` },
    { "@type": "ListItem", position: 2, name: "Warranty", item: `${BASE_URL}/en/warranty` },
  ],
};

export default function WarrantyPageEn() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <Nav />

      <main>
        <nav
          aria-label="breadcrumb"
          className="border-b border-white/5 bg-bg pb-4 pt-28 md:pt-32"
        >
          <Container>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
              <li><Link href="/en" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">·</li>
              <li className="text-white" aria-current="page">Warranty</li>
            </ol>
          </Container>
        </nav>

        <section className="relative isolate overflow-hidden bg-bg pb-16 pt-12 md:pb-20 md:pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 15% 20%, rgba(225,16,26,0.08), transparent 55%)",
            }}
          />
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-8">
                <FadeIn>
                  <Eyebrow>Updated: {LAST_UPDATED}</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                    Warranty{" "}
                    <span className="it text-paper">up to 15 years.</span>
                  </h1>
                </FadeIn>
                <FadeIn delay={160}>
                  <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                    Among the longest material warranties on the Polish stretch ceiling market.{" "}
                    <strong className="text-white">15 years on PVC</strong> from our factory in Częstochowa,{" "}
                    <strong className="text-white">10 years on polyester</strong> from Stretch Productions BV in Belgium. Both materials tested in European conditions since 2016 and 2018 respectively.
                  </p>
                </FadeIn>
              </div>

              <div className="md:col-span-4">
                <FadeIn delay={120}>
                  <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
                    <Stat number="15" label="years PVC" />
                    <Stat number="10" label="years polyester" />
                    <Stat number="5" label="years LED" />
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section className="text-bg bg-paper py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <Eyebrow tone="on-paper">Two materials, two warranties</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-bg">
                  Each material has its own{" "}
                  <span className="it">durability curve.</span>
                </SectionTitle>
              </FadeIn>
              <FadeIn delay={140}>
                <p className="mt-6 text-[17px] leading-[1.7] text-bg/80">
                  The warranty matches the material's real lifespan — not a marketing figure. PVC has UV stabilisers that keep colour and structure intact for 15 years. Polyester fabric is a different material — a premium-segment woven membrane with a polyurethane coating, guaranteed for 10 years.
                </p>
              </FadeIn>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-10">
              <FadeIn delay={160}>
                <div className="rounded border-2 border-red bg-paper-2 p-8">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                    01 · PVC
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.01em] text-bg md:text-4xl">
                    15 years
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.7] text-bg/75">
                    Full material warranty on the PVC membrane manufactured in our{" "}
                    <strong className="text-bg">Alto Design</strong> factory in Częstochowa. Covers colour stability, no cracking, durability of bonds with profiles, and waterproofing up to 100 l/m².
                  </p>
                  <p className="mt-3 text-[14px] leading-[1.6] text-bg/55">
                    Honoured in Poland directly by Stretch Sufit / Alto Design Sp. z o.o.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={220}>
                <div className="rounded border border-bg/10 bg-paper-2 p-8">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                    02 · Polyester
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.01em] text-bg md:text-4xl">
                    10 years
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.7] text-bg/75">
                    Material warranty on the woven polyester membrane with polyurethane coating, manufactured by{" "}
                    <strong className="text-bg">Stretch Productions BV</strong> in Belgium. Covers matte stability, no discolouration, durability of the protective coating.
                  </p>
                  <p className="mt-3 text-[14px] leading-[1.6] text-bg/55">
                    Honoured in Poland by Stretch Sufit as the authorised installer of Stretchgroup.
                  </p>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <Eyebrow>Plus statutory protection</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-white">
                  Independently —{" "}
                  <span className="it text-paper">2-year rękojmia.</span>
                </SectionTitle>
              </FadeIn>
              <FadeIn delay={140}>
                <p className="mt-6 text-[17px] leading-[1.7] text-white/75">
                  In addition to the manufacturer warranty, Polish consumer law grants you "rękojmia" — a statutory warranty under the Polish Civil Code (art. 556–576). It runs for 2 years from delivery. You cannot waive it — it's a right, not a service.
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="mt-4 text-[15px] leading-[1.6] text-white/55">
                  In practice, a consumer in Poland has{" "}
                  <strong className="text-white">15 years warranty + 2 years rękojmia</strong> on a PVC ceiling, or{" "}
                  <strong className="text-white">10 + 2</strong> on polyester.
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="bg-bg-soft py-24 md:py-32">
          <Container>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow>What's covered</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Material and{" "}
                    <span className="it text-paper">installation defects.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-6 text-lg leading-relaxed text-white/70">
                    The full scope of what we fix without question during the warranty period. We only need proof of purchase (invoice or receipt) and a message to info@stretch-sufit.pl.
                  </p>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <div className="space-y-4">
                  <CoveredItem
                    title="Colour stability"
                    body="The membrane keeps its original colour throughout the warranty period. Fading, yellowing, shade shifts — full coverage."
                  />
                  <CoveredItem
                    title="Bond durability"
                    body="The membrane remains attached to the perimeter profiles. Slipping out, sagging due to a material defect — we repair or replace."
                  />
                  <CoveredItem
                    title="No cracking or tearing"
                    body="The membrane doesn't crack, tear or deform under normal use (temperature –10 °C to +50 °C)."
                  />
                  <CoveredItem
                    title="PVC waterproofing"
                    body="PVC holds water in case of a leak from above. If waterproofing fails — we replace it."
                  />
                  <CoveredItem
                    title="Acoustic performance"
                    body="Acoustic ceilings maintain their NRC (Noise Reduction Coefficient) throughout the warranty period."
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow>What's not covered</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Fair{" "}
                    <span className="it text-paper">exclusions.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-6 text-lg leading-relaxed text-white/70">
                    The warranty doesn't cover damage outside our control. Most of it is repairable for a fee — you don't have to replace the whole ceiling.
                  </p>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <div className="space-y-4">
                  <ExcludedItem
                    title="Mechanical damage"
                    body="Cuts from knives or sharp objects, impacts. The membrane is thin (0.17–0.40 mm) — it can be pierced. Repairs are paid, usually without replacing the whole ceiling."
                  />
                  <ExcludedItem
                    title="Improper use"
                    body="Cleaning with solvents, alcohol, abrasive materials. Exposure to temperatures outside the rated range (e.g. open flame, leaking furnace)."
                  />
                  <ExcludedItem
                    title="Third-party modifications"
                    body="Removal and reinstallation by anyone other than an authorised Stretch dealer. Installing new light points without consultation."
                  />
                  <ExcludedItem
                    title="Force majeure"
                    body="Fire, flood, earthquake, explosion. These are covered by your home insurance."
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="text-bg bg-paper py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <Eyebrow tone="on-paper">How to file a claim</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-bg">
                  Four steps —{" "}
                  <span className="it">no bureaucracy.</span>
                </SectionTitle>
              </FadeIn>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              <ProcessStep number="01" title="Get in touch" body="Email info@stretch-sufit.pl or call +48 730 700 333. Describe the problem and attach photos." />
              <ProcessStep number="02" title="Initial assessment" body="Within 3 working days we respond — whether the case qualifies for warranty or needs on-site inspection." />
              <ProcessStep number="03" title="Inspection or repair" body="If needed — we dispatch a team. Timeline: up to 14 days from notification, usually sooner." />
              <ProcessStep number="04" title="Resolution" body="Repair or replacement (if covered) at no cost to you. Standard within 30 days of notification." />
            </div>

            <FadeIn delay={400}>
              <div className="mx-auto mt-16 max-w-3xl rounded border border-bg/10 bg-paper-2 p-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                  Documents required
                </div>
                <ul className="mt-5 space-y-3 text-[15px] text-bg/80">
                  <li className="flex gap-3"><span className="text-red">●</span><span>VAT invoice or receipt (proof of purchase)</span></li>
                  <li className="flex gap-3"><span className="text-red">●</span><span>Photos of the damage (3–5 photos from different distances)</span></li>
                  <li className="flex gap-3"><span className="text-red">●</span><span>Brief description of circumstances (when noticed, conditions)</span></li>
                </ul>
                <p className="mt-6 text-[14px] leading-[1.6] text-bg/60">
                  Under rękojmia you additionally have the right to demand a price reduction or contract withdrawal (if the defect is material). Details in{" "}
                  <Link href="/regulamin" className="text-red underline">Terms</Link>.
                </p>
              </div>
            </FadeIn>
          </Container>
        </section>

        <section className="relative isolate overflow-hidden bg-red py-20 text-white md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Questions?</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                File a claim{" "}
                <span className="it">— we'll handle it.</span>
              </h2>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:info@stretch-sufit.pl?subject=Warranty%20claim"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Write email
                </a>
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

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-semibold leading-none tracking-[-0.02em] text-white md:text-4xl">
        {number}
      </div>
      <div className="mt-2 text-sm text-white/60">{label}</div>
    </div>
  );
}

function CoveredItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex gap-5 border-l-2 border-red/40 pl-6">
      <div className="flex-1">
        <div className="font-display text-base font-semibold text-white md:text-lg">{title}</div>
        <p className="mt-2 text-[15px] leading-relaxed text-white/65">{body}</p>
      </div>
    </div>
  );
}

function ExcludedItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex gap-5 border-l-2 border-white/15 pl-6">
      <div className="flex-1">
        <div className="font-display text-base font-semibold text-white md:text-lg">{title}</div>
        <p className="mt-2 text-[15px] leading-relaxed text-white/55">{body}</p>
      </div>
    </div>
  );
}

function ProcessStep({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div className="rounded border border-bg/10 bg-paper-2 p-6">
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">{number}</div>
      <h3 className="mt-3 font-display text-lg font-semibold leading-tight tracking-[-0.01em] text-bg">{title}</h3>
      <p className="mt-3 text-[14px] leading-[1.6] text-bg/70">{body}</p>
    </div>
  );
}
