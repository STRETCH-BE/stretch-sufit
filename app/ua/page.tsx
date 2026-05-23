/**
 * Homepage — Ukrainian locale.
 * File path: /app/ua/page.tsx
 */

import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import {
  buildLocalBusiness,
  buildBreadcrumbs,
  buildFaqPage,
} from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

import { Nav } from "@/components/sections/ua/nav";
import { Hero } from "@/components/sections/ua/hero";
import { Ticker } from "@/components/sections/ticker";
import { Heritage } from "@/components/sections/heritage";
import { Stats } from "@/components/sections/stats";
import { EditorialIntro } from "@/components/sections/ua/editorial-intro";
import { Solutions } from "@/components/sections/ua/solutions";
import { Process } from "@/components/sections/ua/process";
import { Showcase } from "@/components/sections/ua/showcase";
import { WhyUs } from "@/components/sections/ua/why-us";
import { Testimonials } from "@/components/sections/ua/testimonials";
import { Cities } from "@/components/sections/ua/cities";
import { CtaFinal } from "@/components/sections/ua/cta-final";
import { Footer } from "@/components/sections/ua/footer";
import { MobileStickyCTA } from "@/components/sections/ua/mobile-sticky-cta";

export const metadata: Metadata = {
  title: "Stretch Sufit — Нова стеля за один день | Преміум натяжні стелі",
  description:
    "Натяжні стелі у Польщі. ПВХ виробляється на нашій фабриці в Польщі (безшовно до 6,50 м), поліестер з Бельгії. Частина Stretchgroup. Монтаж за 1 день, без пилу, до 15 років гарантії. 17 міст у Польщі.",
  alternates: {
    canonical: "/ua",
    languages: {
      "pl-PL": "/",
      "en-US": "/en",
      "uk-UA": "/ua",
    },
  },
  openGraph: {
    title: "Stretch Sufit — Нова стеля за один день",
    description:
      "Натяжні стелі. ПВХ виробляється у Польщі, поліестер у Бельгії. Монтаж за 1 день, без пилу, до 15 років гарантії.",
    url: `${siteConfig.url}/ua`,
    siteName: siteConfig.name,
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Stretch Sufit — преміум натяжні стелі",
      },
    ],
  },
};

const faqs = [
  {
    question: "Що таке натяжна стеля?",
    answer:
      "Натяжна стеля — це гнучка мембрана з ПВХ-плівки або тканої поліестрової тканини, натягнута на алюмінієвий профіль, закріплений по периметру приміщення. Створює ідеально гладку безшовну поверхню за один день — без штукатурки, без фарбування, без пилу. Stretch Sufit виробляє ПВХ на нашій фабриці в Польщі (з 2016 року) й монтує поліестер з бельгійської Stretchgroup (з 2018 року).",
  },
  {
    question: "Скільки часу займає монтаж натяжної стелі?",
    answer:
      "Монтаж зазвичай займає 1 день. Бригада з двох монтажників Stretch Sufit встановлює до 50 м² за день — без оздоблювальних робіт, без пилу, без необхідності переставляти меблі. Можна залишатися в приміщенні протягом усього монтажу.",
  },
  {
    question: "Скільки коштує натяжна стеля?",
    answer:
      "Ціна залежить від площі, типу мембрани (ПВХ або поліестер), фактури (мат, глянець, сатин, блискітки, текстура, фотодрук) та інтеграції LED-освітлення. Stretch Sufit пропонує безкоштовний замір і кошторис — кошториси дійсні 30 днів без прихованих платежів.",
  },
  {
    question: "Як натяжна стеля порівнюється з підвісною?",
    answer:
      "Натяжна стеля — це гнучка мембрана на профілі — монтаж за 1 день, без штукатурки чи фарбування, демонтовна, без пилу. Підвісна стеля з гіпсокартону потребує сталевого каркасу, штукатурки й фарбування, монтаж зазвичай 3–7 днів. Натяжні стелі мають термін служби 25 років і гарантію до 15 років (15 років на ПВХ, 10 років на поліестер).",
  },
];

const heritageParagraph = (
  <>
    <strong className="font-semibold">Stretch Sufit</strong> — частина бельгійської{" "}
    <strong className="font-semibold">Stretchgroup</strong>{" "}
    <span className="text-bg/55">
      — виробника натяжних стель. Поліестер виробляється в Бельгії, ПВХ — на нашій фабриці в Польщі.
    </span>
  </>
);

const heritageTags = [
  { flag: "BE" as const, label: "Поліестер · Бельгія" },
  { flag: "PL" as const, label: "ПВХ · Польща" },
];

const tickerPhrases = [
  "ПВХ виробляється в Польщі",
  "Поліестер виробляється в Бельгії",
  "Безшовно до 6,50 м",
  "Мат · Глянець · Блискітки · Текстура",
  "Без оздоблювальних робіт",
  "100% перероблюється",
];

const stats = [
  {
    number: <span className="text-red">1</span>,
    suffix: "день",
    emphasis: "Уся стеля готова.",
    description: "До 50 м² за день бригадою з 2 монтажників.",
  },
  {
    number: "25",
    suffix: "років",
    emphasis: "Термін служби.",
    description: "Стійкість до вологи, температури й часу.",
  },
  {
    number: "130",
    suffix: "+",
    emphasis: "Кольорів і фактур.",
    description: "Мат, глянець, сатин, блискітки, текстура, фотодрук, прозорий.",
  },
  {
    number: <span className="text-red">0</span>,
    suffix: "пилу",
    emphasis: "Чистий монтаж.",
    description: "Без штукатурки, без фарбування, без безладу.",
  },
];

export default function HomePageUk() {
  return (
    <>
      <JsonLd data={buildLocalBusiness()} />
      <JsonLd
        data={buildBreadcrumbs([{ name: "Головна", url: `${siteConfig.url}/ua` }])}
      />
      <JsonLd data={buildFaqPage(faqs)} />

      <Nav />
      <main>
        <Hero />
        <Ticker items={tickerPhrases} />
        <Heritage paragraph={heritageParagraph} tags={heritageTags} />
        <Stats items={stats} ariaLabel="Ключові факти" />
        <EditorialIntro />
        <Solutions />
        <Process />
        <Showcase />
        <WhyUs />
        <Testimonials />
        <Cities />
        <CtaFinal />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
