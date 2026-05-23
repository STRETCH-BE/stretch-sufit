/**
 * Cities hub page — Ukrainian. /uk/natiazhni-steli
 * File path: /app/uk/natiazhni-steli/page.tsx
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { Nav } from "@/components/sections/uk/nav";
import { Footer } from "@/components/sections/uk/footer";
import { MobileStickyCTA } from "@/components/sections/uk/mobile-sticky-cta";

import { cities } from "@/content/uk/cities";
import { citiesFull } from "@/content/uk/cities-full";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://stretch-sufit.vercel.app";

export const metadata: Metadata = {
  title: "Натяжні стелі — 17 міст у Польщі | Stretch Sufit",
  description:
    "Натяжні стелі у 17 польських містах — Варшава, Краків, Вроцлав, Познань, Ґданськ, Лодзь, Катовіце та інші. ПВХ виробляється в Польщі, поліестер з Бельгії. Монтаж за 1 день, до 15 років гарантії.",
  alternates: { canonical: "/uk/natiazhni-steli" },
  openGraph: {
    title: "Натяжні стелі у 17 польських містах | Stretch Sufit",
    description:
      "Частина бельгійської Stretchgroup. ПВХ виробляється в Польщі, поліестер у Бельгії. Монтаж по всій Польщі.",
    type: "website",
    url: `${BASE_URL}/uk/natiazhni-steli`,
  },
};

const featuredSlugs = new Set(citiesFull.map((c) => c.slug));

export default function CitiesHubPageUk() {
  return (
    <>
      <Nav />

      <main>
        <nav aria-label="breadcrumb" className="border-b border-white/5 bg-bg pb-4 pt-28 md:pt-32">
          <Container>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
              <li><Link href="/uk" className="hover:text-white">Головна</Link></li>
              <li aria-hidden="true">·</li>
              <li className="text-white" aria-current="page">Натяжні стелі — міста</li>
            </ol>
          </Container>
        </nav>

        <section className="relative isolate overflow-hidden bg-bg pb-20 pt-12 md:pb-28 md:pt-16">
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
              <FadeIn><Eyebrow>17 міст · одна команда · один стандарт</Eyebrow></FadeIn>
              <FadeIn delay={80}>
                <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                  Натяжні стелі{" "}
                  <span className="it text-paper">по всій Польщі.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={160}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                  Базуючись у Ченстохові, ми обслуговуємо 17 польських міст безпосередньо нашими монтажними бригадами. Для більших проєктів (&gt;200 м²) виїжджаємо в будь-яку точку Польщі. Безкоштовний замір, без доплат за виїзд — де б ви не були.
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <FadeIn><Eyebrow tone="on-paper">Виділені міста</Eyebrow></FadeIn>
            <FadeIn delay={80}>
              <SectionTitle className="mt-5 text-bg">
                Детальні сторінки —{" "}
                <span className="it">топ-3.</span>
              </SectionTitle>
            </FadeIn>

            <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
              {citiesFull.map((city, i) => (
                <FadeIn key={city.slug} delay={i * 80}>
                  <Link
                    href={`/uk/natiazhni-steli/${city.slug}`}
                    className="group block rounded border border-bg/10 bg-paper-2 p-8 transition-all hover:border-red hover:bg-white"
                  >
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                      {city.region}
                    </div>
                    <div className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-bg">
                      {city.name}
                    </div>
                    <p className="mt-3 text-sm text-bg/60">
                      {city.populationDisplay} · {city.distanceFromHq} км від бази
                    </p>
                    <p className="mt-5 text-[15px] leading-relaxed text-bg/75">
                      {city.intro.split(".")[0]}.
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-red">
                      Читати далі
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <FadeIn><Eyebrow>Усі міста обслуговування</Eyebrow></FadeIn>
            <FadeIn delay={80}>
              <SectionTitle className="mt-5 text-white">
                Усі 17 міст,{" "}
                <span className="it text-paper">які ми обслуговуємо.</span>
              </SectionTitle>
            </FadeIn>

            <FadeIn delay={140}>
              <ul className="mt-12 grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4">
                {cities.map((city) => {
                  const hasFullPage = featuredSlugs.has(city.slug);
                  return (
                    <li key={city.slug}>
                      <Link
                        href={
                          hasFullPage
                            ? `/uk/natiazhni-steli/${city.slug}`
                            : "/uk/kontakty"
                        }
                        className="group block rounded border border-white/10 p-4 transition-colors hover:border-red hover:bg-bg-card"
                      >
                        <span className="block text-[15px] font-medium text-white">
                          {city.name}
                          {hasFullPage && (
                            <span className="ml-2 inline-flex h-1.5 w-1.5 rounded-full bg-red" aria-label="Детальна сторінка" />
                          )}
                        </span>
                        <span className="mt-0.5 block text-[11px] uppercase tracking-[0.1em] text-white/55">
                          {city.region}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mt-8 max-w-2xl text-sm text-white/55">
                Міста, позначені <span className="inline-flex h-1.5 w-1.5 rounded-full bg-red align-middle" />, мають окремі сторінки з локальною інформацією. Для інших міст звертайтеся напряму для безкоштовного кошторису.
              </p>
            </FadeIn>
          </Container>
        </section>

        <section className="relative isolate overflow-hidden bg-red py-20 text-white md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Вашого міста немає у списку?</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
                Зателефонуйте —{" "}
                <span className="it">для більших проєктів обслуговуємо всю Польщу.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Для проєктів понад 200 м² монтуємо будь-де в Польщі. Безкоштовна телефонна консультація, без зобов'язань.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a href="tel:+48455444475" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]">
                  +48 455 444 475
                </a>
                <Link href="/uk#cta" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10">
                  Замовити замір →
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
