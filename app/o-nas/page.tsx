/**
 * About page — /o-nas
 * File path: /app/o-nas/page.tsx
 *
 * Editorial dual-origin narrative. Tells the real story:
 *
 *   2016 · Częstochowa — Roman Pliuta founds Alto Design (PVC stretch ceilings)
 *   2018 · Antwerpia    — Michael Nicasens founds Stretch Productions BV (polyester)
 *   2024 · Akwizycja    — Stretchgroup (Nicasens) acquires Alto Design from Pliuta
 *                         → rebranded operationally as Stretch Sufit
 *   2026 · Re-Sound     — group expands catalogue with acoustic panels
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
  title: "O nas — Dwie fabryki, jedna grupa | Stretch Sufit",
  description:
    "Stretch Sufit jest częścią belgijskiej Stretchgroup. PVC produkujemy w fabryce Alto Design w Polsce (od 2016), polyester w Stretch Productions BV w Belgii (od 2018). W 2024 grupa nabyła Alto Design — od tej pory działa pod marką Stretch Sufit.",
  alternates: { canonical: "/o-nas" },
  openGraph: {
    title: "O nas — Stretch Sufit",
    description:
      "Dwie fabryki, jedna grupa. PVC z Polski, polyester z Belgii. Historia Stretchgroup, Alto Design i Stretch Productions.",
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
              <Eyebrow>Dwie fabryki · jedna grupa · jeden standard</Eyebrow>
            </FadeIn>
            <FadeIn delay={80}>
              <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                Belgia produkuje{" "}
                <span className="it text-paper">polyester.</span>
                <br />
                <span className="text-red">Polska</span>{" "}
                <span className="it">produkuje PVC.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={160}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65 md:text-xl">
                Stretch Sufit jest częścią belgijskiej{" "}
                <strong className="text-white">Stretchgroup</strong> — holdingu,
                który łączy dwie fabryki sufitów napinanych: Stretch Productions
                BV w Belgii i Alto Design w Polsce. Nie franczyza, nie
                pośrednictwo. Własna produkcja po obu stronach, wyszkolone ekipy
                montażowe na miejscu.
              </p>
            </FadeIn>
          </Container>
        </section>

        {/* ════════ Origin — Polish chapter on paper ════════ */}
        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow tone="on-paper">Rozdział 01 · Częstochowa, 2016</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Polska produkcja{" "}
                    <span className="it">zaczyna się tutaj.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <figure className="mt-10 overflow-hidden rounded">
                    <div className="relative aspect-[4/5] w-full bg-bg-soft">
                      <Image
                        src="images/about/hala-czestochowa.jpg"
                        alt="Hala produkcyjna Alto Design (Stretch Sufit) w Częstochowie"
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 font-serif text-sm italic text-bg/55">
                      — Hala produkcyjna Alto Design. Częstochowa, ul. Legionów 59.
                    </figcaption>
                  </figure>
                </FadeIn>
              </div>

              <div className="md:col-span-7 md:pl-8">
                <FadeIn delay={120}>
                  <div className="space-y-6 text-[17px] leading-[1.7] text-bg/80 md:text-lg">
                    <p>
                      W 2016 roku{" "}
                      <strong className="text-bg">Roman Pliuta</strong> założył
                      w Częstochowie <strong className="text-bg">Alto Design</strong>{" "}
                      — polskiego producenta sufitów napinanych PVC. Cel był
                      konkretny: produkować membranę PVC najwyższej klasy na
                      miejscu, w Polsce, z kontrolą każdego etapu — od kalibracji
                      koloru po obróbkę krawędzi.
                    </p>
                    <p>
                      Przez kolejne osiem lat firma zbudowała reputację
                      precyzyjnego producenta — szanowanego w polskiej branży
                      za jakość wykonania i bezkompromisowe podejście do
                      detali. Wśród sufitowych instalatorów krążyła wtedy
                      prosta zasada: <span className="font-serif italic">
                      „jeśli chcesz dobre PVC, dzwonisz do Alto Design".
                      </span>
                    </p>
                    <p className="border-l-2 border-red pl-5 font-serif text-xl italic text-bg">
                      „Wszystko, co tu zrobiliśmy — fabrykę, ekipę, standard —
                      zbudowaliśmy własnymi rękami. Polski PVC nie jest gorszy
                      od zachodniego. Po prostu trzeba umieć go zrobić."
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ Origin — Belgian chapter ════════ */}
        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-7 md:order-2 md:pl-8">
                <FadeIn delay={120}>
                  <div className="space-y-6 text-[17px] leading-[1.7] text-white/75 md:text-lg">
                    <p>
                      Dwa lata później, w 2018 roku, w okolicach Antwerpii{" "}
                      <strong className="text-white">Michael Nicasens</strong>{" "}
                      założył <strong className="text-white">Stretch
                      Productions BV</strong> — belgijskiego producenta sufitów
                      napinanych z tkanej membrany poliestrowej. Polyester z
                      powłoką poliuretanową: materiał technicznie inny od PVC,
                      kierowany do bardziej wymagającego segmentu rynku
                      premium.
                    </p>
                    <p className="border-l-2 border-red pl-5 font-serif text-xl italic text-white/85">
                      „Chciałem zbudować system, który można licencjonować
                      globalnie — nie sieć franczyz, ale przeszkolonych
                      partnerów montujących tę samą technologię według tego
                      samego standardu, niezależnie od kraju."
                    </p>
                    <p>
                      Wokół Stretch Productions wyrosła{" "}
                      <strong className="text-white">Stretchgroup</strong> —
                      holding, w którym Nicasens skupił produkcję polyestrową,
                      profile aluminiowe i protokół montażowy. W kilka lat
                      grupa rozszerzyła się na kilkanaście rynków przez sieć
                      przeszkolonych partnerów montażowych.
                    </p>
                  </div>
                </FadeIn>
              </div>

              <div className="md:col-span-5 md:order-1">
                <FadeIn>
                  <Eyebrow>Rozdział 02 · Antwerpia, 2018</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Belgijski polyester{" "}
                    <span className="it text-paper">i system.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <figure className="mt-10 overflow-hidden rounded">
                    <div className="relative aspect-[4/5] w-full bg-bg-soft">
                      <Image
                        src="images/about/michael-nicasens.jpg"
                        alt="Michael Nicasens, założyciel Stretchgroup"
                        fill
                        sizes="(min-width: 768px) 40vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 font-serif text-sm italic text-white/55">
                      — Michael Nicasens, założyciel Stretchgroup. Antwerpia, 2018.
                    </figcaption>
                  </figure>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ The merger — 2024 ════════ */}
        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid items-start gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow tone="on-paper">Rozdział 03 · Akwizycja, 2024</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Dwie fabryki —{" "}
                    <span className="it">jedna grupa.</span>
                  </SectionTitle>
                </FadeIn>
              </div>

              <div className="md:col-span-7 md:pl-8">
                <FadeIn delay={120}>
                  <div className="space-y-6 text-[17px] leading-[1.7] text-bg/80 md:text-lg">
                    <p>
                      Do 2024 roku Stretchgroup produkował polyester w Belgii
                      i instalował przez przeszkolone ekipy w kilkunastu
                      krajach. Brakowało jednak własnej, w pełni kontrolowanej
                      bazy produkcyjnej PVC w Europie Środkowej. Decyzja:
                      zamiast budować fabrykę od zera, znaleźć najlepszą firmę,
                      jaka już istnieje na rynku — i połączyć siły.
                    </p>
                    <p>
                      W 2024 roku Michael Nicasens nabył od Romana Pliuty{" "}
                      <strong className="text-bg">Alto Design</strong> —
                      częstochowską firmę z reputacją precyzji w produkcji
                      sufitów napinanych PVC. Alto Design dołączył do
                      Stretchgroup jako pełnoprawna spółka zależna, zachowując
                      polską załogę, polską hałę i polski standard wykonania.
                    </p>
                    <p className="border-l-2 border-red pl-5 font-serif text-xl italic text-bg">
                      „Polska łączy autentyczną kulturę rzemiosła z bliskością
                      europejskich materiałów. To jest miejsce, w którym
                      powstaje lepszy PVC, w bardziej zrównoważony sposób."
                    </p>
                    <p>
                      Po rebrandingu operacyjnym Alto Design publicznie działa
                      pod marką <strong className="text-bg">Stretch Sufit</strong>{" "}
                      — jednocześnie polski producent PVC, instalator w całej
                      Polsce i centrum produkcyjne PVC dla całej grupy.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* ════════ System cards ════════ */}
        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn>
                  <Eyebrow>Rozdział 04 · System</Eyebrow>
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
                    Stretch to nie pojedynczy produkt. To zamknięty ekosystem:
                    autorskie profile aluminiowe, kalibrowane membrany PVC
                    (Polska) i polyester (Belgia), narzędzia montażowe i
                    protokół szkoleniowy. Każdy element zaprojektowany tak, aby
                    pracował razem — i tylko razem.
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
                      title: "Dwie fabryki",
                      body: "PVC do 6,50 m z Alto Design (Polska), polyester do 5,15 m ze Stretch Productions (Belgia). Materiały klasy A2 (akustyka) i 100% recykling.",
                    },
                    {
                      label: "Protokół",
                      title: "Jeden standard",
                      body: "Każda ekipa szkolona w tym samym protokole — Brussels, Częstochowa, Dubaj, czy Toronto.",
                    },
                    {
                      label: "Gwarancja",
                      title: "Do 15 lat",
                      body: "15 lat na PVC, 10 lat na polyester. Sieciowa odpowiedzialność grupy, nie pojedynczego instalatora.",
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

        {/* ════════ Stats strip ════════ */}
        <section className="border-y border-white/10 bg-bg py-16 md:py-20">
          <Container>
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {[
                { value: "2016", label: "Polska", italic: "Alto Design — start PVC" },
                { value: "2018", label: "Belgia", italic: "Stretch Productions — start polyester" },
                { value: "2024", label: "Grupa", italic: "Alto Design dołącza do Stretchgroup" },
                { value: "13+", label: "krajów", italic: "globalnie" },
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
                <Eyebrow>Rozdział 05 · Zasięg</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-white">
                  Polska to nasza fabryka PVC.{" "}
                  <span className="it text-paper">Świat to nasz rynek.</span>
                </SectionTitle>
              </FadeIn>
              <FadeIn delay={140}>
                <p className="mt-6 text-lg leading-relaxed text-white/65">
                  Stretch Sufit obsługuje rynek polski, a jednocześnie zasila
                  produkcyjnie sieć Stretchgroup w ponad tuzin krajów na
                  czterech kontynentach. Polyestrowa fabryka w Belgii i nasza
                  PVC w Polsce wspólnie zaopatrują instalatorów grupy.
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
                  <Eyebrow tone="on-paper">Rozdział 06 · Następny krok</Eyebrow>
                </FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Akustyka. Design.{" "}
                    <span className="it">Re-Sound.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-8 text-[17px] leading-[1.7] text-bg/75 md:text-lg">
                    <strong className="text-bg">Re-Sound BV</strong> to
                    trzecia spółka w portfelu Stretchgroup —
                    belgijski specjalista od wysokiej klasy paneli
                    akustycznych. Dla Stretch Sufit oznacza to katalog
                    rozszerzony o produkty designerskie z realnymi
                    właściwościami akustycznymi: redukcję pogłosu do 75% bez
                    kompromisu w estetyce.
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
                    yes: 'Każdy montaż wykonuje przeszkolona ekipa Stretch Sufit. Bez podwykonawców, bez ekip „z polecenia". Jedna firma, jedna gwarancja.',
                  },
                  {
                    no: "Nie pośrednictwo.",
                    yes: "Pracujemy z materiałem własnej produkcji — profilami z Belgii, PVC z naszej fabryki w Polsce, polyester ze Stretch Productions. Bez generycznych zamienników.",
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
                Polska produkuje PVC.{" "}
                <span className="it">Belgia produkuje polyester.</span>
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
