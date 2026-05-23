/**
 * Cities homepage list — English.
 * File path: /content/en/cities.ts
 *
 * Lightweight list used by the homepage Cities section. The full city
 * landing pages (with intros, trust blocks, FAQs) live in /app/en/stretch-ceilings/
 * and will be added per city. For v1 only the top 3 (Warsaw, Kraków, Wrocław)
 * have full pages; the others link to the hub.
 */

export type CityListItem = {
  slug: string;
  name: string;
  region: string;
};

export const cities: CityListItem[] = [
  { slug: "warsaw", name: "Warsaw", region: "Masovian" },
  { slug: "krakow", name: "Kraków", region: "Lesser Poland" },
  { slug: "wroclaw", name: "Wrocław", region: "Lower Silesian" },
  { slug: "poznan", name: "Poznań", region: "Greater Poland" },
  { slug: "gdansk", name: "Gdańsk", region: "Pomeranian" },
  { slug: "lodz", name: "Łódź", region: "Łódź Voiv." },
  { slug: "katowice", name: "Katowice", region: "Silesian" },
  { slug: "czestochowa", name: "Częstochowa", region: "HQ" },
  { slug: "bielsko-biala", name: "Bielsko-Biała", region: "Silesian" },
  { slug: "gliwice", name: "Gliwice", region: "Silesian" },
  { slug: "opole", name: "Opole", region: "Opole Voiv." },
  { slug: "kielce", name: "Kielce", region: "Holy Cross" },
  { slug: "plock", name: "Płock", region: "Masovian" },
  { slug: "piotrkow-trybunalski", name: "Piotrków Trybunalski", region: "Łódź Voiv." },
  { slug: "radomsko", name: "Radomsko", region: "Łódź Voiv." },
  { slug: "brzeg", name: "Brzeg", region: "Opole Voiv." },
  { slug: "jastrzebie-zdroj", name: "Jastrzębie-Zdrój", region: "Silesian" },
];
