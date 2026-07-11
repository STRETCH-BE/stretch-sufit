/**
 * B2B Cooperation page — /wspolpraca-b2b
 * File path: /app/wspolpraca-b2b/page.tsx
 *
 * Editorial pitch to architects, interior designers, general contractors,
 * developers and HoReCa chains. Three audience tiles, a "what we deliver"
 * grid, a commission-based partner programme for designers, the standard
 * stats strip, a 4-step engagement model and a B2B-flavoured red CTA.
 *
 * Follows the visual rhythm of /o-nas and /kontakt:
 *   black hero → paper "for whom" → black "what we deliver" → paper
 *   partner programme → bg-soft stats → black process → red CTA.
 *
 * No bespoke API endpoint — the page directs leads to /#cta on the
 * homepage form, supplemented by a B2B-specific mailto: subject so
 * inbound mails land in info@stretch-sufit.pl pre-tagged.
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
import { languageAlternates, routes } from "@/lib/i18n-routes";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://altodesign.pl";

const B2B_MAILTO =
  "mailto:info@stretch-sufit.pl?subject=Wsp%C3%B3%C5%82praca%20B2B";

export const metadata: Metadata = {
  title:
    "Współpraca B2B — architekci, wykonawcy, deweloperzy | Stretch Sufit",
  description:
    "Współpraca B2B ze Stretch Sufit: dedykowany project manager, próbniki i pliki BIM/CAD, ceny projektowe, montaż po godzinach, faktura VAT, terminy gwarantowane. 15 lat gwarancji Stretch.",
  alternates: {
    canonical: "/wspolpraca-b2b",
    languages: languageAlternates(routes.b2b),
  },
  openGraph: {
    title: "Współpraca B2B | Stretch Sufit",
    description:
      "Sufity napinane Stretch® dla architektów, projektantów, generalnych wykonawców i deweloperów.",
    type: "website",
    url: `${BASE_URL}/wspolpraca-b2b`,
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
      name: "Współpraca B2B",
      item: `${BASE_URL}/wspolpraca-b2b`,
    },
  ],
};

const audiences = [
  {
    no: "01",
    title: "Architekci i projektanci wnętrz",
    body: "Pliki do BIM/Revit i AutoCAD, bezpłatne próbniki dla pracowni, dedykowany doradca techniczny i program prowizyjny od podpisanego projektu.",
    tag: "Pracownia",
  },
  {
    no: "02",
    title: "Generalni wykonawcy",
    body: "Sufit jako odrębne zlecenie — z własnym kierownikiem, harmonogramem zgranym z resztą wykończenia, gotówkową fakturą VAT i 15-letnią gwarancją na materiał.",
    tag: "GW",
  },
  {
    no: "03",
    title: "Deweloperzy, hotele, HoReCa",
    body: "Powtarzalne realizacje: kilkadziesiąt mieszkań w jednym projekcie, restauracje z akustyką, sieci hoteli z jednym standardem wykończenia.",
    tag: "Skala",
  },
];

const offerings = [
  {
    label: "Project Manager",
    title: "Jedna osoba do końca projektu",
    body: "Każdy projekt B2B prowadzi dedykowany PM — od pomiaru, przez akceptację dokumentacji, po protokół odbioru. Bez kolejkowania między działami.",
  },
  {
    label: "Materiały do projektu",
    title: "BIM, CAD, próbniki",
    body: "Bloki Revit i AutoCAD na życzenie, karty techniczne membran (PVC, poliester, akustyka), pełna paleta kolorów RAL — wszystko mailem w 24 h.",
  },
  {
    label: "Wycena projektowa",
    title: "Cennik B2B z progami wolumenu",
    body: "Indywidualny cennik powyżej 200 m² łącznej powierzchni projektu. Płatność z odroczonym terminem dla zweryfikowanych GW.",
  },
  {
    label: "Logistyka",
    title: "Montaż po godzinach i w weekendy",
    body: "Open-space, restauracje, sklepy — montujemy poza godzinami pracy obiektu. Ekipy dyspozycyjne w weekendy bez dopłat kryzysowych.",
  },
  {
    label: "Dokumentacja",
    title: "Pełen pakiet odbiorowy",
    body: "Atest higieniczny PZH, klasa reakcji na ogień, deklaracje materiałowe, protokół montażu, karta gwarancyjna. Wszystko podpisane, w PDF.",
  },
  {
    label: "Skala",
    title: "Realizacje 200 – 5 000 m²",
    body: "Produkujemy lokalnie w Częstochowie — bez czekania na dostawy z Belgii. Duże projekty zamykamy w deklarowanych terminach.",
  },
];

const stats = [
  { value: "200+", label: "m²", italic: "próg cen B2B" },
  { value: "24 h", label: "kontakt", italic: "PM oddzwoni" },
  { value: "15", label: "lat", italic: "gwarancji materiału" },
  { value: "17", label: "miast", italic: "obsługiwanych regularnie" },
];

const processSteps = [
  {
    no: "01",
    title: "Rozmowa wstępna",
    body: "20-minutowa rozmowa z PM — zakres projektu, terminy, parametry techniczne, wstępna wycena ramowa. Bezpłatnie, bez zobowiązań.",
  },
  {
    no: "02",
    title: "Pomiar i dokumentacja",
    body: "Pomiarowiec na obiekcie z próbnikami i kartami technicznymi. Wycena szczegółowa w 48 h, dokumentacja BIM/CAD na żądanie.",
  },
  {
    no: "03",
    title: "Umowa i harmonogram",
    body: "Umowa B2B z gwarantowanym terminem montażu i karami za zwłokę. Zaliczka 30 %, reszta po protokole odbioru.",
  },
  {
    no: "04",
    title: "Realizacja i odbiór",
    body: "Montaż w zadeklarowanym oknie, protokół odbioru z kierownikiem budowy, karta gwarancyjna 15 lat. Faktura VAT przelewem.",
  },
];

export default function WspolpracaB2BPage() {
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
                Współpraca B2B
              </li>
            </ol>
          </Container>
        </nav>

        {/* ════════ Hero ════════ */}
        <section className="relative isolate overflow-hidden bg-bg pb-20 pt-12 md:pb-28 md:pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 15% 10%, rgba(225,16,26,0.08), transparent 55%)",
            }}
          />
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-8">
                <FadeIn>
                  <Eyebrow>B2B · Współpraca dla profesjonalistów</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <h1 className="mt-6 font-display text-[clamp(2.5rem,6.5vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                    Pracownia, wykonawca,{" "}
                    <span className="it text-paper">deweloper.</span>
                    <br />
                    Jedna ekipa.{" "}
                    <span className="text-red">Jeden standard.</span>
                  </h1>
                </FadeIn>
                <FadeIn delay={160}>
                  <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                    Sufity napinane Stretch dla zespołów, dla których
                    powtarzalna jakość, kontrolowane terminy i pełna
                    dokumentacja nie są opcją — tylko warunkiem startu.
                  </p>
                </FadeIn>
              </div>
              <div className="md:col-span-4">
                <FadeIn delay={220}>
                  <div className="rounded border border-white/10 bg-bg-card/60 p-6">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                      ● Linia B2B
                    </div>
                    <a
                      href="tel:+48730700333"
                      className="mt-4 block font-display text-2xl font-semibold tracking-[-0.02em] text-white hover:text-red"
                    >
                      +48 730 700 333
                    </a>
                    <p className="mt-3 text-sm leading-relaxed text-white/60">
                      Pon – Pt 09:00 – 15:30. Poza godzinami zostaw wiadomość —
                      oddzwaniamy do 24 h w dni robocze.
                    </p>
                    <a
                      href={B2B_MAILTO}
                      className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold text-red hover:text-white"
                    >
                      info@stretch-sufit.pl →
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ Rozdział 01 — Dla kogo ════════ */}
        <section className="text-bg bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow tone="on-paper">Rozdział 01 · Dla kogo</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Trzy grupy.{" "}
                    <span className="it">Jeden tryb pracy.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-7">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-bg/75 md:text-lg">
                    Pracujemy z partnerami, którzy wartościują przewidywalność.
                    Mniej znaczy więcej — wybieramy projekty, w których
                    rozumiemy zakres i potrafimy zagwarantować termin.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
              {audiences.map((a, i) => (
                <FadeIn delay={140 + i * 80} key={a.no}>
                  <div className="h-full rounded border border-bg/10 bg-paper-2 p-8 transition-colors hover:border-red/40">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                        {a.no}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-bg/50">
                        {a.tag}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-bg">
                      {a.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-bg/70">
                      {a.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* ════════ Rozdział 02 — Co dostarczamy ════════ */}
        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-6">
                <FadeIn>
                  <Eyebrow>Rozdział 02 · Co dostarczamy</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Nie usługa.{" "}
                    <span className="it text-paper">Proces.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-6">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    Sześć elementów, które definiują standard B2B Stretch
                    Sufit. Każdy z nich jest wpisany w umowę — nie w obietnicę
                    handlową.
                  </p>
                </FadeIn>
              </div>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
              {offerings.map((o, i) => (
                <FadeIn delay={140 + i * 60} key={o.label}>
                  <div className="h-full rounded border border-white/10 bg-bg-card/60 p-7 transition-colors hover:border-white/20">
                    <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                      {o.label}
                    </div>
                    <div className="mt-3 font-display text-lg font-semibold leading-tight text-white">
                      {o.title}
                    </div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-white/65">
                      {o.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* ════════ Rozdział 03 — Partner Program (architekci) ════════ */}
        <section className="text-bg bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow tone="on-paper">
                    Rozdział 03 · Program dla pracowni
                  </Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Architekt rekomenduje.{" "}
                    <span className="it">Pracownia zyskuje.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-8 text-[17px] leading-[1.7] text-bg/80">
                    Dla architektów i projektantów wnętrz prowadzimy program
                    prowizyjny — wypłacany od podpisanego kontraktu klienta
                    końcowego. Bez ukrytych progów, bez umów wyłączności.
                    Możesz polecać tylko wtedy, gdy uznasz, że rozwiązanie
                    naprawdę pasuje do projektu.
                  </p>
                </FadeIn>
                <FadeIn delay={200}>
                  <a
                    href={B2B_MAILTO}
                    className="mt-10 inline-flex items-center gap-2 rounded-full bg-bg px-6 py-3 font-display text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                  >
                    Dołącz do programu →
                  </a>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <div className="grid gap-4 md:gap-5">
                  {[
                    {
                      no: "•",
                      title: "Prowizja od kontraktu",
                      body: "Wynagrodzenie liczone od wartości netto kontraktu klienta końcowego — przelew po opłaceniu zaliczki.",
                    },
                    {
                      no: "•",
                      title: "Bezpłatne próbniki i materiały",
                      body: "Walizka z próbkami wszystkich folii, kart kolorów RAL, kart technicznych. Aktualizowana co rok.",
                    },
                    {
                      no: "•",
                      title: "Pliki BIM i CAD na życzenie",
                      body: "Bloki Revit, AutoCAD i SketchUp dla każdego z 6 rozwiązań w katalogu — przygotowywane indywidualnie pod projekt.",
                    },
                    {
                      no: "•",
                      title: "Konsultacja techniczna",
                      body: "Doradca z produkcji odpowiada na pytania o łączenie z oświetleniem, akustyką, klimatyzacją. Bez czekania na ofertę.",
                    },
                  ].map((row, i) => (
                    <FadeIn delay={160 + i * 70} key={row.title}>
                      <div className="rounded border border-bg/10 bg-paper p-6 transition-colors hover:border-red/40">
                        <div className="flex items-baseline gap-4">
                          <span className="font-display text-red">
                            {row.no}
                          </span>
                          <div>
                            <div className="font-display text-base font-semibold text-bg">
                              {row.title}
                            </div>
                            <p className="mt-2 text-[14.5px] leading-relaxed text-bg/70">
                              {row.body}
                            </p>
                          </div>
                        </div>
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
                  <Eyebrow>Rozdział 04 · Proces</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Cztery kroki od mailu{" "}
                    <span className="it text-paper">do odbioru.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-6">
                <FadeIn delay={140}>
                  <p className="text-[17px] leading-[1.7] text-white/70 md:text-lg">
                    Bez zaskoczeń. Wiesz, co się dzieje na każdym etapie — i
                    co podpisujesz, zanim zaczniemy produkcję.
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

        {/* ════════ Final CTA ════════ */}
        <section className="relative isolate overflow-hidden bg-red py-24 text-white md:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(0,0,0,0.2), transparent 50%)",
            }}
          />
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Rozmawiajmy o projekcie</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Masz projekt powyżej 200 m²?{" "}
                <span className="it">Zacznij od rozmowy.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Krótka rozmowa wstępna — 20 minut, nasz Project Manager
                oszacuje zakres, podaje ramową wycenę i kalendarz produkcji.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={B2B_MAILTO}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Napisz do nas →
                </a>
                <a
                  href={`tel:${siteConfig.contact.phonePL}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  +48 730 700 333
                </a>
              </div>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-white/65">
                Klient indywidualny? · Wypełnij formularz na{" "}
                <Link href="/#cta" className="underline hover:text-white">
                  stronie głównej
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
