// components/sections/project/project-brief.tsx
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";

type Props = {
  title: string; // "Wyzwanie projektu"
  factualLead: string; // AEO opener
  bullets: string[];
  image: string;
  imageAlt: string;
};

export function ProjectBrief({
  title,
  factualLead,
  bullets,
  image,
  imageAlt,
}: Props) {
  return (
    <section className="bg-[color:var(--paper)]">
      <Container className="grid gap-10 py-20 md:grid-cols-12 md:gap-12 md:py-28">
        <div className="md:col-span-5">
          <figure className="overflow-hidden rounded-2xl">
            <Image
              src={image}
              alt={imageAlt}
              width={900}
              height={1100}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="h-auto w-full object-cover"
              loading="lazy"
            />
          </figure>
        </div>
        <div className="md:col-span-7">
          <SectionTitle as="h2">{title}</SectionTitle>
          <p className="mt-5 text-lg leading-relaxed text-black/85 md:text-xl">
            {factualLead}
          </p>
          <ul className="mt-7 space-y-3 text-base leading-relaxed text-black/75">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 block h-1.5 w-1.5 flex-none rounded-full bg-[color:var(--brand-red)]"
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
