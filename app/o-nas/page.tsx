/**
 * About page — /o-nas
 * File path: /app/o-nas/page.tsx
 *
 * Editorial founder-driven narrative. Tells the real story:
 * Michael Nicasens (2018, Belgium) → built proprietary system → global expansion
 * → 2024 acquisition of Alto Design (Poland) → rebrand to Stretch Sufit
 * → Re-Sound acquisition for acoustic catalogue.
 *
 * Visual rhythm follows the homepage: alternating black + paper sections,
 * Bricolage Grotesque display, Instrument Serif italics, surgical red accents.
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCTA } from "@/components/sections/mobile-sticky-cta";

export const metadata: Metadata = {
  title: "O nas — Belgijska technologia, polska produkcja | Stretch Sufit",
  description:
    "Stretch Sufit to polski filar grupy STRETCH® — belgijskiej firmy założonej w 2018 r. przez Michaela Nicasensa. Własny system, montaż przez wyszkolone zespoły, globalna obecność.",
  alternates: { canonical: "/o-nas" },
  openGraph: {
    title: "O nas — Stretch Sufit",
    description:
      "Belgijska technologia sufitów napinanych, polska produkcja. Historia STRETCH® i Alto Design.",
    type: "article",
  },
};

const countries = [
  "Belgia",
  "Polska",
  "Holandia",
  "Niemcy",
  "Francja",
  "Szwajcaria",
  "Wielka Brytania",
  "Malta",
  "Islandia",
  "USA",
  "Kanada",
  "ZEA",
  "Indie",
];

export default function AboutPage() {
  return (
    <>
      <Nav />

      <main>
        {/* ════════ Hero ════════ */}
        <section className="relative isolate overflow-hidden bg-bg pb-24 pt-32 md:pb-32 md:pt-40">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 20% 0%, rgba(225,16,26,0.06), transparent 60%)",
            }}
          />
          <Container>
            <FadeIn>
              <Eyebrow>Belgia · 2018 — historia, którą zbudowaliśmy sami</Eyebrow>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                Nie kontynuujemy{" "}
                <span className="it text-paper">tradycji.</span>
                <br />
                <span className="text-red">Zbudowaliśmy</span>{" "}
                <span className="it">własną.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
                Stretch Sufit to polski filar grupy{" "}
                <strong className="text-white">STRETCH®</strong> —
                belgijskiej firmy założonej w 2018 roku przez Michaela
                Nicasensa. Nie franczyza, nie pośrednictwo. Własny system,
                własna produkcja, wyszkolone ekipy.
              </p>
            </FadeIn>
          </Container>
        </section>

        {/* ════════ Origin — paper section ════════ */}
        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow tone="on-paper">Rozdział 01 · Antwerpia</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle tone="on-paper" className="mt-5">
                    Tam, gdzie wszystko się{" "}
                    <span className="it">zaczęło.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <figure className="mt-10 overflow-hidden rounded">
                    <div className="relative aspect-[4/5] w-full bg-bg-soft">
                      <Image
                        src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80"
                        alt="Michael Nicasens, założyciel STRETCH® Group"
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 font-serif text-sm italic text-bg/55">
                      — Michael Nicasens, założyciel STRETCH® Group. Antwerpia, 2018.
                    </figcaption>
                  </figure>
                </FadeIn>
              </div>

              <div className="md:col-span-7 md:pl-8">
                <FadeIn delay={120}>
                  <div className="space-y-6 text-[17px] leading-[1.7] text-bg/80 md:text-lg">
                    <p>
                      Michael Nicasens dorastał w firmie wnętrzarskiej swojego
                      ojca. To tam, między rolkami tkanin a próbnikami kolorów,
                      pierwszy raz zobaczył sufity napinane — kategorię
                      technicznie doskonałą, ale handlowo rozproszoną.
                    </p>
                    <p>
                      Producenci sprzedawali materiały. Monterzy montowali. Ale
                      nikt nie traktował tego jak <span className="font-serif italic">systemu</span> —
                      ze spójnym standardem, własnym profilem aluminiowym,
                      protokołem montażu i marką, która coś znaczy.
                    </p>
                    <p className="border-l-2 border-red pl-5 font-serif text-xl italic text-bg">
                      „Widziałem rynek, na którym wszyscy robili to samo —
                      i nikt nie robił tego naprawdę dobrze. Zbudowałem to,
                      czego brakowało."
                    </p>
                    <p>
                      W 2018 roku, w okolicach Antwerpii, powstał STRETCH®.
                      Od pierwszego dnia z jednym celem: zbudować system, który
                      można licencjonować globalnie — nie sieć franczyz, ale
                      przeszkolonych partnerów montujących tę samą technologię
                      według tego samego standardu, niezależnie od kraju.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ System ════════ */}
        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow>Rozdział 02 · System</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Nie usługa.{" "}
                    <span className="it text-paper">System.</span>
                  </SectionTitle>
                </FadeIn>
              </div>
              <div className="md:col-span-7">
                <FadeIn delay={120}>
                  <p className="text-[17px] leading-[1.7] text-white/75 md:text-lg">
                    STRETCH® to nie pojedynczy produkt. To zamknięty ekosystem:
                    autorskie profile aluminiowe, kalibrowane membrany PVC i
                    poliestrowe, narzędzia montażowe i protokół szkoleniowy.
                    Każdy element zaprojektowany tak, aby pracował razem —
                    i tylko razem.
                  </p>
                </FadeIn>

                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                  {[
                    {
                      label: "Profil",
                      title: "Autorskie aluminium",
                      body: "Własne profile montażowe, niedostępne dla generycznych instalatorów. Produkowane w Belgii.",
                    },
                    {
                      label: "Membrana",
                      title: "Kalibrowane materiały",
                      body: "PVC do 5,70 m i poliester do 5,15 m bez szwów. Materiały klasy A2 (akustyka) i 100% recykling.",
                    },
                    {
                      label: "Protokół",
                      title: "Jeden standard",
                      body: "Każda ekipa szkolona w tym samym protokole — Brussels, Częstochowa, Dubaj, czy Toronto.",
                    },
                    {
                      label: "Gwarancja",
                      title: "15 lat",
                      body: "Materiałowa gwarancja producenta. Sieciowa odpowiedzialność grupy, nie pojedynczego instalatora.",
                    },
                  ].map((card, i) => (
                    <FadeIn delay={140 + i * 60} key={card.label}>
                      <div className="h-full rounded border border-white/10 bg-bg-card/60 p-6 transition-colors hover:border-white/20">
                        <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-red">
                          {card.label}
                        </div>
                        <div className="mt-3 font-display text-lg font-semibold text-white">
                          {card.title}
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-white/60">
                          {card.body}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ Polish chapter — paper ════════ */}
        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-7 md:order-1">
                <FadeIn delay={120}>
                  <div className="space-y-6 text-[17px] leading-[1.7] text-bg/80 md:text-lg">
                    <p>
                      Do 2024 roku STRETCH® rósł międzynarodowo — instalując
                      przez przeszkolone ekipy w kilkunastu krajach. Brakowało
                      jednak własnej, kontrolowanej bazy produkcyjnej w Europie
                      Środkowej. Polska była strategicznym wyborem.
                    </p>
                    <p>
                      Decyzja: zamiast zakładać operację od zera, znaleźć
                      najlepszą firmę, jaka już istnieje na rynku — i połączyć
                      siły. Wybór padł na{" "}
                      <strong className="text-bg">Alto Design</strong> —
                      częstochowską firmę z reputacją precyzji w produkcji i
                      montażu sufitów napinanych.
                    </p>
                    <p className="border-l-2 border-red pl-5 font-serif text-xl italic text-bg">
                      „Polska łączy autentyczną kulturę rzemiosła z bliskością
                      europejskich materiałów. To jest miejsce, w którym powstaje
                      lepszy produkt, w bardziej zrównoważony sposób."
                    </p>
                    <p>
                      W 2024 roku STRETCH® Group nabył Alto Design — nie po to,
                      by go wchłonąć, ale by uczynić go produkcyjnym kręgosłupem
                      całej grupy. Po rebrandingu firma stała się{" "}
                      <strong className="text-bg">Stretch Sufit</strong> —
                      jednocześnie polski wykonawca i międzynarodowe centrum
                      produkcyjne.
                    </p>
                  </div>
                </FadeIn>
              </div>

              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow tone="on-paper">Rozdział 03 · Polska</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle tone="on-paper" className="mt-5">
                    Dlaczego{" "}
                    <span className="it">Częstochowa.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <figure className="mt-10 overflow-hidden rounded">
                    <div className="relative aspect-[4/5] w-full bg-bg-soft">
                      <Image
                        src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80"
                        alt="Hala produkcyjna Stretch Sufit w Częstochowie"
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 font-serif text-sm italic text-bg/55">
                      — Hala produkcyjna. Częstochowa, ul. Legionów 59.
                    </figcaption>
                  </figure>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ Stats strip ════════ */}
        <section className="border-y border-white/10 bg-bg py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {[
                { value: "13+", label: "krajów", italic: "globalnie" },
                { value: "2018", label: "Belgia", italic: "założenie STRETCH®" },
                { value: "2024", label: "Polska", italic: "Stretch Sufit dołącza" },
                { value: "1", label: "system", italic: "jeden standard" },
              ].map((stat, i) => (
                <FadeIn delay={i * 80} key={stat.label}>
                  <div>
                    <div className="font-display text-[clamp(2.5rem,5vw,4rem)] font-semibold leading-none tracking-[-0.03em] text-white">
                      {stat.value}
                    </div>
                    <div className="mt-3 text-sm text-white/65">
                      {stat.label} <span className="it text-white/45">— {stat.italic}</span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        {/* ════════ Global reach ════════ */}
        <section className="bg-bg-soft py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn>
                <Eyebrow>Rozdział 04 · Zasięg</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-white">
                  Polska to nasza baza.{" "}
                  <span className="it text-paper">Świat to nasz rynek.</span>
                </SectionTitle>
              </FadeIn>
              <FadeIn delay={140}>
                <p className="mt-6 text-lg leading-relaxed text-white/65">
                  Stretch Sufit obsługuje rynek polski, a jednocześnie zasila
                  produkcyjnie sieć STRETCH® w ponad tuzin krajów na czterech
                  kontynentach.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={200}>
              <div className="mx-auto mt-16 flex max-w-5xl flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base md:text-lg">
                {countries.map((country, i) => (
                  <span key={country} className="flex items-center gap-6">
                    <span className="font-display tracking-[-0.01em] text-white/85">
                      {country}
                    </span>
                    {i < countries.length - 1 && (
                      <span className="text-red">·</span>
                    )}
                  </span>
                ))}
              </div>
            </FadeIn>
          </Container>
        </section>

        {/* ════════ What's next — Re-Sound ════════ */}
        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-end gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-7">
                <FadeIn>
                  <Eyebrow tone="on-paper">Rozdział 05 · Następny krok</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle tone="on-paper" className="mt-5">
                    Akustyka. Design.{" "}
                    <span className="it">Re-Sound.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-8 text-[17px] leading-[1.7] text-bg/75 md:text-lg">
                    W 2026 roku STRETCH® Group nabył belgijską markę{" "}
                    <strong className="text-bg">Re-Sound</strong> — specjalistę
                    od wysokiej klasy paneli akustycznych. Dla Stretch Sufit
                    oznacza to katalog rozszerzony o produkty designerskie z
                    realnymi właściwościami akustycznymi: redukcję pogłosu do
                    75% bez kompromisu w estetyce.
                  </p>
                </FadeIn>
                <FadeIn delay={200}>
                  <p className="mt-6 text-[17px] leading-[1.7] text-bg/75 md:text-lg">
                    Polska jest dziś najszybciej rosnącym rynkiem sufitów
                    napinanych w Europie. To nie zbieg okoliczności, że
                    inwestujemy tutaj najwięcej — i że właśnie tutaj uruchamiamy
                    nową generację produktów akustycznych.
                  </p>
                </FadeIn>
              </div>
              <div className="md:col-span-5">
                <FadeIn delay={160}>
                  <div className="rounded bg-bg p-8 text-white md:p-10">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                      ● W przygotowaniu
                    </div>
                    <div className="mt-5 font-display text-2xl font-semibold leading-tight text-white">
                      Stretch Sufit{" "}
                      <span className="it text-paper">×</span> Re-Sound
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-white/65">
                      Nowa linia paneli akustycznych integrujących się z sufitem
                      napinanym. Premiera w katalogu Stretch Sufit — Q3 2026.
                    </p>
                    <div className="mt-6 border-t border-white/10 pt-5">
                      <div className="font-serif text-sm italic text-white/55">
                        „Sufit, który wygląda jak sztuka.{" "}
                        <span className="text-white/85">I brzmi jak nagrane studio."</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ Manifesto ════════ */}
        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-4xl">
              <FadeIn>
                <Eyebrow>Manifest</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                  Trzy rzeczy, których{" "}
                  <span className="it text-red">nie</span>{" "}
                  robimy.
                </h2>
              </FadeIn>

              <div className="mt-16 space-y-12 md:space-y-16">
                {[
                  {
                    no: "Nie franczyza.",
                    yes: 'Każdy montaż wykonuje przeszkolona ekipa STRETCH®. Bez podwykonawców, bez ekip „z polecenia". Jedna firma, jedna gwarancja.',
                  },
                  {
                    no: "Nie pośrednictwo.",
                    yes: 'Pracujemy z materiałem własnej produkcji — profilami i membranami STRETCH®. Bez generycznych zamienników, bez importu „okazji".',
                  },
                  {
                    no: "Nie improwizacja.",
                    yes: "Każdy montaż według tego samego protokołu, używając tych samych narzędzi. Belgia, Polska, USA, Indie — ten sam standard.",
                  },
                ].map((item, i) => (
                  <FadeIn delay={140 + i * 80} key={item.no}>
                    <div className="grid gap-6 md:grid-cols-12 md:gap-8">
                      <div className="md:col-span-4">
                        <div className="font-display text-2xl font-semibold tracking-[-0.02em] text-red md:text-3xl">
                          <span className="it">{item.no}</span>
                        </div>
                      </div>
                      <div className="md:col-span-8">
                        <p className="text-[17px] leading-[1.65] text-white/75 md:text-lg">
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

        {/* ════════ CTA ════════ */}
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
              <Eyebrow tone="on-dark">Rozmawiajmy</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Belgia projektuje.{" "}
                <span className="it">Polska produkuje.</span>
                <br />
                <span className="text-white/85">Ty</span>{" "}
                <span className="it">— zyskujesz.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Zamów bezpłatny pomiar lub po prostu zadzwoń. Oddzwonimy w
                ciągu 24 godzin.
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
