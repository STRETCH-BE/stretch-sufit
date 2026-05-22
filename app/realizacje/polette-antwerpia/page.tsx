// app/realizacje/polette-antwerpia/page.tsx
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

const SLUG = "polette-antwerpia";

export const metadata: Metadata = {
  title:
    "Polette Antwerpia — sufit-pianino, koncept Imagine | Stretch Sufit",
  description:
    "Realizacja 60 m² akustycznego sufitu translucentnego w sklepie Polette w Antwerpii — rzeźba w kształcie wieka fortepianu na 20-metrowej głębokości showroomu. Projekt: zU-studio (Javier Zubiria). Montaż: 1 dzień.",
  alternates: { canonical: "/realizacje/polette-antwerpia" },
  openGraph: {
    title: "Polette Antwerpia — sufit-pianino i akustyka",
    description:
      "60 m² akustycznego sufitu translucentnego jako rzeźba-fortepian w sklepie Polette. Projekt zU-studio.",
    images: ["/images/projects/polette-antwerpia/og.jpg"],
    type: "article",
  },
};

export default function PoletteAntwerpiaPage() {
  const project = getProject(SLUG);
  if (!project) notFound();

  const breadcrumbsLd = buildBreadcrumbs([
    { name: "Home", url: siteConfig.url },
    { name: "Realizacje", url: `${siteConfig.url}/realizacje` },
    { name: "Polette Antwerpia", url: `${siteConfig.url}/realizacje/${SLUG}` },
  ]);

  const creativeWorkLd = buildCreativeWork({
    name: "Polette Antwerpia — sufit-pianino, akustyczny sufit translucentny",
    description:
      "60 m² akustycznego sufitu translucentnego jako rzeźba w kształcie wieka fortepianu w sklepie Polette w Antwerpii. Część konceptu retailowego 'Imagine' inspirowanego utworem Johna Lennona. Projekt: zU-studio (Javier Zubiria).",
    url: `${siteConfig.url}/realizacje/${SLUG}`,
    image: [
      `${siteConfig.url}${project.heroImage}`,
      ...project.gallery.slice(0, 4).map((g) => `${siteConfig.url}${g.src}`),
    ],
    dateCreated: "2022",
    locationName: "Antwerpia, Belgia",
    locationCountry: project.country,
    contributor: project.designStudio
      ? { name: project.designStudio.name, url: project.designStudio.url }
      : undefined,
    producer: { name: siteConfig.name, url: siteConfig.url },
    keywords: project.tags,
  });

  const faqLd = buildFaqPage([
    {
      question: "Co to jest akustyczny sufit translucentny?",
      answer:
        "Akustyczny sufit translucentny to perforowana folia napinana, która jednocześnie pochłania dźwięk i przepuszcza światło. Pozwala wbudować całe oświetlenie sklepu nad sufitem, zachowując równomierną, miękką luminancję powierzchni.",
    },
    {
      question: "Ile trwał montaż sufitu w sklepie Polette?",
      answer:
        "Montaż akustycznego sufitu translucentnego w sklepie Polette w Antwerpii zajął 1 dzień roboczy. Pracował zespół 2 montażystów obejmując sufit i integrację oświetlenia.",
    },
    {
      question: "Kto zaprojektował koncept Imagine dla Polette?",
      answer:
        "Koncept retailowy Imagine zaprojektowało amsterdamskie biuro zU-studio kierowane przez Javiera Zubirię, na zamówienie założyciela Polette Pierre'a Wizmana. Koncept odnosi się do utworu Imagine Johna Lennona w 50. rocznicę wydania.",
    },
    {
      question: "Jaka jest żywotność sufitu napinanego?",
      answer:
        "Sufit napinany ma żywotność około 25 lat przy zachowaniu okresowej konserwacji. Po tym czasie wymianie podlega zazwyczaj tylko sama folia — konstrukcja nośna pozostaje na miejscu.",
    },
  ]);

  return (
    <>
      <Nav />
      <main id="main">
        <ProjectHero
          eyebrow="Realizacja · Antwerpia 🇧🇪 · 2022"
          titleRed="Polette."
          titleItalic="Sufit-pianino"
          titleTail=" w 60-metrowym sklepie."
          subheadFactual="Akustyczny sufit translucentny w kształcie wieka fortepianu, rozciągnięty na 20-metrowej głębokości sklepu Polette w Antwerpii. Powierzchnia 60 m², montaż w 1 dzień przez zespół 2 montażystów."
          subheadSecondary="Stretch Sufit jest częścią belgijskiej grupy Stretch Ceiling MSD — ten projekt zrealizował belgijski dealer grupy w ramach konceptu retailowego Imagine biura zU-studio."
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
          heroCaption="Polette Antwerpia · koncept Imagine · 2022"
          chips={["60 m²", "1 dzień montażu", "Sufit translucentny + akustyka"]}
        />

        <ProjectMetaStrip project={project} />

        <Ticker
          items={[
            "Made in Belgium",
            "Translucent ceiling",
            "60 m²",
            "Acoustic + light-permeable",
            "Imagine — John Lennon",
            "Designed by zU-studio",
            "1 day on site",
          ]}
        />

        <Heritage
          paragraph={
            <>
              <strong className="font-semibold">Stretch Sufit</strong> jest
              polskim oddziałem belgijskiej grupy{" "}
              <strong className="font-semibold">STRETCH®</strong>{" "}
              <span className="text-bg/55">
                — te same sufity translucentne i akustyczne dostarczamy klientom
                retailowym w Polsce.
              </span>
            </>
          }
          tags={[
            { flag: "BE", label: "Technologia STRETCH" },
            { flag: "PL", label: "Realizacje w Polsce" },
          ]}
        />

        <Stats
          ariaLabel="Kluczowe parametry realizacji Polette Antwerpia"
          items={[
            { number: "60", suffix: "m²", emphasis: "Powierzchni sufitu.", description: "Cały showroom pod jedną akustyczną powłoką." },
            { number: <span className="text-red">20</span>, suffix: "m", emphasis: "Głębokość rzeźby.", description: "Wieko fortepianu rozciągnięte przez cały sklep." },
            { number: "88", emphasis: "Interaktywnych klawiszy.", description: "Sensory + lampki — instrument do wspólnego grania." },
            { number: <span className="text-red">1</span>, suffix: "dzień", emphasis: "Montażu.", description: "Sufit + integracja oświetlenia, 2 montażystów." },
          ]}
        />

        <ProjectBrief
          title="Wyzwanie projektu"
          factualLead="Polette i biuro zU-studio zaprojektowały sklep, który nie ma być tylko miejscem zakupu okularów — ma być instrumentem muzycznym, w którym klienci wspólnie grają. Wieko fortepianu o 20-metrowej głębokości musiało stać się jednocześnie rzeźbą, oświetleniem sklepu i absorberem akustycznym dla 88 interaktywnych klawiszy z sensorami."
          bullets={[
            "Sufit musiał być rzeźbą — duża, ciągła powierzchnia w kształcie wieka fortepianu, bez widocznych szwów i ze spójnym wykończeniem na 20 metrach głębokości.",
            "Sufit musiał być oświetleniem — całe światło sklepu zostało schowane nad powłoką sufitową, żeby nie psuć rzeźbiarskiego efektu.",
            "Sufit musiał być akustyką — 88 klawiszy z sensorami generuje muzykę w czasie rzeczywistym, więc pomieszczenie nie mogło zlewać dźwięków w jeden szum.",
            "Wszystko w 60 m² — kompaktowy sklep, w którym każdy element musiał obsłużyć kilka funkcji jednocześnie.",
          ]}
          image="/images/projects/polette-antwerpia/brief.jpg"
          imageAlt="Centralna ławka i ściana z klawiszami fortepianowymi w sklepie Polette — koncept Imagine."
        />

        <ProjectSolution
          productLabel="Akustyczny sufit translucentny — rzeźba wieka fortepianu"
          bullets={[
            { strong: "Folia translucentna napinana", body: "przepuszcza światło z opraw schowanych nad sufitem, dając równomierną luminancję całej powierzchni." },
            { strong: "Perforacja akustyczna", body: "ta sama folia działa jako absorber — fala dźwiękowa wchodzi w mikroperforację i zostaje wytłumiona." },
            { strong: "Forma na zamówienie", body: "kształt otwartego wieka fortepianu wycięty fabrycznie pod plan zU-studio, montowany na ramach na wymiar." },
            { strong: "Bezszwowość na 20 m głębokości", body: "produkcja Stretch Ceiling MSD pozwala na ciągłą powłokę bez widocznych łączeń." },
            { strong: "Demontowalność", body: "sufit można otworzyć dla serwisu oświetlenia i sensorów klawiszy bez wymiany folii." },
          ]}
          caption="Translucentność, akustyka i forma rzeźbiarska w jednej powłoce — pełen koncept Imagine został zbudowany wokół tej decyzji materiałowej."
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
            { title: "Brief od zU-studio", body: "Plan rzeźby-wieka fortepianu, lokalizacja sensorów klawiszy, paleta świetlna, wymóg akustyczny pod muzykę." },
            { title: "Produkcja w Belgii", body: "Folia translucentna z perforacją akustyczną, wycięta w kształt wieka fortepianu, ramy na wymiar." },
            { title: "Montaż w 1 dzień", body: "Dwóch montażystów: rama, folia, integracja oświetlenia ukrytego nad sufitem. Bez ingerencji w ściany." },
            { title: "Otwarcie sklepu", body: "Premiera konceptu Imagine — 88 klawiszy gra, sufit świeci równomiernie, akustyka utrzymuje dźwięki rozdzielone." },
          ]}
        />

        <ProjectReasons
          cards={[
            { title: "Trzy funkcje w jednej powłoce", body: "Forma rzeźbiarska, oświetlenie sklepu i akustyka — wszystko w jednej folii translucentnej z perforacją." },
            { title: "Sklep jako instrument muzyczny", body: "Akustyka pod 88 klawiszy z sensorami — dźwięki pozostają rozdzielne nawet gdy gra cała grupa klientów." },
            { title: "Bezszwowość 20-metrowa", body: "Cała głębokość showroomu pod jedną ciągłą powłoką, bez widocznych łączeń." },
          ]}
        />

        {project.designStudio && (
          <ProjectCredit
            heading="Architekt projektu"
            studio={project.designStudio}
            bodyText="Koncept Imagine dla Polette zaprojektowało amsterdamskie biuro zU-studio kierowane przez Javiera Zubirię, na zamówienie założyciela Polette Pierre'a Wizmana. Sufit napinany dostarczył belgijski oddział grupy STRETCH. Stretch Sufit oferuje tę samą technologię akustycznego sufitu translucentnego klientom retailowym w Polsce."
            projectSlug={SLUG}
            intro="Polette to globalny brand okularowy. Koncept retailowy Imagine został zaprojektowany w Amsterdamie, a fizycznie powstał w Antwerpii przy współpracy z belgijskim oddziałem STRETCH."
          />
        )}

        <RelatedProjects currentSlug={SLUG} />

        <div id="wycena">
          <CtaFinal
            source="project_polette_antwerpia"
            headingOverride={
              <>
                Sufit jako rzeźba
                <br />w <span className="it">Twoim sklepie?</span>
              </>
            }
            subheadOverride="Pomiar i wycena akustycznego sufitu translucentnego — bezpłatne. Realizujemy projekty retailowe i komercyjne w całej Polsce."
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
