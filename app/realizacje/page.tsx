/**
 * Realizacje (Projects) page — /realizacje
 * File path: /app/realizacje/page.tsx
 *
 * Filterable showcase of all project photos. Server-rendered hero and
 * metadata, client-rendered filter grid (see /components/sections/gallery-grid.tsx).
 *
 * URL chosen as "realizacje" (Polish: "realizations / projects") rather
 * than "galeria" — matches existing nav label and is what Polish
 * prospects actually search for.
 */

import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCTA } from "@/components/sections/mobile-sticky-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { GalleryGrid } from "@/components/sections/gallery-grid";

import { projects } from "@/content/projects";
import { products } from "@/content/products";
import { cities } from "@/content/cities";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://stretch-sufit.vercel.app";

export const metadata: Metadata = {
  title: "Realizacje — Stretch Sufit",
  description:
    "Realizacje sufitów napinanych Stretch Sufit — apartamenty, biura, restauracje, hotele w 17 miastach Polski. PVC, akustyka, LED, fotodruk.",
  alternates: { canonical: "/realizacje" },
  openGraph: {
    title: "Realizacje sufitów napinanych | Stretch Sufit",
    description:
      "Realizacje sufitów napinanych w Polsce — filtruj po produkcie i mieście.",
    type: "website",
    url: `${BASE_URL}/realizacje`,
    locale: "pl_PL",
  },
};

export default function RealizacjePage() {
  const productOptions = [
    { value: "all", label: "Wszystkie", count: projects.length },
    ...products
      .map((p) => ({
        value: p.slug,
        label: p.label,
        count: projects.filter((proj) => proj.productCategory === p.slug).length,
      }))
      .filter((opt) => opt.count > 0)
      .sort((a, b) => b.count - a.count),
  ];

  const cityOptions = [
    { value: "all", label: "Wszystkie miasta", count: projects.length },
    ...cities
      .map((c) => ({
        value: c.slug,
        label: c.name,
        count: projects.filter((proj) => proj.citySlug === c.slug).length,
      }))
      .filter((opt) => opt.count > 0)
      .sort((a, b) => b.count - a.count),
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Realizacje Stretch Sufit",
    description: "Realizacje sufitów napinanych w Polsce",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "ImageObject",
        contentUrl: project.image,
        name: project.title,
        description: `${project.productLabel} — ${project.city}${
          project.district ? `, ${project.district}` : ""
        }${project.surfaceArea ? `, ${project.surfaceArea} m²` : ""}`,
        caption: project.imageAlt,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: BASE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Realizacje",
        item: `${BASE_URL}/realizacje`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={itemListSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Nav />

      <main>
        {/* ════════ Breadcrumb ════════ */}
        <nav
          aria-label="breadcrumb"
          className="border-b border-white/5 bg-bg pb-4 pt-28 md:pt-32"
        >
          <Container>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
              <li>
                <Link href="/" className="hover:text-white">
                  Start
                </Link>
              </li>
              <li aria-hidden="true">·</li>
              <li className="text-white" aria-current="page">
                Realizacje
              </li>
            </ol>
          </Container>
        </nav>

        {/* ════════ Hero ════════ */}
        <section className="relative isolate overflow-hidden bg-bg pb-16 pt-12 md:pb-20 md:pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 15% 20%, rgba(225,16,26,0.08), transparent 55%)",
            }}
          />
          <Container>
            <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-8">
                <Eyebrow>
                  {projects.length} realizacji · {cityOptions.length - 1} miast
                </Eyebrow>
                <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                  Wnętrza, w których{" "}
                  <span className="it text-paper">już byliśmy.</span>
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                  Wybrane realizacje z całej Polski — od apartamentów na
                  Mokotowie po biura w Katowicach, od kameralnych łazienek po
                  hotele z 84 pokojami. Filtruj według produktu lub miasta, aby
                  znaleźć projekt podobny do Twojego.
                </p>
              </div>

              <div className="md:col-span-4">
                <div className="grid grid-cols-3 gap-4 md:grid-cols-1">
                  <Stat number={projects.length.toString()} label="realizacji" />
                  <Stat
                    number={(cityOptions.length - 1).toString()}
                    label="miast"
                  />
                  <Stat number="15 lat" label="gwarancji" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <GalleryGrid
          projects={projects}
          productOptions={productOptions}
          cityOptions={cityOptions}
        />

        {/* ════════ Closing CTA ════════ */}
        <section className="relative isolate overflow-hidden bg-red py-20 text-white md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Twoje wnętrze może być następne</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Zobaczyłeś coś, co Ci się podoba?
                <br />
                <span className="it text-white/85">Zamów bezpłatny pomiar.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Pokaż zdjęcie, opisz pomieszczenie — przygotujemy wycenę
                dopasowaną do Twojego projektu. Oddzwonienie w 24 h.
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

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-semibold leading-none tracking-[-0.02em] text-white md:text-4xl">
        {number}
      </div>
      <div className="mt-2 text-sm text-white/60">{label}</div>
    </div>
  );
}
