/**
 * Regulamin (Terms and Conditions) page — /regulamin
 * File path: /app/regulamin/page.tsx
 *
 * Comprehensive Polish-law-compliant Terms and Conditions document.
 * Structured per Ustawa o prawach konsumenta (Consumer Rights Act),
 * Kodeks cywilny (Civil Code), Ustawa o świadczeniu usług drogą
 * elektroniczną (Electronic Services Act).
 *
 * REVIEW NOTE: This is a comprehensive draft. Specific business facts
 * are marked [TODO: VERIFY] inline — replace before publishing. Polish
 * legal counsel review recommended before going live.
 *
 * Key sections covered:
 *  §1  Definicje
 *  §2  Postanowienia ogólne
 *  §3  Zawarcie umowy
 *  §4  Pomiar i wycena
 *  §5  Cena i płatność
 *  §6  Termin realizacji
 *  §7  Montaż
 *  §8  Odbiór
 *  §9  Odstąpienie od umowy
 *  §10 Reklamacje / rękojmia
 *  §11 Gwarancja
 *  §12 Ochrona danych osobowych
 *  §13 Rozstrzyganie sporów
 *  §14 Postanowienia końcowe
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCTA } from "@/components/sections/mobile-sticky-cta";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://stretch-sufit.vercel.app";

const LAST_UPDATED = "14 maja 2026";
const EFFECTIVE_DATE = "14 maja 2026";

export const metadata: Metadata = {
  title: "Regulamin | Stretch Sufit",
  description:
    "Regulamin świadczenia usług przez Stretch Sufit (Alto Design Sp. z o.o.). Warunki umowy, płatność, gwarancja, prawo odstąpienia, reklamacje.",
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
                Regulamin
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
                Regulamin{" "}
                <span className="it text-paper">świadczenia usług.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
                Warunki, na jakich Alto Design Sp. z o.o. (działająca pod marką
                Stretch Sufit) świadczy usługi pomiaru, produkcji i montażu
                sufitów napinanych STRETCH® na terytorium Polski.
              </p>
            </div>
          </Container>
        </section>

        {/* ════════ Regulamin body ════════ */}
        <section className="bg-paper pb-24 pt-20 md:pb-32 md:pt-24">
          <Container>
            <article className="mx-auto max-w-3xl space-y-14">
              {/* ───── §1 ───── */}
              <Section number="§1" title="Definicje">
                <p>
                  Użyte w Regulaminie określenia oznaczają:
                </p>
                <Definitions
                  items={[
                    {
                      term: "Wykonawca / Sprzedawca",
                      def: 'Alto Design Sp. z o.o. z siedzibą w Częstochowie, ul. Legionów 59, 42-200 Częstochowa, wpisana do Krajowego Rejestru Sądowego pod numerem KRS [TODO: VERIFY], NIP [TODO: VERIFY], REGON [TODO: VERIFY], działająca pod marką handlową „Stretch Sufit".',
                    },
                    {
                      term: "Klient",
                      def: "osoba fizyczna posiadająca pełną zdolność do czynności prawnych, osoba prawna lub jednostka organizacyjna nieposiadająca osobowości prawnej, której odrębne przepisy przyznają zdolność prawną, zawierająca umowę z Wykonawcą.",
                    },
                    {
                      term: "Konsument",
                      def: "Klient będący osobą fizyczną dokonującą z Wykonawcą czynności prawnej niezwiązanej bezpośrednio z jej działalnością gospodarczą lub zawodową (zgodnie z art. 22¹ Kodeksu cywilnego).",
                    },
                    {
                      term: "Przedsiębiorca na prawach konsumenta",
                      def: "osoba fizyczna prowadząca działalność gospodarczą, dla której umowa nie ma charakteru zawodowego (zgodnie z art. 38a Ustawy o prawach konsumenta) — przysługują jej wybrane prawa konsumenta.",
                    },
                    {
                      term: "Umowa",
                      def: "umowa o dzieło zawarta pomiędzy Wykonawcą a Klientem, obejmująca dostawę i montaż sufitu napinanego oraz powiązanych elementów (oświetlenie, profile, akcesoria).",
                    },
                    {
                      term: "Produkt",
                      def: "sufit napinany w jednym z dostępnych wariantów (PVC, poliester, akustyczny, świetlny, fotodruk, prefab) wraz z elementami montażowymi i — opcjonalnie — oświetleniem.",
                    },
                    {
                      term: "Pomiar",
                      def: "bezpłatne, niezobowiązujące oględziny pomieszczenia w celu sporządzenia oferty, wykonywane przez pomiarowca Wykonawcy w miejscu wskazanym przez Klienta.",
                    },
                    {
                      term: "Oferta",
                      def: "pisemna lub elektroniczna propozycja cenowa sporządzona przez Wykonawcę po pomiarze, ważna 30 dni od daty wystawienia.",
                    },
                    {
                      term: "Zamówienie",
                      def: "oświadczenie woli Klienta o akceptacji Oferty, składane w formie pisemnej, elektronicznej (email) lub przez podpisanie umowy.",
                    },
                  ]}
                />
              </Section>

              {/* ───── §2 ───── */}
              <Section number="§2" title="Postanowienia ogólne">
                <Para>
                  1. Niniejszy Regulamin określa zasady świadczenia usług przez
                  Wykonawcę polegających na sprzedaży i montażu sufitów
                  napinanych marki STRETCH® na terytorium Rzeczypospolitej
                  Polskiej.
                </Para>
                <Para>
                  2. Wykonawca jest oficjalnym dealerem belgijskiego producenta
                  STRETCH® (Stretch Productions BV, Belgia) i ma prawo do
                  oferowania pełnego asortymentu produktów STRETCH® wraz z
                  oryginalną gwarancją producenta.
                </Para>
                <Para>
                  3. Regulamin stanowi integralną część każdej umowy zawartej
                  pomiędzy Wykonawcą a Klientem. Złożenie Zamówienia jest
                  równoznaczne z akceptacją Regulaminu.
                </Para>
                <Para>
                  4. W sprawach nieuregulowanych Regulaminem zastosowanie mają
                  przepisy prawa polskiego, w szczególności Kodeksu cywilnego,
                  Ustawy o prawach konsumenta oraz Ustawy o świadczeniu usług
                  drogą elektroniczną.
                </Para>
                <Para>
                  5. Wykonawca zastrzega sobie prawo do zmiany Regulaminu.
                  Zmiany nie mogą naruszać praw Klientów, którzy złożyli
                  Zamówienie przed wprowadzeniem zmian. Aktualna wersja
                  Regulaminu dostępna jest pod adresem stretchsufit.pl/regulamin
                  oraz przesyłana Klientowi przed zawarciem umowy.
                </Para>
              </Section>

              {/* ───── §3 ───── */}
              <Section number="§3" title="Zawarcie umowy">
                <Para>
                  1. Umowa zawierana jest po następujących etapach:
                </Para>
                <List
                  items={[
                    "Zgłoszenie zainteresowania przez Klienta (telefon, email, formularz na stronie).",
                    "Bezpłatny pomiar pomieszczenia przez pomiarowca Wykonawcy w miejscu wskazanym przez Klienta.",
                    "Przygotowanie i przesłanie Klientowi Oferty cenowej w ciągu 3 dni roboczych od pomiaru.",
                    "Akceptacja Oferty przez Klienta (forma pisemna, elektroniczna lub podpisanie umowy).",
                    "Wpłata zaliczki w wysokości 30% wartości Zamówienia.",
                    "Z chwilą zaksięgowania zaliczki — umowa jest zawarta.",
                  ]}
                />
                <Para>
                  2. Oferta ważna jest przez 30 dni od daty wystawienia. Po
                  upływie tego terminu Wykonawca może odmówić zawarcia umowy
                  na pierwotnych warunkach.
                </Para>
                <Para>
                  3. W przypadku Konsumentów oraz Przedsiębiorców na prawach
                  konsumenta umowa zawierana poza lokalem przedsiębiorstwa
                  (np. w domu Klienta) podlega przepisom Ustawy o prawach
                  konsumenta dotyczącym takich umów — w tym prawu odstąpienia
                  od umowy (zob. §9).
                </Para>
              </Section>

              {/* ───── §4 ───── */}
              <Section number="§4" title="Pomiar i wycena">
                <Para>
                  1. Pomiar jest bezpłatny i nie zobowiązuje Klienta do
                  złożenia Zamówienia.
                </Para>
                <Para>
                  2. Termin pomiaru ustalany jest indywidualnie. Standardowy
                  czas oczekiwania na pomiar wynosi 3–10 dni roboczych, w
                  zależności od lokalizacji i obciążenia ekipy pomiarowej.
                </Para>
                <Para>
                  3. Klient zobowiązany jest do udostępnienia pomieszczenia w
                  umówionym terminie. W przypadku nieobecności Klienta lub
                  niemożności wejścia do pomieszczenia, Wykonawca zastrzega
                  sobie prawo do obciążenia Klienta kosztem dojazdu w wysokości
                  150 zł.
                </Para>
                <Para>
                  4. Po pomiarze Wykonawca przygotowuje Ofertę zawierającą:
                </Para>
                <List
                  items={[
                    "Szczegółowy opis Produktu (rodzaj membrany, kolor, wykończenie, wymiary)",
                    "Specyfikację oświetlenia (jeśli dotyczy)",
                    "Całkowitą cenę brutto",
                    "Przewidywany termin realizacji",
                    "Warunki płatności",
                    "Okres ważności Oferty (30 dni)",
                  ]}
                />
                <Para>
                  5. Ceny podane w Ofercie są ostateczne. Nie zawierają ukrytych
                  kosztów. Jakiekolwiek dodatkowe prace wykraczające poza
                  zakres Oferty wymagają osobnego ustalenia z Klientem.
                </Para>
              </Section>

              {/* ───── §5 ───── */}
              <Section number="§5" title="Cena i płatność">
                <Para>
                  1. Ceny podawane w Ofercie są cenami brutto (zawierają
                  podatek VAT zgodnie z obowiązującą stawką).
                </Para>
                <Para>
                  2. Standardowy harmonogram płatności:
                </Para>
                <List
                  items={[
                    "30% wartości Zamówienia — zaliczka, wpłacana po akceptacji Oferty. Umowa zawarta jest z chwilą zaksięgowania zaliczki.",
                    "70% wartości Zamówienia — wpłacane po zakończeniu montażu i podpisaniu protokołu odbioru.",
                  ]}
                />
                <Para>
                  3. Dla Zamówień o wartości przekraczającej 50 000 zł brutto
                  możliwe jest indywidualne ustalenie harmonogramu płatności
                  (np. 3 transze).
                </Para>
                <Para>
                  4. Płatność dokonywana jest:
                </Para>
                <List
                  items={[
                    "Przelewem na rachunek bankowy Wykonawcy: [TODO: VERIFY numer konta bankowego]",
                    "Gotówką w siedzibie Wykonawcy lub u Klienta (do 15 000 zł zgodnie z Ustawą o limicie płatności gotówkowych)",
                    "Kartą płatniczą (terminal w showroomie w Częstochowie)",
                  ]}
                />
                <Para>
                  5. W przypadku zwłoki w płatności końcowej (powyżej 14 dni od
                  podpisania protokołu odbioru) Wykonawca ma prawo do naliczenia
                  odsetek ustawowych za opóźnienie.
                </Para>
                <Para>
                  6. Faktura VAT wystawiana jest na żądanie Klienta — należy
                  zgłosić takie żądanie przed dokonaniem płatności, podając NIP
                  i pełne dane firmy.
                </Para>
              </Section>

              {/* ───── §6 ───── */}
              <Section number="§6" title="Termin realizacji">
                <Para>
                  1. Termin realizacji Zamówienia liczony jest od dnia
                  zaksięgowania zaliczki i wynosi:
                </Para>
                <List
                  items={[
                    "Standardowo: 2–4 tygodnie od zawarcia umowy",
                    "W szczycie sezonu (kwiecień–czerwiec, wrzesień–listopad): 4–6 tygodni",
                    "Dla Zamówień nietypowych (specjalne kolory, fotodruk z autorską grafiką, projekty seryjne >200 m²): termin indywidualny, podawany w Ofercie",
                  ]}
                />
                <Para>
                  2. Konkretny termin montażu ustalany jest z Klientem
                  telefonicznie lub mailowo, najpóźniej 7 dni przed planowanym
                  montażem.
                </Para>
                <Para>
                  3. W przypadku opóźnienia z winy Wykonawcy przekraczającego
                  14 dni od ustalonego terminu, Klient ma prawo:
                </Para>
                <List
                  items={[
                    "Wyznaczyć dodatkowy termin realizacji (nie krótszy niż 7 dni)",
                    "W przypadku dalszego opóźnienia — odstąpić od umowy z prawem do zwrotu wpłaconej zaliczki",
                  ]}
                />
                <Para>
                  4. Opóźnienia spowodowane okolicznościami niezależnymi od
                  Wykonawcy (siła wyższa, opóźnienia w produkcji u producenta
                  STRETCH® w Belgii, problemy logistyczne, nieobecność Klienta)
                  nie stanowią podstawy do roszczeń.
                </Para>
              </Section>

              {/* ───── §7 ───── */}
              <Section number="§7" title="Montaż">
                <Para>
                  1. Klient zobowiązany jest do przygotowania pomieszczenia
                  przed montażem:
                </Para>
                <List
                  items={[
                    "Wyniesienie lub odsunięcie mebli na odległość minimum 1 m od ścian",
                    "Zdjęcie obrazów i innych elementów wiszących na ścianach (jeśli mogą przeszkadzać w pracy)",
                    "Zapewnienie dostępu do pomieszczenia w umówionym terminie",
                    "W przypadku montażu PVC — zalecane wyprowadzenie zwierząt domowych i roślin (montaż wymaga rozgrzania pomieszczenia do ok. 50°C)",
                  ]}
                />
                <Para>
                  2. Montaż wykonywany jest przez autoryzowane ekipy Wykonawcy,
                  posiadające szkolenia producenta STRETCH®.
                </Para>
                <Para>
                  3. Standardowy czas montażu wynosi 3–6 godzin na pomieszczenie
                  do 50 m². Większe powierzchnie — odpowiednio dłużej. Ekipa
                  pracuje w godzinach 8:00–18:00, chyba że ustalono inaczej.
                </Para>
                <Para>
                  4. Wykonawca zabezpiecza podłogę folią ochronną. Nie ponosi
                  jednak odpowiedzialności za uszkodzenia mienia Klienta
                  niezgłoszone w protokole odbioru.
                </Para>
                <Para>
                  5. W przypadku ujawnienia podczas montażu okoliczności
                  uniemożliwiających realizację (np. wykryte uszkodzenia
                  konstrukcji budynku, brak zasilania), Wykonawca niezwłocznie
                  informuje Klienta. Klient i Wykonawca wspólnie ustalają
                  dalsze postępowanie.
                </Para>
              </Section>

              {/* ───── §8 ───── */}
              <Section number="§8" title="Odbiór">
                <Para>
                  1. Po zakończeniu montażu sporządzany jest protokół odbioru,
                  podpisywany przez Klienta i przedstawiciela Wykonawcy.
                </Para>
                <Para>
                  2. W protokole Klient ma prawo zgłosić uwagi i zastrzeżenia
                  dotyczące jakości wykonania. Wykonawca zobowiązany jest
                  ustosunkować się do uwag w ciągu 7 dni roboczych.
                </Para>
                <Para>
                  3. Podpisanie protokołu bez zastrzeżeń stanowi potwierdzenie
                  należytego wykonania umowy i obowiązuje Klienta do uregulowania
                  pozostałej części wynagrodzenia w terminie 7 dni.
                </Para>
                <Para>
                  4. Wady ujawnione po podpisaniu protokołu mogą być zgłaszane
                  w ramach rękojmi lub gwarancji (zob. §10 i §11).
                </Para>
              </Section>

              {/* ───── §9 ───── */}
              <Section number="§9" title="Prawo odstąpienia od umowy">
                <Para>
                  1. Konsument oraz Przedsiębiorca na prawach konsumenta, który
                  zawarł umowę poza lokalem przedsiębiorstwa lub na odległość,
                  ma prawo odstąpić od umowy w terminie 14 dni bez podania
                  przyczyny, zgodnie z Ustawą o prawach konsumenta.
                </Para>
                <Para>
                  2. Termin 14 dni liczony jest od dnia zawarcia umowy (tj. od
                  dnia zaksięgowania zaliczki).
                </Para>
                <Para>
                  3. Aby skorzystać z prawa odstąpienia, Klient musi poinformować
                  Wykonawcę o swojej decyzji w drodze jednoznacznego oświadczenia,
                  wysłanego na adres: info@stretch-sufit.pl lub pocztą tradycyjną
                  na adres siedziby Wykonawcy.
                </Para>
                <Para>
                  4. <strong>WAŻNE — wyjątek od prawa odstąpienia:</strong>{" "}
                  zgodnie z art. 38 pkt 3 Ustawy o prawach konsumenta, prawo
                  odstąpienia nie przysługuje w przypadku umów, w których
                  przedmiotem świadczenia jest rzecz nieprefabrykowana,
                  wyprodukowana według specyfikacji konsumenta lub służąca
                  zaspokojeniu jego zindywidualizowanych potrzeb.
                </Para>
                <Para>
                  5. Sufity napinane są produktami wykonywanymi na wymiar,
                  pod konkretne pomieszczenie Klienta. <strong>Z tego powodu
                  prawo odstąpienia wygasa z chwilą rozpoczęcia produkcji
                  membrany</strong> (tj. po przekazaniu produkcji do realizacji,
                  zwykle 2–4 dni od wpłaty zaliczki). Wykonawca informuje
                  Klienta pisemnie o dacie rozpoczęcia produkcji.
                </Para>
                <Para>
                  6. W przypadku skutecznego odstąpienia (przed rozpoczęciem
                  produkcji), Wykonawca zwraca Klientowi pełną kwotę zaliczki
                  w terminie 14 dni od otrzymania oświadczenia o odstąpieniu,
                  na rachunek bankowy wskazany przez Klienta.
                </Para>
              </Section>

              {/* ───── §10 ───── */}
              <Section number="§10" title="Reklamacje (rękojmia)">
                <Para>
                  1. Wykonawca odpowiada wobec Konsumenta z tytułu rękojmi za
                  wady fizyczne i prawne Produktu na zasadach określonych w
                  Kodeksie cywilnym (art. 556–576).
                </Para>
                <Para>
                  2. Okres rękojmi wynosi 2 lata od dnia wydania Produktu
                  (zakończenia montażu).
                </Para>
                <Para>
                  3. W ramach rękojmi Konsument może żądać:
                </Para>
                <List
                  items={[
                    "Wymiany Produktu na wolny od wad",
                    "Usunięcia wady (naprawy)",
                    "Obniżenia ceny (w odpowiedniej proporcji)",
                    "Odstąpienia od umowy — tylko jeśli wada jest istotna",
                  ]}
                />
                <Para>
                  4. Reklamację należy zgłosić na adres: info@stretch-sufit.pl
                  lub pisemnie na adres siedziby Wykonawcy. Reklamacja powinna
                  zawierać:
                </Para>
                <List
                  items={[
                    "Dane Klienta i numer Zamówienia (lub faktury)",
                    "Opis wady wraz z okolicznościami jej powstania",
                    "Zdjęcia wady (zalecane, min. 3 zdjęcia z różnych odległości)",
                    "Żądanie Klienta (wymiana, naprawa, obniżenie ceny, odstąpienie)",
                  ]}
                />
                <Para>
                  5. Wykonawca rozpatruje reklamację w terminie 14 dni od dnia
                  otrzymania zgłoszenia. Brak odpowiedzi w tym terminie oznacza
                  uznanie reklamacji za zasadną w zakresie żądania Klienta
                  (zgodnie z art. 561⁵ KC).
                </Para>
                <Para>
                  6. Koszty reklamacji uznanej za zasadną — w tym koszty
                  dostawy lub demontażu i ponownego montażu — pokrywa
                  Wykonawca.
                </Para>
              </Section>

              {/* ───── §11 ───── */}
              <Section number="§11" title="Gwarancja jakości">
                <Para>
                  1. Niezależnie od ustawowej rękojmi, Wykonawca udziela
                  Klientowi <strong>15-letniej gwarancji materiałowej</strong>{" "}
                  na membrany STRETCH® oraz <strong>5-letniej gwarancji</strong>{" "}
                  na elementy elektroniczne (LED, sterowniki).
                </Para>
                <Para>
                  2. Pełne warunki gwarancji opisane są na osobnej stronie:{" "}
                  <Link href="/gwarancja" className="text-red underline">
                    Gwarancja
                  </Link>
                  .
                </Para>
                <Para>
                  3. Skorzystanie z gwarancji nie wyłącza ani nie ogranicza
                  praw Klienta z tytułu rękojmi. Klient może wybrać korzystną
                  dla siebie ścieżkę reklamacyjną lub skorzystać z obu
                  jednocześnie.
                </Para>
              </Section>

              {/* ───── §12 ───── */}
              <Section number="§12" title="Ochrona danych osobowych">
                <Para>
                  1. Administratorem danych osobowych Klientów jest Alto Design
                  Sp. z o.o. z siedzibą w Częstochowie.
                </Para>
                <Para>
                  2. Dane osobowe przetwarzane są w celach:
                </Para>
                <List
                  items={[
                    "Realizacji umowy (art. 6 ust. 1 lit. b RODO)",
                    "Wypełnienia obowiązków prawnych — w szczególności podatkowych, księgowych (art. 6 ust. 1 lit. c RODO)",
                    "Marketingu bezpośredniego usług własnych — w oparciu o prawnie uzasadniony interes (art. 6 ust. 1 lit. f RODO), do czasu wniesienia sprzeciwu",
                  ]}
                />
                <Para>
                  3. Szczegółowe informacje dotyczące przetwarzania danych
                  osobowych (kategorie danych, odbiorcy, okres przechowywania,
                  prawa osób, których dane dotyczą) zawarte są w{" "}
                  <Link
                    href="/polityka-prywatnosci"
                    className="text-red underline"
                  >
                    Polityce prywatności
                  </Link>
                  .
                </Para>
              </Section>

              {/* ───── §13 ───── */}
              <Section number="§13" title="Rozstrzyganie sporów">
                <Para>
                  1. Strony dołożą wszelkich starań, aby ewentualne spory były
                  rozstrzygane polubownie — w drodze negocjacji lub mediacji.
                </Para>
                <Para>
                  2. Konsument ma prawo skorzystać z pozasądowych sposobów
                  rozpatrywania reklamacji i dochodzenia roszczeń:
                </Para>
                <List
                  items={[
                    "Wojewódzkie Inspektoraty Inspekcji Handlowej — postępowanie mediacyjne",
                    "Stałe sądy polubowne przy WIIH",
                    "Miejscy/Powiatowi Rzecznicy Konsumentów — bezpłatna pomoc prawna",
                    "Platforma internetowego rozstrzygania sporów ODR Komisji Europejskiej: https://ec.europa.eu/consumers/odr",
                  ]}
                />
                <Para>
                  3. W przypadku braku porozumienia, spory rozstrzygane są
                  przez sąd właściwy według przepisów Kodeksu postępowania
                  cywilnego. Dla Konsumentów właściwy jest sąd miejsca
                  zamieszkania, dla pozostałych Klientów — sąd właściwy dla
                  siedziby Wykonawcy (Częstochowa).
                </Para>
                <Para>
                  4. Prawem właściwym dla umów zawieranych z Wykonawcą jest
                  prawo polskie.
                </Para>
              </Section>

              {/* ───── §14 ───── */}
              <Section number="§14" title="Postanowienia końcowe">
                <Para>
                  1. Regulamin wchodzi w życie z dniem {EFFECTIVE_DATE} i ma
                  zastosowanie do umów zawieranych po tej dacie.
                </Para>
                <Para>
                  2. W sprawach nieuregulowanych Regulaminem stosuje się
                  przepisy prawa polskiego, w szczególności:
                </Para>
                <List
                  items={[
                    "Ustawa z dnia 23 kwietnia 1964 r. — Kodeks cywilny",
                    "Ustawa z dnia 30 maja 2014 r. o prawach konsumenta",
                    "Ustawa z dnia 18 lipca 2002 r. o świadczeniu usług drogą elektroniczną",
                    "Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO)",
                  ]}
                />
                <Para>
                  3. Jeżeli którekolwiek z postanowień Regulaminu okaże się
                  nieważne lub niewykonalne, pozostałe postanowienia zachowują
                  pełną moc.
                </Para>
                <Para>
                  4. Wszelkie zmiany Regulaminu wymagają formy pisemnej i
                  publikacji na stronie stretchsufit.pl/regulamin z 14-dniowym
                  wyprzedzeniem przed wejściem w życie.
                </Para>
                <Para>
                  5. Aktualna wersja Regulaminu wraz ze wszystkimi załącznikami
                  dostępna jest pod adresem stretchsufit.pl/regulamin.
                </Para>
              </Section>

              {/* ───── Footer info ───── */}
              <div className="rounded border border-bg/10 bg-paper-2 p-7">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                  Kontakt
                </div>
                <div className="mt-4 space-y-1 text-[15px] text-bg/80">
                  <div className="font-display font-semibold text-bg">
                    Alto Design Sp. z o.o.
                  </div>
                  <div>ul. Legionów 59, 42-200 Częstochowa</div>
                  <div>
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
                    <a href="tel:+48730700333" className="text-red underline">
                      +48 730 700 333
                    </a>
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

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-red">●</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
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
