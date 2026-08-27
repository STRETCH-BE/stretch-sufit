/**
 * Published price ranges per product — single source of truth for the
 * Product JSON-LD `AggregateOffer` (lowPrice / highPrice) on the
 * product pages in every locale. Keyed by the POLISH product slug.
 *
 * Values mirror the public price list in the blog post
 * "ile-kosztuje-sufit-napinany" ("Cennik orientacyjny 2026", PLN netto
 * per m² z montażem); prefab has no cennik row, so its range comes from
 * the prefab product page copy ("Typowy zakres: 180–350 zł/m²").
 *
 * Search Console requires `lowPrice` on AggregateOffer — a missing
 * value makes the whole Product snippet invalid.
 *
 * TODO: Michael — aktualizuj te widełki razem z cennikiem na blogu.
 * Uwaga: FAQ na stronach produktowych fotodruku (od 290) i sufitu
 * świetlnego (od 480) podają inne ceny startowe niż cennik na blogu
 * (260 / 390) — warto ujednolicić.
 */

import { findProduct } from "@/lib/i18n-routes";

export type PriceRangePLN = { from: number; to: number };

export const productPriceRangesPLN: Record<string, PriceRangePLN> = {
  "sufit-pvc": { from: 170, to: 240 },
  "sufit-poliestrowy": { from: 220, to: 290 },
  "sufit-akustyczny": { from: 320, to: 450 },
  "sufit-swietlny": { from: 390, to: 600 },
  "sufit-fotodruk": { from: 260, to: 380 },
  "sufit-prefab": { from: 180, to: 350 },
};

/**
 * Resolve the range from any locale's slug (the /uk tree reuses the
 * "ua" slugs). Returns undefined for unknown products so callers can
 * omit the price fields instead of emitting garbage.
 */
export function priceRangeFor(
  locale: "pl" | "en" | "ua",
  slug: string
): PriceRangePLN | undefined {
  const plSlug = locale === "pl" ? slug : findProduct(locale, slug)?.pl;
  return plSlug ? productPriceRangesPLN[plSlug] : undefined;
}
