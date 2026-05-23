// app/realizacje/van-der-valk-beveren/page.tsx
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

const SLUG = "van-der-valk-beveren";

export const metadata: Metadata = {
  title:
    "Van der Valk Beveren — akustyka aW 0,95 w sali bankietowej | Stretch Sufit",
  description:
    "Sala bankietowa hotelu Van der Valk w Beveren miała wysokość zaledwie 255 cm i wieloletni problem akustyczny. System sufitowy o głębokości 50 mm dał aW 0,95 przy minimalnym obniżeniu sufitu.",
  alternates: { canonical: "/realizacje/van-der-valk-beveren" },
  openGraph: {
    title: "Van der Valk Beveren — sala bankietowa, aW 0,95",
    description:
      "Rozwiązanie pogłosu przy ograniczonej wysokości — 50 mm systemu, aW 0,95. Realizacja STRETCH.",
    images: ["/images/projects/van-der-valk-beveren/og.jpg"],
    type: "article",
  },
};

export default function VanDerValkBeverenPage() {
  const project = getProject(SLUG);
  if (!project) notFound();

  const breadcrumbsLd = buildBreadcrumbs([
    { name: "Home", url: siteConfig.url },
    { name: "Realizacje", url: `${siteConfig.url}/realizacje` },
    { name: "Van der Valk Beveren", url: `${siteConfig.url}/realizacje/${SLUG}` },
  ]);

  const creativeWorkLd = buildCreativeWork({
    name: "Van der Valk Beveren — sala bankietowa, akustyczny sufit napinany 50 mm",
    description:
      "Sala bankietowa hotelu Van der Valk Beveren wymagała rozwiązania pogłosu przy istniejącej wysokości sufitu 255 cm. System sufitowy o głębokości 50 mm uzyskał współczynnik aW 0,95 przy minimalnym obniżeniu sufitu. Zintegrowano też klapy techniczne, oświetlenie, czujniki i efekt gwiezdnego nieba.",
    url: `${siteConfig.url}/realizacje/${SLUG}`,
    image: [
      `${siteConfig.url}${project.heroImage}`,
      ...project.gallery.slice(0, 4).map((g) => `${siteConfig.url}${g.src}`),
    ],
    dateCreated: "2024",
    locationName: "Beveren, Belgia",
    locationCountry: project.country,
    producer: { name: siteConfig.name, url: siteConfig.url },
    keywords: project.tags,
  });

  const faqLd = buildFaqPage([
    {
      question: "Czym jest współczynnik aW i co znaczy aW 0,95?",
      answer:
        "aW (weighted sound absorption coefficient) to jednoliczbowy wskaźnik pochłaniania dźwięku przez materiał, w skali od 0 do 1. aW 0,95 oznacza, że materiał pochłania 95% padającej fali dźwiękowej — wartość zarezerwowana dla profesjonalnych systemów akustycznych.",
    },
    {
      question: "Czy sufit akustyczny obniża pomieszczenie?",
      answer:
        "Tak, ale niewiele. W sali bankietowej hotelu Van der Valk Beveren zastosowano system o głębokości 50 mm — sufit obniżył się o 5 centymetrów, pozostawiając 250 cm wysokości użytkowej. To minimalny kompromis w stosunku do uzyskanego współczynnika aW 0,95.",
    },
    {
      question: "Czy sufit napinany może mieć efekt gwiezdnego nieba?",
      answer:
        "Tak. Sufit napinany pozwala na wbudowanie punktów światłowodowych za folią — efekt nieba ze świecącymi gwiazdami widoczny przy ściemnionym oświetleniu głównym. W projekcie Van der Valk Beveren dodano gwiezdne niebo jako element ozdobny sali bankietowej.",
    },
    {
      question: "Czy można serwisować instalacje schowane nad sufitem napinanym?",
      answer:
        "Tak. Standardem są klapy techniczne wbudowane w sufit — dają dostęp do oświetlenia, czujników i innych instalacji bez konieczności demontażu folii. W sali bankietowej Van der Valk wykorzystano klapy techniczne właśnie do tego celu.",
    },
  ]);

  return (
    <>
      <Nav />
      <main id="main">
        <ProjectHero
          eyebrow="Realizacja · Beveren 🇧🇪 · 2024"
          titleRed="Van der Valk Beveren."
          titleItalic="aW 0,95"
          titleTail=" w sali bankietowej."
          subheadFactual="Sala bankietowa hotelu Van der Valk Beveren miała wysokość zaledwie 255 cm i wieloletni problem akustyczny. System sufitowy o głębokości 50 mm uzyskał współczynnik pochłaniania aW 0,95 — przy obniżeniu sufitu o 5 cm."
          subheadSecondary="Stretch Sufit jest częścią belgijskiej grupy Stretch Ceiling MSD — ten sam system akustyczny, który rozwiązał problem pogłosu w belgijskim hotelu, dostarczamy klientom hotelowym i HoReCa w Polsce."
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
          heroCaption="Sala bankietowa · Hotel Van der Valk · Beveren · 2024"
          chips={["aW 0,95", "50 mm głębokości", "Sufit 255 → 250 cm"]}
        />

        <ProjectMetaStrip project={project} />

        <Ticker
          items={[
            "Made in Belgium",
            "Acoustic ceiling 50 mm",
            "aW 0,95",
            "Starry sky",
            "Tech hatches + sensors",
            "Hotel feestzaal",
            "Beveren 2024",
          ]}
        />

        <Heritage
          paragraph={
            <>
              <strong className="font-semibold">Stretch Sufit</strong> jest
              częścią belgijskiej{" "}
              <strong className="font-semibold">Stretchgroup</strong>{" "}
              <span className="text-bg/55">
                — ten sam system akustyczny, który ucisza belgijskie hotele,
                instalujemy w polskich obiektach HoReCa.
              </span>
            </>
          }
          tags={[
            { flag: "BE", label: "Technologia Stretch" },
            { flag: "PL", label: "Realizacje w Polsce" },
          ]}
        />

        <Stats
          ariaLabel="Kluczowe parametry realizacji Van der Valk Beveren"
          items={[
            { number: <span className="text-red">0,95</span>, suffix: "aW", emphasis: "Współczynnik pochłaniania.", description: "Maksymalna klasa akustyczna w systemie tej głębokości." },
            { number: "50", suffix: "mm", emphasis: "Głębokość systemu.", description: "Sufit obniżony tylko o 5 cm — kluczowe przy niskim pomieszczeniu." },
            { number: "255", suffix: "cm", emphasis: "Istniejąca wysokość.", description: "Po obniżeniu 250 cm — w granicach komfortu." },
            { number: <span className="text-red">25</span>, suffix: "lat", emphasis: "Żywotność systemu.", description: "Standardowa gwarancja STRETCH." },
          ]}
        />

        <ProjectBrief
          title="Wyzwanie projektu"
          factualLead="Tim van der Valk od kilku lat walczył z pogłosem w sali bankietowej hotelu — silne echo psuło komfort wesel, konferencji i prezentacji. Standardowe rozwiązania akustyczne wymagają minimum 100 mm grubości systemu, a sufit miał już tylko 255 cm wysokości. Każdy dodatkowy centymetr obniżenia był nie do zaakceptowania."
          bullets={[
            "Wieloletni problem akustyczny — pogłos w trakcie eventów psuł komfort gości i zrozumiałość mowy.",
            "Wysokość pomieszczenia tylko 255 cm — standardowy system akustyczny 100 mm dałby tylko 245 cm, na granicy klaustrofobii.",
            "Sala w użyciu — krótkie okna montażowe między eventami, brak miejsca na prace mokre.",
            "Dodatkowo: integracja oświetlenia, czujników i efektu gwiezdnego nieba — wszystko bez zwiększania głębokości sufitu.",
          ]}
          image="/images/projects/van-der-valk-beveren/brief.jpg"
          imageAlt="Sala bankietowa hotelu Van der Valk Beveren — wnętrze z ograniczoną wysokością wymagające rozwiązania akustycznego."
        />

        <ProjectSolution
          productLabel="Sufit akustyczny 50 mm + gwiezdne niebo + technika"
          bullets={[
            { strong: "System 50 mm głębokości", body: "kompaktowa konstrukcja systemowa — obniżenie sufitu o 5 cm zamiast 10–15 cm w klasycznych rozwiązaniach." },
            { strong: "Współczynnik aW 0,95", body: "perforowana folia + absorber za sufitem — maksymalna klasa pochłaniania w systemie tej głębokości." },
            { strong: "Wbudowane klapy techniczne", body: "serwis instalacji bez demontażu folii — istotne dla obiektu w użyciu." },
            { strong: "Gwiezdne niebo", body: "punkty światłowodowe wkomponowane w sufit — efekt dekoracyjny dla wesel i kameralnych wieczorów." },
            { strong: "Sensory + oświetlenie", body: "detekcja obecności i jakości powietrza, oświetlenie sceniczne — wszystko schowane za folią." },
          ]}
          caption="50 mm zamiast 100 mm to różnica między salą bankietową a salą do której nikt nie chce wejść — tutaj kompaktowość systemu STRETCH zadecydowała o realizowalności projektu."
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
            { title: "Brief od Tima van der Valka", body: "Wymóg rozwiązania pogłosu przy zachowaniu wysokości sali. Konsultacja z Michaelem Nicasens z STRETCH." },
            { title: "Wybór systemu 50 mm", body: "Decyzja: kompaktowy system głębokości 50 mm z aW 0,95 zamiast standardowych 100 mm." },
            { title: "Montaż w sali w użyciu", body: "Sufit, oświetlenie, czujniki, klapy techniczne, gwiezdne niebo, profile obwodowe i wykończenie wokół słupów." },
            { title: "Pomiar i otwarcie", body: "Pomiar akustyczny po montażu — pogłos rozwiązany, sala gotowa do pełnego programu eventowego." },
          ]}
        />

        <ProjectReasons
          cards={[
            { title: "Akustyka przy ograniczonej wysokości", body: "aW 0,95 w systemie 50 mm — gdy każdy centymetr nad głową gości się liczy." },
            { title: "Pięć funkcji w jednej powłoce", body: "Akustyka, oświetlenie, klapy techniczne, czujniki, gwiezdne niebo — wszystko za jedną folią." },
            { title: "Bez prac mokrych", body: "Sucha instalacja, kompatybilna z eksploatacją obiektu między eventami." },
          ]}
        />

        {project.designStudio && (
          <ProjectCredit
            heading="Wykonawca"
            studio={project.designStudio}
            bodyText="Projekt zrealizował belgijski oddział grupy STRETCH przy konsultacji z Michaelem Nicasens. Dobrane rozwiązanie — system 50 mm o współczynniku aW 0,95 — pochodzi z katalogu Stretch Ceiling MSD, tego samego, z którego oferujemy systemy akustyczne klientom w Polsce."
            projectSlug={SLUG}
            intro="Realizacja powstała w belgijskim oddziale grupy STRETCH. Stretch Sufit dostarcza identyczne rozwiązania akustyczne dla hoteli, sal weselnych i obiektów HoReCa w Polsce."
          />
        )}

        <RelatedProjects currentSlug={SLUG} />

        <div id="wycena">
          <CtaFinal
            source="project_van_der_valk_beveren"
            headingOverride={
              <>
                Pogłos w sali bankietowej
                <br />
                <span className="it">bez obniżania sufitu?</span>
              </>
            }
            subheadOverride="Pomiar akustyczny i wycena bezpłatne. Realizujemy hotele, sale weselne i restauracje w całej Polsce."
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
