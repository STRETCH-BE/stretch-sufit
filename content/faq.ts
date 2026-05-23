/**
 * FAQ data — comprehensive Q&A organized into 6 categories.
 * File path: /content/faq.ts
 *
 * Renders on /pytania. Powers both the visible page and the FAQPage JSON-LD
 * schema (which Google sometimes surfaces as expandable rich snippets in
 * search results).
 *
 * Categories chosen to map to actual Polish search intent:
 *   - produkty: questions about what they're buying
 *   - montaz: questions about the install process itself
 *   - ceny: pricing-related (highest volume queries)
 *   - gwarancja: trust signals (durability, warranty claims)
 *   - logistyka: timing, scheduling, what to prepare
 *   - zastosowania: edge cases ("does it work in X scenario")
 *
 * Adding a Q&A: just append to the array. Filter chips, JSON-LD, and
 * the category nav auto-update.
 */

export type FaqCategory =
  | "produkty"
  | "montaz"
  | "ceny"
  | "gwarancja"
  | "logistyka"
  | "zastosowania";

export const faqCategories: Record<
  FaqCategory,
  { label: string; description: string }
> = {
  produkty: {
    label: "Produkty i materiały",
    description: "Z czego to jest, czym się różni, jakie ma właściwości",
  },
  montaz: {
    label: "Montaż i przygotowanie",
    description: "Jak wygląda dzień montażu, co przygotować",
  },
  ceny: {
    label: "Ceny i wycena",
    description: "Ile to kosztuje, od czego zależy cena",
  },
  gwarancja: {
    label: "Gwarancja i trwałość",
    description: "Co obejmuje gwarancja, jak długo wytrzymuje",
  },
  logistyka: {
    label: "Terminy i logistyka",
    description: "Kiedy zamówić, ile czeka się na realizację",
  },
  zastosowania: {
    label: "Specyficzne zastosowania",
    description: "Łazienki, biura, kamienice, projekty specjalne",
  },
};

export type FaqEntry = {
  /** URL-safe slug — used as anchor link target (#slug) */
  slug: string;
  category: FaqCategory;
  q: string;
  a: string;
};

export const faqs: FaqEntry[] = [
  // ═══════════════════════════════════════════════════════════
  // PRODUKTY I MATERIAŁY
  // ═══════════════════════════════════════════════════════════
  {
    slug: "co-to-jest-sufit-napinany",
    category: "produkty",
    q: "Co to jest sufit napinany?",
    a: "Sufit napinany to membrana (PVC lub poliester) rozpięta na profilach montowanych po obwodzie pomieszczenia. Tworzy idealnie gładką, równą powierzchnię, którą montuje się 5–15 cm poniżej oryginalnego sufitu. Zastępuje gładź gipsową, panele drewniane lub klasyczne sufity podwieszane — z tą różnicą, że montaż trwa 1 dzień, bez kurzu i bez remontu.",
  },
  {
    slug: "roznica-pvc-poliester",
    category: "produkty",
    q: "Czym różni się sufit PVC od poliestrowego?",
    a: "PVC ma większą paletę kolorów i wykończeń (mat, satyna, połysk, brokat, tekstura, lustro, perła, metalik, transparent), bezszwowo do 6,50 m, 100% wodoszczelność, montowany na ciepło. Produkujemy go w naszej fabryce Alto Design w Częstochowie. Poliester ma bardziej naturalny, głęboko matowy wygląd (jak idealna gładź gipsowa), bezszwowo do 5,15 m, montowany na zimno — produkowany przez Stretch Productions w Belgii. Gwarancja: 15 lat na PVC, 10 lat na polyester. PVC wybiera ok. 80% naszych klientów.",
  },
  {
    slug: "ile-kolorow",
    category: "produkty",
    q: "Ile kolorów mam do wyboru?",
    a: "Standardowo ponad 100 kolorów w PVC + cała paleta RAL na zamówienie. Poliester dostępny w bieli, kremowych, beżowych — jego siła w głębokim matowaniu, nie w kolorystyce. Próbniki materiałów wysyłamy bezpłatnie przed pomiarem.",
  },
  {
    slug: "co-to-akustyczny",
    category: "produkty",
    q: "Co to jest sufit akustyczny i kiedy go potrzebuję?",
    a: "Sufit akustyczny ma mikroperforowaną powierzchnię (otwory 0,2 mm, niewidoczne z 50 cm) i absorber dźwięku za membraną. Redukuje pogłos w pomieszczeniu o 50–75%, w premium konfiguracji nawet do 90%. Potrzebny wszędzie tam, gdzie ważna jest czytelna mowa lub komfort dźwiękowy: open-space biura, restauracje, sale konferencyjne, gabinety lekarskie, kina domowe. Do typowych mieszkań zwykle nie jest niezbędny.",
  },
  {
    slug: "fotodruk-rozdzielczosc",
    category: "produkty",
    q: "Jakiej rozdzielczości plik potrzeba do fotodruku?",
    a: "Minimum 300 DPI w skali 1:1 (czyli w docelowym rozmiarze sufitu). Dla sufitu 3×3 m oznacza to plik 35400×35400 pikseli. Pomagamy klientom przygotować pliki — często wystarczy zdjęcie 4K odpowiednio przeskalowane lub grafika wektorowa SVG. Druk UV o rozdzielczości do 1440 DPI gwarantuje jakość fotograficzną.",
  },

  // ═══════════════════════════════════════════════════════════
  // MONTAŻ I PRZYGOTOWANIE
  // ═══════════════════════════════════════════════════════════
  {
    slug: "ile-trwa-montaz",
    category: "montaz",
    q: "Ile trwa montaż sufitu napinanego?",
    a: "Standardowo 1 dzień roboczy dla powierzchni do 50 m². Większe pomieszczenia (50–100 m²) — 1–2 dni. Pełen dom (4–5 pomieszczeń) — 2–3 dni z jedną ekipą. Sam montaż jednego pomieszczenia trwa 3–6 godzin, w zależności od wielkości i ilości punktów świetlnych.",
  },
  {
    slug: "co-przygotowac",
    category: "montaz",
    q: "Co muszę przygotować przed montażem?",
    a: "Niewiele. Z pomieszczenia trzeba wyprowadzić wszystkie meble lub odsunąć je od ścian (min. 1 m). Zabezpieczamy podłogę folią. W przypadku montażu PVC (na ciepło, do ok. 50°C) zalecamy wyprowadzenie roślin i zwierząt. Poliester montuje się na zimno — wszystko może zostać.",
  },
  {
    slug: "czy-jest-kurz",
    category: "montaz",
    q: "Czy montaż generuje kurz i brud?",
    a: "Praktycznie nie. Sufit napinany montuje się na profilach przyściennych — nie ingerujemy w oryginalny sufit, nie wiercimy w nim, nie szlifujemy. Jedyne pyły powstają przy montażu profili po obwodzie (10–15 punktów wiercenia w ścianach), które natychmiast odsysamy odkurzaczem przemysłowym. Po naszym wyjściu pomieszczenie jest gotowe do użytku.",
  },
  {
    slug: "mieszkam-w-trakcie",
    category: "montaz",
    q: "Czy mogę mieszkać w domu podczas montażu?",
    a: "Tak, choć podczas właściwego montażu (3–6 godzin) lepiej, żeby w pomieszczeniu nie przebywać. PVC wymaga rozgrzania pomieszczenia do ok. 50°C — niekomfortowo. Poliester montuje się na zimno, można być obecnym. Po zakończeniu pomieszczenie wraca do temperatury otoczenia w ciągu 30–60 minut.",
  },
  {
    slug: "stary-sufit",
    category: "montaz",
    q: "Czy trzeba zerwać stary sufit?",
    a: "Nie. Sufit napinany montujemy na profilach przyściennych, niezależnie od stanu oryginalnego sufitu. Możemy przykryć popękany sufit, ślady po zaciekach, popsuty tynk, lampę gipsową — wszystko zostaje. To często jedyna sensowna opcja w starszych kamienicach, gdzie zerwanie stropu byłoby gigantycznym remontem.",
  },

  // ═══════════════════════════════════════════════════════════
  // CENY I WYCENA
  // ═══════════════════════════════════════════════════════════
  {
    slug: "ile-kosztuje",
    category: "ceny",
    q: "Ile kosztuje sufit napinany w 2026?",
    a: "Cena startowa: ok. 170 zł/m² za standardowy matowy PVC z montażem. Poliester: od ok. 220 zł/m². Akustyczny: od ok. 320 zł/m². Sufit świetlny LED: od ok. 480 zł/m² (pełen sufit świetlny) lub od 220 zł/m² (same linie LED). Fotodruk: od 290 zł/m². Lakier, lustro, metalik: dopłata 30–80% do bazowej ceny. Pełna wycena na podstawie bezpłatnego pomiaru.",
  },
  {
    slug: "od-czego-zalezy-cena",
    category: "ceny",
    q: "Od czego zależy końcowa cena?",
    a: "Sześć głównych czynników: (1) powierzchnia w m² — większe pomieszczenia mają niższą cenę jednostkową, (2) typ membrany (PVC mat vs lakier vs akustyka vs LED), (3) liczba punktów świetlnych — każdy wymaga osobnego wycięcia w membranie i pierścienia, (4) skomplikowanie kształtu (proste prostokątne vs łuki, wielopoziomowe), (5) wysokość pomieszczenia (powyżej 3 m — dopłata za rusztowania), (6) lokalizacja i odległość od centrali w Częstochowie.",
  },
  {
    slug: "czy-pomiar-platny",
    category: "ceny",
    q: "Czy pomiar i wycena są płatne?",
    a: "Nie. Pomiar i wycena są bezpłatne i nie zobowiązują do zamówienia. Nasz pomiarowiec przyjeżdża z próbnikami materiałów, mierzy pomieszczenie, omawia z Tobą opcje i wysyła ofertę w ciągu 24–48 godzin. Brak ukrytych opłat — to standard branżowy w premium segmencie.",
  },
  {
    slug: "platnosc",
    category: "ceny",
    q: "Jak wygląda płatność?",
    a: "Standardowo zaliczka 30% przy zamówieniu (po akceptacji oferty), reszta po zakończeniu montażu i akceptacji jakości przez klienta. Płatność przelewem lub gotówką. Faktura VAT na życzenie, w tym dla firm odliczających VAT.",
  },
  {
    slug: "porownanie-z-gladzia",
    category: "ceny",
    q: "Czy sufit napinany jest droższy od gładzi gipsowej?",
    a: "Bezpośrednia cena za m² — tak, sufit napinany jest droższy od gładzi (170+ zł/m² vs 50–80 zł/m² za gładź z malowaniem). Ale gładź wymaga wcześniejszego zerwania sufitu, wynoszenia mebli, wyprowadzania z mieszkania na 5–10 dni, generuje pyły, pęka w starszych budynkach. Sufit napinany to 1 dzień, bez kurzu, z gwarancją do 15 lat (15 lat na PVC, 10 lat na polyester). Liczone całkowicie — wychodzi podobnie, ale wygodniej.",
  },

  // ═══════════════════════════════════════════════════════════
  // GWARANCJA I TRWAŁOŚĆ
  // ═══════════════════════════════════════════════════════════
  {
    slug: "jaka-gwarancja",
    category: "gwarancja",
    q: "Jak długa jest gwarancja na sufit napinany?",
    a: "Do 15 lat gwarancji materiałowej producenta: 15 lat na PVC (produkowany w naszej fabryce w Polsce przez Alto Design) oraz 10 lat na polyester (produkowany w Belgii przez Stretch Productions). To jedna z najdłuższych gwarancji na rynku polskim. Dotyczy: stabilności kolorystyki, braku odkształceń, braku pęknięć, trwałości połączeń membrany z profilami. Elektronika LED — gwarancja 5 lat.",
  },
  {
    slug: "co-obejmuje-gwarancja",
    category: "gwarancja",
    q: "Co dokładnie obejmuje gwarancja?",
    a: "Gwarancja materiałowa (15 lat dla PVC, 10 lat dla polyestru) obejmuje wszelkie wady fabryczne i procesowe: blaknięcie koloru, rozszerzanie membrany, popękanie, oderwanie od profilu, deformacje. Nie obejmuje uszkodzeń mechanicznych (przecięcie nożem, ostrym przedmiotem) — choć takie uszkodzenia są naprawialne, zwykle bez wymiany całego sufitu.",
  },
  {
    slug: "co-jesli-zaleje",
    category: "gwarancja",
    q: "Co jeśli zaleje mnie sąsiad z góry?",
    a: 'Membrana PVC zatrzymuje do 100 litrów wody na m². Widać charakterystyczne „obwisanie" sufitu w miejscu zalania. Dzwonisz do nas — przyjeżdżamy, demontujemy jeden róg membrany, opróżniamy wodę, a po wyschnięciu sufit wraca do pierwotnego kształtu. W 95% przypadków nie wymaga wymiany. Koszt interwencji znacznie niższy niż wymiana całego sufitu gipsowego.',
  },
  {
    slug: "jak-czyscic",
    category: "gwarancja",
    q: "Jak czyścić sufit napinany?",
    a: "Bardzo prosto. Wilgotną szmatką z odrobiną delikatnego detergentu, w razie potrzeby. PVC i poliester nie chłoną kurzu, nie wymagają regularnej konserwacji. Nie używaj rozpuszczalników, alkoholu, materiałów ściernych ani twardych szczotek — to jedyne ograniczenie.",
  },

  // ═══════════════════════════════════════════════════════════
  // TERMINY I LOGISTYKA
  // ═══════════════════════════════════════════════════════════
  {
    slug: "kiedy-zamowic",
    category: "logistyka",
    q: "Z jakim wyprzedzeniem zamawiać sufit napinany?",
    a: "Standardowo 2–3 tygodnie od zgłoszenia do montażu. Pomiar w ciągu 3–7 dni roboczych, produkcja membrany 5–10 dni roboczych, sam montaż 1 dzień. W szczycie sezonu (kwiecień–czerwiec, wrzesień–listopad) terminy się wydłużają — wtedy zamawiaj z 4–6 tygodniowym wyprzedzeniem.",
  },
  {
    slug: "kiedy-w-budowie",
    category: "logistyka",
    q: "Na jakim etapie remontu zamawiać pomiar?",
    a: "Po: tynkach, malowaniu ścian, instalacji elektrycznej (z wyprowadzonymi punktami świetlnymi), gotowych podłogach. Przed: meblami, dekoracjami, ostatecznym wykończeniem. Sufit napinany to przedostatni etap remontu — niemal zawsze przed wprowadzeniem się do mieszkania.",
  },
  {
    slug: "ile-czeka-na-pomiar",
    category: "logistyka",
    q: "Ile czeka się na pomiar?",
    a: "Częstochowa i okolice: 1–3 dni robocze. Aglomeracja śląska (Katowice, Gliwice, Bielsko-Biała): 3–5 dni. Warszawa, Kraków, Wrocław, Łódź: 5–7 dni. Gdańsk, Poznań, Płock: 7–10 dni. W priorytetowych przypadkach (np. krótki termin remontu) — przyspieszamy.",
  },
  {
    slug: "obsluga-w-polsce",
    category: "logistyka",
    q: "W jakich miastach jesteście obecni?",
    a: "Aktywnie obsługujemy 17 miast: Warszawa, Kraków, Wrocław, Poznań, Gdańsk, Łódź, Katowice, Częstochowa, Bielsko-Biała, Gliwice, Opole, Kielce, Płock, Piotrków Trybunalski, Radomsko, Brzeg, Jastrzębie-Zdrój. Dla większych projektów (>200 m²) dojeżdżamy w całej Polsce — zadzwoń, omówimy.",
  },

  // ═══════════════════════════════════════════════════════════
  // SPECYFICZNE ZASTOSOWANIA
  // ═══════════════════════════════════════════════════════════
  {
    slug: "sufit-w-lazience",
    category: "zastosowania",
    q: "Czy sufit napinany sprawdzi się w łazience?",
    a: "Tak, znakomicie. PVC to nasz najczęściej wybierany materiał do łazienek — 100% wodoszczelność, odporność na parę wodną i chlapanie, łatwy w czyszczeniu, nie chłonie zapachów. Ważne: w łazience z prysznicem bez wentylacji lub sauną domową zawsze wybieraj PVC (nie poliester). W łazience z normalną wentylacją oba materiały działają.",
  },
  {
    slug: "sufit-w-kamienicy",
    category: "zastosowania",
    q: "Czy mogę zamontować sufit napinany w kamienicy pod ochroną konserwatora?",
    a: "Najczęściej tak, choć zalecamy zawsze konsultację z zarządcą i konserwatorem. Sufit napinany jest bezinwazyjny — nie ingerujemy w oryginalny sufit, montaż wyłącznie na profilach przyściennych. To często jedyna opcja w lokalach pod ochroną, gdzie ingerencja w strop jest zabroniona, ale stary sufit jest zniszczony.",
  },
  {
    slug: "sufit-w-biurze",
    category: "zastosowania",
    q: "Czy montujecie sufity w biurach po godzinach pracy?",
    a: "Tak — to standard dla naszych klientów B2B. Pracujemy w weekendy, wieczorami, w święta. Możemy też pracować pod ciśnieniem czasu (np. open-space 300 m² w jeden weekend). Dla projektów >200 m² oddelegowujemy dedykowanego project managera koordynującego pracę z administracją budynku.",
  },
  {
    slug: "ile-traci-wysokosc",
    category: "zastosowania",
    q: "Ile wysokości tracę przez sufit napinany?",
    a: "Klasyczny sufit napinany: minimum 5 cm od oryginalnego sufitu (zwykle 5–8 cm). Sufit z punktowym oświetleniem LED: 8–10 cm. Sufit świetlny LED (cała powierzchnia świecąca): 10–15 cm. W pomieszczeniach z 2,5 m wysokości to akceptowalne, w niskich (<2,4 m) — warto dokładnie zaplanować, czasem polecamy ograniczenie oświetlenia do liniowego LED obwodowego.",
  },
];
