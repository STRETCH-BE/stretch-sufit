/**
 * Contact page — /kontakt
 * File path: /app/kontakt/page.tsx
 *
 * Consolidated contact information: phone numbers, email, WhatsApp,
 * office address, opening hours, embedded Google Map, service area note.
 *
 * The lead form lives on the homepage (#cta anchor). This page is for
 * users who want to call/visit directly rather than fill a form.
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

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://stretch-sufit.vercel.app";

export const metadata: Metadata = {
  title: "Kontakt — zadzwoń, napisz lub przyjdź | Stretch Sufit",
  description:
    "Skontaktuj się ze Stretch Sufit — biuro w Częstochowie, ul. Legionów 59. Tel. +48 730 700 333. Bezpłatny pomiar w 17 miastach w Polsce. Oddzwonienie w 24 h.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    title: "Kontakt | Stretch Sufit",
    description:
      "Zadzwoń, napisz lub przyjdź do showroomu w Częstochowie.",
    type: "website",
    url: `${BASE_URL}/kontakt`,
    locale: "pl_PL",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/kontakt#business`,
  name: "Stretch Sufit",
  legalName: "Alto Design Sp. z o.o.",
  url: BASE_URL,
  telephone: "+48730700333",
  email: "info@stretch-sufit.pl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Legionów 59",
    addressLocality: "Częstochowa",
    postalCode: "42-200",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.807533912693366,
    longitude: 19.158582621002815,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  priceRange: "$$",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Strona główna", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Kontakt", item: `${BASE_URL}/kontakt` },
  ],
};

export default function KontaktPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
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
                Kontakt
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
                "radial-gradient(ellipse at 20% 10%, rgba(225,16,26,0.08), transparent 60%)",
            }}
          />
          <Container>
            <div className="mx-auto max-w-4xl">
              <FadeIn>
                <Eyebrow>Częstochowa · ul. Legionów 59</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                  Zadzwoń, napisz{" "}
                  <span className="it text-paper">lub przyjdź.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={160}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                  Trzy drogi kontaktu, jedna obietnica: oddzwaniamy w 24
                  godziny w dni robocze. Showroom otwarty od poniedziałku do
                  soboty — zapraszamy z próbnikami w ręku.
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* ════════ Contact methods grid ════════ */}
        <section className="bg-bg pb-20 md:pb-24">
          <Container>
            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              {/* Phone */}
              <FadeIn>
                <a
                  href="tel:+48730700333"
                  className="group block rounded border border-white/10 bg-bg-card/40 p-8 transition-all hover:border-red hover:bg-bg-card"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                    Telefon · PL / EN
                  </div>
                  <div className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">
                    +48 730 700 333
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/65">
                    Najszybszy kontakt. Odbieramy od poniedziałku do soboty —
                    poza godzinami zostaw wiadomość, oddzwonimy.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-red">
                    Zadzwoń teraz
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </a>
              </FadeIn>

              {/* WhatsApp */}
              <FadeIn delay={80}>
                <a
                  href="https://wa.me/48730700333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded border border-white/10 bg-bg-card/40 p-8 transition-all hover:border-[#25d366] hover:bg-bg-card"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#25d366]">
                    WhatsApp
                  </div>
                  <div className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">
                    Napisz
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/65">
                    Wyślij zdjęcie pomieszczenia, wymiary lub po prostu opisz
                    projekt. Odpowiadamy zwykle w ciągu 2 godzin w dni robocze.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-[#25d366]">
                    Otwórz WhatsApp
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </a>
              </FadeIn>

              {/* Email */}
              <FadeIn delay={160}>
                <a
                  href="mailto:info@stretch-sufit.pl"
                  className="group block rounded border border-white/10 bg-bg-card/40 p-8 transition-all hover:border-white/30 hover:bg-bg-card"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/65">
                    Email
                  </div>
                  <div className="mt-5 font-display text-lg font-semibold tracking-[-0.01em] text-white md:text-xl">
                    info@stretch-sufit.pl
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/65">
                    Dla rysunków, projektów, kosztorysów. Odpowiadamy w ciągu
                    24 godzin w dni robocze.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-white">
                    Napisz email
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </a>
              </FadeIn>
            </div>

            {/* Secondary phone for PL/UA */}
            <FadeIn delay={220}>
              <div className="mt-8 rounded border border-white/5 bg-bg-soft/40 p-6 text-center">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/50">
                  Klienci ukraińscy · Українські клієнти
                </span>
                <a
                  href="tel:+48455444475"
                  className="ml-3 font-display text-base font-semibold text-white hover:text-red"
                >
                  +48 455 444 475
                </a>
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* ════════ Office + hours ════════ */}
        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow tone="on-paper">Showroom i biuro</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Przyjdź zobaczyć{" "}
                    <span className="it">materiały na żywo.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-6 text-[17px] leading-[1.7] text-bg/80">
                    W showroomie pokazujemy próbki wszystkich folii (PVC,
                    poliester, akustyczny, fotodruk), profile montażowe,
                    przykłady oświetlenia LED. Konsultacja z inżynierem
                    produkcji — bez umówienia, w godzinach pracy.
                  </p>
                </FadeIn>

                <FadeIn delay={200}>
                  <div className="mt-10 space-y-6">
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                        Adres
                      </div>
                      <div className="mt-2 font-display text-lg font-semibold text-bg">
                        Alto Design Sp. z o.o.
                      </div>
                      <div className="text-[15px] text-bg/75">
                        ul. Legionów 59
                        <br />
                        42-200 Częstochowa
                      </div>
                    </div>

                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                        Godziny otwarcia
                      </div>
                      <table className="mt-2 text-[15px] text-bg/80">
                        <tbody>
                          <tr>
                            <td className="pr-6 py-1 font-display font-semibold text-bg">
                              Pn – Pt
                            </td>
                            <td>09:00 – 17:00</td>
                          </tr>
                          <tr>
                            <td className="pr-6 py-1 font-display font-semibold text-bg">
                              Sob
                            </td>
                            <td>10:00 – 14:00</td>
                          </tr>
                          <tr>
                            <td className="pr-6 py-1 font-display font-semibold text-bg/60">
                              Nd
                            </td>
                            <td className="text-bg/60">zamknięte</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Legion%C3%B3w+59%2C+42-200+Cz%C4%99stochowa%2C+Poland"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-bg px-6 py-3 font-display text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                      >
                        Otwórz nawigację →
                      </a>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <FadeIn delay={120}>
                  <div className="overflow-hidden rounded border border-bg/10">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.3!2d19.1180!3d50.8118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDQ4JzQyLjUiTiAxOcKwMDcnMTMuMSJF!5e0!3m2!1spl!2spl!4v1715000000000"
                      width="100%"
                      height="500"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Mapa: Stretch Sufit, ul. Legionów 59, 42-200 Częstochowa"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ Service area ════════ */}
        <section className="bg-bg py-20 md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <Eyebrow>Obszar działania</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-white">
                  17 miast w Polsce.{" "}
                  <span className="it text-paper">Jedna ekipa.</span>
                </SectionTitle>
              </FadeIn>
              <FadeIn delay={140}>
                <p className="mt-6 text-lg leading-relaxed text-white/70">
                  Realizujemy montaże w całej Polsce — bazujemy w Częstochowie,
                  obsługujemy między innymi: Warszawę, Kraków, Wrocław, Poznań,
                  Gdańsk, Łódź, Katowice. Pełna lista miast na stronie obsługi
                  lokalnej.
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="mt-8">
                  <Link
                    href="/sufity-napinane"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:border-red hover:text-red"
                  >
                    Zobacz wszystkie miasta →
                  </Link>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* ════════ Final CTA ════════ */}
        <section className="relative isolate overflow-hidden bg-red py-24 text-white md:py-28">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Bezpłatny pomiar</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Nie wiesz, co Ci pasuje?{" "}
                <span className="it">Pomiar i wycena bezpłatne.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Wypełnij formularz lub zadzwoń. Oddzwonimy w 24 godziny.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/#cta"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Zamów bezpłatny pomiar →
                </Link>
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
