// app/realizacje/afas-lounge-antwerpia/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { CtaFinal } from "@/components/sections/cta-final";
import { MobileStickyCTA } from "@/components/sections/mobile-sticky-cta";

// Homepage sections — now prop-driven with defaults
import { Ticker } from "@/components/sections/ticker";
import { Heritage } from "@/components/sections/heritage";
import { Stats } from "@/components/sections/stats";

// Project-specific sections
import { ProjectHero } from "@/components/sections/project/project-hero";
import { ProjectMetaStrip } from "@/components/sections/project/project-meta-strip";
import { ProjectBrief } from "@/components/sections/project/project-brief";
import { ProjectSolution } from "@/components/sections/project/project-solution";
import { ProjectGallery } from "@/components/sections/project/project-gallery";
import { ProjectProcess } from "@/components/sections/project/project-process";
import { ProjectReasons } from "@/components/sections/project/project-reasons";
import { ProjectCredit } from "@/components/sections/project/project-credit";
import { RelatedProjects } from "@/components/sections/project/related-projects";

import { getProject } from "@/content/projects";
import { siteConfig } from "@/lib/site-config";
import {
  buildBreadcrumbs,
  buildFaqPage,
  buildCreativeWork,
} from "@/lib/schema";

const SLUG = "afas-lounge-antwerpia";

export const metadata: Metadata = {
  title:
    "AFAS Lounge, Antwerpia — sufit czarny połysk + akustyka | Stretch Sufit",
  description:
    "Realizacja sufitu napinanego w wykończeniu czarny połysk z warstwą akustyczną w 250-metrowym VIP loungu AFAS Dome w Antwerpii. Projekt: Creneau International. Produkcja: Alto Design (Polska), montaż: nasz belgijski zespół, 3 dni.",
  alternates: {
    canonical: "/realizacje/afas-lounge-antwerpia",
  },
  openGraph: {
    title: "AFAS Lounge — sufit czarny połysk z akustyką",
    description:
      "250 m² multifunkcyjnego loungu w AFAS Dome (Antwerpia). Projekt Creneau International, sufit Stretch Sufit.",
    images: ["/images/projects/afas-lounge/og.jpg"],
    type: "article",
  },
};

export default function AfasLoungeAntwerpiaPage() {
  const project = getProject(SLUG);
  if (!project) notFound();

  // --- JSON-LD ---------------------------------------------------------------
  const breadcrumbsLd = buildBreadcrumbs([
    { name: "Home", url: siteConfig.url },
    { name: "Realizacje", url: `${siteConfig.url}/realizacje` },
    {
      name: "AFAS Lounge, Antwerpia",
      url: `${siteConfig.url}/realizacje/${SLUG}`,
    },
  ]);

  const creativeWorkLd = buildCreativeWork({
    name: "AFAS Lounge, Antwerpia — sufit napinany czarny połysk + akustyka",
    description:
      "250 m² sufitu napinanego w wykończeniu czarny połysk z warstwą akustyczną. Multifunkcyjny VIP lounge AFAS Dome w Antwerpii. Produkcja: Alto Design (Polska), montaż: belgijski zespół Stretchgroup, 3 dni. Projekt wnętrza: Creneau International.",
    url: `${siteConfig.url}/realizacje/${SLUG}`,
    image: [
      `${siteConfig.url}${project.heroImage}`,
      ...project.gallery.slice(0, 4).map((g) => `${siteConfig.url}${g.src}`),
    ],
    dateCreated: "2025",
    locationName: "AFAS Dome, Antwerpia",
    locationCountry: project.country,
    contributor: project.designStudio
      ? { name: project.designStudio.name, url: project.designStudio.url }
      : undefined,
    producer: { name: siteConfig.name, url: siteConfig.url },
    keywords: project.tags,
  });

  const faqLd = buildFaqPage([
    {
      question:
        "Czy sufit napinany może być jednocześnie błyszczący i akustyczny?",
      answer:
        "Tak. Sufit czarny połysk z warstwą akustyczną składa się z błyszczącej folii PVC i absorbera dźwięku zamontowanego za nią. Tak wykonano sufit w AFAS Lounge w Antwerpii.",
    },
    {
      question: "Ile trwał montaż sufitu w AFAS Dome?",
      answer:
        "Montaż 250 m² sufitu napinanego w VIP loungu AFAS Dome trwał 3 dni, w czynnym obiekcie, bez prac wykończeniowych po stronie sufitu. Folię wyprodukowała fabryka Alto Design w Polsce, montaż wykonał nasz belgijski zespół.",
    },
    {
      question: "Kto zaprojektował AFAS Lounge?",
      answer:
        "Wnętrze AFAS Lounge zaprojektowało studio Creneau International (Hasselt, Belgia). Sufit napinany czarny połysk z akustyką dostarczył i zamontował Stretch Sufit.",
    },
  ]);

  return (
    <>
      <Nav />
      <main id="main">
        {/* 2 — Hero */}
        <ProjectHero
          eyebrow="Realizacja · Antwerpia 🇧🇪 · 2025"
          titleRed="AFAS Lounge."
          titleItalic="Czarny połysk"
          titleTail=" spotyka akustykę."
          subheadFactual="Sufit napinany w wykończeniu czarny połysk z warstwą akustyczną, zamontowany w 250-metrowym VIP loungu AFAS Dome — teatru eventowego w Antwerpii."
          subheadSecondary="Stretch jest częścią belgijskiej Stretchgroup — w tym projekcie nasze sufity napinane, wyprodukowane w Polsce przez Alto Design, trafiły do belgijskiego obiektu. Montaż w VIP Roomie wykonał nasz belgijski zespół — dla operatora BE•AT i sponsora tytularnego AFAS."
          primaryCta={{
            label: "Bezpłatna wycena podobnej realizacji",
            href: "#wycena",
            event: { location: "project_hero", project: SLUG, label: "wycena" },
          }}
          ghostCta={{
            label: "Zobacz galerię",
            href: "#galeria",
            event: {
              location: "project_hero",
              project: SLUG,
              label: "galeria",
            },
          }}
          heroImage={project.heroImage}
          heroAlt={project.heroAlt}
          heroCaption="AFAS Lounge · AFAS Dome, Antwerpia · 2025"
          chips={["250 m²", "3 dni montażu", "Czarny połysk + akustyka"]}
        />

        {/* 3 — Meta strip */}
        <ProjectMetaStrip project={project} />

        {/* 4 — Ticker (project-specific items) */}
        <Ticker
          items={[
            "Made in Poland",
            "Installed in Belgium",
            "250 m²",
            "Gloss Black PVC",
            "Acoustic backing",
            "3 days on site",
            "Designed by Creneau International",
          ]}
        />

        {/* 5 — Heritage strip (project-specific paragraph + flag pair) */}
        <Heritage
          paragraph={
            <em className="italic">
              Wyprodukowany w Polsce przez Alto Design. Zamontowany w Belgii
              przez nasz belgijski zespół — jedna grupa, dwa kraje, jeden sufit.
            </em>
          }
          tags={[
            { flag: "PL", label: "Produkcja Polska" },
            { flag: "BE", label: "Montaż w Belgii" },
          ]}
        />

        {/* 6 — Stats band (project-specific) */}
        <Stats
          ariaLabel="Kluczowe parametry realizacji AFAS Lounge"
          items={[
            {
              number: "250",
              suffix: "m²",
              emphasis: "Powierzchni sufitu.",
              description: "Multifunkcyjny lounge w AFAS Dome.",
            },
            {
              number: <span className="text-red">3</span>,
              suffix: "dni",
              emphasis: "Montażu w czynnym obiekcie.",
              description: "Bez przerwy w przygotowaniach do otwarcia.",
            },
            {
              number: "2",
              suffix: "w 1",
              emphasis: "Lustro i akustyka.",
              description: "Jedna powłoka, dwa efekty.",
            },
            {
              number: <span className="text-red">0</span>,
              suffix: "kurzu",
              emphasis: "Prac wykończeniowych po nas.",
              description: "Sufit gotowy do pierwszego wieczoru BE•AT.",
            },
          ]}
        />

        {/* 7 — Brief / Wyzwanie */}
        <ProjectBrief
          title="Wyzwanie projektu"
          factualLead="Creneau International zaprojektowało 250 m² loungu, który w ciągu jednego wieczoru zmienia się z restauracji w parkiet, salę konferencyjną i strefę chillout. Sufit musiał obsłużyć dwie sprzeczne potrzeby naraz — efekt lustra dla wyglądu klubu i tłumienie pogłosu pod system nagłośnienia BE•AT."
          bullets={[
            "Multifunkcyjność: jedna przestrzeń, cztery scenariusze użycia w ciągu jednego wieczoru — restauracja, parkiet, sala konferencyjna, strefa chillout.",
            "System nagłośnienia klasy koncertowej BE•AT wymaga akustyki, której nie da się załatwić panelami na ścianach bez psucia estetyki klubu.",
            "Obiekt w użyciu — krótkie okno montażowe między eventami, brak miejsca na prace wykończeniowe i kurz.",
            "Spójność wizualna z czerwienią AFAS i błękitem BE•AT — sufit musiał zniknąć i jednocześnie odbić oba kolory bez zniekształceń.",
          ]}
          image="/images/projects/afas-lounge/brief.jpg"
          imageAlt="Wnętrze AFAS Lounge w trakcie konfiguracji z kurtynami dzielącymi przestrzeń na strefy."
        />

        {/* 8 — Rozwiązanie produkt */}
        <ProjectSolution
          productLabel="Sufit napinany · czarny połysk + akustyka"
          bullets={[
            {
              strong: "Folia PVC czarny połysk",
              body: "odbicie rzędu 90%, efekt lustra nad barem i parkietem.",
            },
            {
              strong: "Warstwa akustyczna za folią",
              body: "perforacja + absorber, redukuje pogłos w pasmach mowy i muzyki.",
            },
            {
              strong: "Folia bezszwowa do 6,50 m szerokości",
              body: "produkcja Alto Design, Polska — bez widocznych łączeń na większości powierzchni.",
            },
            {
              strong: "Zintegrowane oświetlenie LED i punkty głośnikowe",
              body: "wszystkie otwory wycięte w fabryce pod wymiar projektu.",
            },
            {
              strong: "Demontowalny",
              body: "sufit można otworzyć dla serwisu instalacji nad nim, bez wymiany folii.",
            },
          ]}
          caption="Połysk i akustyka w jednej powłoce to standard w Stretch — nie była to specjalna konstrukcja dla tego projektu, tylko właściwy wybór z istniejącej oferty."
        />

        {/* 9 — Galeria */}
        <ProjectGallery
          id="galeria"
          title="Galeria realizacji"
          gallery={project.gallery}
          indexHref="/realizacje"
        />

        {/* 10 — Process */}
        <ProjectProcess
          heading="Jak to zrobiliśmy"
          steps={[
            {
              title: "Brief od Creneau",
              body: "Wymiary, wymóg lustra + tłumienia, paleta AFAS/BE•AT. Spec ustalony w jednym przejściu.",
            },
            {
              title: "Produkcja w Polsce",
              body: "Folia czarny połysk + warstwa akustyczna wycięte pod kształt sali w fabryce Alto Design w Częstochowie, w tym otwory pod oświetlenie i głośniki.",
            },
            {
              title: "Montaż w 3 dni",
              body: "Nasz belgijski zespół, w czynnym obiekcie, bez prac wykończeniowych, bez kurzu.",
            },
            {
              title: "Odbiór i otwarcie",
              body: "Sufit gotowy do pierwszego wieczoru BE•AT — restauracja, koncert, parkiet, konferencja w jednym dniu.",
            },
          ]}
        />

        {/* 11 — Reasons */}
        <ProjectReasons
          cards={[
            {
              title: "Lustro bez ciężaru lustra",
              body: "Folia czarny połysk daje efekt szklanego lustra przy ułamku wagi i bez ryzyka pękania nad parkietem.",
            },
            {
              title: "Akustyka pod nagłośnienie BE•AT",
              body: "Warstwa absorbera za folią zmniejsza pogłos bez widocznych paneli na ścianach.",
            },
            {
              title: "Montaż w obiekcie w użyciu",
              body: "3 dni, bez kurzu, bez przerwy w przygotowaniach do otwarcia.",
            },
          ]}
        />

        {/* 12 — Credit */}
        {project.designStudio && (
          <ProjectCredit
            heading="Studio projektowe"
            studio={project.designStudio}
            bodyText="Creneau International (Hasselt, Belgia) odpowiadało za pełen scope projektu AFAS Lounge — od researchu i koncepcji po projekt wnętrza, project management i build. Nasza rola obejmowała wyłącznie dostawę i montaż sufitu napinanego w specyfikacji ustalonej przez studio."
            projectSlug={SLUG}
            intro="Wnętrze AFAS Lounge zostało zaprojektowane od podstaw przez zewnętrzne studio. Nasza rola ograniczała się do dostawy i montażu sufitu w zatwierdzonym przez nich kształcie i wykończeniu."
          />
        )}

        {/* 13 — Related */}
        <RelatedProjects currentSlug={SLUG} />

        {/* 14 — CTA Final */}
        <div id="wycena">
          <CtaFinal
            source="project_afas_lounge"
            headingOverride={
              <>
                Chcesz podobny sufit
                <br />u <span className="it">siebie?</span>
              </>
            }
            subheadOverride="Pomiar i wycena bezpłatne. Realizujemy w całej Polsce, projekty komercyjne i prywatne."
          />
        </div>
      </main>

      <MobileStickyCTA />
      <Footer />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  );
}
