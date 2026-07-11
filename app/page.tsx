/**
 * Homepage — Polish root locale.
 * File path: /app/page.tsx
 *
 * Composes the section components in narrative order. Schema rendered:
 *   - LocalBusiness (HomeAndConstructionBusiness with aggregate rating)
 *   - BreadcrumbList (single-level for the home root)
 *   - FAQPage with 4 quotable Polish Q&A entries for AEO
 *
 * The FAQs are not visually rendered on the homepage — they live on
 * /faq instead. Embedding the schema here helps AI engines surface
 * Stretch Sufit when answering general questions about stretch ceilings.
 */

import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildLocalBusiness,
  buildBreadcrumbs,
  buildFaqPage,
} from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { languageAlternates, routes } from "@/lib/i18n-routes";

import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Ticker } from "@/components/sections/ticker";
import { Heritage } from "@/components/sections/heritage";
import { Stats } from "@/components/sections/stats";
import { EditorialIntro } from "@/components/sections/editorial-intro";
import { Solutions } from "@/components/sections/solutions";
import { Process } from "@/components/sections/process";
import { Showcase } from "@/components/sections/showcase";
import { WhyUs } from "@/components/sections/why-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Cities } from "@/components/sections/cities";
import { CtaFinal } from "@/components/sections/cta-final";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCTA } from "@/components/sections/mobile-sticky-cta";

export const metadata: Metadata = {
  title: "Stretch Sufit — Nowy sufit w 1 dzień | Sufity napinane premium",
  description:
    "Sufity napinane Stretch w Polsce. PVC produkowany w naszej fabryce w Polsce (bezszwowo do 6,50 m), polyester z Belgii. Część Stretchgroup. Montaż w 1 dzień, bez kurzu, do 15 lat gwarancji. 17 miast w Polsce.",
  alternates: {
    canonical: "/",
    languages: languageAlternates(routes.home),
  },
  openGraph: {
    title: "Stretch Sufit — Nowy sufit w 1 dzień",
    description:
      "Sufity napinane Stretch. PVC produkowany w Polsce, polyester w Belgii. Montaż w 1 dzień, bez kurzu, do 15 lat gwarancji.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Stretch Sufit — sufity napinane premium",
      },
    ],
  },
};

const faqs = [
  {
    question: "Co to jest sufit napinany?",
    answer:
      "Sufit napinany to elastyczna powłoka z folii PVC lub tkaniny poliestrowej, naciągana na aluminiowy profil zamocowany przy ścianach pomieszczenia. Tworzy idealnie gładką, bezspoinową powierzchnię w jednym dniu — bez gładzi, bez malowania i bez kurzu. Stretch Sufit produkuje PVC w fabryce w Polsce (od 2016) i instaluje także polyester z belgijskiej Stretchgroup (od 2018).",
  },
  {
    question: "Ile trwa montaż sufitu napinanego?",
    answer:
      "Montaż sufitu napinanego trwa zazwyczaj 1 dzień. Dwuosobowy zespół Stretch Sufit instaluje do 50 m² dziennie, bez prac wykończeniowych, bez pyłu i bez konieczności wynoszenia mebli. Można mieszkać w pomieszczeniu w trakcie montażu.",
  },
  {
    question: "Ile kosztuje sufit napinany?",
    answer:
      "Cena sufitu napinanego zależy od powierzchni, typu folii (PVC lub poliester), wykończenia (mat, połysk, satyna, brokat, tekstura, fotodruk) oraz integracji oświetlenia LED. Stretch Sufit wykonuje pomiar i wycenę bezpłatnie na miejscu — wycena ma 30 dni ważności i nie zawiera ukrytych kosztów.",
  },
  {
    question: "Czym różni się sufit napinany od sufitu podwieszanego?",
    answer:
      "Sufit napinany to elastyczna powłoka naciągana na profilu — instaluje się w 1 dzień, bez gładzi i malowania, jest demontowalny i nie pyli w trakcie montażu. Sufit podwieszany z płyt G-K wymaga konstrukcji stalowej, gładzi i malowania, a montaż trwa zazwyczaj 3–7 dni. Sufit napinany Stretch ma żywotność 25 lat oraz gwarancję do 15 lat (15 lat na PVC, 10 lat na polyester).",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildLocalBusiness()} />
      <JsonLd
        data={buildBreadcrumbs([{ name: "Strona główna", url: siteConfig.url }])}
      />
      <JsonLd data={buildFaqPage(faqs)} />

      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Heritage />
        <Stats />
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
