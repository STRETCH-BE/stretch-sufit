/**
 * Project Meta Strip — sticky-style horizontal credits row.
 * File path: /components/sections/project/project-meta-strip.tsx
 *
 * Rendering rules:
 * - `surface_m2 === 0` is treated as "not disclosed" and the row is hidden.
 * - `designStudio.url` is rendered as an outbound link only when it points to
 *   a real third-party website (not back to a stretchplafond.be source page).
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
    { label: "Rok", value: project.yearDisplay ?? String(project.year) },
  ];

  if (project.surface_m2 && project.surface_m2 > 0) {
    items.push({
      label: "Powierzchnia",
      value: `${project.surface_m2} m²`,
    });
  }

  items.push({ label: "Produkt", value: project.product });

  if (project.designStudio) {
    const studio = project.designStudio;
    const isExternalStudio =
      !!studio.url && !studio.url.includes("stretchplafond.be");
    items.push({
      label: "Studio projektowe",
      value: studio.name,
      link: isExternalStudio
        ? {
            href: studio.url,
            ariaLabel: `Strona ${studio.name} — opis projektu ${project.title} (otwiera się w nowej karcie)`,
            event: { destination: studio.name, project: project.slug },
          }
        : undefined,
    });
  }

  return (
    <section className="text-bg border-y border-bg/10 bg-paper">
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
