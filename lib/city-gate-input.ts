/**
 * Wires the site data into the city gate.
 * File path: /lib/city-gate-input.ts
 */

import { cities } from "@/content/cities";
import {
  blogPostSlugs,
  citySlugs,
  productSlugs,
  projectSlugs,
  routes,
} from "@/lib/i18n-routes";
import { assertCityGate, runCityGate, type GateInput } from "@/lib/city-gate";

export const CITY_TOP_TIER = new Set(["katowice", "czestochowa", "warszawa"]);

export function buildGateInput(): GateInput {
  const allowedHrefs = new Set<string>([
    routes.wycena.pl,
    routes.contact.pl,
    routes.about.pl,
    routes.faq.pl,
    routes.warranty.pl,
    routes.projects.pl,
    routes.blog.pl,
    routes.cities.pl,
    routes.slask.pl,
    ...productSlugs.map((p) => `${routes.solutions.pl}/${p.pl}`),
    ...blogPostSlugs.map((b) => `${routes.blog.pl}/${b.pl}`),
    ...projectSlugs.map((s) => `${routes.projects.pl}/${s}`),
    ...citySlugs.map((c) => `${routes.cities.pl}/${c.pl}`),
  ]);
  return {
    cities,
    registeredSlugs: citySlugs.map((c) => c.pl),
    allowedHrefs,
    topTier: CITY_TOP_TIER,
  };
}

let checked = false;
/** Runs once per process; throws (and fails the build) on the first violation. */
export function ensureCityGate(): void {
  if (checked) return;
  assertCityGate(buildGateInput());
  checked = true;
}

export function cityGateProblems() {
  return runCityGate(buildGateInput());
}
