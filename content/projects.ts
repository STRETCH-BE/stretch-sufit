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
      { src: "/images/projects/rue-perree-paryz/01-boutique.jpg", alt: "Wnętrze butiku ART RECHERCHE INDUSTRIE z podświetlanym sufitem napinanym Tunable White.", caption: "Widok ogólny butiku", note: "Fot. Quentin Lacombe" },
      { src: "/images/projects/rue-perree-paryz/02-ekspozycja.jpg", alt: "Ekspozycja produktów pod równomiernie świecącym sufitem tekstylnym.", caption: "Ekspozycja pod sufitem świetlnym", note: "Fot. Quentin Lacombe" },
      { src: "/images/projects/rue-perree-paryz/03-sufit-swietlny.jpg", alt: "Bezcieniowy, podświetlany sufit napinany — cała powierzchnia jako oprawa świetlna.", caption: "Bezcieniowy sufit świetlny", note: "Równomierna luminancja całej powierzchni" },
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
      { src: "/images/projects/polette-antwerpia/01-widok-ogolny.jpg", alt: "Widok ogólny salonu polette w Antwerpii z podświetlaną rzeźbą sufitową.", caption: "Widok ogólny salonu", note: "Wizual: zU-studio architecture" },
      { src: "/images/projects/polette-antwerpia/02-wnetrze.jpg", alt: "Wnętrze salonu optycznego polette — strefa ekspozycji opraw.", caption: "Strefa ekspozycji opraw", note: "Wizual: zU-studio architecture" },
      { src: "/images/projects/polette-antwerpia/03-detal.jpg", alt: "Detal translucentnej powłoki sufitu napinanego nad ekspozycją.", caption: "Detal powłoki translucentnej", note: "Światło rozproszone bez olśnienia" },
      { src: "/images/projects/polette-antwerpia/04-sufit.jpg", alt: "Podświetlany sufit napinany prowadzący klienta w głąb salonu.", caption: "Sufit świetlny w osi salonu", note: "Wizual: zU-studio architecture" },
      { src: "/images/projects/polette-antwerpia/05-ekspozycja.jpg", alt: "Ekspozycja okularów pod miękkim światłem sufitu napinanego.", caption: "Ekspozycja pod miękkim światłem", note: "Wizual: zU-studio architecture" },
      { src: "/images/projects/polette-antwerpia/06-strefa.jpg", alt: "Strefa przymiarek salonu polette z rzeźbą sufitową.", caption: "Strefa przymiarek", note: "Wizual: zU-studio architecture" },
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
      { src: "/images/projects/vier-emmershof-lokeren/03.jpg", alt: "Strefa dzienna apartamentu Vier Emmershof z gładkim sufitem akustycznym.", caption: "Strefa dzienna", note: "Sufit akustyczny bez widocznych paneli" },
      { src: "/images/projects/vier-emmershof-lokeren/04.jpg", alt: "Minimalistyczne wnętrze z sufitem napinanym i zabudową na wymiar.", caption: "Gabinet domowy", note: "Oświetlenie zintegrowane w powłoce" },
      { src: "/images/projects/vier-emmershof-lokeren/01.jpg", alt: "Detal wnętrza apartamentu — sufit akustyczny nad strefą wypoczynku.", caption: "Strefa wypoczynku", note: "Wełna poliestrowa D40/50 za powłoką" },
      { src: "/images/projects/vier-emmershof-lokeren/02.jpg", alt: "Sufit napinany w komunikacji apartamentu.", caption: "Komunikacja", note: "Jednolita płaszczyzna bez łączeń" },
      { src: "/images/projects/vier-emmershof-lokeren/08.jpg", alt: "Wysokie wnętrze apartamentu z sufitem akustycznym.", caption: "Przestrzeń dwukondygnacyjna", note: "Kontrola pogłosu w otwartej przestrzeni" },
      { src: "/images/projects/vier-emmershof-lokeren/11.jpg", alt: "Kuchnia i jadalnia apartamentu Vier Emmershof.", caption: "Kuchnia i jadalnia", note: "Sufit akustyczny nad strefą dzienną" },
      { src: "/images/projects/vier-emmershof-lokeren/12.jpg", alt: "Salon apartamentu z sufitem napinanym.", caption: "Salon", note: "Detal styku powłoki ze ścianą" },
      { src: "/images/projects/vier-emmershof-lokeren/06.jpg", alt: "Sypialnia z akustycznym sufitem napinanym.", caption: "Sypialnia", note: "Cisza w strefie nocnej" },
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

  // ═══════════════════════════════════════════════════════════════════
  // 2024 — BNP Paribas Fortis, Bruksela (Jaspers-Eyers Architects)
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "bnp-paribas-fortis-bruksela",
    title: "BNP Paribas Fortis",
    subtitle: "Światło i akustyka w centrali banku",
    client: "BNP Paribas Fortis",
    venue: "Warandeberg, Bruksela",
    country: "BE",
    year: 2024,
    surface_m2: 2000,
    product: "STRETCH Light + STRETCH Acoustic — tekstylne sufity świetlne i akustyczne",
    designStudio: {
      name: "Jaspers-Eyers Architects",
      url: "https://www.jaspers-eyers.be",
      location: "Bruksela, Belgia",
    },
    heroImage: "/images/projects/bnp-paribas-fortis-bruksela/hero.jpg",
    heroAlt:
      "Barista Bar w centrali BNP Paribas Fortis w Brukseli — okrągły tekstylny klosz świetlny nad ladą.",
    ogImage: "/images/projects/bnp-paribas-fortis-bruksela/og.jpg",
    gallery: [
      { src: "/images/projects/bnp-paribas-fortis-bruksela/05-curved.jpg", alt: "Zakrzywione tekstylne klosze sufitowe nad strefami spotkań.", caption: "Zakrzywione formy tekstylne", note: "Tekstylia napinane na formach 3D" },
      { src: "/images/projects/bnp-paribas-fortis-bruksela/02-spanplafond.jpg", alt: "Sufit napinany w strefie gastronomicznej centrali banku.", caption: "Strefa gastronomiczna", note: "STRETCH Light — światło bez olśnienia" },
      { src: "/images/projects/bnp-paribas-fortis-bruksela/03-wnetrze.jpg", alt: "Wnętrze biurowe BNP Paribas Fortis z sufitem akustycznym.", caption: "Strefa pracy", note: "STRETCH Acoustic w przestrzeni open space" },
      { src: "/images/projects/bnp-paribas-fortis-bruksela/04-wnetrze-2.jpg", alt: "Strefa spotkań z tekstylnym sufitem świetlnym.", caption: "Strefa spotkań", note: "Światło i akustyka w jednej powłoce" },
      { src: "/images/projects/bnp-paribas-fortis-bruksela/06-curved-2.jpg", alt: "Boksy do pracy pod zakrzywionymi kloszami tekstylnymi.", caption: "Boksy do pracy", note: "Tłumienie pogłosu nad każdym boksem" },
      { src: "/images/projects/bnp-paribas-fortis-bruksela/07-budynek.jpg", alt: "Budynek centrali BNP Paribas Fortis przy Warandeberg w Brukseli.", caption: "Siedziba przy Warandeberg", note: "Trzy kondygnacje stref wspólnych" },
    ],
    tags: ["stretch light", "stretch acoustic", "biuro", "bank", "belgia", "bruksela"],
    cardImage: "/images/projects/bnp-paribas-fortis-bruksela/card.jpg",
    cardSummary:
      "2000 m² tekstylnych sufitów świetlnych i akustycznych w brukselskiej centrali banku. Projekt: Jaspers-Eyers Architects.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // 2019–2023 — citizenM, prefabrykowane łazienki (USA + Europa)
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "citizenm-prefab-lazienki",
    title: "citizenM",
    subtitle: "Prefab z sufitem świetlnym w skali sieci hoteli",
    client: "citizenM Hotels",
    venue: "Miami, Nowy Jork, Chicago, Seattle, San Francisco, Los Angeles i inne",
    country: "US",
    year: 2023,
    yearDisplay: "2019–2023",
    surface_m2: 0,
    product: "STRETCH Backlit — tekstylny sufit świetlny w prefabrykowanych unitach łazienkowych",
    heroImage: "/images/projects/citizenm-prefab-lazienki/hero.jpg",
    heroAlt:
      "Pokój hotelowy citizenM z prefabrykowaną łazienką i podświetlanym sufitem tekstylnym w kabinie.",
    ogImage: "/images/projects/citizenm-prefab-lazienki/og.jpg",
    gallery: [
      { src: "/images/projects/citizenm-prefab-lazienki/01-lazienka.jpg", alt: "Prefabrykowana łazienka citizenM z podświetlanym sufitem tekstylnym, w tle pokój hotelowy.", caption: "Unit łazienkowy w pokoju", note: "STRETCH Backlit — sufit jako oprawa świetlna" },
      { src: "/images/projects/citizenm-prefab-lazienki/02-unit.jpg", alt: "Kabina prysznicowa prefabrykowanego unitu łazienkowego citizenM.", caption: "Kabina prefabrykowana", note: "Montaż powłoki poza placem budowy" },
    ],
    tags: ["prefab", "backlit", "hotel", "horeca", "usa", "citizenm"],
    cardImage: "/images/projects/citizenm-prefab-lazienki/card.jpg",
    cardSummary:
      "Setki prefabrykowanych łazienek z tekstylnym sufitem świetlnym dla sieci citizenM — od Miami po San Francisco. Partner: Saniskill.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // 2025 — Candor, Sint-Martens-Latem (Form Design + Goedele Perdu)
  // ═══════════════════════════════════════════════════════════════════
  {
    slug: "candor-sint-martens-latem",
    title: "Candor",
    subtitle: "Akustyka biura, której nie widać",
    client: "Candor (deweloper)",
    venue: "Kortrijksesteenweg 66-68, Sint-Martens-Latem",
    country: "BE",
    year: 2025,
    surface_m2: 0,
    product: "Akustyczny sufit napinany + LED + absorpcja w przestrzeni międzystropowej",
    designStudio: {
      name: "Form Design · Goedele Perdu",
      url: "https://formdesign.be",
      location: "Dendermonde, Belgia",
    },
    heroImage: "/images/projects/candor-sint-martens-latem/hero.jpg",
    heroAlt:
      "Kuchnia biura dewelopera Candor w Sint-Martens-Latem z gładkim akustycznym sufitem napinanym.",
    ogImage: "/images/projects/candor-sint-martens-latem/og.jpg",
    gallery: [
      { src: "/images/projects/candor-sint-martens-latem/02.jpg", alt: "Open space biura Candor z akustycznym sufitem napinanym i zintegrowanym LED.", caption: "Open space", note: "RT60 poniżej 0,8 s" },
      { src: "/images/projects/candor-sint-martens-latem/03.jpg", alt: "Sala spotkań z niewidoczną akustyką sufitową.", caption: "Sala spotkań", note: "RT60 poniżej 0,6 s" },
      { src: "/images/projects/candor-sint-martens-latem/04.jpg", alt: "Strefa pracy cichej w biurze Candor.", caption: "Strefa pracy cichej", note: "Absorpcja ukryta w przestrzeni międzystropowej" },
      { src: "/images/projects/candor-sint-martens-latem/05.jpg", alt: "Detal oświetlenia LED zintegrowanego w suficie napinanym.", caption: "Zintegrowane oświetlenie", note: "LED w płaszczyźnie powłoki" },
      { src: "/images/projects/candor-sint-martens-latem/06.jpg", alt: "Strefa relaksu biura z sufitem akustycznym.", caption: "Strefa relaksu", note: "Projekt wnętrza: Goedele Perdu" },
      { src: "/images/projects/candor-sint-martens-latem/07.jpg", alt: "Kuchnia biurowa z gładkim sufitem napinanym.", caption: "Kuchnia biurowa", note: "Estetyka bez widocznych paneli" },
      { src: "/images/projects/candor-sint-martens-latem/08.jpg", alt: "Gabinet z akustycznym sufitem napinanym.", caption: "Gabinet", note: "Cisza w pomieszczeniach zamkniętych" },
      { src: "/images/projects/candor-sint-martens-latem/09.jpg", alt: "Komunikacja biura Candor z jednolitym sufitem.", caption: "Komunikacja", note: "Jedna płaszczyzna przez całe piętro" },
    ],
    tags: ["akustyka", "biuro", "led", "belgia", "form design"],
    cardImage: "/images/projects/candor-sint-martens-latem/card.jpg",
    cardSummary:
      "Renowacja biura dewelopera Candor — akustyka w pełni ukryta w sufitach napinanych z LED. RT60 < 0,8 s. Konsultacja: Form Design.",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getOtherProjects(currentSlug: string, limit = 3): Project[] {
  return projects.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
