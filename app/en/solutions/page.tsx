/**
 * Products hub page — English. /en/solutions
 * File path: /app/en/solutions/page.tsx
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { Nav } from "@/components/sections/en/nav";
import { Footer } from "@/components/sections/en/footer";
import { MobileStickyCTA } from "@/components/sections/en/mobile-sticky-cta";

import { products } from "@/content/en/products";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://stretch-sufit.vercel.app";

export const metadata: Metadata = {
  title: "Solutions — 6 Stretch products | Stretch Sufit",
  description:
    "The full Stretch stretch-ceiling catalogue — PVC (manufactured in Poland, seamless up to 6.50 m), polyester (Belgium), acoustic, LED light, photo print, prefab. Part of Stretchgroup, up to 15 years warranty.",
  alternates: { canonical: "/en/solutions" },
  openGraph: {
    title: "6 Stretch products — full catalogue | Stretch Sufit",
    description:
      "Stretch ceilings in 6 variants. PVC from Poland, polyester from Belgium. Pick what fits your interior.",
    type: "website",
    url: `${BASE_URL}/en/solutions`,
  },
};

export default function ProductsHubPageEn() {
  return (
    <>
      <Nav />

      <main>
        <nav
          aria-label="breadcrumb"
          className="border-b border-white/5 bg-bg pb-4 pt-28 md:pt-32"
        >
          <Container>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
              <li>
                <Link href="/en" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">·</li>
              <li className="text-white" aria-current="page">
                Solutions
              </li>
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
              <FadeIn>
                <Eyebrow>6 products · one system</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                  Stretch ceilings{" "}
                  <span className="it text-paper">by Stretch.</span>
                  <br />
                  <span className="text-red">Full catalogue.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={160}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                  Six products, one system, identical installation standard. PVC manufactured in our factory in Poland, polyester in Belgium — both brands belong to Stretchgroup. Each solution optimised for a specific context: bathrooms, living rooms, offices, acoustics, backlighting, print.
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
                    href={`/en/solutions/${product.slug}`}
                    className={`group block overflow-hidden rounded transition-all hover:shadow-lg ${
                      product.featured
                        ? "bg-red text-white"
                        : "bg-paper-2 hover:bg-white"
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
                      <div
                        className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
                          product.featured ? "text-white/80" : "text-red"
                        }`}
                      >
                        {product.number} · {product.label}
                      </div>
                      <h3
                        className={`mt-4 font-display text-2xl font-semibold tracking-[-0.02em] md:text-3xl ${
                          product.featured ? "text-white" : "text-bg"
                        }`}
                      >
                        {product.italicAccent ? (
                          <>
                            {product.title.replace(product.italicAccent, "")}{" "}
                            <span className="it">{product.italicAccent}</span>
                          </>
                        ) : (
                          product.title
                        )}
                      </h3>
                      <p
                        className={`mt-3 font-serif italic ${
                          product.featured ? "text-white/85" : "text-bg/65"
                        }`}
                      >
                        {product.tagline}
                      </p>
                      <p
                        className={`mt-5 text-[15px] leading-relaxed ${
                          product.featured ? "text-white/85" : "text-bg/75"
                        }`}
                      >
                        {product.description}
                      </p>
                      <div
                        className={`mt-7 inline-flex items-center gap-2 font-display text-sm font-semibold ${
                          product.featured ? "text-white" : "text-red"
                        }`}
                      >
                        See details
                        <span
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-1"
                        >
                          →
                        </span>
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
              <Eyebrow tone="on-dark">Not sure which one?</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
                Call us —{" "}
                <span className="it">we'll advise in 10 minutes.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Free phone consultation. We'll help you choose a solution that fits your interior and budget.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="tel:+48730700333"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  +48 730 700 333
                </a>
                <Link
                  href="/en#cta"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Book a measurement →
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
