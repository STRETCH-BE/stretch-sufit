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
 *   October 2026        → montaz-sufitu-napinanego-krok-po-kroku,
 *                         czy-sufit-napinany-jest-bezpieczny
 *                         (both PUBLISHED 2026-09-20)
 *   November 2026       → barrisol-a-sufit-napinany,
 *                         sufit-napinany-szkody-gornicze (Silesia)
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
          "Dla przykładu nasz system: folia PVC bezszwowa do 6,50 m z 15-letnią gwarancją materiałową, poliester bezszwowy do 5,15 m montowany na zimno z 10-letnią gwarancją, minimalne obniżenie 15 mm, membrana demontowalna bez wymiany profili, produkcja w Polsce i Belgii, serwis własnymi zespołami we wszystkich obsługiwanych miastach. Każdy porządny producent potrafi podać taki zestaw parametrów o swoim systemie — i o to właśnie należy pytać.",
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

  /* ────────────────────────────────────────────────────────────
   * DRAFT · Pęknięty sufit po szkodach górniczych
   * Release: November 2026 (Silesia-native; publish after the Wave 1/2
   *   city pages are indexed, so the related links resolve)
   * Locale slugs: en "stretch-ceiling-mining-damage", ua "natyazhna-stelya-hirnychi-shkody"
   * OPEN POINTS for Michael before go-live — 7 × [DO UZUPEŁNIENIA] inside:
   *   profile tolerance to wall movement, protokół for the mining company,
   *   who removes loose plaster, warranty wording for building deformation,
   *   re-tensioning cost, indicative gładź/tynk cost per m².
   * ──────────────────────────────────────────────────────────── */
  {
    slug: "sufit-napinany-szkody-gornicze",
    category: "Poradniki",
    title: "Pęknięty sufit po szkodach górniczych — czy sufit napinany to trwałe rozwiązanie?",
    metaDescription:
      "Sufit napinany mocuje się do ścian, nie do popękanego stropu: kryje rysy przy 15 mm obniżenia i nie pęka jak gładź. Granice metody i zakres gwarancji.",
    excerpt:
      "Na Śląsku pytanie o sufit brzmi inaczej niż gdzie indziej: nie »czy będzie ładny«, tylko »czy za dwa lata znów będę szpachlować«. Odpowiadamy jako producent: co sufit napinany naprawdę robi z popękanym stropem, gdzie kończą się jego możliwości, co obejmuje gwarancja i kiedy najpierw trzeba wezwać konstruktora.",
    datePublished: "2026-11-03",
    readTime: "9 min",
    intro: [
      "Krótka odpowiedź: tak, sufit napinany jest trwałym sposobem na sufit popękany po szkodach górniczych — pod warunkiem, że budynek jest stabilny albo pracuje w niewielkim zakresie. Membrana nie jest przyklejona do stropu: trzyma się aluminiowego profilu zamocowanego do ścian po obwodzie, wisi minimum 15 mm poniżej starego sufitu i jest napięta, a nie sztywna. Pęknięta gładź, uskoki między płytami stropowymi i ślady po kolejnych szpachlowaniach zostają nad nią, niewidoczne, bez skuwania. Montaż trwa 1 dzień, bez pyłu, a gwarancja na folię PVC wynosi 15 lat, na poliester 10.",
      "Piszemy to jako producent: folia PVC powstaje w naszej fabryce w Częstochowie, poliester w zakładzie grupy Stretch w Belgii, a montują ją nasze zespoły — także w Bytomiu, Rudzie Śląskiej, Zabrzu, Rybniku, Jastrzębiu-Zdroju i Mysłowicach. Dlatego zamiast obietnic dostajesz w tym tekście także sekcję o granicach: sufit napinany nie naprawia konstrukcji, nie zastępuje opinii konstruktora i ma gwarancję z konkretnymi wyłączeniami. Kto Ci tego nie powie, sprzedaje folię, a nie rozwiązanie.",
    ],
    sections: [
      {
        heading: "Co szkody górnicze robią z sufitem",
        paragraphs: [
          "Eksploatacja górnicza sprawia, że teren osiada nierównomiernie. Budynek stojący na takim gruncie przechyla się, wygina lub rozciąga o ułamki procenta — dla konstrukcji to zwykle bezpieczne, dla warstw wykończeniowych nie. Tynk i gładź nie mają żadnej rezerwy na odkształcenia, więc pękają pierwsze. Na suficie widać to jako rysy biegnące ukośnie od naroży okien i drzwi, pęknięcia wzdłuż styków płyt stropowych w blokach z wielkiej płyty, szczelinę na styku sufitu ze ścianą albo wyraźny uskok, gdy jedna płyta stropowa osiadła inaczej niż sąsiednia.",
          "Drugi objaw jest mniej spektakularny, ale bardziej dokuczliwy: powtarzalność. Rysę się szpachluje i maluje, a po roku lub dwóch wraca w tym samym miejscu, bo przyczyna nie zniknęła — strop dalej pracuje, a nowa gładź pęka dokładnie tam, gdzie stara. W wielu mieszkaniach na Śląsku sufit ma już trzecią albo czwartą warstwę poprawek, coraz grubszą i coraz mniej równą. Stąd bierze się pytanie, od którego zaczyna się większość rozmów z klientami z terenów górniczych: czy istnieje wykończenie, które nie pęka razem ze stropem.",
        ],
      },
      {
        heading: "Dlaczego gładź i płyta G-K pękają raz za razem",
        paragraphs: [
          "Gładź i tynk są sztywne i związane ze stropem na całej powierzchni. Każdy ruch podłoża przenosi się na nie w skali jeden do jednego — a że zaprawa gipsowa się nie rozciąga, jedynym sposobem, w jaki może oddać ten ruch, jest pęknięcie. Szpachlowanie rysy zmienia tylko to, co widać: pod nową warstwą zostaje ta sama nieciągłość i ten sam kierunek naprężeń. Taśmy zbrojące i siatki opóźniają powrót rysy, ale nie usuwają przyczyny.",
          "Płyta gipsowo-kartonowa wydaje się rozwiązaniem, bo tworzy nową płaszczyznę pod starym stropem. Tyle że ruszt zabudowy podwiesza się do tego samego stropu, a płyty łączy spoina gipsowa — najsłabsze miejsce całego systemu. Gdy budynek pracuje, ruch przechodzi przez wieszaki na ruszt, a sztywna zabudowa oddaje go na łączeniach: rysy pojawiają się wzdłuż spoin, często w tych samych miejscach, w których wcześniej pękał tynk. Po drodze do tego efektu jest jeszcze kilka dni z pyłem ze szlifowania gładzi i zwykle 5–12 cm straconej wysokości. W bloku z 2,50 m to sporo.",
        ],
      },
      {
        heading: "Jak jest zamocowany sufit napinany — i dlaczego to zmienia wszystko",
        paragraphs: [
          "Sufit napinany składa się z dwóch elementów: aluminiowego profilu i membrany. Profil montujemy do ścian po obwodzie pomieszczenia, poziomując laserem — nie do stropu. Membrana, folia PVC lub tkanina poliestrowa wyprodukowana na wymiar tego jednego pomieszczenia, wpina się w profil i zostaje napięta. Nic nie jest klejone do starego sufitu i nic nie jest w nim kotwione, jeśli nad membraną nie ma opraw wymagających podkonstrukcji. Popękana gładź, luźne poprawki, uskok między płytami — wszystko zostaje nad membraną, w pustce między nią a stropem. Nie skuwamy tynku, nie wyrównujemy stropu, nie ma mokrych prac.",
          "Obniżenie wynosi minimum 15 mm przy samym profilu, liczone od najniższego punktu starego sufitu — jeśli strop ma uskok kilku centymetrów, profil trafia poniżej tego uskoku, a nowa płaszczyzna jest po prostu równa. Membrana jest elastyczna i pracuje pod stałym napięciem: niewielkie ruchy ścian, które sztywną gładź rozrywają, napięta folia przenosi jako minimalną zmianę naciągu, niewidoczną gołym okiem. I trzecia cecha, na terenach górniczych ważniejsza niż zwykle: membranę można zdjąć i napiąć ponownie bez wymiany profili. Jeśli po latach profil trzeba przekotwić albo skorygować, nie oznacza to nowego sufitu.",
          "PVC napinamy na ciepło (nagrzewnica, delikatny zapach przez 24–48 h), poliester na zimno i bez zapachu. Oba materiały montuje ten sam zespół, tym samym profilem, w 1 dzień roboczy do ok. 50 m², bez pyłu, z meblami w pomieszczeniu. Folia PVC jest bezszwowa do 6,50 m szerokości, poliester do 5,15 m — w typowym pokoju w familoku, kamienicy czy bloku łączenia nie ma.",
        ],
      },
      {
        heading: "Gdzie kończą się możliwości sufitu napinanego — i co obejmuje gwarancja",
        paragraphs: [
          "Sufit napinany rozwiązuje problem wykończenia, nie problem konstrukcji. To zdanie powtarzamy na każdym pomiarze w Bytomiu czy Rudzie Śląskiej i powtarzamy tutaj, bo od niego zależy, czy będziesz zadowolony także po pięciu latach. Cztery granice, o których mówimy przed podpisaniem umowy, opisujemy niżej — a po nich to, co obejmuje gwarancja.",
          "Po pierwsze: nie naprawia stropu. Rysy zostają nad membraną i mogą się pogłębiać — sufit napinany je zakrywa, ale nie zatrzymuje. Jeśli pęknięcia są szerokie, przechodzą przez ściany nośne, powiększają się z miesiąca na miesiąc, drzwi i okna przestają się domykać albo w budynku orzeczono konieczność prac konstrukcyjnych, najpierw potrzebna jest opinia konstruktora lub rzeczoznawcy budowlanego. Nowy sufit montujemy po naprawie konstrukcji, nie zamiast niej.",
          "Po drugie: profil jest tak stabilny jak ściana, do której go mocujemy. Przy budynku, który pracuje w niewielkim zakresie, profil przesuwa się razem ze ścianą, a membrana ten ruch kompensuje. Przy aktywnej, znaczącej deformacji ściany mogą się rozejść na tyle, że profil trzeba będzie odkręcić, ponownie zakotwić i napiąć membranę na nowo. [DO UZUPEŁNIENIA: jaki rząd przemieszczeń ścian lub rozejścia naroży układ profil–membrana przenosi bez interwencji serwisu — potwierdzić z działem technicznym; bez tej liczby nie obiecujemy nic konkretnego]",
          "Po trzecie: nie zastępuje dokumentacji szkody. Po założeniu membrany strop znika z oczu — także dla rzeczoznawcy. Przed montażem sfotografuj rysy z miarką, zachowaj protokoły wcześniejszych oględzin i korespondencję w sprawie naprawienia szkody. Nasz doradca na pomiarze widzi strop i zapisuje jego stan w notatce z pomiaru, ale to nie jest ekspertyza. [DO UZUPEŁNIENIA: czy na życzenie wystawiamy kosztorys i protokół w formie nadającej się do wniosku o naprawienie szkody górniczej kierowanego do zakładu górniczego]",
          "Po czwarte: odspojony tynk to osobny temat. Fragmenty gładzi, które przy opukaniu brzmią głucho albo już odpadają, lepiej usunąć przed montażem, żeby nic nie spadało na membranę z góry. Trzymający się tynk zostaje. [DO UZUPEŁNIENIA: czy usunięcie luźnych fragmentów tynku przed montażem wykonuje nasza ekipa w ramach zlecenia, czy leży po stronie klienta]",
          "Gwarancja materiałowa — 15 lat na PVC, 10 lat na poliester — obejmuje wady membrany: stabilność koloru, trwałość wpięcia w profil, brak pęknięć i rozdarć w normalnych warunkach użytkowania oraz wodoszczelność PVC przy zalaniu z góry. Nie obejmuje uszkodzeń mechanicznych, niewłaściwego użytkowania, przeróbek wykonanych przez inne firmy ani zdarzeń losowych, takich jak pożar czy powódź. Pełną listę znajdziesz na stronie gwarancji i w karcie gwarancyjnej, którą dostajesz przy odbiorze.",
          "Ruch budynku wywołany eksploatacją górniczą to przyczyna zewnętrzna, na którą ani my, ani membrana nie mamy wpływu. [DO UZUPEŁNIENIA: potwierdzić z kartą gwarancyjną, czy odkształcenia budynku i szkody górnicze są wymienione jako wyłączenie na równi ze zdarzeniami losowymi] [DO UZUPEŁNIENIA: czy ponowne napięcie membrany po przekotwieniu profilu jest usługą serwisową odpłatną, czy gwarancyjną — i jaki jest orientacyjny koszt takiej interwencji] Wiemy, że to niewygodne pytania, i wolimy odpowiedzieć na nie w umowie niż po fakcie. Jedno możemy powiedzieć bez zastrzeżeń: w żadnym z tych scenariuszy nie kupujesz nowego sufitu — profile zostają na ścianach, a membrana wraca na miejsce.",
        ],
      },
      {
        heading: "Gładź, płyta G-K czy sufit napinany — porównanie na terenie górniczym",
        paragraphs: [
          "Trzy technologie, które realnie wchodzą w grę przy popękanym suficie. Wiersz o zachowaniu przy ruchu budynku jest tym, który na Śląsku decyduje; pozostałe opisują, jak wygląda remont i co się dzieje, gdy do sufitu trzeba wrócić. Pełne porównanie dziewięciu parametrów sufitu napinanego i podwieszanego znajdziesz w osobnym artykule.",
        ],
        table: {
          headers: ["Kryterium", "Szpachlowanie rys i gładź", "Płyta G-K", "Sufit napinany"],
          rows: [
            ["Koszt na starcie (za m²)", "najniższy jednorazowo — [DO UZUPEŁNIENIA: orientacyjne widełki zł/m² za szpachlowanie rys, gładź i dwukrotne malowanie]", "ok. 70–150 zł/m² z gładzią i malowaniem", "od ok. 170 zł/m² (PVC) z montażem, netto"],
            ["Czas remontu", "kilka dni: schnięcie warstw, szlifowanie, malowanie", "realnie 3–7 dni z przerwami technologicznymi", "1 dzień roboczy do ok. 50 m²"],
            ["Pył i mokre prace", "szlifowanie gładzi — pył w całym mieszkaniu, meble do wyniesienia", "cięcie płyt i szlifowanie spoin — pył, meble do wyniesienia", "bez pyłu i bez mokrych prac, meble zostają"],
            ["Obniżenie sufitu", "brak", "zwykle 5–12 cm", "od 15 mm przy profilu; więcej przy uskoku stropu i oprawach wpuszczanych"],
            ["Gdy budynek dalej pracuje", "pęka razem ze stropem — rysa wraca w tym samym miejscu", "ruch przechodzi przez wieszaki na ruszt; rysy na spoinach płyt", "membrana elastyczna, napięta i niezwiązana ze stropem — niewielkie ruchy przenosi bez pękania; przy przesunięciu profilu: zdjęcie i ponowne napięcie"],
            ["Odwracalność i naprawa", "każda naprawa to kolejna warstwa; nic nie da się cofnąć", "naprawa = wycinanie, szpachlowanie, malowanie; demontaż niszczy płyty", "membrana demontowalna i ponownie napinana bez wymiany profili"],
            ["Co po 10 latach", "powtarzane szpachlowanie — częstotliwość zależy od tempa osiadania", "1–2 odświeżenia + naprawy rys na spoinach", "bez odświeżania w okresie gwarancji (15 lat PVC, 10 lat poliester)"],
          ],
        },
      },
      {
        heading: "Ile to kosztuje i skąd VAT 8%",
        paragraphs: [
          "Cena sufitu napinanego na terenie górniczym jest taka sama jak wszędzie — popękany strop nie podnosi stawki, bo go nie dotykamy. Folia PVC z montażem kosztuje od ok. 170 zł/m² netto (typowo 170–240 zł/m² zależnie od wykończenia i liczby wycięć), poliester od ok. 220 zł/m² (220–290), sufit akustyczny od ok. 320 zł/m². Przy małych pomieszczeniach, takich jak łazienka w familoku, obowiązuje minimum zlecenia ok. 1 400–1 600 zł. Jedyna pozycja, która na terenie górniczym bywa większa niż zwykle, to obniżenie: przy dużym uskoku stropu profil schodzi niżej, ale nie zmienia to ceny za metr.",
          "Dla lokali mieszkalnych o powierzchni do 150 m² i domów do 300 m² montaż sufitu napinanego rozliczamy ze stawką VAT 8% zamiast 23% — na podstawie oświadczenia nabywcy, które przygotowujemy razem z umową; powyżej tych limitów obniżona stawka obowiązuje proporcjonalnie, a w lokalach usługowych zawsze 23%. Na przykładzie pokoju 25 m² z folią PVC mat przy dolnej granicy widełek: ok. 4 250 zł netto, czyli ok. 4 590 zł brutto z VAT 8% zamiast ok. 5 230 zł z VAT 23%. Pomiar i wycena są bezpłatne, wycena zachowuje ważność 30 dni, a płatność to 30% zaliczki i 70% w ciągu 7 dni po odbiorze.",
        ],
      },
      {
        heading: "Gdzie na Śląsku to ma znaczenie — Bytom, Ruda Śląska, Zabrze, Rybnik, Jastrzębie-Zdrój, Mysłowice",
        paragraphs: [
          "Szkody górnicze nie wyglądają wszędzie tak samo, bo nie wszędzie stoi ta sama zabudowa. W Bytomiu, gdzie skutki eksploatacji widać od śródmieścia po Karb, Miechowice i Bobrek, najczęściej trafiamy do przedwojennych kamienic z wysokimi stropami i do familoków — tam sufit napinany zakrywa spękany tynk bez skuwania, a przy 3 m wysokości obniżenie o kilka centymetrów nikomu nie przeszkadza. Ruda Śląska i Zabrze to mieszanka familoków z Nowego Bytomia, Wirku czy Biskupic i osiedli z wielkiej płyty w Halembie czy na Zaborzu, gdzie problem jest inny: niska wysokość i uskoki na stykach płyt stropowych. Tam decyduje 15 mm obniżenia.",
          "Rybnik i Jastrzębie-Zdrój leżą na terenach, gdzie eksploatacja górnicza wciąż trwa lub zakończyła się niedawno. W Rybniku dominują domy jednorodzinne i familoki w dzielnicach takich jak Niedobczyce, Chwałowice czy Boguszowice; w Jastrzębiu — bloki z wielkiej płyty z lat 60. i 70. na osiedlach w rodzaju Arki Bożka, Przyjaźń czy Morcinka. W obu miastach częściej niż gdzie indziej pytamy o aktywność terenu i częściej odsyłamy do konstruktora, zanim cokolwiek wycenimy. Mysłowice to z kolei kamienice śródmieścia, zabudowa Brzezinki i Wesołej oraz domy jednorodzinne na południu miasta — rysy po eksploatacji nie omijają tam także nowszych budynków.",
          "Pomiar w Bytomiu, Rudzie Śląskiej, Zabrzu i Mysłowicach umawiamy w ciągu 3–5 dni roboczych, w Rybniku i Jastrzębiu-Zdroju w ciągu 5–7 dni roboczych; folia PVC z naszej fabryki jest gotowa do montażu ok. 5 dni roboczych po pomiarze. Bytom, Zabrze, Ruda Śląska i Mysłowice leżą w promieniu 100 km od Częstochowy, więc nie doliczamy tam dojazdu. Na pomiarze doradca ogląda strop, sprawdza ściany pod profil i mówi wprost, czy to zadanie dla sufitu napinanego, czy najpierw dla konstruktora — obie odpowiedzi są bezpłatne.",
        ],
      },
    ],
    faq: [
      {
        q: "Czy sufit napinany zakryje popękany sufit po szkodach górniczych?",
        a: "Tak. Membrana trzyma się profilu zamocowanego do ścian po obwodzie, nie do starego stropu, więc rysy, uskoki płyt i ślady po szpachlowaniu zostają nad nią — niewidoczne i bez skuwania. Obniżenie to minimum 15 mm od najniższego punktu stropu, a nowa płaszczyzna jest jednolicie gładka.",
      },
      {
        q: "Co się dzieje z membraną, gdy budynek dalej pracuje?",
        a: "Membrana jest elastyczna i utrzymywana w napięciu, więc niewielkie ruchy ścian przenosi bez pękania — inaczej niż sztywna gładź. Jeśli ruch jest na tyle duży, że profil wymaga ponownego zakotwienia, membranę zdejmujemy i napinamy ponownie bez wymiany profili. Gwarancji, że budynek się nie poruszy, nie daje nikt — my też nie.",
      },
      {
        q: "Czy sufit napinany naprawia szkody górnicze?",
        a: "Nie. Zakrywa ich skutki na suficie i sam nie pęka przy niewielkich ruchach, ale konstrukcji nie wzmacnia. Przy szerokich, powiększających się pęknięciach, niedomykających się drzwiach i oknach lub orzeczonej potrzebie prac konstrukcyjnych najpierw potrzebna jest opinia konstruktora; sufit montujemy po naprawie, nie zamiast niej.",
      },
      {
        q: "Czy szkody górnicze są objęte gwarancją na sufit napinany?",
        a: "Gwarancja materiałowa (15 lat PVC, 10 lat poliester) obejmuje wady membrany: kolor, wpięcie w profil, brak pęknięć w normalnym użytkowaniu, wodoszczelność PVC. Ruch budynku to przyczyna zewnętrzna. [DO UZUPEŁNIENIA: potwierdzić zapis karty gwarancyjnej dotyczący odkształceń budynku oraz zasady rozliczania ponownego napięcia membrany po przekotwieniu profilu]",
      },
      {
        q: "Ile kosztuje sufit napinany w mieszkaniu ze szkodami górniczymi?",
        a: "Tyle samo co bez nich: PVC od ok. 170 zł/m² netto z montażem, poliester od ok. 220 zł/m², bo popękanego stropu nie naprawiamy ani nie wyrównujemy. Dla mieszkań do 150 m² i domów do 300 m² obowiązuje VAT 8%. Pomiar i wycena są bezpłatne, wycena ważna 30 dni.",
      },
      {
        q: "Ile wysokości zabiera sufit napinany przy nierównym stropie?",
        a: "Minimum 15 mm przy profilu, liczone od najniższego punktu starego sufitu. Jeśli strop ma uskok, profil schodzi poniżej niego, więc obniżenie rośnie o wysokość uskoku; przy oprawach wpuszczanych to 3–4 cm. W bloku z 2,50 m to nadal wyraźnie mniej niż zabudowa G-K.",
      },
    ],
    related: [
      { label: "Sufity napinane Bytom", href: "/sufity-napinane/bytom" },
      { label: "Sufity napinane Ruda Śląska", href: "/sufity-napinane/ruda-slaska" },
      { label: "Sufity napinane Zabrze", href: "/sufity-napinane/zabrze" },
      { label: "Sufity napinane Rybnik", href: "/sufity-napinane/rybnik" },
      { label: "Sufity napinane Jastrzębie-Zdrój", href: "/sufity-napinane/jastrzebie-zdroj" },
      { label: "Sufity napinane Mysłowice", href: "/sufity-napinane/myslowice" },
      { label: "Sufity napinane na Śląsku — strona regionalna", href: "/sufity-napinane/slask" },
      { label: "Sufit napinany czy podwieszany — porównanie", href: "/blog/sufit-napinany-czy-podwieszany" },
      { label: "Gwarancja do 15 lat — co obejmuje", href: "/gwarancja" },
      { label: "Bezpłatna wycena w 24 h — formularz", href: "/wycena" },
    ],
  },
];
