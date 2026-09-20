/**
 * City uniqueness gate.
 * File path: /lib/city-gate.ts
 *
 * Every city landing page must be a genuinely local page, not a templated
 * clone: enough copy, real districts and towns, long-form sections that
 * link deeper into the site, a FAQ with city-only questions, honest image
 * captions, and no sentence shared with another city. Doorway pages would
 * drag the whole /sufity-napinane cluster down, so this runs inside
 * `next build` (generateStaticParams of the city route) and fails the
 * build with a readable report. `npm run gate:cities` runs it locally.
 *
 * Pure: takes data in, returns problems out — no path aliases, so the
 * standalone runner can import it with plain Node.
 */

import type { City } from "../types";

export type GateInput = {
  cities: City[];
  /** Slugs registered in lib/i18n-routes.ts (sitemap + hreflang). */
  registeredSlugs: string[];
  /** Internal hrefs that section links may point to (without query). */
  allowedHrefs: Set<string>;
  /** Slugs that must meet the long variant. */
  topTier: Set<string>;
};

export type GateProblem = { slug: string; rule: string; detail: string };

const MIN_WORDS = 480;
const MIN_WORDS_TOP = 700;
const MIN_DISTINCT = 200;
const MIN_SECTIONS = 3;
const MIN_SECTIONS_TOP = 4;
const MIN_SECTION_WORDS = 100;
const MIN_FAQ = 6;
const MIN_FAQ_TOP = 7;
const MIN_FAQ_ANSWER_WORDS = 30;
const MIN_CITY_ONLY_FAQ = 3;
const MIN_DISTRICTS = 6;
const MIN_DISTRICTS_BIG = 10;
const MIN_NEARBY_TOWNS = 4;
const SHINGLE = 8;
/** Share of a page's 8-word sequences that may also appear on another city page. */
const MAX_SHARED_SHINGLE_RATIO = 0.02;
/** A shared run this long is a copied sentence, not a repeated product fact. */
const MAX_SHARED_RUN_WORDS = 12;
const BIG_CITY_POPULATION = 250_000;

const BANNED_PHRASES = [
  "najszybciej w polsce",
  "najkrótszy dojazd",
  "priority booking",
  "pomiar w 24 godzin",
  "w tym samym tygodniu",
  "17 miast",
  "[do uzupełnienia",
  "„",
];

function words(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s-]/gu, " ")
    .split(/\s+/)
    .filter(Boolean);
}

/** Population from "282 tys. mieszkańców" / "1,86 mln mieszkańców". */
function population(display: string): number {
  const m = display.replace(",", ".").match(/([\d.]+)\s*(tys|mln)/i);
  if (!m) return 0;
  const n = parseFloat(m[1]);
  return m[2].toLowerCase() === "mln" ? n * 1_000_000 : n * 1_000;
}

function cityText(c: City): string {
  return [
    c.intro,
    ...c.trustBlocks.flatMap((b) => [b.title, b.body]),
    ...(c.sections ?? []).flatMap((s) => [s.heading, s.body]),
    ...c.faq.flatMap((f) => [f.q, f.a]),
  ].join("\n");
}

/** Question with every city-specific token removed — for cross-city comparison. */
function normalizeQuestion(q: string, c: City): string {
  const tokens = [c.name, c.locative, c.genitive ?? "", ...c.districts]
    .filter(Boolean)
    .flatMap((t) => t.toLowerCase().split(/\s+/));
  const set = new Set(tokens);
  return words(q)
    .filter((w) => !set.has(w) && w !== "w" && w !== "we")
    .join(" ");
}

export function runCityGate(input: GateInput): GateProblem[] {
  const { cities, registeredSlugs, allowedHrefs, topTier } = input;
  const problems: GateProblem[] = [];
  const add = (slug: string, rule: string, detail: string) =>
    problems.push({ slug, rule, detail });

  const slugs = new Set(cities.map((c) => c.slug));

  // ── registration: content ↔ i18n routes must match 1:1
  for (const c of cities) {
    if (!registeredSlugs.includes(c.slug))
      add(c.slug, "i18n", "missing from citySlugs in lib/i18n-routes.ts (sitemap + hreflang)");
  }
  for (const s of registeredSlugs) {
    if (!slugs.has(s)) add(s, "i18n", "registered in citySlugs but has no entry in content/cities.ts");
  }

  // ── image sharing: shared photos must carry an honest caption
  const imageUsers = new Map<string, string[]>();
  for (const c of cities) {
    imageUsers.set(c.image, [...(imageUsers.get(c.image) ?? []), c.slug]);
  }

  const shingleOwner = new Map<string, string>();
  const headingOwner = new Map<string, string>();
  const trustTitleOwner = new Map<string, string>();
  const questionOwner = new Map<string, string>();
  const normalizedQuestions = new Map<string, Set<string>>(); // norm → slugs

  for (const c of cities) {
    const top = topTier.has(c.slug);
    const text = cityText(c);
    const w = words(text);
    const distinct = new Set(w).size;
    const minWords = top ? MIN_WORDS_TOP : MIN_WORDS;
    if (w.length < minWords)
      add(c.slug, "length", `${w.length} words of city copy, need ≥ ${minWords}`);
    if (distinct < MIN_DISTINCT)
      add(c.slug, "length", `${distinct} distinct words, need ≥ ${MIN_DISTINCT}`);

    const lower = text.toLowerCase();
    for (const phrase of BANNED_PHRASES) {
      if (lower.includes(phrase)) add(c.slug, "banned", `contains "${phrase}"`);
    }
    if (/\b(165|175|180|185|190)\s*zł\/m²/.test(text))
      add(c.slug, "price", "price floor other than 170 zł/m²");

    // required fields
    if (!c.genitive) add(c.slug, "fields", "genitive missing");
    if (!c.travel) add(c.slug, "fields", "travel (minutes, route, noTravelFee) missing");
    if (!c.updatedAt || !/^\d{4}-\d{2}-\d{2}$/.test(c.updatedAt))
      add(c.slug, "fields", "updatedAt missing or not YYYY-MM-DD");
    if (!c.imageCaption) add(c.slug, "image", "imageCaption missing");
    if (c.travel && c.travel.noTravelFee !== c.distanceFromHq <= 100)
      add(c.slug, "fields", "travel.noTravelFee must equal distanceFromHq <= 100");

    // meta
    if (!c.metaTitle || c.metaTitle.length < 30 || c.metaTitle.length > 60)
      add(c.slug, "meta", `metaTitle ${c.metaTitle?.length ?? 0} chars, need 30–60`);
    if (!c.metaDescription || c.metaDescription.length < 110 || c.metaDescription.length > 155)
      add(c.slug, "meta", `metaDescription ${c.metaDescription?.length ?? 0} chars, need 110–155`);

    // trust blocks
    if (c.trustBlocks.length !== 3) add(c.slug, "trust", `${c.trustBlocks.length} trust blocks, need 3`);
    for (const b of c.trustBlocks) {
      const key = b.title.toLowerCase().trim();
      const owner = trustTitleOwner.get(key);
      if (owner && owner !== c.slug) add(c.slug, "unique", `trust block title "${b.title}" also used by ${owner}`);
      trustTitleOwner.set(key, c.slug);
    }

    // sections
    const sections = c.sections ?? [];
    const minSections = top ? MIN_SECTIONS_TOP : MIN_SECTIONS;
    if (sections.length < minSections)
      add(c.slug, "sections", `${sections.length} sections, need ≥ ${minSections}`);
    const hrefsUsed = new Set<string>();
    for (const s of sections) {
      const sw = words(s.body).length;
      if (sw < MIN_SECTION_WORDS)
        add(c.slug, "sections", `section "${s.heading}" has ${sw} words, need ≥ ${MIN_SECTION_WORDS}`);
      if (!s.links || s.links.length === 0)
        add(c.slug, "sections", `section "${s.heading}" has no internal link`);
      for (const l of s.links ?? []) {
        const base = l.href.split("?")[0];
        if (!allowedHrefs.has(base)) add(c.slug, "links", `unknown href ${l.href} in "${s.heading}"`);
        if (l.href.startsWith("/wycena?miasto=") && l.href !== `/wycena?miasto=${c.slug}`)
          add(c.slug, "links", `wycena prefill points at another city: ${l.href}`);
        if (hrefsUsed.has(l.href)) add(c.slug, "links", `href ${l.href} used more than once`);
        hrefsUsed.add(l.href);
      }
      const hk = s.heading.toLowerCase().trim();
      const owner = headingOwner.get(hk);
      if (owner && owner !== c.slug) add(c.slug, "unique", `section heading "${s.heading}" also used by ${owner}`);
      headingOwner.set(hk, c.slug);
    }

    // FAQ
    const minFaq = top ? MIN_FAQ_TOP : MIN_FAQ;
    if (c.faq.length < minFaq) add(c.slug, "faq", `${c.faq.length} FAQ items, need ≥ ${minFaq}`);
    for (const f of c.faq) {
      const aw = words(f.a).length;
      if (aw < MIN_FAQ_ANSWER_WORDS)
        add(c.slug, "faq", `answer to "${f.q}" has ${aw} words, need ≥ ${MIN_FAQ_ANSWER_WORDS}`);
      const qk = f.q.toLowerCase().trim();
      const owner = questionOwner.get(qk);
      if (owner && owner !== c.slug) add(c.slug, "unique", `FAQ question "${f.q}" also used by ${owner}`);
      questionOwner.set(qk, c.slug);
      const norm = normalizeQuestion(f.q, c);
      normalizedQuestions.set(norm, new Set([...(normalizedQuestions.get(norm) ?? []), c.slug]));
    }

    // districts & towns
    const minDistricts = population(c.populationDisplay) >= BIG_CITY_POPULATION ? MIN_DISTRICTS_BIG : MIN_DISTRICTS;
    if (c.districts.length < minDistricts)
      add(c.slug, "districts", `${c.districts.length} districts, need ≥ ${minDistricts}`);
    if ((c.nearbyTowns ?? []).length < MIN_NEARBY_TOWNS)
      add(c.slug, "towns", `${(c.nearbyTowns ?? []).length} nearby towns, need ≥ ${MIN_NEARBY_TOWNS}`);
    for (const t of c.nearbyTowns ?? []) {
      if (cities.some((o) => o.name === t)) add(c.slug, "towns", `"${t}" has its own page — move it to nearbySlugs`);
      if (c.districts.includes(t)) add(c.slug, "towns", `"${t}" is a district of the city, not a nearby town`);
    }
    for (const s of c.nearbySlugs ?? []) {
      if (!slugs.has(s)) add(c.slug, "nearby", `nearbySlugs points at unknown city "${s}"`);
      if (s === c.slug) add(c.slug, "nearby", "nearbySlugs contains the city itself");
    }

    // shared image honesty
    const users = imageUsers.get(c.image) ?? [];
    if (users.length > 1 && c.imageCaption) {
      const ownPhoto = c.image.toLowerCase().includes(c.slug);
      if (!ownPhoto && c.imageCaption.toLowerCase().includes(c.name.toLowerCase()))
        add(c.slug, "image", `shared photo captioned as a local job ("${c.imageCaption}")`);
    }

    // cross-city shingles: a few shared product-fact phrases are fine,
    // a copied sentence or a templated page is not
    const seenHere = new Set<string>();
    let shared = 0;
    let total = 0;
    let runStart = -1;
    let runOwner = "";
    const flushRun = (end: number) => {
      if (runStart >= 0) {
        const len = end - runStart + SHINGLE - 1;
        if (len >= MAX_SHARED_RUN_WORDS)
          add(
            c.slug,
            "unique",
            `${len}-word run shared with ${runOwner}: "${w.slice(runStart, runStart + len).join(" ")}"`
          );
      }
      runStart = -1;
    };
    for (let i = 0; i + SHINGLE <= w.length; i++) {
      const sh = w.slice(i, i + SHINGLE).join(" ");
      total += 1;
      const owner = shingleOwner.get(sh);
      if (owner && owner !== c.slug) {
        shared += 1;
        if (runStart < 0 || owner !== runOwner) {
          flushRun(i);
          runStart = i;
          runOwner = owner;
        }
      } else {
        flushRun(i);
        if (!owner && !seenHere.has(sh)) shingleOwner.set(sh, c.slug);
      }
      seenHere.add(sh);
    }
    flushRun(w.length - SHINGLE + 1);
    if (total > 0 && shared / total > MAX_SHARED_SHINGLE_RATIO)
      add(
        c.slug,
        "unique",
        `${shared} of ${total} 8-word sequences (${(100 * shared / total).toFixed(1)}%) also appear on other city pages, limit ${MAX_SHARED_SHINGLE_RATIO * 100}%`
      );
  }

  // city-only FAQ questions (normalized question not used by any other city)
  for (const c of cities) {
    let cityOnly = 0;
    for (const f of c.faq) {
      const norm = normalizeQuestion(f.q, c);
      if ((normalizedQuestions.get(norm)?.size ?? 0) === 1) cityOnly += 1;
    }
    if (cityOnly < MIN_CITY_ONLY_FAQ)
      add(c.slug, "faq", `${cityOnly} city-only FAQ questions, need ≥ ${MIN_CITY_ONLY_FAQ}`);
  }

  return problems;
}

export function formatGateReport(problems: GateProblem[]): string {
  const bySlug = new Map<string, GateProblem[]>();
  for (const p of problems) bySlug.set(p.slug, [...(bySlug.get(p.slug) ?? []), p]);
  const lines = [`City gate: ${problems.length} problem(s) in ${bySlug.size} page(s)`];
  for (const [slug, list] of bySlug) {
    lines.push(`\n● ${slug}`);
    for (const p of list) lines.push(`  [${p.rule}] ${p.detail}`);
  }
  return lines.join("\n");
}

/** Throws when the gate fails — call from build-time code. */
export function assertCityGate(input: GateInput): void {
  const problems = runCityGate(input);
  if (problems.length > 0) {
    throw new Error(
      `${formatGateReport(problems)}\n\nFix content/cities.ts (or lib/i18n-routes.ts) — see lib/city-gate.ts for the rules.`
    );
  }
}
