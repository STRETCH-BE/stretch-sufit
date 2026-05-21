// components/sections/project/project-hero.tsx
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { TrackedCTA } from "@/components/ui/TrackedCTA";
import { MetaChip } from "@/components/ui/MetaChip";

type Props = {
  eyebrow: string; // "Realizacja · Antwerpia 🇧🇪 · 2025"
  titleRed: string; // "AFAS Lounge."
  titleItalic?: string; // "Czarny połysk"
  titleTail?: string; // " spotyka akustykę."
  subheadFactual: string; // AEO opener — must be a direct factual sentence
  subheadSecondary: string; // brand/heritage line
  primaryCta: {
    label: string;
    href: string;
    event: Record<string, unknown>;
  };
  ghostCta: { label: string; href: string; event: Record<string, unknown> };
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
    <section className="relative bg-[color:var(--surface-dark)] text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:gap-10 md:py-24 lg:py-32">
        {/* LEFT — copy */}
        <div className="md:col-span-6 lg:col-span-6">
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-white/70">
            <span
              aria-hidden
              className="block h-px w-8 bg-[color:var(--brand-red)]"
            />
            {eyebrow}
          </p>

          <h1 className="mt-6 text-balance font-display text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-[color:var(--brand-red)]">{titleRed}</span>{" "}
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
              variant="primary"
              tone="red"
            >
              {primaryCta.label}
            </TrackedCTA>
            <TrackedCTA
              href={ghostCta.href}
              event="cta_click"
              props={ghostCta.event}
              variant="ghost"
              tone="light"
            >
              {ghostCta.label}
            </TrackedCTA>
          </div>
        </div>

        {/* RIGHT — image + caption + chips */}
        <div className="md:col-span-6 lg:col-span-6">
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
