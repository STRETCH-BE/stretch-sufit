/**
 * Solutions — 6 product cards.
 * File path: /components/sections/solutions.tsx
 *
 * Reads from /content/products.ts. The product with `featured: true` renders
 * red-on-white to break the grid rhythm. Each card fires `product_view` on click.
 *
 * Each card links to /rozwiazania/[slug] — those inner pages don't exist yet,
 * they'll be built in a later prompt. The links are stubs for now.
 */

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { TrackedCTA } from "@/components/ui/tracked-cta";
import { products } from "@/content/products";
import type { Product } from "@/types";

export function Solutions() {
  return (
    <section
      id="solutions"
      aria-label="Rozwiązania"
      className="bg-bg py-24 md:py-32"
    >
      <Container>
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end md:gap-16">
          <FadeIn>
            <Eyebrow>Rozwiązania</Eyebrow>
            <SectionTitle className="mt-5 text-white">
              Sześć sposobów
              <br />
              <span className="it">na nowy sufit.</span>
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="max-w-md text-[16px] leading-[1.6] text-white/55">
              Od standardowego matowego sufitu w salonie po akustyczny sufit
              w sali konferencyjnej i podświetlany sufit w SPA — system{" "}
              <strong className="font-semibold text-white">Stretch</strong>{" "}
              dopasowuje się do każdego pomieszczenia.
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
  // Render title with optional italic accent
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
        href={`/rozwiazania/${product.slug}`}
        className={`mt-auto inline-flex items-center gap-2 border-t pt-4 text-[13px] font-semibold ${
          isFeatured ? "border-white/25 text-white" : "border-white/10 text-white"
        }`}
      >
        {product.linkLabel}{" "}
        <span aria-hidden="true" className={isFeatured ? "text-white" : "text-red"}>
          →
        </span>
      </TrackedCTA>

      {/* Whole card click target for better mobile UX */}
      <TrackedCTA
        event="product_view"
        props={{ product: product.slug, source: "card" }}
        href={`/rozwiazania/${product.slug}`}
        aria-label={`Zobacz: ${product.title}`}
        className="absolute inset-0"
        tabIndex={-1}
      >
        <span className="sr-only">{product.title}</span>
      </TrackedCTA>
    </article>
  );
}
