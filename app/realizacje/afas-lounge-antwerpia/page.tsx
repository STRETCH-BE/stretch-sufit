// app/realizacje/afas-lounge-antwerpia/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { CtaFinal } from "@/components/sections/cta-final";
import { MobileStickyCta } from "@/components/sections/mobile-sticky-cta";

// Homepage components assumed to accept props (see note in PROMPT 6 reply)
import { RedTicker } from "@/components/sections/red-ticker";
import { HeritageStrip } from "@/components/sections/heritage-strip";
import { StatsBand } from "@/components/sections/stats-band";

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
} from "@/lib/jsonld";

const SLUG = "afas-lounge-antwerpia";

export const metadata: Metadata = {
  title:
    "AFAS Lounge, Antwerpia — sufit czarny połysk + akustyka | Stretch Sufit",
  description:
    "Realizacja sufitu napinanego w wykończeniu czarny połysk z warstwą akustyczną w 250-metrowym loungu AFAS Dome w Antwerpii. Projekt: Creneau International. Belgijska technologia, montaż w 1 dzień.",
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
      "250 m² sufitu napinanego w wykończeniu czarny połysk z warstwą akustyczną. Multifunkcyjny lounge AFAS Dome w Antwerpii. Projekt wnętrza: Creneau International.",
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
        "Montaż 250 m² sufitu napinanego w loungu AFAS Dome trwał 1 dzień, w czynnym obiekcie, bez prac wykończeniowych po stronie sufitu.",
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
          subheadFactual="Sufit napinany w wykończeniu czarny połysk z warstwą akustyczną, zamontowany w 250-metrowym loungu AFAS Dome w Antwerpii."
          subheadSecondary="Stretch Sufit jest częścią belgijskiej grupy Stretch Ceiling MSD — w tym projekcie belgijska technologia trafiła do belgijskiego obiektu, dla belgijskiego operatora BE•AT i sponsora tytularnego AFAS."
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
          chips={["250 m²", "1 dzień montażu", "Czarny połysk + akustyka"]}
        />

        {/* 3 — Meta strip */}
        <ProjectMetaStrip project={project} />

        {/* 4 — Red ticker (project-specific) */}
        <RedTicker
          items={[
            "Made in Belgium",
            "Installed in Belgium",
            "250 m²",
            "Gloss Black PVC",
            "Acoustic backing",
            "1 day on site",
            "Designed by Creneau International",
          ]}
        />

        {/* 5 — Heritage strip */}
        <HeritageStrip
          italicLine="Belgijska technologia. Belgijski obiekt. Belgijska realizacja od pierwszego szkicu do ostatniego napięcia folii."
          flags={["BE", "BE"]}
        />

        {/* 6 — Stats band */}
        <StatsBand
          stats={[
            { value: "250 m²", label: "powierzchni sufitu" },
            { value: "1 dzień", label: "montażu w czynnym obiekcie" },
            { value: "2-w-1", label: "lustro i akustyka w jednej powłoce" },
            { value: "0 kurzu", label: "prac wykończeniowych po nas" },
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
              strong: "Bezszwowy montaż do 5,15 m szerokości",
              body: "produkcja Stretch Ceiling MSD, Belgia — bez widocznych łączeń na większości powierzchni.",
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
          caption="Połysk i akustyka w jednej powłoce to standard w Stretch Ceiling MSD — nie była to specjalna konstrukcja dla tego projektu, tylko właściwy wybór z istniejącej oferty."
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
              title: "Produkcja w Belgii",
              body: "Wycięcie folii czarny połysk + warstwy akustycznej pod kształt sali, w tym otwory pod oświetlenie i głośniki.",
            },
            {
              title: "Montaż w 1 dzień",
              body: "W czynnym obiekcie, bez prac wykończeniowych, bez kurzu. Ekipa wchodzi i wychodzi w jednym oknie.",
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
              body: "1 dzień, bez kurzu, bez przerwy w przygotowaniach do otwarcia.",
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
          />
        )}

        {/* 13 — Related */}
        <RelatedProjects currentSlug={SLUG} />

        {/* 14 — CTA Final */}
        <div id="wycena">
          <CtaFinal
            source="project_afas_lounge"
            headingOverride="Chcesz podobny sufit u siebie?"
            subheadOverride="Pomiar i wycena bezpłatne. Realizujemy w całej Polsce, projekty komercyjne i prywatne."
          />
        </div>
      </main>

      <MobileStickyCta />
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
