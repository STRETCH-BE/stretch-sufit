/**
 * Warranty page — /gwarancja
 * File path: /app/gwarancja/page.tsx
 *
 * Customer-friendly explanation of Stretch's two-tier material warranty:
 *   - 15 years on PVC (produced in Poland by Alto Design)
 *   - 10 years on polyester (produced in Belgium by Stretch Productions BV)
 * Plus the statutory consumer warranty (rękojmia) that runs in parallel
 * under Polish Civil Code (Kodeks cywilny, art. 556–576).
 *
 * Style is reassuring and clear — this is a marketing document with
 * legal substance, not a contract. The actual binding warranty terms
 * are referenced in /regulamin.
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
import { languageAlternates, routes } from "@/lib/i18n-routes";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://altodesign.pl";

const LAST_UPDATED = "14 maja 2026";

export const metadata: Metadata = {
  title: "Gwarancja do 15 lat — sufity napinane Stretch | Stretch Sufit",
  description:
    "Pełne warunki gwarancji materiałowej Stretch — 15 lat na PVC produkowany w naszej fabryce w Polsce, 10 lat na polyester ze Stretch Productions BV w Belgii. Co obejmuje, jak zgłosić reklamację.",
  alternates: {
    canonical: "/gwarancja",
    languages: languageAlternates(routes.warranty),
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
      name: "Gwarancja",
      item: `${BASE_URL}/gwarancja`,
    },
  ],
};

export default function GwarancjaPage() {
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
                Gwarancja
              </li>
            </ol>
          </Container>
        </nav>

        {/* ════════ Hero ════════ */}
        <section className="relative isolate overflow-hidden bg-bg pb-16 pt-12 md:pb-20 md:pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 15% 20%, rgba(225,16,26,0.08), transparent 55%)",
            }}
          />
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-8">
                <FadeIn>
                  <Eyebrow>Aktualizacja: {LAST_UPDATED}</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                    Gwarancja{" "}
                    <span className="it text-paper">do 15 lat.</span>
                  </h1>
                </FadeIn>
                <FadeIn delay={160}>
                  <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                    Jedna z najdłuższych gwarancji materiałowych na rynku
                    sufitów napinanych w Polsce. <strong className="text-white">15 lat
                    na PVC</strong> z naszej fabryki w Częstochowie,{" "}
                    <strong className="text-white">10 lat na polyester</strong>{" "}
                    ze Stretch Productions BV w Belgii. Oba materiały
                    testowaliśmy w warunkach europejskich od 2016 i 2018 roku.
                  </p>
                </FadeIn>
              </div>

              <div className="md:col-span-4">
                <FadeIn delay={120}>
                  <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
                    <Stat number="15" label="lat PVC" />
                    <Stat number="10" label="lat polyester" />
                    <Stat number="5" label="lat elektroniki LED" />
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ Two-tier warranty ════════ */}
        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <Eyebrow tone="on-paper">Dwa materiały, dwie gwarancje</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-bg">
                  Każdy materiał ma swoją{" "}
                  <span className="it">krzywą trwałości.</span>
                </SectionTitle>
              </FadeIn>
              <FadeIn delay={140}>
                <p className="mt-6 text-[17px] leading-[1.7] text-bg/80">
                  Gwarancja odpowiada realnej żywotności materiału — nie liczbie
                  marketingowej. PVC ma stabilizatory UV, które utrzymują kolor
                  i strukturę przez 15 lat. Tkanina poliestrowa to inny
                  materiał — z powłoką poliuretanową, kierowany do segmentu
                  premium, gwarantowany na 10 lat.
                </p>
              </FadeIn>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-10">
              <FadeIn delay={160}>
                <div className="rounded border-2 border-red bg-paper-2 p-8">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                    01 · PVC
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.01em] text-bg md:text-4xl">
                    15 lat
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.7] text-bg/75">
                    Pełna gwarancja materiałowa na membranę PVC produkowaną
                    w naszej fabryce <strong className="text-bg">Alto Design</strong>{" "}
                    w Częstochowie. Dotyczy stabilności koloru, braku pęknięć,
                    trwałości połączeń z profilami, wodoszczelności do 100 l/m².
                  </p>
                  <p className="mt-3 text-[14px] leading-[1.6] text-bg/55">
                    Realizowana w Polsce bezpośrednio przez Stretch Sufit /
                    Alto Design Sp. z o.o.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={220}>
                <div className="rounded border border-bg/10 bg-paper-2 p-8">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                    02 · Polyester
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.01em] text-bg md:text-4xl">
                    10 lat
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.7] text-bg/75">
                    Gwarancja materiałowa na tkaninę poliestrową z powłoką
                    poliuretanową, produkowaną przez{" "}
                    <strong className="text-bg">Stretch Productions BV</strong>{" "}
                    w Belgii. Dotyczy stabilności matowości, braku odbarwień,
                    trwałości powłoki ochronnej.
                  </p>
                  <p className="mt-3 text-[14px] leading-[1.6] text-bg/55">
                    Realizowana w Polsce przez Stretch Sufit jako autoryzowanego
                    instalatora Stretchgroup.
                  </p>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* ════════ Statutory rękojmia ════════ */}
        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <Eyebrow>Plus ochrona ustawowa</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-white">
                  Niezależnie —{" "}
                  <span className="it text-paper">rękojmia 2 lata.</span>
                </SectionTitle>
              </FadeIn>
              <FadeIn delay={140}>
                <p className="mt-6 text-[17px] leading-[1.7] text-white/75">
                  Niezależnie od gwarancji producenta przysługuje Ci rękojmia —
                  ustawowa ochrona konsumencka wynikająca z Kodeksu cywilnego
                  (art. 556–576). Działa przez 2 lata od wydania rzeczy.
                  Nie możesz się jej zrzec — to prawo, nie świadczenie.
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="mt-4 text-[15px] leading-[1.6] text-white/55">
                  W praktyce konsument w Polsce ma więc <strong className="text-white">15 lat
                  gwarancji + 2 lata rękojmi</strong> na sufit PVC, lub{" "}
                  <strong className="text-white">10 lat + 2 lata</strong> na polyester.
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* ════════ What's covered ════════ */}
        <section className="bg-bg-soft py-24 md:py-32">
          <Container>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow>Co obejmuje gwarancja</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Wady{" "}
                    <span className="it text-paper">materiałowe</span> i
                    montażowe.
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-6 text-lg leading-relaxed text-white/70">
                    Pełen zakres tego, co naprawiamy bez dyskusji w okresie
                    gwarancyjnym. Wymagamy tylko dowodu zakupu (faktura lub
                    paragon) i kontaktu na info@stretch-sufit.pl.
                  </p>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <div className="space-y-4">
                  <CoveredItem
                    title="Stabilność koloru"
                    body="Membrana zachowuje pierwotny kolor przez cały okres gwarancji. Blaknięcie, żółknięcie, zmiana odcienia — pełne pokrycie."
                  />
                  <CoveredItem
                    title="Trwałość połączeń"
                    body="Membrana pozostaje przymocowana do profili przyściennych. Wysunięcie z profilu, obwisanie z powodu wady materiału — naprawiamy lub wymieniamy."
                  />
                  <CoveredItem
                    title="Brak pęknięć i rozdarć"
                    body="Membrana nie pęka, nie rozdziera się ani nie deformuje w normalnych warunkach użytkowania (temperatura -10°C do +50°C)."
                  />
                  <CoveredItem
                    title="Wodoszczelność PVC"
                    body="PVC zatrzymuje wodę w przypadku zalania z góry. Jeśli wodoszczelność zawiedzie — wymieniamy."
                  />
                  <CoveredItem
                    title="Funkcjonalność akustyki"
                    body="Sufity akustyczne zachowują parametry NRC (Noise Reduction Coefficient) przez cały okres gwarancji."
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ What's NOT covered ════════ */}
        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow>Czego nie obejmuje</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Uczciwe{" "}
                    <span className="it text-paper">wyłączenia.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-6 text-lg leading-relaxed text-white/70">
                    Gwarancja nie pokrywa uszkodzeń, na które nie mamy wpływu.
                    Większość z nich da się jednak naprawić odpłatnie — nie
                    musisz wymieniać całego sufitu.
                  </p>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <div className="space-y-4">
                  <ExcludedItem
                    title="Uszkodzenia mechaniczne"
                    body="Przecięcia nożem, ostrym przedmiotem, uderzenia. Membrana jest cienka (0,17–0,40 mm) — można ją przebić. Naprawa odpłatna, zwykle bez wymiany całego sufitu."
                  />
                  <ExcludedItem
                    title="Niewłaściwe użytkowanie"
                    body="Czyszczenie rozpuszczalnikami, alkoholem, materiałami ściernymi. Wystawienie na temperatury poza zakresem (np. otwarty ogień, wyciekający piec)."
                  />
                  <ExcludedItem
                    title="Modyfikacje przez osoby trzecie"
                    body="Demontaż i ponowny montaż przez firmę inną niż autoryzowany dealer Stretch. Wprowadzanie nowych punktów świetlnych bez konsultacji."
                  />
                  <ExcludedItem
                    title="Zdarzenia losowe"
                    body="Pożar, powódź, trzęsienie ziemi, wybuch. Te zdarzenia pokrywa Twoje ubezpieczenie mieszkania."
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ Claim process ════════ */}
        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <Eyebrow tone="on-paper">Jak zgłosić reklamację</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-bg">
                  Cztery kroki —{" "}
                  <span className="it">bez biurokracji.</span>
                </SectionTitle>
              </FadeIn>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              <ProcessStep
                number="01"
                title="Skontaktuj się"
                body="Email na info@stretch-sufit.pl lub telefon +48 730 700 333. Opisz problem, dołącz zdjęcia."
              />
              <ProcessStep
                number="02"
                title="Wstępna ocena"
                body="W ciągu 3 dni roboczych odpowiadamy — czy sprawa kwalifikuje się do gwarancji, czy potrzebne oględziny."
              />
              <ProcessStep
                number="03"
                title="Oględziny lub naprawa"
                body="Jeśli potrzebne — wysyłamy ekipę. Termin: do 14 dni od zgłoszenia, zwykle szybciej."
              />
              <ProcessStep
                number="04"
                title="Rozwiązanie"
                body="Naprawa lub wymiana (jeśli gwarancyjna) bez kosztów dla Ciebie. Standardowo w ciągu 30 dni od zgłoszenia."
              />
            </div>

            <FadeIn delay={400}>
              <div className="mx-auto mt-16 max-w-3xl rounded border border-bg/10 bg-paper-2 p-8">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                  Dokumenty potrzebne do reklamacji
                </div>
                <ul className="mt-5 space-y-3 text-[15px] text-bg/80">
                  <li className="flex gap-3">
                    <span className="text-red">●</span>
                    <span>Faktura VAT lub paragon (dowód zakupu)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red">●</span>
                    <span>Zdjęcia uszkodzenia (3-5 zdjęć z różnych odległości)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-red">●</span>
                    <span>Krótki opis okoliczności (kiedy zauważone, w jakich warunkach)</span>
                  </li>
                </ul>
                <p className="mt-6 text-[14px] leading-[1.6] text-bg/60">
                  W przypadku reklamacji z tytułu rękojmi — masz dodatkowo
                  prawo do żądania obniżenia ceny lub odstąpienia od umowy
                  (jeśli wada jest istotna). Szczegóły w{" "}
                  <Link href="/regulamin" className="text-red underline">
                    Regulaminie
                  </Link>
                  .
                </p>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* ════════ Final CTA ════════ */}
        <section className="relative isolate overflow-hidden bg-red py-20 text-white md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Masz pytania?</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Zgłoś reklamację{" "}
                <span className="it">— załatwimy to.</span>
              </h2>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:info@stretch-sufit.pl?subject=Zg%C5%82oszenie%20reklamacji%20-%20gwarancja"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Napisz email
                </a>
                <a
                  href="tel:+48730700333"
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

/* ─────────────────────────────────────────────────────────── */

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-semibold leading-none tracking-[-0.02em] text-white md:text-4xl">
        {number}
      </div>
      <div className="mt-2 text-sm text-white/60">{label}</div>
    </div>
  );
}

function CoveredItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex gap-5 border-l-2 border-red/40 pl-6">
      <div className="flex-1">
        <div className="font-display text-base font-semibold text-white md:text-lg">
          {title}
        </div>
        <p className="mt-2 text-[15px] leading-relaxed text-white/65">{body}</p>
      </div>
    </div>
  );
}

function ExcludedItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex gap-5 border-l-2 border-white/15 pl-6">
      <div className="flex-1">
        <div className="font-display text-base font-semibold text-white md:text-lg">
          {title}
        </div>
        <p className="mt-2 text-[15px] leading-relaxed text-white/55">{body}</p>
      </div>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded border border-bg/10 bg-paper-2 p-6">
      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
        {number}
      </div>
      <h3 className="mt-3 font-display text-lg font-semibold leading-tight tracking-[-0.01em] text-bg">
        {title}
      </h3>
      <p className="mt-3 text-[14px] leading-[1.6] text-bg/70">{body}</p>
    </div>
  );
}
