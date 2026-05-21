/**
 * Project Meta Strip — sticky-style horizontal credits row.
 * File path: /components/sections/project/project-meta-strip.tsx
 */

import { Container } from "@/components/ui/container";
import { TrackedCTA } from "@/components/ui/tracked-cta";
import type { Project } from "@/types";

type Props = {
  project: Project;
};

export function ProjectMetaStrip({ project }: Props) {
  const items: Array<{
    label: string;
    value: string;
    link?: {
      href: string;
      ariaLabel: string;
      event: Record<string, string | number | boolean | undefined>;
    };
  }> = [
    { label: "Klient", value: project.client },
    { label: "Obiekt", value: project.venue },
    { label: "Rok", value: String(project.year) },
    { label: "Powierzchnia", value: `${project.surface_m2} m²` },
    { label: "Produkt", value: project.product },
  ];

  if (project.designStudio) {
    items.push({
      label: "Studio projektowe",
      value: project.designStudio.name,
      link: {
        href: project.designStudio.url,
        ariaLabel: `Strona ${project.designStudio.name} — opis projektu ${project.title} (otwiera się w nowej karcie)`,
        event: { destination: "creneau", project: project.slug },
      },
    });
  }

  return (
    <section className="border-y border-bg/10 bg-paper">
      <Container className="py-6">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 md:grid-cols-6">
          {items.map((it) => (
            <div
              key={it.label}
              className="font-mono text-[11px] uppercase tracking-[0.16em]"
            >
              <dt className="text-bg/45">{it.label}</dt>
              <dd className="mt-1 text-sm normal-case tracking-normal text-bg/85">
                {it.link ? (
                  <TrackedCTA
                    href={it.link.href}
                    event="outbound_click"
                    props={it.link.event}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 underline underline-offset-4 hover:text-red"
                    aria-label={it.link.ariaLabel}
                  >
                    {it.value} <span aria-hidden>↗</span>
                  </TrackedCTA>
                ) : (
                  it.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
