"use client";

/**
 * Gallery grid client component.
 * File path: /components/sections/gallery-grid.tsx
 *
 * Renders a filterable masonry grid of projects with a click-to-zoom
 * lightbox. State syncs to URL params (?produkt=…&miasto=…) so visitors
 * can share filtered views.
 *
 * Filtering happens entirely client-side over the full project list —
 * works without JavaScript (server-rendered default view shows all
 * projects; filters only activate once JS hydrates).
 */

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types";

type ProductFilter = "all" | string;
type CityFilter = "all" | string;

type FilterOption = {
  value: string;
  label: string;
  count: number;
};

type GalleryGridProps = {
  projects: Project[];
  productOptions: FilterOption[];
  cityOptions: FilterOption[];
};

export function GalleryGrid({
  projects,
  productOptions,
  cityOptions,
}: GalleryGridProps) {
  const [productFilter, setProductFilter] = useState<ProductFilter>("all");
  const [cityFilter, setCityFilter] = useState<CityFilter>("all");
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  // Hydrate filter state from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = params.get("produkt");
    const c = params.get("miasto");
    if (p && productOptions.some((o) => o.value === p)) setProductFilter(p);
    if (c && cityOptions.some((o) => o.value === c)) setCityFilter(c);
  }, [productOptions, cityOptions]);

  // Push filter state back to URL on change (without page reload)
  useEffect(() => {
    const params = new URLSearchParams();
    if (productFilter !== "all") params.set("produkt", productFilter);
    if (cityFilter !== "all") params.set("miasto", cityFilter);
    const qs = params.toString();
    const newUrl = qs
      ? `${window.location.pathname}?${qs}`
      : window.location.pathname;
    window.history.replaceState(null, "", newUrl);
  }, [productFilter, cityFilter]);

  // Lightbox keyboard handling — Escape to close
  useEffect(() => {
    if (!lightboxProject) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxProject(null);
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxProject]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (productFilter !== "all" && p.productCategory !== productFilter)
        return false;
      if (cityFilter !== "all" && p.citySlug !== cityFilter) return false;
      return true;
    });
  }, [projects, productFilter, cityFilter]);

  const resetFilters = () => {
    setProductFilter("all");
    setCityFilter("all");
  };

  return (
    <>
      {/* ════════ Filter bar ════════ */}
      <div className="border-b border-white/10 bg-bg/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Product filter — button row */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-2 hidden font-mono text-[11px] uppercase tracking-[0.15em] text-white/45 md:inline">
                Produkt
              </span>
              {productOptions.map((opt) => {
                const active = productFilter === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setProductFilter(opt.value)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "border-red bg-red text-white"
                        : "border-white/15 text-white/70 hover:border-white/40 hover:text-white"
                    }`}
                  >
                    {opt.label}
                    {opt.count > 0 && (
                      <span
                        className={`ml-1.5 text-xs ${
                          active ? "text-white/80" : "text-white/40"
                        }`}
                      >
                        {opt.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* City filter — dropdown (17 cities don't fit as buttons) */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/45">
                Miasto
              </span>
              <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="rounded border border-white/15 bg-bg px-3 py-2 text-sm text-white outline-none transition-colors hover:border-white/40 focus:border-red"
              >
                {cityOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                    {opt.count > 0 ? ` (${opt.count})` : ""}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active-filter summary + clear */}
          {(productFilter !== "all" || cityFilter !== "all") && (
            <div className="mt-4 flex items-center gap-3 text-sm text-white/60">
              <span>
                Pokazujemy {filtered.length}{" "}
                {filtered.length === 1
                  ? "realizację"
                  : filtered.length < 5
                  ? "realizacje"
                  : "realizacji"}
              </span>
              <button
                type="button"
                onClick={resetFilters}
                className="font-medium text-red hover:underline"
              >
                Wyczyść filtry
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ════════ Grid ════════ */}
      <div className="bg-bg py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {filtered.length === 0 ? (
            <EmptyState onReset={resetFilters} />
          ) : (
            <div className="columns-1 gap-5 sm:columns-2 md:gap-6 lg:columns-3 xl:columns-3">
              {filtered.map((project) => (
                <GalleryCard
                  key={project.slug}
                  project={project}
                  onClick={() => setLightboxProject(project)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ════════ Lightbox ════════ */}
      {lightboxProject && (
        <Lightbox
          project={lightboxProject}
          onClose={() => setLightboxProject(null)}
        />
      )}
    </>
  );
}

/* ─────────────────────────────────────────────────────────── */

function GalleryCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group mb-5 block w-full overflow-hidden rounded bg-bg-card text-left transition-transform hover:scale-[1.01] md:mb-6"
      aria-label={`Otwórz pełny widok: ${project.title}, ${project.city}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-bg-soft">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
        />

        {/* Caption overlay */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/65">
            {project.productLabel}
          </div>
          <div className="mt-1 font-display text-lg font-semibold leading-tight tracking-[-0.01em] text-white md:text-xl">
            {project.title}
          </div>
          <div className="mt-1 font-serif text-sm italic text-white/75">
            — {project.city}
            {project.district ? `, ${project.district}` : ""}
            {project.surfaceArea ? ` · ${project.surfaceArea} m²` : ""}
          </div>
        </div>
      </div>
    </button>
  );
}

/* ─────────────────────────────────────────────────────────── */

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="mx-auto max-w-md py-20 text-center">
      <div className="font-display text-xl font-semibold text-white md:text-2xl">
        Brak realizacji{" "}
        <span className="it text-paper">w tym filtrze.</span>
      </div>
      <p className="mt-4 text-white/65">
        Nie mamy jeszcze projektów spełniających te kryteria, ale to nie znaczy,
        że ich nie wykonujemy. Zadzwoń lub poproś o ofertę — zrobimy.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={onReset}
          className="rounded-full bg-red px-6 py-3 font-display text-sm font-semibold text-white"
        >
          Pokaż wszystkie
        </button>
        <Link
          href="/#cta"
          className="rounded-full border border-white/30 px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:bg-white/5"
        >
          Zamów ofertę →
        </Link>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */

function Lightbox({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-8"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Zamknij"
        className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-3 text-white backdrop-blur transition-colors hover:bg-white/20 md:right-6 md:top-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        className="grid w-full max-w-6xl gap-0 overflow-hidden rounded-lg bg-bg md:grid-cols-[2fr_1fr]"
      >
        <div className="relative aspect-[4/5] md:aspect-auto">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 768px) 66vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-col justify-between p-6 md:p-10">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
              {project.productLabel}
            </div>
            <h2
              id="lightbox-title"
              className="mt-4 font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-white md:text-3xl"
            >
              {project.title}
            </h2>
            <p className="mt-3 font-serif italic text-white/70">
              — {project.city}
              {project.district ? `, ${project.district}` : ""}
            </p>

            <dl className="mt-8 space-y-4 border-t border-white/10 pt-6">
              <div className="flex items-baseline justify-between">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
                  Miasto
                </dt>
                <dd className="text-sm text-white">
                  {project.city}
                  {project.district ? `, ${project.district}` : ""}
                </dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
                  Pomieszczenie
                </dt>
                <dd className="text-sm text-white">{project.spaceLabel}</dd>
              </div>
              <div className="flex items-baseline justify-between">
                <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
                  Produkt
                </dt>
                <dd className="text-sm text-white">{project.productLabel}</dd>
              </div>
              {project.surfaceArea && (
                <div className="flex items-baseline justify-between">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
                    Powierzchnia
                  </dt>
                  <dd className="text-sm text-white">
                    {project.surfaceArea} m²
                  </dd>
                </div>
              )}
              {project.year && (
                <div className="flex items-baseline justify-between">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
                    Rok
                  </dt>
                  <dd className="text-sm text-white">{project.year}</dd>
                </div>
              )}
            </dl>
          </div>

          <div className="mt-10 space-y-3">
            <Link
              href={`/rozwiazania/${project.productCategory}`}
              className="block rounded-full bg-red px-6 py-3 text-center font-display text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              Zobacz {project.productLabel.toLowerCase()} →
            </Link>
            <Link
              href={`/sufity-napinane/${project.citySlug}`}
              className="block rounded-full border border-white/20 px-6 py-3 text-center font-display text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              Sufity napinane w {project.city} →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
