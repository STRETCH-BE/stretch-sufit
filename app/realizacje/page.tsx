// app/realizacje/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { MobileStickyCTA } from "@/components/sections/mobile-sticky-cta";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Realizacje sufitów napinanych | Stretch Sufit",
  description:
    "Wybrane realizacje sufitów napinanych Stretch Sufit — projekty komercyjne i prywatne w Polsce i Europie.",
  alternates: { canonical: "/realizacje" },
};

export default function RealizacjeIndexPage() {
  return (
    <>
      <Nav />
      <main id="main">
        <section className="bg-paper py-20 md:py-28">
          <Container>
            <SectionTitle as="h1">Realizacje</SectionTitle>
            <p className="mt-4 max-w-2xl text-lg text-bg/70">
              Wybrane projekty sufitów napinanych. Pełne case studies w
              przygotowaniu.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  href={`/realizacje/${p.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-bg/10 bg-white transition hover:border-bg/25"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg/5">
                    <Image
                      src={p.cardImage ?? p.heroImage}
                      alt={`Realizacja ${p.title} — ${p.venue}`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-bg/50">
                      {p.venue} · {p.year}
                    </p>
                    <h2 className="mt-2 text-lg font-semibold leading-tight">
                      {p.title}
                    </h2>
                    {p.cardSummary && (
                      <p className="mt-2 text-sm leading-relaxed text-bg/65">
                        {p.cardSummary}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <MobileStickyCTA />
      <Footer />
    </>
  );
}
