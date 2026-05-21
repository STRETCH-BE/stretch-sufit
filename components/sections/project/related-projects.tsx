// components/sections/project/related-projects.tsx
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TrackedCTA } from "@/components/ui/TrackedCTA";
import { getOtherProjects } from "@/content/projects";

type Props = {
  currentSlug: string;
};

export function RelatedProjects({ currentSlug }: Props) {
  const others = getOtherProjects(currentSlug, 3);
  const fillers = Math.max(0, 3 - others.length);

  return (
    <section className="bg-[color:var(--paper)] py-20 md:py-28">
      <Container>
        <SectionTitle as="h2">Inne realizacje</SectionTitle>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {others.map((p) => (
            <TrackedCTA
              key={p.slug}
              href={`/realizacje/${p.slug}`}
              event="project_view"
              props={{ project: p.slug, source: currentSlug }}
              variant="bare"
              className="group block overflow-hidden rounded-2xl border border-black/10 bg-white transition hover:border-black/25"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/5">
                <Image
                  src={p.cardImage ?? p.heroImage}
                  alt={`Realizacja ${p.title} — ${p.venue}`}
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-black/50">
                  {p.venue} · {p.year}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-tight">
                  {p.title}
                </h3>
                {p.cardSummary && (
                  <p className="mt-2 text-sm leading-relaxed text-black/65">
                    {p.cardSummary}
                  </p>
                )}
              </div>
            </TrackedCTA>
          ))}

          {/* Placeholder cards until more projects exist */}
          {Array.from({ length: fillers }).map((_, i) => (
            <div
              key={`placeholder-${i}`}
              className="overflow-hidden rounded-2xl border border-dashed border-black/15 bg-white/50"
              aria-hidden
            >
              <div className="flex aspect-[4/3] w-full items-center justify-center bg-black/[0.03]">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-black/30">
                  Wkrótce
                </span>
              </div>
              <div className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-black/35">
                  Realizacja w przygotowaniu
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-tight text-black/40">
                  Coming soon
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/40">
                  Kolejna realizacja pojawi się tutaj wkrótce.
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
