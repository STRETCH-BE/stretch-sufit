/**
 * B2B Cooperation page — /en/b2b
 * File path: /app/en/b2b/page.tsx
 *
 * English translation of /wspolpraca-b2b. Same visual rhythm and structure.
 * Audience: architects, interior designers, general contractors, developers
 * and HoReCa chains who read in English (often expat or international firms
 * operating in Poland).
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
import { languageAlternates, routes } from "@/lib/i18n-routes";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://altodesign.pl";

const B2B_MAILTO =
  "mailto:info@stretch-sufit.pl?subject=B2B%20collaboration";

export const metadata: Metadata = {
  title:
    "B2B collaboration — architects, contractors, developers | Stretch Sufit",
  description:
    "B2B partnership with Stretch Sufit: dedicated project manager, BIM/CAD files and samples, project pricing, after-hours installation, VAT invoice, guaranteed timelines. Up to 15-year material warranty.",
  alternates: {
    canonical: "/en/b2b",
    languages: languageAlternates(routes.b2b),
  },
  openGraph: {
    title: "B2B collaboration | Stretch Sufit",
    description:
      "Stretch ceilings for architects, designers, general contractors and developers. PVC made in Poland, polyester from Belgium.",
    type: "website",
    url: `${BASE_URL}/en/b2b`,
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
      name: "B2B collaboration",
      item: `${BASE_URL}/en/b2b`,
    },
  ],
};

const audiences = [
  {
    no: "01",
    title: "Architects and interior designers",
    body: "BIM/Revit and AutoCAD files, free sample kits for studios, dedicated technical advisor and a commission programme from signed projects.",
    tag: "Studio",
  },
  {
    no: "02",
    title: "General contractors",
    body: "The ceiling as a separate work package — with its own site manager, schedule aligned with the rest of the finishes, VAT invoice, and a 15-year material warranty.",
    tag: "GC",
  },
  {
    no: "03",
    title: "Developers, hotels, HoReCa",
    body: "Repeatable scope: dozens of apartments under one development, restaurants with full acoustic treatment, hotel chains with a single finishing standard.",
    tag: "Scale",
  },
];

const offerings = [
  {
    label: "Project Manager",
    title: "One person from start to finish",
    body: "Every B2B project gets a dedicated PM — from site survey, through documentation approval, to handover protocol. No internal hand-offs.",
  },
  {
    label: "Project materials",
    title: "BIM, CAD, sample kits",
    body: "Revit and AutoCAD blocks on request, technical data sheets for all membranes (PVC, polyester, acoustic), full RAL palette — everything by email within 24 hours.",
  },
  {
    label: "Project pricing",
    title: "B2B tariff with volume tiers",
    body: "Custom pricing above 200 m² of total project area. Deferred payment terms for verified general contractors.",
  },
  {
    label: "Logistics",
    title: "After-hours and weekend installs",
    body: "Open-space, restaurants, retail — we install outside venue operating hours. Crews available on weekends without rush surcharges.",
  },
  {
    label: "Documentation",
    title: "Full handover package",
    body: "PZH hygiene certificate, fire reaction class, material declarations, installation protocol, warranty card. All signed, all PDF.",
  },
  {
    label: "Scale",
    title: "Projects from 200 to 5,000 m²",
    body: "Local production in Częstochowa — no waiting on shipments from Belgium. Large projects close on the timelines we sign.",
  },
];

const stats = [
  { value: "200+", label: "m²", italic: "B2B pricing threshold" },
  { value: "24 h", label: "callback", italic: "PM responds within" },
  { value: "15", label: "years", italic: "material warranty" },
  { value: "17", label: "cities", italic: "served regularly" },
];

const processSteps = [
  {
    no: "01",
    title: "Initial call",
    body: "20-minute conversation with the PM — project scope, timeline, technical parameters, ballpark estimate. Free, no commitment.",
  },
  {
    no: "02",
    title: "Survey and documentation",
    body: "On-site surveyor with sample kits and technical data sheets. Detailed quote in 48 hours, BIM/CAD documentation on request.",
  },
  {
    no: "03",
    title: "Contract and schedule",
    body: "B2B contract with guaranteed installation date and penalty clauses. 30% deposit, balance after handover protocol.",
  },
  {
    no: "04",
    title: "Installation and handover",
    body: "Install within the declared window, signed handover with site manager, 15-year warranty card. VAT invoice by bank transfer.",
  },
];

export default function B2BPageEn() {
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
                B2B collaboration
              </li>
            </ol>
          </Container>
        </nav>

        <section className="relative isolate overflow-hidden bg-bg pb-20 pt-12 md:pb-28 md:pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 15% 10%, rgba(225,16,26,0.08), transparent 55%)",
            }}
          />
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-8">
                <FadeIn>
                  <Eyebrow>B2B · Partnership for professionals</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <h1 className="mt-6 font-display text-[clamp(2.5rem,6.5vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                    Studio, contractor,{" "}
                    <span className="it text-paper">developer.</span>
                    <br />
                    One team.{" "}
                    <span className="text-red">One standard.</span>
                  </h1>
                </FadeIn>
                <FadeIn delay={160}>
                  <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                    Stretch ceilings for teams where repeatable quality, kept
                    timelines and full documentation aren't optional — they're
                    the starting condition.
                  </p>
                </FadeIn>
              </div>
              <div className="md:col-span-4">
                <FadeIn delay={220}>
                  <div className="rounded border border-white/10 bg-bg-card/60 p-6">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                      ● B2B line
                    </div>
                    <a
                      href="tel:+48730700333"
                      className="mt-4 block font-display text-2xl font-semibold tracking-[-0.02em] text-white hover:text-red"
                    >
                      +48 730 700 333
                    </a>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      Mon–Fri 09:00–15:30. Leave a message outside hours — we
                      call back within 24 working hours.
                    </p>
                    <a
                      href={B2B_MAILTO}
                      className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold text-red hover:text-white"
                    >
                      info@stretch-sufit.pl →
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow tone="on-paper">Chapter 01 · Who it's for</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Three audiences.{" "}
                    <span className="it">One way of working.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-7">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-bg/75 md:text-lg">
                    We work with partners who value predictability. Less is
                    more — we take on projects whose scope we understand and
                    whose deadlines we can guarantee.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
              {audiences.map((a, i) => (
                <FadeIn delay={140 + i * 80} key={a.no}>
                  <div className="h-full rounded border border-bg/10 bg-paper-2 p-8 transition-colors hover:border-red/40">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                        {a.no}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-bg/50">
                        {a.tag}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-bg">
                      {a.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-bg/70">
                      {a.body}
                    </p>
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
                  <Eyebrow>Chapter 02 · What we deliver</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Not a service.{" "}
                    <span className="it text-paper">A process.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-6">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    Six elements that define the Stretch Sufit B2B standard.
                    Each one written into the contract — not into a sales
                    promise.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {offerings.map((o, i) => (
                <FadeIn delay={140 + i * 60} key={o.label}>
                  <div className="h-full rounded border border-white/10 bg-bg-card/60 p-7 transition-colors hover:border-white/20">
                    <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                      {o.label}
                    </div>
                    <div className="mt-3 font-display text-lg font-semibold leading-tight text-white">
                      {o.title}
                    </div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">
                      {o.body}
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
                    Chapter 03 · Programme for studios
                  </Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    The architect recommends.{" "}
                    <span className="it">The studio earns.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-8 text-[17px] leading-[1.7] text-bg/80">
                    For architects and interior designers we run a commission
                    programme — paid out on the signed end-client contract.
                    No hidden thresholds, no exclusivity. Recommend us only
                    when you genuinely think the solution fits the project.
                  </p>
                </FadeIn>
                <FadeIn delay={200}>
                  <a
                    href={B2B_MAILTO}
                    className="mt-10 inline-flex items-center gap-2 rounded-full bg-bg px-6 py-3 font-display text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                  >
                    Join the programme →
                  </a>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <div className="grid gap-4 md:gap-5">
                  {[
                    {
                      no: "•",
                      title: "Commission on the contract",
                      body: "Compensation calculated on the net value of the end-client contract — paid after the deposit clears.",
                    },
                    {
                      no: "•",
                      title: "Free sample kits and materials",
                      body: "A case with samples of every membrane, RAL colour cards and technical data sheets. Updated yearly.",
                    },
                    {
                      no: "•",
                      title: "BIM and CAD files on request",
                      body: "Revit, AutoCAD and SketchUp blocks for all 6 catalogue solutions — prepared individually per project.",
                    },
                    {
                      no: "•",
                      title: "Technical consultation",
                      body: "A production engineer answers questions about integration with lighting, acoustics, HVAC. No waiting on a quote.",
                    },
                  ].map((row, i) => (
                    <FadeIn delay={160 + i * 70} key={row.title}>
                      <div className="rounded border border-bg/10 bg-paper p-6 transition-colors hover:border-red/40">
                        <div className="flex items-baseline gap-4">
                          <span className="font-display text-red">
                            {row.no}
                          </span>
                          <div>
                            <div className="font-display text-base font-semibold text-bg">
                              {row.title}
                            </div>
                            <p className="mt-2 text-[14.5px] leading-relaxed text-bg/70">
                              {row.body}
                            </p>
                          </div>
                        </div>
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
                  <Eyebrow>Chapter 04 · Process</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Four steps from email{" "}
                    <span className="it text-paper">to handover.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-6">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    No surprises. You know what's happening at each stage —
                    and what you're signing — before we start production.
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
              <Eyebrow tone="on-dark">Let's talk about the project</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Project over 200 m²?{" "}
                <span className="it">Start with a conversation.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                A short 20-minute call — our Project Manager scopes the work,
                gives a ballpark estimate and a production calendar.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={B2B_MAILTO}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Email us →
                </a>
                <a
                  href={`tel:${siteConfig.contact.phonePL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  +48 730 700 333
                </a>
              </div>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-white/65">
                Private client? · Use the form on the{" "}
                <Link href="/en#cta" className="underline hover:text-white">
                  homepage
                </Link>
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <MobileStickyCTA />
    </>
  );
}
