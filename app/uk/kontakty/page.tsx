/**
 * Contact page — Ukrainian. /uk/kontakty
 * File path: /app/uk/kontakty/page.tsx
 */

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { FadeIn } from "@/components/ui/fade-in";
import { Nav } from "@/components/sections/uk/nav";
import { Footer } from "@/components/sections/uk/footer";
import { MobileStickyCTA } from "@/components/sections/uk/mobile-sticky-cta";
import { JsonLd } from "@/components/seo/json-ld";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://stretch-sufit.vercel.app";

export const metadata: Metadata = {
  title: "Контакти — зателефонуйте, напишіть або приходьте | Stretch Sufit",
  description:
    "Зв'яжіться зі Stretch Sufit — офіс у Ченстохові, вул. Лєгіонів 59. Тел. +48 455 444 475 (UA), +48 730 700 333 (PL/EN). Безкоштовний замір у 17 містах Польщі.",
  alternates: { canonical: "/uk/kontakty" },
  openGraph: {
    title: "Контакти | Stretch Sufit",
    description: "Зателефонуйте, напишіть або приходьте до шоуруму в Ченстохові.",
    type: "website",
    url: `${BASE_URL}/uk/kontakty`,
    locale: "uk_UA",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/uk/kontakty#business`,
  name: "Stretch Sufit",
  legalName: "Alto Design Sp. z o.o.",
  url: BASE_URL,
  telephone: "+48730700333",
  email: "info@stretch-sufit.pl",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Legionów 59",
    addressLocality: "Częstochowa",
    postalCode: "42-200",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.8074338,
    longitude: 19.1585487,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "15:30",
    },
  ],
  priceRange: "$$",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Головна", item: `${BASE_URL}/uk` },
    { "@type": "ListItem", position: 2, name: "Контакти", item: `${BASE_URL}/uk/kontakty` },
  ],
};

export default function ContactPageUk() {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Nav />

      <main>
        <nav aria-label="breadcrumb" className="border-b border-white/5 bg-bg pb-4 pt-28 md:pt-32">
          <Container>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">
              <li><Link href="/uk" className="hover:text-white">Головна</Link></li>
              <li aria-hidden="true">·</li>
              <li className="text-white" aria-current="page">Контакти</li>
            </ol>
          </Container>
        </nav>

        <section className="relative isolate overflow-hidden bg-bg pb-16 pt-12 md:pb-20 md:pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(ellipse at 20% 10%, rgba(225,16,26,0.08), transparent 60%)",
            }}
          />
          <Container>
            <div className="mx-auto max-w-4xl">
              <FadeIn><Eyebrow>Ченстохова · вул. Лєгіонів 59</Eyebrow></FadeIn>
              <FadeIn delay={80}>
                <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-white">
                  Зателефонуйте, напишіть{" "}
                  <span className="it text-paper">або приходьте.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={160}>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                  Розмовляємо українською. Три способи зв'язку, одна обіцянка: передзвонюємо протягом 24 годин у робочі дні. Шоурум відкритий з понеділка по п'ятницю.
                </p>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="bg-bg pb-20 md:pb-24">
          <Container>
            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              <FadeIn>
                <a href="tel:+48455444475" className="group block rounded border border-white/10 bg-bg-card/40 p-8 transition-all hover:border-red hover:bg-bg-card">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">
                    Телефон · UA
                  </div>
                  <div className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">
                    +48 455 444 475
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/65">
                    Найшвидший спосіб. Розмовляємо українською. Робочі години — Пн–Пт.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-red">
                    Зателефонувати
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={80}>
                <a href="https://wa.me/48455444475" target="_blank" rel="noopener noreferrer" className="group block rounded border border-white/10 bg-bg-card/40 p-8 transition-all hover:border-[#25d366] hover:bg-bg-card">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#25d366]">
                    WhatsApp
                  </div>
                  <div className="mt-5 font-display text-3xl font-semibold tracking-[-0.02em] text-white md:text-4xl">
                    Напишіть
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/65">
                    Надішліть фото приміщення, розміри або просто опишіть проєкт. Зазвичай відповідаємо протягом 2 годин у робочі дні.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-[#25d366]">
                    Відкрити WhatsApp
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </a>
              </FadeIn>

              <FadeIn delay={160}>
                <a href="mailto:info@stretch-sufit.pl" className="group block rounded border border-white/10 bg-bg-card/40 p-8 transition-all hover:border-white/30 hover:bg-bg-card">
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/65">
                    Email
                  </div>
                  <div className="mt-5 font-display text-lg font-semibold tracking-[-0.01em] text-white md:text-xl">
                    info@stretch-sufit.pl
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-white/65">
                    Для креслень, проєктів, кошторисів. Відповідаємо протягом 24 годин у робочі дні.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold text-white">
                    Написати email
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </a>
              </FadeIn>
            </div>

            <FadeIn delay={220}>
              <div className="mt-8 rounded border border-white/5 bg-bg-soft/40 p-6 text-center">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/50">
                  Польський контакт · Polski telefon
                </span>
                <a href="tel:+48730700333" className="ml-3 font-display text-base font-semibold text-white hover:text-red">
                  +48 730 700 333
                </a>
              </div>
            </FadeIn>
          </Container>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5">
                <FadeIn><Eyebrow tone="on-paper">Шоурум і офіс</Eyebrow></FadeIn>
                <FadeIn delay={80}>
                  <SectionTitle className="mt-5 text-bg">
                    Приходьте подивитися{" "}
                    <span className="it">матеріали наживо.</span>
                  </SectionTitle>
                </FadeIn>
                <FadeIn delay={140}>
                  <p className="mt-6 text-[17px] leading-[1.7] text-bg/80">
                    У шоурумі показуємо зразки всіх плівок (ПВХ, поліестер, акустичний, фотодрук), монтажні профілі, приклади LED-освітлення. Консультація з інженером виробництва — без запису, у робочі години.
                  </p>
                </FadeIn>

                <FadeIn delay={200}>
                  <div className="mt-10 space-y-6">
                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">Адреса</div>
                      <div className="mt-2 font-display text-lg font-semibold text-bg">Alto Design Sp. z o.o.</div>
                      <div className="text-[15px] text-bg/75">
                        ul. Legionów 59<br />
                        42-200 Częstochowa, Польща
                      </div>
                    </div>

                    <div>
                      <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-red">Робочі години</div>
                      <table className="mt-2 text-[15px] text-bg/80">
                        <tbody>
                          <tr>
                            <td className="pr-6 py-1 font-display font-semibold text-bg">Пн–Пт</td>
                            <td>09:00 – 15:30</td>
                          </tr>
                          <tr>
                            <td className="pr-6 py-1 font-display font-semibold text-bg/60">Сб–Нд</td>
                            <td className="text-bg/60">закрито</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Legion%C3%B3w+59%2C+42-200+Cz%C4%99stochowa%2C+Poland"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-bg px-6 py-3 font-display text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                      >
                        Прокласти маршрут →
                      </a>
                    </div>
                  </div>
                </FadeIn>
              </div>

              <div className="md:col-span-7">
                <FadeIn delay={120}>
                  <div className="overflow-hidden rounded border border-bg/10">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2547.6!2d19.1559738!3d50.8074372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710b562eb829d39%3A0xfbfd5d10b239e548!2sAlto%20Design%20Sp.%20Z%20o.o.%20-%20Sufity%20napinane!5e0!3m2!1suk!2spl!4v1715000000000"
                      width="100%"
                      height="500"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Карта: Alto Design (Stretch Sufit), Ченстохова"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-bg py-20 md:py-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <FadeIn><Eyebrow>Зона обслуговування</Eyebrow></FadeIn>
              <FadeIn delay={80}>
                <SectionTitle className="mt-5 text-white">
                  17 міст у Польщі.{" "}
                  <span className="it text-paper">Одна команда.</span>
                </SectionTitle>
              </FadeIn>
              <FadeIn delay={140}>
                <p className="mt-6 text-lg leading-relaxed text-white/70">
                  Реалізуємо монтажі по всій Польщі — базуємося в Ченстохові, обслуговуємо Варшаву, Краків, Вроцлав, Познань, Ґданськ, Лодзь, Катовіце та інші. Повний список міст на сторінці регіонального обслуговування.
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <div className="mt-8">
                  <Link href="/uk/natiazhni-steli" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 font-display text-sm font-semibold text-white transition-colors hover:border-red hover:text-red">
                    Усі міста →
                  </Link>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="relative isolate overflow-hidden bg-red py-24 text-white md:py-28">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow tone="on-dark">Безкоштовний замір</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.025em] text-white">
                Не знаєте, який варіант підходить?{" "}
                <span className="it">Замір і кошторис безкоштовні.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-white/85">
                Заповніть форму або зателефонуйте. Передзвонимо протягом 24 годин.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link href="/uk#cta" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-display text-base font-semibold text-bg transition-transform hover:scale-[1.02]">
                  Замовити безкоштовний замір →
                </Link>
                <a href="tel:+48455444475" className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 font-display text-base font-semibold text-white transition-colors hover:bg-white/10">
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
