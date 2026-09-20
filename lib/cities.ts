/**
 * City page helpers — pure functions over content/cities.ts data.
 * File path: /lib/cities.ts
 */

import type { City } from "@/types";
import { productPriceRangesPLN } from "@/content/product-prices";

/** Published price floor (PVC, net, installed) — one number for every city page. */
export const CITY_PRICE_FROM_PLN = productPriceRangesPLN["sufit-pvc"].from;

export function isSilesian(city: Pick<City, "region">): boolean {
  return city.region === "Śląskie";
}

/** "ok. 55 min" / "ok. 1 h 30 min" / "ok. 2 h". */
export function formatTravel(minutes: number): string {
  if (minutes < 60) return `ok. ${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m === 0 ? `ok. ${h} h` : `ok. ${h} h ${m} min`;
}

/**
 * Cities to link from the "Inne miasta" block: explicit neighbours first,
 * then same-region cities by distance similarity, then the rest by
 * distance similarity — capped at `limit`, never the page itself.
 */
export function nearbyCities(city: City, all: City[], limit = 8): City[] {
  const picked: City[] = [];
  const seen = new Set<string>([city.slug]);
  const push = (c: City | undefined) => {
    if (c && !seen.has(c.slug) && picked.length < limit) {
      picked.push(c);
      seen.add(c.slug);
    }
  };
  for (const slug of city.nearbySlugs ?? []) push(all.find((c) => c.slug === slug));
  const byDistance = [...all].sort(
    (a, b) =>
      Math.abs(a.distanceFromHq - city.distanceFromHq) -
      Math.abs(b.distanceFromHq - city.distanceFromHq)
  );
  for (const c of byDistance) if (c.region === city.region) push(c);
  for (const c of byDistance) push(c);
  return picked;
}
