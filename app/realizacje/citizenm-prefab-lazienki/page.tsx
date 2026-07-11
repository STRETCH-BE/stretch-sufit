// app/realizacje/citizenm-prefab-lazienki/page.tsx
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
import { RelatedProjects } from "@/components/sections/project/related-projects";

import { getProject } from "@/content/projects";
import { siteConfig } from "@/lib/site-config";
import {
  buildBreadcrumbs,
  buildFaqPage,
  buildCreativeWork,
} from "@/lib/schema";

const SLUG = "citizenm-prefab-lazienki";

export const metadata: Metadata = {
  title:
    "citizenM — prefabrykowane łazienki z sufitem świetlnym | Stretch Sufit",
  description:
    "Realizacja 2019–2023 dla sieci hoteli citizenM w USA i Europie: tekstylne sufity świetlne STRETCH Backlit zintegrowane w prefabrykowanych unitach łazienkowych partnera Saniskill. Produkcja membran w Belgii, montaż powłoki w fabryce — nie na budowie.",
  alternates: {
    canonical: "/realizacje/citizenm-prefab-lazienki",
  },
  openGraph: {
    title: "citizenM — prefabrykowane łazienki z sufitem świetlnym",
    description:
      "Setki prefabrykowanych łazienek z sufitem STRETCH Backlit dla hoteli citizenM — od Miami po San Francisco. Prefab: Saniskill, membrany: Belgia.",
    images: ["/images/projects/citizenm-prefab-lazienki/og.jpg"],
    type: "article",
  },
};

export default function CitizenmPrefabLazienkiPage() {
  const project = getProject(SLUG);
  if (!project) notFound();

  // --- JSON-LD ---------------------------------------------------------------
  const breadcrumbsLd = buildBreadcrumbs([
    { name: "Home", url: siteConfig.url },
    { name: "Realizacje", url: `${siteConfig.url}/realizacje` },
    {
      name: "citizenM — prefabrykowane łazienki",
      url: `${siteConfig.url}/realizacje/${SLUG}`,
    },
  ]);

  const creativeWorkLd = buildCreativeWork({
    name: "citizenM — prefabrykowane łazienki z sufitem świetlnym STRETCH Backlit",
    description:
      "Program 2019–2023 dla sieci hoteli citizenM w USA i Europie. Tekstylne sufity świetlne STRETCH Backlit zintegrowane w prefabrykowanych unitach łazienkowych u partnera Saniskill — montaż powłoki w fabryce, nie na placu budowy. Membrany wyprodukowane w Belgii przez Stretch Productions BV (część Stretchgroup).",
    url: `${siteConfig.url}/realizacje/${SLUG}`,
    image: [
      `${siteConfig.url}${project.heroImage}`,
      ...project.gallery.slice(0, 4).map((g) => `${siteConfig.url}${g.src}`),
    ],
    dateCreated: "2023",
    locationName: "Hotele citizenM, USA i Europa",
    locationCountry: project.country,
    producer: { name: siteConfig.name, url: siteConfig.url },
    keywords: project.tags,
  });

  const faqLd = buildFaqPage([
    {
      question: "Czym jest prefabrykowana łazienka z sufitem napinanym?",
      answer:
        "To kompletny unit łazienkowy wyprodukowany w fabryce — z gotową instalacją, wykończeniem i tekstylnym sufitem świetlnym zamontowanym poza placem budowy. Gotowe unity transportuje się do hotelu i wstawia w budynek dźwigiem. Tak powstały setki łazienek citizenM z sufitem STRETCH Backlit, we współpracy z partnerem prefabrykacyjnym Saniskill.",
    },
    {
      question:
        "Czy sufit napinany nadaje się do łazienki i strefy prysznica?",
      answer:
        "Tak. Tekstylna membrana STRETCH Backlit jest odporna na wilgoć i sprawdza się bezpośrednio nad strefą prysznica. W hotelach citizenM ten sam sufit świetlny pracuje w setkach łazienek bez okna, pełniąc jednocześnie rolę głównej oprawy oświetleniowej.",
    },
    {
      question: "Czy prefab z sufitem napinanym jest dostępny w Polsce?",
      answer:
        "Tak. Stretch Sufit produkuje prefabrykaty z sufitami napinanymi w zakładzie w Częstochowie — dla hoteli i budownictwa modułowego. To ten sam model współpracy, który Stretchgroup zrealizowała dla sieci citizenM w USA i Europie.",
    },
  ]);

  return (
    <>
      <Nav />
      <main id="main">
        {/* 2 — Hero */}
        <ProjectHero
          eyebrow="Realizacja · USA + Europa · 2019–2023"
          titleRed="citizenM."
          titleItalic="Sufit świetlny"
          titleTail=" produkowany seryjnie."
          subheadFactual="Tekstylne sufity świetlne STRETCH Backlit zintegrowane w prefabrykowanych unitach łazienkowych dla sieci hoteli citizenM — od Miami Brickell, przez Nowy Jork, Chicago i Seattle, po San Francisco i Los Angeles."
          subheadSecondary="Membrany wyprodukowała w Belgii Stretch Productions BV, część Stretchgroup. Powłoki trafiały do gotowych unitów łazienkowych w fabryce partnera Saniskill — nie na placu budowy. Skończone łazienki jechały potem do hoteli na dwóch kontynentach."
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
          heroCaption="citizenM · prefabrykowane łazienki · USA i Europa · 2019–2023"
          chips={["2019–2023", "USA + Europa", "Prefab + STRETCH Backlit"]}
        />

        {/* 3 — Meta strip */}
        <ProjectMetaStrip project={project} />

        {/* 4 — Ticker (project-specific items) */}
        <Ticker
          items={[
            "Made in Belgium",
            "Prefab by Saniskill",
            "STRETCH Backlit",
            "Miami",
            "New York",
            "Chicago",
            "Seattle",
            "San Francisco",
            "Los Angeles",
          ]}
        />

        {/* 5 — Heritage strip (project-specific paragraph + flag pair) */}
        <Heritage
          paragraph={
            <em className="italic">
              Membrany wyprodukowane w Belgii przez Stretch Productions BV,
              zamontowane w unitach u Saniskill — zanim łazienki dotarły do
              hoteli. Ten sam model prefabrykacji oferujemy w Polsce: gotowe
              prefabrykaty z sufitem napinanym powstają w naszym zakładzie w
              Częstochowie — dla hoteli i projektów modułowych.
            </em>
          }
          tags={[
            { flag: "BE", label: "Produkcja Belgia" },
            { flag: "PL", label: "Prefab także w Polsce" },
          ]}
        />

        {/* 6 — Stats band (project-specific) */}
        <Stats
          ariaLabel="Kluczowe parametry realizacji citizenM"
          items={[
            {
              number: "6",
              suffix: "+",
              emphasis: "Hoteli citizenM.",
              description: "W USA i Europie — od Miami po Los Angeles.",
            },
            {
              number: <span className="text-red">2</span>,
              suffix: "kontynenty",
              emphasis: "Jeden standard sufitu.",
              description: "Ta sama membrana w każdej lokalizacji.",
            },
            {
              number: "100",
              suffix: "%",
              emphasis: "Montażu powłoki poza placem budowy.",
              description: "Sufit instalowany w fabryce partnera Saniskill.",
            },
            {
              number: <span className="text-red">1</span>,
              suffix: "unit",
              emphasis: "Powtarzalny standard łazienki.",
              description: "Identyczny moduł dla setek pokoi w każdym hotelu.",
            },
          ]}
        />

        {/* 7 — Brief / Wyzwanie */}
        <ProjectBrief
          title="Wyzwanie projektu"
          factualLead="citizenM buduje hotele z prefabrykowanych modułów — łazienka przyjeżdża na budowę jako gotowy unit. Sufit świetlny musiał wpisać się w ten reżim: identyczny w setkach pokoi, odporny na wilgoć strefy prysznica, montowany w fabryce zamiast na budowie i wystarczająco trwały, by przetrwać transport i wstawienie dźwigiem w budynek."
          bullets={[
            "Skala sieci: jeden wzór unitu powielany w setkach pokoi na hotel — zero miejsca na odchyłki między egzemplarzami.",
            "Łazienka bez okna: sufit musiał pełnić rolę głównej oprawy świetlnej, dając miękkie, równomierne światło w małej kubaturze.",
            "Strefa mokra: membrana bezpośrednio nad prysznicem, odporna na wilgoć i parę przez lata eksploatacji hotelowej.",
            "Logistyka off-site: montaż powłoki w fabryce Saniskill, transport gotowych unitów do hoteli w USA i Europie — sufit musiał dojechać bez uszkodzeń.",
          ]}
          image="/images/projects/citizenm-prefab-lazienki/02-unit.jpg"
          imageAlt="Kabina prysznicowa prefabrykowanego unitu łazienkowego citizenM z podświetlanym sufitem tekstylnym."
        />

        {/* 8 — Rozwiązanie produkt */}
        <ProjectSolution
          productLabel="STRETCH Backlit · tekstylny sufit świetlny w prefabrykacie"
          bullets={[
            {
              strong: "Tekstylna membrana Backlit jako sufit-oprawa",
              body: "łazienka bez okna dostaje równomierne, rozproszone światło z całej płaszczyzny sufitu.",
            },
            {
              strong: "Montaż powłoki w fabryce, nie na budowie",
              body: "sufit instalowany w unicie u partnera Saniskill, w kontrolowanych warunkach.",
            },
            {
              strong: "Powtarzalność seryjna",
              body: "identyczny unit dla setek pokoi — ta sama jakość w Miami i w San Francisco.",
            },
            {
              strong: "Odporność na wilgoć",
              body: "membrana pracuje bezpośrednio nad strefą prysznica przez cały cykl życia hotelu.",
            },
            {
              strong: "Logistyka gotowych unitów",
              body: "skończone łazienki transportowane do hoteli na dwóch kontynentach i wstawiane w budynki dźwigiem.",
            },
          ]}
          caption="Prefab z sufitem świetlnym to standardowa pozycja oferty Stretchgroup — w Polsce prefabrykaty powstają w zakładzie w Częstochowie."
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
              title: "Standard unitu",
              body: "Specyfikacja ustalona z citizenM i Saniskill — jeden wzór łazienki dla całej sieci, z sufitem świetlnym w roli głównej oprawy.",
            },
            {
              title: "Produkcja w Belgii",
              body: "Membrany STRETCH Backlit cięte seryjnie w zakładzie Stretch Productions BV — powtarzalny wymiar dla każdego unitu.",
            },
            {
              title: "Integracja w fabryce",
              body: "Sufit montowany w unicie u Saniskill, z kontrolą jakości każdej łazienki przed wysyłką.",
            },
            {
              title: "Dostawa do hoteli",
              body: "Gotowe łazienki wstawiane w budynki hotelowe — od Miami po San Francisco.",
            },
          ]}
        />

        {/* 11 — Reasons */}
        <ProjectReasons
          cards={[
            {
              title: "Zero prac mokrych w hotelu",
              body: "Cały montaż powłoki odbywa się w fabryce — na budowie unit jest tylko podłączany, bez kurzu i prac wykończeniowych.",
            },
            {
              title: "Identyczna jakość w każdym pokoju",
              body: "Seryjna produkcja i fabryczna kontrola jakości dają ten sam efekt w setkach pokoi, w każdym hotelu sieci.",
            },
            {
              title: "Sufit = oprawa świetlna",
              body: "Łazienka bez okna dostaje miękkie, równomierne światło z całej płaszczyzny sufitu — bez punktowych opraw i cieni.",
            },
          ]}
        />

        {/* 12 — Related */}
        <RelatedProjects currentSlug={SLUG} />

        {/* 13 — CTA Final */}
        <div id="wycena">
          <CtaFinal
            source="project_citizenm"
            headingOverride={
              <>
                Projekt hotelowy
                <br />
                lub <span className="it">prefab?</span>
              </>
            }
            subheadOverride="Bezpłatna konsultacja dla projektów B2B i hotelowych w Polsce. Prefabrykaty z sufitem napinanym produkujemy w zakładzie w Częstochowie."
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
