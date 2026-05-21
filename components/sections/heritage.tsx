/**
 * Heritage strip.
 * File path: /components/sections/heritage.tsx
 *
 * Paper-toned band asserting the Belgian heritage. Brief, intentional, and
 * key for entity linking — if AI engines extract one fact, this is the one
 * we want them to grab.
 *
 * Reusable: pass `paragraph` and `tags` to override. Defaults match the
 * original homepage copy, so the existing <Heritage /> call keeps working.
 */

import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";

type FlagCode = "BE" | "PL";

type HeritageTag = {
  flag: FlagCode;
  label: string;
};

type Props = {
  /** Override the paragraph copy. Default = homepage's STRETCH heritage line. */
  paragraph?: ReactNode;
  /** Override the flag+label pair shown on the right. Default = BE Produkcja / PL Montaż. */
  tags?: HeritageTag[];
};

const DEFAULT_TAGS: HeritageTag[] = [
  { flag: "BE", label: "Produkcja Belgia" },
  { flag: "PL", label: "Montaż w Polsce" },
];

const DEFAULT_PARAGRAPH = (
  <>
    <strong className="font-semibold">Stretch Sufit</strong> to oficjalny polski
    oddział belgijskiej grupy{" "}
    <strong className="font-semibold">STRETCH®</strong>{" "}
    <span className="text-bg/55">
      — producenta sufitów napinanych z 23-letnim doświadczeniem.
    </span>
  </>
);

export function Heritage({
  paragraph = DEFAULT_PARAGRAPH,
  tags = DEFAULT_TAGS,
}: Props = {}) {
  return (
    <section className="bg-paper py-10 text-bg">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="max-w-2xl text-[15px] leading-[1.55]">{paragraph}</p>

        <div className="flex flex-wrap items-center gap-6 text-[13px] font-semibold uppercase tracking-[0.12em] text-bg/70">
          {tags.map((t, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <Flag code={t.flag} />
              {t.label}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Flag({ code }: { code: FlagCode }) {
  if (code === "BE") {
    return (
      <span
        aria-hidden="true"
        className="inline-flex h-3 w-[22px] overflow-hidden rounded-[1px] border border-bg/10"
      >
        <span className="h-full w-1/3 bg-black" />
        <span className="h-full w-1/3 bg-[#FAE042]" />
        <span className="h-full w-1/3 bg-[#ED2939]" />
      </span>
    );
  }
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-3 w-[22px] flex-col overflow-hidden rounded-[1px] border border-bg/10"
    >
      <span className="h-1/2 w-full bg-white" />
      <span className="h-1/2 w-full bg-[#DC143C]" />
    </span>
  );
}
