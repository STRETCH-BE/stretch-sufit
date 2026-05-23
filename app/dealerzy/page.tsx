/**
 * Become a dealer (STRETCH® Partner) page — /dealerzy
 * File path: /app/dealerzy/page.tsx
 *
 * Recruitment page for STRETCH® Partner Program — the international model
 * referenced on the homepage and /o-nas (13+ countries, "wyszkolone ekipy
 * STRETCH®"). Polish copy carefully avoids the word "franczyza" because
 * /o-nas explicitly says "Nie franczyza" — instead it's positioned as a
 * licensing + training partnership.
 *
 * Structure mirrors /o-nas in editorial rhythm:
 *   hero → paper (model) → black (what you get) → paper (ideal partner)
 *   → bg-soft stats → black (process) → red CTA.
 *
 * Lead capture: dedicated mailto: with subject tag — keeps inbound
 * partner-program leads visible in info@stretch-sufit.pl without adding
 * a second API endpoint.
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

const PARTNER_MAILTO =
  "mailto:info@stretch-sufit.pl?subject=STRETCH%C2%AE%20Partner%20Program%20%E2%80%94%20zg%C5%82oszenie";

export const metadata: Metadata = {
  title:
    "Zostań dealerem — STRETCH® Partner Program | Stretch Sufit",
  description:
    "Licencjonowana technologia sufitów napinanych STRETCH® dla firm wykonawczych. Szkolenie w Belgii lub Polsce, własne profile aluminiowe, narzędzia, wsparcie marketingowe. Wyłączność na region.",
  alternates: { canonical: "/dealerzy" },
  openGraph: {
    title: "STRETCH® Partner Program | Stretch Sufit",
    description:
      "Zostań licencjonowanym partnerem STRETCH® — belgijski system sufitów napinanych z polskim zapleczem produkcyjnym.",
    type: "website",
    url: `${BASE_URL}/dealerzy`,
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
      name: "Zostań dealerem",
      item: `${BASE_URL}/dealerzy`,
    },
  ],
};

const pillars = [
  {
    label: "Licencja",
    title: "System, nie franczyza",
    body: "Nie kupujesz prawa do logo. Otrzymujesz licencję na technologię STRETCH®: protokół montażu, autorskie profile aluminiowe, kalibrowane membrany i markę, która coś znaczy w branży.",
  },
  {
    label: "Szkolenie",
    title: "Brussels lub Częstochowa",
    body: "Pełny program szkoleniowy w siedzibie STRETCH® w Belgii albo w polskim centrum produkcyjnym. 5 – 10 dni teorii + praktyki na realnych obiektach.",
  },
  {
    label: "Narzędzia",
    title: "Wyposażony start",
    body: "Profile, membrany, narzędzia montażowe (nagrzewarki, butle, szpachle), dokumentacja techniczna, wzorniki — wszystko zamawiane bezpośrednio z fabryki w Belgii lub Polski.",
  },
  {
    label: "Marka",
    title: "Wspólny standard",
    body: "Identyfikacja wizualna, materiały marketingowe, profil w katalogu polskim i międzynarodowym. Twoje miasto / region oznaczone na stretch-sufit.pl i stretchplafond.be.",
  },
  {
    label: "Wsparcie",
    title: "Inżynier zawsze pod telefonem",
    body: "Dyżurujący inżynier produkcji odpowiada na pytania techniczne w godzinach pracy. W trudnych projektach — wizyta na obiekcie razem z Twoją ekipą.",
  },
  {
    label: "Wyłączność",
    title: "Region zarezerwowany dla Ciebie",
    body: "W obrębie umowy partnerskiej rezerwujemy obszar geograficzny. Nie sprzedajemy licencji konkurencyjnej firmie w Twoim mieście, dopóki jesteś aktywnym partnerem.",
  },
];

const idealProfile = [
  {
    no: "01",
    text: "Działasz w wykończeniach wnętrz, montażu sufitów podwieszanych, gładziach lub stolarce. Masz ekipę 2 – 5 osób i własną bazę narzędziową.",
  },
  {
    no: "02",
    text: "Szukasz drugiego, premiowego źródła przychodu — nie kolejnej generycznej usługi do dorzucenia. Rozumiesz różnicę między „cena za m²” a sprzedażą wartości.",
  },
  {
    no: "03",
    text: "Jesteś gotowy zainwestować w sprzęt i szkolenie. Bariera wejścia jest realna — to nie kurs weekendowy, to system.",
  },
  {
    no: "04",
    text: "Masz lokalną sieć: architekci, GW, deweloperzy, biura projektowe. Albo determinację, żeby tę sieć zbudować w 12 miesięcy.",
  },
];

const stats = [
  { value: "13+", label: "krajów", italic: "globalnie" },
  { value: "2018", label: "Belgia", italic: "rok założenia" },
  { value: "5 – 10", label: "dni", italic: "szkolenie" },
  { value: "1", label: "system", italic: "Brussels → świat" },
];

const processSteps = [
  {
    no: "01",
    title: "Aplikacja",
    body: "Wypełniasz krótki opis firmy — profil działalności, doświadczenie, region, plan biznesowy w 5 punktach. Odpowiadamy w 5 dni roboczych.",
  },
  {
    no: "02",
    title: "Rozmowa kwalifikacyjna",
    body: "Wideokonferencja z koordynatorem partner programu (PL) lub międzynarodowym (EN, RU). Omawiamy zakres, region, warunki ekonomiczne.",
  },
  {
    no: "03",
    title: "Umowa i szkolenie",
    body: "Po podpisaniu umowy partnerskiej zapraszamy na szkolenie w Brussels lub Częstochowie. Pełny pakiet startowy (narzędzia, materiały, marketing) wysyłany w czasie szkolenia.",
  },
  {
    no: "04",
    title: "Start operacyjny",
    body: "Pierwsze 3 montaże nadzorowane przez naszego inżyniera. Po certyfikacji — pełne uprawnienia do operowania pod marką STRETCH® na swoim regionie.",
  },
];

export default function DealerzyPage() {
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
                Zostań dealerem
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
                "radial-gradient(ellipse at 80% 0%, rgba(225,16,26,0.08), transparent 60%)",
            }}
          />
          <Container>
            <FadeIn>
              <Eyebrow>STRETCH® Partner Program · Belgium → World</Eyebrow>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                Belgijski system.{" "}
                <span className="it text-paper">Twój rynek.</span>
                <br />
                <span className="text-red">Wspólny standard.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                Dla firm wykonawczych, które chcą wnieść technologię sufitów
                napinanych STRETCH® na swój rynek. Nie franczyza —{" "}
                <span className="text-white">licencja na system</span>:
                technologię, narzędzia, szkolenie i markę.
              </p>
            </FadeIn>
            <FadeIn delay={220}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={PARTNER_MAILTO}
                  className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-4 font-display text-base font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Zgłoś zainteresowanie →
                </a>
                <a
                  href={`tel:${siteConfig.contact.phonePL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/5"
                >
                  Porozmawiaj z koordynatorem
                </a>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* ════════ Rozdział 01 — Model ════════ */}
        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow tone="on-paper">Rozdział 01 · Model</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Co dokładnie kupujesz —{" "}
                    <span className="it">i czego nie.</span>
                  </SectionTitle>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <FadeIn delay={120}>
                  <div className="space-y-6 text-[17px] leading-[1.7] text-bg/80 md:text-lg">
                    <p>
                      Partner Program STRETCH® to{" "}
                      <strong className="text-bg">licencja techniczna</strong>{" "}
                      połączona ze szkoleniem, ciągłym wsparciem inżynieryjnym
                      i prawem do operowania pod marką STRETCH® w
                      uzgodnionym regionie.
                    </p>
                    <p>
                      Nie sprzedajemy paczki PDF z instrukcją i logo. Sprzedajemy
                      dostęp do{" "}
                      <span className="font-serif italic">zamkniętego ekosystemu</span>{" "}
                      — autorskie profile aluminiowe niedostępne dla
                      generycznych instalatorów, kalibrowane membrany, narzędzia
                      i protokół szkoleniowy, który po 8 latach wciąż
                      ewoluuje.
                    </p>
                    <p className="border-l-2 border-red pl-5 font-serif text-xl italic text-bg">
                      „Franczyza polega na powielaniu. Partnerstwo polega na
                      tym, że każda ekipa STRETCH® mogłaby pojechać na obiekt
                      drugiej — i kontynuować ten sam montaż bez słowa
                      tłumaczenia."
                    </p>
                    <p>
                      Najważniejsza różnica: jesteś{" "}
                      <strong className="text-bg">właścicielem swojej firmy</strong>{" "}
                      — nie operatorem cudzej. Twoja księgowość, Twoi
                      pracownicy, Twoje decyzje cenowe w lokalnych granicach.
                      Nasz wpływ kończy się tam, gdzie zaczyna się standard
                      jakości.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ Rozdział 02 — Co dostajesz ════════ */}
        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-6">
                <FadeIn>
                  <Eyebrow>Rozdział 02 · Pakiet startowy</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Sześć rzeczy,{" "}
                    <span className="it text-paper">które dostajesz.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-6">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    Bez ukrytych warstw cenowych. Pełna lista składników
                    pakietu partnerskiego — opisujemy ją na pierwszej
                    rozmowie, podpisujemy w umowie.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {pillars.map((p, i) => (
                <FadeIn delay={140 + i * 60} key={p.label}>
                  <div className="h-full rounded border border-white/10 bg-bg-card/60 p-7 transition-colors hover:border-red/40">
                    <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                      {p.label}
                    </div>
                    <div className="mt-3 font-display text-lg font-semibold leading-tight text-white">
                      {p.title}
                    </div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">
                      {p.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* ════════ Rozdział 03 — Profil partnera ════════ */}
        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow tone="on-paper">
                    Rozdział 03 · Idealny partner
                  </Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Komu się{" "}
                    <span className="it">uda.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-8 text-[17px] leading-[1.7] text-bg/75">
                    Nie szukamy każdego. Szukamy firm, które{" "}
                    <span className="font-serif italic">już dobrze pracują</span>{" "}
                    w swojej kategorii i chcą dodać premium-owe rozszerzenie —
                    nie tych, którzy zaczynają od zera.
                  </p>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <div className="space-y-4 md:space-y-5">
                  {idealProfile.map((row, i) => (
                    <FadeIn delay={120 + i * 80} key={row.no}>
                      <div className="grid grid-cols-[auto_1fr] gap-5 rounded border border-bg/10 bg-paper-2 p-6 md:gap-6 md:p-7">
                        <div className="font-display text-2xl font-semibold tracking-[-0.02em] text-red md:text-3xl">
                          {row.no}
                        </div>
                        <p className="text-[15.5px] leading-[1.65] text-bg/80 md:text-base md:leading-[1.7]">
                          {row.text}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ Stats ════════ */}
        <section className="border-y border-white/10 bg-bg-soft py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {stats.map((s, i) => (
                <FadeIn delay={i * 80} key={s.label}>
                  <div>
                    <div className="font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none tracking-[-0.03em] text-white">
                      {s.value}
                    </div>
                    <div className="mt-3 text-sm text-white/65">
                      {s.label}{" "}
                      <span className="it text-white/45">— {s.italic}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* ════════ Rozdział 04 — Proces ════════ */}
        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-6">
                <FadeIn>
                  <Eyebrow>Rozdział 04 · Proces dołączenia</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Od zgłoszenia do{" "}
                    <span className="it text-paper">pierwszego montażu.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-6">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    Średni czas od pierwszego mailu do pełnej operacyjności:{" "}
                    <strong className="text-white">8 – 12 tygodni</strong>.
                    Większość czasu zajmuje przygotowanie szkolenia i wysyłka
                    sprzętu.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              {processSteps.map((step, i) => (
                <FadeIn delay={140 + i * 80} key={step.no}>
                  <div className="h-full rounded border border-white/10 bg-bg-card/40 p-7">
                    <div className="font-display text-3xl font-semibold tracking-[-0.02em] text-red">
                      {step.no}
                    </div>
                    <div className="mt-5 font-display text-lg font-semibold leading-tight text-white">
                      {step.title}
                    </div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">
                      {step.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* ════════ Manifest — Nie X ════════ */}
        <section className="bg-bg-soft py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-4xl">
              <FadeIn>
                <Eyebrow>Manifest partnerstwa</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                  Trzy rzeczy, których{" "}
                  <span className="it text-red">nie</span> wymagamy.
                </h2>
              </FadeIn>

              <div className="mt-14 space-y-12 md:space-y-14">
                {[
                  {
                    no: "Nie opłata wstępna nie do odzyskania.",
                    yes: "Inwestycja partnerska to konkretne dobra: sprzęt, materiały, szkolenie. Nie ma „opłaty za markę” liczonej w abstrakcji.",
                  },
                  {
                    no: "Nie obowiązek zakupów wszystkiego u nas.",
                    yes: "Profile i membrany — tak, te muszą pochodzić z naszej produkcji (to istota systemu). Wszystko inne (oświetlenie, akcesoria) możesz kontraktować lokalnie.",
                  },
                  {
                    no: "Nie kontrola Twojej księgowości.",
                    yes: "Jesteś samodzielną firmą. Płacisz licencję i materiały zgodnie z umową, reszta to Twoje decyzje — pracownicy, marketing lokalny, cenniki.",
                  },
                ].map((item, i) => (
                  <FadeIn delay={140 + i * 80} key={item.no}>
                    <div className="grid gap-5 md:grid-cols-12 md:gap-8">
                      <div className="md:col-span-5">
                        <div className="font-display text-xl font-semibold tracking-[-0.02em] text-red md:text-2xl">
                          <span className="it">{item.no}</span>
                        </div>
                      </div>
                      <div className="md:col-span-7">
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
                "radial-gradient(circle at 20% 80%, rgba(0,0,0,0.2), transparent 50%)",
            }}
          />
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Pierwszy krok</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Napisz w 5 zdaniach,{" "}
                <span className="it">kim jesteś.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Firma, doświadczenie, region, plan na pierwsze 12 miesięcy.
                Odpowiadamy w 5 dni roboczych. Nie wysyłamy automatycznych
                ankiet.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={PARTNER_MAILTO}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Wyślij zgłoszenie →
                </a>
                <a
                  href={`tel:${siteConfig.contact.phonePL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  +48 730 700 333
                </a>
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
