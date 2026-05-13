/**
 * Showcase gallery data.
 * File path: /content/gallery.ts
 *
 * 6 photographic showcase items rendered in an asymmetric 12-column grid.
 * The `gridClass` Tailwind utility controls the visual rhythm — don't change
 * without re-checking the layout on desktop and the simplified mobile fallback.
 */

import type { GalleryItem } from "@/types";

export const gallery: GalleryItem[] = [
  {
    image: "/images/gallery/salon-warszawa.jpg",
    imageAlt: "Salon z sufitem napinanym i podświetleniem liniowym LED, Warszawa",
    room: "Salon · LED liniowy",
    city: "Warszawa",
    gridClass: "md:col-span-5 md:row-span-2",
  },
  {
    image: "/images/gallery/lazienka-krakow.jpg",
    imageAlt: "Łazienka z sufitem napinanym PVC w wykończeniu połysk, Kraków",
    room: "Łazienka · PVC połysk",
    city: "Kraków",
    gridClass: "md:col-span-4 md:row-span-2",
  },
  {
    image: "/images/gallery/biuro-wroclaw.jpg",
    imageAlt: "Biuro open-space z akustycznym sufitem napinanym, Wrocław",
    room: "Biuro · Akustyczny",
    city: "Wrocław",
    gridClass: "md:col-span-3 md:row-span-2",
  },
  {
    image: "/images/gallery/sypialnia-gdansk.jpg",
    imageAlt: "Sypialnia z efektem gwiezdnego nieba w suficie napinanym, Gdańsk",
    room: "Sypialnia · Gwiezdne niebo",
    city: "Gdańsk",
    gridClass: "md:col-span-4 md:row-span-2",
  },
  {
    image: "/images/gallery/restauracja-czestochowa.jpg",
    imageAlt: "Restauracja z sufitem z fotodrukiem, Częstochowa",
    room: "Restauracja · Fotodruk",
    city: "Częstochowa",
    gridClass: "md:col-span-4 md:row-span-2",
  },
  {
    image: "/images/gallery/openspace-katowice.jpg",
    imageAlt: "Open-space z akustycznym sufitem napinanym klasy A2, Katowice",
    room: "Open-space · Akustyka A2",
    city: "Katowice",
    gridClass: "md:col-span-4 md:row-span-2",
  },
];
