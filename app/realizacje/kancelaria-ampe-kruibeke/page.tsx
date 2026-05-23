// app/realizacje/kancelaria-ampe-kruibeke/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { CtaFinal } from "@/components/sections/cta-final";
import { MobileStickyCTA } from "@/components/sections/mobile-sticky-cta";

// Homepage sections — prop-driven with defaults
import { Ticker } from "@/components/sections/ticker";
import { Heritage } from "@/components/sections/heritage";
import { Stats } from "@/components/sections/stats";

// Project-specific sections (data-driven, reusable across all case studies)
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

const SLUG = "kancelaria-ampe-kruibeke";

export const metadata: Metadata = {
  title:
    "Kancelaria notarialna Ampe, Kruibeke — sufit akustyczny + polyester wool | Stretch Sufit",
  description:
    "Realizacja sufitu napinanego akustycznego z wełną poliestrową D40/50 w 350-metrowej kancelarii notarialnej Ampe Anthony w Kruibeke (Belgia). Projekt: Ante Architecten. Czas pogłosu po montażu: 0,6 sekundy.",
  alternates: {
    canonical: "/realizacje/kancelaria-ampe-kruibeke",
  },
  openGraph: {
    title: "Kancelaria Ampe — sufit akustyczny w biurze notarialnym",
    description:
      "350 m² akustyki dla kancelarii notarialnej w Kruibeke. Pogłos zredukowany do 0,6 s. Projekt Ante Architecten, technologia STRETCH.",
    images: ["/images/projects/kancelaria-ampe-kruibeke/og.jpg"],
    type: "article",
  },
};

export default function KancelariaAmpePage() {
  const project = getProject(SLUG);
  if (!project) notFound();

  // --- JSON-LD ---------------------------------------------------------------
  const breadcrumbsLd = buildBreadcrumbs([
    { name: "Home", url: siteConfig.url },
    { name: "Realizacje", url: `${siteConfig.url}/realizacje` },
    {
      name: "Kancelaria Ampe, Kruibeke",
      url: `${siteConfig.url}/realizacje/${SLUG}`,
    },
  ]);

  const creativeWorkLd = buildCreativeWork({
    name: "Kancelaria notarialna Ampe Anthony, Kruibeke — sufit napinany akustyczny",
    description:
      "350 m² sufitu napinanego akustycznego z wełną poliestrową D40/50 (40 kg/m³, 50 mm). Kancelaria notarialna Ampe Anthony w Kruibeke. Projekt wnętrza: Ante Architecten. Czas pogłosu po montażu: 0,6 sekundy.",
    url: `${siteConfig.url}/realizacje/${SLUG}`,
    image: [
      `${siteConfig.url}${project.heroImage}`,
      ...project.gallery.slice(0, 4).map((g) => `${siteConfig.url}${g.src}`),
    ],
    dateCreated: "2018",
    locationName: "Kruibeke, Belgia",
    locationCountry: project.country,
    contributor: project.designStudio
      ? { name: project.designStudio.name, url: project.designStudio.url }
      : undefined,
    producer: { name: siteConfig.name, url: siteConfig.url },
    keywords: project.tags,
  });

  const faqLd = buildFaqPage([
    {
      question: "Jaki jest czas pogłosu w kancelarii Ampe po montażu sufitu?",
      answer:
        "Po montażu sufitu napinanego akustycznego z warstwą wełny poliestrowej D40/50 zmierzony czas pogłosu w kancelarii Ampe Anthony wyniósł 0,6 sekundy. Wnętrze jest wyraźnie ciche, mowa pozostaje zrozumiała w całej przestrzeni.",
    },
    {
      question: "Ile trwał montaż sufitu w kancelarii Ampe?",
      answer:
        "Montaż 350 m² sufitu napinanego akustycznego wraz z oświetleniem, absorberem akustycznym i strukturami eliptycznymi trwał 7 dni roboczych. Pracował zespół 2 montażystów.",
    },
    {
      question: "Jak działa sufit akustyczny z wełną poliestrową?",
      answer:
        "Sufit akustyczny składa się z perforowanej folii napinanej, która przepuszcza dźwięk, oraz z absorbera dźwięku zamontowanego za folią — w tym projekcie była to wełna poliestrowa D40/50 (gęstość 40 kg/m³, grubość 50 mm). Absorber pochłania fale dźwiękowe zanim odbiją się od stropu z powrotem do pomieszczenia.",
    },
    {
      question: "Jaka jest żywotność sufitu napinanego?",
      answer:
        "Sufit napinany ma żywotność około 25 lat przy zachowaniu standardowej konserwacji (okresowe czyszczenie). Po 25 latach wymianie podlega zazwyczaj tylko sama folia — konstrukcja nośna pozostaje na miejscu.",
    },
  ]);

  return (
    <>
      <Nav />
      <main id="main">
        {/* 2 — Hero */}
        <ProjectHero
          eyebrow="Realizacja · Kruibeke 🇧🇪 · 2018"
          titleRed="Kancelaria Ampe."
          titleItalic="Akustyka"
          titleTail=" spotyka design."
          subheadFactual="Sufit napinany akustyczny z dodatkową warstwą wełny poliestrowej D40/50, zamontowany na 350 m² powierzchni kancelarii notarialnej Ampe Anthony w Kruibeke. Czas pogłosu po montażu: 0,6 sekundy."
          subheadSecondary="Stretch Sufit jest częścią belgijskiej grupy Stretch Ceiling MSD — ten projekt zrealizował lokalny belgijski dealer grupy. Pokazuje pełen zakres technologii akustycznej dostępnej również w polskim oddziale."
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
          heroCaption="Kancelaria Ampe Anthony · Kruibeke, Belgia · 2018"
          chips={["350 m²", "Pogłos 0,6 s", "Polyester wool D40/50"]}
        />

        {/* 3 — Meta strip */}
        <ProjectMetaStrip project={project} />

        {/* 4 — Ticker (project-specific) */}
        <Ticker
          items={[
            "Made in Belgium",
            "Acoustic ceiling",
            "350 m²",
            "Polyester wool D40/50",
            "Reverberation 0.6 s",
            "Designed by Ante Architecten",
            "7-day install",
          ]}
        />

        {/* 5 — Heritage strip (Belgia → Belgia, parent-group story) */}
        <Heritage
          paragraph={
            <>
              <strong className="font-semibold">Stretch Sufit</strong> jest
              częścią belgijskiej{" "}
              <strong className="font-semibold">Stretchgroup</strong>{" "}
              <span className="text-bg/55">
                — tę samą technologię akustyczną, która ucisza biura w Belgii,
                dostarczamy klientom w Polsce.
              </span>
            </>
          }
          tags={[
            { flag: "BE", label: "Technologia Stretch" },
            { flag: "PL", label: "Realizacje w Polsce" },
          ]}
        />

        {/* 6 — Stats band (project-specific) */}
        <Stats
          ariaLabel="Kluczowe parametry realizacji Kancelaria Ampe"
          items={[
            {
              number: "350",
              suffix: "m²",
              emphasis: "Powierzchni sufitu.",
              description: "Pełna powierzchnia kancelarii notarialnej.",
            },
            {
              number: <span className="text-red">0,6</span>,
              suffix: "s",
              emphasis: "Czas pogłosu.",
              description: "Wnętrze wyraźnie ciche, mowa zrozumiała.",
            },
            {
              number: "7",
              suffix: "dni",
              emphasis: "Montażu na miejscu.",
              description: "Sufit, oświetlenie, akustyka i eliptyczne struktury.",
            },
            {
              number: <span className="text-red">25</span>,
              suffix: "lat",
              emphasis: "Żywotności.",
              description: "Wymianie podlega tylko folia, nie konstrukcja.",
            },
          ]}
        />

        {/* 7 — Brief / Wyzwanie */}
        <ProjectBrief
          title="Wyzwanie projektu"
          factualLead="Świeżo wyremontowana kancelaria notarialna Ampe Anthony została wykończona w minimalistycznym, premium designie — polerowany beton na podłodze, stalowe ramy okienne, twarde powierzchnie ścian. Te materiały dały wnętrzu charakter, ale wygenerowały silny pogłos w pomieszczeniach, w których codziennie odbywają się rozmowy z klientami i odczytywane są akty notarialne."
          bullets={[
            "Twarda akustyka po renowacji: betonowa podłoga + stalowe okna + gładkie ściany = wysoki pogłos, słaba zrozumiałość mowy.",
            "Wymóg ukrycia pełnej instalacji oświetleniowej (Wever & Ducre, Delta Light) i wentylacji — sufit musiał obniżyć się o 10 cm.",
            "Ryzyko klaustrofobii: po obniżeniu sufit miałby ledwo 260 cm wysokości, co zaburzyłoby reprezentacyjny charakter wnętrza.",
            "Spójność z architektonicznym, designerskim charakterem kancelarii — żadnych widocznych paneli akustycznych na ścianach.",
          ]}
          image="/images/projects/kancelaria-ampe-kruibeke/brief.jpg"
          imageAlt="Wnętrze kancelarii Ampe z polerowanym betonem i stalowymi ramami okiennymi — twarde materiały generujące pogłos."
        />

        {/* 8 — Rozwiązanie produkt */}
        <ProjectSolution
          productLabel="Sufit napinany akustyczny + wełna poliestrowa D40/50"
          bullets={[
            {
              strong: "Folia napinana akustyczna",
              body: "perforowana powierzchnia przepuszcza dźwięk do absorbera za sufitem, sama folia pozostaje wizualnie gładka.",
            },
            {
              strong: "Wełna poliestrowa D40/50",
              body: "40 kg/m³, grubość 50 mm — pochłania falę dźwiękową zanim odbije się od betonowego stropu z powrotem do pomieszczenia.",
            },
            {
              strong: "Gięte ramy aluminiowe na wymiar",
              body: "wycięte w kształty eliptyczne — duże owale w suficie tworzą iluzję wyższej przestrzeni mimo wysokości 260 cm.",
            },
            {
              strong: "STRETCH Design plafond w eliptycznych wycięciach",
              body: "akcentuje owalne elementy i integruje oświetlenie projektowe.",
            },
            {
              strong: "Białe profile PVC obwodowe",
              body: "eleganckie wykończenie styku sufitu ze ścianą, brak widocznych krawędzi.",
            },
          ]}
          caption="Pomiar pogłosu po montażu: 0,6 sekundy. Tak niski wynik w pomieszczeniu z polerowanym betonem na podłodze pokazuje skalę pracy, jaką wykonuje absorber za folią — przy zerowej ingerencji w wykończenie ścian."
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
              title: "Brief od Ante Architecten",
              body: "Wymiary, wymóg akustyczny, integracja z oświetleniem Wever & Ducre, koncepcja eliptycznych wycięć dla iluzji wysokości.",
            },
            {
              title: "Produkcja w Belgii",
              body: "Gięte ramy aluminiowe na wymiar, folia akustyczna perforowana, wełna poliestrowa D40/50 — wszystko cięte pod kształt sali.",
            },
            {
              title: "Montaż w 7 dni",
              body: "Dwóch montażystów: sufit, oświetlenie, absorber, struktury eliptyczne, schrijnwerk przy suficie, profile PVC obwodowe.",
            },
            {
              title: "Pomiar pogłosu",
              body: "Po montażu zmierzono czas pogłosu — 0,6 sekundy. Wnętrze wyraźnie ciche, projekt odebrany przez architekta i klienta.",
            },
          ]}
        />

        {/* 11 — Reasons */}
        <ProjectReasons
          cards={[
            {
              title: "Akustyka jak w studiu",
              body: "Pogłos 0,6 s w 350-metrowej przestrzeni z polerowanym betonem — wartość typowa dla profesjonalnego studia, nie biura.",
            },
            {
              title: "Wysokość zachowana wizualnie",
              body: "Eliptyczne wycięcia w suficie tworzą iluzję dodatkowej wysokości — mimo realnego obniżenia stropu o 10 cm.",
            },
            {
              title: "Wszystko ukryte za sufitem",
              body: "Oświetlenie, wentylacja, okablowanie — 10 cm przestrzeni nad folią mieści całą instalację bez kompromisów.",
            },
          ]}
        />

        {/* 12 — Credit */}
        {project.designStudio && (
          <ProjectCredit
            heading="Architekt i wykonawca"
            studio={project.designStudio}
            bodyText="Wnętrze kancelarii Ampe Anthony zostało zaprojektowane przez biuro Ante Architecten z Belgii. Sufit napinany akustyczny dostarczył i zamontował Corpus Interieur — lokalny dealer grupy STRETCH w regionie Waasland. Ten projekt pokazuje pełen zakres technologii dostępnej również poprzez Stretch Sufit w Polsce."
            projectSlug={SLUG}
            intro="Realizacja powstała w belgijskim oddziale grupy STRETCH. Stretch Sufit dostarcza ten sam typ sufitu akustycznego klientom w Polsce — z tej samej fabryki, według tej samej specyfikacji technicznej."
          />
        )}

        {/* 13 — Related */}
        <RelatedProjects currentSlug={SLUG} />

        {/* 14 — CTA Final */}
        <div id="wycena">
          <CtaFinal
            source="project_kancelaria_ampe"
            headingOverride={
              <>
                Akustyka w biurze
                <br />
                <span className="it">bez kompromisów?</span>
              </>
            }
            subheadOverride="Pomiar pomieszczenia i wycena akustycznego sufitu napinanego — bezpłatne. Realizujemy biura, kancelarie i przestrzenie komercyjne w całej Polsce."
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
