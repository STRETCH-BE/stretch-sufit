/**
 * Product landing page — Ukrainian. /ua/rishennya/[produkt]
 * File path: /app/ua/rishennya/[produkt]/page.tsx
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { Nav } from "@/components/sections/ua/nav";
import { Footer } from "@/components/sections/ua/footer";
import { MobileStickyCTA } from "@/components/sections/ua/mobile-sticky-cta";
import { JsonLd } from "@/components/seo/json-ld";

import { products } from "@/content/ua/products";
import { findProduct, languageAlternates, productPaths } from "@/lib/i18n-routes";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://altodesign.pl";

type ProductRouteParams = { produkt: string };

export function generateStaticParams(): ProductRouteParams[] {
  return products.map((p) => ({ produkt: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<ProductRouteParams>;
}): Promise<Metadata> {
  const { produkt: productSlug } = await params;
  const product = products.find((p) => p.slug === productSlug);
  if (!product) return {};

  const title = `${product.title} | Stretch Sufit`;
  const description = `${product.tagline}. ${product.description} Гарантія до 15 років (15 років ПВХ · 10 років поліестер), монтаж за 1 день. Частина бельгійської Stretchgroup.`;

  const i18nEntry = findProduct("ua", product.slug);

  return {
    title,
    description,
    alternates: {
      canonical: `/ua/rishennya/${product.slug}`,
      languages: i18nEntry
        ? languageAlternates(productPaths(i18nEntry))
        : undefined,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${BASE_URL}/ua/rishennya/${product.slug}`,
      locale: "uk_UA",
    },
  };
}

export default async function ProductPageUk({
  params,
}: {
  params: Promise<ProductRouteParams>;
}) {
  const { produkt: productSlug } = await params;
  const product = products.find((p) => p.slug === productSlug);
  if (!product) notFound();

  const otherProducts = products.filter((p) => p.slug !== product.slug);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${BASE_URL}/ua/rishennya/${product.slug}#product`,
    name: product.title,
    description: product.intro,
    image: product.image,
    brand: { "@type": "Brand", name: "Stretch" },
    manufacturer: {
      "@type": "Organization",
      name: "Stretchgroup",
      url: BASE_URL,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "PLN",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "Stretch Sufit" },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Головна", item: `${BASE_URL}/ua` },
      { "@type": "ListItem", position: 2, name: "Рішення", item: `${BASE_URL}/ua/rishennya` },
      { "@type": "ListItem", position: 3, name: product.label, item: `${BASE_URL}/ua/rishennya/${product.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <Nav />

      <main>
        <nav aria-label="breadcrumb" className="border-b border-white/5 bg-bg pb-4 pt-28 md:pt-32">
          <Container>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
              <li><Link href="/ua" className="hover:text-white">Головна</Link></li>
              <li aria-hidden="true">·</li>
              <li><Link href="/ua/rishennya" className="hover:text-white">Рішення</Link></li>
              <li aria-hidden="true">·</li>
              <li className="text-white" aria-current="page">{product.label}</li>
            </ol>
          </Container>
        </nav>

        <section className="relative isolate overflow-hidden bg-bg pb-20 pt-12 md:pb-28 md:pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 15% 20%, rgba(225,16,26,0.08), transparent 55%)",
            }}
          />
          <Container>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-7">
                <FadeIn><Eyebrow>{product.number} · {product.label}</Eyebrow></FadeIn>
                <FadeIn delay={80}>
                  <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                    {product.italicAccent ? (
                      <>
                        {product.title.replace(product.italicAccent, "")}{" "}
                        <span className="it text-paper">{product.italicAccent}</span>
                      </>
                    ) : (
                      product.title
                    )}
                  </h1>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-6 font-serif text-lg italic text-white/60 md:text-xl">
                    {product.tagline}
                  </p>
                </FadeIn>
                <FadeIn delay={200}>
                  <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75">
                    {product.intro}
                  </p>
                </FadeIn>
                <FadeIn delay={260}>
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <Link href="/ua#cta" className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-4 font-display text-base font-semibold text-white transition-transform hover:scale-[1.02]">
                      Безкоштовний замір →
                    </Link>
                    <a href="tel:+48455444475" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/5">
                      +48 455 444 475
                    </a>
                  </div>
                </FadeIn>
              </div>
              <div className="md:col-span-5">
                <FadeIn delay={120}>
                  <figure className="relative isolate aspect-[4/5] overflow-hidden rounded bg-bg-soft">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      priority
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                    <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </figure>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn><Eyebrow tone="on-paper">Що вирізняє цей продукт</Eyebrow></FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-bg">
                  Чотири речі,{" "}
                  <span className="it">що роблять різницю.</span>
                </SectionTitle>
              </FadeIn>
            </div>

            <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
              {product.features.map((feature, i) => (
                <FadeIn delay={120 + i * 60} key={feature.title}>
                  <div className="rounded border border-bg/10 bg-paper-2 p-7">
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                      0{i + 1}
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold leading-tight tracking-[-0.01em] text-bg">
                      {feature.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-bg/75">
                      {feature.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn><Eyebrow>Де він проявляє себе</Eyebrow></FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-white">
                    Реальні{" "}
                    <span className="it text-paper">застосування.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-6 text-lg leading-relaxed text-white/65">
                    Не кожен продукт пасує до кожного приміщення. Ось де цей конкретно перемагає.
                  </p>
                </FadeIn>
              </div>
              <div className="md:col-span-7">
                <div className="space-y-5">
                  {product.useCases.map((useCase, i) => (
                    <FadeIn delay={120 + i * 60} key={useCase.context}>
                      <div className="border-l-2 border-red/40 pl-6 transition-colors hover:border-red">
                        <div className="font-display text-lg font-semibold tracking-[-0.01em] text-white">
                          {useCase.context}
                        </div>
                        <p className="mt-2 text-[15px] leading-relaxed text-white/65">
                          {useCase.body}
                        </p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl">
              <FadeIn><Eyebrow tone="on-paper">Технічна специфікація</Eyebrow></FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-bg">
                  Повна специфікація —{" "}
                  <span className="it">без прихованих пасток.</span>
                </SectionTitle>
              </FadeIn>
              <FadeIn delay={140}>
                <div className="mt-12 overflow-hidden rounded border border-bg/10">
                  <table className="w-full text-left">
                    <tbody className="[&_td]:px-5 [&_td]:py-4 [&_tr]:border-b [&_tr]:border-bg/10 [&_tr:last-child]:border-b-0">
                      {product.specs.map((spec) => (
                        <tr key={spec.label}>
                          <td className="w-2/5 font-mono text-[11px] uppercase tracking-[0.1em] text-bg/55">
                            {spec.label}
                          </td>
                          <td className="font-display text-[15px] text-bg">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="bg-bg-soft py-20 md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl">
              <FadeIn>
                <div className="rounded bg-bg-card/60 p-8 md:p-10">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                    ● Коли обирати цей продукт
                  </div>
                  <p className="mt-5 font-serif text-xl italic leading-relaxed text-white/85 md:text-2xl">
                    {product.comparedTo}
                  </p>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="bg-bg py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl">
              <FadeIn><Eyebrow>FAQ</Eyebrow></FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-white">
                  Найчастіші{" "}
                  <span className="it text-paper">питання.</span>
                </SectionTitle>
              </FadeIn>

              <div className="mt-12 space-y-2">
                {product.faq.map((item, i) => (
                  <FadeIn delay={120 + i * 50} key={item.q}>
                    <details className="group rounded border border-white/10 bg-bg-card/40 p-6 transition-colors hover:border-white/20 open:border-red/40">
                      <summary className="flex cursor-pointer items-start justify-between gap-4 font-display text-base font-semibold text-white md:text-lg">
                        <span>{item.q}</span>
                        <span aria-hidden="true" className="mt-1 text-red transition-transform group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-4 text-[15px] leading-relaxed text-white/70">
                        {item.a}
                      </p>
                    </details>
                  </FadeIn>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-paper py-20 md:py-24">
          <Container>
            <FadeIn><Eyebrow tone="on-paper">Інші рішення</Eyebrow></FadeIn>
            <FadeIn delay={80}>
              <h2 className="mt-5 font-display text-2xl font-semibold tracking-[-0.02em] text-bg md:text-3xl">
                Уся система —{" "}
                <span className="it">6 продуктів Stretch.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={120}>
              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {otherProducts.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/ua/rishennya/${other.slug}`}
                    className="group rounded border border-bg/10 bg-paper-2 p-6 transition-all hover:border-red/40 hover:bg-white"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                          {other.number} · {other.label}
                        </div>
                        <div className="mt-3 font-display text-lg font-semibold tracking-[-0.01em] text-bg">
                          {other.linkLabel}
                        </div>
                        <div className="mt-2 text-sm text-bg/60">
                          {other.tagline}
                        </div>
                      </div>
                      <span aria-hidden="true" className="text-red transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </Container>
        </section>

        <section className="relative isolate overflow-hidden bg-red py-24 text-white md:py-28">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Замовити замір</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                {product.label}{" "}
                <span className="it">у вашому домі.</span>
                <br />
                <span className="text-white/85">Безкоштовний замір,</span>{" "}
                <span className="it">передзвонимо за 24 год.</span>
              </h2>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/ua#cta" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]">
                  Замовити безкоштовний замір →
                </Link>
                <a href="tel:+48455444475" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10">
                  +48 455 444 475
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
