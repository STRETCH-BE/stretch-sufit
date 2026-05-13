/**
 * Showcase gallery data.
 * File path: /content/gallery.ts
 *
 * Image URLs currently point to Unsplash as placeholders. Replace with real
 * project photos by uploading to /public/images/gallery/ and changing the path.
 */

import type { GalleryItem } from "@/types";

export const gallery: GalleryItem[] = [
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
    imageAlt: "Salon z sufitem napinanym i podświetleniem liniowym LED, Warszawa",
    room: "Salon · LED liniowy",
    city: "Warszawa",
    gridClass: "md:col-span-5 md:row-span-2",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
    imageAlt: "Łazienka z sufitem napinanym PVC w wykończeniu połysk, Kraków",
    room: "Łazienka · PVC połysk",
    city: "Kraków",
    gridClass: "md:col-span-4 md:row-span-2",
  },
  {
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    imageAlt: "Biuro open-space z akustycznym sufitem napinanym, Wrocław",
    room: "Biuro · Akustyczny",
    city: "Wrocław",
    gridClass: "md:col-span-3 md:row-span-2",
  },
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    imageAlt: "Sypialnia z efektem gwiezdnego nieba w suficie napinanym, Gdańsk",
    room: "Sypialnia · Gwiezdne niebo",
    city: "Gdańsk",
    gridClass: "md:col-span-4 md:row-span-2",
  },
  {
    image: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=800&q=80",
    imageAlt: "Restauracja z sufitem z fotodrukiem, Częstochowa",
    room: "Restauracja · Fotodruk",
    city: "Częstochowa",
    gridClass: "md:col-span-4 md:row-span-2",
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    imageAlt: "Open-space z akustycznym sufitem napinanym klasy A2, Katowice",
    room: "Open-space · Akustyka A2",
    city: "Katowice",
    gridClass: "md:col-span-4 md:row-span-2",
  },
];
