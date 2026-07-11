// app/realizacje/bnp-paribas-fortis-bruksela/page.tsx
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

const SLUG = "bnp-paribas-fortis-bruksela";

export const metadata: Metadata = {
  title:
    "BNP Paribas Fortis, Bruksela — tekstylne sufity świetlne i akustyczne | Stretch Sufit",
  description:
    "2000 m² tekstylnych sufitów STRETCH Light + STRETCH Acoustic w centrali BNP Paribas Fortis w Brukseli. Projekt: Jaspers-Eyers Architects i NCBHAM. Membrany wyprodukowane w Belgii przez Stretch Productions BV, montaż: nasz belgijski zespół.",
  alternates: {
    canonical: "/realizacje/bnp-paribas-fortis-bruksela",
  },
  openGraph: {
    title: "BNP Paribas Fortis — tekstylne sufity świetlne i akustyczne",
    description:
      "2000 m² sufitów STRETCH Light + Acoustic w brukselskiej centrali banku. Projekt Jaspers-Eyers Architects, sufity Stretch Sufit.",
    images: ["/images/projects/bnp-paribas-fortis-bruksela/og.jpg"],
    type: "article",
  },
};

export default function BnpParibasFortisBrukselaPage() {
  const project = getProject(SLUG);
  if (!project) notFound();

  // --- JSON-LD ---------------------------------------------------------------
  const breadcrumbsLd = buildBreadcrumbs([
    { name: "Home", url: siteConfig.url },
    { name: "Realizacje", url: `${siteConfig.url}/realizacje` },
    {
      name: "BNP Paribas Fortis, Bruksela",
      url: `${siteConfig.url}/realizacje/${SLUG}`,
    },
  ]);

  const creativeWorkLd = buildCreativeWork({
    name: "BNP Paribas Fortis, Bruksela — tekstylne sufity świetlne i akustyczne",
    description:
      "2000 m² tekstylnych sufitów świetlnych STRETCH Light i akustycznych STRETCH Acoustic w centrali BNP Paribas Fortis przy Warandeberg w Brukseli. Membrany wyprodukowane w Belgii przez Stretch Productions BV (część Stretchgroup), montaż: nasz belgijski zespół. Projekt wnętrza: Jaspers-Eyers Architects i NCBHAM, partner: Conceptexpo.",
    url: `${siteConfig.url}/realizacje/${SLUG}`,
    image: [
      `${siteConfig.url}${project.heroImage}`,
      ...project.gallery.slice(0, 4).map((g) => `${siteConfig.url}${g.src}`),
    ],
    dateCreated: "2024",
    locationName: "BNP Paribas Fortis, Warandeberg, Bruksela",
    locationCountry: project.country,
    contributor: project.designStudio
      ? { name: project.designStudio.name, url: project.designStudio.url }
      : undefined,
    producer: { name: siteConfig.name, url: siteConfig.url },
    keywords: project.tags,
  });

  const faqLd = buildFaqPage([
    {
      question: "Czy sufit napinany może mieć formę 3D?",
      answer:
        "Tak. Tekstylne membrany napina się na zakrzywionych ramach wykonanych pod wymiar — tak powstały klosze nad Barista Barem i strefami spotkań w centrali BNP Paribas Fortis w Brukseli.",
    },
    {
      question: "Jak działa tekstylny sufit świetlny STRETCH Light?",
      answer:
        "Za translucentną tkaniną montuje się źródła LED — cała powierzchnia sufitu świeci równomiernie, bez widocznych opraw i bez olśnienia. Sufit staje się oprawą świetlną.",
    },
    {
      question: "Kto zaprojektował wnętrza centrali BNP Paribas Fortis?",
      answer:
        "Wnętrza zaprojektowały Jaspers-Eyers Architects i NCBHAM, partnerem projektu było Conceptexpo. Tekstylne sufity świetlne i akustyczne dostarczyła i zamontowała belgijska ekipa Stretchgroup.",
    },
  ]);

  return (
    <>
      <Nav />
      <main id="main">
        {/* 2 — Hero */}
        <ProjectHero
          eyebrow="Realizacja · Bruksela 🇧🇪 · 2024"
          titleRed="BNP Paribas Fortis."
          titleItalic="Światło i akustyka"
          titleTail=" z tekstyliów."
          subheadFactual="2000 m² tekstylnych sufitów świetlnych STRETCH Light i akustycznych STRETCH Acoustic w centrali banku przy Warandeberg, w samym centrum Brukseli — z okrągłym kloszem świetlnym nad Barista Barem rozciągniętym na trzy kondygnacje."
          subheadSecondary="Stretch jest częścią belgijskiej Stretchgroup — membrany tekstylne wyprodukowała w Belgii Stretch Productions BV, a montaż wykonał nasz belgijski zespół. Te same systemy światła i akustyki dostarczamy klientom w Polsce."
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
          heroCaption="Barista Bar · BNP Paribas Fortis, Warandeberg, Bruksela · 2024"
          chips={["2000 m²", "STRETCH Light + Acoustic", "Bruksela 2024"]}
        />

        {/* 3 — Meta strip */}
        <ProjectMetaStrip project={project} />

        {/* 4 — Ticker (project-specific items) */}
        <Ticker
          items={[
            "Made in Belgium",
            "Installed in Belgium",
            "2000 m²",
            "STRETCH Light",
            "STRETCH Acoustic",
            "Jaspers-Eyers Architects",
            "Barista Bar",
          ]}
        />

        {/* 5 — Heritage strip (project-specific paragraph + flag pair) */}
        <Heritage
          paragraph={
            <em className="italic">
              Stretch jest częścią belgijskiej Stretchgroup — membrany
              wyprodukowała Stretch Productions BV w Belgii, zamontował nasz
              belgijski zespół. Te same tekstylne systemy światła i akustyki
              dostarczamy klientom w Polsce.
            </em>
          }
          tags={[
            { flag: "BE", label: "Produkcja Belgia" },
            { flag: "BE", label: "Montaż w Belgii" },
          ]}
        />

        {/* 6 — Stats band (project-specific) */}
        <Stats
          ariaLabel="Kluczowe parametry realizacji BNP Paribas Fortis"
          items={[
            {
              number: "2000",
              suffix: "m²",
              emphasis: "Powierzchni sufitów.",
              description: "Tekstylne membrany świetlne i akustyczne.",
            },
            {
              number: <span className="text-red">3</span>,
              suffix: "kondygnacje",
              emphasis: "Stref wspólnych.",
              description: "Barista Bar: Hot, Fresh i Sweet Corner.",
            },
            {
              number: "2",
              suffix: "w 1",
              emphasis: "Światło i akustyka.",
              description: "Jedna tekstylna powłoka, dwa efekty.",
            },
            {
              number: <span className="text-red">0</span>,
              suffix: "opraw",
              emphasis: "Widocznych na suficie.",
              description: "Cała powierzchnia sufitu jest oprawą.",
            },
          ]}
        />

        {/* 7 — Brief / Wyzwanie */}
        <ProjectBrief
          title="Wyzwanie projektu"
          factualLead="Jaspers-Eyers Architects i NCBHAM zaprojektowali nową centralę BNP Paribas Fortis przy Warandeberg jako otwarty, wielokondygnacyjny dom dla pracowników i gości banku. Sercem stref wspólnych jest Barista Bar rozciągnięty na trzy piętra — z ladami Hot, Fresh i Sweet Corner — nad którym miał zawisnąć ogromny okrągły klosz świetlny. Sufit musiał dać równomierne światło bez olśnienia i jednocześnie opanować pogłos w wielkich otwartych przestrzeniach."
          bullets={[
            "Barista Bar na trzech kondygnacjach — okrągły tekstylny klosz świetlny (halo) nad ladami Hot, Fresh i Sweet Corner jako znak rozpoznawczy wnętrza.",
            "Wielkie otwarte strefy wspólne wymagały kontroli akustycznej bez zabudowywania ścian panelami.",
            "Zakrzywione formy 3D nad strefami spotkań i boksami — geometrie nieosiągalne w zabudowie GK.",
            "Zintegrowane oświetlenie — sufit miał być oprawą, nie tłem dla opraw.",
          ]}
          image="/images/projects/bnp-paribas-fortis-bruksela/03-wnetrze.jpg"
          imageAlt="Wnętrze biurowe BNP Paribas Fortis z tekstylnym sufitem akustycznym nad strefą pracy."
        />

        {/* 8 — Rozwiązanie produkt */}
        <ProjectSolution
          productLabel="STRETCH Light + STRETCH Acoustic · tekstylne sufity świetlne i akustyczne"
          bullets={[
            {
              strong: "Tekstylna membrana świetlna STRETCH Light",
              body: "translucentna tkanina z LED za powłoką — cała powierzchnia sufitu działa jak oprawa świetlna.",
            },
            {
              strong: "Tekstylna powłoka akustyczna STRETCH Acoustic",
              body: "redukuje pogłos w otwartych strefach wspólnych bez paneli na ścianach.",
            },
            {
              strong: "Zakrzywione formy 3D",
              body: "klosze tekstylne napinane na ramach wykonanych pod wymiar — jak halo nad Barista Barem.",
            },
            {
              strong: "Otwory cięte w fabryce",
              body: "pod oświetlenie i AV, dokładnie pod wymiar projektu.",
            },
            {
              strong: "Demontowalny",
              body: "sufit można otworzyć dla serwisu instalacji nad nim, bez wymiany membrany.",
            },
          ]}
          caption="Światło i akustyka z tekstyliów to standardowa oferta Stretchgroup — nie była to jednorazowa konstrukcja dla tego projektu, tylko właściwy wybór z istniejącego katalogu."
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
              title: "Brief od Jaspers-Eyers Architects",
              body: "Geometrie kloszy, wymogi światła bez olśnienia i akustyki open space — spec ustalony ze studiem i partnerami NCBHAM oraz Conceptexpo.",
            },
            {
              title: "Produkcja w Belgii",
              body: "Membrany tekstylne wyprodukowała Stretch Productions BV (część Stretchgroup) — cięte pod formy 3D, w tym okrągłe halo nad Barista Barem.",
            },
            {
              title: "Montaż przez nasz belgijski zespół",
              body: "2000 m² membran świetlnych i akustycznych zamontowanych w czynnym biurowcu w centrum Brukseli.",
            },
            {
              title: "Odbiór",
              body: "Barista Bar otwarty dla pracowników i gości — Hot, Fresh i Sweet Corner pod świecącym halo na trzech kondygnacjach.",
            },
          ]}
        />

        {/* 11 — Reasons */}
        <ProjectReasons
          cards={[
            {
              title: "Światło bez olśnienia",
              body: "Cała powierzchnia membrany świeci równomiernie — zero widocznych opraw, zero punktowych olśnień nad głowami.",
            },
            {
              title: "Akustyka w open space",
              body: "Tekstylna powłoka z absorpcją zmniejsza pogłos w wielkich otwartych strefach bez paneli na ścianach.",
            },
            {
              title: "Formy 3D niemożliwe w GK",
              body: "Zakrzywione klosze z tekstyliów — jak halo nad Barista Barem — powstają przez napinanie membrany na ramach pod wymiar.",
            },
          ]}
        />

        {/* 12 — Credit */}
        {project.designStudio && (
          <ProjectCredit
            heading="Studio projektowe"
            studio={project.designStudio}
            bodyText="Jaspers-Eyers Architects (Bruksela) wraz z NCBHAM odpowiadali za projekt wnętrz nowej centrali BNP Paribas Fortis przy Warandeberg; partnerem projektu było Conceptexpo. Nasza rola obejmowała dostawę i montaż tekstylnych sufitów świetlnych i akustycznych w specyfikacji ustalonej przez projektantów."
            projectSlug={SLUG}
            intro="Wnętrza centrali zaprojektowały zewnętrzne pracownie. Nasza rola ograniczała się do dostawy i montażu sufitów w zatwierdzonym przez nie kształcie i wykończeniu."
          />
        )}

        {/* 13 — Related */}
        <RelatedProjects currentSlug={SLUG} />

        {/* 14 — CTA Final */}
        <div id="wycena">
          <CtaFinal
            source="project_bnp_paribas"
            headingOverride={
              <>
                Chcesz podobny sufit
                <br />w swoim <span className="it">biurze?</span>
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
