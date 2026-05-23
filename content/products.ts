/**
 * 6 products in the Stretch Sufit system.
 * File path: /content/products.ts
 *
 * Each entry powers BOTH the homepage Solutions card AND its dedicated
 * landing page at /rozwiazania/[slug]. PVC products are manufactured in
 * Poland by Alto Design (Stretch Sufit). Polyester products are
 * manufactured in Belgium by Stretch Productions BV. Both companies
 * belong to the Belgian Stretchgroup holding.
 *
 * Warranty: 15 years on PVC, 10 years on polyester.
 *
 * Order matters — the rendered grid on the homepage relies on this order
 * so the featured PVC card lands in the second slot to break the rhythm.
 */

import type { Product } from "@/types";

export const products: Product[] = [
  // ════════════════════════════════════════════════════════════
  // 01 — Poliester
  // ════════════════════════════════════════════════════════════
  {
    slug: "sufit-poliestrowy",
    number: "01",
    label: "Poliester",
    title: "Sufit poliestrowy Stretch",
    italicAccent: "Stretch",
    description:
      "Bezszwowo do 5,15 m. Montaż na zimno. Bardzo matowa, naturalna powierzchnia — wygląda jak idealna gładź.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    imageAlt: "Sufit poliestrowy — matowa, naturalna powierzchnia",
    linkLabel: "Sufit poliestrowy",

    tagline: "Tkana membrana poliestrowa z powłoką poliuretanową",
    intro:
      "Poliestrowy sufit napinany Stretch to materiał najbliższy klasycznej gładzi — bardzo matowy, naturalny w odbiorze, bez połysku ani plastikowego wyglądu. Produkowany w belgijskiej fabryce Stretch Productions BV z tkanej membrany poliestrowej pokrytej trwałą powłoką poliuretanową. Montaż odbywa się na zimno (bez nagrzewania pomieszczenia), co czyni go idealnym wyborem do renowacji w domach zamieszkanych.",
    features: [
      {
        title: "Bezszwowo do 5,15 m",
        body: "Jeden kawałek membrany pokrywa pomieszczenie do 5,15 m szerokości — bez zgrzewów, bez widocznych łączeń.",
      },
      {
        title: "Montaż na zimno",
        body: "Bez nagrzewarek, bez butli gazowych. Czysty montaż w 1 dzień, możliwy także w domach zamieszkanych z roślinami i zwierzętami.",
      },
      {
        title: "Bardzo matowa powierzchnia",
        body: 'Współczynnik połysku < 5%. Wygląda jak idealnie wykonana gładź — żadnego efektu „plastiku".',
      },
      {
        title: "10 lat gwarancji",
        body: "Materiałowa gwarancja producenta (Stretch Productions BV, Belgia). Powłoka poliuretanowa zabezpiecza tkaninę przed kurzem, wilgocią i odbarwieniem.",
      },
    ],
    useCases: [
      {
        context: "Salony i jadalnie",
        body: "Najczęstsze zastosowanie — duże, otwarte przestrzenie, gdzie zależy nam na idealnie gładkim, neutralnym suficie bez wizualnego kompromisu.",
      },
      {
        context: "Sypialnie i gabinety",
        body: "Matowa powierzchnia nie odbija światła, nie tworzy refleksów — idealna do pomieszczeń, w których wieczorem zapalamy lampki nocne.",
      },
      {
        context: "Renowacje w zamieszkanych domach",
        body: "Montaż na zimno oznacza brak otwartego ognia. Nie trzeba wyprowadzać zwierząt, opróżniać mebli z elektroniki ani zdejmować obrazów ze ścian.",
      },
    ],
    specs: [
      { label: "Materiał", value: "Tkany poliester + powłoka poliuretanowa" },
      { label: "Maksymalna szerokość bez szwu", value: "5,15 m" },
      { label: "Typ montażu", value: "Na zimno (cold install)" },
      { label: "Grubość membrany", value: "0,35–0,40 mm" },
      { label: "Współczynnik połysku", value: "< 5% (głęboka matowość)" },
      { label: "Klasa palności", value: "B-s2,d0" },
      { label: "Gwarancja", value: "10 lat" },
    ],
    comparedTo:
      "Wybierz poliester, jeśli chcesz idealnie matową, naturalną powierzchnię i nie potrzebujesz odporności na 100% wilgoci. Jeśli to łazienka lub kuchnia — wybierz PVC. Jeśli zależy Ci na akustyce — wybierz sufit akustyczny.",
    faq: [
      {
        q: "Czym poliester różni się od PVC?",
        a: "Poliester ma głębsze matowanie i bardziej naturalny wygląd — wygląda jak idealna gładź. PVC jest dostępne w większej palecie kolorów i wykończeń (włącznie z lakierowym połyskiem, brokatem i teksturą). Poliester montuje się na zimno (produkowany w Belgii), PVC na ciepło (produkowany w naszej fabryce w Polsce). Gwarancja: 10 lat na poliester, 15 lat na PVC.",
      },
      {
        q: "Czy poliester nadaje się do łazienki?",
        a: "Tak, ale do typowych łazienek polecamy PVC ze względu na 100% wodoszczelność. Poliester jest odporny na wilgoć, ale przy wysokiej kondensacji (sauna, prysznic bez wentylacji) PVC sprawdza się lepiej.",
      },
      {
        q: "Czy można czyścić poliestrowy sufit?",
        a: "Tak — wilgotną szmatką z delikatnym detergentem. Powłoka poliuretanowa zabezpiecza tkaninę przed plamami i kurzem. Nie używaj rozpuszczalników ani materiałów ściernych.",
      },
      {
        q: "Czy można zintegrować oświetlenie LED z sufitem poliestrowym?",
        a: "Tak — oprawy punktowe, linie LED, gwiezdne niebo. Ze względu na matową strukturę, światło rozprasza się równomiernie. Idealne pod oświetlenie pośrednie obwodowe.",
      },
      {
        q: "Ile kosztuje sufit poliestrowy?",
        a: "Cena zaczyna się od ok. 220 zł/m² za montaż w typowym pomieszczeniu mieszkalnym. Pełna wycena na podstawie bezpłatnego pomiaru — bez zobowiązań.",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  // 02 — PVC (featured)
  // ════════════════════════════════════════════════════════════
  {
    slug: "sufit-pvc",
    number: "02",
    label: "PVC",
    title: "Sufit PVC recyklingowy",
    italicAccent: "recyklingowy",
    description:
      "Bezszwowo do 6,50 m. Produkcja w naszej fabryce w Polsce. Łatwo demontowalny i w 100% recyklingowy. Doskonały do łazienek, kuchni i salonów.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    imageAlt: "Sufit napinany PVC w nowoczesnej łazience",
    linkLabel: "Sufit PVC",
    featured: true,

    tagline: "Membrana PVC z naszej fabryki w Polsce — w 100% recyklingowa, demontowalna",
    intro:
      "PVC to nasz najczęściej wybierany produkt i flagowa specjalizacja Stretch Sufit. Produkujemy go w fabryce Alto Design w Częstochowie (część belgijskiej Stretchgroup) — wszechstronny materiał, idealny do większości wnętrz domowych i komercyjnych. Dostępny w ponad 100 kolorach i 9 wykończeniach (mat, satyna, połysk, brokat, tekstura, lustro, perła, metalik, transparentny). 100% wodoszczelny — w razie zalania z góry sufit zatrzymuje wodę i można go po prostu opróżnić.",
    features: [
      {
        title: "Bezszwowo do 6,50 m",
        body: "Największa dostępna szerokość na rynku. Pokrywa praktycznie każde polskie pomieszczenie jednym kawałkiem membrany — bez widocznych łączeń.",
      },
      {
        title: "100% wodoszczelny",
        body: "W przypadku zalania z góry membrana zatrzymuje do 100 litrów wody/m². Po usunięciu wody wraca do pierwotnego kształtu.",
      },
      {
        title: "Demontowalny i recyklingowy",
        body: "Można zdemontować i ponownie zamontować (np. po remoncie ścian). 100% recyklingowy do surowca pierwotnego.",
      },
      {
        title: "100+ kolorów, 9 wykończeń",
        body: "Mat, satyna, połysk (do 200% odbicia światła), brokat, tekstura, lustro, perła, metalik, transparent. Pełna paleta wzorników do wglądu.",
      },
    ],
    useCases: [
      {
        context: "Łazienki i kuchnie",
        body: "Klasyczne zastosowanie — pełna odporność na parę wodną, chlapanie, opary kuchenne. Łatwe w czyszczeniu, nie chłonie zapachów.",
      },
      {
        context: "Salony z efektem połysku",
        body: "Wykończenie połysk (gloss) wizualnie podwaja wysokość pomieszczenia poprzez odbicie. Klasa premium dla nowoczesnych apartamentów. Brokat i tekstura — dla wnętrz z charakterem.",
      },
      {
        context: "Lokale gastronomiczne",
        body: "Spełnia normy higieniczne HACCP. Nie absorbuje zapachów, łatwo zmywalny, nie wymaga remontów co kilka lat.",
      },
      {
        context: "Inwestycje deweloperskie",
        body: "Krótki czas montażu (1 dzień/mieszkanie) i niski koszt jednostkowy przy zamówieniach hurtowych. Standard w deweloperce premium.",
      },
    ],
    specs: [
      { label: "Materiał", value: "PVC z dodatkami stabilizującymi" },
      { label: "Produkcja", value: "Alto Design, Częstochowa (Polska)" },
      { label: "Maksymalna szerokość bez szwu", value: "6,50 m" },
      { label: "Typ montażu", value: "Na ciepło (rozgrzewanie do ~50°C)" },
      { label: "Grubość membrany", value: "0,17–0,35 mm" },
      { label: "Wodoszczelność", value: "100% (zatrzymuje do 100 l/m²)" },
      { label: "Wykończenia", value: "Mat, satyna, połysk, brokat, tekstura, lustro, perła, metalik, transparent" },
      { label: "Kolory", value: "100+ kolorów standardowych + RAL na zamówienie" },
      { label: "Klasa palności", value: "B-s2,d0" },
      { label: "Gwarancja", value: "15 lat" },
    ],
    comparedTo:
      "Wybierz PVC, jeśli chcesz uniwersalność, odporność na wilgoć i bogactwo kolorów. To najczęstszy wybór dla 80% naszych klientów. Wybierz poliester tylko jeśli zależy Ci na efekcie idealnej, matowej gładzi w salonie bez wymagań wilgociowych.",
    faq: [
      {
        q: "Czy PVC jest bezpieczny dla zdrowia?",
        a: "Tak. Nasze membrany PVC są certyfikowane zgodnie z normą A+ (najwyższy poziom czystości powietrza wewnątrz pomieszczeń), klasa palności B-s2,d0. Nie emitują szkodliwych VOC po zakończeniu instalacji.",
      },
      {
        q: "Czy mogę wybrać dowolny kolor?",
        a: "Tak. Standardowo dostępnych jest ponad 100 kolorów. Możemy też dopasować dowolny kolor z palety RAL na zamówienie. Próbniki do wglądu wysyłamy bezpłatnie przed pomiarem.",
      },
      {
        q: "Co się stanie, jeśli zaleje mnie sąsiad z góry?",
        a: 'Membrana PVC zatrzymuje do 100 litrów wody na m². W razie zalania widać charakterystyczne „obwisanie" sufitu. Wzywasz nas — opróżniamy membranę poprzez demontaż jednego rogu, a po wyschnięciu sufit wraca do pierwotnego kształtu. Najczęściej nie wymaga wymiany.',
      },
      {
        q: "Czy PVC pożółknie z czasem?",
        a: "Nie — wszystkie nasze membrany PVC mają stabilizatory UV i barwy. 15-letnia gwarancja obejmuje też utrzymanie koloru. Po 10–15 latach kolor jest praktycznie nieodróżnialny od pierwotnego.",
      },
      {
        q: "Ile kosztuje sufit PVC?",
        a: "Cena startowa: ok. 170 zł/m² za matowy PVC. Połysk, brokat, tekstura i lustrzane wykończenia: od ok. 250 zł/m². Pełna wycena na podstawie bezpłatnego pomiaru.",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  // 03 — Akustyczny
  // ════════════════════════════════════════════════════════════
  {
    slug: "sufit-akustyczny",
    number: "03",
    label: "Akustyka",
    title: "Sufit akustyczny",
    italicAccent: "akustyczny",
    description:
      "Redukuje pogłos do 75%. Idealny dla biur, restauracji, sal konferencyjnych, kin domowych i studiów.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    imageAlt: "Akustyczny sufit napinany w sali konferencyjnej",
    linkLabel: "Akustyka",

    tagline: "Mikroperforowana membrana z absorberem akustycznym",
    intro:
      "Sufit akustyczny Stretch łączy estetykę membrany napinanej z realną wartością akustyczną. Składa się z mikroperforowanej powierzchni i podkładu absorbującego dźwięk umieszczonego w przestrzeni sufitu właściwego. Wynik: redukcja czasu pogłosu nawet o 75%, a w połączeniu z naszymi absorberami sound-grade — pochłanianie dźwięku do 90%.",
    features: [
      {
        title: "Pochłanianie do 90%",
        body: "Z odpowiednim absorberem za membraną — klasa pochłaniania A wg ISO 354. Standardowa konfiguracja: redukcja pogłosu do 75%.",
      },
      {
        title: "Mikroperforacja niewidoczna z daleka",
        body: "Otwory o średnicy 0,2 mm — niewidoczne z odległości większej niż 50 cm. Sufit wygląda jak gładki, akustyka działa.",
      },
      {
        title: "Klasa palności A2 / B-s2,d0",
        body: "Spełnia wymagania budynków użyteczności publicznej. Dopuszczony do biur, restauracji, hoteli, sal kinowych, szkół.",
      },
      {
        title: "Łączy z LED i fotodrukiem",
        body: "Można łączyć z oświetleniem (linia LED, spoty) i nadrukiem. Pełna swoboda projektowa bez kompromisu akustycznego.",
      },
    ],
    useCases: [
      {
        context: "Open-space biura",
        body: "Najczęstsze zastosowanie. Redukcja pogłosu pozwala normalnie rozmawiać przez telefon i koncentrować się — różnica między biurem ze słuchawkami a biurem bez.",
      },
      {
        context: "Restauracje i kawiarnie",
        body: "Gastronomia z pogłosem 1,2 s vs 0,4 s to dwa różne lokale. Goście dłużej zostają, łatwiej rozmawiają, wracają częściej.",
      },
      {
        context: "Sale konferencyjne i meetingowe",
        body: "Czytelność mowy w sali 30-osobowej zależy bardziej od akustyki niż od mikrofonu. Sufit akustyczny rozwiązuje to bez paneli na ścianach.",
      },
      {
        context: "Kina domowe i studia",
        body: "Klasa Standard nie dla audiofilów — dla audiofilów oferujemy klasę A z 90% pochłanianiem. Pełna kontrola środowiska dźwiękowego.",
      },
    ],
    specs: [
      { label: "Materiał", value: "Mikroperforowany PVC lub poliester + absorber" },
      { label: "Klasa pochłaniania (ISO 354)", value: "Klasa A (z absorberem)" },
      { label: "NRC (Noise Reduction Coefficient)", value: "0,75–0,90" },
      { label: "Średnica perforacji", value: "0,2 mm (niewidoczna z 50 cm)" },
      { label: "Maksymalna szerokość bez szwu", value: "5,15 m (poliester) / 6,50 m (PVC)" },
      { label: "Klasa palności", value: "A2-s1,d0 / B-s2,d0" },
      { label: "Gwarancja", value: "15 lat (PVC) / 10 lat (poliester)" },
    ],
    comparedTo:
      "Wybierz sufit akustyczny zawsze, gdy w pomieszczeniu zależy na czytelnej mowie lub komforcie dźwiękowym. Dla typowych mieszkań to często zbędne. Dla biur, restauracji, gabinetów lekarskich, sal lekcyjnych — zwykle niezbędne. ROI mierzony w produktywności zespołu.",
    faq: [
      {
        q: "Jak działa sufit akustyczny?",
        a: "Mikroskopijne otwory w membranie pozwalają fali dźwiękowej wniknąć w przestrzeń za sufitem, gdzie umieszczony jest absorber (wełna mineralna lub specjalistyczny materiał Stretch-sound). Dźwięk traci energię w absorberze i nie odbija się z powrotem do pomieszczenia.",
      },
      {
        q: "Czy widać perforacje w suficie akustycznym?",
        a: "Z dystansu większego niż 50 cm — praktycznie nie. Otwory mają średnicę 0,2 mm, są regularne i tworzą jednolitą strukturę. Z bliska widoczne, z normalnego dystansu — sufit wygląda gładko.",
      },
      {
        q: "O ile zmniejszy się pogłos w mojej sali konferencyjnej?",
        a: 'Typowo z 1,0–1,5 s do 0,3–0,5 s. To różnica między „mówię jak w pustym basenie" a „mówię jak w studiu nagraniowym". Klasa A z absorberem osiąga jeszcze niższe wartości.',
      },
      {
        q: "Czy mogę połączyć sufit akustyczny z fotodrukiem?",
        a: "Tak — drukujemy bezpośrednio na membranie akustycznej. Restauracje często łączą akustykę z motywem dekoracyjnym. Pełna paleta kolorów i wzorów, bez wpływu na właściwości akustyczne.",
      },
      {
        q: "Ile kosztuje sufit akustyczny?",
        a: "Cena startowa: ok. 320 zł/m² w klasie Standard (NRC 0,75). Klasa A z absorberem premium: od ok. 450 zł/m². Indywidualna wycena z uwzględnieniem akustyki pomieszczenia.",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  // 04 — Świetlny LED
  // ════════════════════════════════════════════════════════════
  {
    slug: "sufit-swietlny",
    number: "04",
    label: "Światło",
    title: "Sufit świetlny LED",
    italicAccent: "świetlny",
    description:
      "Cała powierzchnia podświetlona równomiernie. LED-y liniowe, gwiezdne niebo, RGB — kontrola przez smartfon.",
    image: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=800&q=80",
    imageAlt: "Podświetlany sufit LED w sypialni",
    linkLabel: "Light system",

    tagline: "Translucentna membrana + system LED za sufitem",
    intro:
      "Sufit świetlny Stretch zamienia cały sufit (lub jego część) w równomiernie świecącą powierzchnię. Translucentna membrana o przepuszczalności 30–70% montowana nad systemem LED tworzy efekt niezakłóconego, miękkiego światła. Steruj kolorem, jasnością i scenami przez smartfon — od światła dnia po klimat wieczoru w jednej dotyku.",
    features: [
      {
        title: "Równomierne światło bez punktów",
        body: "LED-y montowane w odpowiednim odstępie za membraną tworzą jednolitą powierzchnię świetlną — bez widocznych punktów i hot-spotów.",
      },
      {
        title: "Pełna kontrola RGB",
        body: "16,7 mln kolorów, 0–100% jasności, sceny zaprogramowane. Sterowanie przez aplikację, asystenta głosowego (Alexa, Google) lub klasyczny ścienny włącznik.",
      },
      {
        title: "Gwiezdne niebo z włókna optycznego",
        body: "Opcjonalnie — punkty świetlne we włóknie optycznym tworzące mapę gwiazd. Każda gwiazda regulowana indywidualnie.",
      },
      {
        title: "Niskie zużycie energii",
        body: "LED zużywa 80% mniej energii niż żarówki halogenowe. Pełen sufit świetlny pobiera tyle co 3 standardowe punkty świetlne.",
      },
    ],
    useCases: [
      {
        context: "Sypialnie",
        body: 'Najczęstsze zastosowanie. Pełen sufit ze sceną „rano" symuluje światło słoneczne — pomaga się obudzić. „Wieczór" w pomarańczowych tonach przygotowuje do snu.',
      },
      {
        context: "Łazienki i SPA",
        body: "Możliwość zmiany koloru w trakcie kąpieli (czerwień, fiolet, blue light). Klasyczne w hotelach premium, coraz popularniejsze w prywatnych łazienkach.",
      },
      {
        context: "Pokoje dziecięce",
        body: "Gwiezdne niebo z dynamiką, kolory tematyczne (różowy, zielony, niebieski). Bezpieczna alternatywa dla naklejek fluorescencyjnych.",
      },
      {
        context: "Restauracje i kluby",
        body: "Pełna ściana świetlna jako element wystroju. Zmiana sceny w trakcie wieczora — od jasnego lunchu po klimatyczny dinner.",
      },
    ],
    specs: [
      { label: "Materiał", value: "Translucentny PVC lub poliester (30–70% transmisji)" },
      { label: "Typ LED", value: "RGB+CCT, 24 V, IP44" },
      { label: "Gęstość LED", value: "Min. 96 diod/m" },
      { label: "Sterowanie", value: "App (iOS/Android), głosowe, ścienne, scenariusze" },
      { label: "Zużycie energii", value: "ok. 15 W/m² przy 100% jasności" },
      { label: "Trwałość LED", value: "min. 50 000 godzin (ok. 17 lat dziennie po 8 h)" },
      { label: "Gwarancja", value: "15 lat na membranę, 5 lat na elektronikę" },
    ],
    comparedTo:
      "Wybierz sufit świetlny, jeśli oświetlenie jest częścią stylu wnętrza, a nie tylko funkcją. Sufit świetlny zastępuje żyrandol, lampy sufitowe i często też lampy stojące. Wymaga przestrzeni 8–10 cm między oryginalnym sufitem a membraną — sprawdź wysokość pomieszczenia.",
    faq: [
      {
        q: "Ile miejsca traci się przez sufit świetlny?",
        a: "Minimum 8 cm wysokości — tyle wymaga system LED za membraną. Standardowo 8–12 cm. W pomieszczeniach z 2,5 m wysokości to akceptowalne, w niskich (< 2,4 m) — warto rozważyć alternatywy (linie LED).",
      },
      {
        q: "Czy mogę sterować sufitem ze smartfona?",
        a: "Tak — kompatybilność z systemami Casambi, Tuya Smart, Philips Hue (przez most). Aplikacja pozwala na kolor, jasność, sceny, harmonogramy.",
      },
      {
        q: "Co się stanie, jeśli LED przestanie świecić?",
        a: "Membrana jest demontowalna — w razie awarii LED otwieramy sufit, wymieniamy moduł i zamykamy. 5 lat gwarancji na elektronikę pokrywa większość przypadków.",
      },
      {
        q: "Czy sufit świetlny się nagrzewa?",
        a: "Praktycznie nie. LED RGB zużywają 15 W/m² — to mniej niż jedna żarówka. Membrana wytrzymuje temperatury do 60°C, system nigdy ich nie osiąga.",
      },
      {
        q: "Ile kosztuje sufit świetlny LED?",
        a: "Cena startowa: ok. 480 zł/m² za pełen sufit świetlny z RGB i sterowaniem appkowym. Same linie LED obwodowe: od ok. 220 zł/m². Wycena indywidualna.",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  // 05 — Fotodruk
  // ════════════════════════════════════════════════════════════
  {
    slug: "sufit-fotodruk",
    number: "05",
    label: "Druk",
    title: "Sufit z fotodrukiem",
    italicAccent: "fotodrukiem",
    description:
      "Dowolny obraz w jakości foto. Dla hoteli, restauracji, sklepów i wnętrz prywatnych. Bez ograniczeń.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
    imageAlt: "Sufit z fotodrukiem w restauracji",
    linkLabel: "Print",

    tagline: "Druk UV o wysokiej rozdzielczości na membranie napinanej",
    intro:
      "Sufit z fotodrukiem to nieograniczona swoboda projektowa — drukujemy na membranie Stretch dowolny obraz: zdjęcie, ilustrację, autorską grafikę, mapę gwiazd, malarstwo. Druk UV o rozdzielczości do 1440 DPI gwarantuje fotograficzną jakość. Maksymalny format pojedynczego elementu: 5,10 m szerokości × 50 m długości.",
    features: [
      {
        title: "1440 DPI — jakość fotograficzna",
        body: "Druk UV w pełnym kolorze. Detale rozpoznawalne z odległości 30 cm — dla sufitu, oglądanego z 2,5 m, oznacza praktyczną perfekcję.",
      },
      {
        title: "Bez ograniczeń motywu",
        body: "Twoje zdjęcie, autorska grafika, klasyczne dzieło sztuki, mapa nieba, abstrakcja. Jedyne ograniczenie to minimalna rozdzielczość pliku (300 DPI na rozmiarze 1:1).",
      },
      {
        title: "Łączy z akustyką i podświetleniem",
        body: "Drukujemy także na membranach akustycznych (z mikroperforacją) i translucentnych (do podświetlenia od tyłu). Pełna swoboda kombinacji.",
      },
      {
        title: "Stabilność barwy 15 lat",
        body: "Tusze UV stabilizowane — gwarancja barwy 15 lat. Bez wycieku, blaknięcia czy żółknięcia, nawet w pomieszczeniach z dużym nasłonecznieniem.",
      },
    ],
    useCases: [
      {
        context: "Hotele i butikowe pensjonaty",
        body: "Każdy pokój inny — autorska grafika, lokalne motywy, abstrakcja. Sufit z fotodrukiem zamienia standardowy pokój hotelowy w doświadczenie.",
      },
      {
        context: "Restauracje z charakterem",
        body: "Sufit jest ostatnią rzeczą, którą gość widzi przed wyjściem. Dobry fotodruk to inwestycja w pamięć wnętrza — i organiczny content marketing (zdjęcia w social media).",
      },
      {
        context: "Sklepy i showroomy",
        body: "Branding na suficie. Logo, kluczowy motyw, historia marki — element doświadczenia, którego klient nie zobaczy nigdzie indziej.",
      },
      {
        context: "Pokoje dziecięce",
        body: "Bajka, ulubione zwierzęta, motyw kosmiczny, mapa świata. Sufit jako element edukacyjny i magiczny, który dziecko pokocha.",
      },
    ],
    specs: [
      { label: "Technologia druku", value: "UV o rozdzielczości do 1440 DPI" },
      { label: "Maksymalny rozmiar druku", value: "5,10 m × 50 m (jeden kawałek)" },
      { label: "Materiały do druku", value: "PVC, poliester, akustyczny, translucentny" },
      { label: "Wymagana rozdzielczość pliku", value: "300 DPI w skali 1:1 (np. dla 3×3 m → 35400×35400 px)" },
      { label: "Kalibracja koloru", value: "Profil ICC, druk próbny przed produkcją" },
      { label: "Stabilność barwy", value: "15 lat (gwarancja koloru)" },
      { label: "Gwarancja", value: "15 lat" },
    ],
    comparedTo:
      'Wybierz fotodruk, gdy sufit ma być elementem identyfikacji wnętrza, a nie tylko tłem. Zwykły gładki sufit jest „niewidzialny" — fotodruk jest celowy. Inwestycja wyższa niż w klasyczny sufit (zwykle 1,5–2× cena standardowego PVC), ale efekt zupełnie inny.',
    faq: [
      {
        q: "Jakiej rozdzielczości plik muszę dostarczyć?",
        a: "Minimum 300 DPI w skali 1:1 (czyli w docelowym rozmiarze). Dla sufitu 3×3 m oznacza to plik o wymiarach 35400×35400 pikseli. Pomagamy klientom przygotować pliki — często wystarczy plik 4K (3840×2160) odpowiednio przeskalowany.",
      },
      {
        q: "Czy widać szwy lub łączenia?",
        a: "Nie. Drukujemy na jednym kawałku materiału do rozmiaru 5,10 m × 50 m. Większe powierzchnie łączymy w sposób kalibrowany — graficzny przejście, którego nie widać.",
      },
      {
        q: "Czy mogę użyć zdjęcia ze stocku?",
        a: "Tak, pod warunkiem posiadania ważnej licencji komercyjnej. Pomagamy klientom dobrać motyw — czasem pracujemy też ze stockiem premium (Adobe Stock, Shutterstock).",
      },
      {
        q: "Czy mogę zamówić druk próbny przed produkcją?",
        a: "Tak — wysyłamy próbkę 30×30 cm na zatwierdzenie koloru i jakości. To standardowy element procesu dla projektów premium (> 20 m²). Koszt próbki wliczony w cenę projektu.",
      },
      {
        q: "Ile kosztuje sufit z fotodrukiem?",
        a: "Cena startowa: ok. 290 zł/m² (PVC + standardowy fotodruk). Dla dużych projektów z autorską grafiką i drukiem próbnym: od 400 zł/m². Indywidualna wycena.",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  // 06 — Prefab
  // ════════════════════════════════════════════════════════════
  {
    slug: "sufit-prefab",
    number: "06",
    label: "Prefab",
    title: "Sufit prefabrykowany",
    italicAccent: "prefabrykowany",
    description:
      "Gotowe moduły dla budownictwa modułowego, hoteli i obiektów seryjnych. Montaż na placu w godzinach.",
    image: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&q=80",
    imageAlt: "Prefabrykowane moduły sufitów napinanych",
    linkLabel: "Prefab",

    tagline: "Moduły gotowe do montażu — produkcja w hali, instalacja na miejscu",
    intro:
      "Stretch Prefab to wersja systemu dla budownictwa modułowego, sieci hoteli i deweloperów. Sufity produkujemy w pełni w naszej hali Alto Design w Częstochowie — naciągnięte, okablowane, z gotową instalacją LED — a na placu inwestycji wystarczy je zamontować w przygotowanych ramach. Montaż jednego modułu: 1–2 godziny.",
    features: [
      {
        title: "Produkcja off-site",
        body: "Cała robota — naciąganie, okablowanie, kalibracja LED, druk fotograficzny — odbywa się w kontrolowanym środowisku hali. Bez kurzu, bez błędów montażowych.",
      },
      {
        title: "Identyczna jakość w serii",
        body: "Dla deweloperów i sieci hoteli — gwarancja, że pokój 14 wygląda identycznie jak pokój 132. Bez tolerancji wykonawczej.",
      },
      {
        title: "Skrócony harmonogram",
        body: "Czas montażu na placu spadnie z 1 dnia/jednostka do 1–2 godzin. Pozwala równolegle obsłużyć wiele pokoi w jednym dniu.",
      },
      {
        title: "Pełna integracja z BIM",
        body: "Współpracujemy z biurami architektonicznymi przy planowaniu w modelu BIM. Każdy moduł oznaczony, sklasyfikowany, przypisany do konkretnego pomieszczenia.",
      },
    ],
    useCases: [
      {
        context: "Sieci hotelowe",
        body: "Łańcuchy hotelowe (Marriott, Hilton, Accor) wymagają identyczności wszystkich pokoi tej samej kategorii. Prefab gwarantuje to nawet przy renowacji 200 pokoi w jednym hotelu.",
      },
      {
        context: "Budownictwo modułowe",
        body: "Apartamenty modułowe (np. KODA Living, Saint-Gobain Habitat) — sufit instalowany w fabryce modułu, gotowy na transport.",
      },
      {
        context: "Sklepy i sieci franczyzowe",
        body: "Identyczna identyfikacja wizualna we wszystkich punktach. Sufit z logiem marki, instalowany w 2 godziny.",
      },
      {
        context: "Duże inwestycje deweloperskie",
        body: "Apartamentowce 100+ jednostek — równoległa instalacja w wielu mieszkaniach jednocześnie, bez wąskiego gardła montażowego.",
      },
    ],
    specs: [
      { label: "Sposób produkcji", value: "Off-site (hala Alto Design, Częstochowa)" },
      { label: "Maksymalny rozmiar modułu", value: "6,50 m × 30 m" },
      { label: "Czas montażu na miejscu", value: "1–2 godziny/moduł" },
      { label: "Możliwe wykończenia", value: "Wszystkie — PVC, poliester, akustyczny, świetlny, fotodruk" },
      { label: "Minimalna ilość zamówienia", value: "20 m² (typowo: 200+ m² dla optymalnej ceny)" },
      { label: "Integracja BIM", value: "Pliki .ifc, .rvt na zamówienie" },
      { label: "Gwarancja", value: "15 lat (PVC) / 10 lat (poliester)" },
    ],
    comparedTo:
      "Prefab wybierają inwestorzy seryjni — deweloperzy, hotele, sieci handlowe. Dla pojedynczego mieszkania nie ma sensu (cena jednostkowa wyższa od klasycznej instalacji). Próg opłacalności: ok. 200 m² jednolitej powierzchni lub 20+ powtarzalnych pomieszczeń.",
    faq: [
      {
        q: "Od jakiej skali projektu warto rozważyć Prefab?",
        a: "Próg opłacalności to ok. 200 m² powierzchni jednolitej lub 20+ pomieszczeń o powtarzalnym wzorze (np. pokoje hotelowe). Poniżej — klasyczna instalacja na miejscu jest tańsza.",
      },
      {
        q: "Czy mogę zobaczyć próbkę przed zamówieniem serii?",
        a: "Tak — dla zamówień seryjnych standardowo produkujemy próbkę 1:1 jednego modułu, instalujemy w showroomie do akceptacji klienta przed produkcją całej serii.",
      },
      {
        q: "Jak długo trwa cały proces od zamówienia do montażu?",
        a: "Standardowo: 2 tygodnie produkcji + 3–5 dni montażu na placu. Dla bardzo dużych projektów (500+ jednostek) — harmonogram indywidualny, zwykle 6–10 tygodni.",
      },
      {
        q: "Czy współpracujecie z architektami i biurami projektowymi?",
        a: "Tak. To ok. 60% naszych projektów Prefab. Dostarczamy pliki BIM, próbki materiałów, konsultacje techniczne. Standardowo dla projektów > 500 m² oddelegowujemy dedykowanego project managera.",
      },
      {
        q: "Ile kosztuje sufit Prefab?",
        a: "Cena zależy od skali i specyfikacji. Typowy zakres: 180–350 zł/m² (vs 170–500 zł/m² dla instalacji klasycznej). Główne oszczędności — w czasie i logistyce na placu, nie w cenie materiału.",
      },
    ],
  },
];
