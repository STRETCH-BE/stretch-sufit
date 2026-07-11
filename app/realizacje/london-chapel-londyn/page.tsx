// app/realizacje/london-chapel-londyn/page.tsx
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

const SLUG = "london-chapel-londyn";

export const metadata: Metadata = {
  title:
    "London Chapel — napinane ściany z tkaniną Camira w rezydencji | Stretch Sufit",
  description:
    "Realizacja akustycznego sufitu napinanego i napinanych ścian pokrytych tkaniną Camira w londyńskiej rezydencji-kaplicy. Wykonanie: Upholster London. Rok: 2023.",
  alternates: { canonical: "/realizacje/london-chapel-londyn" },
  openGraph: {
    title: "London Chapel — Camira na ścianach i suficie",
    description:
      "Londyńska rezydencja w stylu kaplicy z napinanymi ścianami i sufitem pokrytymi tkaniną Camira.",
    images: ["/images/projects/london-chapel-londyn/og.jpg"],
    type: "article",
  },
};

export default function LondonChapelPage() {
  const project = getProject(SLUG);
  if (!project) notFound();

  const breadcrumbsLd = buildBreadcrumbs([
    { name: "Home", url: siteConfig.url },
    { name: "Realizacje", url: `${siteConfig.url}/realizacje` },
    { name: "London Chapel", url: `${siteConfig.url}/realizacje/${SLUG}` },
  ]);

  const creativeWorkLd = buildCreativeWork({
    name: "London Chapel — napinane ściany i sufit z tkaniną Camira",
    description:
      "Londyńska rezydencja w stylu kaplicy z akustycznym sufitem napinanym i napinanymi ścianami pokrytymi tradycyjną tkaniną Camira. Realizacja: Upholster London. Tkanina: Camira.",
    url: `${siteConfig.url}/realizacje/${SLUG}`,
    image: [
      `${siteConfig.url}${project.heroImage}`,
      ...project.gallery.slice(0, 4).map((g) => `${siteConfig.url}${g.src}`),
    ],
    dateCreated: "2023",
    locationName: "Londyn, Wielka Brytania",
    locationCountry: project.country,
    contributor: project.designStudio
      ? { name: project.designStudio.name, url: project.designStudio.url }
      : undefined,
    producer: { name: siteConfig.name, url: siteConfig.url },
    keywords: project.tags,
  });

  const faqLd = buildFaqPage([
    {
      question: "Czym są napinane ściany tekstylne?",
      answer:
        "Napinane ściany tekstylne to system, w którym tkanina jest naciągnięta na ramach obwodowych — działa identycznie jak sufit napinany, tylko zastosowany na ścianach. Tkanina pełni rolę wykończenia dekoracyjnego i jednocześnie absorbera akustycznego, jeśli za nią umieszczona jest wełna pochłaniająca dźwięk.",
    },
    {
      question: "Czy można użyć dowolnej tkaniny do napinanych ścian?",
      answer:
        "Nie. Tkaniny muszą spełniać wymagania dotyczące ognioodporności, stabilności wymiarowej i przepuszczalności powietrza (w wersji akustycznej). W projekcie London Chapel zastosowano tkaniny Camira — globalnego producenta tekstyliów kontraktowych, certyfikowanych do montażu w systemach napinanych.",
    },
    {
      question: "Kto wykonał projekt London Chapel?",
      answer:
        "Akustyczny sufit napinany i napinane ściany w londyńskiej rezydencji-kaplicy wykonał Upholster London — dealer grupy STRETCH na rynku brytyjskim. Tkanina została dostarczona przez Camira.",
    },
    {
      question: "Czy napinane ściany działają w różnych pomieszczeniach?",
      answer:
        "Tak. W projekcie London Chapel system zastosowano w salonie, domowym kinie i sypialni — każde z tych pomieszczeń ma inne wymagania akustyczne, ale ten sam system napinany z tkaniną Camira obsłużył wszystkie scenariusze.",
    },
  ]);

  return (
    <>
      <Nav />
      <main id="main">
        <ProjectHero
          eyebrow="Realizacja · Londyn 🇬🇧 · 2023"
          titleRed="London Chapel."
          titleItalic="Tkanina Camira"
          titleTail=" na ścianach."
          subheadFactual="Akustyczny sufit napinany i napinane ściany pokryte tradycyjną tkaniną Camira w londyńskiej rezydencji utrzymanej w stylu kaplicy. Realizacja w wielu pomieszczeniach: salon, domowe kino, sypialnia."
          subheadSecondary="Stretch Sufit jest częścią belgijskiej Stretchgroup — systemy napinanych ścian tekstylnych z tkaninami kontraktowymi dostarczamy również klientom rezydencjalnym w Polsce."
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
          heroCaption="London Chapel · Londyn · 2023"
          chips={["Camira fabric", "Napinane ściany", "Multi-room"]}
        />

        <ProjectMetaStrip project={project} />

        <Ticker
          items={[
            "Made in Belgium",
            "Fabric walling",
            "Camira textile",
            "Acoustic walls + ceiling",
            "Upholster London",
            "Multi-room residence",
            "London 2023",
          ]}
        />

        <Heritage
          paragraph={
            <>
              <strong className="font-semibold">Stretch Sufit</strong> jest
              częścią belgijskiej{" "}
              <strong className="font-semibold">Stretchgroup</strong>{" "}
              <span className="text-bg/55">
                — system napinanych ścian z tkaninami kontraktowymi dostępny
                jest również w Polsce dla projektów rezydencjalnych premium.
              </span>
            </>
          }
          tags={[
            { flag: "BE", label: "Technologia Stretch" },
            { flag: "PL", label: "Realizacje w Polsce" },
          ]}
        />

        <Stats
          ariaLabel="Kluczowe parametry realizacji London Chapel"
          items={[
            { number: "3+", emphasis: "Pomieszczeń.", description: "Salon, domowe kino, sypialnia — różne wymagania akustyczne." },
            { number: <span className="text-red">2</span>, emphasis: "Powierzchnie.", description: "Ściany i sufit — pełna kontrola akustyczna." },
            { number: "1", emphasis: "System.", description: "Napinana tkanina obsługuje wszystkie pomieszczenia." },
            { number: <span className="text-red">25</span>, suffix: "lat", emphasis: "Żywotność.", description: "Standardowa gwarancja systemu STRETCH." },
          ]}
        />

        <ProjectBrief
          title="Wyzwanie projektu"
          factualLead="Klient chciał zachować nastrój historycznej kaplicy w londyńskiej rezydencji — ciepły, tradycyjny, z teksturą tkaniny dominującą nad gładkimi, nowoczesnymi powierzchniami. Jednocześnie wnętrze musiało obsłużyć współczesne potrzeby — domowe kino z pełną kontrolą akustyczną i sypialnie wymagające ciszy."
          bullets={[
            "Charakter historycznej kaplicy — tradycyjne, ciepłe wykończenia w ciemnych, głębokich barwach.",
            "Wiele różnych pomieszczeń — salon, domowe kino, sypialnia — z odmiennymi wymaganiami akustycznymi.",
            "Pełna kontrola akustyki domowego kina — żadnych odbić ze ścian, idealna izolacja od reszty domu.",
            "Spójność wizualna w całym domu mimo różnych funkcji pomieszczeń.",
          ]}
          image="/images/projects/london-chapel-londyn/brief.jpg"
          imageAlt="Wnętrze londyńskiej rezydencji-kaplicy w trakcie konfiguracji — tradycyjny, ciepły charakter wymagający dopasowanego rozwiązania tekstylnego."
        />

        <ProjectSolution
          productLabel="Napinany sufit + napinane ściany z tkaniną Camira"
          bullets={[
            { strong: "Tkanina Camira", body: "globalny producent tekstyliów kontraktowych — certyfikowane do montażu w systemach napinanych, ognioodporne i stabilne wymiarowo." },
            { strong: "Napinane ściany — pełna powierzchnia", body: "tkanina rozpięta na ramach obwodowych, bez widocznych styków ani szwów w polu wzroku." },
            { strong: "Akustyczny sufit napinany", body: "ta sama logika rozciągnięta na sufit — absorber za tkaniną tłumi pogłos." },
            { strong: "Profile ukryte za tkaniną", body: "system mocowania w narożach pokoju — niewidoczny po napięciu materiału." },
            { strong: "Wymienność tkaniny", body: "po latach można wymienić samą tkaninę bez demontażu konstrukcji — odświeżenie wnętrza bez prac wykończeniowych." },
          ]}
          caption="Ten sam system w salonie, w domowym kinie i w sypialni — tylko tkanina i wypełnienie akustyczne dobrane do funkcji pomieszczenia."
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
            { title: "Wybór tkaniny Camira", body: "Dobór wzoru i koloru pasującego do charakteru kaplicy — ciepłe, tradycyjne tony." },
            { title: "Produkcja w Belgii", body: "Folia napinana akustyczna na sufit, ramy obwodowe na ściany, tkanina cięta pod wymiar." },
            { title: "Montaż w każdym pomieszczeniu", body: "Salon, domowe kino, sypialnia — ten sam system, różne tkaniny i wypełnienia akustyczne." },
            { title: "Oddanie", body: "Multi-room residence gotowy do użytkowania — pełna kontrola akustyczna i tradycyjny klimat." },
          ]}
        />

        <ProjectReasons
          cards={[
            { title: "Tkanina jako wykończenie i akustyka", body: "Jeden system załatwia jednocześnie efekt wizualny i tłumienie dźwięku." },
            { title: "Spójność w całym domu", body: "Ten sam system napinany w każdym pomieszczeniu — różne tkaniny i wypełnienia, identyczna logika." },
            { title: "Wymienna tkanina", body: "Odświeżenie wnętrza za 5–10 lat to wymiana samej tkaniny, nie cała renowacja." },
          ]}
        />

        {project.designStudio && (
          <ProjectCredit
            heading="Wykonawca"
            studio={project.designStudio}
            bodyText="Akustyczny sufit napinany i napinane ściany w londyńskiej rezydencji wykonał Upholster London — dealer grupy STRETCH na rynku brytyjskim. Tkanina została dostarczona przez Camira, brytyjskiego producenta tekstyliów kontraktowych. Stretch Sufit oferuje ten sam system dla projektów rezydencjalnych w Polsce."
            projectSlug={SLUG}
            intro="Realizacja powstała w londyńskim oddziale grupy STRETCH. Identyczne systemy napinanych ścian z tkaninami Camira oferujemy klientom w Polsce — dla rezydencji premium, sal kameralnych i wnętrz wymagających tekstylnego charakteru."
          />
        )}

        <RelatedProjects currentSlug={SLUG} />

        <div id="wycena">
          <CtaFinal
            source="project_london_chapel"
            headingOverride={
              <>
                Tkanina na ścianach
                <br />
                <span className="it">w Twojej rezydencji?</span>
              </>
            }
            subheadOverride="Pomiar i wycena systemu napinanych ścian — bezpłatne. Realizujemy domowe kina, rezydencje i wnętrza premium w całej Polsce."
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
