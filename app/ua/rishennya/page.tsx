/**
 * Products hub page — Ukrainian. /ua/rishennya
 * File path: /app/ua/rishennya/page.tsx
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/ui/fade-in";
import { Nav } from "@/components/sections/ua/nav";
import { Footer } from "@/components/sections/ua/footer";
import { MobileStickyCTA } from "@/components/sections/ua/mobile-sticky-cta";

import { products } from "@/content/ua/products";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://stretch-sufit.vercel.app";

export const metadata: Metadata = {
  title: "Рішення — 6 продуктів Stretch | Stretch Sufit",
  description:
    "Повний каталог натяжних стель Stretch — ПВХ (виробляється в Польщі, безшовно до 6,50 м), поліестер (Бельгія), акустичні, LED, фотодрук, префаб. Частина Stretchgroup, до 15 років гарантії.",
  alternates: { canonical: "/ua/rishennya" },
  openGraph: {
    title: "6 продуктів Stretch — повний каталог | Stretch Sufit",
    description:
      "Натяжні стелі у 6 варіантах. ПВХ з Польщі, поліестер з Бельгії. Оберіть те, що підходить вашому інтер'єру.",
    type: "website",
    url: `${BASE_URL}/ua/rishennya`,
  },
};

export default function ProductsHubPageUk() {
  return (
    <>
      <Nav />

      <main>
        <nav aria-label="breadcrumb" className="border-b border-white/5 bg-bg pb-4 pt-28 md:pt-32">
          <Container>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
              <li><Link href="/ua" className="hover:text-white">Головна</Link></li>
              <li aria-hidden="true">·</li>
              <li className="text-white" aria-current="page">Рішення</li>
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
              <FadeIn><Eyebrow>6 продуктів · одна система</Eyebrow></FadeIn>
              <FadeIn delay={80}>
                <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                  Натяжні стелі{" "}
                  <span className="it text-paper">від Stretch.</span>
                  <br />
                  <span className="text-red">Повний каталог.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={160}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                  Шість продуктів, одна система, ідентичний стандарт монтажу. ПВХ виробляється на нашій фабриці в Польщі, поліестер — у Бельгії. Обидва бренди належать Stretchgroup. Кожне рішення оптимізоване під конкретний контекст: ванні, вітальні, офіси, акустика, підсвічування, друк.
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid gap-8 md:grid-cols-2 md:gap-10">
              {products.map((product, i) => (
                <FadeIn delay={i * 80} key={product.slug}>
                  <Link
                    href={`/ua/rishennya/${product.slug}`}
                    className={`group block overflow-hidden rounded transition-all hover:shadow-lg ${
                      product.featured ? "bg-red text-white" : "bg-paper-2 hover:bg-white"
                    }`}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-bg-soft">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-8 md:p-10">
                      <div className={`font-mono text-[11px] uppercase tracking-[0.18em] ${product.featured ? "text-white/80" : "text-red"}`}>
                        {product.number} · {product.label}
                      </div>
                      <h3 className={`mt-4 font-display text-2xl font-semibold tracking-[-0.02em] md:text-3xl ${product.featured ? "text-white" : "text-bg"}`}>
                        {product.italicAccent ? (
                          <>
                            {product.title.replace(product.italicAccent, "")}{" "}
                            <span className="it">{product.italicAccent}</span>
                          </>
                        ) : (
                          product.title
                        )}
                      </h3>
                      <p className={`mt-3 font-serif italic ${product.featured ? "text-white/85" : "text-bg/65"}`}>
                        {product.tagline}
                      </p>
                      <p className={`mt-5 text-[15px] leading-relaxed ${product.featured ? "text-white/85" : "text-bg/75"}`}>
                        {product.description}
                      </p>
                      <div className={`mt-7 inline-flex items-center gap-2 font-display text-sm font-semibold ${product.featured ? "text-white" : "text-red"}`}>
                        Подивитися деталі
                        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <section className="relative isolate overflow-hidden bg-red py-20 text-white md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Не впевнені, який обрати?</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
                Зателефонуйте —{" "}
                <span className="it">порадимо за 10 хвилин.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Безкоштовна телефонна консультація. Допоможемо обрати рішення, яке підходить вашому інтер'єру та бюджету.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a href="tel:+48455444475" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]">
                  +48 455 444 475
                </a>
                <Link href="/ua#cta" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10">
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
