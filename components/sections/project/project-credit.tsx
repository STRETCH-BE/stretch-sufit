/**
 * Project Credit — design-studio attribution section.
 * File path: /components/sections/project/project-credit.tsx
 */

import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { CreditCard } from "@/components/ui/credit-card";
import type { ProjectDesignStudio } from "@/types";

type Props = {
  heading?: string;
  studio: ProjectDesignStudio;
  bodyText: string;
  projectSlug: string;
  intro?: string;
};

export function ProjectCredit({
  heading = "Studio projektowe",
  studio,
  bodyText,
  projectSlug,
  intro = "Wnętrze zostało zaprojektowane od podstaw przez zewnętrzne studio. Nasza rola ograniczała się do dostawy i montażu sufitu w zatwierdzonym przez nich kształcie i wykończeniu.",
}: Props) {
  return (
    <section className="text-bg bg-white py-20 md:py-28">
      <Container className="grid gap-10 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <SectionTitle as="h2">{heading}</SectionTitle>
          <p className="mt-4 max-w-md text-base leading-relaxed text-bg/65">
            {intro}
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
          <figure className="rounded-2xl border border-dashed border-bg/20 bg-paper p-6 md:p-8">
            <blockquote className="text-lg italic leading-relaxed text-bg/75">
              "..."
            </blockquote>
            <figcaption className="mt-4 text-sm text-bg/55">
              — Imię Nazwisko, Stanowisko, Creneau International
            </figcaption>
          </figure>
          */}
        </div>
      </Container>
    </section>
  );
}
