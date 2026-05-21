// content/projects.ts
import type { Project } from "@/types";

export const projects: Project[] = [
  // ═══════════════════════════════════════════════════════════════════
  // 2025 — AFAS Lounge, Antwerpia
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "afas-lounge-antwerpia",
    title: "AFAS Lounge",
    subtitle: "Czarny połysk spotyka akustykę",
    client: "BE•AT × AFAS",
    venue: "AFAS Dome, Antwerpia",
    country: "BE",
    year: 2025,
    surface_m2: 250,
    product: "Sufit napinany czarny połysk + akustyka",
    designStudio: {
      name: "Creneau International",
      url: "https://www.creneau.com/work/afas-lounge",
      location: "Hasselt, Belgia",
    },
    heroImage: "/images/projects/afas-lounge/hero.jpg",
    heroAlt:
      "Sufit napinany w wykończeniu czarny połysk z lustrzanym odbiciem baru i disco-balla w AFAS Lounge w Antwerpii.",
    ogImage: "/images/projects/afas-lounge/og.jpg",
    gallery: [
      {
        src: "/images/projects/afas-lounge/01-bar-reflection.jpg",
        alt: "Lustrzane odbicie baru i butelek alkoholu w sufitcie napinanym czarny połysk, AFAS Lounge w Antwerpii.",
        caption: "Lustrzane odbicie baru",
        note: "Folia PVC czarny połysk, ok. 90% odbicia",
      },
      {
        src: "/images/projects/afas-lounge/02-restaurant-mode.jpg",
        alt: "Tryb restauracyjny w AFAS Lounge — ciepłe światło, stoliki, kurtyna zamykająca strefę parkietu.",
        caption: "Tryb restauracyjny",
        note: "Światło ciepłe, kurtyna zamknięta",
      },
      {
        src: "/images/projects/afas-lounge/03-dancefloor.jpg",
        alt: "Tryb klubowy w AFAS Lounge — parkiet, disco-ball odbity w czarnym połyskliwym suficie.",
        caption: "Tryb klubowy",
        note: "Disco-ball + ceiling reflection",
      },
      {
        src: "/images/projects/afas-lounge/04-acoustic-detail.jpg",
        alt: "Detal sufitu napinanego z warstwą akustyczną — perforowana folia PVC z absorberem za nią.",
        caption: "Detal warstwy akustycznej",
        note: "Folia perforowana, absorber za sufitem",
      },
      {
        src: "/images/projects/afas-lounge/05-lighting-grid.jpg",
        alt: "Integracja oświetlenia LED i punktów głośnikowych w sufitcie napinanym AFAS Lounge.",
        caption: "Integracja oświetlenia",
        note: "Otwory wycięte fabrycznie",
      },
      {
        src: "/images/projects/afas-lounge/06-overview.jpg",
        alt: "Widok ogólny 250-metrowego loungu AFAS w Antwerpii z sufitem napinanym czarny połysk.",
        caption: "Widok ogólny loungu",
        note: "250 m², multifunkcyjna przestrzeń",
      },
    ],
    tags: ["czarny połysk", "akustyka", "horeca", "belgia", "creneau"],
    cardImage: "/images/projects/afas-lounge/card.jpg",
    cardSummary:
      "250 m² czarnego połysku z akustyką w kultowym AFAS Dome. Projekt: Creneau International.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // 2018 — Kancelaria Notarialna Ampe Anthony, Kruibeke
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "kancelaria-ampe-kruibeke",
    title: "Kancelaria Ampe",
    subtitle: "Akustyka spotyka design",
    client: "Notariat Ampe Anthony",
    venue: "Kancelaria notarialna, Kruibeke",
    country: "BE",
    year: 2018,
    surface_m2: 350,
    product: "Sufit akustyczny + wełna poliestrowa D40/50",
    designStudio: {
      name: "Ante Architecten",
      url: "https://www.ante.be/",
      location: "Belgia",
    },
    heroImage: "/images/projects/kancelaria-ampe-kruibeke/hero.jpg",
    heroAlt:
      "Sufit napinany akustyczny z eliptycznymi wycięciami w kancelarii notarialnej Ampe Anthony w Kruibeke, Belgia.",
    ogImage: "/images/projects/kancelaria-ampe-kruibeke/og.jpg",
    gallery: [
      {
        src: "/images/projects/kancelaria-ampe-kruibeke/01-ellipse-cutout.jpg",
        alt: "Duże eliptyczne wycięcie w suficie napinanym akustycznym, kancelaria Ampe Anthony, Kruibeke.",
        caption: "Eliptyczne wycięcie",
        note: "Iluzja wyższej przestrzeni przy wysokości 260 cm",
      },
      {
        src: "/images/projects/kancelaria-ampe-kruibeke/02-reception.jpg",
        alt: "Strefa recepcji z gładkim sufitem akustycznym, kancelaria Ampe Anthony.",
        caption: "Strefa recepcji",
        note: "Pogłos 0,6 s — wnętrze wyraźnie ciche",
      },
      {
        src: "/images/projects/kancelaria-ampe-kruibeke/03-perimeter.jpg",
        alt: "Detal białych profili PVC obwodowych sufitu napinanego.",
        caption: "Wykończenie obwodowe",
        note: "Białe profile PVC, czysty styk z ścianą",
      },
      {
        src: "/images/projects/kancelaria-ampe-kruibeke/04-lighting.jpg",
        alt: "Integracja oświetlenia Wever & Ducre i Delta Light w suficie napinanym.",
        caption: "Integracja oświetlenia",
        note: "Wever & Ducre + Delta Light, otwory fabryczne",
      },
      {
        src: "/images/projects/kancelaria-ampe-kruibeke/05-meeting-room.jpg",
        alt: "Sala konferencyjna z polerowanym betonem i sufitem akustycznym.",
        caption: "Sala konferencyjna",
        note: "Twarda podłoga, miękka akustyka sufitu",
      },
      {
        src: "/images/projects/kancelaria-ampe-kruibeke/06-overview.jpg",
        alt: "Widok ogólny 350-metrowej kancelarii Ampe Anthony.",
        caption: "Widok ogólny",
        note: "350 m² powierzchni biurowej",
      },
    ],
    tags: ["akustyka", "biuro", "polyester wool", "belgia", "ante architecten"],
    cardImage: "/images/projects/kancelaria-ampe-kruibeke/card.jpg",
    cardSummary:
      "350 m² akustyki dla kancelarii notarialnej. Pogłos 0,6 s. Projekt: Ante Architecten.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getOtherProjects(currentSlug: string, limit = 3): Project[] {
  return projects.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
