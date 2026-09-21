#!/usr/bin/env -S node --experimental-strip-types
/**
 * Standalone city gate runner (local use; the build runs the same check).
 * File path: /scripts/city-gate.ts
 *
 *   npm run gate:cities
 *
 * Node ≥ 22.6 with type stripping. Imports are relative on purpose — the
 * "@/…" alias only exists inside the Next.js build.
 */

import { cities } from "../content/cities.ts";
import {
  blogPostSlugs,
  citySlugs,
  productSlugs,
  projectSlugs,
  routes,
} from "../lib/i18n-routes.ts";
import { formatGateReport, runCityGate } from "../lib/city-gate.ts";

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

const problems = runCityGate({
  cities,
  registeredSlugs: citySlugs.map((c) => c.pl),
  allowedHrefs,
  topTier: new Set(["katowice", "czestochowa", "warszawa"]),
});

if (problems.length === 0) {
  console.log(`City gate: OK — ${cities.length} pages pass.`);
} else {
  console.error(formatGateReport(problems));
  process.exit(1);
}
