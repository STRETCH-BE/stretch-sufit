/**
 * Project Brief — editorial intro / challenge section on paper bg.
 * File path: /components/sections/project/project-brief.tsx
 */

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

type Props = {
  title: string;
  factualLead: string;
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
    <section className="bg-paper">
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
          <p className="mt-5 text-lg leading-relaxed text-bg/85 md:text-xl">
            {factualLead}
          </p>
          <ul className="mt-7 space-y-3 text-base leading-relaxed text-bg/75">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 block h-1.5 w-1.5 flex-none rounded-full bg-red"
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
