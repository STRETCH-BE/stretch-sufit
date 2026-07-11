/**
 * Ogólne Warunki Sprzedaży (OWU) page — /regulamin
 * File path: /app/regulamin/page.tsx
 *
 * IMPORTANT: This document is the lawyer-drafted "Ogólne Warunki Sprzedaży
 * i Dostaw" for Alto Design Sp. z o.o. It governs B2B transactions.
 * Content is verbatim from the lawyer's draft — DO NOT paraphrase or
 * edit any clause without legal review.
 *
 * For consumer transactions (osoby fizyczne), Polish consumer law
 * (Ustawa o prawach konsumenta) applies automatically regardless of
 * what is written here.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCTA } from "@/components/sections/mobile-sticky-cta";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://altodesign.pl";

const LAST_UPDATED = "14 maja 2026";
const EFFECTIVE_DATE = "14 maja 2026";

export const metadata: Metadata = {
  title: "Ogólne Warunki Sprzedaży | Stretch Sufit",
  description:
    "Ogólne Warunki Sprzedaży i Dostaw Alto Design Sp. z o.o. (Stretch Sufit). Pełna treść OWU regulujących umowy handlowe B2B.",
  alternates: { canonical: "/regulamin" },
};

export default function RegulaminPage() {
  return (
    <>
      <Nav />

      <main>
        {/* ════════ Breadcrumb ════════ */}
        <nav
          aria-label="breadcrumb"
          className="border-b border-white/5 bg-bg pb-4 pt-28 md:pt-32"
        >
          <Container>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
              <li>
                <Link href="/" className="hover:text-white">
                  Start
                </Link>
              </li>
              <li aria-hidden="true">·</li>
              <li className="text-white" aria-current="page">
                Regulamin (OWU)
              </li>
            </ol>
          </Container>
        </nav>

        {/* ════════ Hero ════════ */}
        <section className="bg-bg pb-12 pt-12 md:pb-16 md:pt-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <Eyebrow>
                Obowiązuje od {EFFECTIVE_DATE} · Aktualizacja: {LAST_UPDATED}
              </Eyebrow>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
                Ogólne warunki{" "}
                <span className="it text-paper">sprzedaży i dostaw.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
                Pełna treść Ogólnych Warunków Sprzedaży (OWU) Alto Design Sp. z
                o.o., regulujących umowy handlowe zawierane z kontrahentami
                będącymi przedsiębiorcami.
              </p>
            </div>
          </Container>
        </section>

        {/* ════════ OWU body ════════ */}
        <section className="text-bg bg-paper pb-24 pt-20 md:pb-32 md:pt-24">
          <Container>
            <article className="mx-auto max-w-3xl">
              {/* Preamble */}
              <div className="rounded border border-bg/10 bg-paper-2 p-7 text-[15px] leading-[1.7] text-bg/85">
                <p>
                  <strong>Ogólne warunki sprzedaży i dostaw ALTO DESIGN
                  Spółka z ograniczoną odpowiedzialnością</strong> z siedzibą
                  w Częstochowie (42-200), pod adresem: ul. Legionów 59, 42-200
                  Częstochowa, wpisanej do rejestru przedsiębiorców Krajowego
                  Rejestru Sądowego prowadzonego przez Sąd Rejonowy w
                  Częstochowie, XVII Wydział Gospodarczy Krajowego Rejestru
                  Sądowego pod numerem KRS: 0000786996, REGON: 383390837,
                  NIP: 5732911703; o kapitale zakładowym: 5 000,00 zł.
                </p>
              </div>

              <div className="mt-14 space-y-14">
                {/* ───── §I ───── */}
                <Section number="I." title="Postanowienia ogólne">
                  <Para>
                    1. Niniejsze ogólne warunki umów sprzedaży (dalej: „OWU")
                    regulują stosunki cywilnoprawne pomiędzy stronami, w
                    zakresie obrotu handlowego wszelkimi towarami sprzedawanym
                    przez ALTO DESIGN Spółka z ograniczoną odpowiedzialnością z
                    siedzibą w Częstochowie i stanowią integralną część umów
                    handlowych podpisywanych indywidualnie z kontrahentami ALTO
                    DESIGN Spółka z ograniczoną odpowiedzialnością z siedzibą
                    w Częstochowie.
                  </Para>
                  <Para>
                    2. W zakresie określonym w ust. 1 wyłączeniu podlegają
                    wzorce i ogólne warunki umów stosowane przez Kupującego.
                  </Para>
                  <Para>3. Użyte w treści OWU terminy oznaczają:</Para>
                  <Definitions
                    items={[
                      {
                        term: "Sprzedawca",
                        def: "ALTO DESIGN Spółka z ograniczoną odpowiedzialnością z siedzibą w Częstochowie (42-200), pod adresem: ul. Legionów 59, 42-200 Częstochowa, wpisanej do rejestru przedsiębiorców Krajowego Rejestru Sądowego prowadzonego przez Sąd Rejonowy w Częstochowie, XVII Wydział Gospodarczy Krajowego Rejestru Sądowego pod numerem KRS: 0000786996, REGON: 383390837, NIP: 5732911703; o kapitale zakładowym: 5 000,00 zł",
                      },
                      {
                        term: "Towar",
                        def: "produkty znajdujące się w ofercie handlowej Sprzedawcy lub towar dostępny na indywidualne zamówienie,",
                      },
                      {
                        term: "Kupujący",
                        def: "będący przedsiębiorcą (w rozumieniu ustawy Kodeks Cywilny) nabywca towarów oferowanych przez Sprzedawcę,",
                      },
                      {
                        term: "Strony",
                        def: "Sprzedawca oraz Kupujący.",
                      },
                    ]}
                  />
                  <Para>
                    4. Kupujący wyraża zgodę na przesyłanie drogą pocztową lub
                    elektroniczną na adresy e-mail funkcjonujące w jego
                    przedsiębiorstwie, informacji handlowych dotyczących
                    aktualnej oferty cenowej, dostępnych promocjach oraz
                    nowościach oferowanych przez ALTO DESIGN Spółka z
                    ograniczoną odpowiedzialnością z siedzibą w Częstochowie.
                  </Para>
                  <Para>
                    5. Strony postanowiły, że każdy sprzedany towar pozostaje
                    własnością Sprzedawcy do czasu uregulowania całej ceny.
                  </Para>
                  <Para>
                    6. Nieważność lub bezskuteczność niektórych z postanowień
                    niniejszych OWU nie wpływa na ważność lub skuteczność
                    pozostałych postanowień.
                  </Para>
                </Section>

                {/* ───── §II ───── */}
                <Section number="II." title="Oferta cenowa">
                  <Para>
                    1. Oferty cenowe obowiązują przez 30 dni kalendarzowych od
                    daty podanej na złożonej cenowej.
                  </Para>
                  <Para>
                    2. Kupujący ma obowiązek, zarówno przy rozpoczęciu
                    współpracy, jak i w trakcie jej trwania, niezwłocznie
                    przekazać wszelkie informacje niezbędne do optymalnego
                    wykonania umowy oraz wymagane dane. Cena wskazana przez
                    Sprzedającego opiera się na informacjach dostarczonych
                    przez Kupującego i dlatego jest jedynie ceną szacunkową
                    opartą na dostępnych informacjach lub na podstawie
                    zakładanych ilości.
                  </Para>
                  <Para>
                    3. Wszelkie zamówienia przyjmowane są pod warunkiem
                    posiadania wystarczających zapasów i możliwości
                    produkcyjnych dostawców Sprzedającego.
                  </Para>
                  <Para>
                    4. Wszelkie prace i/lub dostarczone towary, które nie
                    zostały wyraźnie przewidziane w ofercie cenowej i/lub
                    umowie, będą traktowane jako prace dodatkowe i/lub
                    dodatkowe zamówienia wymagane przez Kupującego i jako takie
                    będą fakturowane Kupującemu. O ile Kupujący nie zgłosi
                    pisemnych zastrzeżeń w ciągu 72 godzin od wykonania i/lub
                    dostawy, prace i/lub produkty nie objęte umową, będą
                    traktowane jako prace dodatkowe i/lub zamówienia dodatkowe.
                  </Para>
                  <Para>
                    5. Ewentualne rabaty obowiązują tylko na jedno zamówienie.
                  </Para>
                  <Para>
                    6. Wszystkie ceny nie zawierają podatku VAT i wyrażone są
                    w PLN.
                  </Para>
                  <Para>
                    7. Wszystkie obecne i przyszłe podatki oraz inne koszty,
                    opłaty i/lub opłaty wszelkiego rodzaju (na przykład: VAT,
                    cło itp.) zostaną opłacone przez Kupującego.
                  </Para>
                  <Para>
                    8. Sprzedający nie jest związany oczywistymi omyłkami lub
                    błędami w ofercie.
                  </Para>
                  <Para>
                    9. Sprzedający może również zażądać zaliczki w wysokości do
                    40% całkowitej ceny każdego zamówienia. Kupujący nie może
                    żądać dostarczenia towaru ani wykonania pracy przez
                    Sprzedającego przed wpłatą tej zaliczki.
                  </Para>
                  <Para>
                    10. Uzgodniona cena obejmuje wyłącznie wartość towaru i
                    nie obejmuje transportu, instalacji, wsparcia technicznego
                    i innych kosztów, jeśli występują.
                  </Para>
                </Section>

                {/* ───── §III ───── */}
                <Section number="III." title="Zamawianie towaru">
                  <Para>
                    1. Składanie zamówień przez Kupującego odbywa się drogą
                    elektroniczną, poprzez przesłanie wiadomości na adres
                    e-mail siedziby Sprzedawcy, bądź osobiście w siedzibie
                    Sprzedawcy na podstawie pisemnego zamówienia.
                  </Para>
                  <Para>2. W treści zamówienia Kupujący wskazuje:</Para>
                  <SubList
                    items={[
                      "dane podmiotu (Kupującego) w imieniu którego występuje w tym: firmę, adres, oraz stosowny numer w rejestrze KRS/NIP/REGON, zależnie od formy prowadzenia działalności gospodarczej,",
                      "towary, które chciałby kupić, wraz ze wskazaniem ich ilości, wymiarów, bądź inną konieczną do ich identyfikacji specyfikacją techniczną",
                      "dokładny adres dostarczenia towaru, bądź informację o odbiorze własnym z siedziby Sprzedawcy.",
                    ]}
                  />
                  <Para>
                    3. Osoba odpowiedzialna w siedzibie Sprzedawcy potwierdza
                    złożenie zamówienia w tym samym trybie w jakim je
                    otrzymała, informuje o dostępności zamówionych towarów oraz
                    przedstawia Kupującemu łączną cenę zamówionych towarów oraz
                    koszt dostawy, a także termin dostawy lub przygotowania
                    towarów do odbioru zgodnie z wskazaniami Kupującego.
                  </Para>
                  <Para>
                    4. Jeżeli w ciągu 24 godzin od otrzymania potwierdzenia
                    zamówienia przez Sprzedawcę, Kupujący nie wniesie
                    zastrzeżeń, umowa uważana jest za zawartą i wiążącą obie
                    Strony.
                  </Para>
                  <Para>
                    5. Jeżeli w zamówieniu nie zostanie wskazany żaden adres,
                    przyjmuje się, że odbiór towarów nastąpi przez Kupującego
                    w siedzibie Sprzedawcy w dniu wskazanym przez Sprzedawcę.
                  </Para>
                  <Para>
                    6. Zawarcie umowy nie wiąże Sprzedawcy w sytuacji gdy, z
                    przyczyn niezależnych od Sprzedawcy, sprzedaż towarów jest
                    niemożliwa lub nadmiernie utrudniona.
                  </Para>
                </Section>

                {/* ───── §IV ───── */}
                <Section number="IV." title="Warunki dostawy i odbiór towaru">
                  <Para>
                    1. Sprzedawca jest zobowiązany do zorganizowania dostawy
                    towaru do miejsca spełnienia świadczenia wskazanego przez
                    Kupującego.
                  </Para>
                  <Para>2. Koszt dostawy ponosi w całości Kupujący.</Para>
                  <Para>
                    3. Formy oraz koszty dostawy zostały opisane w odrębnym
                    dokumencie.
                  </Para>
                  <Para>
                    4. Jeżeli strony nie uzgodnią wynagrodzenia za transport
                    towarów, wynosi ono 2,00 zł. netto + VAT za 1 km dzielący
                    siedzibę Sprzedającego, w której towar jest zamawiany od
                    adresu dostawy, w zaokrągleniu w górę do pełnego kilometra
                    i przyjmując najkrótszą możliwą trasę przejazdu.
                  </Para>
                  <Para>
                    5. Uznaje się, że wszystkie dostawy odbywają się z
                    magazynów Sprzedającego i ryzyko przemieszczenia towaru
                    następuje w chwili opuszczenia przez towar magazynów
                    Sprzedającego. Wysyłka towaru zawsze odbywa się na ryzyko
                    Kupującego.
                  </Para>
                  <Para>
                    6. Do dostawy nie zalicza się rozładunku towaru w miejscu
                    przeznaczenia, który organizuje samodzielnie i na własny
                    koszt Kupujący.
                  </Para>
                  <Para>
                    7. Koszty opóźnienia w przeprowadzeniu rozładunku obciążają
                    w całości Kupującego. Podane daty i godziny dostaw mają
                    charakter wyłącznie informacyjny, a ich przekroczenie w
                    żadnym wypadku nie może stanowić podstawy do odstąpienia od
                    umowy lub zapłaty odszkodowania.
                  </Para>
                  <Para>
                    8. Kupujący zobowiązany jest zapewnić odbiór towaru i
                    podpisanie dokumentu WZ oraz faktury VAT przez osobę do
                    tego umocowaną. Mając na uwadze treść ust. 1, ryzyko i
                    konsekwencje odbioru towaru i podpisania dokumentu WZ i/lub
                    faktury VAT przez osobę nieuprawnioną w całości obciążają
                    Kupującego, a strony ustalają, że każda osoba, która towar
                    przyjmie w miejscu wskazanym jako miejsce dostawy lub każda
                    osoba, która w imieniu Kupującego zgłosi się po towar do
                    siedziby Sprzedawcy jest uprawniona do odbioru towaru i
                    podpisania ww. dokumentów. Wydanie towaru takiej osobie
                    przez Sprzedawcę uważa się za prawidłowe wykonanie
                    świadczenia przez Sprzedawcę na rzecz Kupującego.
                  </Para>
                  <Para>
                    9. Kupujący ma obowiązek bezpłatnie zapewnić prąd i wodę na
                    terenie obiektu. Kupujący ma obowiązek zapewnić staranne
                    przechowywanie towarów, materiałów i sprzętu dostarczonego
                    na plac budowy oraz zapewnić im bezpieczeństwo i
                    ubezpieczenie.
                  </Para>
                  <Para>
                    10. Jeżeli w wyniku przeszkody niespowodowanej przez
                    Sprzedającego (np. katastrofy naturalnej, trudnych warunków
                    pogodowych, strajków, braku surowców, zamknięcia
                    przedsiębiorstwa producenta, zakłóceń w ruchu, wypadku
                    komunikacyjnego, przerw w dostawie energii), realizacja
                    zamówienia/umowy jest znacząco utrudniona bądź tymczasowo
                    uniemożliwiona, termin realizacji zamówienia nie rozpoczyna
                    się, a rozpoczęty termin ulega zawieszenia przez czas
                    trwania przeszkody.
                  </Para>
                  <Para>
                    11. O wystąpieniu przeszkody, o której mowa w pkt. 10,
                    Sprzedawca niezwłocznie powiadomi Kupującego pisemnie lub
                    e-mailem lub telefonicznie.
                  </Para>
                  <Para>
                    12. Odbiór ilościowo–jakościowy odbywa się w miejscu
                    spełnienia świadczenia, poprzez potwierdzenie przez
                    Kupującego deklarowanych w dokumencie WZ ilości towarów.
                  </Para>
                  <Para>
                    13. Wraz z wydaniem towaru Kupujący i opatruje pieczęcią
                    firmową Kupującego:
                  </Para>
                  <SubList
                    items={[
                      "dokument WZ i fakturę VAT jeżeli towar jest odbierany w siedzibie Sprzedawcy lub dostarczany przez Sprzedawcę,",
                      "dokument WZ i list przewozowy jeżeli towar jest dostarczany bezpośrednio przez producenta. W takiej sytuacji Faktura VAT zostanie wystawiona w terminie 7 dni od dnia otrzymania listu przewozowego i dokumentu WZ przez Sprzedawcę.",
                    ]}
                  />
                  <Para>
                    14. Sprzedawca uprawniony jest do wystawienia zbiorczej
                    faktury VAT obejmującej większą liczbę transakcji
                    dokonywanych w ciągu miesiąca.
                  </Para>
                  <Para>
                    15. W razie nieodebrania towaru przez Kupującego, Kupujący
                    pozostaje zobowiązany do zapłaty za towar wraz z kosztami
                    transportu zgodnie z umową i OWU tak jakby do
                    dostawy/odbioru doszło oraz dodatkowo jest zobowiązany do:
                  </Para>
                  <SubList
                    items={[
                      "odbioru na swój koszt towaru z siedziby Sprzedającego, a w razie dostawy bezpośrednio przez producenta z magazynu tego producenta w terminie 7 dni od dnia w którym towar miał być odebrany lub od dnia nieskutecznej dostawy,",
                      "zapłaty wynagrodzenia za przechowanie w wysokości stanowiącej równowartości 0,1% wartości zamówienia netto + VAT za każdy dzień przechowania począwszy od ósmego dnia.",
                    ]}
                  />
                  <Para>
                    16. Sprzedający nie ma obowiązku przechowania towaru dłużej
                    niż dwa miesiące od uzgodnionego terminu odbioru lub
                    dostawy.
                  </Para>
                  <Para>
                    17. Sprzedający nie ponosi ryzyka pogorszenia się stanu
                    technicznego towarów w czasie przechowania i po jego
                    zakończeniu.
                  </Para>
                  <Para>
                    18. Indywidualne postanowienia umowy mogą określać inne
                    warunki dostawy towaru. W takim wypadku należy stosować
                    postanowienia umowne.
                  </Para>
                </Section>

                {/* ───── §V ───── */}
                <Section
                  number="V."
                  title="Odpowiedzialność Sprzedawcy z tytułu rękojmi"
                >
                  <Para>
                    1. Sprzedawca nie ponosi odpowiedzialności z tytułu rękojmi
                    za wady fizyczne i prawne.
                  </Para>
                  <Para>
                    2. Sprzedawca nie zajmuje się montażem sprzedawanych
                    towarów i doradztwem technicznym w sprawie ich
                    wykorzystania, stąd nie ponosi odpowiedzialności za
                    prawidłowość wyboru towaru przez Kupującego, a także jego
                    sposób wykorzystania.
                  </Para>
                  <Para>
                    3. Sprzedający nie może w żadnym wypadku ponosić
                    odpowiedzialności za szkody lub szkody następcze po stronie
                    Kupującego, jeżeli są one następstwem lub są spowodowane
                    przez samego Kupującego, takie jak (między innymi):
                    nieprawidłowe lub niekompletne informacje, opóźnienie
                    wynikające z działania lub zaniedbania Kupującego,
                    niedopełnienie obowiązku ograniczenia szkody, samodzielne
                    wykonanie (lub za pośrednictwem innych osób) prac na
                    dostarczonym lub zamontowanym przedmiocie, wada
                    konstrukcyjna, wiek i/lub brak konserwacji towaru, na
                    którym lub w którym towar ma zostać zamontowany itp.
                  </Para>
                  <Para>
                    4. Kupujący zobowiązuje się do zawarcia ubezpieczenia od
                    szkód wyrządzonych osobom trzecim, które mogą powstać w
                    trakcie wykonywania umowy.
                  </Para>
                  <Para>
                    5. Z chwilą wydania towaru z magazynu, na Kupującego
                    przechodzą wszystkie korzyści i ciężary z rzeczą związane,
                    a także ryzyko przypadkowej utraty bądź uszkodzenia rzeczy.
                  </Para>
                  <Para>
                    6. Indywidualne postanowienia umowy mogą określać inny
                    zakres odpowiedzialności Sprzedawcy z tytułu rękojmi. W
                    takim wypadku należy stosować postanowienia umowne.
                  </Para>
                  <Para>
                    7. Odpowiedzialność Sprzedającego z jakichkolwiek tytułów
                    ograniczona jest do wartości netto sprzedanego Towaru.
                  </Para>
                </Section>

                {/* ───── §VI ───── */}
                <Section number="VI." title="Procedura reklamacyjna">
                  <Para>
                    1. W związku z wyłączeniem odpowiedzialności Sprzedawcy z
                    tytułu rękojmi za wady fizyczne i prawne towaru, Sprzedawca
                    może uwzględnić reklamację Kupującego dokonaną jedynie
                    zgodnie z procedurą i na zasadach opisanych w niniejszym
                    paragrafie.
                  </Para>
                  <Para>
                    2. Sprzedający może uwzględnić reklamację pod warunkiem,
                    że Reklamacja łącznie spełnia następujące wymagania:
                  </Para>
                  <SubList
                    items={[
                      "zostanie sporządzona na piśmie i podpisana przez Kupującego i dostarczona w formie pisemnej na adres siedziby firmy ALTO DESIGN Spółka z ograniczoną odpowiedzialnością z siedzibą w Częstochowie,",
                      "zostanie doręczona Sprzedawcy w terminie 7 dni od dnia odbioru lub od dnia dostawy towaru,",
                      "będzie dokładnie wskazywała reklamowany towar oraz jego ilość,",
                      "będzie obejmowała opis wady,",
                      "na wyraźne żądanie Sprzedającego, zgłoszone w dowolnej formie, w terminie 5 dni od dnia doręczenia reklamacji, reklamowany towar zostanie zwrócony przez Kupującego do siedziby w której został zakupiony w terminie kolejnych 7 dni od dnia otrzymania tego żądania. Jeżeli dostawa była realizowana bezpośrednio przez producenta towar zostanie w tym terminie zwrócony do producenta. Postanowienia dotyczące dostarczenia lub oględzin towaru nie dotyczą reklamacji wyłącznie ilościowej (wskazującej na niedobór w dostawie).",
                    ]}
                  />
                  <Para>
                    3. W przypadku potwierdzenia przez Sprzedającego informacji
                    zawartych w reklamacji, Sprzedawca może uwzględnić
                    reklamację dokonując uzupełnienia lub wymiany towaru, a gdy
                    to będzie niemożliwe obniżając cenę za towar brakujący lub
                    wadliwy.
                  </Para>
                  <Para>
                    4. O sposobie rozpatrzenia reklamacji Sprzedawca powiadomi
                    Kupującego w terminie nie dłuższym niż 14 dni od odbioru
                    towaru, bądź od dnia przeprowadzenia jego oględzin, a w
                    przypadku reklamacji wyłącznie ilościowej, w terminie 14
                    dni od dnia doręczenia dokumentu reklamacyjnego.
                  </Para>
                  <Para>
                    5. Sprzedający zastrzega sobie prawo do odmowy rozpatrzenia
                    reklamacji, jeśli Kupujący wykorzysta (np. zabuduje) towary
                    objęte roszczeniem reklamacyjnym przed upływem terminu jego
                    rozpatrzenia.
                  </Para>
                  <Para>
                    6. Zgłoszenie reklamacji przedmiotu dostawy lub usługi nie
                    uprawnia Kupującego do wstrzymania zapłaty za towar lub
                    usługę bądź za ich część.
                  </Para>
                </Section>

                {/* ───── §VII ───── */}
                <Section
                  number="VII."
                  title="Zapłata i skutki opóźnienia w płatności"
                >
                  <Para>
                    1. Kupujący zapłaci Sprzedawcy należności z tytułu
                    wykonania danego zamówienia w terminie wskazanym na
                    fakturze VAT, a jeżeli termin ten nie wynika z faktury VAT
                    zapłata należy się w dniu wydania towaru lub dniu w którym
                    towar miał być wydany lecz nie został odebrany przez
                    Kupującego.
                  </Para>
                  <Para>
                    2. W przypadku opóźnienia w zapłacie jakiejkolwiek
                    wymagalnej wierzytelności względem Sprzedawcy, jest on
                    uprawniony do:
                  </Para>
                  <SubList
                    items={[
                      "odmowy realizacji zamówień na rzecz Kupującego do czasu uregulowania zaległości,",
                      "odmowy sprzedaży w warunkach kredytu kupieckiego kolejnych towarów zamawianych przez Kupującego, niezależnie od kwoty wykorzystanego limitu,",
                      "anulowania udzielonego Kupującemu odroczenia płatności w ramach kredytu kupieckiego i postawienia w stan natychmiastowej wymagalności wszystkich wierzytelności przysługujących mu od Kupującego pierwszym dniem opóźnienia w płatności.",
                    ]}
                  />
                  <Para>
                    3. Z uprawnień opisanych w pkt 2 Sprzedawca może skorzystać
                    łącznie lub oddzielnie, wedle własnego uznania.
                  </Para>
                  <Para>
                    4. W razie opóźnienia z zapłatą ceny, Sprzedającemu należą
                    się odsetki za czas opóźnienia, chociażby Sprzedający nie
                    poniósł żadnej szkody i chociażby opóźnienie było
                    następstwem okoliczności, za które Kupujący
                    odpowiedzialności nie ponosi. Sprzedającemu należą się
                    maksymalne odsetki ustawowe za opóźnienie, o ile inna
                    wysokość odsetek nie zostanie określona w umowie. Obowiązek
                    zapłaty odsetek nie wyłącza roszczenia o naprawienie szkody
                    na zasadach ogólnych.
                  </Para>
                </Section>

                {/* ───── §VIII ───── */}
                <Section number="VIII." title="Zabezpieczenia">
                  <Para>
                    1. Sprzedawca zastrzega sobie uprawnienie do żądania od
                    Kupującego — przed przystąpieniem do realizacji zamówienia
                    — ustanowienia stosownego zabezpieczenia zapłaty w postaci
                    między innymi:
                  </Para>
                  <SubList
                    items={[
                      "bezwarunkowej i płatnej na pierwsze żądanie gwarancji bankowej lub gwarancji ubezpieczeniowej na takich samych zasadach,",
                      'weksla in blanco opatrzonego klauzulą „bez protestu",',
                      "hipoteki do wysokości 150% prognozowanego obrotu rocznego netto między stronami,",
                      "dobrowolnego poddania się egzekucji na podstawie art. 777 kodeksu postępowania cywilnego,",
                      "poręczenia,",
                      "przewłaszczenia na zabezpieczenie,",
                      "cesji wierzytelności,",
                      "zastawu rejestrowego.",
                    ]}
                  />
                  <Para>
                    2. Wybór zabezpieczeń, ich ilości i kwoty zabezpieczenia
                    zależy od decyzji Sprzedawcy ustalonej po konsultacjach z
                    Kupującym oraz od jego możliwości finansowych i wartości
                    składników jego majątku.
                  </Para>
                  <Para>
                    3. W przypadku nieustanowienia zabezpieczenia w terminie
                    wskazanym przez Sprzedawcę, bądź oświadczenia o odmowie
                    ustanowienia zabezpieczenia, Sprzedawca może odmówić
                    realizacji zamówienia, a także wstrzymać się z
                    przyjmowaniem kolejnych zamówień do czasu ustanowienia
                    żądanego zabezpieczenia zapłaty.
                  </Para>
                </Section>

                {/* ───── §IX ───── */}
                <Section number="IX." title="Rozwiązanie i wypowiedzenie umowy">
                  <Para>
                    1. Każda ze stron może wypowiedzieć umowę z zachowaniem
                    jednomiesięcznego terminu wypowiedzenia ze skutkiem na
                    koniec miesiąca kalendarzowego następującego po miesiącu
                    w którym umowę wypowiedziano.
                  </Para>
                  <Para>
                    2. Sprzedawca może wypowiedzieć umowę bez zachowania
                    terminu wypowiedzenia w przypadku gdy:
                  </Para>
                  <SubList
                    items={[
                      "Kupujący opóźnia się w płatności jakiejkolwiek wymagalnej wierzytelności powyżej 30 dni,",
                      "jakikolwiek organ państwowy stwierdzi niewypłacalność Kupującego (np. poprzez postanowienie o bezskutecznej egzekucji komorniczej),",
                      "innego rażącego naruszenia przez Kupującego postanowień umowy lub OWU.",
                    ]}
                  />
                  <Para>
                    3. Kupujący może wypowiedzieć umowę bez zachowania terminu
                    wypowiedzenia w przypadku zmiany przez Sprzedającego
                    postanowień OWU i braku akceptacji zmian przez Kupującego
                    w terminie 30 dni.
                  </Para>
                  <Para>
                    4. W każdej chwili strony mogą rozwiązać umowę za
                    porozumieniem stron.
                  </Para>
                  <Para>
                    5. Jeżeli na skutek działania siły wyższej i/lub przyczyny
                    zewnętrznej — niemożliwej do przewidzenia w dniu zawarcia
                    umowy — realizacja zobowiązań przez Sprzedającego stanie
                    się niemożliwa lub zostanie znacząco utrudniona,
                    Sprzedający nie może być zobowiązany do wykonania
                    zobowiązania ani ponosić odpowiedzialności. Przez siłę
                    wyższą i/lub przyczynę zewnętrzną rozumie się na przykład
                    (bez ograniczeń): strajk, lockout, bunt, terroryzm,
                    epidemia/pandemia, choroba, pożar, powódź, zastosowane
                    środki rządowe, strajk u dostawcy, upadłość dostawcy, brak
                    rąk do pracy, brak paliwa, zniszczenie maszyn, warunki
                    atmosferyczne itp.
                  </Para>
                </Section>

                {/* ───── §X ───── */}
                <Section number="X." title="Tajemnica przedsiębiorstwa">
                  <Para>
                    Wszelkie informacje uzyskane w związku z zawarciem i
                    wykonywaniem niniejszej umowy stanowią tajemnicę handlową
                    stron, a nieprzestrzeganie obowiązku zachowania tajemnicy
                    handlowej uprawnia każdą ze stron do odstąpienia od umowy
                    i dochodzenia odszkodowania za powstałą szkodę.
                  </Para>
                </Section>

                {/* ───── §XI ───── */}
                <Section number="XI." title="Zmiana OWU">
                  <Para>
                    1. Jakiekolwiek zmiany umowy handlowej wymagają formy
                    pisemnej pod rygorem nieważności.
                  </Para>
                  <Para>
                    2. Zmiana niniejszych OWU następuje poprzez opublikowanie
                    nowej wersji OWU na stronie internetowej Sprzedawcy.
                  </Para>
                  <Para>
                    3. Kupujący zobowiązany jest przed złożeniem każdego
                    kolejnego zamówienia do każdorazowego zapoznania się z
                    nowymi OWU.
                  </Para>
                  <Para>
                    4. W razie zmiany OWU dla każdej poszczególnej transakcji
                    zastosowanie będą miały postanowienia OWU obowiązujące w
                    dniu złożenia zamówienia przez Kupującego.
                  </Para>
                </Section>

                {/* ───── §XII ───── */}
                <Section number="XII." title="Jurysdykcja i prawo właściwe">
                  <Para>
                    1. Wszelkie spory powstałe pomiędzy stronami będą
                    rozstrzygane zgodnie z przepisami prawa polskiego, z
                    wyłączeniem Konwencji Wiedeńskiej o Umowach Międzynarodowej
                    Sprzedaży Towarów podpisanej w Wiedniu 11 kwietnia 1980
                    roku.
                  </Para>
                  <Para>
                    2. Wszelkie spory wynikłe w związku ze wszelkimi relacjami
                    handlowymi między stronami zostają poddane jurysdykcji
                    sądów polskich.
                  </Para>
                </Section>

                {/* ───── Footer contact info ───── */}
                <div className="rounded border border-bg/10 bg-paper-2 p-7">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                    Kontakt
                  </div>
                  <div className="mt-4 space-y-1 text-[15px] text-bg/80">
                    <div className="font-display font-semibold text-bg">
                      ALTO DESIGN Sp. z o.o.
                    </div>
                    <div>ul. Legionów 59, 42-200 Częstochowa</div>
                    <div>KRS: 0000786996 · NIP: 5732911703 · REGON: 383390837</div>
                    <div className="pt-2">
                      Email:{" "}
                      <a
                        href="mailto:info@stretch-sufit.pl"
                        className="text-red underline"
                      >
                        info@stretch-sufit.pl
                      </a>
                    </div>
                    <div>
                      Telefon:{" "}
                      <a
                        href="tel:+48730700333"
                        className="text-red underline"
                      >
                        +48 730 700 333
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Container>
        </section>

        {/* ════════ Related documents ════════ */}
        <section className="bg-bg py-16 md:py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-base text-white/65">Dokumenty powiązane:</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/polityka-prywatnosci"
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/85 transition-colors hover:border-white/40 hover:text-white"
                >
                  Polityka prywatności
                </Link>
                <Link
                  href="/polityka-cookies"
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/85 transition-colors hover:border-white/40 hover:text-white"
                >
                  Polityka cookies
                </Link>
                <Link
                  href="/gwarancja"
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white/85 transition-colors hover:border-white/40 hover:text-white"
                >
                  Gwarancja
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <MobileStickyCTA />
    </>
  );
}

/* ─────────────────────────────────────────────────────────── */

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-bg md:text-3xl">
        <span className="mr-3 font-mono text-base text-red md:text-lg">
          {number}
        </span>
        {title}
      </h2>
      <div className="mt-6 space-y-4 text-[15px] leading-[1.7] text-bg/80">
        {children}
      </div>
    </section>
  );
}

function Para({ children }: { children: React.ReactNode }) {
  return <p>{children}</p>;
}

function SubList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="font-mono text-xs text-red/70 pt-1">
            {String.fromCharCode(97 + i)}.
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function Definitions({
  items,
}: {
  items: { term: string; def: string }[];
}) {
  return (
    <dl className="mt-4 space-y-5">
      {items.map((item) => (
        <div key={item.term}>
          <dt className="font-display text-base font-semibold text-bg">
            {item.term}
          </dt>
          <dd className="mt-1 text-bg/75">— {item.def}</dd>
        </div>
      ))}
    </dl>
  );
}
