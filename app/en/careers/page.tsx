/**
 * Career page — /en/careers
 * File path: /app/en/careers/page.tsx
 *
 * English translation of /kariera. Open roles for the Polish operation —
 * the company is scaling 17 cities so installer/surveyor/advisor slots are
 * effectively always open. EN version targets bilingual candidates already
 * in Poland or those relocating for work.
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

const HR_EMAIL = "info@stretch-sufit.pl";

function mailto(role: string) {
  return `mailto:${HR_EMAIL}?subject=${encodeURIComponent(
    `Application — ${role}`
  )}`;
}

export const metadata: Metadata = {
  title:
    "Careers — work at Stretch Sufit | Belgian technology, Polish production",
  description:
    "Work at Stretch Sufit — part of the Belgian Stretchgroup. Stretch-ceiling installer, surveyor, customer advisor, production. Permanent employment, company car, training in Belgium. Częstochowa and across Poland.",
  alternates: {
    canonical: "/en/careers",
    languages: languageAlternates(routes.careers),
  },
  openGraph: {
    title: "Careers at Stretch Sufit",
    description:
      "Open roles at Stretch Sufit — installers, surveyors, customer advisors. Permanent contract, company car, training.",
    type: "website",
    url: `${BASE_URL}/en/careers`,
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
      name: "Careers",
      item: `${BASE_URL}/en/careers`,
    },
  ],
};

type Role = {
  no: string;
  title: string;
  type: string;
  location: string;
  body: string;
  responsibilities: string[];
  requirements: string[];
};

const roles: Role[] = [
  {
    no: "01",
    title: "Stretch-ceiling installer",
    type: "Full-time · Permanent contract",
    location: "Częstochowa + travel (PL)",
    body: "You work in a 2-person installation crew. You handle the full installation cycle on the client's site — from laying protective covers, through profile installation and membrane tensioning, to the handover protocol.",
    responsibilities: [
      "Installation of PVC, polyester and acoustic ceilings per the Stretch protocol",
      "Installation of LED lighting and point fixtures integrated into the ceiling",
      "Representing the company in direct contact with the client",
      "Care of equipment and the company vehicle",
    ],
    requirements: [
      "Precision and respect when working in someone's home or office",
      "Interior-finishes experience welcome (but not required)",
      "Category B driving licence",
      "Willingness to travel within Poland (1–3 overnight stays per month)",
    ],
  },
  {
    no: "02",
    title: "Surveyor / Technical advisor",
    type: "Full-time · Permanent contract + bonus",
    location: "Selected region (PL)",
    body: "The client's first contact after the call. You drive to the apartment / office / restaurant with sample kits, measure, advise on materials, present the offer.",
    responsibilities: [
      "On-site survey visits with the full sample kit",
      "Technical advice: membrane type, lighting, acoustics",
      "Preparing quotes and offers in the CRM",
      "Closing the sale — bonus on the deposit and final contract value",
    ],
    requirements: [
      "Ability to hold a conversation with a premium client",
      "Familiarity with the finishes market or interior design (welcome)",
      "Category B driving licence and comfort driving a company SUV",
      "Self-sufficiency — you work in the field, visit the office once a week",
    ],
  },
  {
    no: "03",
    title: "Customer advisor — office / hotline",
    type: "Full-time · Permanent contract",
    location: "Częstochowa · office",
    body: "First line of phone and email contact. You handle inbound enquiries from the form, qualify leads, schedule surveys, coordinate surveyors' calendars.",
    responsibilities: [
      "Handling the info@ phone and inbox during 09:00–15:30",
      "Lead qualification and assignment to surveyors",
      "Post-sale support and first-touch warranty conversations",
      "CRM updates and simple reporting",
    ],
    requirements: [
      "Very strong written and spoken Polish",
      "Comfort with CRM systems (we'll train you on ours)",
      "Welcome: English or Ukrainian / Russian",
      "Patience and genuine curiosity about the client's problem",
    ],
  },
  {
    no: "04",
    title: "Membrane production operator",
    type: "Full-time · Permanent contract",
    location: "Częstochowa · ul. Legionów 59",
    body: "Production-floor work. Cutting and welding PVC and polyester membranes according to production sheets prepared after the survey.",
    responsibilities: [
      "Operating membrane cutting and welding machines",
      "Quality control of the material at every stage",
      "Packing and preparing for site delivery",
      "Safe handling of materials and equipment",
    ],
    requirements: [
      "Precision and accountability for product quality",
      "Production experience welcome (tailoring, large-format print, similar)",
      "Willingness to work a single 07:00–15:00 shift",
    ],
  },
];

const benefits = [
  {
    label: "Employment",
    title: "Permanent contract. No exceptions.",
    body: "All full-time roles on a permanent contract — from day one. No 'trial periods on B2B', no fake self-employment. Social security, paid leave, sick leave handled normally.",
  },
  {
    label: "Compensation",
    title: "Base + quarterly bonus",
    body: "Solid base appropriate to the role + a bonus system tied to the position: installer — on delivered projects, surveyor — on closed sales, office — on team KPIs.",
  },
  {
    label: "Equipment",
    title: "Full company kit",
    body: "Company vehicle for field roles, phone, tools, branded workwear. No 'bring your own equipment'. Everything Stretch-branded.",
  },
  {
    label: "Training",
    title: "Stretch protocol — Belgium or Częstochowa",
    body: "Full onboarding training per the manufacturer's protocol, retraining on every new product. For standouts — trips to the Brussels production floor.",
  },
  {
    label: "Career path",
    title: "Junior → Senior → Team Lead",
    body: "The path is clear and measurable: number of completed projects, product-protocol certifications, client ratings. We promote from within.",
  },
  {
    label: "Culture",
    title: "Work with same-day visible impact",
    body: "You walk into an apartment at 8:00 with a cracked ceiling. At 14:00 you leave with a client crying with happiness. That's rare in other industries.",
  },
];

const values = [
  {
    no: "We do.",
    yes: "We don't consult on installations, don't subcontract, don't sell 'solutions'. We have crews, tools, a production hall and clients. The work is real.",
  },
  {
    no: "We count.",
    yes: "Every project has a price, every installation has a duration, every crew has KPIs. We don't pretend 'passion is what counts'. The result counts — and we reward it.",
  },
  {
    no: "We teach.",
    yes: "A new installer spends the first 2 weeks on site with a senior. A surveyor learns to sell without pressure. An office advisor learns to talk to architects. We invest in that.",
  },
];

export default function CareersPageEn() {
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
                Careers
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
                "radial-gradient(ellipse at 20% 0%, rgba(225,16,26,0.07), transparent 60%)",
            }}
          />
          <Container>
            <FadeIn>
              <Eyebrow>Careers · Częstochowa and Poland</Eyebrow>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                Work with{" "}
                <span className="it text-paper">visible impact</span>
                <br />
                <span className="text-red">by end of day.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                Stretch Sufit is the Polish pillar of the Belgian Stretchgroup.
                We're scaling across 17 Polish cities, producing in Częstochowa,
                installing in homes, offices, restaurants. We look for people
                who like work with a measurable outcome.
              </p>
            </FadeIn>
            <FadeIn delay={220}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#positions"
                  className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-4 font-display text-base font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  See open roles →
                </a>
                <a
                  href={mailto("general application")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/5"
                >
                  Apply spontaneously
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
                  <Eyebrow tone="on-paper">Chapter 01 · Why us</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Belgian ceiling.{" "}
                    <span className="it">Polish company.</span>
                  </SectionTitle>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <FadeIn delay={120}>
                  <div className="space-y-6 text-[17px] leading-[1.7] text-bg/80 md:text-lg">
                    <p>
                      You work in a Polish company with Polish culture, Polish
                      accounting and a Polish production manager. But the
                      product you install — partly comes from our PVC factory
                      in Częstochowa (since 2016), partly from the Stretch
                      Productions polyester factory in Belgium (since 2018).
                      The whole system you work in belongs to{" "}
                      <strong className="text-bg">Stretchgroup</strong>.
                    </p>
                    <p>
                      It's not 'we work for a foreign company'.
                      It's{" "}
                      <span className="font-serif italic">we are part of an international group,</span>{" "}
                      where the Polish entity — Alto Design Sp. z o.o.,
                      operating under the Stretch Sufit brand — runs PVC
                      production and installation across 17 Polish cities.
                      Operational decisions happen in Częstochowa, strategic
                      decisions — jointly with HQ in Belgium.
                    </p>
                    <p className="border-l-2 border-red pl-5 font-serif text-xl italic text-bg">
                      “We took the best production company in Częstochowa and
                      brought a Belgian standard into it. Polish team, Polish
                      PVC factory, Belgian polyester technology —{" "}
                      <span className="not-italic">one group, two factories, one standard.</span>"
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section id="positions" className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <FadeIn>
                  <Eyebrow>Chapter 02 · Open positions</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Four roles{" "}
                    <span className="it text-paper">we recruit for continuously.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-5">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    We're growing, so these positions are open essentially
                    year-round. If you fit — write to us, even if there's no
                    formal posting up.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 space-y-5 md:mt-20 md:space-y-6">
              {roles.map((role, i) => (
                <FadeIn delay={120 + i * 80} key={role.no}>
                  <details className="group rounded border border-white/10 bg-bg-card/40 p-7 transition-colors open:border-red/40 md:p-9">
                    <summary className="grid cursor-pointer list-none grid-cols-1 items-start gap-4 md:grid-cols-12 md:items-center md:gap-6">
                      <div className="font-display text-xl font-semibold tracking-[-0.02em] text-red md:col-span-1 md:text-2xl">
                        {role.no}
                      </div>
                      <div className="md:col-span-6">
                        <div className="font-display text-xl font-semibold leading-tight text-white md:text-2xl">
                          {role.title}
                        </div>
                      </div>
                      <div className="md:col-span-4">
                        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/55">
                          {role.type}
                        </div>
                        <div className="mt-1 text-[13px] text-white/55">
                          {role.location}
                        </div>
                      </div>
                      <div className="hidden md:col-span-1 md:flex md:justify-end">
                        <span
                          aria-hidden="true"
                          className="font-display text-2xl text-red transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </div>
                    </summary>

                    <div className="mt-8 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-12 md:gap-12">
                      <div className="md:col-span-12">
                        <p className="text-[15.5px] leading-[1.7] text-white/75 md:text-base">
                          {role.body}
                        </p>
                      </div>

                      <div className="md:col-span-6">
                        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                          Responsibilities
                        </div>
                        <ul className="mt-4 space-y-2.5">
                          {role.responsibilities.map((r) => (
                            <li
                              key={r}
                              className="grid grid-cols-[auto_1fr] gap-3 text-[14.5px] leading-relaxed text-white/75"
                            >
                              <span className="text-red">·</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="md:col-span-6">
                        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                          Requirements
                        </div>
                        <ul className="mt-4 space-y-2.5">
                          {role.requirements.map((r) => (
                            <li
                              key={r}
                              className="grid grid-cols-[auto_1fr] gap-3 text-[14.5px] leading-relaxed text-white/75"
                            >
                              <span className="text-red">·</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="md:col-span-12">
                        <a
                          href={mailto(role.title)}
                          className="inline-flex items-center gap-2 rounded-full bg-red px-6 py-3 font-display text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                        >
                          Apply for this role →
                        </a>
                      </div>
                    </div>
                  </details>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-6">
                <FadeIn>
                  <Eyebrow tone="on-paper">Chapter 03 · What we offer</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Six things{" "}
                    <span className="it">we stand behind.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-6">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-bg/75 md:text-lg">
                    No 'free Friday pizza' or other token perks. We focus on
                    things that genuinely improve the quality of work and life.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {benefits.map((b, i) => (
                <FadeIn delay={140 + i * 60} key={b.label}>
                  <div className="h-full rounded border border-bg/10 bg-paper-2 p-7 transition-colors hover:border-red/40">
                    <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                      {b.label}
                    </div>
                    <div className="mt-3 font-display text-lg font-semibold leading-tight text-bg">
                      {b.title}
                    </div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-bg/70">
                      {b.body}
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
                <Eyebrow>Team manifesto</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                  Three words that{" "}
                  <span className="it text-red">describe</span> us best.
                </h2>
              </FadeIn>

              <div className="mt-14 space-y-12 md:space-y-14">
                {values.map((item, i) => (
                  <FadeIn delay={140 + i * 80} key={item.no}>
                    <div className="grid gap-5 md:grid-cols-12 md:gap-8">
                      <div className="md:col-span-4">
                        <div className="font-display text-2xl font-semibold tracking-[-0.02em] text-red md:text-3xl">
                          <span className="it">{item.no}</span>
                        </div>
                      </div>
                      <div className="md:col-span-8">
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
                "radial-gradient(circle at 80% 80%, rgba(0,0,0,0.2), transparent 50%)",
            }}
          />
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Send your CV</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Don't wait for a posting.{" "}
                <span className="it">Write now.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Send your CV and a short note about yourself. A real person
                reads every application — we respond within 7 working days
                regardless of decision.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={mailto("general application")}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Apply by email →
                </a>
                <a
                  href={`tel:${siteConfig.contact.phonePL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Call: +48 730 700 333
                </a>
              </div>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-white/65">
                GDPR: by applying you consent to data processing per our{" "}
                <Link
                  href="/polityka-prywatnosci"
                  className="underline hover:text-white"
                >
                  privacy policy
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
