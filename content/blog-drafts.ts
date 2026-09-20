/**
 * Blog articles — STAGED DRAFTS (Polish). NOT RENDERED.
 * File path: /content/blog-drafts.ts
 *
 * This file is intentionally imported nowhere. It holds complete,
 * ready-to-publish entries waiting for their release slot. Nothing here
 * appears on the site, in the sitemap or in the build until an entry is
 * moved to /content/blog-posts.ts.
 *
 * Release cadence (2 articles / month, each publish = separate commit +
 * GSC "Request indexing"):
 *   mid-September 2026  → sufit-napinany-vat-8, sufit-akustyczny-do-biura
 *                         (both PUBLISHED 2026-09-02)
 *   October 2026        → montaz-sufitu-napinanego-krok-po-kroku
 *                         (PUBLISHED 2026-09-20),
 *                         czy-sufit-napinany-jest-bezpieczny
 *   November 2026       → barrisol-a-sufit-napinany
 *
 * HOW TO MOVE AN ARTICLE LIVE (one article = one commit):
 *   1. Cut the entry below and paste it at the END of the `blogPosts`
 *      array in /content/blog-posts.ts; set `datePublished` to the
 *      publish date.
 *   2. Add its EN + UA translations at the same array position in
 *      /content/en/blog-posts.ts and /content/ua/blog-posts.ts (the
 *      existing live articles have full PL+EN+UA parity — match it).
 *      Suggested locale slugs are in each entry's header comment.
 *   3. Add the {pl, en, ua} slug triple to `blogPostSlugs` in
 *      /lib/i18n-routes.ts — that alone wires the sitemap + hreflang.
 *   4. Remove the matching "W przygotowaniu" tile from
 *      `editorialPipeline` in /app/blog/page.tsx (+ /app/en|ua/blog/page.tsx).
 *   5. Resolve every `[DO UZUPEŁNIENIA: …]` placeholder in the entry —
 *      an article with a placeholder must not go live.
 *   6. `npm run build`, commit, push, then GSC → URL Inspection →
 *      Request indexing for the new URL.
 *
 * Editorial rules: see /content/blog-posts.ts header. No Polish opening
 * quotes („) in string literals.
 */

import type { BlogPost } from "@/content/blog-posts";

export const blogDrafts: BlogPost[] = [
  /* ────────────────────────────────────────────────────────────
   * DRAFT · Czy sufit napinany jest bezpieczny
   * Release: October 2026
   * Locale slugs: en "are-stretch-ceilings-safe", ua "chy-bezpechna-natyazhna-stelya"
   *
   * Document IDs filled 2026-09-02 (source: Michael): PVC fire class
   * B-s1,d0 per CNBOP-PIB classification report 449/BW/20; emissions
   * examination report MAIC-2018-2563 (Fraunhofer-Institut). No
   * placeholders remain — ready to go live.
   * ──────────────────────────────────────────────────────────── */
  {
    slug: "czy-sufit-napinany-jest-bezpieczny",
    category: "Poradniki",
    title: "Czy sufit napinany jest bezpieczny? Klasy ogniowe, atesty, zdrowie",
    metaDescription:
      "Tak — membrany z UE: poliester klasy A2 (niepalny), folia PVC B-s1,d0 wg raportu CNBOP-PIB, badania emisji Fraunhofer. Co oznaczają klasy i gdzie są wymagane.",
    excerpt:
      "Pytania o toksyczność i palność sufitów napinanych wracają w każdej rozmowie z klientem, który czytał fora. Odpowiadamy jako producent — z numerami raportów: co naprawdę oznaczają klasy ogniowe, jakie dokumenty ma nasz materiał, gdzie prawo ich wymaga i czym różni się folia z UE od folii niewiadomego pochodzenia.",
    datePublished: "2026-10-15",
    readTime: "8 min",
    intro: [
      "Tak — sufit napinany z certyfikowanych membran produkowanych w Unii Europejskiej jest bezpieczny dla zdrowia i spełnia wymagania przeciwpożarowe stawiane wnętrzom. Nasze membrany poliestrowe mają klasę reakcji na ogień A2 (materiał niepalny), a folia PVC klasę B-s1,d0 — niezapalna, o małej emisji dymu, bez płonących kropli — potwierdzoną raportem klasyfikacyjnym nr 449/BW/20 wydanym przez CNBOP-PIB. Emisje folii PVC zbadał Fraunhofer-Institut (raport z badań nr MAIC-2018-2563): przy certyfikowanych materiałach nie ma emisji substancji szkodliwych w trakcie użytkowania — a to jest właściwe pytanie, bo mieszkasz pod sufitem przez 15 lat, nie przez godzinę montażu.",
      "Piszemy jako producent: folia PVC powstaje w naszej fabryce w Częstochowie, poliester w zakładzie grupy Stretch w Belgii. Poniżej tłumaczymy oznaczenia, które znajdziesz w dokumentach, mówimy, gdzie są wymagane prawnie, a gdzie tylko warto je mieć, i wyjaśniamy, dlaczego pochodzenie folii jest ważniejsze niż jej cena.",
    ],
    sections: [
      {
        heading: "Skąd biorą się obawy o toksyczność",
        paragraphs: [
          "Dwa źródła. Pierwsze: zapach po montażu na ciepło folii PVC — realny, ale krótkotrwały, znika po przewietrzeniu w ciągu 24–48 godzin i nie ma nic wspólnego z emisją w użytkowaniu. Drugie: folie niewiadomego pochodzenia, sprzedawane na metry bez dokumentów, montowane przez firmy, które nie potrafią pokazać ani atestu higienicznego, ani klasyfikacji ogniowej. To one budują złą opinię całej kategorii. Różnica między certyfikowaną membraną z UE a taką folią jest dokładnie taka, jak między farbą z atestem a farbą z bazaru.",
        ],
      },
      {
        heading: "Co oznaczają klasy ogniowe A2 i B-s1,d0",
        paragraphs: [
          "Europejska klasyfikacja reakcji na ogień (euroklasy) opisuje, jak materiał zachowuje się w kontakcie z ogniem. Litera to główna klasa: A1 i A2 oznaczają materiały niepalne, B — materiały niezapalne, które nie podtrzymują ognia, C i niżej — coraz łatwiej palne. Dodatkowe oznaczenia dotyczą dymu (s1 — mała ilość, s2 — ograniczona, s3 — bez ograniczeń) i płonących kropli (d0 — brak, d1 — krople gasnące, d2 — bez ograniczeń). Zapis B-s1,d0 czyta się więc: niezapalny, o małej emisji dymu, bez płonących kropli.",
          "Nasz poliester ma klasę A2 — jest niepalny, co w obiektach użyteczności publicznej bywa warunkiem dopuszczenia materiału. Nasza folia PVC ma klasę B-s1,d0 według raportu klasyfikacyjnego nr 449/BW/20, wydanego przez Centrum Naukowo-Badawcze Ochrony Przeciwpożarowej im. Józefa Tuliszkowskiego — Państwowy Instytut Badawczy (CNBOP-PIB) w Józefowie, czyli laboratorium akredytowane (PCA AB 1280), które w Polsce klasyfikuje materiały budowlane pod kątem reakcji na ogień.",
        ],
      },
      {
        heading: "Jakie dokumenty ma nasz materiał",
        paragraphs: [
          "Do każdej realizacji możemy dołączyć komplet dokumentów. Poniższa tabela pokazuje, co który dokument potwierdza i gdzie jest wymagany.",
        ],
        table: {
          headers: ["Dokument / oznaczenie", "Co potwierdza", "Gdzie wymagany"],
          rows: [
            ["Klasa A2 — poliester", "materiał niepalny wg euroklas", "obiekty użyteczności publicznej, hotele, szkoły, biura"],
            ["Klasa B-s1,d0 — folia PVC", "niezapalna, mała emisja dymu, bez płonących kropli", "lokale usługowe i publiczne; w mieszkaniach nie wymagana prawnie"],
            ["Raport klasyfikacyjny reakcji na ogień", "nr 449/BW/20, CNBOP-PIB Józefów (laboratorium akredytowane PCA AB 1280)", "dokumentacja odbiorowa obiektów z wymaganiami ppoż."],
            ["Badanie emisji folii PVC", "raport z badań nr MAIC-2018-2563, Fraunhofer-Institut — brak szkodliwych emisji w użytkowaniu", "warto mieć zawsze; wymagany w placówkach oświaty i ochrony zdrowia"],
            ["Deklaracja właściwości użytkowych / karta produktu", "parametry membrany zgodne z deklaracją producenta", "dokumentacja odbiorowa, przetargi"],
          ],
        },
      },
      {
        heading: "Gdzie dokumentacja jest wymagana prawnie, a gdzie warto ją mieć",
        paragraphs: [
          "W obiektach użyteczności publicznej — szkołach, przedszkolach, hotelach, gastronomii, biurach, sklepach — wymagania przeciwpożarowe wobec materiałów wykończeniowych są formalne: rzeczoznawca lub inspektor przy odbiorze poprosi o klasyfikację reakcji na ogień, a bez niej sufit może nie zostać dopuszczony. Dlatego do realizacji komercyjnych dołączamy raport klasyfikacyjny i kartę produktu standardowo, bez proszenia.",
          "W mieszkaniach i domach jednorodzinnych prawo nie wymaga od Ciebie dokumentów na sufit. Mimo to warto je mieć — z dwóch powodów. Przy sprzedaży mieszkania lub wynajmie kupujący coraz częściej pytają o materiały wykończeniowe. A przede wszystkim: raport z badań emisji — dla naszej folii PVC wykonany przez Fraunhofer-Institut, nr MAIC-2018-2563 — jest jedynym dowodem, że materiał nad Twoją głową został przebadany. Jeśli wykonawca nie potrafi pokazać takiego dokumentu, to sygnał ostrzegawczy niezależnie od ceny.",
        ],
      },
      {
        heading: "Zdrowie: emisje, zapach i pochodzenie folii",
        paragraphs: [
          "Certyfikowana membrana w użytkowaniu nie emituje substancji szkodliwych — dla naszej folii PVC potwierdza to raport z badań Fraunhofer-Institut nr MAIC-2018-2563. Krótkotrwały zapach po montażu PVC na ciepło jest efektem podgrzania tworzywa i znika po przewietrzeniu; poliester montowany na zimno nie pachnie wcale. Pytaj o pochodzenie folii: nasza PVC powstaje w Częstochowie, poliester w Belgii, obie w zakładach grupy Stretch, z pełną dokumentacją. Folia z nieznanego źródła może być tańsza o kilkadziesiąt złotych na metrze — i to jedyne, co o niej wiadomo na pewno.",
          "Recykling: PVC jest tworzywem w pełni podlegającym recyklingowi, a nasza folia PVC powstaje z udziałem materiału z odzysku — stąd nazwa sufitu PVC recyklingowego w naszej ofercie. Zdemontowana membrana po latach użytkowania nie trafia na składowisko jako odpad niemożliwy do przetworzenia.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy sufit napinany jest toksyczny?",
        a: "Certyfikowany — nie. Nasza folia PVC ma raport z badań emisji Fraunhofer-Institut (nr MAIC-2018-2563) i w użytkowaniu nie emituje substancji szkodliwych; membrany poliestrowe są niepalne (klasa A2). Ryzyko dotyczy folii niewiadomego pochodzenia bez dokumentów.",
      },
      {
        q: "Co oznacza klasa ogniowa A2?",
        a: "Materiał niepalny według europejskiej klasyfikacji reakcji na ogień. Taką klasę mają nasze membrany poliestrowe, co spełnia wymagania stawiane obiektom użyteczności publicznej, hotelom i szkołom.",
      },
      {
        q: "Co oznacza B-s1,d0?",
        a: "B — materiał niezapalny, niepodtrzymujący ognia; s1 — mała emisja dymu; d0 — brak płonących kropli. Taką klasę ma nasza folia PVC — potwierdza ją raport klasyfikacyjny nr 449/BW/20 wydany przez CNBOP-PIB, który dołączamy do realizacji.",
      },
      {
        q: "Czy do szkoły lub hotelu potrzebne są dokumenty na sufit?",
        a: "Tak. W obiektach użyteczności publicznej klasyfikacja reakcji na ogień jest wymagana przy odbiorze. Do realizacji komercyjnych dołączamy raport klasyfikacyjny i kartę produktu standardowo.",
      },
      {
        q: "Czy sufit PVC pachnie po montażu?",
        a: "Krótkotrwale — zapach po napinaniu na ciepło znika po przewietrzeniu w ciągu 24–48 godzin i nie ma związku z emisją w użytkowaniu. Poliester montowany na zimno nie pachnie wcale.",
      },
      {
        q: "Czy sufit napinany można poddać recyklingowi?",
        a: "Tak. PVC jest tworzywem w pełni podlegającym recyklingowi, a nasza folia powstaje z udziałem materiału z odzysku. Zdemontowana membrana nadaje się do ponownego przetworzenia.",
      },
    ],
    related: [
      { label: "Sufit PVC recyklingowy — produkcja w Polsce", href: "/rozwiazania/sufit-pvc" },
      { label: "Sufit akustyczny — poliester klasy A2", href: "/rozwiazania/sufit-akustyczny" },
      { label: "Bezpłatna wycena w 24 h — formularz", href: "/wycena" },
      { label: "Gwarancja do 15 lat", href: "/gwarancja" },
      { label: "Sufity napinane Gdańsk", href: "/sufity-napinane/gdansk" },
    ],
  },

  /* ────────────────────────────────────────────────────────────
   * DRAFT · Barrisol a sufit napinany
   * Release: November 2026
   * Locale slugs: en "barrisol-vs-stretch-ceiling", ua "barrisol-chy-natyazhna-stelya"
   * ──────────────────────────────────────────────────────────── */
  {
    slug: "barrisol-a-sufit-napinany",
    category: "Poradniki",
    title: "Barrisol, sufit napinany, stretch ceiling — czy to to samo?",
    metaDescription:
      "Barrisol to francuska marka, której nazwa spowszedniała jak adidasy. Sufit napinany to kategoria produktu, a systemów jest wiele — na co patrzeć przy wyborze.",
    excerpt:
      "Wielu klientów dzwoni z pytaniem o barrisol, mając na myśli po prostu sufit napinany. Wyjaśniamy, skąd wzięła się ta potoczna nazwa, czym naprawdę różnią się systemy różnych producentów i jakie pytania zadać wykonawcy, żeby po dziesięciu latach nadal mieć do kogo zadzwonić.",
    datePublished: "2026-11-01",
    readTime: "7 min",
    intro: [
      "Barrisol to nazwa francuskiej marki sufitów napinanych, która w Polsce spowszedniała tak jak adidasy czy rower — mówi się barrisol, mając na myśli każdy sufit napinany. Tymczasem sufit napinany (po angielsku stretch ceiling) to kategoria produktu: membrana napięta na profilach przy ścianach. Systemów w tej kategorii jest wiele, różnią się profilami, membranami, gwarancją i tym, kto po latach przyjedzie na serwis.",
      "Piszemy jako producent jednego z tych systemów: folia PVC powstaje w naszej fabryce w Częstochowie, poliester w zakładzie grupy Stretch w Belgii. O marce Barrisol piszemy neutralnie — to uznana firma z długą historią, a ten tekst nie jest porównaniem, tylko przewodnikiem po tym, jak w ogóle porównywać sufity napinane między sobą.",
    ],
    sections: [
      {
        heading: "Skąd wzięło się słowo barrisol w polszczyźnie",
        paragraphs: [
          "Marka Barrisol należy do pionierów sufitów napinanych w Europie i przez lata była w Polsce jedną z pierwszych szeroko rozpoznawalnych. Kiedy kategoria produktu jest młoda, a jedna nazwa dominuje w rozmowach, staje się określeniem potocznym — tak jak pampersy dla pieluch czy termos dla naczynia próżniowego. Dlatego dziś wiele osób wpisuje w wyszukiwarkę sufit barrisol, choć szuka po prostu sufitu napinanego dowolnego producenta.",
          "Z tego wynika praktyczny wniosek: jeśli ktoś oferuje Ci barrisol, zapytaj, czy ma na myśli produkt tej konkretnej marki, czy sufit napinany innego systemu. Obie odpowiedzi są w porządku — ważne, żebyś wiedział, co kupujesz i kto jest producentem membrany.",
        ],
      },
      {
        heading: "Czym naprawdę różnią się systemy sufitów napinanych",
        paragraphs: [
          "Koncept jest zawsze ten sam, różnice kryją się w czterech miejscach. Membrana: folia PVC lub tkanina poliestrowa, o określonej szerokości bezszwowej, wykończeniu, klasie ogniowej i pochodzeniu. Profil: sposób wpięcia membrany, wysokość profilu (a więc obniżenie sufitu) i to, czy membranę da się zdjąć i założyć ponownie. Gwarancja: na ile lat, na co dokładnie i kto ją realizuje. Serwis: czy firma, która montowała, będzie istniała za dziesięć lat i czy przyjedzie do zalania, wymiany oprawy lub ponownego napięcia membrany.",
          "Dla przykładu nasz system: folia PVC bezszwowa do 6,50 m z 15-letnią gwarancją materiałową, poliester bezszwowy do 5,15 m montowany na zimno z 10-letnią gwarancją, minimalne obniżenie 15 mm, membrana demontowalna bez wymiany profili, produkcja w Polsce i Belgii, serwis własnymi zespołami w 17 miastach. Każdy porządny producent potrafi podać taki zestaw parametrów o swoim systemie — i o to właśnie należy pytać.",
        ],
      },
      {
        heading: "Na co patrzeć przy wyborze — tabela kryteriów",
        paragraphs: [
          "Zamiast pytać o markę, zadaj wykonawcy pytania z tabeli. Odpowiedzi powiedzą Ci więcej niż logo na folderze.",
        ],
        table: {
          headers: ["Kryterium wyboru", "Na co zwrócić uwagę"],
          rows: [
            ["Producent czy importer", "kto produkuje membranę i czy wykonawca ma bezpośredni dostęp do produkcji, czy kupuje folię na metry"],
            ["Pochodzenie folii", "kraj produkcji, dokumenty: atest higieniczny, klasyfikacja reakcji na ogień, karta produktu"],
            ["Szerokość bezszwowa", "czy Twoje pomieszczenie zmieści się bez łączenia (PVC do 6,50 m, poliester do 5,15 m w naszym systemie)"],
            ["Obniżenie sufitu", "minimalna wysokość profilu — od 15 mm w dobrych systemach, więcej przy oświetleniu"],
            ["Gwarancja", "lata, zakres (materiał, montaż), kto ją realizuje i czy jest pisemna"],
            ["Serwis po latach", "czy firma ma własne zespoły i czy przyjedzie do zalania lub ponownego napięcia membrany"],
            ["Demontowalność", "czy membranę można zdjąć i założyć ponownie bez wymiany profili"],
            ["Zakres wyceny", "pomiar, produkcja, profile, montaż, wycięcia i karta gwarancyjna w jednej cenie"],
          ],
        },
      },
      {
        heading: "Producent czy importer — dlaczego to ma znaczenie po pięciu latach",
        paragraphs: [
          "W dniu montażu różnica jest niewidoczna: sufit jest gładki i napięty niezależnie od tego, skąd pochodzi folia. Różnica ujawnia się później. Przy zalaniu przez sąsiada, uszkodzeniu membrany przy przeprowadzce czy wymianie oświetlenia potrzebujesz kogoś, kto zna system, ma ten sam materiał i przyjedzie. Wykonawca kupujący folię na metry od zmieniających się dostawców może nie dopasować koloru ani wykończenia po kilku latach. Producent ma tę samą folię w produkcji i wymienia membranę bez wymiany profili.",
          "Drugi aspekt to dokumenty. Producent dysponuje kompletem: raportem klasyfikacyjnym reakcji na ogień, atestem higienicznym, kartą produktu. Importer często ma tylko folder handlowy. W mieszkaniu przez to nie przejdziesz gorzej, ale przy lokalu usługowym lub odbiorze przez rzeczoznawcę brak dokumentów bywa problemem nie do obejścia.",
        ],
      },
      {
        heading: "Nasze systemy — PVC z Polski, poliester z Belgii",
        paragraphs: [
          "Jesteśmy jedyną firmą w Polsce, która produkuje oba materiały we własnych zakładach grupy Stretch: folię PVC w Częstochowie, membrany poliestrowe w Stretch Productions w Belgii. Oba montuje ten sam zespół, tym samym profilem, według jednego protokołu — więc w jednym mieszkaniu możesz mieć PVC w łazience i poliester w salonie bez dwóch wykonawców. Aktualne widełki cenowe obu materiałów znajdziesz w naszym cenniku; pomiar i wycena są bezpłatne, a wycena ważna 30 dni.",
          "Jeśli więc szukasz barrisola, a trafiłeś tutaj: montujemy sufity napinane własnej produkcji, nie produkty innych marek. Na bezpłatnym pomiarze doradca pokaże próbniki obu materiałów i odpowie na każde pytanie z tabeli powyżej — łącznie z tym, kto przyjedzie na serwis za dziesięć lat.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy montujecie Barrisol?",
        a: "Nie — montujemy sufity napinane własnej produkcji grupy Stretch: folię PVC z naszej fabryki w Częstochowie i poliester z zakładu w Belgii. Nie jesteśmy dystrybutorem innych marek; oferujemy własny system z własnym serwisem.",
      },
      {
        q: "Czy barrisol to to samo co sufit napinany?",
        a: "Barrisol to nazwa francuskiej marki, a sufit napinany (stretch ceiling) to kategoria produktu. Nazwa marki spowszedniała w Polsce jako określenie potoczne, ale systemów sufitów napinanych jest wiele, różnych producentów.",
      },
      {
        q: "Czy sufit napinany musi być z Francji, żeby był dobry?",
        a: "Nie. O jakości decydują parametry membrany, dokumenty (atest higieniczny, klasa ogniowa), gwarancja i serwis, a nie kraj na folderze. Nasze membrany powstają w Polsce i Belgii z pełną dokumentacją i gwarancją do 15 lat.",
      },
      {
        q: "Jak porównywać oferty różnych systemów sufitów napinanych?",
        a: "Pytaj o to samo w każdej ofercie: kto produkuje membranę, skąd pochodzi folia i jakie ma dokumenty, jaka jest szerokość bezszwowa, ile wynosi obniżenie, ile lat gwarancji i kto ją realizuje, czy membrana jest demontowalna i co dokładnie zawiera wycena.",
      },
      {
        q: "Co jeśli firma, która montowała sufit, przestanie istnieć?",
        a: "To realne ryzyko przy wykonawcach kupujących folię na metry. Dlatego warto wybierać producenta z własnym serwisem: ma ten sam materiał w produkcji, wymieni membranę bez wymiany profili i przyjedzie do zalania czy ponownego napięcia po latach.",
      },
    ],
    related: [
      { label: "Sufit PVC — produkcja w Polsce", href: "/rozwiazania/sufit-pvc" },
      { label: "Sufit poliestrowy — produkcja w Belgii", href: "/rozwiazania/sufit-poliestrowy" },
      { label: "O nas — grupa Stretch", href: "/o-nas" },
      { label: "Bezpłatna wycena w 24 h — formularz", href: "/wycena" },
      { label: "Ile kosztuje sufit napinany — cennik 2026", href: "/blog/ile-kosztuje-sufit-napinany" },
      { label: "Sufity napinane Poznań", href: "/sufity-napinane/poznan" },
    ],
  },
];
