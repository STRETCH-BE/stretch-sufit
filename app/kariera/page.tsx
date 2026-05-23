/**
 * Career page — /kariera
 * File path: /app/kariera/page.tsx
 *
 * Recruitment page for the Polish operation. Open roles are described as
 * always-on talent pools rather than time-bound listings — the company is
 * scaling 17 cities of operations, so monter/pomiarowiec/doradca slots are
 * effectively always open.
 *
 * Each role card carries its own pre-tagged mailto: subject so HR can
 * filter inbound applications by role in info@stretch-sufit.pl. No new
 * API endpoint required.
 *
 * Visual rhythm: hero → paper (why work here) → black (open roles) →
 * paper (what we offer) → bg-soft (values manifesto) → red CTA.
 */

import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCTA } from "@/components/sections/mobile-sticky-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://stretch-sufit.vercel.app";

const HR_EMAIL = "info@stretch-sufit.pl";

function mailto(role: string) {
  return `mailto:${HR_EMAIL}?subject=${encodeURIComponent(
    `Aplikacja — ${role}`
  )}`;
}

export const metadata: Metadata = {
  title:
    "Kariera — praca w Stretch Sufit | Belgijska technologia, polska produkcja",
  description:
    "Pracuj w Stretch Sufit — części belgijskiej grupy Stretch. Monter sufitów napinanych, pomiarowiec, doradca klienta, produkcja. Umowa o pracę, samochód służbowy, szkolenia w Belgii. Częstochowa i cała Polska.",
  alternates: { canonical: "/kariera" },
  openGraph: {
    title: "Kariera w Stretch Sufit",
    description:
      "Otwarte stanowiska w Stretch Sufit — monterzy, pomiarowcy, doradcy klienta. UoP, samochód, szkolenia.",
    type: "website",
    url: `${BASE_URL}/kariera`,
    locale: "pl_PL",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Strona główna", item: BASE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Kariera",
      item: `${BASE_URL}/kariera`,
    },
  ],
};

type Role = {
  no: string;
  title: string;
  type: string;
  location: string;
  body: string;
  responsibilities: string[];
  requirements: string[];
};

const roles: Role[] = [
  {
    no: "01",
    title: "Monter sufitów napinanych",
    type: "Pełny etat · UoP",
    location: "Częstochowa + delegacje (PL)",
    body: "Pracujesz w 2-osobowej ekipie montażowej. Realizujesz pełen cykl montażu na obiekcie klienta — od rozłożenia ochrony, przez instalację profili i napinanie membrany, po protokół odbioru.",
    responsibilities: [
      "Montaż sufitów PVC, poliestrowych i akustycznych według protokołu Stretch",
      "Instalacja oświetlenia LED i punktów świetlnych integrowanych z sufitem",
      "Reprezentowanie firmy w bezpośrednim kontakcie z klientem",
      "Dbałość o sprzęt i samochód służbowy",
    ],
    requirements: [
      "Dokładność i kultura pracy w cudzym domu / biurze",
      "Doświadczenie w wykończeniach wnętrz mile widziane (ale nie wymagane)",
      "Prawo jazdy kat. B",
      "Gotowość do delegacji w obrębie Polski (1 – 3 noclegi miesięcznie)",
    ],
  },
  {
    no: "02",
    title: "Pomiarowiec / Doradca techniczny",
    type: "Pełny etat · UoP + premie",
    location: "Wybrany region (PL)",
    body: "Pierwszy kontakt klienta z firmą po telefonie. Przyjeżdżasz do mieszkania / biura / restauracji z próbnikami, mierzysz, doradzasz materiał, przedstawiasz ofertę.",
    responsibilities: [
      "Wizyty pomiarowe w domu klienta z pełnym próbnikiem materiałów",
      "Doradztwo techniczne: typ membrany, oświetlenie, akustyka",
      "Przygotowanie wyceny i ofertowanie w systemie CRM",
      "Domykanie sprzedaży — premia od zaliczki i finalnej wartości kontraktu",
    ],
    requirements: [
      "Umiejętność rozmowy z klientem premium-owym",
      "Znajomość rynku wykończeń lub design wnętrz (mile widziane)",
      "Prawo jazdy kat. B i komfort jeżdżenia służbowym SUV-em",
      "Samodzielność — pracujesz w terenie, biuro odwiedzasz raz w tygodniu",
    ],
  },
  {
    no: "03",
    title: "Doradca klienta — biuro / hotline",
    type: "Pełny etat · UoP",
    location: "Częstochowa · biuro",
    body: "Pierwsza linia kontaktu telefonicznego i mailowego. Odbierasz zgłoszenia z formularza, kwalifikujesz lead, umawiasz pomiary, koordynujesz harmonogram pomiarowców.",
    responsibilities: [
      "Obsługa telefonu i maila info@ w godzinach 09:00 – 15:30",
      "Kwalifikacja leadów i przydzielanie do pomiarowców",
      "Wsparcie posprzedażowe i pierwsze rozmowy gwarancyjne",
      "Aktualizacja CRM i prosta sprawozdawczość",
    ],
    requirements: [
      "Bardzo dobry polski w mowie i piśmie",
      "Komfort pracy w systemach CRM (uczymy konkretnego)",
      "Mile widziane: angielski lub ukraiński / rosyjski",
      "Cierpliwość i autentyczna ciekawość problemu klienta",
    ],
  },
  {
    no: "04",
    title: "Operator produkcji membran",
    type: "Pełny etat · UoP",
    location: "Częstochowa · ul. Legionów 59",
    body: "Praca na hali produkcyjnej. Cięcie i zgrzewanie membran PVC i poliestrowych zgodnie z arkuszami produkcyjnymi przygotowanymi po pomiarze.",
    responsibilities: [
      "Obsługa maszyn do cięcia i zgrzewania membran",
      "Kontrola jakości materiału na każdym etapie",
      "Pakowanie i przygotowanie do wysyłki na obiekt",
      "Bezpieczna praca z materiałami i sprzętem",
    ],
    requirements: [
      "Dokładność i odpowiedzialność za jakość produktu",
      "Doświadczenie w produkcji (krój, szwalnia, druk wielkoformatowy) mile widziane",
      "Gotowość do pracy w trybie 1-zmianowym (07:00 – 15:00)",
    ],
  },
];

const benefits = [
  {
    label: "Forma zatrudnienia",
    title: "Umowa o pracę. Bez wyjątków.",
    body: "Wszystkie etatowe stanowiska na UoP — z pierwszym dniem pracy. Bez „okresów próbnych na B2B”, bez fikcyjnego samozatrudnienia. ZUS, urlop, L4 normalnie.",
  },
  {
    label: "Wynagrodzenie",
    title: "Podstawa + premie kwartalne",
    body: "Stała podstawa adekwatna do roli + system premiowy zależny od stanowiska: monter — od zrealizowanych projektów, pomiarowiec — od domkniętej sprzedaży, biuro — od KPI zespołu.",
  },
  {
    label: "Sprzęt",
    title: "Pełne wyposażenie firmowe",
    body: "Samochód służbowy dla terenu, telefon, narzędzia, odzież z logo. Bez „dorzucania własnego sprzętu”. Wszystko brand-owane Stretch.",
  },
  {
    label: "Szkolenia",
    title: "Protokół Stretch — w Belgii lub Częstochowie",
    body: "Pełne szkolenie wstępne według protokołu producenta, doszkalanie przy każdym nowym produkcie. Dla wyróżniających się — wyjazdy do hali w Brussels.",
  },
  {
    label: "Ścieżka rozwoju",
    title: "Junior → Senior → Team Lead",
    body: "Ścieżka jest jasna i mierzalna: liczba zrealizowanych obiektów, certyfikacje w protokołach produktowych, ewaluacja klientów. Awansujemy z wewnątrz.",
  },
  {
    label: "Kultura",
    title: "Praca z efektem widocznym tego samego dnia",
    body: "Wchodzisz do mieszkania o 8:00 z popękanym sufitem. O 14:00 wychodzisz, klient płacze ze szczęścia. To rzadkość w innych branżach.",
  },
];

const values = [
  {
    no: "Robimy.",
    yes: "Nie konsultujemy montażu, nie zlecamy podwykonawcom, nie sprzedajemy „rozwiązań”. Mamy ekipy, narzędzia, halę produkcyjną i klientów. Robota jest realna.",
  },
  {
    no: "Liczymy.",
    yes: "Każdy projekt ma cenę, każdy montaż ma czas, każda ekipa ma KPI. Nie udajemy, że „liczy się pasja”. Liczy się efekt — i wynagradzamy go.",
  },
  {
    no: "Uczymy.",
    yes: "Nowy monter spędza pierwsze 2 tygodnie na obiekcie z seniorem. Pomiarowiec uczy się sprzedawać bez agresji. Doradca biura uczy się rozmawiać z architektem. Inwestujemy w to.",
  },
];

export default function KarieraPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

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
                Kariera
              </li>
            </ol>
          </Container>
        </nav>

        {/* ════════ Hero ════════ */}
        <section className="relative isolate overflow-hidden bg-bg pb-24 pt-12 md:pb-32 md:pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 20% 0%, rgba(225,16,26,0.07), transparent 60%)",
            }}
          />
          <Container>
            <FadeIn>
              <Eyebrow>Kariera · Częstochowa i Polska</Eyebrow>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                Praca, w której{" "}
                <span className="it text-paper">widać efekt</span>
                <br />
                <span className="text-red">na koniec</span> dnia.
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                Stretch Sufit to polski filar belgijskiej grupy Stretch.
                Rośniemy w 17 polskich miastach, produkujemy w Częstochowie,
                montujemy w domach, biurach, restauracjach. Szukamy ludzi,
                którzy lubią robotę z mierzalnym efektem.
              </p>
            </FadeIn>
            <FadeIn delay={220}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#stanowiska"
                  className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-4 font-display text-base font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Zobacz otwarte stanowiska →
                </a>
                <a
                  href={mailto("aplikacja ogólna")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/5"
                >
                  Aplikuj spontanicznie
                </a>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* ════════ Rozdział 01 — Dlaczego my ════════ */}
        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow tone="on-paper">Rozdział 01 · Dlaczego my</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Belgijski sufit.{" "}
                    <span className="it">Polska firma.</span>
                  </SectionTitle>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <FadeIn delay={120}>
                  <div className="space-y-6 text-[17px] leading-[1.7] text-bg/80 md:text-lg">
                    <p>
                      Pracujesz w polskiej firmie z polską kulturą, polską
                      księgowością i polskim szefem produkcji. Ale produkt,
                      który montujesz — w części pochodzi z naszej fabryki
                      PVC w Częstochowie (od 2016), w części z poliestrowej
                      fabryki Stretch Productions w Belgii (od 2018). Cały
                      system, w którym pracujesz, należy do{" "}
                      <strong className="text-bg">Stretchgroup</strong>.
                    </p>
                    <p>
                      To nie jest „pracujemy dla zagranicznej firmy”.
                      To jest{" "}
                      <span className="font-serif italic">jesteśmy częścią międzynarodowej grupy,</span>{" "}
                      w której polska spółka — Alto Design Sp. z o.o., działająca
                      pod marką Stretch Sufit — odpowiada za produkcję PVC i
                      montaż w 17 polskich miastach. Decyzje operacyjne zapadają
                      w Częstochowie, decyzje strategiczne — wspólnie z centralą
                      w Belgii.
                    </p>
                    <p className="border-l-2 border-red pl-5 font-serif text-xl italic text-bg">
                      „Wzięliśmy najlepszą firmę produkcyjną w Częstochowie i
                      wpuściliśmy w nią belgijski standard. Polska załoga,
                      polska fabryka PVC, belgijska technologia poliestru —{" "}
                      <span className="not-italic">jedna grupa, dwie fabryki, jeden standard.</span>"
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ Rozdział 02 — Stanowiska ════════ */}
        <section id="stanowiska" className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-7">
                <FadeIn>
                  <Eyebrow>Rozdział 02 · Otwarte stanowiska</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Cztery role,{" "}
                    <span className="it text-paper">które stale rekrutujemy.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-5">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    Rośniemy, więc te stanowiska są aktywne praktycznie cały
                    rok. Jeśli pasujesz — napisz, nawet jeśli akurat nie widzisz
                    formalnego ogłoszenia.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 space-y-5 md:mt-20 md:space-y-6">
              {roles.map((role, i) => (
                <FadeIn delay={120 + i * 80} key={role.no}>
                  <details className="group rounded border border-white/10 bg-bg-card/40 p-7 transition-colors open:border-red/40 md:p-9">
                    <summary className="grid cursor-pointer list-none grid-cols-1 items-start gap-4 md:grid-cols-12 md:items-center md:gap-6">
                      <div className="font-display text-xl font-semibold tracking-[-0.02em] text-red md:col-span-1 md:text-2xl">
                        {role.no}
                      </div>
                      <div className="md:col-span-6">
                        <div className="font-display text-xl font-semibold leading-tight text-white md:text-2xl">
                          {role.title}
                        </div>
                      </div>
                      <div className="md:col-span-4">
                        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/55">
                          {role.type}
                        </div>
                        <div className="mt-1 text-[13px] text-white/55">
                          {role.location}
                        </div>
                      </div>
                      <div className="hidden md:col-span-1 md:flex md:justify-end">
                        <span
                          aria-hidden="true"
                          className="font-display text-2xl text-red transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </div>
                    </summary>

                    <div className="mt-8 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-12 md:gap-12">
                      <div className="md:col-span-12">
                        <p className="text-[15.5px] leading-[1.7] text-white/75 md:text-base">
                          {role.body}
                        </p>
                      </div>

                      <div className="md:col-span-6">
                        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                          Zakres obowiązków
                        </div>
                        <ul className="mt-4 space-y-2.5">
                          {role.responsibilities.map((r) => (
                            <li
                              key={r}
                              className="grid grid-cols-[auto_1fr] gap-3 text-[14.5px] leading-relaxed text-white/75"
                            >
                              <span className="text-red">·</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="md:col-span-6">
                        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                          Wymagania
                        </div>
                        <ul className="mt-4 space-y-2.5">
                          {role.requirements.map((r) => (
                            <li
                              key={r}
                              className="grid grid-cols-[auto_1fr] gap-3 text-[14.5px] leading-relaxed text-white/75"
                            >
                              <span className="text-red">·</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="md:col-span-12">
                        <a
                          href={mailto(role.title)}
                          className="inline-flex items-center gap-2 rounded-full bg-red px-6 py-3 font-display text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                        >
                          Aplikuj na to stanowisko →
                        </a>
                      </div>
                    </div>
                  </details>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* ════════ Rozdział 03 — Co oferujemy ════════ */}
        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-6">
                <FadeIn>
                  <Eyebrow tone="on-paper">Rozdział 03 · Co oferujemy</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Sześć rzeczy,{" "}
                    <span className="it">na które stawiamy.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-6">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-bg/75 md:text-lg">
                    Bez bezpłatnych „pizzy w piątek” i innych pozornych
                    benefitów. Skupiamy się na rzeczach, które realnie
                    poprawiają jakość pracy i życia.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {benefits.map((b, i) => (
                <FadeIn delay={140 + i * 60} key={b.label}>
                  <div className="h-full rounded border border-bg/10 bg-paper-2 p-7 transition-colors hover:border-red/40">
                    <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                      {b.label}
                    </div>
                    <div className="mt-3 font-display text-lg font-semibold leading-tight text-bg">
                      {b.title}
                    </div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-bg/70">
                      {b.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* ════════ Manifest — Trzy rzeczy ════════ */}
        <section className="bg-bg-soft py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-4xl">
              <FadeIn>
                <Eyebrow>Manifest zespołu</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                  Trzy słowa, które{" "}
                  <span className="it text-red">opisują</span> nas najlepiej.
                </h2>
              </FadeIn>

              <div className="mt-14 space-y-12 md:space-y-14">
                {values.map((item, i) => (
                  <FadeIn delay={140 + i * 80} key={item.no}>
                    <div className="grid gap-5 md:grid-cols-12 md:gap-8">
                      <div className="md:col-span-4">
                        <div className="font-display text-2xl font-semibold tracking-[-0.02em] text-red md:text-3xl">
                          <span className="it">{item.no}</span>
                        </div>
                      </div>
                      <div className="md:col-span-8">
                        <p className="text-[16px] leading-[1.65] text-white/75 md:text-[17px]">
                          {item.yes}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ Final CTA ════════ */}
        <section className="relative isolate overflow-hidden bg-red py-24 text-white md:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(circle at 80% 80%, rgba(0,0,0,0.2), transparent 50%)",
            }}
          />
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Wyślij CV</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Nie czekaj na ogłoszenie.{" "}
                <span className="it">Napisz teraz.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Wyślij CV i krótką wiadomość o sobie. Każde zgłoszenie czyta
                konkretna osoba — odpowiadamy w 7 dni roboczych, niezależnie
                od decyzji.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={mailto("aplikacja ogólna")}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Aplikuj mailem →
                </a>
                <a
                  href={`tel:${siteConfig.contact.phonePL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Zadzwoń: +48 730 700 333
                </a>
              </div>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-white/65">
                RODO: aplikując, akceptujesz przetwarzanie danych zgodnie z{" "}
                <Link
                  href="/polityka-prywatnosci"
                  className="underline hover:text-white"
                >
                  polityką prywatności
                </Link>
              </p>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <MobileStickyCTA />
    </>
  );
}
