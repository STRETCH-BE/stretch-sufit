/**
 * Full city content for /en/stretch-ceilings/[city] pages — English.
 * File path: /content/en/cities-full.ts
 *
 * For v1, only top 3 cities (Warsaw, Kraków, Wrocław) have full pages.
 * Other 14 cities show in the homepage Cities block + the /en/stretch-ceilings
 * hub but link to the hub itself, not their own page.
 *
 * Framing is for English-speaking audiences (expats, foreign investors,
 * international clients) — slightly different angle from the Polish version.
 */

import type { City } from "@/types";

export const citiesFull: City[] = [
  {
    slug: "warsaw",
    name: "Warsaw",
    region: "Masovian",
    locative: "in Warsaw",
    populationDisplay: "1.86 M residents",
    distanceFromHq: 220,
    districts: [
      "Śródmieście",
      "Mokotów",
      "Żoliborz",
      "Wilanów",
      "Ursynów",
      "Wola",
      "Bemowo",
      "Bielany",
      "Saska Kępa",
      "Praga-Południe",
    ],
    intro:
      "Warsaw is the most demanding market we serve in Poland. Clients in the capital expect premium — designer apartments in Mokotów, lofts in Praga, classic flats in Śródmieście. We install everything from 20 m² home projects up to full office floors in Wilanów and Ursynów. Our team is on your site within 2–3 hours of our Częstochowa HQ.",
    trustBlocks: [
      {
        title: "Local presence, global system",
        body: 'Part of the Belgian Stretchgroup — PVC manufactured in our Alto Design factory in Częstochowa, polyester from Belgium. Installation by trained teams across all of Warsaw. No subcontractors, no "crew from a recommendation."',
      },
      {
        title: "Capital-city experience",
        body: "Projects across apartments in Mokotów, lofts in Praga, classic flats in Śródmieście, and offices in Wilanów. We know the quirks of Warsaw interiors.",
      },
      {
        title: "Complete in 1 day",
        body: "Measurement, materials and installation — all in a single working day. No dust, no finishing work, no interference with your existing decor.",
      },
    ],
    faq: [
      {
        q: "Do you install stretch ceilings across all of Warsaw?",
        a: "Yes — we serve every district: Mokotów, Żoliborz, Wilanów, Ursynów, Wola, Bemowo, Bielany, Praga (North and South), Saska Kępa and Śródmieście. We also cover the surrounding areas: Piaseczno, Pruszków, Legionowo, Marki.",
      },
      {
        q: "How much does a stretch ceiling cost in Warsaw?",
        a: "Price depends on surface area, membrane type (PVC, polyester, acoustic, photo print) and lighting. Warsaw projects start at around 180 PLN/m². Free on-site measurement and quote — no commitment.",
      },
      {
        q: "How quickly can you get to a client in Warsaw?",
        a: "Measurement usually within 3–5 working days of enquiry. Installation itself takes 1 day — after the material is produced and delivered from our Częstochowa factory.",
      },
      {
        q: "Do you offer acoustic ceilings for offices in Warsaw?",
        a: "Yes. Warsaw is our largest B2B market — we install A2-rated acoustic ceilings in open-plan offices in Wilanów, Mokotów and Służewiec, restaurants in Śródmieście, and studios in Praga. Reverberation reduction up to 75%.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80",
    imageAlt: "Stretch ceiling in a Mokotów apartment, Warsaw",
  },
  {
    slug: "krakow",
    name: "Kraków",
    region: "Lesser Poland",
    locative: "in Kraków",
    populationDisplay: "803,000 residents",
    distanceFromHq: 116,
    districts: [
      "Old Town",
      "Kazimierz",
      "Podgórze",
      "Krowodrza",
      "Zwierzyniec",
      "Bronowice",
      "Nowa Huta",
    ],
    intro:
      "Kraków combines historic tenement buildings with modern apartment complexes — and each context demands a different approach to the ceiling. We install in Kazimierz, the Old Town, Podgórze and Nowa Huta. A short drive from our Częstochowa HQ (116 km) lets us move quickly, even on tight deadlines.",
    trustBlocks: [
      {
        title: "Experience in heritage interiors",
        body: "Installations in the tenements of Kazimierz and the Old Town — without touching the original ceilings. Stretch ceilings are often the only option in conservation-protected premises.",
      },
      {
        title: "Restaurants & gastronomy",
        body: "Kraków has the densest restaurant scene in Poland. We deliver acoustic ceilings that solve reverb problems and decorative ceilings that build atmosphere.",
      },
      {
        title: "Fast turnaround",
        body: "From Częstochowa we're in Kraków in about 90 minutes. Tight remodel schedule? We can compress the timeline.",
      },
    ],
    faq: [
      {
        q: "Do you install stretch ceilings in heritage Kraków tenement buildings?",
        a: "Yes — and they're often the best option. We don't drill into the original ceiling, installation is only on perimeter profiles. We always recommend consulting the building manager and, where required, the heritage conservator first.",
      },
      {
        q: "Do you do restaurant interiors in Kraków?",
        a: "Yes — Kraków restaurants are a strong segment for us. We install acoustic ceilings (reverb reduction up to 75%), photo-print ceilings with custom designs, and combinations of both. Always working around opening hours.",
      },
      {
        q: "Can I order a photo-printed ceiling in Kraków?",
        a: "Yes. Photo print is a popular choice with Kraków restaurateurs — full design freedom: custom artwork, historic motifs, atmospheric photography. Print resolution at up to 1440 DPI, colour warranty up to 15 years (15 yr PVC print, 10 yr polyester).",
      },
      {
        q: "How long is the wait for installation in Kraków?",
        a: "Standard 2–3 weeks from enquiry: measurement within 3–5 days, membrane production 5–10 days, installation 1 day. Tight deadline? We can usually accelerate.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?w=1600&q=80",
    imageAlt: "Stretch ceiling in a Kazimierz tenement, Kraków",
  },
  {
    slug: "wroclaw",
    name: "Wrocław",
    region: "Lower Silesian",
    locative: "in Wrocław",
    populationDisplay: "672,000 residents",
    distanceFromHq: 180,
    districts: [
      "Stare Miasto",
      "Krzyki",
      "Fabryczna",
      "Psie Pole",
      "Śródmieście",
    ],
    intro:
      "Wrocław is one of the fastest-growing residential and commercial markets in Poland. New developments in Krzyki, office buildings in Fabryczna, lofts in Psie Pole. We deliver premium projects to Wrocław clients from our Częstochowa factory (180 km), with one-day installation and material warranty up to 15 years (15 yr PVC, 10 yr polyester).",
    trustBlocks: [
      {
        title: "Premium developer projects",
        body: "Stretch ceilings as a standard in premium residential developments in Krzyki, Maślice and Psie Pole. We work with developers on bulk programs.",
      },
      {
        title: "Up to 15 years warranty",
        body: "Manufacturer material warranty — 15 years on PVC from our factory in Poland, 10 years on polyester from Stretch Productions BV in Belgium. Among the longest in the stretch ceiling market.",
      },
      {
        title: "Full product range",
        body: "Polyester (Belgium), PVC (Poland), acoustic, photo print, LED — the full Stretchgroup catalogue with warranty up to 15 years.",
      },
    ],
    faq: [
      {
        q: "Do you install stretch ceilings throughout Wrocław?",
        a: "Yes — we serve all of Wrocław and its agglomeration (Bielany Wrocławskie, Długołęka, Kobierzyce). Installation in 1 day, warranty up to 15 years.",
      },
      {
        q: "Do you work with Wrocław developers on residential projects?",
        a: "Yes — a significant share of our work. We deliver stretch ceilings as standard in premium developments. Volume pricing on bulk orders (50+ units).",
      },
      {
        q: "How long is the wait for measurement in Wrocław?",
        a: "Standard 5–7 working days from enquiry. In peak season (Apr–Jun, Sep–Nov) up to 10 days. For priority cases — we expedite.",
      },
      {
        q: "Do you handle full apartment ceilings in Wrocław developer projects?",
        a: "Yes. Full-apartment programs are our core deliverable for Wrocław developers — typical scope of 60–90 m² per unit, installation in 1 working day. We coordinate directly with site managers.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=1600&q=80",
    imageAlt: "Stretch ceiling in a Wrocław premium apartment",
  },
];
