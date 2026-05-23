/**
 * Homepage — English locale.
 * File path: /app/en/page.tsx
 *
 * Mirror of the Polish homepage with English content + adapted framing for
 * English-speaking audiences (expats, foreign investors, international clients).
 */

import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildLocalBusiness,
  buildBreadcrumbs,
  buildFaqPage,
} from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

import { Nav } from "@/components/sections/en/nav";
import { Hero } from "@/components/sections/en/hero";
import { Ticker } from "@/components/sections/ticker";
import { Heritage } from "@/components/sections/heritage";
import { Stats } from "@/components/sections/stats";
import { EditorialIntro } from "@/components/sections/en/editorial-intro";
import { Solutions } from "@/components/sections/en/solutions";
import { Process } from "@/components/sections/en/process";
import { Showcase } from "@/components/sections/en/showcase";
import { WhyUs } from "@/components/sections/en/why-us";
import { Testimonials } from "@/components/sections/en/testimonials";
import { Cities } from "@/components/sections/en/cities";
import { CtaFinal } from "@/components/sections/en/cta-final";
import { Footer } from "@/components/sections/en/footer";
import { MobileStickyCTA } from "@/components/sections/en/mobile-sticky-cta";

export const metadata: Metadata = {
  title: "Stretch Sufit — A new ceiling in one day | Premium stretch ceilings",
  description:
    "Stretch ceilings in Poland. PVC manufactured in our factory in Poland (seamless up to 6.50 m), polyester from Belgium. Part of Stretchgroup. Installed in 1 day, no dust, up to 15 years warranty. 17 cities in Poland.",
  alternates: {
    canonical: "/en",
    languages: {
      "pl-PL": "/",
      "en-US": "/en",
      "uk-UA": "/uk",
    },
  },
  openGraph: {
    title: "Stretch Sufit — A new ceiling in one day",
    description:
      "Stretch ceilings. PVC manufactured in Poland, polyester in Belgium. Installed in 1 day, no dust, up to 15 years warranty.",
    url: `${siteConfig.url}/en`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Stretch Sufit — premium stretch ceilings",
      },
    ],
  },
};

const faqs = [
  {
    question: "What is a stretch ceiling?",
    answer:
      "A stretch ceiling is a flexible membrane — PVC film or woven polyester — stretched onto an aluminium profile fixed at the room's perimeter. It creates a perfectly smooth, seamless surface in a single day — no plastering, no painting, no dust. Stretch Sufit manufactures PVC in our factory in Poland (since 2016) and installs polyester from the Belgian Stretchgroup (since 2018).",
  },
  {
    question: "How long does stretch-ceiling installation take?",
    answer:
      "Installation typically takes 1 day. A two-person Stretch Sufit team installs up to 50 m² per day — no finishing work, no dust, no need to move furniture. You can stay in the room throughout the installation.",
  },
  {
    question: "How much does a stretch ceiling cost?",
    answer:
      "Pricing depends on surface area, membrane type (PVC or polyester), finish (matte, gloss, satin, sparkle, texture, photo print) and LED lighting integration. Stretch Sufit provides free on-site measurement and quotation — quotes are valid for 30 days with no hidden costs.",
  },
  {
    question: "How does a stretch ceiling compare to a drop ceiling?",
    answer:
      "A stretch ceiling is a flexible membrane on a profile — installed in 1 day, no plastering or painting, removable, dust-free. A drywall suspended ceiling requires a steel frame, plastering and painting, with installation typically taking 3–7 days. Stretch ceilings have a 25-year lifespan and a warranty of up to 15 years (15 years on PVC, 10 years on polyester).",
  },
];

// English Heritage / Ticker / Stats content passed as props to the
// reusable components.
const heritageParagraph = (
  <>
    <strong className="font-semibold">Stretch Sufit</strong> is part of the
    Belgian <strong className="font-semibold">Stretchgroup</strong>{" "}
    <span className="text-bg/55">
      — a stretch ceiling manufacturer. Polyester is made in Belgium,
      PVC in our factory in Poland.
    </span>
  </>
);

const heritageTags = [
  { flag: "BE" as const, label: "Polyester · Belgium" },
  { flag: "PL" as const, label: "PVC · Poland" },
];

const tickerPhrases = [
  "PVC produced in Poland",
  "Polyester made in Belgium",
  "Seamless up to 6.50 m",
  "Matte · Gloss · Sparkle · Texture",
  "No finishing work",
  "100% recyclable",
];

const stats = [
  {
    number: <span className="text-red">1</span>,
    suffix: "day",
    emphasis: "Entire ceiling done.",
    description: "Up to 50 m² per day by a 2-installer team.",
  },
  {
    number: "25",
    suffix: "years",
    emphasis: "Lifespan.",
    description: "Resistant to moisture, temperature and time.",
  },
  {
    number: "130",
    suffix: "+",
    emphasis: "Colours & finishes.",
    description: "Matte, gloss, satin, sparkle, texture, photo print, transparent.",
  },
  {
    number: <span className="text-red">0</span>,
    suffix: "dust",
    emphasis: "Clean installation.",
    description: "No plastering, no painting, no mess.",
  },
];

export default function HomePageEn() {
  return (
    <>
      <JsonLd data={buildLocalBusiness()} />
      <JsonLd
        data={buildBreadcrumbs([{ name: "Home", url: `${siteConfig.url}/en` }])}
      />
      <JsonLd data={buildFaqPage(faqs)} />

      <Nav />
      <main>
        <Hero />
        <Ticker items={tickerPhrases} />
        <Heritage paragraph={heritageParagraph} tags={heritageTags} />
        <Stats items={stats} ariaLabel="Key facts" />
        <EditorialIntro />
        <Solutions />
        <Process />
        <Showcase />
        <WhyUs />
        <Testimonials />
        <Cities />
        <CtaFinal />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
