/**
 * Project Hero — dark full-bleed hero for case-study pages.
 * File path: /components/sections/project/project-hero.tsx
 */

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { TrackedCTA } from "@/components/ui/tracked-cta";
import { MetaChip } from "@/components/ui/meta-chip";

type CtaProps = {
  label: string;
  href: string;
  event: Record<string, string | number | boolean | undefined>;
};

type Props = {
  eyebrow: string;
  titleRed: string;
  titleItalic?: string;
  titleTail?: string;
  subheadFactual: string;
  subheadSecondary: string;
  primaryCta: CtaProps;
  ghostCta: CtaProps;
  heroImage: string;
  heroAlt: string;
  heroCaption?: string;
  chips: string[];
};

export function ProjectHero({
  eyebrow,
  titleRed,
  titleItalic,
  titleTail,
  subheadFactual,
  subheadSecondary,
  primaryCta,
  ghostCta,
  heroImage,
  heroAlt,
  heroCaption,
  chips,
}: Props) {
  return (
    <section className="relative bg-bg text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:gap-10 md:py-24 lg:py-32">
        {/* LEFT — copy */}
        <div className="md:col-span-6">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-white/70">
            <span aria-hidden className="block h-px w-8 bg-red" />
            {eyebrow}
          </p>

          <h1 className="mt-6 text-balance font-display text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-red">{titleRed}</span>{" "}
            {titleItalic && (
              <em className="font-display italic">{titleItalic}</em>
            )}
            {titleTail}
          </h1>

          <div className="mt-6 max-w-xl space-y-3 text-lg leading-relaxed text-white/85 md:text-xl">
            <p>{subheadFactual}</p>
            <p className="text-white/65">{subheadSecondary}</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <TrackedCTA
              href={primaryCta.href}
              event="cta_click"
              props={primaryCta.event}
              className="inline-flex items-center gap-2.5 rounded-full border border-red bg-red px-[26px] py-4 text-sm font-semibold text-white transition-all duration-[250ms] hover:-translate-y-px hover:border-red-deep hover:bg-red-deep"
            >
              {primaryCta.label}
            </TrackedCTA>
            <TrackedCTA
              href={ghostCta.href}
              event="cta_click"
              props={ghostCta.event}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-transparent px-[26px] py-4 text-sm font-semibold text-white transition-all duration-[250ms] hover:-translate-y-px hover:bg-white hover:text-bg"
            >
              {ghostCta.label}
            </TrackedCTA>
          </div>
        </div>

        {/* RIGHT — image + caption + chips */}
        <div className="md:col-span-6">
          <figure className="relative overflow-hidden rounded-2xl ring-1 ring-white/10">
            <Image
              src={heroImage}
              alt={heroAlt}
              width={1280}
              height={960}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full object-cover"
            />
            {heroCaption && (
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-xs text-white/80">
                {heroCaption}
              </figcaption>
            )}
          </figure>
          <div className="mt-5 flex flex-wrap gap-2">
            {chips.map((c) => (
              <MetaChip key={c} tone="dark">
                {c}
              </MetaChip>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
