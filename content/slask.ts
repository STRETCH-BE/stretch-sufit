/**
 * Regional hub content — /sufity-napinane/slask ("Sufity napinane na Śląsku").
 * File path: /content/slask.ts
 *
 * Region-level page for the Silesian voivodeship: it targets "Śląsk /
 * śląskie / aglomeracja śląska" queries and hands city intent down to the
 * city pages grouped by sub-region. Never put a city name in its title —
 * that would compete with the city pages.
 */

import type { CitySubregion } from "@/types";

export type SlaskSubregion = {
  key: CitySubregion;
  title: string;
  blurb: string;
  citySlugs: string[];
};

export type SlaskContent = {
  metaTitle: string;
  metaDescription: string;
  h1Italic: string;
  h1Red: string;
  intro: string[];
  subregions: SlaskSubregion[];
  sections: { heading: string; body: string; links: { label: string; href: string }[] }[];
  reasons: { title: string; body: string }[];
  faq: { q: string; a: string }[];
  updatedAt: string;
};

export const slask: SlaskContent = {
  metaTitle: "Sufity napinane na Śląsku — producent z Częstochowy",
  metaDescription:
    "Sufity napinane na Śląsku i w Zagłębiu: folia PVC z własnej fabryki w Częstochowie, poliester z Belgii. PVC z montażem od ok. 170 zł/m², bezpłatny pomiar.",
  h1Italic: "na Śląsku.",
  h1Red: "Producent z Częstochowy.",
  intro: [
    "Województwo śląskie obsługujemy z jednego miejsca — z własnej fabryki w Częstochowie, skąd autostradą A1 dojeżdżamy do Bytomia i Katowic w niecałą godzinę, a drogą DK1 prosto do Zagłębia. Po drodze zmienia się wszystko: ceglane familoki Nikiszowca i Rudy Śląskiej, bloki z wielkiej płyty w Tychach i Jastrzębiu-Zdroju, secesyjne kamienice Bytomia i Sosnowca, domy jednorodzinne pod Beskidami. Każdy z tych budynków stawia sufitowi inne wymagania, dlatego zamiast jednej oferty dla całego regionu opisujemy niżej, co i jak montujemy w poszczególnych jego częściach.",
    "Ta strona zbiera śląskie miasta, w których montujemy sufity napinane, i pokazuje, czym różni się praca w aglomeracji od Podbeskidzia czy Rybnickiego Okręgu Węglowego. Ekipa, profile i standard pomiaru są wszędzie te same — zmienia się czas dojazdu, typ budynku i to, co klienci zamawiają najczęściej. Wybierz swoje miasto poniżej albo czytaj dalej, jeśli chcesz najpierw poznać ceny, terminy i sposób montażu w typowych śląskich wnętrzach.",
  ],
  subregions: [
    {
      key: "czestochowski",
      title: "Częstochowa i powiat częstochowski",
      blurb:
        "Nasz własny teren. Fabryka i showroom są na miejscu, więc pomiar w Częstochowie, Kłobucku, Myszkowie czy Zawierciu wpisujemy w kalendarz między montażami, bez planowania osobnej trasy. Zamawiane są tu przede wszystkim sufity do domów jednorodzinnych w gminach wokół miasta, do mieszkań na Północy i Tysiącleciu oraz do lokali usługowych w Śródmieściu. Membrana jedzie na montaż prosto z hali produkcyjnej.",
      citySlugs: ["czestochowa"],
    },
    {
      key: "aglomeracja-katowicka",
      title: "Aglomeracja katowicka",
      blurb:
        "Katowice, Chorzów, Ruda Śląska, Mysłowice, Tychy, Zabrze, Bytom i Gliwice tworzą jedną ciągłą zabudowę, do której wjeżdżamy z A1 przez Piekary i Bytom albo przez A4 i Drogową Trasę Średnicową. Tu spotykamy pełen przekrój: familoki i kamienice ze spękanym tynkiem, bloki z wielkiej płyty, nowe apartamentowce i biurowce, w których liczy się akustyka. Wszystkie te miasta leżą w promieniu 100 km od fabryki.",
      citySlugs: ["katowice", "chorzow", "ruda-slaska", "myslowice", "tychy", "zabrze", "bytom", "gliwice"],
    },
    {
      key: "zaglebie",
      title: "Zagłębie Dąbrowskie",
      blurb:
        "Sosnowiec i Dąbrowa Górnicza leżą najbliżej fabryki ze wszystkich dużych miast regionu — jedzie się tu drogą DK1 przez Siewierz, do Sosnowca dalej ekspresówką S1. Zabudowa jest inna niż po śląskiej stronie Brynicy: więcej kamienic z początku XX wieku na Pogoni i w centrum Sosnowca, rozległe osiedla w Zagórzu i Gołonogu, domy jednorodzinne w Będzinie, Czeladzi i Sławkowie.",
      citySlugs: ["sosnowiec", "dabrowa-gornicza"],
    },
    {
      key: "row",
      title: "Rybnik i Jastrzębie-Zdrój (ROW)",
      blurb:
        "Rybnicki Okręg Węglowy — Rybnik, Jastrzębie-Zdrój, a z nimi Żory, Wodzisław Śląski i Radlin — to najdalszy od Częstochowy odcinek naszej śląskiej trasy, w całości po autostradzie A1. Tutaj obok siebie stoją osiedla z wielkiej płyty z lat siedemdziesiątych w Jastrzębiu i stare familoki w rybnickich Niedobczycach czy Chwałowicach; w obu przypadkach warto przeczytać nasze odpowiedzi o szkodach górniczych w pytaniach niżej.",
      citySlugs: ["rybnik", "jastrzebie-zdroj"],
    },
    {
      key: "podbeskidzie",
      title: "Podbeskidzie",
      blurb:
        "Bielsko-Biała z Czechowicami-Dziedzicami, Żywcem i Cieszynem to dla nas kierunek A1 i S1, około 110 km z Częstochowy. Zabudowa jest tu inna niż w aglomeracji: przewaga domów jednorodzinnych, często z poddaszem i salonem o dużej rozpiętości, kamienice w centrum Bielska oraz pensjonaty i hotele w Szczyrku i Wiśle. Typowe zlecenia to sufity z gwiezdnym niebem i liniami LED w domach oraz akustyka w salach restauracyjnych.",
      citySlugs: ["bielsko-biala"],
    },
  ],
  sections: [
    {
      heading: "Fabryka w Częstochowie, ekipy w całym województwie",
      body:
        "Na Śląsk przyjeżdżamy jako producent. Folię PVC do sufitów napinanych wytwarzamy we własnej fabryce Alto Design przy ul. Legionów 59 w Częstochowie, a poliester sprowadzamy z belgijskiego zakładu grupy Stretch, do której należymy. Dla klienta na Śląsku oznacza to dwie rzeczy: materiał na montaż wychodzi z hali w tym samym województwie, a reklamację czy dodatkowy element załatwia ta sama firma, która folię wyprodukowała.\n\nPrzy fabryce działa showroom — można tu obejrzeć wykończenia folii na dużych próbkach (mat, satyna, połysk), profile i gotowe fragmenty sufitów z oświetleniem, a przy okazji zajrzeć na produkcję. W promieniu 100 km od Częstochowy nie doliczamy osobnej opłaty za dojazd; w tym promieniu leżą Katowice, Sosnowiec, Gliwice, Bytom, Chorzów, Zabrze, Tychy, Mysłowice, Ruda Śląska i Dąbrowa Górnicza. Bielsko-Biała, Rybnik i Jastrzębie-Zdrój są poza nim — tam pomiary i montaże łączymy w jednodniowe trasy po kilka adresów, żeby nie wydłużać terminów bardziej, niż to konieczne.",
      links: [
        { label: "O nas — fabryka i grupa Stretch", href: "/o-nas" },
        { label: "Kontakt i showroom w Częstochowie", href: "/kontakt" },
      ],
    },
    {
      heading: "Familoki, wielka płyta, kamienice — co to znaczy dla sufitu",
      body:
        "Cztery typy budynków wracają w śląskich zleceniach najczęściej. W familokach Nikiszowca, Rudy Śląskiej czy Zabrza strop jest zwykle nierówny, a tynk porysowany — membranę mocujemy do profilu na ścianach, nie do starego sufitu, więc rysy zostają nad nią bez skuwania i gładzi. Tam, gdzie budynek stoi na terenie górniczym, membrana trzymana w napięciu przenosi drobne ruchy konstrukcji inaczej niż sztywny tynk; co to znaczy w praktyce, opisujemy w pytaniach niżej.\n\nW blokach z wielkiej płyty — od katowickiego osiedla Tysiąclecia po Jastrzębie-Zdrój — problemem jest wysokość 2,5 m i widoczne łączenia płyt stropowych. Sufit napinany zabiera od 15 mm i wyrównuje płaszczyznę bez rusztu, którego wymaga płyta G-K. Secesyjne kamienice Bytomia, Sosnowca i Gliwic mają z kolei wysokie pomieszczenia ze sztukaterią: tu proponujemy poliester napinany na zimno, który nie wymaga nagrzewania wnętrza i daje się zatrzymać przed gzymsem. W domach jednorodzinnych pod Częstochową i na Podbeskidziu liczy się szerokość bez łączenia — PVC do 6,50 m, poliester do 5,15 m — oraz podświetlenie w salonach ze skosami.",
      links: [
        { label: "Sufit napinany czy podwieszany — porównanie", href: "/blog/sufit-napinany-czy-podwieszany" },
        { label: "Sufit PVC — parametry i wykończenia", href: "/rozwiazania/sufit-pvc" },
      ],
    },
    {
      heading: "Ceny sufitów napinanych na Śląsku i terminy pomiaru",
      body:
        "Cennik jest jeden dla całego województwa i zaczyna się od ok. 170 zł/m² netto za PVC z montażem. Orientacyjne widełki: sufit PVC 170–240 zł/m², poliester 220–290 zł/m², sufit akustyczny 320–450 zł/m². Do tego dochodzi oświetlenie i ewentualne obróbki wokół słupów czy rur — wszystko wpisujemy do wyceny po pomiarze, a nie doliczamy na koniec.\n\nNa sufity w mieszkaniach i domach obowiązuje 8% VAT (limity metrażu wyjaśniamy w pytaniach niżej), w lokalach komercyjnych 23%. Terminy pomiaru zależą od odległości od fabryki: w Częstochowie i okolicy to 1–3 dni robocze, w aglomeracji katowickiej i Zagłębiu 3–5 dni, w Rybnickim Okręgu Węglowym i na Podbeskidziu 5–7 dni. Od pomiaru do montażu PVC mija zwykle około 5 dni roboczych, bo membranę przygotowujemy na wymiar w Częstochowie; poliester potrzebuje 5–15 dni plus około 3 dni transportu z Belgii. Pełny cennik z przykładami metraży znajdziesz w artykule poniżej, a wycenę dla konkretnego adresu przygotujemy po pomiarze.",
      links: [
        { label: "Ile kosztuje sufit napinany — cennik 2026", href: "/blog/ile-kosztuje-sufit-napinany" },
        { label: "VAT 8% na sufit napinany — kiedy przysługuje", href: "/blog/sufit-napinany-vat-8" },
        { label: "Bezpłatna wycena", href: "/wycena" },
      ],
    },
    {
      heading: "Hotele, sale weselne i biura — akustyka i fotodruk",
      body:
        "Druga część naszej śląskiej pracy to obiekty komercyjne: hotele wzdłuż A4 i w Beskidach, sale weselne pod Częstochową i w gminach wokół Rybnika, restauracje w katowickim Śródmieściu, biura przy al. Roździeńskiego i w Gliwicach. Łączy je jeden problem — pogłos. Sufit akustyczny z mikroperforowanego poliestru z absorberem pochłania dźwięk w klasie A i skraca pogłos nawet o 75%, a z dołu wygląda jak zwykły gładki sufit; w biurach celujemy w RT60 poniżej 0,8 s dla open-space i poniżej 0,6 s dla sal konferencyjnych.\n\nJak to działa w sali bankietowej, pokazuje realizacja grupy w hotelu Van der Valk w Beveren: system 50 mm z pochłanianiem aW 0,95. Tam, gdzie liczy się wystrój, dokładamy fotodruk — grafikę, logo albo fakturę na membranie. Montaż w działających lokalach planujemy nocą albo w dni zamknięcia: mniejsza sala kończy serwis wieczorem, a rano otwiera się pod nowym sufitem, bez kurzu i mokrych prac; większe powierzchnie dzielimy na etapy.",
      links: [
        { label: "Sufit akustyczny — jak działa", href: "/rozwiazania/sufit-akustyczny" },
        { label: "Sufit akustyczny do biura — poradnik", href: "/blog/sufit-akustyczny-do-biura" },
        { label: "Realizacja: sala bankietowa Van der Valk, Beveren", href: "/realizacje/van-der-valk-beveren" },
      ],
    },
  ],
  reasons: [
    {
      title: "Pomiar bezpłatny, wycena 30 dni",
      body: "Po zgłoszeniu oddzwaniamy w ciągu 24 godzin i umawiamy pomiar pod wskazanym adresem — bez opłaty i bez zobowiązań. Wycena obowiązuje 30 dni, więc jest czas na porównanie ofert i spokojną decyzję. Płatność rozkładamy na dwa kroki: 30% zaliczki przy zamówieniu i 70% w ciągu 7 dni od odbioru.",
    },
    {
      title: "Gwarancja 15 lat na PVC",
      body: "Na folię PVC z własnej produkcji dajemy 15 lat gwarancji, na poliester 10 lat, a realny czas użytkowania sufitu liczymy na 25 lat. Membrana jest demontowalna: po zalaniu od sąsiada, przy zmianie oświetlenia albo gdy trzeba dostać się do instalacji zdejmujemy ją i napinamy ponownie na tych samych profilach.",
    },
    {
      title: "Badania ogniowe i emisyjne",
      body: "Folia PVC ma klasyfikację ogniową B-s1,d0 (raport 449/BW/20, CNBOP-PIB), poliester A2-s1,d0, czyli jest niepalny — to ważne przy odbiorach sal weselnych i hoteli. Emisje PVC badał Instytut Fraunhofera (raport MAIC-2018-2563): po wywietrzeniu nie ma zapachu plastyfikatorów, a lekki zapach po nagrzewaniu folii znika w 24–48 godzin.",
    },
  ],
  faq: [
    {
      q: "Czy sufit napinany zakryje spękany strop po szkodach górniczych, na przykład w familoku w Bytomiu albo Rudzie Śląskiej?",
      a: "Tak, i to bez kucia. Profil montujemy wyłącznie na ścianach, po obwodzie pomieszczenia, a membrana nie dotyka starego stropu — spękany, nierówny tynk zostaje ponad nią i przestaje być widoczny. Nie trzeba go szpachlować ani doprowadzać do gładkości; wystarczy, żeby luźne fragmenty nie odpadały. Z dołu widać jedną równą płaszczyznę, taką samą jak w nowym budynku.",
    },
    {
      q: "Co dzieje się z membraną, gdy budynek na terenie górniczym dalej pracuje?",
      a: "Membrana jest elastyczna i cały czas trzymana w napięciu, więc drobne ruchy ścian nie powodują w niej rys tak, jak w sztywnym tynku. Jeśli po większym przemieszczeniu profil wymaga ponownego zamocowania, zdejmujemy membranę, poprawiamy mocowanie i napinamy ją z powrotem. Trzeba jednak powiedzieć wprost: sufit napinany nie zastępuje oceny konstrukcji. Gdy budynek ma aktywne, znaczące deformacje, ściany musi najpierw ocenić rzeczoznawca budowlany, a montaż planujemy dopiero po jego opinii. Nie obiecujemy odporności na każde uszkodzenie.",
    },
    {
      q: "Czy w bloku z wielkiej płyty — w Tychach, Jastrzębiu-Zdroju albo na katowickim Tysiącleciu — sufit napinany nie obniży za bardzo pokoju?",
      a: "Nie, jeśli zaplanujemy go rozsądnie. Przy niskim stropie każdy centymetr się liczy, dlatego w takich mieszkaniach proponujemy montaż na samym profilu, bez rusztu, a oświetlenie w płaskich oprawach albo w liniach LED przy ścianie — obniżenie liczy się wtedy w milimetrach, nie centymetrach. Nierówne łączenia płyt stropowych i różnice poziomów między nimi znikają, bo membrana odwzorowuje tylko linię profilu, nie kształt stropu. Montaż w typowym pokoju kończymy tego samego dnia, a meble zostają na miejscu.",
    },
    {
      q: "Ile trwa dojazd z Częstochowy na Śląsk i czy przed zamówieniem można obejrzeć materiały?",
      a: "Do Bytomia i Katowic jedziemy autostradą A1 około 55 minut, do Gliwic, Zabrza i Rudy Śląskiej trasą A1 i A4 nieco ponad godzinę, do Dąbrowy Górniczej i Sosnowca drogą DK1 około 50–55 minut. Bielsko-Biała to około 85 minut przez A1 i S1, Rybnik i Jastrzębie-Zdrój 85–95 minut po A1. Jeśli wolisz zobaczyć folię przed decyzją, showroom przy fabryce jest otwarty od poniedziałku do piątku w godzinach 9:00–15:30 — wcześniej zadzwoń pod +48 730 700 333.",
    },
    {
      q: "Czy za sufit napinany w mieszkaniu na Śląsku zapłacę 8% VAT?",
      a: "Tak, jeśli mieszkanie ma do 150 m² powierzchni użytkowej, a dom do 300 m² — obniżoną stawkę stosujemy wtedy do całości, czyli do folii razem z montażem. Przy większym metrażu 8% obejmuje tylko część proporcjonalną do limitu, resztę liczymy z 23%. Nie ma znaczenia, czy to kamienica w Sosnowcu, blok w Zabrzu czy dom w Bielsku-Białej. Stawka 23% dotyczy lokali komercyjnych: biur, restauracji, sal weselnych. Na fakturze podajemy adres i metraż z pomiaru.",
    },
    {
      q: "Czy sufit akustyczny poradzi sobie z hałasem w sali weselnej na dwieście osób?",
      a: "Tak — to jedno z typowych zastosowań tego systemu. W dużej sali z twardą podłogą i szkłem dźwięk odbija się wielokrotnie i po kilku godzinach goście mówią coraz głośniej; system akustyczny przejmuje dużą część tych odbić. Wygląd pozostaje gładki, można na nim poprowadzić linie LED albo nanieść fotodruk. Montaż planujemy między imprezami — około 100 m² systemu akustycznego to 2–3 dni pracy, także w weekend — a po nas nie zostaje pył, bo go po prostu nie ma.",
    },
  ],
  updatedAt: "2026-09-20",
};
