// components/sections/project/project-gallery.tsx
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { TrackedCTA } from "@/components/ui/TrackedCTA";
import type { ProjectGalleryItem } from "@/types";

type Props = {
  id?: string;
  title?: string;
  gallery: ProjectGalleryItem[];
  indexHref?: string;
};

// Asymmetric layout: 12-col grid, item col-spans cycle for visual rhythm.
const COL_SPANS = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-6",
  "md:col-span-6",
];

export function ProjectGallery({
  id = "galeria",
  title = "Galeria",
  gallery,
  indexHref = "/realizacje",
}: Props) {
  return (
    <section
      id={id}
      className="bg-[color:var(--surface-dark)] py-20 text-white md:py-28"
    >
      <Container>
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
              Galeria
            </p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">{title}</h2>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
          {gallery.map((item, i) => (
            <li
              key={item.src}
              className={`${COL_SPANS[i % COL_SPANS.length]} group`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <figure className="overflow-hidden rounded-xl ring-1 ring-white/10">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="bg-black/40 px-4 py-3 text-sm">
                  <span className="font-medium text-white">{item.caption}</span>
                  <span className="ml-2 italic text-white/60">
                    — {item.note}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <TrackedCTA
            href={indexHref}
            event="cta_click"
            props={{
              location: "project_gallery_footer",
              label: "realizacje_index",
            }}
            variant="link"
            tone="light"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/85 underline underline-offset-4 hover:text-white"
          >
            Zobacz więcej realizacji <span aria-hidden>→</span>
          </TrackedCTA>
        </div>
      </Container>
    </section>
  );
}
