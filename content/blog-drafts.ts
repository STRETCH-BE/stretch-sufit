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
 *   October 2026        → montaz-sufitu-napinanego-krok-po-kroku,
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
   * DRAFT · Sufit akustyczny do biura
   * Release: mid-September 2026
   * Locale slugs: en "acoustic-ceiling-office", ua "akustychna-stelya-ofis"
   * ──────────────────────────────────────────────────────────── */
  {
    slug: "sufit-akustyczny-do-biura",
    category: "B2B",
    title: "Sufit akustyczny do biura — jak realnie obniżyć pogłos w open-space (2026)",
    metaDescription:
      "Mikroperforowana membrana z absorberem: klasa A pochłaniania, redukcja pogłosu do 75%. Od 320 zł/m²; biuro 100 m² to ok. 32–38 tys. zł netto, montaż 2–3 dni.",
    excerpt:
      "Open-space huczy, bo wszystkie powierzchnie odbijają dźwięk, a sufit jest największą z nich. Pokazujemy, jak napinany sufit akustyczny z absorberem obniża czas pogłosu do celów projektowych, ile kosztuje biuro 100 m² i dlaczego montaż nie wymaga zamykania firmy.",
    datePublished: "2026-09-15",
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

  /* ────────────────────────────────────────────────────────────
   * DRAFT · Montaż krok po kroku
   * Release: October 2026
   * Locale slugs: en "stretch-ceiling-installation-steps", ua "montazh-natyazhnoi-steli"
   * ──────────────────────────────────────────────────────────── */
  {
    slug: "montaz-sufitu-napinanego-krok-po-kroku",
    category: "Poradniki",
    title: "Montaż sufitu napinanego krok po kroku — dlaczego naprawdę 1 dzień",
    metaDescription:
      "Sufit napinany do 50 m² montuje 2-osobowy zespół w 1 dzień: profile, podkonstrukcje, napinanie (PVC na ciepło, poliester na zimno), wykończenie. Bez kurzu.",
    excerpt:
      "Obietnica montażu w jeden dzień brzmi jak slogan, dopóki nie rozłoży się jej na etapy z czasami. Robimy to poniżej: co dzieje się od wejścia ekipy do odbioru, co musisz przygotować, kiedy montaż trwa dwa dni i czy PVC naprawdę pachnie.",
    datePublished: "2026-10-01",
    readTime: "8 min",
    intro: [
      "Standardowy montaż sufitu napinanego do 50 m² trwa 1 dzień roboczy i wykonuje go zespół dwuosobowy. Etapy: profile obwodowe na ścianach, podkonstrukcje i pierścienie pod oprawy, napinanie membrany — PVC na ciepło, poliester na zimno — i wykończenie krawędzi. Nie ma kurzu, meble zostają w pomieszczeniu, a z sufitu można korzystać od razu po wyjściu ekipy.",
      "Piszemy to jako producent i wykonawca: folia PVC powstaje w naszej fabryce w Częstochowie, poliester w zakładzie grupy Stretch w Belgii, a montują ją nasze własne, przeszkolone zespoły według jednego protokołu. Poniżej ten protokół rozpisany na godziny — bez skrótów i bez upiększania.",
    ],
    sections: [
      {
        heading: "Skąd bierze się jeden dzień",
        paragraphs: [
          "Cała praca wymagająca precyzji — pomiar, projekt wycięć, produkcja membrany na wymiar — dzieje się przed montażem, w hali produkcyjnej. Na obiekt przyjeżdża gotowa membrana skrojona pod konkretne pomieszczenie, z fabrycznie przygotowanymi miejscami na oprawy. Ekipa nie tnie, nie szlifuje i nie czeka na schnięcie czegokolwiek. To dlatego montaż trwa godziny, a nie dni, i dlatego zabudowa G-K z gładzią i malowaniem nigdy nie zejdzie poniżej kilku dni: tam przerwy technologiczne są wpisane w technologię.",
          "Pomiar wykonujemy po wykończeniu ścian, bo membrana musi pasować do ostatecznych wymiarów. Od pomiaru do montażu mija zwykle ok. 5 dni roboczych dla PVC z naszej produkcji; dla poliestru z Belgii 5–15 dni plus transport.",
        ],
      },
      {
        heading: "Etapy montażu — czas i co się dzieje",
        paragraphs: [
          "Poniższe czasy dotyczą typowego pokoju 20–30 m² z kilkoma punktami świetlnymi. W małej łazience wszystko skraca się o połowę; przy 50 m² i rozbudowanym oświetleniu wydłuża do pełnego dnia.",
        ],
        table: {
          headers: ["Etap", "Czas", "Co się dzieje"],
          rows: [
            ["Przygotowanie i ochrona", "ok. 30 min", "folia na meble i podłogę, sprawdzenie wymiarów i instalacji"],
            ["Profile obwodowe", "ok. 1,5–2,5 h", "aluminiowy profil montowany do ścian po obwodzie, poziomowany laserem"],
            ["Podkonstrukcje i pierścienie", "ok. 1–2 h", "platformy pod oprawy, wzmocnione pierścienie pod wycięcia, prowadzenie kabli"],
            ["Napinanie membrany", "ok. 1,5–3 h", "PVC: nagrzewnica i wpięcie w profil; poliester: wpięcie na zimno, bez nagrzewania"],
            ["Wykończenie i oprawy", "ok. 1 h", "maskownica krawędzi, wycięcia, montaż opraw, test oświetlenia"],
            ["Sprzątanie i odbiór", "ok. 30 min", "zdjęcie folii ochronnej, protokół odbioru, karta gwarancyjna"],
          ],
        },
      },
      {
        heading: "PVC na ciepło, poliester na zimno — co to zmienia w mieszkaniu",
        paragraphs: [
          "Folię PVC napina się nagrzewnicą: membrana podgrzana staje się elastyczna, wpina się w profil, a po ostygnięciu naciąga idealnie gładko. W pomieszczeniu przez kilkadziesiąt minut jest cieplej, a bezpośrednio po montażu bywa wyczuwalny delikatny zapach, który znika po przewietrzeniu — zwykle w ciągu 24–48 godzin. Rośliny i zwierzęta warto na czas napinania przenieść do innego pokoju, wyłącznie ze względu na temperaturę.",
          "Poliester montuje się bez nagrzewnicy: membrana wpinana jest na zimno i napina się mechanicznie. Zero zapachu, zero podnoszenia temperatury — to rozwiązanie do pomieszczeń z antykami, instrumentami, obrazami czy sprzętem elektronicznym. Oba warianty montuje ten sam zespół, tym samym profilem.",
        ],
      },
      {
        heading: "Co przygotować przed przyjazdem ekipy",
        paragraphs: [
          "Ściany muszą być wykończone — otynkowane, pomalowane lub wyłożone płytkami — bo profil montujemy do gotowej powierzchni, a membrana odwzorowuje ostateczny obrys pomieszczenia. Instalacja elektryczna pod oprawy powinna być wyprowadzona z sufitu przed montażem; ekipa podłącza oprawy, ale nie prowadzi nowych obwodów. Meble mogą zostać w pomieszczeniu, ale środek powinien być wolny na drabiny — zwykle wystarczy odsunąć je od ścian o metr. Potrzebujemy dostępu do prądu i miejsca na rozłożenie membrany.",
        ],
      },
      {
        heading: "Kiedy montaż trwa dwa dni",
        paragraphs: [
          "Uczciwie: jeden dzień to standard do 50 m², nie obietnica dla każdego zlecenia. Na dwa dni planujemy realizacje powyżej 50 m², całe mieszkania z kilkoma pomieszczeniami, sufity z rozbudowanym oświetleniem LED (linie w profilach, gwiezdne niebo, pełne podświetlenie) oraz pomieszczenia powyżej 3,5 m wysokości, gdzie praca odbywa się z rusztowania. Biura akustyczne 100 m² to zwykle 2–3 dni, możliwe w weekend. Termin i liczbę dni potwierdzamy na wycenie, która jest bezpłatna i ważna 30 dni.",
        ],
      },
      {
        heading: "Po montażu — co dalej",
        paragraphs: [
          "Z pomieszczenia korzystasz od razu po wyjściu ekipy: nie ma schnięcia, wietrzenia pyłu ani czekania na malowanie. Przy folii PVC warto przewietrzyć pokój w ciągu pierwszej doby, żeby pozbyć się delikatnego zapachu po napinaniu; przy poliestrze nawet to odpada. Otrzymujesz protokół odbioru i kartę gwarancyjną — 15 lat na PVC, 10 lat na poliester — a pozostałe 70% płatności rozliczasz w ciągu 7 dni. Pielęgnacja przez kolejne lata to przetarcie membrany miękką ściereczką; w razie zalania, uszkodzenia lub wymiany oświetlenia dzwonisz do naszego serwisu, który zdejmie i ponownie napnie membranę bez wymiany profili.",
        ],
      },
    ],
    faq: [
      {
        q: "Ile trwa montaż sufitu napinanego?",
        a: "Standardowo 1 dzień roboczy dla pomieszczeń do 50 m², zespołem dwuosobowym. Mała łazienka zajmuje pół dnia; całe mieszkanie, rozbudowane oświetlenie LED lub wysokość powyżej 3,5 m to dwa dni, a biura akustyczne 100 m² — 2–3 dni.",
      },
      {
        q: "Czy sufit PVC pachnie po montażu?",
        a: "Bezpośrednio po napinaniu na ciepło bywa wyczuwalny delikatny zapach, który znika po przewietrzeniu, zwykle w ciągu 24–48 godzin. Poliester montowany na zimno nie pachnie wcale.",
      },
      {
        q: "Czy muszę wynosić meble?",
        a: "Nie. Meble zostają w pomieszczeniu — wystarczy odsunąć je od ścian, żeby ekipa miała dostęp do obwodu i miejsce na drabiny. Zabezpieczamy je folią na czas prac.",
      },
      {
        q: "Na jakim etapie remontu zamawiać sufit napinany?",
        a: "Pomiar wykonujemy po wykończeniu ścian (tynki, malowanie, płytki), bo membrana musi odpowiadać ostatecznym wymiarom. Instalacja elektryczna pod oprawy powinna być wyprowadzona wcześniej. Montaż to ostatni etap remontu.",
      },
      {
        q: "Ile czasu mija od zamówienia do montażu?",
        a: "Dla folii PVC z naszej fabryki w Częstochowie zwykle ok. 5 dni roboczych od pomiaru. Dla poliestru z Belgii 5–15 dni plus ok. 3 dni transportu. Termin potwierdzamy przy zamówieniu.",
      },
      {
        q: "Czy podczas montażu powstaje kurz?",
        a: "Nie. Nie ma cięcia płyt, szlifowania ani gładzi — profil mocujemy do ścian, a gotową membranę napinamy. Jedyne wiercenie to otwory pod profil obwodowy, wykonywane z odkurzaczem.",
      },
    ],
    related: [
      { label: "Bezpłatna wycena w 24 h — formularz", href: "/wycena" },
      { label: "Sufit PVC — produkcja w Polsce", href: "/rozwiazania/sufit-pvc" },
      { label: "Sufit napinany czy podwieszany — porównanie", href: "/blog/sufit-napinany-czy-podwieszany" },
      { label: "Ile kosztuje sufit napinany — cennik 2026", href: "/blog/ile-kosztuje-sufit-napinany" },
      { label: "Sufity napinane Częstochowa", href: "/sufity-napinane/czestochowa" },
    ],
  },

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
