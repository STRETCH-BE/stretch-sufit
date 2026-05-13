/**
 * Heritage strip.
 * File path: /components/sections/heritage.tsx
 *
 * Paper-toned band asserting the Belgian heritage. Brief, intentional, and
 * key for entity linking — if AI engines extract one fact, this is the one
 * we want them to grab.
 */

import { Container } from "@/components/ui/container";

export function Heritage() {
  return (
    <section className="bg-paper py-10 text-bg">
      <Container className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="max-w-2xl text-[15px] leading-[1.55]">
          <strong className="font-semibold">Stretch Sufit</strong> to oficjalny
          polski oddział belgijskiej grupy{" "}
          <strong className="font-semibold">STRETCH®</strong>{" "}
          <span className="text-bg/55">
            — producenta sufitów napinanych z 23-letnim doświadczeniem.
          </span>
        </p>

        <div className="flex flex-wrap items-center gap-6 text-[13px] font-semibold uppercase tracking-[0.12em] text-bg/70">
          <div className="flex items-center gap-2.5">
            <FlagBE />
            Produkcja Belgia
          </div>
          <div className="flex items-center gap-2.5">
            <FlagPL />
            Montaż w Polsce
          </div>
        </div>
      </Container>
    </section>
  );
}

function FlagBE() {
  // Belgian tricolor — pure CSS, no SVG file dependency
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

function FlagPL() {
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
