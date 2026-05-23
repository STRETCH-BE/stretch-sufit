/**
 * Stretch Partner Program page — /en/dealers
 * File path: /app/en/dealers/page.tsx
 *
 * English translation of /dealerzy. Recruitment for the international
 * licensing model (referenced on the homepage and /en/about — 13+ countries).
 * Positions as a licensing + training partnership, not a franchise.
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
import { siteConfig } from "@/lib/site-config";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://stretch-sufit.vercel.app";

const PARTNER_MAILTO =
  "mailto:info@stretch-sufit.pl?subject=Stretch%20Partner%20Program%20%E2%80%94%20application";

export const metadata: Metadata = {
  title: "Become a dealer — Stretch Partner Program | Stretch Sufit",
  description:
    "Licensed Stretch stretch-ceiling technology for installation companies. Training in Belgium or Poland, proprietary aluminium profiles, tools, marketing support. Regional exclusivity.",
  alternates: {
    canonical: "/en/dealers",
    languages: {
      "pl-PL": "/dealerzy",
      "en-US": "/en/dealers",
      "uk-UA": "/ua/dileri",
    },
  },
  openGraph: {
    title: "Stretch Partner Program | Stretch Sufit",
    description:
      "Become a licensed Stretch partner — Belgian stretch-ceiling system with Polish production backbone.",
    type: "website",
    url: `${BASE_URL}/en/dealers`,
    locale: "en_US",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/en` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Become a dealer",
      item: `${BASE_URL}/en/dealers`,
    },
  ],
};

const pillars = [
  {
    label: "Licence",
    title: "A system, not a franchise",
    body: "You're not buying the right to use a logo. You get a licence to the Stretch technology: installation protocol, proprietary aluminium profiles, calibrated membranes and a brand that means something in the industry.",
  },
  {
    label: "Training",
    title: "Brussels or Częstochowa",
    body: "Full training programme either at the Stretch HQ in Belgium or at our Polish production centre. 5–10 days of theory plus practice on live sites.",
  },
  {
    label: "Tools",
    title: "Fully equipped launch",
    body: "Profiles, membranes, installation tools (heaters, gas bottles, spatulas), technical documentation, sample cards — all ordered directly from the factory in Belgium or Poland.",
  },
  {
    label: "Brand",
    title: "Shared standard",
    body: "Visual identity, marketing materials, listing in the Polish and international catalogue. Your city / region marked on stretch-sufit.pl and stretchplafond.be.",
  },
  {
    label: "Support",
    title: "Engineer always on call",
    body: "An on-duty production engineer answers technical questions during business hours. On tough projects — a site visit alongside your crew.",
  },
  {
    label: "Exclusivity",
    title: "Region reserved for you",
    body: "Within the partnership contract we reserve a geographic area. We don't sell a competing licence in your city while you remain an active partner.",
  },
];

const idealProfile = [
  {
    no: "01",
    text: "You operate in interior finishes, suspended-ceiling installation, plastering or carpentry. You have a 2–5 person crew and your own tool inventory.",
  },
  {
    no: "02",
    text: "You're looking for a second, premium revenue stream — not another generic service to add. You understand the difference between 'price per m²' and selling value.",
  },
  {
    no: "03",
    text: "You're prepared to invest in equipment and training. The barrier to entry is real — this isn't a weekend course, it's a system.",
  },
  {
    no: "04",
    text: "You have a local network: architects, GCs, developers, design studios. Or the determination to build that network in 12 months.",
  },
];

const stats = [
  { value: "13+", label: "countries", italic: "globally" },
  { value: "2018", label: "Belgium", italic: "year founded" },
  { value: "5–10", label: "days", italic: "training" },
  { value: "1", label: "system", italic: "Brussels → world" },
];

const processSteps = [
  {
    no: "01",
    title: "Application",
    body: "You write a short company brief — profile, experience, region, 5-point business plan. We respond within 5 working days.",
  },
  {
    no: "02",
    title: "Qualification call",
    body: "Video call with the partner programme coordinator (PL) or the international coordinator (EN, RU). We cover scope, territory, economics.",
  },
  {
    no: "03",
    title: "Contract and training",
    body: "After signing the partnership contract you come for training in Brussels or Częstochowa. The starter pack (tools, materials, marketing) ships during training.",
  },
  {
    no: "04",
    title: "Operational launch",
    body: "First 3 installations supervised by our engineer. After certification — full rights to operate under the Stretch brand in your region.",
  },
];

export default function DealersPageEn() {
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
              <li>
                <Link href="/en" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">·</li>
              <li className="text-white" aria-current="page">
                Become a dealer
              </li>
            </ol>
          </Container>
        </nav>

        <section className="relative isolate overflow-hidden bg-bg pb-24 pt-12 md:pb-32 md:pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 80% 0%, rgba(225,16,26,0.08), transparent 60%)",
            }}
          />
          <Container>
            <FadeIn>
              <Eyebrow>Stretch Partner Program · Belgium → World</Eyebrow>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                Belgian system.{" "}
                <span className="it text-paper">Your market.</span>
                <br />
                <span className="text-red">One standard.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                For installation companies that want to bring Stretch
                stretch-ceiling technology to their own market. Not a franchise —{" "}
                <span className="text-white">a system licence</span>:
                technology, tools, training and brand.
              </p>
            </FadeIn>
            <FadeIn delay={220}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={PARTNER_MAILTO}
                  className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-4 font-display text-base font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Express interest →
                </a>
                <a
                  href={`tel:${siteConfig.contact.phonePL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/5"
                >
                  Talk to the coordinator
                </a>
              </div>
            </FadeIn>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow tone="on-paper">Chapter 01 · The model</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Exactly what you buy —{" "}
                    <span className="it">and what you don't.</span>
                  </SectionTitle>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <FadeIn delay={120}>
                  <div className="space-y-6 text-[17px] leading-[1.7] text-bg/80 md:text-lg">
                    <p>
                      The Stretch Partner Program is a{" "}
                      <strong className="text-bg">technical licence</strong>{" "}
                      bundled with training, ongoing engineering support, and
                      the right to operate under the Stretch brand in your
                      agreed region.
                    </p>
                    <p>
                      We don't sell a PDF instruction kit with a logo. We sell
                      access to a{" "}
                      <span className="font-serif italic">closed ecosystem</span>{" "}
                      — proprietary aluminium profiles unavailable to generic
                      installers, calibrated membranes, tools and a training
                      protocol that's still evolving after 8 years.
                    </p>
                    <p className="border-l-2 border-red pl-5 font-serif text-xl italic text-bg">
                      “Franchising is about replication. Partnership is about
                      the fact that any Stretch crew could walk onto another
                      crew's site — and continue the same installation without
                      a word of explanation.”
                    </p>
                    <p>
                      The most important difference: you remain the{" "}
                      <strong className="text-bg">owner of your company</strong>{" "}
                      — not an operator of someone else's. Your accounting,
                      your staff, your local pricing decisions. Our remit ends
                      where the quality standard begins.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-6">
                <FadeIn>
                  <Eyebrow>Chapter 02 · The starter pack</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Six things{" "}
                    <span className="it text-paper">you get.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-6">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    No hidden price layers. The full list of what's in the
                    partnership pack — described on the first call, signed
                    into the contract.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {pillars.map((p, i) => (
                <FadeIn delay={140 + i * 60} key={p.label}>
                  <div className="h-full rounded border border-white/10 bg-bg-card/60 p-7 transition-colors hover:border-red/40">
                    <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                      {p.label}
                    </div>
                    <div className="mt-3 font-display text-lg font-semibold leading-tight text-white">
                      {p.title}
                    </div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">
                      {p.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow tone="on-paper">
                    Chapter 03 · The ideal partner
                  </Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Who{" "}
                    <span className="it">will thrive.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-8 text-[17px] leading-[1.7] text-bg/75">
                    We're not looking for everyone. We're looking for companies
                    that{" "}
                    <span className="font-serif italic">already work well</span>{" "}
                    in their own category and want to add a premium extension —
                    not those starting from zero.
                  </p>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <div className="space-y-4 md:space-y-5">
                  {idealProfile.map((row, i) => (
                    <FadeIn delay={120 + i * 80} key={row.no}>
                      <div className="grid grid-cols-[auto_1fr] gap-5 rounded border border-bg/10 bg-paper-2 p-6 md:gap-6 md:p-7">
                        <div className="font-display text-2xl font-semibold tracking-[-0.02em] text-red md:text-3xl">
                          {row.no}
                        </div>
                        <p className="text-[15.5px] leading-[1.65] text-bg/80 md:text-base md:leading-[1.7]">
                          {row.text}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-white/10 bg-bg-soft py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {stats.map((s, i) => (
                <FadeIn delay={i * 80} key={s.label}>
                  <div>
                    <div className="font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none tracking-[-0.03em] text-white">
                      {s.value}
                    </div>
                    <div className="mt-3 text-sm text-white/65">
                      {s.label}{" "}
                      <span className="it text-white/45">— {s.italic}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-6">
                <FadeIn>
                  <Eyebrow>Chapter 04 · Joining process</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    From application to{" "}
                    <span className="it text-paper">first installation.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-6">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    Average time from first email to full operations:{" "}
                    <strong className="text-white">8–12 weeks</strong>.
                    Most of that is training preparation and equipment shipping.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              {processSteps.map((step, i) => (
                <FadeIn delay={140 + i * 80} key={step.no}>
                  <div className="h-full rounded border border-white/10 bg-bg-card/40 p-7">
                    <div className="font-display text-3xl font-semibold tracking-[-0.02em] text-red">
                      {step.no}
                    </div>
                    <div className="mt-5 font-display text-lg font-semibold leading-tight text-white">
                      {step.title}
                    </div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">
                      {step.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-bg-soft py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-4xl">
              <FadeIn>
                <Eyebrow>Partnership manifesto</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                  Three things we{" "}
                  <span className="it text-red">don't</span> require.
                </h2>
              </FadeIn>

              <div className="mt-14 space-y-12 md:space-y-14">
                {[
                  {
                    no: "Not a non-refundable entry fee.",
                    yes: "The partnership investment is concrete goods: equipment, materials, training. There's no abstract 'brand fee' attached.",
                  },
                  {
                    no: "Not an obligation to source everything from us.",
                    yes: "Profiles and membranes — yes, those have to come from our production (it's the heart of the system). Everything else (lighting, accessories) you can source locally.",
                  },
                  {
                    no: "Not control over your books.",
                    yes: "You're an independent company. You pay the licence and materials as agreed; everything else — staff, local marketing, pricing — is your decision.",
                  },
                ].map((item, i) => (
                  <FadeIn delay={140 + i * 80} key={item.no}>
                    <div className="grid gap-5 md:grid-cols-12 md:gap-8">
                      <div className="md:col-span-5">
                        <div className="font-display text-xl font-semibold tracking-[-0.02em] text-red md:text-2xl">
                          <span className="it">{item.no}</span>
                        </div>
                      </div>
                      <div className="md:col-span-7">
                        <p className="text-[16px] leading-[1.65] text-white/75 md:text-[17px]">
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
                "radial-gradient(circle at 20% 80%, rgba(0,0,0,0.2), transparent 50%)",
            }}
          />
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">First step</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Tell us in 5 sentences{" "}
                <span className="it">who you are.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Company, experience, region, plan for the first 12 months.
                We respond within 5 working days. No automated questionnaires.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={PARTNER_MAILTO}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Send your application →
                </a>
                <a
                  href={`tel:${siteConfig.contact.phonePL}`}
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
