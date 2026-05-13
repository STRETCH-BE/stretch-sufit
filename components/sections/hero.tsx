/**
 * Hero section.
 * File path: /components/sections/hero.tsx
 *
 * Server Component — content is fully static. The two CTAs use TrackedCTA so
 * the click handlers are isolated to small client wrappers, keeping the bulk
 * of the section in the server tree.
 *
 * SEO/GEO note: subhead mentions both the brand name and the parent brand so
 * AI engines can link the entity to "STRETCH®". This is intentional.
 *
 * Performance: hero image is `priority` (LCP candidate). All others lazy.
 */

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { TrackedCTA } from "@/components/ui/tracked-cta";
import { FadeIn } from "@/components/ui/fade-in";

export function Hero() {
  return (
    <header
      id="main"
      className="relative isolate overflow-hidden bg-bg pt-[140px] pb-20 md:min-h-screen"
    >
      {/* Ambient radial gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 30%, rgba(225,16,26,0.18), transparent 60%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(225,16,26,0.08), transparent 60%)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid items-end gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Left: copy block */}
          <div>
            <FadeIn>
              <div className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 px-3.5 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-white/55">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-red opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-red" />
                </span>
                Część grupy STRETCH · Belgia 🇧🇪
              </div>
            </FadeIn>

            <FadeIn delay={80}>
              <h1 className="mb-6 font-display text-[clamp(56px,8vw,132px)] font-semibold leading-[0.92] tracking-[-0.04em] text-white">
                Nowy sufit
                <br />w <span className="text-red">1 dzień.</span>
                <br />
                <span className="it">Bez kurzu.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={160}>
              <p className="mb-10 max-w-[480px] text-[18px] leading-[1.55] text-white/55">
                Belgijska technologia sufitów napinanych — teraz w Polsce.{" "}
                <strong className="font-semibold text-white">
                  Sufity napinane Stretch
                </strong>{" "}
                instalowane czysto, szybko i bez prac wykończeniowych. Koniec
                z malowaniem, gładzią i pyłem.
              </p>
            </FadeIn>

            <FadeIn delay={240}>
              <div className="flex flex-wrap items-center gap-3.5">
                <TrackedCTA
                  event="cta_click"
                  props={{ location: "hero", label: "pomiar" }}
                  href="/#cta"
                  className="group/btn inline-flex items-center gap-2.5 rounded-full border border-red bg-red px-[26px] py-4 text-sm font-semibold text-white transition-all duration-[250ms] hover:-translate-y-px hover:border-red-deep hover:bg-red-deep"
                >
                  Zamów bezpłatny pomiar
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-[250ms] group-hover/btn:translate-x-1"
                  >
                    →
                  </span>
                </TrackedCTA>

                <TrackedCTA
                  event="cta_click"
                  props={{ location: "hero", label: "rozwiazania" }}
                  href="/#solutions"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-transparent px-[26px] py-4 text-sm font-semibold text-white transition-all duration-[250ms] hover:-translate-y-px hover:bg-white hover:text-bg"
                >
                  Zobacz rozwiązania
                </TrackedCTA>
              </div>
            </FadeIn>
          </div>

          {/* Right: hero image + meta stats */}
          <FadeIn delay={120}>
            <div className="flex flex-col gap-5 pb-5">
              <figure className="relative isolate aspect-[4/3] overflow-hidden rounded bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
                <Image
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80"
                  alt="Sufit napinany w nowoczesnym salonie — realizacja Warszawa"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                />
                <figcaption className="absolute bottom-4 left-4 z-10 font-serif text-sm italic text-white">
                  <span className="text-white/60">— </span>Realizacja, Warszawa
                </figcaption>
              </figure>

              <div className="grid grid-cols-2 gap-8 border-t border-white/8 pt-6">
                <div>
                  <div className="font-display text-[56px] font-medium leading-none tracking-[-0.03em] text-white">
                    23
                    <sup className="ml-0.5 text-2xl text-red">+</sup>
                  </div>
                  <div className="mt-2 text-[13px] leading-[1.4] text-white/55">
                    lat doświadczenia w produkcji sufitów napinanych
                  </div>
                </div>
                <div>
                  <div className="font-display text-[56px] font-medium leading-none tracking-[-0.03em] text-white">
                    15
                  </div>
                  <div className="mt-2 text-[13px] leading-[1.4] text-white/55">
                    lat gwarancji na każdą realizację
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </header>
  );
}
