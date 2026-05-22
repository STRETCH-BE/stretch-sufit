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
      { src: "/images/projects/afas-lounge/01-bar-reflection.jpg", alt: "Lustrzane odbicie baru w sufitcie czarny połysk, AFAS Lounge.", caption: "Lustrzane odbicie baru", note: "Folia PVC czarny połysk, ok. 90% odbicia" },
      { src: "/images/projects/afas-lounge/02-restaurant-mode.jpg", alt: "Tryb restauracyjny AFAS Lounge.", caption: "Tryb restauracyjny", note: "Światło ciepłe, kurtyna zamknięta" },
      { src: "/images/projects/afas-lounge/03-dancefloor.jpg", alt: "Tryb klubowy z disco-ballem.", caption: "Tryb klubowy", note: "Disco-ball + ceiling reflection" },
      { src: "/images/projects/afas-lounge/04-acoustic-detail.jpg", alt: "Detal warstwy akustycznej.", caption: "Detal warstwy akustycznej", note: "Folia perforowana, absorber za sufitem" },
      { src: "/images/projects/afas-lounge/05-lighting-grid.jpg", alt: "Integracja oświetlenia LED.", caption: "Integracja oświetlenia", note: "Otwory wycięte fabrycznie" },
      { src: "/images/projects/afas-lounge/06-overview.jpg", alt: "Widok ogólny loungu AFAS.", caption: "Widok ogólny loungu", note: "250 m², multifunkcyjna przestrzeń" },
    ],
    tags: ["czarny połysk", "akustyka", "horeca", "belgia", "creneau"],
    cardImage: "/images/projects/afas-lounge/card.jpg",
    cardSummary: "250 m² czarnego połysku z akustyką w kultowym AFAS Dome. Projekt: Creneau International.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // 2024 — Rue Perrée, Paryż (ART RECHERCHE INDUSTRIE)
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "rue-perree-paryz",
    title: "Rue Perrée",
    subtitle: "Tunable White w paryskim concept storze",
    client: "ART RECHERCHE INDUSTRIE",
    venue: "Rue Perrée, Paryż",
    country: "FR",
    year: 2024,
    surface_m2: 45,
    product: "STRETCH Light — Tunable White",
    designStudio: {
      name: "Ramdane Touchami",
      url: "https://stretchplafond.be/rue-perree-art-recherche-industrie/",
      location: "Paryż, Francja",
    },
    heroImage: "/images/projects/rue-perree-paryz/hero.jpg",
    heroAlt: "Sufit STRETCH Light Tunable White w boutique concept store ART RECHERCHE INDUSTRIE przy Rue Perrée w Paryżu.",
    ogImage: "/images/projects/rue-perree-paryz/og.jpg",
    gallery: [
      { src: "/images/projects/rue-perree-paryz/01-overview.jpg", alt: "Widok ogólny butiku ART RECHERCHE INDUSTRIE z sufitem Tunable White.", caption: "Widok ogólny", note: "45 m² podświetlonej powierzchni sufitu" },
      { src: "/images/projects/rue-perree-paryz/02-warm-mode.jpg", alt: "Tryb ciepły — światło 2700 K.", caption: "Tryb ciepły", note: "Niska temperatura barwowa, klimat butikowy" },
      { src: "/images/projects/rue-perree-paryz/03-cool-mode.jpg", alt: "Tryb zimny — światło 6500 K.", caption: "Tryb zimny", note: "Wysoka temperatura barwowa, pełna ekspozycja produktu" },
      { src: "/images/projects/rue-perree-paryz/04-product-display.jpg", alt: "Ekspozycja produktu pod sufitem podświetlanym.", caption: "Ekspozycja produktu", note: "Sufit jako równomierne źródło światła" },
      { src: "/images/projects/rue-perree-paryz/05-detail.jpg", alt: "Detal styku sufitu napinanego ze ścianą.", caption: "Detal wykończenia", note: "Bezszwowa folia translucentna" },
      { src: "/images/projects/rue-perree-paryz/06-night.jpg", alt: "Butik wieczorem z sufitem jako głównym źródłem światła.", caption: "Tryb wieczorny", note: "Cały sufit jako oprawa świetlna" },
    ],
    tags: ["tunable white", "light", "retail", "francja", "paryż"],
    cardImage: "/images/projects/rue-perree-paryz/card.jpg",
    cardSummary: "45 m² sufitu STRETCH Light Tunable White w paryskim concept storze. Projekt: Ramdane Touchami.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // 2024 — Van der Valk Beveren, sala bankietowa
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "van-der-valk-beveren",
    title: "Van der Valk Beveren",
    subtitle: "aW 0,95 w sali bankietowej",
    client: "Hotel Van der Valk Beveren",
    venue: "Sala bankietowa, Beveren",
    country: "BE",
    year: 2024,
    surface_m2: 0, // not disclosed in source
    product: "Sufit akustyczny 50 mm + gwiezdne niebo + czujniki",
    designStudio: {
      name: "STRETCH (Michael Nicasens)",
      url: "https://stretchplafond.be/van-der-valk-beveren-spanplafond-feestzaal/",
      location: "Beveren-Waas, Belgia",
    },
    heroImage: "/images/projects/van-der-valk-beveren/hero.jpg",
    heroAlt: "Sufit napinany akustyczny w sali bankietowej hotelu Van der Valk w Beveren — z gwiezdnym niebem i ukrytymi technikami.",
    ogImage: "/images/projects/van-der-valk-beveren/og.jpg",
    gallery: [
      { src: "/images/projects/van-der-valk-beveren/01-hall-overview.jpg", alt: "Widok ogólny sali bankietowej Van der Valk Beveren.", caption: "Sala bankietowa", note: "Pogłos rozwiązany bez obniżania sufitu" },
      { src: "/images/projects/van-der-valk-beveren/02-perimeter.jpg", alt: "Wykończenie obwodowe sufitu napinanego.", caption: "Wykończenie obwodowe", note: "Czysty styk przy istniejących ścianach" },
      { src: "/images/projects/van-der-valk-beveren/03-tech-hatches.jpg", alt: "Klapy techniczne wbudowane w sufit.", caption: "Klapy techniczne", note: "Serwis instalacji bez demontażu sufitu" },
      { src: "/images/projects/van-der-valk-beveren/04-starry-sky.jpg", alt: "Efekt gwiezdnego nieba w sali bankietowej.", caption: "Gwiezdne niebo", note: "Punkty światłowodowe wbudowane w sufit" },
      { src: "/images/projects/van-der-valk-beveren/05-sensors.jpg", alt: "Czujniki wkomponowane w sufit napinany.", caption: "Czujniki w suficie", note: "Detekcja obecności i jakości powietrza" },
      { src: "/images/projects/van-der-valk-beveren/06-pole-detail.jpg", alt: "Wykończenie sufitu wokół słupa konstrukcyjnego.", caption: "Wykończenie wokół słupa", note: "Bezszwowy styk z elementem konstrukcyjnym" },
    ],
    tags: ["akustyka", "hotel", "feestzaal", "belgia", "gwiezdne niebo"],
    cardImage: "/images/projects/van-der-valk-beveren/card.jpg",
    cardSummary: "aW 0,95 przy systemie 50 mm — rozwiązanie pogłosu w sali bankietowej hotelu, ledwo obniżając sufit.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // 2023 — London Chapel
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "london-chapel-londyn",
    title: "London Chapel",
    subtitle: "Tkanina Camira na ścianach i suficie",
    client: "Prywatna rezydencja",
    venue: "London Chapel, Londyn",
    country: "GB",
    year: 2023,
    surface_m2: 0,
    product: "Akustyczny sufit napinany + napinane ściany z tkaniną Camira",
    designStudio: {
      name: "Upholster London",
      url: "https://www.upholster-london.com/",
      location: "Londyn, Wielka Brytania",
    },
    heroImage: "/images/projects/london-chapel-londyn/hero.jpg",
    heroAlt: "Akustyczny sufit napinany i napinane ściany pokryte tkaniną Camira w londyńskiej rezydencji-kaplicy.",
    ogImage: "/images/projects/london-chapel-londyn/og.jpg",
    gallery: [
      { src: "/images/projects/london-chapel-londyn/01-living-room.jpg", alt: "Salon z napinanymi ścianami pokrytymi tkaniną Camira.", caption: "Salon", note: "Tkanina Camira — ciepła, tradycyjna" },
      { src: "/images/projects/london-chapel-londyn/02-home-cinema.jpg", alt: "Domowe kino z akustycznym wykończeniem ścian i sufitu.", caption: "Domowe kino", note: "Pełna kontrola akustyczna pomieszczenia" },
      { src: "/images/projects/london-chapel-londyn/03-bedroom.jpg", alt: "Sypialnia z tekstylnymi ścianami napinanymi.", caption: "Sypialnia", note: "Cisza i miękka faktura" },
      { src: "/images/projects/london-chapel-londyn/04-textile-detail.jpg", alt: "Detal faktury tkaniny Camira.", caption: "Detal tkaniny", note: "Camira — producent tekstyliów kontraktowych" },
      { src: "/images/projects/london-chapel-londyn/05-perimeter.jpg", alt: "Wykończenie obwodowe ścian napinanych.", caption: "Wykończenie obwodowe", note: "Profile ukryte za tkaniną" },
      { src: "/images/projects/london-chapel-londyn/06-chapel-feel.jpg", alt: "Atmosfera kaplicy — tradycyjny, ciepły charakter wnętrza.", caption: "Atmosfera kaplicy", note: "Tradycyjny charakter zachowany" },
    ],
    tags: ["wandbekleding", "akustyka", "camira", "rezydencja", "wielka brytania"],
    cardImage: "/images/projects/london-chapel-londyn/card.jpg",
    cardSummary: "Londyńska rezydencja-kaplica wykończona tkaniną Camira na ścianach i suficie. Realizacja: Upholster London.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // 2022 — Polette Antwerpia
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "polette-antwerpia",
    title: "Polette Antwerpia",
    subtitle: "Sufit-pianino w 60-metrowym sklepie",
    client: "Polette",
    venue: "Polette Store, Antwerpia",
    country: "BE",
    year: 2022,
    surface_m2: 60,
    product: "Akustyczny sufit translucentny — rzeźba w kształcie wieka fortepianu",
    designStudio: {
      name: "zU-studio (Javier Zubiria)",
      url: "http://zu-studio.com/work/imagine-polette/",
      location: "Amsterdam, Holandia",
    },
    heroImage: "/images/projects/polette-antwerpia/hero.jpg",
    heroAlt: "Sufit napinany w kształcie wieka fortepianu w sklepie Polette w Antwerpii — koncept Imagine zaprojektowany przez zU-studio.",
    ogImage: "/images/projects/polette-antwerpia/og.jpg",
    gallery: [
      { src: "/images/projects/polette-antwerpia/01-piano-ceiling.jpg", alt: "Rzeźba sufitowa w kształcie otwartego wieka fortepianu.", caption: "Wieko fortepianu w suficie", note: "20 m głębokości showroomu" },
      { src: "/images/projects/polette-antwerpia/02-keyboard-wall.jpg", alt: "Ściana z 88 klawiszami fortepianowymi w sklepie Polette.", caption: "Ściana z 88 klawiszami", note: "Białe klawisze — lustra, czarne — półki" },
      { src: "/images/projects/polette-antwerpia/03-mirror-keys.jpg", alt: "Klawisze-lustra od podłogi do sufitu w Polette.", caption: "Klawisze-lustra", note: "Efekt nieskończoności" },
      { src: "/images/projects/polette-antwerpia/04-bench.jpg", alt: "Centralna biała kwadratowa ławka — odniesienie do Bed-In Lennona.", caption: "Centralna ławka", note: "Odniesienie do Bed-In Lennona" },
      { src: "/images/projects/polette-antwerpia/05-light-sensors.jpg", alt: "Klawisze z sensorami — interaktywny instrument muzyczny.", caption: "Interaktywne klawisze", note: "Sensory + sygnały świetlne" },
      { src: "/images/projects/polette-antwerpia/06-translucent.jpg", alt: "Detal akustycznego sufitu translucentnego.", caption: "Sufit translucentny", note: "Akustyka + przepuszczalność światła" },
    ],
    tags: ["retail", "translucentny", "akustyka", "antwerpia", "zu-studio"],
    cardImage: "/images/projects/polette-antwerpia/card.jpg",
    cardSummary: "60 m² akustycznego sufitu translucentnego jako rzeźba-fortepian w sklepie Polette. Projekt: zU-studio.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // 2019 — Vier Emmershof, Lokeren
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "vier-emmershof-lokeren",
    title: "Vier Emmershof",
    subtitle: "Las wchodzi do środka",
    client: "Prywatna rezydencja",
    venue: "'t Vier Emmershof, Lokeren",
    country: "BE",
    year: 2019,
    surface_m2: 0,
    product: "Akustyczny sufit napinany",
    designStudio: {
      name: "Inzicht Architecten",
      url: "https://inzichtarchitecten.be/woning/veh-167/",
      location: "Belgia",
    },
    heroImage: "/images/projects/vier-emmershof-lokeren/hero.jpg",
    heroAlt: "Akustyczny sufit napinany w prywatnej rezydencji 't Vier Emmershof w Lokeren — projekt Inzicht Architecten z widokiem na las.",
    ogImage: "/images/projects/vier-emmershof-lokeren/og.jpg",
    gallery: [
      { src: "/images/projects/vier-emmershof-lokeren/01-glass-facade.jpg", alt: "Przeszklona tylna fasada otwierająca dom na las.", caption: "Przeszklenie na las", note: "Pełna przeszklenie tylnej elewacji" },
      { src: "/images/projects/vier-emmershof-lokeren/02-living-area.jpg", alt: "Otwarty salon z widokiem na drzewa.", caption: "Salon", note: "Akustyka uspokaja otwartą przestrzeń" },
      { src: "/images/projects/vier-emmershof-lokeren/03-void.jpg", alt: "Przestronna antresola z akustycznym sufitem.", caption: "Antresola", note: "Wielopoziomowa przestrzeń bez echa" },
      { src: "/images/projects/vier-emmershof-lokeren/04-natural-finish.jpg", alt: "Naturalne wykończenia ścian harmonizujące z lasem.", caption: "Naturalne wykończenia", note: "Materiały spójne z otoczeniem" },
      { src: "/images/projects/vier-emmershof-lokeren/05-detail.jpg", alt: "Detal styku sufitu napinanego z drewnianym elementem.", caption: "Detal sufitu", note: "Bezszwowy styk z drewnem" },
      { src: "/images/projects/vier-emmershof-lokeren/06-forest-view.jpg", alt: "Widok z domu na zachowane stare świerki w ogrodzie.", caption: "Widok na las", note: "Największe świerki zachowane przy budowie" },
    ],
    tags: ["akustyka", "rezydencja", "lokeren", "belgia", "inzicht"],
    cardImage: "/images/projects/vier-emmershof-lokeren/card.jpg",
    cardSummary: "Akustyczny sufit w prywatnej rezydencji wkomponowanej w las. Projekt: Inzicht Architecten.",
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
    heroAlt: "Sufit napinany akustyczny z eliptycznymi wycięciami w kancelarii notarialnej Ampe Anthony w Kruibeke, Belgia.",
    ogImage: "/images/projects/kancelaria-ampe-kruibeke/og.jpg",
    gallery: [
      { src: "/images/projects/kancelaria-ampe-kruibeke/01-ellipse-cutout.jpg", alt: "Eliptyczne wycięcie w suficie akustycznym, Kancelaria Ampe.", caption: "Eliptyczne wycięcie", note: "Iluzja wyższej przestrzeni przy wysokości 260 cm" },
      { src: "/images/projects/kancelaria-ampe-kruibeke/02-reception.jpg", alt: "Strefa recepcji z gładkim sufitem akustycznym.", caption: "Strefa recepcji", note: "Pogłos 0,6 s — wnętrze wyraźnie ciche" },
      { src: "/images/projects/kancelaria-ampe-kruibeke/03-perimeter.jpg", alt: "Detal białych profili PVC obwodowych sufitu napinanego.", caption: "Wykończenie obwodowe", note: "Białe profile PVC, czysty styk ze ścianą" },
      { src: "/images/projects/kancelaria-ampe-kruibeke/04-lighting.jpg", alt: "Integracja oświetlenia Wever & Ducre.", caption: "Integracja oświetlenia", note: "Wever & Ducre + Delta Light, otwory fabryczne" },
      { src: "/images/projects/kancelaria-ampe-kruibeke/05-meeting-room.jpg", alt: "Sala konferencyjna z polerowanym betonem i sufitem akustycznym.", caption: "Sala konferencyjna", note: "Twarda podłoga, miękka akustyka sufitu" },
      { src: "/images/projects/kancelaria-ampe-kruibeke/06-overview.jpg", alt: "Widok ogólny 350-metrowej kancelarii Ampe Anthony.", caption: "Widok ogólny", note: "350 m² powierzchni biurowej" },
    ],
    tags: ["akustyka", "biuro", "polyester wool", "belgia", "ante architecten"],
    cardImage: "/images/projects/kancelaria-ampe-kruibeke/card.jpg",
    cardSummary: "350 m² akustyki dla kancelarii notarialnej. Pogłos 0,6 s. Projekt: Ante Architecten.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getOtherProjects(currentSlug: string, limit = 3): Project[] {
  return projects.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
