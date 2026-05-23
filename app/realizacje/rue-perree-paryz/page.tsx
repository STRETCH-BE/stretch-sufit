// app/realizacje/rue-perree-paryz/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { CtaFinal } from "@/components/sections/cta-final";
import { MobileStickyCTA } from "@/components/sections/mobile-sticky-cta";
import { Ticker } from "@/components/sections/ticker";
import { Heritage } from "@/components/sections/heritage";
import { Stats } from "@/components/sections/stats";

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

const SLUG = "rue-perree-paryz";

export const metadata: Metadata = {
  title:
    "Rue Perrée, Paryż — STRETCH Light Tunable White w concept storze | Stretch Sufit",
  description:
    "Realizacja 45 m² sufitu STRETCH Light Tunable White w paryskim concept storze ART RECHERCHE INDUSTRIE przy Rue Perrée. Projekt: Ramdane Touchami. Rok: 2024.",
  alternates: { canonical: "/realizacje/rue-perree-paryz" },
  openGraph: {
    title: "Rue Perrée — Tunable White w paryskim butiku",
    description:
      "45 m² podświetlanego sufitu z regulowaną temperaturą barwową. Projekt: Ramdane Touchami.",
    images: ["/images/projects/rue-perree-paryz/og.jpg"],
    type: "article",
  },
};

export default function RuePerreeParyzPage() {
  const project = getProject(SLUG);
  if (!project) notFound();

  const breadcrumbsLd = buildBreadcrumbs([
    { name: "Home", url: siteConfig.url },
    { name: "Realizacje", url: `${siteConfig.url}/realizacje` },
    { name: "Rue Perrée, Paryż", url: `${siteConfig.url}/realizacje/${SLUG}` },
  ]);

  const creativeWorkLd = buildCreativeWork({
    name: "Rue Perrée, Paryż — sufit STRETCH Light Tunable White",
    description:
      "45 m² sufitu podświetlanego STRETCH Light z regulowaną temperaturą barwową (Tunable White) w paryskim concept storze ART RECHERCHE INDUSTRIE. Projekt: Ramdane Touchami.",
    url: `${siteConfig.url}/realizacje/${SLUG}`,
    image: [
      `${siteConfig.url}${project.heroImage}`,
      ...project.gallery.slice(0, 4).map((g) => `${siteConfig.url}${g.src}`),
    ],
    dateCreated: "2024",
    locationName: "Paryż, Francja",
    locationCountry: project.country,
    contributor: project.designStudio
      ? { name: project.designStudio.name, url: project.designStudio.url }
      : undefined,
    producer: { name: siteConfig.name, url: siteConfig.url },
    keywords: project.tags,
  });

  const faqLd = buildFaqPage([
    {
      question: "Czym jest sufit Tunable White?",
      answer:
        "Tunable White to system sufitu podświetlanego z dynamiczną regulacją temperatury barwowej światła — zazwyczaj w zakresie od 2700 K (światło ciepłe) do 6500 K (światło chłodne). Pozwala dostosować klimat wnętrza do pory dnia lub funkcji ekspozycji bez zmiany opraw.",
    },
    {
      question: "Czy sufit podświetlany działa jako jedyne oświetlenie sklepu?",
      answer:
        "Tak. Sufit STRETCH Light z translucentną folią napinaną i panelami LED nad nią daje równomierną luminancję całej powierzchni i może być jedynym źródłem światła w przestrzeni handlowej, eliminując potrzebę instalowania opraw punktowych.",
    },
    {
      question: "Kto zaprojektował concept store przy Rue Perrée?",
      answer:
        "Concept store ART RECHERCHE INDUSTRIE przy Rue Perrée w Paryżu zaprojektował Ramdane Touchami. Sufit STRETCH Light Tunable White dostarczył belgijski oddział grupy STRETCH w 2024 roku.",
    },
    {
      question: "Czy sufit Tunable White można dostać w Polsce?",
      answer:
        "Tak. Stretch Sufit jako polski oddział grupy STRETCH oferuje system sufitu podświetlanego z regulacją temperatury barwowej dla projektów retailowych, gastronomicznych i biurowych w całej Polsce.",
    },
  ]);

  return (
    <>
      <Nav />
      <main id="main">
        <ProjectHero
          eyebrow="Realizacja · Paryż 🇫🇷 · 2024"
          titleRed="Rue Perrée."
          titleItalic="Tunable White"
          titleTail=" w paryskim concept storze."
          subheadFactual="Sufit STRETCH Light Tunable White na 45 m² powierzchni paryskiego concept store'u ART RECHERCHE INDUSTRIE przy Rue Perrée. Regulacja temperatury barwowej w zakresie od ciepłej do chłodnej — w jednej powłoce sufitowej."
          subheadSecondary="Stretch Sufit jest częścią belgijskiej grupy Stretch Ceiling MSD — ten sam system Tunable White, który oświetla butiki w Paryżu, dostarczamy klientom retailowym w Polsce."
          primaryCta={{
            label: "Bezpłatna wycena podobnej realizacji",
            href: "#wycena",
            event: { location: "project_hero", project: SLUG, label: "wycena" },
          }}
          ghostCta={{
            label: "Zobacz galerię",
            href: "#galeria",
            event: { location: "project_hero", project: SLUG, label: "galeria" },
          }}
          heroImage={project.heroImage}
          heroAlt={project.heroAlt}
          heroCaption="ART RECHERCHE INDUSTRIE · Rue Perrée, Paryż · 2024"
          chips={["45 m²", "Tunable White", "2700 K – 6500 K"]}
        />

        <ProjectMetaStrip project={project} />

        <Ticker
          items={[
            "Made in Belgium",
            "STRETCH Light",
            "Tunable White",
            "45 m²",
            "Designed by Ramdane Touchami",
            "Boutique retail",
            "Paris 2024",
          ]}
        />

        <Heritage
          paragraph={
            <>
              <strong className="font-semibold">Stretch Sufit</strong> jest
              częścią belgijskiej{" "}
              <strong className="font-semibold">Stretchgroup</strong>{" "}
              <span className="text-bg/55">
                — system STRETCH Light Tunable White dostępny jest również dla
                projektów retailowych w Polsce.
              </span>
            </>
          }
          tags={[
            { flag: "BE", label: "Technologia Stretch" },
            { flag: "PL", label: "Realizacje w Polsce" },
          ]}
        />

        <Stats
          ariaLabel="Kluczowe parametry realizacji Rue Perrée"
          items={[
            { number: "45", suffix: "m²", emphasis: "Powierzchni sufitu.", description: "Cały sufit jako jedna oprawa świetlna." },
            { number: <span className="text-red">2700–6500</span>, suffix: "K", emphasis: "Regulacja barwy.", description: "Od ciepłej do chłodnej w jednym systemie." },
            { number: "1", emphasis: "Powłoka.", description: "Forma rzeźbiarska, oświetlenie i sufit w jednym." },
            { number: <span className="text-red">25</span>, suffix: "lat", emphasis: "Żywotność.", description: "Standardowa gwarancja systemu STRETCH." },
          ]}
        />

        <ProjectBrief
          title="Wyzwanie projektu"
          factualLead="ART RECHERCHE INDUSTRIE to boutique store o silnej tożsamości wizualnej. Architekt Ramdane Touchami chciał, aby cały sufit pełnił rolę oprawy świetlnej dla ekspozycji — bez widocznych spotów, bez listew, z możliwością zmiany klimatu wnętrza w trakcie dnia."
          bullets={[
            "Sufit musiał być jedynym źródłem światła — żadnych spotów, listew czy lamp w widocznym polu wzroku.",
            "Wymagana była zmiana temperatury barwowej — od ciepłej rano i wieczorem po chłodną w pełnej ekspozycji produktu.",
            "Powierzchnia 45 m² — kompaktowa przestrzeń, w której rozkład światła musi być idealnie równomierny.",
            "Spójność z designerskim charakterem butiku — czysty sufit bez widocznych otworów, profili czy łączeń.",
          ]}
          image="/images/projects/rue-perree-paryz/brief.jpg"
          imageAlt="Wnętrze butiku ART RECHERCHE INDUSTRIE z designerską ekspozycją i czystym, podświetlanym sufitem."
        />

        <ProjectSolution
          productLabel="STRETCH Light — Tunable White"
          bullets={[
            { strong: "Folia translucentna napinana", body: "rozprasza światło z paneli LED ukrytych nad sufitem, dając równomierną luminancję całej powierzchni." },
            { strong: "LED Tunable White", body: "panele z dwoma temperaturami światła (2700 K i 6500 K) sterowane razem — efekt skalowany płynnie między ciepłem i chłodem." },
            { strong: "Brak widocznych opraw", body: "cały system schowany za folią, w polu wzroku tylko jednorodna świecąca powierzchnia." },
            { strong: "Bezszwowy montaż", body: "folia rozpięta na ramach obwodowych bez widocznych łączeń ani profili wewnątrz powierzchni." },
            { strong: "Sterowanie DALI / DMX", body: "integracja ze sterowaniem inteligentnym sklepem — sceny świetlne dla różnych pór dnia." },
          ]}
          caption="W 45-metrowym butiku jeden system robi pracę kilku — oświetlenie sufitowe, lokalne akcenty i klimat wnętrza zmieniany scenariuszem świetlnym."
        />

        <ProjectGallery
          id="galeria"
          title="Galeria realizacji"
          gallery={project.gallery}
          indexHref="/realizacje"
        />

        <ProjectProcess
          heading="Jak to zrobiliśmy"
          steps={[
            { title: "Brief od Ramdane Touchami", body: "Wymiar, wymóg jednego źródła światła, regulacja barwy, integracja ze sterowaniem sklepu." },
            { title: "Produkcja w Belgii", body: "Folia translucentna na wymiar, panele LED Tunable White, sterownik DALI." },
            { title: "Montaż", body: "Rama obwodowa, układ paneli LED nad sufitem, napięcie folii, kalibracja barwowa." },
            { title: "Uruchomienie sklepu", body: "Programowanie scen świetlnych na różne pory dnia i ekspozycje — od ciepłej po chłodną." },
          ]}
        />

        <ProjectReasons
          cards={[
            { title: "Cały sufit jako oprawa", body: "Brak widocznych spotów ani listew — światło wychodzi z całej powierzchni sufitowej jednocześnie." },
            { title: "Klimat na sterowniku", body: "Ta sama przestrzeń wieczorem ma ciepłą atmosferę butikową, w dzień — chłodną do ekspozycji produktu." },
            { title: "Bezserwisowe 25 lat", body: "Panele LED nad sufitem są dostępne przez demontaż folii — nie wymaga to wymiany całego systemu." },
          ]}
        />

        {project.designStudio && (
          <ProjectCredit
            heading="Architekt projektu"
            studio={project.designStudio}
            bodyText="Concept store ART RECHERCHE INDUSTRIE przy Rue Perrée w Paryżu zaprojektował Ramdane Touchami. Sufit STRETCH Light Tunable White dostarczył belgijski oddział grupy STRETCH. Stretch Sufit oferuje ten sam system retailowym klientom w Polsce."
            projectSlug={SLUG}
            intro="Realizacja powstała w paryskim oddziale grupy STRETCH. Identyczny system Tunable White dostarczamy do butików, restauracji i biur w Polsce — z tej samej fabryki w Belgii."
          />
        )}

        <RelatedProjects currentSlug={SLUG} />

        <div id="wycena">
          <CtaFinal
            source="project_rue_perree"
            headingOverride={
              <>
                Cały sufit
                <br />
                <span className="it">jako oprawa świetlna?</span>
              </>
            }
            subheadOverride="Pomiar i wycena sufitu STRETCH Light Tunable White — bezpłatne. Realizujemy projekty retailowe i gastronomiczne w całej Polsce."
          />
        </div>
      </main>

      <MobileStickyCTA />
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
