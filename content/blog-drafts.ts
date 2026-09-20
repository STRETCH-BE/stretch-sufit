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
