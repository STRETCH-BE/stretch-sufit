#!/usr/bin/env node
/**
 * Build the web-ready image set of a case-study page from original photos.
 * File path: /scripts/project-photos.mjs
 *
 * Usage:
 *   node scripts/project-photos.mjs <project-slug> <folder-with-originals>
 *   npm run project-photos -- van-der-valk-beveren ~/Downloads/vdv
 *
 * Reads the mapping in scripts/project-photos/<slug>.json (target file →
 * original photo + optional crop position), then writes every target into
 * public/images/projects/<slug>/ at the size the components expect:
 *
 *   hero.jpg     1600×1200  ProjectHero (4:3)
 *   card.jpg     1200×900   /realizacje index card (4:3)
 *   og.jpg       1200×630   Open Graph / social preview
 *   brief.jpg    1200×1500  ProjectBrief side image (4:5)
 *   NN-*.jpg     1600×1200  ProjectGallery tiles (4:3)
 *
 * Every output is auto-rotated (EXIF orientation), centre/positioned
 * cover-cropped, re-encoded as progressive JPEG and stripped of metadata
 * (no GPS or camera EXIF leaks to the public site).
 */

import sharp from "sharp";
import { readdir, readFile, mkdir } from "node:fs/promises";
import path from "node:path";

const SIZES = {
  hero: { width: 1600, height: 1200 },
  card: { width: 1200, height: 900 },
  og: { width: 1200, height: 630 },
  brief: { width: 1200, height: 1500 },
  gallery: { width: 1600, height: 1200 },
};

const [slug, sourceDir] = process.argv.slice(2);
if (!slug || !sourceDir) {
  console.error(
    "Usage: node scripts/project-photos.mjs <project-slug> <folder-with-originals>"
  );
  process.exit(1);
}

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const mapPath = path.join(root, "scripts", "project-photos", `${slug}.json`);
const outDir = path.join(root, "public", "images", "projects", slug);

const mapping = JSON.parse(await readFile(mapPath, "utf8"));
const available = await readdir(sourceDir);
await mkdir(outDir, { recursive: true });

/** Match the original by exact name first, then case-insensitively. */
function resolveSource(name) {
  if (available.includes(name)) return path.join(sourceDir, name);
  const lower = name.toLowerCase();
  const hit = available.find((f) => f.toLowerCase() === lower);
  return hit ? path.join(sourceDir, hit) : null;
}

function kindOf(target) {
  const base = target.replace(/\.jpe?g$/i, "");
  return SIZES[base] ? base : "gallery";
}

let failed = 0;
for (const [target, spec] of Object.entries(mapping.files)) {
  const src = resolveSource(spec.from);
  if (!src) {
    failed += 1;
    console.error(`✗ ${target}: original "${spec.from}" not found in ${sourceDir}`);
    continue;
  }
  const { width, height } = SIZES[kindOf(target)];
  await sharp(src)
    .rotate()
    .resize(width, height, {
      fit: "cover",
      position: spec.position ?? "centre",
      withoutEnlargement: false,
    })
    .jpeg({ quality: 82, progressive: true, mozjpeg: true })
    .toFile(path.join(outDir, target));
  console.log(`✓ ${target}  ←  ${path.basename(src)}  (${width}×${height})`);
}

if (failed) {
  console.error(`\n${failed} target(s) skipped — check the file names above.`);
  process.exit(1);
}
console.log(`\nDone → ${path.relative(root, outDir)}/`);
