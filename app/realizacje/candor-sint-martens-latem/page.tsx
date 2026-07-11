// app/realizacje/candor-sint-martens-latem/page.tsx
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

const SLUG = "candor-sint-martens-latem";

export const metadata: Metadata = {
  title:
    "Candor, Sint-Martens-Latem — niewidoczna akustyka biura | Stretch Sufit",
  description:
    "Renowacja biura dewelopera Candor w Sint-Martens-Latem: akustyczne sufity napinane z zintegrowanym LED i absorpcją w przestrzeni międzystropowej. RT60 < 0,8 s bez ani jednego widocznego panelu. Koncepcja akustyczna: Form Design, wnętrza: Goedele Perdu, 2025.",
  alternates: {
    canonical: "/realizacje/candor-sint-martens-latem",
  },
  openGraph: {
    title: "Candor — niewidoczna akustyka biura w suficie napinanym",
    description:
      "Biuro dewelopera Candor w Sint-Martens-Latem: akustyka + LED w jednej powłoce, RT60 < 0,8 s. Form Design i Goedele Perdu, 2025.",
    images: ["/images/projects/candor-sint-martens-latem/og.jpg"],
    type: "article",
  },
};

export default function CandorSintMartensLatemPage() {
  const project = getProject(SLUG);
  if (!project) notFound();

  // --- JSON-LD ---------------------------------------------------------------
  const breadcrumbsLd = buildBreadcrumbs([
    { name: "Home", url: siteConfig.url },
    { name: "Realizacje", url: `${siteConfig.url}/realizacje` },
    {
      name: "Candor, Sint-Martens-Latem",
      url: `${siteConfig.url}/realizacje/${SLUG}`,
    },
  ]);

  const creativeWorkLd = buildCreativeWork({
    name: "Candor, Sint-Martens-Latem — niewidoczna akustyka biura w suficie napinanym",
    description:
      "Renowacja biura belgijskiego dewelopera Candor przy Kortrijksesteenweg 66-68 w Sint-Martens-Latem. Akustyczne sufity napinane z zintegrowanym LED i absorpcją w przestrzeni międzystropowej — RT60 poniżej 0,8 s w open space i poniżej 0,6 s w salach spotkań, bez widocznych paneli. Koncepcja akustyczna: Form Design (Dendermonde), wnętrza: Goedele Perdu. Produkcja: Stretch Productions BV (Belgia), część Stretchgroup.",
    url: `${siteConfig.url}/realizacje/${SLUG}`,
    image: [
      `${siteConfig.url}${project.heroImage}`,
      ...project.gallery.slice(0, 4).map((g) => `${siteConfig.url}${g.src}`),
    ],
    dateCreated: "2025",
    locationName: "Biuro Candor, Sint-Martens-Latem",
    locationCountry: project.country,
    contributor: project.designStudio
      ? { name: project.designStudio.name, url: project.designStudio.url }
      : undefined,
    producer: { name: siteConfig.name, url: siteConfig.url },
    keywords: project.tags,
  });

  const faqLd = buildFaqPage([
    {
      question: "Jak wyciszyć biuro open space bez paneli akustycznych?",
      answer:
        "Akustyczny sufit napinany z mikroperforacją i absorpcją w przestrzeni międzystropowej pochłania dźwięk całą płaszczyzną sufitu — bez ani jednego widocznego panelu na ścianach ani suficie. Tak wykonano akustykę biura Candor w Sint-Martens-Latem, osiągając RT60 poniżej 0,8 s w open space.",
    },
    {
      question: "Jaki czas pogłosu RT60 powinno mieć biuro?",
      answer:
        "Norma biurowa zakłada RT60 w zakresie 0,5–0,8 s dla przestrzeni open space i około 0,6 s dla sal spotkań. W biurze Candor pomiar kontrolny potwierdził wartości poniżej 0,8 s w strefach otwartych i poniżej 0,6 s w salach spotkań.",
    },
    {
      question: "Kto wykonał akustykę biura Candor?",
      answer:
        "Koncepcję akustyczną opracowała firma Form Design (Dendermonde, Belgia), projekt wnętrz — architektka Goedele Perdu. Akustyczne sufity napinane wyprodukowała i zamontowała Stretchgroup. Te same systemy są dostępne dla biur w Polsce przez Stretch Sufit.",
    },
  ]);

  return (
    <>
      <Nav />
      <main id="main">
        {/* 2 — Hero */}
        <ProjectHero
          eyebrow="Realizacja · Sint-Martens-Latem 🇧🇪 · 2025"
          titleRed="Candor."
          titleItalic="Akustyka biura,"
          titleTail=" której nie widać."
          subheadFactual="Akustyczne sufity napinane z zintegrowanym oświetleniem LED i absorpcją w przestrzeni międzystropowej — w renowanym biurze belgijskiego dewelopera Candor przy Kortrijksesteenweg 66-68 w Sint-Martens-Latem: open space, gabinety, sale spotkań, kuchnia i strefa relaksu."
          subheadSecondary="Koncepcję akustyczną opracowała firma Form Design (Dendermonde), wnętrza zaprojektowała Goedele Perdu. Powłoki wyprodukowała w Belgii Stretch Productions BV — część Stretchgroup, do której należy również Stretch Sufit. Efekt: RT60 poniżej normy biurowej, zero widocznych paneli."
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
          heroCaption="Biuro Candor · Sint-Martens-Latem · 2025"
          chips={["Biuro dewelopera", "RT60 < 0,8 s", "Akustyka + LED"]}
        />

        {/* 3 — Meta strip */}
        <ProjectMetaStrip project={project} />

        {/* 4 — Ticker (project-specific items) */}
        <Ticker
          items={[
            "Made in Belgium",
            "Installed in Belgium",
            "RT60 < 0,8 s",
            "Akustyka niewidoczna",
            "LED zintegrowany",
            "Form Design",
            "Goedele Perdu",
          ]}
        />

        {/* 5 — Heritage strip (project-specific paragraph + flag pair) */}
        <Heritage
          paragraph={
            <em className="italic">
              Wyprodukowany i zamontowany w Belgii przez Stretchgroup. Te same
              systemy niewidocznej akustyki oferujemy klientom biurowym w
              Polsce — jako Stretch Sufit.
            </em>
          }
          tags={[
            { flag: "BE", label: "Produkcja Belgia" },
            { flag: "BE", label: "Montaż w Belgii" },
          ]}
        />

        {/* 6 — Stats band (project-specific) */}
        <Stats
          ariaLabel="Kluczowe parametry realizacji Candor"
          items={[
            {
              number: <span className="text-red">0,8</span>,
              suffix: "s",
              emphasis: "Maksymalny pogłos w open space.",
              description: "RT60 poniżej celu normy biurowej.",
            },
            {
              number: "0,6",
              suffix: "s",
              emphasis: "W salach spotkań.",
              description: "Zrozumiałość mowy bez wysiłku.",
            },
            {
              number: <span className="text-red">0</span>,
              suffix: "paneli",
              emphasis: "Widocznych na ścianach i sufitach.",
              description: "Cała akustyka schowana w powłoce.",
            },
            {
              number: "100",
              suffix: "%",
              emphasis: "Absorpcji ukrytej w suficie.",
              description: "Mikroperforacja + wkład w przestrzeni międzystropowej.",
            },
          ]}
        />

        {/* 7 — Brief / Wyzwanie */}
        <ProjectBrief
          title="Wyzwanie projektu"
          factualLead="Candor, belgijski deweloper, renowował swoje biuro w Sint-Martens-Latem — open space, gabinety, sale spotkań, kuchnię i strefę relaksu. Wnętrza Goedele Perdu zakładały czyste, gładkie płaszczyzny — a norma biurowa wymagała akustyki, której klasyczne panele nie dostarczą bez psucia estetyki."
          bullets={[
            "Estetyka bez kompromisu: projekt wnętrz Goedele Perdu nie przewidywał żadnych widocznych paneli akustycznych — ani na ścianach, ani na sufitach.",
            "Norma biurowa: RT60 poniżej 0,8 s w open space i poniżej 0,6 s w salach spotkań — cele wyznaczone przez konsultanta akustycznego Form Design.",
            "Różne strefy, różne wymagania: przestrzeń otwarta, małe pokoje, sale spotkań, kuchnia i strefa relaksu — każda z innym profilem akustycznym.",
            "Aktywna renowacja: montaż musiał wpisać się w trwające prace, bez kurzu i bez przestojów dla pozostałych ekip.",
          ]}
          image="/images/projects/candor-sint-martens-latem/03.jpg"
          imageAlt="Sala spotkań biura Candor z niewidoczną akustyką sufitową."
        />

        {/* 8 — Rozwiązanie produkt */}
        <ProjectSolution
          productLabel="Akustyczny sufit napinany · LED + absorpcja w plenum"
          bullets={[
            {
              strong: "Akustyczna powłoka napinana",
              body: "mikroperforacja przepuszcza dźwięk do warstwy absorpcyjnej w przestrzeni międzystropowej — cały sufit pracuje jako absorber.",
            },
            {
              strong: "Oświetlenie LED w płaszczyźnie sufitu",
              body: "zintegrowane z powłoką, bez osobnych opraw zaburzających gładką płaszczyznę.",
            },
            {
              strong: "RT60 dobrany strefowo",
              body: "inna konfiguracja absorpcji dla open space, inna dla sal spotkań — pod cele wyznaczone przez Form Design.",
            },
            {
              strong: "Brak paneli na ścianach",
              body: "estetyka wnętrz Goedele Perdu bez kompromisu — akustyka w całości niewidoczna.",
            },
            {
              strong: "Demontowalny",
              body: "powłokę można otworzyć dla serwisu instalacji nad sufitem, bez wymiany membrany.",
            },
          ]}
          caption="Niewidoczna akustyka to standard oferty Stretchgroup — dla biura Candor dobraliśmy rozwiązanie z istniejącego katalogu, nie była to konstrukcja specjalna."
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
              title: "Analiza akustyczna",
              body: "Form Design wykonał pomiary i wyznaczył cele RT60 osobno dla każdej strefy — open space, sale spotkań, pokoje, kuchnia.",
            },
            {
              title: "Produkcja w Belgii",
              body: "Membrany akustyczne wyprodukowane pod wymiar przez Stretch Productions BV — belgijską fabrykę Stretchgroup.",
            },
            {
              title: "Montaż w trakcie renowacji",
              body: "Instalacja wpisana w harmonogram trwających prac — bez kurzu, bez przestojów dla pozostałych ekip.",
            },
            {
              title: "Pomiar kontrolny",
              body: "RT60 poniżej celów normowych: poniżej 0,8 s w open space i poniżej 0,6 s w salach spotkań.",
            },
          ]}
        />

        {/* 11 — Reasons */}
        <ProjectReasons
          cards={[
            {
              title: "Akustyka, której nie widać",
              body: "Cała absorpcja ukryta nad powłoką — żadnych paneli na ścianach ani sufitach, tylko gładka płaszczyzna.",
            },
            {
              title: "Zgodność z normą biurową",
              body: "RT60 w idealnym zakresie biurowym 0,5–0,8 s, potwierdzony pomiarem kontrolnym w każdej strefie.",
            },
            {
              title: "Światło i cisza w jednej powłoce",
              body: "Zintegrowany LED i absorpcja akustyczna w jednym systemie — jeden montaż, jeden sufit, dwa efekty.",
            },
          ]}
        />

        {/* 12 — Credit */}
        {project.designStudio && (
          <ProjectCredit
            heading="Zespół projektowy"
            studio={project.designStudio}
            bodyText="Form Design (Dendermonde, Belgia) — firma konsultingu akustycznego — opracowała koncepcję i specyfikację rozwiązania: pomiary, cele RT60 per strefa i dobór systemu. Za projekt wnętrz odpowiadała architektka Goedele Perdu. Nasza rola obejmowała produkcję i montaż akustycznych sufitów napinanych w specyfikacji ustalonej przez konsultanta."
            projectSlug={SLUG}
            intro="Akustykę biura Candor zaprojektował zewnętrzny konsultant, a wnętrza — niezależna architektka. Nasza rola ograniczała się do produkcji i montażu sufitów w zatwierdzonej przez nich specyfikacji."
          />
        )}

        {/* 13 — Related */}
        <RelatedProjects currentSlug={SLUG} />

        {/* 14 — CTA Final */}
        <div id="wycena">
          <CtaFinal
            source="project_candor"
            headingOverride={
              <>
                Chcesz ciszę w biurze
                <br />
                bez <span className="it">widocznych paneli?</span>
              </>
            }
            subheadOverride="Pomiar i analiza akustyczna bezpłatne. Realizujemy biura w całej Polsce — te same systemy, które wyciszyły Candor."
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
