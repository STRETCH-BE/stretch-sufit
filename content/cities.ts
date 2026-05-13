/**
 * 17 Polish cities where Stretch Sufit installs.
 * File path: /content/cities.ts
 *
 * Each city links to `/sufity-napinane/[slug]` (city landing pages built in a
 * later prompt). Slugs are URL-safe ASCII; display `name` keeps Polish diacritics.
 * `region` is the Polish voivodeship — used both visually and in city-page
 * LocalBusiness schema.
 */

import type { City } from "@/types";

export const cities: City[] = [
  { slug: "warszawa", name: "Warszawa", region: "Mazowieckie" },
  { slug: "krakow", name: "Kraków", region: "Małopolskie" },
  { slug: "wroclaw", name: "Wrocław", region: "Dolnośląskie" },
  { slug: "poznan", name: "Poznań", region: "Wielkopolskie" },
  { slug: "gdansk", name: "Gdańsk", region: "Pomorskie" },
  { slug: "lodz", name: "Łódź", region: "Łódzkie" },
  { slug: "katowice", name: "Katowice", region: "Śląskie" },
  { slug: "czestochowa", name: "Częstochowa", region: "Centrala" },
  { slug: "bielsko-biala", name: "Bielsko-Biała", region: "Śląskie" },
  { slug: "gliwice", name: "Gliwice", region: "Śląskie" },
  { slug: "opole", name: "Opole", region: "Opolskie" },
  { slug: "kielce", name: "Kielce", region: "Świętokrzyskie" },
  { slug: "plock", name: "Płock", region: "Mazowieckie" },
  { slug: "piotrkow-trybunalski", name: "Piotrków Trybunalski", region: "Łódzkie" },
  { slug: "radomsko", name: "Radomsko", region: "Łódzkie" },
  { slug: "brzeg", name: "Brzeg", region: "Opolskie" },
  { slug: "jastrzebie-zdroj", name: "Jastrzębie-Zdrój", region: "Śląskie" },
];
