// app/realizacje/vier-emmershof-lokeren/page.tsx
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

const SLUG = "vier-emmershof-lokeren";

export const metadata: Metadata = {
  title:
    "Vier Emmershof, Lokeren — akustyczny sufit w domu wkomponowanym w las | Stretch Sufit",
  description:
    "Realizacja akustycznego sufitu napinanego w prywatnej rezydencji 't Vier Emmershof w Lokeren — dom Inzicht Architecten z pełnym przeszkleniem na zachowany las świerkowy.",
  alternates: { canonical: "/realizacje/vier-emmershof-lokeren" },
  openGraph: {
    title: "Vier Emmershof — akustyczny sufit w rezydencji",
    description:
      "Prywatna rezydencja z przeszklonym widokiem na las. Akustyczny sufit napinany w otwartym wnętrzu.",
    images: ["/images/projects/vier-emmershof-lokeren/og.jpg"],
    type: "article",
  },
};

export default function VierEmmershofLokerenPage() {
  const project = getProject(SLUG);
  if (!project) notFound();

  const breadcrumbsLd = buildBreadcrumbs([
    { name: "Home", url: siteConfig.url },
    { name: "Realizacje", url: `${siteConfig.url}/realizacje` },
    { name: "Vier Emmershof, Lokeren", url: `${siteConfig.url}/realizacje/${SLUG}` },
  ]);

  const creativeWorkLd = buildCreativeWork({
    name: "'t Vier Emmershof, Lokeren — akustyczny sufit napinany w prywatnej rezydencji",
    description:
      "Akustyczny sufit napinany w prywatnej rezydencji 't Vier Emmershof w Lokeren. Otwarte wnętrze z pełnym przeszkleniem na zachowany las świerkowy. Projekt: Inzicht Architecten (VEH-167). Dealer: Plafondlux BV.",
    url: `${siteConfig.url}/realizacje/${SLUG}`,
    image: [
      `${siteConfig.url}${project.heroImage}`,
      ...project.gallery.slice(0, 4).map((g) => `${siteConfig.url}${g.src}`),
    ],
    dateCreated: "2019",
    locationName: "Lokeren, Belgia",
    locationCountry: project.country,
    contributor: project.designStudio
      ? { name: project.designStudio.name, url: project.designStudio.url }
      : undefined,
    producer: { name: siteConfig.name, url: siteConfig.url },
    keywords: project.tags,
  });

  const faqLd = buildFaqPage([
    {
      question: "Po co sufit akustyczny w prywatnym domu?",
      answer:
        "W otwartych wnętrzach z dużą ilością szkła, gładkimi posadzkami i wysokimi przestrzeniami fale dźwiękowe odbijają się od twardych powierzchni, generując pogłos. Akustyczny sufit napinany działa jako absorber — pochłania falę dźwiękową przed jej odbiciem, czyniąc rozmowy zrozumiałymi nawet w otwartym salonie z antresolą.",
    },
    {
      question: "Czy sufit akustyczny da się zintegrować z drewnem i naturalnymi materiałami?",
      answer:
        "Tak. Sufit napinany dostępny jest w paletach kolorów dopasowanych do drewna i naturalnych wykończeń. W projekcie 't Vier Emmershof sufit zlewa się z resztą wnętrza, działając jako tło dla materiałów harmonizujących z otaczającym lasem.",
    },
    {
      question: "Kto zaprojektował dom 't Vier Emmershof?",
      answer:
        "Dom 't Vier Emmershof w Lokeren zaprojektowało biuro Inzicht Architecten (projekt VEH-167). Akustyczny sufit napinany dostarczył belgijski dealer grupy STRETCH — Plafondlux BV.",
    },
    {
      question: "Czy sufit napinany pasuje do antresoli i otwartych pomieszczeń?",
      answer:
        "Tak. Sufit napinany pozwala na bezszwowe powierzchnie do 5,15 m szerokości, co umożliwia ciągłe pokrycie otwartych salonów z antresolą bez widocznych łączeń. Akustyczna wersja dodatkowo eliminuje echo charakterystyczne dla wielopoziomowych przestrzeni.",
    },
  ]);

  return (
    <>
      <Nav />
      <main id="main">
        <ProjectHero
          eyebrow="Realizacja · Lokeren 🇧🇪 · 2019"
          titleRed="Vier Emmershof."
          titleItalic="Las wchodzi"
          titleTail=" do środka."
          subheadFactual="Akustyczny sufit napinany w prywatnej rezydencji 't Vier Emmershof w Lokeren. Otwarte wnętrze z pełnym przeszkleniem tylnej elewacji wchodzącej w zachowany las świerkowy — sufit utrzymuje akustyczny komfort mimo dużej ilości szkła i twardych posadzek."
          subheadSecondary="Stretch Sufit jest częścią belgijskiej grupy Stretch Ceiling MSD — te same systemy akustyczne dostarczamy do prywatnych rezydencji w Polsce."
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
          heroCaption="'t Vier Emmershof · Lokeren · 2019"
          chips={["Rezydencja", "Inzicht Architecten", "Akustyka residential"]}
        />

        <ProjectMetaStrip project={project} />

        <Ticker
          items={[
            "Made in Belgium",
            "Residential acoustic",
            "Inzicht Architecten",
            "VEH-167",
            "Forest integration",
            "Plafondlux BV",
            "Lokeren 2019",
          ]}
        />

        <Heritage
          paragraph={
            <>
              <strong className="font-semibold">Stretch Sufit</strong> jest
              częścią belgijskiej{" "}
              <strong className="font-semibold">Stretchgroup</strong>{" "}
              <span className="text-bg/55">
                — sufity akustyczne dla prywatnych rezydencji to istotny segment
                naszej oferty w Polsce.
              </span>
            </>
          }
          tags={[
            { flag: "BE", label: "Technologia Stretch" },
            { flag: "PL", label: "Realizacje w Polsce" },
          ]}
        />

        <Stats
          ariaLabel="Kluczowe parametry realizacji Vier Emmershof"
          items={[
            { number: "1", emphasis: "Otwarte wnętrze.", description: "Salon, jadalnia, antresola — bez ścian, bez echa." },
            { number: <span className="text-red">5,15</span>, suffix: "m", emphasis: "Bezszwowo.", description: "Maksymalna szerokość folii bez łączeń." },
            { number: "100", suffix: "%", emphasis: "Szkła z tyłu.", description: "Pełne przeszklenie wchodzące w las." },
            { number: <span className="text-red">25</span>, suffix: "lat", emphasis: "Żywotność.", description: "Standardowa gwarancja systemu STRETCH." },
          ]}
        />

        <ProjectBrief
          title="Wyzwanie projektu"
          factualLead="Inzicht Architecten zaprojektowali dom, który ma być rzeźbą wchodzącą w las — pełne przeszklenie tylnej elewacji wprowadza świerki do salonu, a otwarta antresola łączy parter z piętrem w jedną przestrzeń. Te same decyzje architektoniczne, które dają piękny widok, generują też silny pogłos: dużo szkła, gładkie posadzki, brak ścian dzielących, wysokie sufity."
          bullets={[
            "Otwarty plan: salon, jadalnia, antresola — jedna ciągła przestrzeń, w której dźwięk rozchodzi się przez cały dom.",
            "Pełne przeszklenie tylnej elewacji — szkło odbija dźwięk równie skutecznie jak światło.",
            "Twarde wykończenia podłóg pasujące do industrialnego charakteru rezydencji premium.",
            "Konieczność zachowania designerskiego, surowego charakteru wnętrza — żadnych widocznych paneli akustycznych na ścianach.",
          ]}
          image="/images/projects/vier-emmershof-lokeren/brief.jpg"
          imageAlt="Otwarte wnętrze rezydencji 't Vier Emmershof z przeszkleniem na las — wyzwanie akustyczne otwartego planu."
        />

        <ProjectSolution
          productLabel="Akustyczny sufit napinany — residential"
          bullets={[
            { strong: "Bezszwowy montaż do 5,15 m", body: "ciągła powierzchnia sufitu przez salon, jadalnię i antresolę — bez widocznych łączeń." },
            { strong: "Perforacja akustyczna", body: "fala dźwiękowa wchodzi w mikroperforację folii i zostaje wytłumiona przez absorber za nią." },
            { strong: "Wykończenia spójne z naturą", body: "paleta dostępna w wariantach naturalnych — sufit jako tło dla drewna, kamienia i widoku na las." },
            { strong: "Brak paneli na ścianach", body: "cały komfort akustyczny zlokalizowany w suficie — ściany pozostają czyste, designerskie." },
            { strong: "Demontowalność", body: "dostęp do instalacji elektrycznej i wentylacyjnej za sufitem bez konieczności wymiany folii." },
          ]}
          caption="Otwarte wnętrze z pełnym przeszkleniem może mieć designerską ciszę zamiast designerskiego echa — wystarczy umieścić cały absorber w jedynym dostępnym miejscu, czyli w suficie."
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
            { title: "Brief od Inzicht Architecten", body: "Plan VEH-167, otwarte wnętrze z antresolą, paleta naturalna, wymóg akustyczny rezydencjalny." },
            { title: "Produkcja w Belgii", body: "Folia perforowana akustyczna w wykończeniu naturalnym, cięta pod plan rezydencji." },
            { title: "Montaż w 1 dzień", body: "Bezszwowe pokrycie salonu z antresolą — żadnych prac mokrych w prywatnym domu." },
            { title: "Odbiór", body: "Kontrola wizualna i akustyczna — rezydencja oddana do użytku." },
          ]}
        />

        <ProjectReasons
          cards={[
            { title: "Otwarty plan bez echa", body: "Sufit akustyczny absorbuje dźwięk, który w innym wypadku rozchodzi się przez cały otwarty parter." },
            { title: "Designerski charakter zachowany", body: "Cały absorber w suficie — ściany pozostają czyste, nic nie psuje widoku na las." },
            { title: "Bezszwowo do 5,15 m", body: "Ciągła powierzchnia bez widocznych łączeń — pasuje do otwartych planów z antresolą." },
          ]}
        />

        {project.designStudio && (
          <ProjectCredit
            heading="Architekt projektu"
            studio={project.designStudio}
            bodyText="Dom 't Vier Emmershof zaprojektowało biuro Inzicht Architecten — projekt VEH-167. Akustyczny sufit napinany dostarczył belgijski dealer grupy STRETCH, Plafondlux BV. Stretch Sufit oferuje ten sam typ rezydencjalnego sufitu akustycznego klientom w Polsce."
            projectSlug={SLUG}
            intro="Realizacja powstała w belgijskim oddziale grupy STRETCH. Identyczne sufity akustyczne dla domów prywatnych dostarczamy w Polsce — projekty residential to istotny segment naszej oferty."
          />
        )}

        <RelatedProjects currentSlug={SLUG} />

        <div id="wycena">
          <CtaFinal
            source="project_vier_emmershof"
            headingOverride={
              <>
                Otwarty plan
                <br />
                <span className="it">bez echa?</span>
              </>
            }
            subheadOverride="Pomiar akustyczny domu i wycena bezpłatne. Realizujemy prywatne rezydencje z sufitem akustycznym w całej Polsce."
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
