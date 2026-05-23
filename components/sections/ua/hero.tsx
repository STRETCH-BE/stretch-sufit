/**
 * Hero — Ukrainian.
 * File path: /components/sections/ua/hero.tsx
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
          <div>
            <FadeIn>
              <div className="mb-8 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 px-3.5 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-white/55">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-red opacity-60" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-red" />
                </span>
                Частина бельгійської Stretchgroup · 🇧🇪 🇵🇱
              </div>
            </FadeIn>

            <FadeIn delay={80}>
              <h1 className="mb-6 font-display text-[clamp(56px,8vw,132px)] font-semibold leading-[0.92] tracking-[-0.04em] text-white">
                Нова стеля
                <br />
                за <span className="text-red">один день.</span>
                <br />
                <span className="it">Без пилу.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={160}>
              <p className="mb-10 max-w-[480px] text-[18px] leading-[1.55] text-white/55">
                Натяжні стелі з нашої ПВХ-фабрики в Польщі та поліестерової фабрики в Бельгії.{" "}
                <strong className="font-semibold text-white">
                  Stretch Sufit
                </strong>{" "}
                монтує чисто, швидко й без оздоблювальних робіт. Без штукатурки, фарбування й пилу.
              </p>
            </FadeIn>

            <FadeIn delay={240}>
              <div className="flex flex-wrap items-center gap-3.5">
                <TrackedCTA
                  event="cta_click"
                  props={{ location: "hero", label: "free_quote" }}
                  href="/ua#cta"
                  className="group/btn inline-flex items-center gap-2.5 rounded-full border border-red bg-red px-[26px] py-4 text-sm font-semibold text-white transition-all duration-[250ms] hover:-translate-y-px hover:border-red-deep hover:bg-red-deep"
                >
                  Замовити безкоштовний замір
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-[250ms] group-hover/btn:translate-x-1"
                  >
                    →
                  </span>
                </TrackedCTA>

                <TrackedCTA
                  event="cta_click"
                  props={{ location: "hero", label: "solutions" }}
                  href="/ua#solutions"
                  className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-transparent px-[26px] py-4 text-sm font-semibold text-white transition-all duration-[250ms] hover:-translate-y-px hover:bg-white hover:text-bg"
                >
                  Подивитися рішення
                </TrackedCTA>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={120}>
            <div className="flex flex-col gap-5 pb-5">
              <figure className="relative isolate aspect-[4/3] overflow-hidden rounded bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]">
                <Image
                  src="/images/hero/salon-warszawa.jpg"
                  alt="Натяжна стеля у сучасній вітальні — проєкт у Варшаві"
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
                  <span className="text-white/60">— </span>Проєкт, Варшава
                </figcaption>
              </figure>

              <div className="grid grid-cols-2 gap-8 border-t border-white/8 pt-6">
                <div>
                  <div className="font-display text-[56px] font-medium leading-none tracking-[-0.03em] text-white">
                    6,50
                    <sup className="ml-0.5 text-2xl text-red">м</sup>
                  </div>
                  <div className="mt-2 text-[13px] leading-[1.4] text-white/55">
                    Безшовно — найширша ПВХ мембрана на ринку
                  </div>
                </div>
                <div>
                  <div className="font-display text-[56px] font-medium leading-none tracking-[-0.03em] text-white">
                    15
                  </div>
                  <div className="mt-2 text-[13px] leading-[1.4] text-white/55">
                    років гарантії — 15 років ПВХ · 10 років поліестер
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
