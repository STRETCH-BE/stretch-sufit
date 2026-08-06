/**
 * Blog article template — Ukrainian.
 * File path: /app/ua/blog/[slug]/page.tsx
 *
 * One template renders every article from /content/blog-posts.ts.
 * Statically generated at build time via generateStaticParams.
 *
 * SEO / AEO:
 *   - metadata.title WITHOUT the brand suffix (root template appends it)
 *   - openGraph with defaultOgImages (og:image on every article)
 *   - hreflang alternates via blogPostPaths (PL/EN/UA correspondence)
 *   - JSON-LD: BlogPosting + FAQPage + BreadcrumbList
 */

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/ui/fade-in";
import { Nav } from "@/components/sections/ua/nav";
import { Footer } from "@/components/sections/ua/footer";
import { MobileStickyCTA } from "@/components/sections/ua/mobile-sticky-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbs, buildFaqPage } from "@/lib/schema";
import { siteConfig, defaultOgImages } from "@/lib/site-config";
import {
  languageAlternates,
  blogPostPaths,
  findBlogPost,
} from "@/lib/i18n-routes";
import type { BlogPost } from "@/content/blog-posts";
import { blogPosts, findPost } from "@/content/ua/blog-posts";

const BASE_URL = siteConfig.url;

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return {};

  const entry = findBlogPost("ua", slug);
  const languages = entry
    ? languageAlternates(blogPostPaths(entry))
    : undefined;

  return {
    title: post.title,
    description: post.metaDescription,
    alternates: {
      canonical: `/ua/blog/${post.slug}`,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      title: `${post.title} | Stretch Sufit`,
      description: post.metaDescription,
      type: "article",
      url: `${BASE_URL}/ua/blog/${post.slug}`,
      locale: "uk_UA",
      publishedTime: post.datePublished,
      images: defaultOgImages,
    },
  };
}

function buildBlogPosting(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    inLanguage: "uk-UA",
    mainEntityOfPage: `${BASE_URL}/ua/blog/${post.slug}`,
    image: `${BASE_URL}${siteConfig.ogImage}`,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: BASE_URL,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();

  const dateDisplay = new Date(post.datePublished).toLocaleDateString("uk-UA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <JsonLd data={buildBlogPosting(post)} />
      <JsonLd
        data={buildFaqPage(
          post.faq.map((f) => ({ question: f.q, answer: f.a }))
        )}
      />
      <JsonLd
        data={buildBreadcrumbs([
          { name: "Головна", url: BASE_URL },
          { name: "Блог і FAQ", url: `${BASE_URL}/ua/blog` },
          { name: post.title, url: `${BASE_URL}/ua/blog/${post.slug}` },
        ])}
      />

      <Nav />

      <main>
        {/* ── Breadcrumb ── */}
        <nav
          aria-label="breadcrumb"
          className="border-b border-white/5 bg-bg pb-4 pt-28 md:pt-32"
        >
          <Container>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
              <li>
                <Link href="/ua" className="hover:text-white">
                  Головна
                </Link>
              </li>
              <li aria-hidden="true">·</li>
              <li>
                <Link href="/ua/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">·</li>
              <li className="text-white" aria-current="page">
                {post.category}
              </li>
            </ol>
          </Container>
        </nav>

        {/* ── Article hero ── */}
        <header className="relative isolate overflow-hidden bg-bg pb-16 pt-10 md:pb-24 md:pt-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 15% 10%, rgba(225,16,26,0.08), transparent 55%)",
            }}
          />
          <Container>
            <div className="mx-auto max-w-3xl">
              <FadeIn>
                <Eyebrow>
                  {post.category} · {dateDisplay} · {post.readTime} читання
                </Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <h1 className="mt-6 font-display text-[clamp(2rem,5.5vw,3.75rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-white">
                  {post.title}
                </h1>
              </FadeIn>
              <FadeIn delay={160}>
                <div className="mt-8 space-y-5">
                  {post.intro.map((p) => (
                    <p
                      key={p.slice(0, 40)}
                      className="text-lg leading-[1.7] text-white/75 md:text-xl"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </FadeIn>
            </div>
          </Container>
        </header>

        {/* ── Article body ── */}
        <article className="bg-paper py-20 md:py-28">
          <Container>
            <div className="mx-auto max-w-3xl">
              {post.sections.map((section, i) => (
                <FadeIn delay={60} key={section.heading}>
                  <section className={i === 0 ? "" : "mt-16 md:mt-20"}>
                    <h2 className="font-display text-2xl font-semibold leading-tight tracking-[-0.02em] text-bg md:text-3xl">
                      {section.heading}
                    </h2>
                    <div className="mt-5 space-y-5">
                      {section.paragraphs.map((p) => (
                        <p
                          key={p.slice(0, 40)}
                          className="text-[16.5px] leading-[1.75] text-bg/80 md:text-[17px]"
                        >
                          {p}
                        </p>
                      ))}
                    </div>

                    {section.list && (
                      <ul className="mt-6 space-y-3.5">
                        {section.list.map((item) => (
                          <li
                            key={item.slice(0, 40)}
                            className="grid grid-cols-[auto_1fr] gap-3.5 text-[15.5px] leading-[1.65] text-bg/80"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[2px] font-display font-semibold text-red"
                            >
                              —
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.table && (
                      <div className="mt-7 overflow-x-auto rounded border border-bg/10">
                        <table className="w-full min-w-[480px] border-collapse text-left">
                          <thead>
                            <tr className="border-b border-bg/15 bg-paper-2">
                              {section.table.headers.map((h) => (
                                <th
                                  key={h}
                                  className="px-4 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-bg/60"
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row) => (
                              <tr
                                key={row[0]}
                                className="border-b border-bg/10 last:border-0"
                              >
                                {row.map((cell, ci) => (
                                  <td
                                    key={`${row[0]}-${ci}`}
                                    className={
                                      ci === 0
                                        ? "px-4 py-3.5 font-display text-[15px] font-semibold text-bg"
                                        : "px-4 py-3.5 text-[15px] text-bg/75"
                                    }
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </section>
                </FadeIn>
              ))}

              {/* ── Related links ── */}
              <FadeIn delay={80}>
                <aside className="mt-16 rounded border border-bg/10 bg-paper-2 p-7 md:mt-20">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                    Читайте далі
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {post.related.map((r) => (
                      <li key={r.href}>
                        <Link
                          href={r.href}
                          className="font-display text-[15.5px] font-semibold text-bg underline decoration-red/40 underline-offset-4 hover:decoration-red"
                        >
                          {r.label} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </aside>
              </FadeIn>
            </div>
          </Container>
        </article>

        {/* ── FAQ ── */}
        <section className="bg-bg py-20 md:py-28">
          <Container>
            <div className="mx-auto max-w-3xl">
              <FadeIn>
                <Eyebrow>Найчастіші запитання</Eyebrow>
              </FadeIn>
              <FadeIn delay={80}>
                <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">
                  Запитання до цієї теми.
                </h2>
              </FadeIn>

              <div className="mt-10 space-y-2">
                {post.faq.map((entry, i) => (
                  <FadeIn delay={80 + i * 50} key={entry.q}>
                    <details className="group rounded border border-white/10 bg-bg-card/40 p-6 transition-colors open:border-red/40 hover:border-white/20">
                      <summary className="flex cursor-pointer items-start justify-between gap-4 font-display text-base font-semibold text-white md:text-lg">
                        <span>{entry.q}</span>
                        <span
                          aria-hidden="true"
                          className="mt-1 text-red transition-transform group-open:rotate-45"
                        >
                          +
                        </span>
                      </summary>
                      <p className="mt-4 text-[15px] leading-relaxed text-white/75">
                        {entry.a}
                      </p>
                    </details>
                  </FadeIn>
                ))}
              </div>

              <FadeIn delay={400}>
                <div className="mt-10">
                  <Link
                    href="/ua/pytannya"
                    className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-red hover:text-white"
                  >
                    Усі запитання та відповіді →
                  </Link>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        {/* ── CTA ── */}
        <section className="relative isolate overflow-hidden bg-red py-20 text-white md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(circle at 80% 20%, rgba(0,0,0,0.2), transparent 50%)",
            }}
          />
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Від статті до заміру</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(1.9rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Побачте матеріали наживо.{" "}
                <span className="it">Безкоштовно.</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/85">
                Консультант приїде зі зразками, зробить замір і назве ціну
                на місці. Пропозиція дійсна 30 днів.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/ua#cta"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]"
                >
                  Замовити безкоштовний замір →
                </Link>
                <a
                  href="tel:+48455444475"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  +48 455 444 475
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <MobileStickyCTA />
    </>
  );
}
