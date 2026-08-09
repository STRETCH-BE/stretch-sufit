/**
 * Quote funnel thank-you page — /wycena/dziekujemy.
 * File path: /app/wycena/dziekujemy/page.tsx
 *
 * Conversion accounting (documented decision):
 * The `wycena_form_submit` conversion event is fired EXACTLY ONCE per
 * lead, client-side in components/sections/wycena/hero-form.tsx, on a
 * confirmed 2xx response from /api/wycena — immediately BEFORE the
 * router.push() to this page. This page fires no conversion events of
 * its own, so a refresh, a bookmark, or a direct visit here can never
 * double-count a lead. The form additionally stamps
 * sessionStorage["wycena_lead_submitted"] before redirecting; any future
 * page-level tracking added here MUST check-and-clear that flag before
 * firing anything.
 *
 * SEO: noindex via metadata.robots (NOT via robots.txt — crawlers must
 * be able to fetch the page to see the noindex). Also excluded from
 * app/sitemap.ts.
 */

import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { FadeIn } from "@/components/ui/fade-in";
import { TrackedCTA } from "@/components/ui/tracked-cta";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Dziękujemy — zgłoszenie przyjęte",
  description:
    "Twoje zgłoszenie dotarło do nas. Oddzwonimy w ciągu 15 minut w godzinach pracy.",
  robots: {
    index: false,
    follow: true,
  },
};

const WHATSAPP_HREF = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent('Dzień dobry, właśnie wysłałem/am formularz wyceny. Chciałbym/Chciałabym dodać szczegóły.')}`;

export default function DziekujemyPage() {
  return (
    <>
      <Nav ctaHref="/wycena" />

      <main>
        <section className="relative isolate overflow-hidden bg-bg pb-20 pt-[140px] md:pb-28 md:pt-[170px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(225,16,26,0.14), transparent 60%)",
            }}
          />

          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <FadeIn>
                <div className="mx-auto mb-8 flex size-16 items-center justify-center rounded-full bg-red">
                  <span aria-hidden="true" className="text-3xl text-white">
                    ✓
                  </span>
                </div>
                <Eyebrow className="justify-center">
                  Zgłoszenie przyjęte
                </Eyebrow>
              </FadeIn>

              <FadeIn delay={80}>
                <h1 className="mt-6 font-display text-[clamp(36px,7vw,72px)] font-semibold leading-[1.0] tracking-[-0.03em] text-white">
                  Dziękujemy!
                  <br />
                  <span className="it">Oddzwonimy do Ciebie.</span>
                </h1>
              </FadeIn>

              <FadeIn delay={160}>
                <p className="mx-auto mt-6 max-w-xl text-[17px] leading-[1.6] text-white/70">
                  W godzinach pracy (pn–pt 09:00–15:30) oddzwaniamy zwykle{" "}
                  <strong className="font-semibold text-white">
                    w ciągu 15 minut
                  </strong>
                  . Poza nimi — następnego dnia roboczego. Chcesz dodać
                  szczegóły albo przyspieszyć sprawę?
                </p>
              </FadeIn>

              <FadeIn delay={240}>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
                  <TrackedCTA
                    event="phone_click"
                    props={{ location: "thankyou" }}
                    href={`tel:${siteConfig.contact.phonePL}`}
                    className="inline-flex items-center gap-2.5 rounded-full border border-red bg-red px-[26px] py-4 text-sm font-semibold text-white transition-colors hover:border-red-deep hover:bg-red-deep"
                  >
                    📞 +48 730 700 333
                  </TrackedCTA>
                  <TrackedCTA
                    event="whatsapp_click"
                    props={{ location: "thankyou" }}
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#25d366] px-[26px] py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-px"
                  >
                    💬 Napisz na WhatsApp
                  </TrackedCTA>
                </div>
              </FadeIn>

              <FadeIn delay={320}>
                <div className="mt-14 border-t border-white/10 pt-10">
                  <p className="text-sm text-white/55">
                    W międzyczasie zobacz, co robimy:
                  </p>
                  <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                    <Link
                      href="/realizacje"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-red hover:text-red"
                    >
                      Nasze realizacje →
                    </Link>
                    <Link
                      href="/blog"
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-red hover:text-red"
                    >
                      Blog i porady →
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
