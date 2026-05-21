// components/sections/project/project-credit.tsx
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CreditCard } from "@/components/ui/CreditCard";
import type { ProjectDesignStudio } from "@/types";

type Props = {
  heading?: string;
  studio: ProjectDesignStudio;
  bodyText: string; // 2-sentence neutral credit
  projectSlug: string;
};

export function ProjectCredit({
  heading = "Studio projektowe",
  studio,
  bodyText,
  projectSlug,
}: Props) {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <SectionTitle as="h2">{heading}</SectionTitle>
          <p className="mt-4 max-w-md text-base leading-relaxed text-black/65">
            Wnętrze AFAS Lounge zostało zaprojektowane od podstaw przez
            zewnętrzne studio. Nasza rola ograniczała się do dostawy i montażu
            sufitu w zatwierdzonym przez nich kształcie i wykończeniu.
          </p>
        </div>

        <div className="space-y-6 md:col-span-7">
          <CreditCard
            label="Projekt wnętrza"
            name={studio.name}
            location={studio.location}
            url={studio.url}
            body={<p>{bodyText}</p>}
            outboundEvent={{ destination: "creneau", project: projectSlug }}
          />

          {/* QUOTE_PLACEHOLDER — wstawić zweryfikowany cytat lub usunąć całą kafelkę */}
          {/*
          <figure className="rounded-2xl border border-dashed border-black/20 bg-[color:var(--paper)] p-6 md:p-8">
            <blockquote className="text-lg italic leading-relaxed text-black/75">
              "..."
            </blockquote>
            <figcaption className="mt-4 text-sm text-black/55">
              — Imię Nazwisko, Stanowisko, Creneau International
            </figcaption>
          </figure>
          */}
        </div>
      </Container>
    </section>
  );
}
