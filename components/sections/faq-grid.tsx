"use client";

/**
 * FAQ filterable accordion list — client component.
 * File path: /components/sections/faq-grid.tsx
 *
 * Renders the comprehensive FAQ with:
 *   - Category filter chips (Wszystkie / Produkty / Montaż / Ceny / etc.)
 *   - Expandable accordion entries grouped by category
 *   - URL param sync (?kategoria=montaz) for shareable filtered views
 *   - Auto-scroll to the question when arriving with a #slug anchor
 *
 * Default unfiltered view = all 28 questions rendered server-side,
 * which means Google indexes everything regardless of JavaScript.
 */

import { useEffect, useMemo, useState } from "react";

import type { FaqEntry, FaqCategory } from "@/content/faq";
import { faqCategories } from "@/content/faq";

type CategoryFilter = "all" | FaqCategory;

type FilterOption = {
  value: CategoryFilter;
  label: string;
  count: number;
};

type FaqGridProps = {
  faqs: FaqEntry[];
  options: FilterOption[];
};

export function FaqGrid({ faqs, options }: FaqGridProps) {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  // Hydrate filter from URL on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const k = params.get("kategoria");
    if (k && options.some((o) => o.value === k)) {
      setFilter(k as CategoryFilter);
    }
  }, [options]);

  // Push state back to URL on change
  useEffect(() => {
    const params = new URLSearchParams();
    if (filter !== "all") params.set("kategoria", filter);
    const qs = params.toString();
    const newUrl = qs
      ? `${window.location.pathname}?${qs}${window.location.hash}`
      : `${window.location.pathname}${window.location.hash}`;
    window.history.replaceState(null, "", newUrl);
  }, [filter]);

  // On mount, if URL has a #slug anchor, expand that question and scroll
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const target = document.getElementById(hash);
    if (target instanceof HTMLDetailsElement) {
      target.open = true;
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  const filtered = useMemo(() => {
    if (filter === "all") return faqs;
    return faqs.filter((f) => f.category === filter);
  }, [faqs, filter]);

  // Group by category for visual sections (only when showing "all")
  const grouped = useMemo(() => {
    if (filter !== "all") {
      // Single section
      return [
        {
          category: filter as FaqCategory,
          label: faqCategories[filter as FaqCategory].label,
          entries: filtered,
        },
      ];
    }

    // Group by category
    return (Object.keys(faqCategories) as FaqCategory[])
      .map((cat) => ({
        category: cat,
        label: faqCategories[cat].label,
        entries: faqs.filter((f) => f.category === cat),
      }))
      .filter((group) => group.entries.length > 0);
  }, [faqs, filter, filtered]);

  return (
    <>
      {/* ════════ Filter bar — sticky on scroll ════════ */}
      <div className="sticky top-20 z-30 border-b border-white/10 bg-bg/95 backdrop-blur md:top-24">
        <div className="mx-auto max-w-7xl px-4 py-5 md:px-6 md:py-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 hidden font-mono text-[11px] uppercase tracking-[0.15em] text-white/45 md:inline">
              Kategoria
            </span>
            {options.map((opt) => {
              const active = filter === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setFilter(opt.value)}
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
        </div>
      </div>

      {/* ════════ FAQ groups ════════ */}
      <div className="bg-bg pb-20 md:pb-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          {grouped.map((group, gi) => (
            <section
              key={group.category}
              id={group.category}
              className={gi === 0 ? "pt-12 md:pt-16" : "pt-16 md:pt-20"}
            >
              <div className="mb-8 flex items-baseline gap-4">
                <h2 className="font-display text-2xl font-semibold tracking-[-0.02em] text-white md:text-3xl">
                  {group.label}
                </h2>
                <div className="h-px flex-1 bg-white/10" />
                <span className="font-mono text-xs text-white/40">
                  {group.entries.length}
                </span>
              </div>

              <div className="space-y-2">
                {group.entries.map((entry) => (
                  <details
                    key={entry.slug}
                    id={entry.slug}
                    className="group rounded border border-white/10 bg-bg-card/40 p-6 transition-colors hover:border-white/20 open:border-red/40"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-4 font-display text-base font-semibold text-white md:text-lg">
                      <span>{entry.q}</span>
                      <span
                        aria-hidden="true"
                        className="mt-1 text-red transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-[15px] leading-relaxed text-white/75">
                      {entry.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
