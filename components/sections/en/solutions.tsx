/**
 * Solutions — 6 product cards. English.
 * File path: /components/sections/en/solutions.tsx
 */

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { TrackedCTA } from "@/components/ui/tracked-cta";
import { products } from "@/content/en/products";
import type { Product } from "@/types";

export function Solutions() {
  return (
    <section
      id="solutions"
      aria-label="Solutions"
      className="bg-bg py-24 md:py-32"
    >
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-16">
          <FadeIn>
            <Eyebrow>Solutions</Eyebrow>
            <SectionTitle className="mt-5 text-white">
              Six ways
              <br />
              <span className="it">to make a new ceiling.</span>
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="max-w-md text-[16px] leading-[1.6] text-white/55">
              PVC seamless up to <strong className="font-semibold text-white">6.50 m</strong>{" "}
              — in matte, gloss, satin, sparkle, texture and more. Polyester for premium interiors. One system —{" "}
              <strong className="font-semibold text-white">Stretch</strong> — tailored to any room.
            </p>
          </FadeIn>
        </div>

        <ul className="grid grid-cols-1 gap-px bg-white/8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <FadeIn key={product.slug} as="li" delay={(i % 3) * 80}>
              <SolutionCard product={product} />
            </FadeIn>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function SolutionCard({ product }: { product: Product }) {
  const isFeatured = product.featured;
  const renderTitle = () => {
    if (!product.italicAccent) return product.title;
    const parts = product.title.split(product.italicAccent);
    return (
      <>
        {parts[0]}
        <span className="it">{product.italicAccent}</span>
        {parts[1] ?? ""}
      </>
    );
  };

  return (
    <article
      className={`group relative flex h-full min-h-[340px] flex-col p-7 transition-colors duration-300 md:p-9 ${
        isFeatured
          ? "bg-red text-white hover:bg-red-deep"
          : "bg-bg text-white hover:bg-bg-soft"
      }`}
    >
      <div
        className={`font-display text-[13px] font-semibold uppercase tracking-[0.12em] ${
          isFeatured ? "text-white/85" : "text-white/55"
        }`}
      >
        <span className={isFeatured ? "text-white" : "text-red"}>
          {product.number}
        </span>{" "}
        / {product.label}
      </div>

      <div
        className={`absolute right-7 top-7 size-20 overflow-hidden rounded-full border md:right-9 md:top-9 ${
          isFeatured ? "border-white/25" : "border-white/10 bg-[#222]"
        }`}
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          width={160}
          height={160}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <h3 className="mt-16 font-display text-[28px] font-medium leading-[1.05] tracking-[-0.02em] md:text-[32px]">
        {renderTitle()}
      </h3>

      <p
        className={`mt-3 text-sm leading-[1.5] ${
          isFeatured ? "text-white/85" : "text-white/55"
        }`}
      >
        {product.description}
      </p>

      <TrackedCTA
        event="product_view"
        props={{ product: product.slug }}
        href={`/en/solutions/${product.slug}`}
        className={`mt-auto inline-flex items-center gap-2 border-t pt-4 text-[13px] font-semibold ${
          isFeatured ? "border-white/25 text-white" : "border-white/10 text-white"
        }`}
      >
        {product.linkLabel}{" "}
        <span aria-hidden="true" className={isFeatured ? "text-white" : "text-red"}>
          →
        </span>
      </TrackedCTA>

      <TrackedCTA
        event="product_view"
        props={{ product: product.slug, source: "card" }}
        href={`/en/solutions/${product.slug}`}
        aria-label={`See: ${product.title}`}
        className="absolute inset-0"
        tabIndex={-1}
      >
        <span className="sr-only">{product.title}</span>
      </TrackedCTA>
    </article>
  );
}
