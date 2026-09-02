/**
 * Blog articles — Polish (master locale).
 * File path: /content/blog-posts.ts
 *
 * Data-file + dynamic-template pattern: every article lives here, the
 * single template at /app/blog/[slug]/page.tsx renders all of them.
 * EN and UA translations live in /content/en|ua/blog-posts.ts with the
 * same array order (slug correspondence in /lib/i18n-routes.ts).
 *
 * Editorial rules for this file:
 *   - Producer voice: first person plural, concrete numbers, no fluff.
 *   - Prices are ranges with "od ok." — verify against the current
 *     cennik before publishing and adjust in ONE place (this file).
 *   - No Polish opening quotes („) in string literals — repo rule.
 */

export type BlogTable = {
  headers: string[];
  rows: string[][];
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
  table?: BlogTable;
};

export type BlogFaq = { q: string; a: string };

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  metaDescription: string;
  excerpt: string;
  datePublished: string; // ISO
  readTime: string;
  intro: string[];
  sections: BlogSection[];
  faq: BlogFaq[];
  related: { label: string; href: string }[];
};

export const blogPosts: BlogPost[] = [
  /* ────────────────────────────────────────────────────────────
   * 01 · Ile kosztuje sufit napinany — cennik od producenta
   * ──────────────────────────────────────────────────────────── */
  {
    slug: "ile-kosztuje-sufit-napinany",
    category: "Ceny",
    title: "Ile kosztuje sufit napinany w 2026? Cennik od producenta",
    metaDescription:
      "Sufit napinany kosztuje od ok. 170 zł/m² z montażem. Cennik 2026 od producenta: PVC, poliester, akustyka, LED, fotodruk. Trzy kosztorysy i co naprawdę wpływa na cenę.",
    excerpt:
      "W internecie znajdziesz ceny od 80 do 300 zł/m² — pisane przez sklepy z pościelą i drzwiami. My produkujemy i montujemy sufity napinane, więc publikujemy realny cennik: z widełkami, przykładowymi kosztorysami i listą rzeczy, które naprawdę zmieniają cenę.",
    datePublished: "2026-08-06",
    readTime: "9 min",
    intro: [
      "Standardowy sufit napinany PVC z montażem kosztuje od ok. 170 zł/m² netto. Poliester zaczyna się od ok. 220 zł/m², sufit akustyczny od ok. 320 zł/m², a świetlny LED — od ok. 390 zł/m² z podświetleniem. Pomiar i wycena są zawsze bezpłatne, a wycena zachowuje ważność przez 30 dni.",
      "To odpowiedź w jednym akapicie. Reszta artykułu tłumaczy, skąd biorą się różnice między ofertami, co realnie podnosi cenę i jak wygląda kosztorys trzech typowych realizacji — od małej łazienki po biuro open-space. Piszemy to jako producent: PVC powstaje w naszej fabryce w Częstochowie, poliester w zakładzie grupy Stretch w Belgii. Nie przepisujemy cen z internetu — to nasze własne liczby.",
    ],
    sections: [
      {
        heading: "Skąd tak duże rozbieżności cen w internecie",
        paragraphs: [
          "Wpisz w Google frazę o cenie sufitu napinanego, a znajdziesz artykuły podające 80–120 zł, 90–300 zł albo 120–250 zł za metr. Problem w tym, że większość tych tekstów publikują serwisy, które sufitów nigdy nie widziały — sklepy meblowe, portale wnętrzarskie, generatory treści SEO. Liczby są przepisywane z innych artykułów, często sprzed kilku lat, i mieszają trzy różne rzeczy: cenę samego materiału, cenę materiału z montażem oraz ceny promocyjne bez profili i wykończenia.",
          "Druga przyczyna rozbieżności jest uczciwsza: sufit napinany to produkt wycenany indywidualnie. Ta sama folia w prostym prostokątnym pokoju i w pomieszczeniu z ośmioma wycięciami pod lampy, karniszem ukrytym i skosami to dwie różne ceny. Dlatego rzetelna odpowiedź zawsze ma formę widełek plus listy czynników — i dokładnie tak ją niżej podajemy.",
        ],
      },
      {
        heading: "Cennik orientacyjny 2026 — ceny z montażem",
        paragraphs: [
          "Poniższe widełki obejmują materiał, profile, robociznę i standardowe wykończenie. Dolna granica to proste pomieszczenie o regularnym kształcie; górna — realizacje z większą liczbą wycięć, nietypową geometrią lub materiałem z wyższej półki. Wszystkie ceny netto, za metr kwadratowy.",
        ],
        table: {
          headers: ["Rodzaj sufitu", "Cena od (zł/m²)", "Typowy zakres (zł/m²)"],
          rows: [
            ["PVC mat", "170", "170–220"],
            ["PVC połysk / satyna", "185", "185–240"],
            ["Poliester (głęboki mat)", "220", "220–290"],
            ["Akustyczny", "320", "320–450"],
            ["Świetlny LED (z podświetleniem)", "390", "390–600"],
            ["Fotodruk", "260", "260–380"],
          ],
        },
      },
      {
        heading: "Co realnie wpływa na cenę",
        paragraphs: [
          "Pięć czynników odpowiada za niemal całą różnicę między dolną a górną granicą widełek. Warto je znać, zanim porównasz oferty — bo najtańsza wycena na papierze często pomija któryś z nich.",
        ],
        list: [
          "Powierzchnia i minimum zlecenia — przy małych pomieszczeniach (łazienka, WC) obowiązuje minimalna wartość zlecenia, zwykle ok. 1 400–1 600 zł. Dojazd, pomiar, produkcja i ekipa kosztują tyle samo przy 4 m², co przy 12 m².",
          "Geometria i wycięcia — każdy otwór pod oprawę, czujnik, karnisz czy rurę to dodatkowa obróbka wzmocnionym pierścieniem. Pojedyncze wycięcie to niewielki koszt, ale dwanaście punktów w salonie robi różnicę.",
          "Oświetlenie — linia LED w profilu, gwiezdne niebo czy pełne podświetlenie transparentnej folii to osobne pozycje kosztorysu: profil, taśma, zasilacz, sterowanie.",
          "Wysokość i warunki montażu — pomieszczenia powyżej 3,5 m, praca z rusztowania, montaż poza godzinami pracy obiektu (lokale usługowe) podnoszą koszt robocizny.",
          "Materiał — PVC z naszej polskiej produkcji jest najkorzystniejszy cenowo. Poliester z Belgii i membrany akustyczne kosztują więcej, bo więcej kosztuje sam materiał i jego transport.",
        ],
      },
      {
        heading: "Trzy przykładowe kosztorysy",
        paragraphs: [
          "Łazienka 5 m², PVC połysk, jedno wycięcie pod plafon. Rachunek z samej stawki dałby ok. 950 zł — tu wchodzi minimum zlecenia, więc realny koszt to ok. 1 400–1 600 zł netto z montażem w jeden poranek.",
          "Salon 25 m², PVC mat, linia LED po jednej ścianie, sześć punktów świetlnych. Membrana z montażem ok. 4 500–5 200 zł, profil LED z taśmą i zasilaczem ok. 1 500–2 500 zł zależnie od długości i sterowania. Całość: ok. 6 000–7 700 zł netto, montaż w jeden dzień.",
          "Biuro open-space 100 m², sufit akustyczny. Przy tej skali stawka jednostkowa spada w dół widełek: ok. 32 000–38 000 zł netto z montażem rozłożonym na 2–3 dni robocze, możliwym także w weekend. Do tego dochodzi ewentualna absorpcja w przestrzeni nad membraną — to wyceniamy po pomiarze pogłosu.",
        ],
      },
      {
        heading: "Sufit napinany czy płyta G-K — porównanie kosztów w czasie",
        paragraphs: [
          "Sufit podwieszany z płyt gipsowo-kartonowych kosztuje na starcie mniej: typowo 70–150 zł/m² z gładzią i malowaniem. Uczciwe porównanie wymaga jednak spojrzenia dalej niż na fakturę z remontu. Płyty pracują na łączeniach — po 2–3 latach w wielu wnętrzach pojawiają się rysy wymagające szpachlowania i ponownego malowania, a każde odświeżenie to koszt i kurz na nowo.",
          "Sufit napinany kosztuje więcej pierwszego dnia, ale przez 15 lat gwarancji na PVC (10 lat na poliester) nie wymaga malowania, szpachlowania ani poprawek. W perspektywie dekady różnica w cenie startowej zwykle się wyrównuje — a różnica w liczbie remontów zostaje po stronie sufitu napinanego. Do tego dochodzi montaż w jeden dzień, bez wynoszenia mebli i bez pyłu, czego przy zabudowie G-K nie da się obiecać.",
        ],
      },
      {
        heading: "Jak czytać wycenę — lista kontrolna",
        paragraphs: [
          "Porównując oferty różnych firm, sprawdź nie tylko stawkę za metr, ale przede wszystkim zakres. Nasza wycena zawiera zawsze: bezpłatny pomiar z próbnikami u Ciebie, materiał z produkcji, profile, pełen montaż, wycięcia zgodnie z projektem oraz kartę gwarancyjną. Płatność: 30% zaliczki przy zamówieniu, pozostałe 70% w ciągu 7 dni po montażu. Wycena jest ważna 30 dni — bez gwiazdek.",
          "Jeszcze jedna rzecz, o której konkurencyjne artykuły nie wspominają: dla lokali mieszkalnych o powierzchni do 150 m² montaż sufitu napinanego może być objęty stawką VAT 8% zamiast 23% — na podstawie oświadczenia nabywcy, które przygotowujemy razem z umową. Przy większych realizacjach to realna różnica w cenie brutto.",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje metr sufitu napinanego z montażem?",
        a: "Od ok. 170 zł/m² netto za standardowy sufit PVC mat z montażem. Poliester od ok. 220 zł/m², akustyczny od ok. 320 zł/m², świetlny LED od ok. 390 zł/m². Dokładną cenę podajemy po bezpłatnym pomiarze.",
      },
      {
        q: "Czy pomiar i wycena są płatne?",
        a: "Nie. Pomiar z próbnikami materiałów u Ciebie w domu oraz szczegółowa wycena są zawsze bezpłatne i niezobowiązujące. Wycena zachowuje ważność przez 30 dni.",
      },
      {
        q: "Czy obowiązuje minimalna wartość zlecenia?",
        a: "Tak — przy bardzo małych pomieszczeniach (łazienka, WC, przedpokój) minimalna wartość zlecenia wynosi ok. 1 400–1 600 zł netto, bo koszt dojazdu, produkcji i ekipy jest stały niezależnie od metrażu.",
      },
      {
        q: "Czy oświetlenie jest wliczone w cenę sufitu?",
        a: "Wycięcia pod oprawy są częścią wyceny sufitu. Linie LED, gwiezdne niebo i pełne podświetlenie to osobne pozycje kosztorysu — profil, taśma, zasilacz i sterowanie wyceniamy indywidualnie przy pomiarze.",
      },
      {
        q: "Czy mogę zapłacić z VAT 8%?",
        a: "Dla lokali mieszkalnych o powierzchni do 150 m² montaż może być objęty stawką VAT 8% na podstawie oświadczenia nabywcy — dotyczy to zarówno osób prywatnych, jak i firm kupujących na cele mieszkaniowe. Przygotowujemy dokument razem z umową.",
      },
      {
        q: "Dlaczego ceny w internecie tak bardzo się różnią?",
        a: "Bo większość artykułów o cenach piszą serwisy niezwiązane z branżą, przepisując stare dane. Poza tym część ofert podaje cenę samego materiału bez montażu i profili. Porównuj zawsze pełny zakres wyceny, nie samą stawkę za metr.",
      },
    ],
    related: [
      { label: "Sufit PVC — produkcja w Polsce", href: "/rozwiazania/sufit-pvc" },
      { label: "Sufit akustyczny", href: "/rozwiazania/sufit-akustyczny" },
      { label: "Bezpłatna wycena w 24 h — formularz", href: "/wycena" },
      { label: "Sufit napinany czy podwieszany — porównanie", href: "/blog/sufit-napinany-czy-podwieszany" },
      { label: "Sufity napinane Warszawa", href: "/sufity-napinane/warszawa" },
    ],
  },

  /* ────────────────────────────────────────────────────────────
   * 02 · Sufit PVC czy poliestrowy
   * ──────────────────────────────────────────────────────────── */
  {
    slug: "sufit-pvc-czy-poliestrowy",
    category: "Materiały",
    title: "Sufit PVC czy poliestrowy? Porównanie 2026 od producenta obu",
    metaDescription:
      "PVC (od 170 zł/m², bezszwowo do 6,50 m, 15 lat gwarancji) czy poliester (od 220 zł/m², głęboki mat, na zimno, 10 lat)? Porównanie od producenta obu.",
    excerpt:
      "Jesteśmy jedyną firmą w Polsce, która produkuje oba materiały: PVC w Częstochowie, poliester w belgijskim zakładzie grupy Stretch. Dlatego to porównanie nie musi nikogo faworyzować — pokazujemy parametry i mówimy wprost, kiedy który materiał jest jedynym słusznym wyborem.",
    datePublished: "2026-08-06",
    readTime: "8 min",
    intro: [
      "Krótka odpowiedź: do łazienki, kuchni i wszędzie tam, gdzie istnieje ryzyko zalania z góry — PVC. Tam, gdzie liczy się najgłębszy mat premium i montaż na zimno przy wrażliwym wyposażeniu — poliester. Reszta artykułu to parametry, które za tą odpowiedzią stoją.",
      "Większość porównań w internecie pisze firma, która sprzedaje tylko jeden z tych materiałów — i wnioski są łatwe do przewidzenia. My jesteśmy w innej sytuacji: folię PVC produkujemy we własnej fabryce w Częstochowie, a membrany poliestrowe powstają w zakładzie Stretch Productions w Belgii, należącym do tej samej międzynarodowej grupy Stretch. Zarabiamy na obu. Możemy więc doradzić ten, który faktycznie pasuje do Twojego wnętrza.",
    ],
    sections: [
      {
        heading: "Dwa materiały, dwie fabryki, jeden system",
        paragraphs: [
          "Sufit napinany to zawsze ten sam koncept: membrana naciągnięta na aluminiowy profil przy ścianach. Różnica zaczyna się na poziomie materiału. Folia PVC to tworzywo, które podczas montażu podgrzewa się nagrzewnicą — membrana staje się elastyczna, a po ostygnięciu napina się idealnie. Poliester to tkanina powlekana poliuretanem, montowana na zimno — bez nagrzewnicy, bez podnoszenia temperatury w pomieszczeniu.",
          "Oba materiały produkowane są w ramach grupy Stretch: PVC w Polsce (co oznacza krótszy termin produkcji — 5 dni roboczych), poliester w Belgii (5 dni dla wersji standardowych, do 15 dni dla kolorów i druku, plus ok. 3 dni transportu). Oba montuje ta sama, przeszkolona ekipa według tego samego protokołu.",
        ],
      },
      {
        heading: "Porównanie parametrów",
        paragraphs: [
          "Tabela poniżej zestawia parametry, które realnie decydują o wyborze. Zwróć uwagę zwłaszcza na trzy wiersze: szerokość bezszwową, zachowanie przy zalaniu i gwarancję.",
        ],
        table: {
          headers: ["Parametr", "PVC", "Poliester"],
          rows: [
            ["Szerokość bezszwowa", "do 6,50 m", "do 5,15 m"],
            ["Montaż", "na ciepło (nagrzewnica)", "na zimno"],
            [
              "Wykończenia",
              "mat, połysk, satyna, brokat, transparent, fotodruk",
              "głęboki mat, fotodruk",
            ],
            ["Zachowanie przy zalaniu", "trzyma wodę jak membrana", "przepuszcza wodę powoli"],
            ["Wilgoć i łazienka", "w pełni odporny", "odporny, ale nie do stref mokrych"],
            ["Produkcja", "Polska, 5 dni roboczych", "Belgia, 5–15 dni + transport"],
            ["Gwarancja", "15 lat", "10 lat"],
            ["Cena z montażem (netto)", "od 170 zł/m² (mat 170–220, połysk 185–240)", "od 220 zł/m² (220–290)"],
            ["Sufity akustyczne", "—", "mikroperforowany poliester klasy A2"],
            ["Typowy wybór do", "łazienki, kuchni, połysku, szerokich salonów", "sypialni i salonów premium, biur, sal"],
          ],
        },
      },
      {
        heading: "Kiedy PVC jest jedynym słusznym wyborem",
        paragraphs: [
          "Są scenariusze, w których nie ma dyskusji — doradzimy PVC, nawet jeśli przyszedłeś zdecydowany na tkaninę.",
        ],
        list: [
          "Łazienka, kuchnia, pralnia — PVC nie chłonie wody, para skrapla się na powierzchni i znika po przewietrzeniu. To materiał stworzony do stref wilgotnych.",
          "Mieszkanie w bloku z ryzykiem zalania — folia PVC zatrzymuje wodę z awarii u sąsiada jak membrana. Poliester przepuszcza wodę powoli, więc ochrona wyposażenia jest nieporównywalnie słabsza.",
          "Połysk, satyna, brokat, transparent — te wykończenia istnieją tylko w PVC. Poliester ma jedno, za to wybitne: najgłębszy mat na rynku.",
          "Szerokie pomieszczenia do 6,50 m — nasza folia PVC to najszersza bezszwowa membrana na rynku. Salon 6 m szerokości: PVC bez szwu, poliester już z łączeniem.",
          "Budżet i termin — PVC z polskiej produkcji jest tańszy i gotowy w 5 dni roboczych, bez transportu z zagranicy.",
        ],
      },
      {
        heading: "Kiedy poliester wygrywa",
        paragraphs: [
          "Poliester nie jest gorszym PVC — to materiał do innych zadań. W tych pięciu sytuacjach doradzimy właśnie jego.",
        ],
        list: [
          "Wnętrza premium z głębokim matem — powierzchnia poliestru wygląda jak perfekcyjna gładź malarska. Żaden mat PVC nie schodzi tak nisko z połyskiem.",
          "Montaż na zimno — w pomieszczeniach z wrażliwym wyposażeniem (antyki, instrumenty, dzieła sztuki, serwerownie) brak nagrzewnicy bywa warunkiem koniecznym.",
          "Sufity akustyczne — nasze membrany akustyczne bazują na mikroperforowanym poliestrze klasy A2. Do biur, restauracji i sal konferencyjnych to naturalny wybór.",
          "Duże chłodne przestrzenie — poliester zachowuje stabilne napięcie w szerszym zakresie temperatur, co doceniają lokale usługowe i przestrzenie słabo ogrzewane zimą.",
          "Wierność projektowi architekta — jeśli projekt zakłada konkretny, matowy, tkaninowy charakter powierzchni, poliester odda go wierniej niż jakikolwiek mat foliowy.",
        ],
      },
      {
        heading: "Mit: tkanina oddycha, folia nie",
        paragraphs: [
          "To zdanie powtarza się w co drugim porównaniu i brzmi przekonująco, ale w praktyce niewiele znaczy. Żaden sufit — napinany, podwieszany ani betonowy — nie zastąpi wentylacji pomieszczenia. Paroprzepuszczalność membrany nie wpływa na jakość powietrza, którym oddychasz; wpływa na nią kratka wentylacyjna i wyciąg. Dlatego przy pomiarze zawsze sprawdzamy wentylację, niezależnie od wybranego materiału.",
          "Realna różnica dotyczy czego innego: zachowania przy wodzie. PVC działa jak szczelna membrana — i to jest zaleta przy zalaniu. Poliester przepuszcza wodę powoli — i to bywa zaletą tam, gdzie zależy nam na tym, żeby ewentualna wilgoć nad sufitem nie została zamknięta. Oba zachowania są przewidywalne; wybieramy to, które pasuje do pomieszczenia.",
        ],
      },
      {
        heading: "Jak wybieramy na pomiarze",
        paragraphs: [
          "Nie musisz rozstrzygać tego sporu przed naszą wizytą. Na bezpłatny pomiar przyjeżdżamy z próbnikami obu materiałów we wszystkich wykończeniach — zobaczysz różnicę matu na żywo, przy Twoim świetle, na tle Twoich ścian. Doradca przechodzi z Tobą przez pomieszczenia i dla każdego wskazuje materiał z uzasadnieniem. Zdarza się, że w jednym mieszkaniu montujemy oba: poliester w salonie i sypialni, PVC w łazience i kuchni. System jest jeden, profil ten sam — różni się tylko membrana.",
        ],
      },
    ],
    faq: [
      {
        q: "Który sufit jest tańszy — PVC czy poliestrowy?",
        a: "PVC. Produkujemy go we własnej fabryce w Polsce, więc odpada koszt transportu z zagranicy. Poliester z produkcji belgijskiej jest zwykle ok. 20–30% droższy za metr.",
      },
      {
        q: "Który materiał do łazienki?",
        a: "Zdecydowanie PVC. Nie chłonie wody, jest w pełni odporny na wilgoć i przy zalaniu z góry zatrzymuje wodę jak membrana. Poliester nadaje się do pomieszczeń suchych.",
      },
      {
        q: "Czy poliester zatrzyma wodę przy zalaniu przez sąsiada?",
        a: "Nie tak jak PVC. Tkanina poliestrowa przepuszcza wodę powoli, więc nie ochroni wyposażenia w takim stopniu jak szczelna folia PVC. W blokach do pomieszczeń z ryzykiem zalania doradzamy PVC.",
      },
      {
        q: "Czy sufit PVC ma zapach po montażu?",
        a: "Bezpośrednio po montażu na ciepło może być wyczuwalny delikatny zapach, który znika po przewietrzeniu w ciągu 24–48 godzin. Nasze folie mają atesty higieniczne dopuszczające je do pomieszczeń mieszkalnych.",
      },
      {
        q: "Który materiał jest bardziej matowy?",
        a: "Poliester. Jego powierzchnia ma najgłębszy mat dostępny w sufitach napinanych i wygląda jak idealna gładź malarska. Mat PVC jest bardzo dobry, ale przy bocznym świetle delikatnie ustępuje tkaninie.",
      },
      {
        q: "Czy sufit poliestrowy jest dostępny w połysku?",
        a: "Nie. Poliester występuje wyłącznie w głębokim macie (także z fotodrukiem). Połysk, satyna, brokat i transparent istnieją tylko w folii PVC — to jedno z głównych kryteriów wyboru między materiałami.",
      },
    ],
    related: [
      { label: "Sufit PVC recyklingowy", href: "/rozwiazania/sufit-pvc" },
      { label: "Sufit poliestrowy Stretch", href: "/rozwiazania/sufit-poliestrowy" },
      { label: "Ile kosztuje sufit napinany — cennik", href: "/blog/ile-kosztuje-sufit-napinany" },
      { label: "Bezpłatna wycena w 24 h — formularz", href: "/wycena" },
      { label: "Sufity napinane Wrocław", href: "/sufity-napinane/wroclaw" },
    ],
  },

  /* ────────────────────────────────────────────────────────────
   * 03 · Sufit napinany w łazience — wilgoć i zalanie
   * ──────────────────────────────────────────────────────────── */
  {
    slug: "sufit-napinany-w-lazience",
    category: "Łazienka",
    title: "Sufit napinany w łazience — wilgoć, para i zalanie (2026)",
    metaDescription:
      "Tak — PVC to najlepszy sufit do łazienki: nie chłonie wody, nie pleśnieje, przy zalaniu zatrzymuje wodę. Kosztorys łazienki 5 m² i protokół przy awarii.",
    excerpt:
      "Łazienka to najtrudniejsze pomieszczenie dla każdego sufitu: ciągła wilgoć plus ryzyko zalania z góry. Piszemy, jak naprawdę zachowuje się folia PVC przy parze i przy awarii u sąsiada — łącznie z protokołem serwisowym krok po kroku, którego nie znajdziesz w artykułach przepisywanych z materiałów prasowych.",
    datePublished: "2026-08-06",
    readTime: "7 min",
    intro: [
      "Tak — sufit napinany z folii PVC to jedno z najlepszych rozwiązań do łazienki. Nie chłonie wody, para skrapla się na powierzchni i znika po przewietrzeniu, a przy zalaniu z góry membrana zatrzymuje wodę i chroni pomieszczenie. Ale są dwa warunki, o których marketingowe artykuły milczą: sprawna wentylacja i właściwe postępowanie przy awarii.",
      "Ten tekst piszemy z perspektywy ekipy, która łazienki montuje i która przyjeżdża na zalania. Znajdziesz tu dokładny protokół postępowania krok po kroku — co robisz Ty, co robimy my — oraz uczciwą odpowiedź na pytanie o pleśń, której nie da się załatwić samym sufitem.",
    ],
    sections: [
      {
        heading: "Dlaczego łazienka to najtrudniejsze pomieszczenie",
        paragraphs: [
          "Na sufit w łazience działają jednocześnie dwa zagrożenia. Pierwsze jest codzienne: para wodna z prysznica i wanny, która osadza się na najzimniejszej powierzchni w pomieszczeniu — czyli zwykle na suficie. Malowany strop chłonie tę wilgoć, z czasem łuszczy się i staje się pożywką dla pleśni. Drugie zagrożenie jest losowe, ale w blokach realne: awaria instalacji piętro wyżej. Pęknięty wężyk pralki potrafi w godzinę zamienić remont łazienki w remont generalny.",
          "Sufit napinany PVC odpowiada na oba zagrożenia jednym materiałem: folią, która wody nie chłonie i której woda nie niszczy.",
        ],
      },
      {
        heading: "Jak folia PVC zachowuje się przy wilgoci",
        paragraphs: [
          "PVC ma zerową nasiąkliwość. Para wodna po kąpieli skrapla się na powierzchni membrany w drobne krople, które po przewietrzeniu łazienki po prostu odparowują — dokładnie tak, jak z kafelków czy lustra. Membrana nie pęcznieje, nie łuszczy się, nie zmienia koloru i nie wymaga malowania. Na samej folii pleśń nie ma się czym żywić.",
          "Przestrzeń między membraną a stropem pozostaje sucha, bo wilgoć nie przenika przez folię. Nie potrzebujesz dodatkowej hydroizolacji sufitu — membrana sama jest barierą. W praktyce serwisowej najczęstszy zabieg pielęgnacyjny w łazience to przetarcie sufitu miękką ściereczką raz na kilka miesięcy.",
        ],
      },
      {
        heading: "PVC, poliester czy malowany strop — co wybrać do łazienki",
        paragraphs: [
          "Produkujemy oba materiały napinane — PVC w Częstochowie, poliester w belgijskim zakładzie grupy Stretch — więc nie musimy faworyzować żadnego. W łazience wybór jest jednak jednoznaczny i tabela pokazuje dlaczego.",
        ],
        table: {
          headers: ["Kryterium", "PVC mat / połysk", "Poliester", "Malowany strop"],
          rows: [
            ["Odporność na wilgoć i parę", "pełna — zerowa nasiąkliwość", "dobra w pomieszczeniach suchych, nie do stref mokrych", "słaba — farba łuszczy się z czasem"],
            ["Zmywalność", "wilgotna ściereczka, bez chemii", "odkurzanie na sucho", "tylko ponowne malowanie"],
            ["Zachowanie przy zalaniu z góry", "zatrzymuje wodę jak membrana", "przepuszcza wodę powoli", "zacieki, odpadający tynk"],
            ["Pleśń na powierzchni", "brak pożywki — nie rozwija się", "brak pożywki przy sprawnej wentylacji", "częsta przy słabej wentylacji"],
            ["Cena z montażem", "od 170 zł/m² (połysk od 185 zł/m²)", "od 220 zł/m²", "najtańsza, ale odnawiana co kilka lat"],
          ],
        },
      },
      {
        heading: "Uczciwie: sufit nie naprawi złej wentylacji",
        paragraphs: [
          "Tu musimy powiedzieć coś, czego nie znajdziesz w tekstach reklamowych: żaden sufit nie rozwiąże problemu łazienki bez działającej wentylacji. Jeśli kratka jest zatkana albo wyciąg nie działa, wilgoć nie zniknie — osiądzie na ścianach, fugach i silikonach, i tam pojawi się pleśń, niezależnie od tego, co masz nad głową. Sufit napinany jest odporny na skutki wilgoci, ale nie usuwa jej przyczyny.",
          "Dlatego podczas bezpłatnego pomiaru nasz doradca sprawdza wentylację i mówi wprost, jeśli wymaga ona udrożnienia przed montażem. Wolimy przesunąć termin o tydzień, niż montować sufit w łazience, w której za rok będziesz walczyć z grzybem na ścianach.",
        ],
      },
      {
        heading: "Zalanie przez sąsiada — protokół krok po kroku",
        paragraphs: [
          "To scenariusz, dla którego wielu klientów w blokach w ogóle decyduje się na sufit napinany. Folia PVC przy awarii z góry zachowuje się jak membrana: rozciąga się, tworzy widoczne obniżenie i zatrzymuje wodę — w typowej łazience od kilkudziesięciu do ponad stu litrów, zależnie od powierzchni. Woda nie leje się na meble, elektronikę i podłogę. Co robić, kiedy to się stanie:",
        ],
        list: [
          "Zamknij źródło — zakręć wodę u siebie i zaalarmuj sąsiada z góry lub administrację, żeby odcięli awarię. To zawsze krok pierwszy.",
          "Nie nakłuwaj membrany — przebicie folii oznacza niekontrolowany wypływ całej wody naraz i zwykle konieczność wymiany membrany. Napięta folia z wodą wygląda groźnie, ale trzyma.",
          "Nie podpieraj i nie wybieraj wody przez krawędź — zostaw obniżenie w spokoju, wyłącz oświetlenie wpuszczane w sufit, jeśli woda zbiera się w jego okolicy.",
          "Zadzwoń do nas — +48 730 700 333. Umawiamy interwencję serwisową; opisz, gdzie zbiera się woda i czy awaria u źródła jest już opanowana.",
          "Nasza ekipa spuszcza wodę w sposób kontrolowany — przez otwór po oprawie oświetleniowej albo przez odpięty narożnik membrany, do naczyń. Bez zalewania pomieszczenia.",
          "Osuszenie i ponowny naciąg — przestrzeń nad membraną zostaje osuszona, a folia po podgrzaniu nagrzewnicą wraca do idealnego napięcia. W większości przypadków bez wymiany membrany i bez śladu po awarii.",
        ],
      },
      {
        heading: "Zalanie a gwarancja — jak to rozliczyć",
        paragraphs: [
          "Zalanie z winy sąsiada lub awarii instalacji to zdarzenie losowe — nie wada produktu — więc formalnie rozlicza się je z ubezpieczenia mieszkania Twojego lub sprawcy, tak samo jak zniszczoną podłogę czy meble. Dobra wiadomość jest taka, że interwencja serwisowa przy suficie napinanym jest zwykle wielokrotnie tańsza niż remont łazienki po zalaniu bez niego: w większości przypadków membranę ratujemy bez wymiany, a protokół z interwencji wystawiamy tak, by nadawał się wprost do dokumentacji szkody dla ubezpieczyciela.",
        ],
      },
      {
        heading: "Ile kosztuje sufit napinany w łazience",
        paragraphs: [
          "Typowa łazienka w bloku ma 4–6 m². Ze stawki za metr (PVC mat od 170 zł/m², połysk od 185 zł/m²) wyszłoby mniej niż 1 000 zł — i tu wchodzi minimum zlecenia. Dojazd, pomiar, produkcja membrany na wymiar i dwuosobowa ekipa kosztują tyle samo przy 5 m², co przy 15 m², dlatego realny koszt pojedynczej łazienki to ok. 1 400–1 600 zł netto z montażem w jeden poranek. Jeśli w tym samym terminie robimy też kuchnię albo przedpokój, stawka wraca do zwykłych widełek za metr, bo koszty stałe rozkładają się na większą powierzchnię.",
          "Dla lokali mieszkalnych do 150 m² montaż może być objęty stawką VAT 8% zamiast 23% — na podstawie oświadczenia nabywcy, które przygotowujemy razem z umową. Wycena po bezpłatnym pomiarze jest ważna 30 dni.",
        ],
      },
      {
        heading: "Mat czy połysk, oświetlenie i inne decyzje łazienkowe",
        paragraphs: [
          "Połysk optycznie powiększa małe łazienki i pięknie odbija światło — to najczęstszy wybór przy metrażach do 6 m². Mat i satyna dają spokojniejszy, bardziej hotelowy charakter i lepiej maskują ewentualne ślady po kroplach w okolicy prysznica. W strefach mokrych stosujemy oprawy o stopniu ochrony min. IP44; ich rozmieszczenie planujemy na pomiarze, żeby wycięcia trafiły dokładnie tam, gdzie potrzebujesz światła — nad lustrem i w strefie kąpieli.",
          "Minimalne obniżenie sufitu to 15 mm przy samym profilu, a 3–4 cm przy oprawach wpuszczanych — w typowej łazience w bloku różnica jest niezauważalna, a zyskujesz idealnie równą, zmywalną powierzchnię na 15 lat gwarancji.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy sufit napinany zatrzyma wodę przy zalaniu przez sąsiada?",
        a: "Tak. Folia PVC rozciąga się i zatrzymuje wodę jak membrana — w typowej łazience od kilkudziesięciu do ponad stu litrów. Nie nakłuwaj obniżenia; zadzwoń do serwisu, a wodę spuścimy w sposób kontrolowany i przywrócimy naciąg membrany, zwykle bez jej wymiany.",
      },
      {
        q: "Czy pod sufitem napinanym w łazience powstaje pleśń?",
        a: "Na samej folii PVC pleśń się nie rozwija — materiał nie chłonie wody i nie stanowi pożywki. Warunkiem zdrowej łazienki pozostaje jednak sprawna wentylacja: bez niej wilgoć osiądzie na ścianach i fugach niezależnie od rodzaju sufitu.",
      },
      {
        q: "Czy potrzebna jest dodatkowa hydroizolacja sufitu?",
        a: "Nie. Membrana PVC sama stanowi barierę dla wilgoci — przestrzeń nad sufitem pozostaje sucha. To mniej warstw i niższy koszt remontu łazienki.",
      },
      {
        q: "O ile sufit napinany obniży łazienkę?",
        a: "Minimalnie 15 mm przy samym profilu przyściennym, a 3–4 cm, gdy montujemy oprawy wpuszczane. W typowej łazience w bloku ta różnica jest praktycznie niezauważalna.",
      },
      {
        q: "Mat czy połysk do małej łazienki?",
        a: "Do małych metraży najczęściej doradzamy połysk — optycznie powiększa pomieszczenie i dokłada światła. Mat i satyna dają spokojniejszy charakter i lepiej maskują ślady kropel przy prysznicu. Oba wykończenia zobaczysz na próbnikach podczas bezpłatnego pomiaru.",
      },
    ],
    related: [
      { label: "Sufit PVC — idealny do łazienki", href: "/rozwiazania/sufit-pvc" },
      { label: "PVC czy poliester — porównanie", href: "/blog/sufit-pvc-czy-poliestrowy" },
      { label: "Ile kosztuje sufit napinany — cennik 2026", href: "/blog/ile-kosztuje-sufit-napinany" },
      { label: "Bezpłatna wycena w 24 h — formularz", href: "/wycena" },
      { label: "Sufity napinane Łódź", href: "/sufity-napinane/lodz" },
    ],
  },

  /* ────────────────────────────────────────────────────────────
   * 04 · Sufit napinany czy podwieszany — porównanie
   * ──────────────────────────────────────────────────────────── */
  {
    slug: "sufit-napinany-czy-podwieszany",
    category: "Porównania",
    title: "Sufit napinany czy podwieszany? Porównanie 2026 od producenta",
    metaDescription:
      "G-K kosztuje ok. 70–150 zł/m², sufit napinany od 170 zł/m² — ale w 10 lat koszty się wyrównują. Porównujemy montaż, pył, obniżenie, wilgoć, LED i naprawy.",
    excerpt:
      "Płyta gipsowo-kartonowa jest tańsza na starcie, sufit napinany wygrywa czasem montażu i kosztami w dłuższym horyzoncie. Zamiast agitacji — uczciwa tabela dziewięciu parametrów, lista sytuacji, w których G-K jest lepszym wyborem, i wariant hybrydowy, o którym mało kto mówi.",
    datePublished: "2026-09-02",
    readTime: "9 min",
    intro: [
      "Krótka odpowiedź z liczbami: sufit podwieszany z płyt G-K kosztuje na starcie ok. 70–150 zł/m² z gładzią i malowaniem, sufit napinany — od 170 zł/m² z montażem. W perspektywie 10 lat koszty zwykle się wyrównują, bo zabudowę G-K trzeba odświeżać co 5–7 lat, a pierwsze rysy na łączeniach potrafią pojawić się już po 2–3 latach. Do tego sufit napinany montuje się w 1 dzień, bez pyłu, i zabiera minimalnie 15 mm wysokości (3–4 cm z oświetleniem).",
      "Piszemy to porównanie jako producent sufitów napinanych — folia PVC powstaje w naszej fabryce w Częstochowie, poliester w belgijskim zakładzie grupy Stretch — więc uprzedzamy: mamy w tym sporze interes. Dlatego zamiast sloganów dostajesz tabelę parametrów i osobną sekcję o tym, kiedy płyta G-K jest po prostu lepszym wyborem. Takie porównanie łatwiej zweryfikować niż laurkę.",
    ],
    sections: [
      {
        heading: "Ile kosztuje jeden i drugi — dziś i za 10 lat",
        paragraphs: [
          "Koszt startowy wygrywa G-K: typowa zabudowa z płyt z gładzią i dwukrotnym malowaniem to ok. 70–150 zł/m², zależnie od regionu i skomplikowania. Sufit napinany zaczyna się od 170 zł/m² za PVC mat z montażem (połysk i satyna 185–240 zł/m², poliester od 220 zł/m²).",
          "Rachunek zmienia się w czasie. Płyty pracują na łączeniach — mikropęknięcia wymagają szpachlowania i ponownego malowania, a pełne odświeżenie zabudowy wypada średnio co 5–7 lat. Każdy taki remont to koszt, wynoszenie mebli i kurz. Sufit napinany przez cały okres gwarancji — 15 lat na PVC, 10 lat na poliester — nie wymaga malowania ani poprawek; pielęgnacja ogranicza się do przetarcia ściereczką. Po dekadzie różnica w cenie startowej zwykle znika, a różnica w liczbie przeżytych remontów zostaje.",
        ],
      },
      {
        heading: "Porównanie parametrów — tabela",
        paragraphs: [
          "Dziewięć parametrów, które realnie decydują przy remoncie. Wiersze o pyle, czasie i obniżeniu warto czytać razem — to one opisują, jak remont wygląda w praktyce, a nie tylko na fakturze.",
        ],
        table: {
          headers: ["Parametr", "Sufit napinany", "Sufit podwieszany G-K"],
          rows: [
            ["Koszt startowy", "od 170 zł/m²", "ok. 70–150 zł/m²"],
            ["Koszt w 10 lat", "bez odświeżania (gwarancja do 15 lat)", "1–2 odświeżenia + naprawy rys"],
            ["Czas montażu", "1 dzień do 50 m²", "realnie 3–7 dni z przerwami technologicznymi"],
            ["Pył i remont", "bez pyłu, meble zostają", "szlifowanie gładzi = pył w całym mieszkaniu"],
            ["Minimalne obniżenie", "od 15 mm (3–4 cm z oświetleniem)", "zwykle 5–12 cm, zależnie od rusztu i opraw"],
            ["Wilgoć i łazienka", "PVC w pełni odporny", "płyta zielona odporna warunkowo, wymaga malowania"],
            ["Naprawy i dostęp", "membrana demontowalna bez niszczenia profili", "naprawa = wycinanie i szpachlowanie"],
            ["Oświetlenie LED", "linie LED, podświetlenia, gwiezdne niebo w systemie", "wymaga zaplanowania w konstrukcji, trudne zmiany"],
            ["Formy wielopoziomowe", "pojedyncze poziomy i łuki", "dowolne nisze, półki i kaskady — tu G-K króluje"],
          ],
        },
      },
      {
        heading: "Kiedy sufit podwieszany jest lepszym wyborem",
        paragraphs: [
          "Uczciwie: są scenariusze, w których doradzimy zabudowę G-K albo połączenie obu technologii, mimo że zarabiamy na napinanych.",
        ],
        list: [
          "Wielopoziomowe formy dekoracyjne — nisze, półki z podświetleniem, kaskadowe uskoki. G-K formuje się dowolnie; sufit napinany gra na wielkich, idealnie gładkich płaszczyznach.",
          "Docieplenie stropu — jeśli planujesz wełnę mineralną pod stropem (ostatnia kondygnacja, strop nad przejazdem), zabudowa G-K jest naturalnym nośnikiem izolacji.",
          "Jednorazowo najniższy budżet — gdy liczy się wyłącznie cena na fakturze z remontu, a perspektywa odświeżania za kilka lat nie ma znaczenia, G-K pozostaje najtańszym rozwiązaniem.",
          "Samodzielne wykonanie — płyty położy każda lokalna ekipa remontowa, a wprawny majsterkowicz sam. Sufit napinany wymaga produkcji membrany na wymiar i przeszkolonego zespołu.",
        ],
      },
      {
        heading: "Kiedy sufit napinany wygrywa bezdyskusyjnie",
        paragraphs: [
          "Po drugiej stronie są sytuacje, w których przewaga technologii napinanej jest obiektywna i mierzalna.",
        ],
        list: [
          "Remont w zamieszkanym mieszkaniu — 1 dzień montażu, zero pyłu, meble zostają na miejscu. Przy G-K szlifowanie gładzi oznacza pył w każdym pomieszczeniu i kilka dni niedostępnej przestrzeni.",
          "Niskie pomieszczenia — 15 mm obniżenia przy samym profilu to wartość, z którą żaden ruszt G-K nie konkuruje. W bloku z 2,50 m wysokości to argument rozstrzygający.",
          "Łazienka i kuchnia — folia PVC nie chłonie wilgoci, nie wymaga malowania i przy zalaniu z góry zatrzymuje wodę. Płyta, nawet impregnowana, wilgoci długoterminowo nie lubi.",
          "Zintegrowane oświetlenie — linie LED w profilach, podświetlane płaszczyzny i gwiezdne niebo są częścią systemu, z możliwością serwisu przez demontowalną membranę.",
          "Dostęp do instalacji — membranę można zdjąć i założyć ponownie bez niszczenia czegokolwiek. Wycinanie otworów rewizyjnych w G-K to przy tym inna epoka.",
        ],
      },
      {
        heading: "Wariant hybrydowy: zabudowa G-K plus membrana",
        paragraphs: [
          "Ten wariant znika w większości porównań, a wybiera go coraz więcej architektów: obwodowa zabudowa G-K formuje nisze i uskoki, a centralną płaszczyznę wypełnia napinana membrana — gładka, podświetlana albo akustyczna. Profile sufitu napinanego montujemy bezpośrednio do konstrukcji G-K, więc obie technologie łączą się bez kompromisów. Efekt: dekoracyjność zabudowy tam, gdzie jej potrzeba, i wielka idealna płaszczyzna tam, gdzie płyta pokazuje każdą nierówność.",
          "Jeśli rozważasz taki układ, przygotuj rysunek lub zdjęcie inspiracji przed bezpłatnym pomiarem — doradca od razu powie, jak podzielić strefy i co wyjdzie taniej.",
        ],
      },
      {
        heading: "Jak podjąć decyzję w praktyce",
        paragraphs: [
          "Zacznij od trzech pytań. Czy remontujesz w zamieszkanym lokalu? Jeśli tak — waga pyłu i czasu rośnie. Ile masz wysokości? Poniżej 2,60 m każdy centymetr obniżenia boli. Jaki jest horyzont? Mieszkanie na wynajem na 3 lata to inna matematyka niż dom na 20 lat. Odpowiedzi na te pytania zwykle rozstrzygają spór szybciej niż jakakolwiek tabela — a jeśli nie, na bezpłatnym pomiarze policzymy oba warianty dla Twojego metrażu, z wyceną ważną 30 dni.",
        ],
      },
    ],
    faq: [
      {
        q: "Co jest tańsze — sufit napinany czy podwieszany?",
        a: "Na starcie podwieszany: zabudowa G-K z gładzią i malowaniem to ok. 70–150 zł/m², sufit napinany od 170 zł/m² z montażem. W horyzoncie 10 lat koszty zwykle się wyrównują, bo G-K wymaga odświeżania co 5–7 lat, a sufit napinany przez okres gwarancji nie wymaga żadnych prac.",
      },
      {
        q: "Który sufit zabiera mniej wysokości pomieszczenia?",
        a: "Napinany: minimalne obniżenie to 15 mm przy samym profilu, a 3–4 cm przy oprawach wpuszczanych. Zabudowa G-K na ruszcie zabiera zwykle 5–12 cm.",
      },
      {
        q: "Ile trwa montaż jednego i drugiego?",
        a: "Sufit napinany do 50 m² montujemy w 1 dzień roboczy, zespołem dwuosobowym, bez pyłu. Zabudowa G-K z gładzią, szlifowaniem i malowaniem to realnie 3–7 dni z przerwami technologicznymi na schnięcie.",
      },
      {
        q: "Co lepsze do łazienki — napinany czy G-K?",
        a: "Napinany z folii PVC: zerowa nasiąkliwość, brak malowania, odporność na parę i zatrzymywanie wody przy zalaniu z góry. Płyta G-K, nawet impregnowana, wymaga malowania i długoterminowo gorzej znosi wilgoć.",
      },
      {
        q: "Czy sufit napinany można zamontować na zabudowie G-K?",
        a: "Tak — profile montujemy bezpośrednio do konstrukcji gipsowo-kartonowej. To popularny wariant hybrydowy: obwodowe nisze i uskoki z G-K, a centralna płaszczyzna z napinanej membrany, także podświetlanej.",
      },
      {
        q: "Czy sufit napinany da się zdemontować i założyć ponownie?",
        a: "Tak. Membranę można zdjąć — na przykład dla dostępu do instalacji — i ponownie napiąć bez wymiany profili. Przy G-K każda ingerencja oznacza cięcie płyty, szpachlowanie i malowanie.",
      },
    ],
    related: [
      { label: "Ile kosztuje sufit napinany — cennik 2026", href: "/blog/ile-kosztuje-sufit-napinany" },
      { label: "Bezpłatna wycena w 24 h — formularz", href: "/wycena" },
      { label: "Sufit PVC — produkcja w Polsce", href: "/rozwiazania/sufit-pvc" },
      { label: "Sufity napinane Warszawa", href: "/sufity-napinane/warszawa" },
    ],
  },

  /* ────────────────────────────────────────────────────────────
   * 05 · Wady sufitów napinanych — szczerze
   * ──────────────────────────────────────────────────────────── */
  {
    slug: "wady-sufitow-napinanych",
    category: "Poradniki",
    title: "Wady sufitów napinanych — producent odpowiada szczerze",
    metaDescription:
      "Realne wady sufitów napinanych: ostre przedmioty, koszt startowy wyższy niż G-K, minimum zlecenia ok. 1 400–1 600 zł, dni produkcji. I mity, które prostujemy.",
    excerpt:
      "Artykuły o wadach sufitów napinanych piszą zwykle firmy od gipsu-kartonu albo portale, które sufitu nie widziały. My je produkujemy, więc znamy wady z pierwszej ręki — cztery są realne i opisujemy je z liczbami. Reszta krążących zarzutów to mity, które prostujemy punkt po punkcie.",
    datePublished: "2026-09-02",
    readTime: "8 min",
    intro: [
      "Tak, sufity napinane mają wady — i jako producent znamy je lepiej niż ktokolwiek. Cztery są realne: membranę można uszkodzić ostrym przedmiotem, koszt startowy (od 170 zł/m²) jest wyższy niż zabudowy G-K, przy małych metrażach obowiązuje minimum zlecenia ok. 1 400–1 600 zł, a produkcja na wymiar oznacza kilka dni oczekiwania zamiast montażu od ręki. Reszta zarzutów krążących po internecie to w większości mity — prostujemy je niżej.",
      "Folia PVC powstaje w naszej fabryce w Częstochowie, poliester w zakładzie grupy Stretch w Belgii. Widzimy więc i produkcję, i serwis — także te zgłoszenia, w których coś poszło nie tak. Ten tekst pisze strona, która na sufitach zarabia, ale wolimy stracić część klientów przez szczerość niż zdobyć ich obietnicami bez pokrycia.",
    ],
    sections: [
      {
        heading: "Cztery realne wady — bez owijania",
        paragraphs: [
          "Zacznijmy od tego, co naprawdę bywa problemem — z realną skalą zjawiska, nie z katastroficznym nagłówkiem.",
        ],
        list: [
          "Podatność na ostre przedmioty — napięta membrana to nie beton. Wnoszona szafa, karnisz niesiony na sztorc czy wystrzelony korek potrafią zostawić ślad. To najczęstsza przyczyna wezwań serwisowych niezwiązanych z instalacjami.",
          "Wyższy koszt startowy — od 170 zł/m² wobec ok. 70–150 zł/m² za zabudowę G-K z malowaniem. Różnica zwraca się w kolejnych latach, ale na fakturze z remontu jest widoczna.",
          "Minimum zlecenia — przy pojedynczej łazience czy WC obowiązuje minimalna wartość ok. 1 400–1 600 zł netto, bo dojazd, produkcja membrany i ekipa kosztują tyle samo przy 4 i przy 12 m².",
          "Produkcja na wymiar — membrana powstaje pod konkretne pomieszczenie: PVC w ok. 5 dni roboczych w Polsce, poliester 5–15 dni w Belgii plus transport. Sufitu napinanego nie kupisz w markecie i nie zamontujesz tego samego dnia.",
        ],
      },
      {
        heading: "Wady w skali — tabela",
        paragraphs: [
          "Każdą z wad zestawiamy z realną skalą i sposobem, w jaki ją ograniczamy. Tak wygląda uczciwa wersja tabel strachu z portali.",
        ],
        table: {
          headers: ["Wada", "Realna skala", "Jak ją ograniczamy"],
          rows: [
            [
              "Uszkodzenia mechaniczne",
              "pojedyncze zdarzenia przy przeprowadzkach i remontach",
              "część uszkodzeń naprawialna serwisowo; membrana wymienialna bez demontażu profili",
            ],
            [
              "Koszt startowy",
              "ok. 20–100 zł/m² więcej niż G-K",
              "brak kosztów odświeżania przez 15 lat gwarancji na PVC; VAT 8% dla lokali mieszkalnych",
            ],
            [
              "Minimum zlecenia",
              "dotyczy tylko małych metraży",
              "łączenie pomieszczeń w jedno zlecenie (np. łazienka + kuchnia w tym samym terminie)",
            ],
            [
              "Czas oczekiwania",
              "ok. 5 dni roboczych dla PVC z naszej fabryki",
              "produkcja w Polsce zamiast importu; termin potwierdzamy przy pomiarze",
            ],
            [
              "Obniżenie sufitu",
              "od 15 mm, z oświetleniem 3–4 cm",
              "najniższy profil na rynku technologii sufitowych — mniejsze obniżenie niż jakikolwiek ruszt G-K",
            ],
          ],
        },
      },
      {
        heading: "Mit 1: sufit napinany ma limit 20 m²",
        paragraphs: [
          "Ten mit powtarza się w rankingach od lat i jest po prostu nieprawdziwy. Realizujemy biura open-space o powierzchni 100 m² — jak w naszym cenniku, gdzie taka realizacja akustyczna kosztuje ok. 32 000–38 000 zł netto. Duże płaszczyzny dzieli się profilami pośrednimi na sekcje albo dobiera membranę o parametrach odpowiednich dla rozpiętości. Nasza folia PVC jest bezszwowa do 6,50 m szerokości — najszersza na rynku — a poliester do 5,15 m; powyżej tych wymiarów łączenia i podziały planuje się na etapie projektu.",
        ],
      },
      {
        heading: "Mit 2: montaż zawsze wymaga nagrzewania pomieszczenia",
        paragraphs: [
          "Prawda tylko połowicznie. Folię PVC napina się na ciepło — nagrzewnica podnosi temperaturę membrany, która po ostygnięciu naciąga się idealnie. Ale poliester montuje się całkowicie na zimno: bez nagrzewnicy, bez podnoszenia temperatury, co ma znaczenie przy antykach, instrumentach, dziełach sztuki czy serwerowniach. Jeśli ktoś mówi, że sufit napinany zawsze wymaga gorąca, opisuje tylko połowę technologii.",
        ],
      },
      {
        heading: "Mit 3: uszkodzenie oznacza wymianę całego sufitu",
        paragraphs: [
          "Najbardziej kosztowny mit, bo odstrasza od technologii, która akurat w naprawach jest wyjątkowo racjonalna. Po pierwsze: część uszkodzeń — drobne przebicia, ślady po punktowych naciskach — naprawiamy serwisowo, bez wymiany czegokolwiek. Po drugie: nawet gdy membrana wymaga wymiany, profile zostają na ścianach. Wymieniamy samą folię, w jeden dzień, bez remontu. Dla porównania: uszkodzona zabudowa G-K to wycinanie, szpachlowanie, szlifowanie i malowanie — zwykle całej płaszczyzny, żeby kolor się zgadzał.",
        ],
      },
      {
        heading: "Mit 4: poliester boi się wilgoci i nie da się go czyścić",
        paragraphs: [
          "Tu potrzebny jest niuans zamiast wyroku. Membrana poliestrowa jest odporna na wilgoć w normalnych warunkach domowych — nie pleśnieje i nie odkształca się od codziennej pary. Do stref mokrych (łazienka z prysznicem, pralnia) doradzamy jednak PVC, bo tkanina przepuszcza wodę powoli, więc przy zalaniu z góry nie ochroni pomieszczenia tak, jak szczelna folia. Czyszczenie: poliester odkurza się na sucho miękką końcówką, a folię PVC przeciera wilgotną ściereczką. Twierdzenie, że tkaniny nie da się utrzymać w czystości, jest przesadą — po prostu każdy materiał ma swoją metodę.",
        ],
      },
      {
        heading: "Czego sufit napinany nie zrobi — granice technologii",
        paragraphs: [
          "Dla pełnej uczciwości dopiszmy granice, o których marketing branży milczy. Sufit napinany nie zastąpi wentylacji — jest odporny na skutki wilgoci, ale nie usuwa jej przyczyny. Nie ociepli stropu — do izolacji termicznej potrzebna jest wełna, a jej nośnikiem bywa zabudowa G-K. Nie uformuje też wielopoziomowych nisz i kaskad — to domena płyty, dlatego w projektach dekoracyjnych często łączymy obie technologie: G-K po obwodzie, membrana w centralnej płaszczyźnie.",
          "Jeśli po tej liście wad nadal rozważasz sufit napinany — na bezpłatnym pomiarze doradca pokaże próbniki, policzy Twój metraż i powie wprost, czy w Twoim wnętrzu któraś z tych wad będzie miała znaczenie. Wycena jest ważna 30 dni.",
        ],
      },
    ],
    faq: [
      {
        q: "Jakie są największe wady sufitów napinanych?",
        a: "Cztery realne: podatność membrany na ostre przedmioty, koszt startowy wyższy niż zabudowy G-K (od 170 zł/m² wobec ok. 70–150 zł/m²), minimum zlecenia ok. 1 400–1 600 zł przy małych metrażach oraz kilka dni oczekiwania na produkcję membrany na wymiar.",
      },
      {
        q: "Czy sufit napinany łatwo uszkodzić?",
        a: "Codzienna eksploatacja mu nie grozi — zagrożeniem są ostre przedmioty: wnoszone meble, karnisze, narzędzia przy remoncie. Część uszkodzeń naprawiamy serwisowo, a w razie potrzeby wymieniamy samą membranę bez demontażu profili.",
      },
      {
        q: "Czy sufit napinany ma maksymalną powierzchnię 20 m²?",
        a: "Nie — to mit. Realizujemy pomieszczenia o powierzchni 100 m² i większe. Duże płaszczyzny dzieli się profilami pośrednimi lub dobiera membranę o odpowiednich parametrach; folia PVC jest bezszwowa do 6,50 m szerokości.",
      },
      {
        q: "Czy montaż zawsze odbywa się na gorąco?",
        a: "Nie. Na ciepło napina się tylko folię PVC. Membrany poliestrowe montujemy całkowicie na zimno — bez nagrzewnicy, co jest bezpieczne dla antyków, instrumentów i wrażliwego wyposażenia.",
      },
      {
        q: "Czy uszkodzona membrana oznacza wymianę całego sufitu?",
        a: "Nie. Drobne uszkodzenia często naprawiamy serwisowo. Gdy wymiana jest konieczna, dotyczy samej membrany — profile zostają na ścianach, a nowa folia jest napinana w jeden dzień, bez remontu.",
      },
      {
        q: "Czy sufit napinany żółknie po latach?",
        a: "Certyfikowane folie z produkcji europejskiej zachowują kolor — dajemy na to pisemną gwarancję: 15 lat na PVC i 10 lat na poliester. Problem żółknięcia dotyczy folii niewiadomego pochodzenia, dlatego zawsze pytaj, skąd pochodzi membrana.",
      },
    ],
    related: [
      { label: "Sufit napinany czy podwieszany — porównanie", href: "/blog/sufit-napinany-czy-podwieszany" },
      { label: "Sufit napinany w łazience — fakty", href: "/blog/sufit-napinany-w-lazience" },
      { label: "Bezpłatna wycena w 24 h — formularz", href: "/wycena" },
      { label: "Sufit poliestrowy — montaż na zimno", href: "/rozwiazania/sufit-poliestrowy" },
      { label: "Sufity napinane Kraków", href: "/sufity-napinane/krakow" },
    ],
  },

  /* ────────────────────────────────────────────────────────────
   * 06 · Sufit napinany a VAT 8% — kto zapłaci mniej w 2026
   * ──────────────────────────────────────────────────────────── */
  {
    slug: "sufit-napinany-vat-8",
    category: "Ceny",
    title: "Sufit napinany a VAT 8% — kto zapłaci mniej w 2026",
    metaDescription:
      "Montaż sufitu w mieszkaniu do 150 m² lub domu do 300 m² może mieć VAT 8% zamiast 23% — wystarczy oświadczenie nabywcy. Salon za 6 000 zł netto: 900 zł różnicy.",
    excerpt:
      "O stawce 8% na montaż sufitu napinanego nie pisze prawie nikt, a dla większości klientów prywatnych to kilkaset złotych różnicy na jednym pomieszczeniu. Wyjaśniamy, kogo obejmuje preferencyjna stawka, jakie limity metrażu obowiązują, jak wygląda oświadczenie i ile realnie zostaje w kieszeni.",
    datePublished: "2026-09-02",
    readTime: "7 min",
    intro: [
      "Montaż sufitu napinanego w budownictwie objętym społecznym programem mieszkaniowym — czyli w mieszkaniach o powierzchni użytkowej do 150 m² i domach jednorodzinnych do 300 m² — może być objęty stawką VAT 8% zamiast 23%. Podstawą jest oświadczenie nabywcy, które przygotowujemy razem z umową. Dotyczy to zarówno osób prywatnych, jak i firm kupujących sufit na cele mieszkaniowe. Na salonie wycenionym na 6 000 zł netto różnica wynosi 900 zł brutto.",
      "Piszemy jako producent i wykonawca — folia PVC powstaje w naszej fabryce w Częstochowie, poliester w zakładzie grupy Stretch w Belgii — więc opisujemy dokładnie tę procedurę, którą stosujemy przy każdej umowie z klientem prywatnym. Zastrzegamy jedno na wstępie: to informacja ogólna o zasadach, które stosujemy w praktyce, nie porada podatkowa. W nietypowej sytuacji warto zapytać doradcę podatkowego.",
    ],
    sections: [
      {
        heading: "Skąd bierze się stawka 8% na sufit",
        paragraphs: [
          "Polska ustawa o VAT przewiduje obniżoną stawkę 8% dla robót budowlanych — budowy, remontu, modernizacji i przebudowy — wykonywanych w obiektach budownictwa objętego społecznym programem mieszkaniowym. Kluczowe słowo to roboty: preferencja obejmuje usługę montażu sufitu wraz z materiałem, wykonaną w lokalu mieszkalnym. Sama sprzedaż folii bez montażu to towar i podlega stawce 23%.",
          "Sufit napinany jako trwale związany z budynkiem element wykończenia wpisuje się w tę definicję tak samo jak zabudowa G-K, tynki czy podłogi. Dlatego w naszej wycenie sufit zawsze występuje jako kompletna usługa: pomiar, produkcja membrany na wymiar, profile i montaż. To nie tylko kwestia porządku w ofercie — to warunek zastosowania niższej stawki.",
        ],
      },
      {
        heading: "Kto zapłaci 8%, a kto 23% — tabela scenariuszy",
        paragraphs: [
          "Decydują dwie rzeczy: rodzaj lokalu i jego powierzchnia użytkowa. Poniżej najczęstsze przypadki z naszej praktyki.",
        ],
        table: {
          headers: ["Scenariusz", "Stawka VAT", "Warunek"],
          rows: [
            ["Mieszkanie do 150 m² — osoba prywatna", "8%", "oświadczenie nabywcy o powierzchni i przeznaczeniu"],
            ["Dom jednorodzinny do 300 m²", "8%", "oświadczenie nabywcy o powierzchni i przeznaczeniu"],
            ["Mieszkanie / dom kupowane przez firmę na cele mieszkaniowe", "8%", "faktura na firmę nie wyklucza preferencji — liczy się przeznaczenie lokalu"],
            ["Mieszkanie powyżej 150 m² lub dom powyżej 300 m²", "8% proporcjonalnie", "stawka obniżona obejmuje część odpowiadającą limitowi, reszta 23%"],
            ["Biuro, lokal usługowy, gastronomia, sklep", "23%", "lokal użytkowy — brak preferencji"],
            ["Sama folia bez montażu (towar)", "23%", "preferencja dotyczy wyłącznie usługi montażu"],
          ],
        },
      },
      {
        heading: "Przykład brutto: salon 25 m²",
        paragraphs: [
          "Weźmy realizację z naszego cennika: salon 25 m², PVC mat, linia LED po jednej ścianie, sześć punktów świetlnych — ok. 6 000 zł netto. Przy stawce 23% klient zapłaci 7 380 zł brutto. Przy stawce 8% — 6 480 zł brutto. Różnica: 900 zł na jednym pomieszczeniu, bez żadnej zmiany w zakresie prac. Przy całym mieszkaniu, gdzie wartość zlecenia sięga kilkunastu tysięcy złotych, mówimy już o kwocie rzędu 2 000–3 000 zł.",
          "Dlatego porównując oferty, sprawdź, czy konkurencyjna wycena podaje kwotę netto czy brutto i z jaką stawką. Widzieliśmy oferty, w których tańsza netto kończyła się droższa brutto, bo wykonawca nie stosował stawki obniżonej.",
        ],
      },
      {
        heading: "Jak wygląda oświadczenie i co robimy za Ciebie",
        paragraphs: [
          "Oświadczenie nabywcy to jednostronicowy dokument, w którym potwierdzasz, że lokal jest mieszkalny, podajesz jego powierzchnię użytkową i deklarujesz, że mieści się w limicie. Przygotowujemy go razem z umową — Ty podpisujesz, my przechowujemy w dokumentacji zlecenia, bo to nasza podstawa do wystawienia faktury z 8%. Nie potrzebujesz żadnych zaświadczeń z urzędu ani wypisów; powierzchnię przyjmujemy z aktu notarialnego, umowy najmu lub projektu.",
          "Płatność wygląda tak samo jak przy każdej realizacji: 30% zaliczki przy zamówieniu, pozostałe 70% w ciągu 7 dni po montażu — obie części z tą samą stawką. Wycena po bezpłatnym pomiarze jest ważna 30 dni i od razu zawiera kwotę brutto z właściwym VAT, więc nie ma niespodzianek na fakturze.",
        ],
      },
      {
        heading: "Trzy pułapki, o których warto wiedzieć",
        paragraphs: [
          "Po pierwsze: powierzchnia użytkowa to nie to samo, co powierzchnia sufitu, który montujemy. Liczy się metraż całego lokalu z dokumentów, a nie 20 m² salonu. Po drugie: lokal użytkowy w budynku mieszkalnym — gabinet, sklep na parterze — to stawka 23%, nawet jeśli piętro wyżej są mieszkania. Po trzecie: przy przekroczeniu limitu nie tracisz całej preferencji — stawka obniżona przysługuje proporcjonalnie do części powierzchni mieszczącej się w limicie, a resztę rozlicza się według 23%.",
          "To informacja ogólna o zasadach, które stosujemy w praktyce, nie porada podatkowa. Jeśli Twoja sytuacja jest nietypowa — lokal mieszany, najem krótkoterminowy, budynek w trakcie zmiany sposobu użytkowania — powiedz o tym na pomiarze, a przygotujemy wycenę w obu wariantach.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy stawka 8% dotyczy tylko osób prywatnych?",
        a: "Nie. Decyduje przeznaczenie lokalu, nie status nabywcy. Firma kupująca sufit do mieszkania na cele mieszkaniowe (na przykład lokal pracowniczy) również może skorzystać ze stawki 8% na podstawie oświadczenia.",
      },
      {
        q: "Co jeśli mój dom ma więcej niż 300 m²?",
        a: "Nie tracisz całej preferencji. Stawka 8% obejmuje część wartości usługi odpowiadającą udziałowi limitu w całkowitej powierzchni użytkowej, a pozostała część rozliczana jest według 23%. Przygotowujemy taki podział w wycenie.",
      },
      {
        q: "Czy sam materiał bez montażu też ma VAT 8%?",
        a: "Nie. Sprzedaż samej folii jako towaru to stawka 23%. Preferencja dotyczy wyłącznie usługi montażu wraz z materiałem, wykonanej w lokalu mieszkalnym — dlatego w naszej ofercie sufit jest zawsze kompletną usługą.",
      },
      {
        q: "Jakie dokumenty muszę przygotować?",
        a: "Tylko podpis na oświadczeniu nabywcy, które przygotowujemy razem z umową. Powierzchnię użytkową podajesz z aktu notarialnego, umowy najmu lub projektu — nie potrzebujesz zaświadczeń z urzędu.",
      },
      {
        q: "Czy remont istniejącego sufitu też jest objęty stawką 8%?",
        a: "Tak. Stawka obniżona dotyczy budowy, remontu, modernizacji i przebudowy w budownictwie objętym społecznym programem mieszkaniowym, więc montaż sufitu napinanego w remontowanym mieszkaniu do 150 m² kwalifikuje się tak samo jak w nowym.",
      },
      {
        q: "Czy biuro w mieszkaniu może mieć sufit z VAT 8%?",
        a: "Jeśli lokal formalnie pozostaje mieszkalny i mieści się w limicie 150 m², oświadczenie nabywcy jest podstawą do stawki 8%. Lokal użytkowy — gabinet czy sklep wydzielony w budynku — to stawka 23%. W wątpliwych sytuacjach skonsultuj się z doradcą podatkowym.",
      },
    ],
    related: [
      { label: "Ile kosztuje sufit napinany — cennik 2026", href: "/blog/ile-kosztuje-sufit-napinany" },
      { label: "Bezpłatna wycena w 24 h — formularz", href: "/wycena" },
      { label: "Sufit PVC — produkcja w Polsce", href: "/rozwiazania/sufit-pvc" },
      { label: "Sufity napinane Katowice", href: "/sufity-napinane/katowice" },
    ],
  },

  /* ────────────────────────────────────────────────────────────
   * 07 · Sufit akustyczny do biura — jak realnie obniżyć pogłos w open-space (2026)
   * ──────────────────────────────────────────────────────────── */
  {
    slug: "sufit-akustyczny-do-biura",
    category: "B2B",
    title: "Sufit akustyczny do biura — jak realnie obniżyć pogłos w open-space (2026)",
    metaDescription:
      "Mikroperforowana membrana z absorberem: klasa A pochłaniania, redukcja pogłosu do 75%. Od 320 zł/m²; biuro 100 m² to ok. 32–38 tys. zł netto, montaż 2–3 dni.",
    excerpt:
      "Open-space huczy, bo wszystkie powierzchnie odbijają dźwięk, a sufit jest największą z nich. Pokazujemy, jak napinany sufit akustyczny z absorberem obniża czas pogłosu do celów projektowych, ile kosztuje biuro 100 m² i dlaczego montaż nie wymaga zamykania firmy.",
    datePublished: "2026-09-02",
    readTime: "9 min",
    intro: [
      "Napinany sufit akustyczny to mikroperforowana membrana poliestrowa plus absorber w przestrzeni nad nią — razem dają pochłanianie do klasy A i redukcję pogłosu do 75%. Cele projektowe, do których dążymy: czas pogłosu RT60 poniżej 0,8 s w open-space i poniżej 0,6 s w salach konferencyjnych. Koszt od ok. 320 zł/m² netto z montażem; biuro 100 m² to ok. 32 000–38 000 zł netto, montaż w 2–3 dni robocze — także w weekend, bez zamykania biura.",
      "Piszemy jako producent: membrany akustyczne bazują na poliestrze klasy A2 (niepalnym) z zakładu grupy Stretch w Belgii, a folię PVC do pozostałych stref biura produkujemy w naszej fabryce w Częstochowie. Ten tekst jest dla facility managerów, architektów i właścicieli firm, którzy chcą liczb zamiast obietnic.",
    ],
    sections: [
      {
        heading: "Dlaczego open-space huczy — czas pogłosu w praktyce",
        paragraphs: [
          "Pogłos to dźwięk, który po ustaniu źródła nadal odbija się między twardymi powierzchniami. Mierzy się go czasem RT60 — ile sekund trwa spadek poziomu dźwięku o 60 dB. W typowym biurze z gładkim stropem, szkłem i podłogą z płytek RT60 sięga 1,2–1,5 s: rozmowa przy biurku obok jest słyszalna w całym pomieszczeniu, a każda rozmowa telefoniczna podnosi głos kolejnej osoby. Cel dla open-space to poniżej 0,8 s, dla sal konferencyjnych i pokojów spotkań poniżej 0,6 s.",
          "Największą powierzchnią odbijającą w biurze jest sufit — dlatego to on daje najwięcej, gdy zmienia się z odbijającego w pochłaniający. Panele ścienne i dywany pomagają, ale nie zastąpią kilkudziesięciu metrów kwadratowych absorpcji nad głowami.",
        ],
      },
      {
        heading: "Jak działa napinany sufit akustyczny",
        paragraphs: [
          "Membrana ma mikroperforację — tysiące otworów na metr kwadratowy, niewidocznych z poziomu podłogi. Fala dźwiękowa przechodzi przez perforację do przestrzeni nad sufitem, gdzie absorber (warstwa materiału pochłaniającego) zamienia jej energię w ciepło. Membrana wraca do pomieszczenia jako gładka, jednolita płaszczyzna — bez rastra kasetonów, bez widocznych paneli. Uzyskiwane pochłanianie sięga klasy A, a w praktyce oznacza to redukcję pogłosu do 75% względem gołego stropu.",
          "Materiał to poliester klasy A2 — niepalny, co w obiektach biurowych i użyteczności publicznej jest wymogiem, a nie opcją. Montaż odbywa się na zimno, bez nagrzewnicy: nie ma zapachu, nie ma podnoszenia temperatury, elektronika i serwerownie obok są bezpieczne.",
        ],
      },
      {
        heading: "Trzy sposoby na pogłos — porównanie",
        paragraphs: [
          "Każde z rozwiązań ma sens w innej sytuacji. Tabela zestawia je uczciwie, łącznie z tym, kiedy sufit napinany nie jest najlepszym wyborem.",
        ],
        table: {
          headers: ["Kryterium", "Panele ścienne", "G-K + wełna", "Napinany sufit akustyczny"],
          rows: [
            ["Skuteczność", "ograniczona powierzchnią ścian", "dobra, ale bez perforacji płyta odbija", "do klasy A na całej powierzchni sufitu"],
            ["Czas montażu (100 m²)", "1–2 dni", "1–2 tygodnie z gładzią i malowaniem", "2–3 dni, także w weekend"],
            ["Ingerencja w pracę biura", "niewielka", "pył, hałas, wyłączenie strefy", "brak pyłu, montaż poza godzinami pracy"],
            ["Demontowalność", "tak", "nie — rozbiórka", "tak — membrana zdejmowana, profile zostają"],
            ["Dostęp do instalacji", "nie dotyczy", "klapy rewizyjne", "przez zdejmowaną membranę"],
            ["Kiedy wybrać", "uzupełnienie, małe sale", "gdy sufit ma pełnić też funkcję izolacji", "open-space, sale, restauracje — gdy liczy się efekt i czas"],
          ],
        },
      },
      {
        heading: "Ile to kosztuje i jak wygląda harmonogram",
        paragraphs: [
          "Stawka za napinany sufit akustyczny to od ok. 320 zł/m² netto z montażem, typowo 320–450 zł/m² zależnie od geometrii, liczby wycięć pod oprawy i czujniki oraz wymaganej klasy pochłaniania. Przy skali biura 100 m² stawka jednostkowa spada w dół widełek: realny koszt to ok. 32 000–38 000 zł netto. Ewentualną dodatkową absorpcję w przestrzeni nad membraną wyceniamy po pomiarze pogłosu, bo zależy od kubatury i istniejącego stropu.",
          "Harmonogram: pomiar i pomiar pogłosu na miejscu, produkcja membrany na wymiar, montaż w 2–3 dni robocze. Dla działających biur planujemy prace poza godzinami pracy lub w weekend — zespół wchodzi w piątek po południu, w poniedziałek rano biuro pracuje pod nowym sufitem. Meble i stanowiska zostają, wystarczy odsunąć je od ścian. Płatność 30% zaliczki i 70% do 7 dni po montażu; wycena ważna 30 dni.",
        ],
      },
      {
        heading: "Co sprawdzamy na pomiarze i czego wymagamy od inwestora",
        paragraphs: [
          "Przed wyceną mierzymy czas pogłosu w obecnym stanie — to punkt odniesienia, do którego porównujemy efekt po montażu. Sprawdzamy wysokość, instalacje nad sufitem (klimatyzacja, tryskacze, kable), rozmieszczenie opraw i czujników, bo każde wycięcie planujemy na etapie produkcji membrany. Potrzebujemy od inwestora projektu oświetlenia lub decyzji, które oprawy zostają, oraz informacji o wymaganiach ppoż. obiektu — do dokumentacji dołączamy klasyfikację materiału.",
          "Jeśli biuro ma już strop podwieszany z kasetonów, membranę montujemy pod nim lub w miejsce kasetonów — decyduje wysokość i to, czy istniejąca konstrukcja ma zostać. Realizacje tego typu wykonujemy również dla hoteli i gastronomii; przykładem jest realizacja Candor w Sint-Martens-Latem w Belgii, którą znajdziesz w naszych realizacjach.",
        ],
      },
    ],
    faq: [
      {
        q: "Ile kosztuje sufit akustyczny do biura?",
        a: "Od ok. 320 zł/m² netto z montażem, typowo 320–450 zł/m². Biuro open-space 100 m² to ok. 32 000–38 000 zł netto; dodatkową absorpcję nad membraną wyceniamy po pomiarze pogłosu.",
      },
      {
        q: "Czy trzeba zamykać biuro na czas montażu?",
        a: "Nie. Montaż trwa 2–3 dni robocze i planujemy go poza godzinami pracy lub w weekend. Nie ma pyłu ani nagrzewania — membrana poliestrowa montowana jest na zimno — więc stanowiska pracy zostają na miejscu.",
      },
      {
        q: "O ile realnie spadnie pogłos?",
        a: "Redukcja sięga 75% względem gołego stropu. Projektujemy tak, aby czas pogłosu RT60 spadł poniżej 0,8 s w open-space i poniżej 0,6 s w salach konferencyjnych. Efekt weryfikujemy pomiarem przed i po montażu.",
      },
      {
        q: "Czym napinany sufit akustyczny różni się od paneli ściennych?",
        a: "Powierzchnią i jednolitością. Panele pochłaniają na fragmencie ścian; sufit akustyczny pracuje na całej największej powierzchni pomieszczenia i pozostaje gładką, jednolitą płaszczyzną bez widocznych kasetonów. Panele dobrze uzupełniają sufit w małych salach.",
      },
      {
        q: "Czy membrana akustyczna jest niepalna?",
        a: "Tak. Membrany akustyczne bazują na poliestrze klasy A2 (niepalnym), co spełnia wymagania stawiane obiektom biurowym i użyteczności publicznej. Klasyfikację materiału dołączamy do dokumentacji realizacji.",
      },
      {
        q: "Czy sufit można zdemontować przy zmianie biura?",
        a: "Tak. Membrana jest zdejmowana bez niszczenia profili, więc przy rearanżacji lub przeprowadzce można ją zdjąć, a przestrzeń nad sufitem pozostaje dostępna dla instalacji przez cały czas użytkowania.",
      },
    ],
    related: [
      { label: "Sufit akustyczny — parametry i klasy", href: "/rozwiazania/sufit-akustyczny" },
      { label: "Współpraca B2B — biura, hotele, gastronomia", href: "/wspolpraca-b2b" },
      { label: "Realizacja: Candor, Sint-Martens-Latem", href: "/realizacje/candor-sint-martens-latem" },
      { label: "Bezpłatna wycena w 24 h — formularz", href: "/wycena" },
      { label: "Sufity napinane Gliwice", href: "/sufity-napinane/gliwice" },
      { label: "Ile kosztuje sufit napinany — cennik 2026", href: "/blog/ile-kosztuje-sufit-napinany" },
    ],
  },
];

export function findPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
