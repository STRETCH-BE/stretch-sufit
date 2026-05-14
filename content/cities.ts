/**
 * 17 Polish cities — full content for /sufity-napinane/[slug] pages.
 * File path: /content/cities.ts
 *
 * Each city has:
 *   - Polish grammar variants (locative for SEO copy)
 *   - Districts (for the 3 biggest cities — empty array for smaller ones)
 *   - 2-3 sentence intro paragraph contextualized to the city
 *   - 3 trust blocks (standardized structure, city-specific copy)
 *   - 4 FAQ entries (used both visually and as FAQPage JSON-LD)
 *   - Placeholder Unsplash image (swap to /images/cities/{slug}.jpg later)
 *
 * To add a new city: add an entry here, then sitemap and routing auto-pick it up.
 */

import type { City } from "@/types";

export const cities: City[] = [
  // ════════════════════════════════════════════════════════════
  // Top 3 — with district pages
  // ════════════════════════════════════════════════════════════
  {
    slug: "warszawa",
    name: "Warszawa",
    region: "Mazowieckie",
    locative: "w Warszawie",
    populationDisplay: "1,86 mln mieszkańców",
    distanceFromHq: 220,
    districts: [
      "Śródmieście",
      "Mokotów",
      "Żoliborz",
      "Wilanów",
      "Ursynów",
      "Wola",
      "Bemowo",
      "Bielany",
      "Saska Kępa",
      "Praga-Południe",
    ],
    intro:
      "Warszawa to dla nas najbardziej wymagający rynek w Polsce. Klienci w stolicy oczekują premium — designerskich apartamentów na Mokotowie, lofts na Pradze, klasycznych mieszkań w Śródmieściu. Realizujemy projekty od 20 m² po pełne piętra biurowe na Wilanowie i Ursynowie. Nasza ekipa jest u Ciebie w 2–3 godziny od centrali w Częstochowie.",
    trustBlocks: [
      {
        title: "Lokalna obecność, globalny system",
        body: "Część grupy STRETCH® — belgijska technologia, polska produkcja, montaż przez przeszkolone ekipy w całej Warszawie. Bez podwykonawców, bez „ekip z polecenia".",
      },
      {
        title: "Doświadczenie w stolicy",
        body: "Realizacje w apartamentach na Mokotowie, lofts na Pradze, mieszkaniach w Śródmieściu i biurach na Wilanowie. Znamy specyfikę warszawskich wnętrz.",
      },
      {
        title: "Pełen pakiet w 1 dzień",
        body: "Pomiar, dostawa materiałów i montaż — wszystko w jednym dniu roboczym. Bez kurzu, bez prac wykończeniowych, bez ingerencji w istniejący wystrój.",
      },
    ],
    faq: [
      {
        q: "Czy montujecie sufity napinane w całej Warszawie?",
        a: "Tak — obsługujemy wszystkie dzielnice: Mokotów, Żoliborz, Wilanów, Ursynów, Wolę, Bemowo, Bielany, Pragę-Północ i Południe, Saską Kępę oraz Śródmieście. Realizujemy też zlecenia w okolicach: Piaseczno, Pruszków, Legionowo, Marki.",
      },
      {
        q: "Ile kosztuje sufit napinany w Warszawie?",
        a: "Cena zależy od powierzchni, typu folii (PVC, poliester, akustyczny, fotodruk) i oświetlenia. Warszawskie realizacje zaczynamy od ok. 180 zł/m². Bezpłatny pomiar i wycena na miejscu — bez zobowiązań.",
      },
      {
        q: "Jak szybko dojeżdżacie do klienta w Warszawie?",
        a: "Pomiar realizujemy zazwyczaj w ciągu 3–5 dni roboczych od zgłoszenia. Sam montaż trwa 1 dzień — po wcześniejszym dostarczeniu materiału z naszej produkcji w Częstochowie.",
      },
      {
        q: "Czy oferujecie sufity akustyczne dla biur w Warszawie?",
        a: "Tak. Warszawa to nasz największy rynek B2B — montujemy sufity akustyczne klasy A2 dla biur open-space na Wilanowie, Mokotowie i Służewcu, restauracji w Śródmieściu i studiów na Pradze. Redukcja pogłosu do 75%.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80",
    imageAlt: "Sufit napinany w apartamencie na warszawskim Mokotowie",
  },
  {
    slug: "krakow",
    name: "Kraków",
    region: "Małopolskie",
    locative: "w Krakowie",
    populationDisplay: "803 tys. mieszkańców",
    distanceFromHq: 116,
    districts: [
      "Stare Miasto",
      "Kazimierz",
      "Podgórze",
      "Krowodrza",
      "Zwierzyniec",
      "Bronowice",
      "Nowa Huta",
    ],
    intro:
      "Kraków łączy zabytkowe kamienice ze współczesnymi apartamentowcami — i każdy z tych kontekstów wymaga innego podejścia do sufitu. Realizujemy projekty w Kazimierzu, Starym Mieście, na Podgórzu i w Nowej Hucie. Krótki dojazd z naszej centrali w Częstochowie (116 km) pozwala nam działać szybko, nawet przy krótkich terminach.",
    trustBlocks: [
      {
        title: "Doświadczenie w zabytkowych wnętrzach",
        body: "Montaż w kamienicach Kazimierza i Starego Miasta — bez ingerencji w oryginalne sufity. Sufit napinany to często jedyna opcja w lokalach pod ochroną konserwatora.",
      },
      {
        title: "Blisko centrali",
        body: "Częstochowa to 116 km — ekipa jest u Ciebie w 2 godziny. Skrócony termin pomiaru, łatwiejsza koordynacja z producentem materiałów.",
      },
      {
        title: "Akustyka dla gastronomii i biur",
        body: "Restauracje na Kazimierzu, studia coworkingowe na Podgórzu, lofty na Zabłociu — wszędzie tam, gdzie pogłos jest problemem.",
      },
    ],
    faq: [
      {
        q: "Czy obsługujecie krakowskie kamienice pod ochroną konserwatora?",
        a: "Tak — sufity napinane montujemy bezinwazyjnie na profilach przyściennych. Nie ingerujemy w oryginalny sufit, nie wymagamy zgody konserwatora w większości przypadków (zalecamy jednak zawsze konsultację z zarządcą).",
      },
      {
        q: "Ile kosztuje sufit napinany w Krakowie?",
        a: "Krakowskie realizacje zaczynamy od ok. 170 zł/m² za standardowy sufit PVC z montażem. Cena rośnie przy specjalistycznych rozwiązaniach (akustyka, fotodruk, LED) — pełna wycena na podstawie bezpłatnego pomiaru.",
      },
      {
        q: "Jakie dzielnice Krakowa obsługujecie?",
        a: "Wszystkie — Stare Miasto, Kazimierz, Podgórze, Krowodrzę, Zwierzyniec, Bronowice, Nową Hutę oraz okoliczne miejscowości: Wieliczka, Skawina, Niepołomice, Krzeszowice.",
      },
      {
        q: "Czy mogę zamówić sufit z fotodrukiem do restauracji?",
        a: "Tak. Fotodruk to popularny wybór wśród krakowskich restauratorów — pozwala na pełną dowolność wzoru: nadruk autorskich grafik, motywów historycznych, klimatycznych zdjęć. Rozdzielczość drukarska, gwarancja koloru 15 lat.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&q=80",
    imageAlt: "Sufit napinany w krakowskiej kamienicy na Kazimierzu",
  },
  {
    slug: "wroclaw",
    name: "Wrocław",
    region: "Dolnośląskie",
    locative: "we Wrocławiu",
    populationDisplay: "672 tys. mieszkańców",
    distanceFromHq: 180,
    districts: [
      "Stare Miasto",
      "Śródmieście",
      "Krzyki",
      "Fabryczna",
      "Psie Pole",
      "Sępolno",
      "Karłowice",
    ],
    intro:
      "Wrocław to dynamicznie rosnący rynek — nowe apartamentowce na Krzykach, biurowce na Fabrycznej, lofts na Psim Polu. Naszym wrocławskim klientom dostarczamy projekty premium z centrali w Częstochowie (180 km), z gwarancją jednodniowego montażu i 15-letnią gwarancją materiałową.",
    trustBlocks: [
      {
        title: "Apartamenty i biura",
        body: "Wrocław to nasz drugi największy rynek mieszkaniowy — projekty zarówno w nowych apartamentowcach na Krzykach, jak i w klasycznych kamienicach na Śródmieściu.",
      },
      {
        title: "Pełen system, jeden wykonawca",
        body: "Profile, membrany, oświetlenie LED — wszystko z jednego źródła. Bez koordynacji między dostawcami, bez przerzucania odpowiedzialności.",
      },
      {
        title: "15 lat gwarancji",
        body: "Materiałowa gwarancja producenta STRETCH®. Najdłuższa na rynku dla sufitów napinanych w Polsce.",
      },
    ],
    faq: [
      {
        q: "Jakie obszary Wrocławia obsługujecie?",
        a: "Pełen Wrocław: Stare Miasto, Śródmieście, Krzyki, Fabryczną, Psie Pole, Sępolno, Karłowice. Realizujemy też zlecenia w aglomeracji: Bielany Wrocławskie, Kobierzyce, Oława, Trzebnica.",
      },
      {
        q: "Czy montujecie sufity LED?",
        a: "Tak. Wrocław to jeden z najlepszych rynków dla sufitów świetlnych LED — od liniowych podświetleń obwodowych po pełne sufity świetlne i efekt gwiezdnego nieba. Sterowanie ze smartfona, integracja z systemami smart home.",
      },
      {
        q: "Ile trwa montaż sufitu napinanego we Wrocławiu?",
        a: "Jeden dzień roboczy dla standardowej powierzchni (do 50 m²). Większe powierzchnie — do 2 dni. Nie wymagamy wyprowadzania z pomieszczenia mebli ani trwałej ingerencji w istniejące wykończenie.",
      },
      {
        q: "Czy obsługujecie inwestycje deweloperskie we Wrocławiu?",
        a: "Tak. Współpracujemy z deweloperami i biurami architektonicznymi przy całych inwestycjach (apartamentowce, biurowce, obiekty hotelowe). Indywidualne warunki dla projektów powyżej 500 m².",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80",
    imageAlt: "Sufit napinany w apartamencie we Wrocławiu",
  },

  // ════════════════════════════════════════════════════════════
  // Tier 2 — major cities, city-level only
  // ════════════════════════════════════════════════════════════
  {
    slug: "poznan",
    name: "Poznań",
    region: "Wielkopolskie",
    locative: "w Poznaniu",
    populationDisplay: "537 tys. mieszkańców",
    distanceFromHq: 290,
    districts: [],
    intro:
      "Poznań to silny rynek B2B — duża baza firm technologicznych i biur. Nasi klienci w Poznaniu najczęściej zamawiają sufity akustyczne do open-space oraz designerskie rozwiązania LED do apartamentów. Obsługujemy całe miasto oraz aglomerację (Tarnowo Podgórne, Swarzędz, Luboń).",
    trustBlocks: [
      {
        title: "Akustyka dla biur",
        body: "Sufity akustyczne klasy A2 redukują pogłos w open-space do 75%. To różnica między biurem, w którym da się rozmawiać przez telefon, a takim, w którym wszyscy nakładają słuchawki.",
      },
      {
        title: "Profesjonalny montaż",
        body: "Ekipa STRETCH® z własnymi narzędziami i protokołem. Bez wynajętych monterów „dorobkowych", bez kompromisów w jakości.",
      },
      {
        title: "Pełna gama produktów",
        body: "Poliester, PVC, akustyczny, fotodruk, świetlny — wszystko z jednego producenta, z jedną gwarancją.",
      },
    ],
    faq: [
      {
        q: "Czy montujecie sufity napinane w Poznaniu?",
        a: "Tak — obsługujemy cały Poznań oraz aglomerację (Tarnowo Podgórne, Swarzędz, Luboń, Komorniki). Montaż w 1 dzień, 15 lat gwarancji.",
      },
      {
        q: "Ile kosztuje sufit napinany w Poznaniu?",
        a: "Cena od ok. 180 zł/m² za standardowy sufit PVC. Akustyczne i LED — wycena indywidualna na podstawie bezpłatnego pomiaru.",
      },
      {
        q: "Czy oferujecie sufity akustyczne do poznańskich biur?",
        a: "Tak — to nasza najczęściej wybierana opcja dla biur w Poznaniu. Sufit akustyczny klasy A2 redukuje pogłos do 75%, instalowany w 1 dzień bez wyprowadzania zespołu.",
      },
      {
        q: "Jak długo czeka się na pomiar w Poznaniu?",
        a: "Standardowo 5–7 dni roboczych. Przy pilnych terminach realizujemy pomiary też w soboty — zapytaj o priority booking.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80",
    imageAlt: "Akustyczny sufit napinany w poznańskim biurze",
  },
  {
    slug: "gdansk",
    name: "Gdańsk",
    region: "Pomorskie",
    locative: "w Gdańsku",
    populationDisplay: "486 tys. mieszkańców",
    distanceFromHq: 470,
    districts: [],
    intro:
      "Trójmiasto — Gdańsk, Sopot, Gdynia — to dla nas wymagający rynek prestiżowych projektów: nadmorskie apartamenty, butikowe hotele, lokale gastronomiczne. Mimo dystansu od centrali w Częstochowie (470 km), realizujemy projekty trójmiejskie z pełną mobilną ekipą i materiałem dostarczanym bezpośrednio z produkcji.",
    trustBlocks: [
      {
        title: "Premium dla nadmorskich apartamentów",
        body: "Sufity napinane PVC i poliestrowe sprawdzają się w apartamentach z widokiem na morze — odporne na wilgoć, łatwe w utrzymaniu, eleganckie wizualnie.",
      },
      {
        title: "Hotele i gastronomia",
        body: "Akustyczne i designerskie sufity dla butikowych hoteli w Gdańsku i Sopocie. Fotodruk dla restauracji z autorskim wystrojem.",
      },
      {
        title: "Mobilna ekipa",
        body: "Dojeżdżamy z Częstochowy z pełnym wyposażeniem i materiałem produkcyjnym. Montaż w 1 dzień, nawet w trakcie sezonu wakacyjnego.",
      },
    ],
    faq: [
      {
        q: "Czy obsługujecie całe Trójmiasto?",
        a: "Tak — Gdańsk, Sopot, Gdynia, a także okolice (Pruszcz Gdański, Reda, Rumia). Realizujemy projekty zarówno prywatne, jak i komercyjne.",
      },
      {
        q: "Ile czeka się na realizację w Gdańsku?",
        a: "Pomiar 7–10 dni roboczych ze względu na odległość — przy montażu materiał dostarczamy z naszej produkcji w Częstochowie, sam montaż 1 dzień.",
      },
      {
        q: "Czy sufity napinane sprawdzą się w nadmorskim klimacie?",
        a: "Tak. PVC jest odporne na wilgoć i wahania temperatury, nie absorbuje wody, nie rozszerza się. Idealny wybór dla mieszkań w pierwszej linii brzegowej.",
      },
      {
        q: "Czy montujecie w hotelach i lokalach gastronomicznych?",
        a: "Tak — to znaczna część naszych trójmiejskich projektów. Akustyka dla restauracji, fotodruk dla butikowych hoteli, LED dla SPA i wellness.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80",
    imageAlt: "Sufit napinany w gdańskim apartamencie z widokiem na morze",
  },
  {
    slug: "lodz",
    name: "Łódź",
    region: "Łódzkie",
    locative: "w Łodzi",
    populationDisplay: "660 tys. mieszkańców",
    distanceFromHq: 110,
    districts: [],
    intro:
      "Łódź to dla nas blisko — 110 km od centrali w Częstochowie. To miasto z silną tradycją wnętrzarską, gdzie sufity napinane montujemy zarówno w odnawianych kamienicach na ul. Piotrkowskiej, jak i w nowoczesnych apartamentowcach na Polesiu i Górnej. Krótki dojazd oznacza elastyczność i krótsze terminy realizacji.",
    trustBlocks: [
      {
        title: "Blisko, szybko, elastycznie",
        body: "110 km od centrali — ekipa jest u Ciebie w 2 godziny. Krótsze terminy pomiaru, łatwiejsza koordynacja.",
      },
      {
        title: "Loftowe wnętrza",
        body: "Łódzkie lofts w pofabrycznych przestrzeniach — wysokie sufity, wymagające rozwiązania. Sufit napinany dobiera się tu z myślą o akustyce i industrialnym charakterze.",
      },
      {
        title: "Renowacje kamienic",
        body: "Łódzka secesja zasługuje na rozwiązania, które jej nie zniszczą. Sufity napinane montujemy bezinwazyjnie — ratunek dla popękanych sufitów w starszych budynkach.",
      },
    ],
    faq: [
      {
        q: "Jakie obszary Łodzi obsługujecie?",
        a: "Pełna Łódź — Śródmieście, Bałuty, Polesie, Górna, Widzew. Plus okolice: Pabianice, Zgierz, Aleksandrów Łódzki, Konstantynów Łódzki.",
      },
      {
        q: "Czy sufit napinany pomoże w popękanym suficie w łódzkiej kamienicy?",
        a: "Tak — to częsty powód zamówienia w Łodzi. Sufit napinany przykrywa pęknięcia, zacieki i nierówności bez ingerencji w oryginalny sufit. Montaż 1 dzień, gładka powierzchnia gotowa od razu.",
      },
      {
        q: "Czy montujecie sufity w łódzkich loftach?",
        a: "Tak. Lofts na Polesiu i w Manufakturze to wymagające projekty — wysokie sufity, akustyka, dobór materiału do industrialnego charakteru. Pełna konsultacja przed pomiarem.",
      },
      {
        q: "Ile kosztuje sufit napinany w Łodzi?",
        a: "Od ok. 170 zł/m² za standardowy sufit PVC z montażem. Bezpłatny pomiar i wycena na miejscu — bez zobowiązań.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=1600&q=80",
    imageAlt: "Sufit napinany w łódzkim loftowym apartamencie",
  },
  {
    slug: "katowice",
    name: "Katowice",
    region: "Śląskie",
    locative: "w Katowicach",
    populationDisplay: "282 tys. mieszkańców",
    distanceFromHq: 75,
    districts: [],
    intro:
      "Katowice są dla nas niemal lokalnym rynkiem — 75 km od centrali, sercem aglomeracji śląskiej (ponad 2 mln mieszkańców). Realizujemy projekty zarówno w katowickich apartamentowcach jak i w biurowcach Galaxy, Silesia Business Park czy KTW. Ze względu na bliskość, oferujemy elastyczne terminy i priority booking.",
    trustBlocks: [
      {
        title: "Lokalny rynek",
        body: "75 km od centrali — najkrótszy dojazd po Częstochowie. Pomiary nawet w tym samym tygodniu, montaż w pełni elastyczny.",
      },
      {
        title: "Korporacyjne biurowce",
        body: "Sufity akustyczne dla biur w Galaxy, Silesia Business Park, KTW i innych biurowcach. Klasa A2, montaż poza godzinami pracy.",
      },
      {
        title: "Aglomeracja śląska",
        body: "Obsługujemy też Sosnowiec, Chorzów, Zabrze, Bytom, Tychy, Gliwice, Mysłowice. Jeden zespół, jeden standard, ten sam materiał.",
      },
    ],
    faq: [
      {
        q: "Czy obsługujecie całą aglomerację śląską?",
        a: "Tak — Katowice, Sosnowiec, Chorzów, Zabrze, Bytom, Tychy, Mysłowice, Siemianowice, Ruda Śląska, Świętochłowice, Piekary Śląskie, Dąbrowa Górnicza.",
      },
      {
        q: "Czy montujecie sufity akustyczne w katowickich biurowcach?",
        a: "Tak. Specjalizujemy się w sufitach akustycznych dla śląskich biurowców — montaż poza godzinami pracy, bez przerywania działalności biura. Klasa A2, redukcja pogłosu do 75%.",
      },
      {
        q: "Ile czeka się na realizację w Katowicach?",
        a: "Pomiar w ciągu 3–5 dni roboczych, sam montaż 1 dzień. Przy pilnych projektach (do tygodnia) — priority booking, bez dodatkowych opłat.",
      },
      {
        q: "Ile kosztuje sufit napinany w Katowicach?",
        a: "Od ok. 170 zł/m² za standardowy PVC. Akustyczne i specjalistyczne (LED, fotodruk) — wycena na podstawie bezpłatnego pomiaru.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80",
    imageAlt: "Akustyczny sufit napinany w katowickim biurowcu",
  },
  {
    slug: "czestochowa",
    name: "Częstochowa",
    region: "Centrala",
    locative: "w Częstochowie",
    populationDisplay: "213 tys. mieszkańców",
    distanceFromHq: 0,
    districts: [],
    intro:
      "Częstochowa to nasza baza — tutaj produkujemy materiał, szkolimy ekipy, prowadzimy showroom przy ul. Legionów 59. Naszym częstochowskim klientom oferujemy nie tylko najszybsze terminy w Polsce, ale też możliwość osobistego obejrzenia materiałów w hali produkcyjnej przed zamówieniem.",
    trustBlocks: [
      {
        title: "Showroom i hala produkcyjna",
        body: "Ul. Legionów 59 — przyjdź obejrzeć materiały, profile, gotowe realizacje. Możliwość konsultacji z inżynierem produkcji.",
      },
      {
        title: "Najkrótsze terminy w Polsce",
        body: "Pomiar w ciągu 1–3 dni roboczych. Sam montaż w 1 dzień. Materiał dostarczany bezpośrednio z hali produkcyjnej.",
      },
      {
        title: "Lokalne ekipy",
        body: "Wszyscy nasi monterzy to stała kadra z Częstochowy i okolic. To nie firma „dla turystów" — to lokalna marka z ogólnoeuropejskim zapleczem.",
      },
    ],
    faq: [
      {
        q: "Gdzie znajduje się siedziba Stretch Sufit?",
        a: "Nasza centrala i hala produkcyjna mieści się w Częstochowie przy ul. Legionów 59 (42-200 Częstochowa). Showroom otwarty od poniedziałku do piątku.",
      },
      {
        q: "Czy mogę osobiście obejrzeć materiały przed zamówieniem?",
        a: "Tak — i właśnie do tego zapraszamy częstochowskich klientów. W showroomie pokazujemy próbki wszystkich folii (PVC, poliester, akustyczny, fotodruk), profile montażowe i przykłady oświetlenia LED.",
      },
      {
        q: "Jak szybko zrealizujecie zamówienie w Częstochowie?",
        a: "Najszybciej w Polsce. Pomiar 1–3 dni robocze. Montaż następnego tygodnia. Materiał produkujemy na miejscu — bez czekania na dostawy.",
      },
      {
        q: "Czy obsługujecie też okoliczne miejscowości?",
        a: "Tak — Częstochowa to nasza baza dla całego subregionu: Kłobuck, Lubliniec, Myszków, Koniecpol, Janów. Czas dojazdu do 1 godziny.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=1600&q=80",
    imageAlt: "Hala produkcyjna Stretch Sufit w Częstochowie",
  },

  // ════════════════════════════════════════════════════════════
  // Tier 3 — smaller regional cities
  // ════════════════════════════════════════════════════════════
  {
    slug: "bielsko-biala",
    name: "Bielsko-Biała",
    region: "Śląskie",
    locative: "w Bielsku-Białej",
    populationDisplay: "167 tys. mieszkańców",
    distanceFromHq: 110,
    districts: [],
    intro:
      "Bielsko-Biała to dla nas ważny rynek na południu — apartamenty z widokiem na Beskidy, domy jednorodzinne, lokale gastronomiczne w centrum. Z naszej centrali w Częstochowie (110 km) dojeżdżamy w 2 godziny.",
    trustBlocks: [
      {
        title: "Apartamenty premium",
        body: "Bielskie apartamentowce w okolicach ulicy Cieszyńskiej i Wapienicy — sufity premium z LED do nowoczesnych wnętrz.",
      },
      {
        title: "Domy z widokiem",
        body: "Domy jednorodzinne z otwartymi przestrzeniami i widokiem na góry — designerskie sufity podkreślające architekturę.",
      },
      {
        title: "Krótki dojazd",
        body: "110 km od centrali — pełna ekipa montażowa i materiał na miejscu w 2 godziny.",
      },
    ],
    faq: [
      {
        q: "Jakie obszary obsługujecie wokół Bielska-Białej?",
        a: "Pełne Bielsko-Biała, plus: Czechowice-Dziedzice, Żywiec, Cieszyn, Wilkowice, Buczkowice, Szczyrk, Wisłę i Ustroń.",
      },
      {
        q: "Czy montujecie sufity w domach jednorodzinnych?",
        a: "Tak — to nasz najczęstszy typ projektu w Bielsku-Białej. Salon z aneksem, kuchnia, sypialnie, łazienki. Pełen dom realizujemy w 2–3 dni.",
      },
      {
        q: "Ile kosztuje sufit napinany w Bielsku-Białej?",
        a: "Od ok. 175 zł/m² za standardowy PVC. Bezpłatny pomiar i wycena na miejscu.",
      },
      {
        q: "Czy montujecie sufity w lokalach gastronomicznych?",
        a: "Tak — restauracje, kawiarnie, bistra w bielskim Śródmieściu. Akustyka i fotodruk to nasze najczęstsze propozycje dla gastronomii.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1600&q=80",
    imageAlt: "Sufit napinany w domu jednorodzinnym pod Bielskiem-Białą",
  },
  {
    slug: "gliwice",
    name: "Gliwice",
    region: "Śląskie",
    locative: "w Gliwicach",
    populationDisplay: "175 tys. mieszkańców",
    distanceFromHq: 95,
    districts: [],
    intro:
      "Gliwice to silny rynek techniczny — Politechnika, parki technologiczne, młode biura. Sufity akustyczne i LED dominują wśród naszych gliwickich zamówień. 95 km od centrali w Częstochowie — krótki dojazd, elastyczne terminy.",
    trustBlocks: [
      {
        title: "Park technologiczny",
        body: "Sufity akustyczne dla biur w gliwickich parkach technologicznych — montaż poza godzinami pracy.",
      },
      {
        title: "Apartamentowce",
        body: "Nowe inwestycje na osiedlach Łabędy, Sośnica, Trynek — designerskie wnętrza z LED i fotodrukiem.",
      },
      {
        title: "Bliskość centrali",
        body: "95 km od Częstochowy — najkrótszy dojazd po Katowicach. Możliwość pomiaru w 24 godziny przy pilnych zleceniach.",
      },
    ],
    faq: [
      {
        q: "Czy obsługujecie cały aglomerację gliwicką?",
        a: "Tak — Gliwice, Zabrze, Knurów, Pyskowice, Toszek. To wszystko w zasięgu naszej śląskiej ekipy.",
      },
      {
        q: "Czy specjalizujecie się w sufitach do biur w Gliwicach?",
        a: "Tak — Gliwice są jednym z naszych głównych rynków B2B. Akustyka klasy A2 dla open-space, sale konferencyjne, recepcje.",
      },
      {
        q: "Ile trwa montaż w Gliwicach?",
        a: "Standardowo 1 dzień roboczy dla powierzchni do 50 m². Pomiar w 3–5 dni, montaż następny tydzień.",
      },
      {
        q: "Ile kosztuje sufit napinany w Gliwicach?",
        a: "Od ok. 175 zł/m² za standardowy PVC. Pełna wycena na podstawie bezpłatnego pomiaru.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=1600&q=80",
    imageAlt: "Sufit napinany w gliwickim biurze",
  },
  {
    slug: "opole",
    name: "Opole",
    region: "Opolskie",
    locative: "w Opolu",
    populationDisplay: "127 tys. mieszkańców",
    distanceFromHq: 100,
    districts: [],
    intro:
      "Opole to dla nas spokojny, ale stabilny rynek — głównie domy jednorodzinne i mieszkania w nowych apartamentowcach. 100 km od centrali w Częstochowie — łatwy dojazd, pełna obsługa miasta i województwa opolskiego.",
    trustBlocks: [
      {
        title: "Domy jednorodzinne",
        body: "Większość opolskich projektów to domy — salony, kuchnie, sypialnie. Pełen dom w 2–3 dni roboczych.",
      },
      {
        title: "Apartamenty",
        body: "Nowe inwestycje w okolicach Pasiek i Zaodrza — designerskie sufity z LED i akustyką.",
      },
      {
        title: "Województwo opolskie",
        body: "Z Opola obsługujemy też Kędzierzyn-Koźle, Nysę, Prudnik, Krapkowice — pełen region.",
      },
    ],
    faq: [
      {
        q: "Jakie miejscowości obsługujecie wokół Opola?",
        a: "Opole, Kędzierzyn-Koźle, Nysa, Prudnik, Krapkowice, Strzelce Opolskie, Brzeg, Niemodlin. Pełne województwo opolskie.",
      },
      {
        q: "Czy montujecie w domach jednorodzinnych?",
        a: "Tak — to nasz najczęstszy typ projektu w regionie opolskim. Salon, kuchnia, sypialnie, łazienki.",
      },
      {
        q: "Ile kosztuje sufit napinany w Opolu?",
        a: "Od ok. 170 zł/m² za standardowy PVC. Bezpłatny pomiar i pełna wycena na miejscu.",
      },
      {
        q: "Jakie typy sufitów są najpopularniejsze w Opolu?",
        a: "PVC matowy do salonów i sypialni, akustyczny do biur, oraz LED-y obwodowe — to top 3 wybory naszych opolskich klientów.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80",
    imageAlt: "Sufit napinany w domu jednorodzinnym pod Opolem",
  },
  {
    slug: "kielce",
    name: "Kielce",
    region: "Świętokrzyskie",
    locative: "w Kielcach",
    populationDisplay: "189 tys. mieszkańców",
    distanceFromHq: 140,
    districts: [],
    intro:
      "Kielce to dla nas ważny rynek wschodniej Polski — apartamenty na osiedlach Ślichowice i Bocianek, domy jednorodzinne, biura. 140 km od centrali w Częstochowie — pełna obsługa miasta i regionu świętokrzyskiego.",
    trustBlocks: [
      {
        title: "Apartamentowce",
        body: "Nowe osiedla Ślichowice, Bocianek, Świętokrzyskie — designerskie wnętrza wymagające premium rozwiązań.",
      },
      {
        title: "Domy z regionu",
        body: "Pełna obsługa domów jednorodzinnych w Kielcach i okolicach (Morawica, Daleszyce, Chęciny, Piekoszów).",
      },
      {
        title: "Region świętokrzyski",
        body: "Z Kielc obsługujemy też Sandomierz, Skarżysko-Kamienna, Starachowice, Ostrowiec Świętokrzyski.",
      },
    ],
    faq: [
      {
        q: "Jakie obszary obsługujecie wokół Kielc?",
        a: "Kielce, Morawica, Daleszyce, Chęciny, Piekoszów, Skarżysko-Kamienna, Starachowice, Ostrowiec Świętokrzyski, Sandomierz, Busko-Zdrój.",
      },
      {
        q: "Ile czeka się na realizację w Kielcach?",
        a: "Pomiar 5–7 dni roboczych, montaż w kolejnym tygodniu. Sam montaż 1 dzień dla powierzchni do 50 m².",
      },
      {
        q: "Czy montujecie sufity w domach jednorodzinnych?",
        a: "Tak — to znaczna część projektów w regionie świętokrzyskim. Pełen dom realizujemy w 2–3 dni roboczych.",
      },
      {
        q: "Ile kosztuje sufit napinany w Kielcach?",
        a: "Od ok. 170 zł/m² za standardowy PVC. Bezpłatny pomiar i pełna wycena na miejscu — bez zobowiązań.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1600&q=80",
    imageAlt: "Sufit napinany w mieszkaniu w Kielcach",
  },
  {
    slug: "plock",
    name: "Płock",
    region: "Mazowieckie",
    locative: "w Płocku",
    populationDisplay: "115 tys. mieszkańców",
    distanceFromHq: 195,
    districts: [],
    intro:
      "Płock to dla nas rynek głównie domowy — domy jednorodzinne, mieszkania w nowych apartamentowcach, gastronomia w starym centrum. Z naszej centrali w Częstochowie obsługujemy też okoliczne miejscowości i całe północne Mazowsze.",
    trustBlocks: [
      {
        title: "Mieszkania i domy",
        body: "Klasyczne projekty domowe — salon, kuchnia, sypialnia, łazienka. Premium materiały, jednodniowy montaż.",
      },
      {
        title: "Gastronomia",
        body: "Restauracje i kawiarnie w płockim Starym Mieście — akustyka i fotodruk to popularne wybory.",
      },
      {
        title: "Pełna ekipa na miejscu",
        body: "Materiał dostarczany z produkcji w Częstochowie, ekipa z pełnym wyposażeniem. Montaż 1 dzień.",
      },
    ],
    faq: [
      {
        q: "Jakie obszary obsługujecie wokół Płocka?",
        a: "Płock, Sierpc, Gostynin, Ciechanów, Mława. Pełne północne Mazowsze.",
      },
      {
        q: "Ile czeka się na pomiar w Płocku?",
        a: "Standardowo 7–10 dni roboczych. Sam montaż 1 dzień.",
      },
      {
        q: "Ile kosztuje sufit napinany w Płocku?",
        a: "Od ok. 175 zł/m² za standardowy PVC. Bezpłatny pomiar i wycena.",
      },
      {
        q: "Czy realizujecie zamówienia w płockich kamienicach?",
        a: "Tak — sufity napinane są idealne dla starszych budynków. Montujemy bez ingerencji w oryginalny sufit, ratujemy popękane stropy.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80",
    imageAlt: "Sufit napinany w płockim mieszkaniu",
  },
  {
    slug: "piotrkow-trybunalski",
    name: "Piotrków Trybunalski",
    region: "Łódzkie",
    locative: "w Piotrkowie Trybunalskim",
    populationDisplay: "70 tys. mieszkańców",
    distanceFromHq: 50,
    districts: [],
    intro:
      "Piotrków Trybunalski jest naszym najbliższym sąsiadem — 50 km od centrali w Częstochowie. To oznacza najszybsze terminy realizacji po samym mieście Częstochowa, oraz pełną elastyczność w planowaniu pomiaru i montażu.",
    trustBlocks: [
      {
        title: "Najszybsze terminy",
        body: "50 km od centrali — ekipa u Ciebie w godzinę. Pomiar nawet następnego dnia roboczego.",
      },
      {
        title: "Domy i mieszkania",
        body: "Domy jednorodzinne w okolicach Wolborza i Sulejowa, mieszkania w centrum Piotrkowa. Pełen dom w 2 dni.",
      },
      {
        title: "Bezpośrednia komunikacja",
        body: "Brak pośredników — bezpośredni kontakt z producentem i ekipą montażową. Pełna kontrola nad terminem i jakością.",
      },
    ],
    faq: [
      {
        q: "Jakie miejscowości obsługujecie wokół Piotrkowa?",
        a: "Piotrków Trybunalski, Wolbórz, Sulejów, Tomaszów Mazowiecki, Bełchatów, Radomsko.",
      },
      {
        q: "Czy realizujecie projekty w jeden tydzień?",
        a: "Tak — Piotrków jest na tyle blisko, że standardowy projekt domowy realizujemy w 5–7 dni od zgłoszenia (pomiar + produkcja + montaż).",
      },
      {
        q: "Ile kosztuje sufit napinany w Piotrkowie?",
        a: "Od ok. 165 zł/m² za standardowy PVC z montażem. Bezpłatny pomiar bez zobowiązań.",
      },
      {
        q: "Czy oferujecie specjalne stawki dla bliskich miast?",
        a: "Nasze ceny nie zawierają osobnej opłaty za dojazd dla projektów do 100 km od Częstochowy — w tym Piotrkowa.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=1600&q=80",
    imageAlt: "Sufit napinany w mieszkaniu w Piotrkowie Trybunalskim",
  },
  {
    slug: "radomsko",
    name: "Radomsko",
    region: "Łódzkie",
    locative: "w Radomsku",
    populationDisplay: "45 tys. mieszkańców",
    distanceFromHq: 35,
    districts: [],
    intro:
      "Radomsko to dla nas niemal sąsiednie miasto — 35 km od centrali. Ekipa montażowa jest u Ciebie w 40 minut. To pozwala nam działać z pełną elastycznością, oferować priorytetowe terminy i krótkie odpowiedzi na pilne zlecenia.",
    trustBlocks: [
      {
        title: "Najszybciej w Polsce",
        body: "35 km od centrali — ekipa w 40 minut. Pomiar często tego samego dnia, montaż w kolejnym tygodniu.",
      },
      {
        title: "Małe i duże projekty",
        body: "Od pokoju 15 m² po cały dom 200 m². Każdy projekt traktujemy z taką samą starannością.",
      },
      {
        title: "Lokalna obecność",
        body: "Radomsko jest naszym sąsiadem — znamy lokalne kamienice, deweloperów, architektów. Bez „pomyłek z dostawą" przez nieznajomość terenu.",
      },
    ],
    faq: [
      {
        q: "Jakie miejscowości obsługujecie wokół Radomska?",
        a: "Radomsko, Kamieńsk, Przedbórz, Gomunice, Lgota Wielka, Kodrąb. Pełen powiat radomszczański.",
      },
      {
        q: "Jak szybko możecie zrealizować projekt w Radomsku?",
        a: "Najszybciej w Polsce. Pomiar nawet w dniu zgłoszenia, montaż w 3–5 dni od pomiaru.",
      },
      {
        q: "Ile kosztuje sufit napinany w Radomsku?",
        a: "Od ok. 165 zł/m² za standardowy PVC. Bez opłat za dojazd, bez ukrytych kosztów.",
      },
      {
        q: "Czy mogę osobiście odwiedzić wasz showroom w Częstochowie?",
        a: "Tak — i serdecznie zapraszamy. Ul. Legionów 59 to 35 km od Radomska, łatwo dojechać. Pokażemy próbki materiałów i przykłady realizacji.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80",
    imageAlt: "Sufit napinany w domu w Radomsku",
  },
  {
    slug: "brzeg",
    name: "Brzeg",
    region: "Opolskie",
    locative: "w Brzegu",
    populationDisplay: "35 tys. mieszkańców",
    distanceFromHq: 145,
    districts: [],
    intro:
      "Brzeg to dla nas mniejszy, ale stały rynek — głównie domy jednorodzinne w spokojnych okolicach miasta i okolicznych miejscowości. Z naszej centrali w Częstochowie obsługujemy też wschodnią część województwa opolskiego.",
    trustBlocks: [
      {
        title: "Domy z dobrym widokiem",
        body: "Brzeskie domy z widokiem na Odrę i historyczne centrum — sufity premium podkreślające charakter wnętrza.",
      },
      {
        title: "Region",
        body: "Z Brzegu obsługujemy też Skarbimierz, Lewin Brzeski, Grodków, Kluczbork.",
      },
      {
        title: "Pełna ekipa, jeden dzień",
        body: "Mimo dystansu — pełna mobilność. Materiał z produkcji, ekipa z narzędziami, montaż w 1 dzień.",
      },
    ],
    faq: [
      {
        q: "Jakie obszary obsługujecie wokół Brzegu?",
        a: "Brzeg, Skarbimierz, Lewin Brzeski, Grodków, Kluczbork, Namysłów.",
      },
      {
        q: "Ile czeka się na pomiar w Brzegu?",
        a: "Standardowo 7–10 dni roboczych. Sam montaż 1 dzień.",
      },
      {
        q: "Ile kosztuje sufit napinany w Brzegu?",
        a: "Od ok. 175 zł/m² za standardowy PVC. Bezpłatny pomiar.",
      },
      {
        q: "Czy realizujecie zamówienia w historycznych budynkach Brzegu?",
        a: "Tak — sufity napinane są idealne dla starszych kamienic. Bezinwazyjny montaż, ratunek dla popękanych stropów.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=1600&q=80",
    imageAlt: "Sufit napinany w domu w Brzegu",
  },
  {
    slug: "jastrzebie-zdroj",
    name: "Jastrzębie-Zdrój",
    region: "Śląskie",
    locative: "w Jastrzębiu-Zdroju",
    populationDisplay: "88 tys. mieszkańców",
    distanceFromHq: 130,
    districts: [],
    intro:
      "Jastrzębie-Zdrój to dla nas rynek głównie domowy — domy jednorodzinne, mieszkania w nowych apartamentowcach, lokale usługowe. 130 km od centrali w Częstochowie — pełna obsługa miasta i regionu jastrzębskiego.",
    trustBlocks: [
      {
        title: "Domy jednorodzinne",
        body: "Jastrzębskie domy w spokojnych dzielnicach — sufity z LED, akustyka do salonów, gładkie powierzchnie do sypialni.",
      },
      {
        title: "Region",
        body: "Obsługujemy też Wodzisław Śląski, Rybnik, Pszów, Radlin, Czerwionka-Leszczyny.",
      },
      {
        title: "Krótki czas realizacji",
        body: "Pomiar 5–7 dni, sam montaż 1 dzień. Materiał z naszej produkcji, ekipa z pełnym wyposażeniem.",
      },
    ],
    faq: [
      {
        q: "Jakie obszary obsługujecie wokół Jastrzębia?",
        a: "Jastrzębie-Zdrój, Wodzisław Śląski, Rybnik, Pszów, Radlin, Czerwionka-Leszczyny, Marklowice.",
      },
      {
        q: "Ile czeka się na realizację w Jastrzębiu?",
        a: "Pomiar 5–7 dni roboczych, montaż w kolejnym tygodniu. Sam montaż 1 dzień.",
      },
      {
        q: "Ile kosztuje sufit napinany w Jastrzębiu?",
        a: "Od ok. 175 zł/m² za standardowy PVC. Bezpłatny pomiar i wycena na miejscu.",
      },
      {
        q: "Czy realizujecie projekty w domach jednorodzinnych?",
        a: "Tak — to nasz najczęstszy typ projektu w Jastrzębiu. Pełen dom w 2–3 dni roboczych.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1600&q=80",
    imageAlt: "Sufit napinany w domu w Jastrzębiu-Zdroju",
  },
];
