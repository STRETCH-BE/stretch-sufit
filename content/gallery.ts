/**
 * Showcase gallery data.
 * File path: /content/gallery.ts
 *
 * All photos are Stretch's own project photos (Belgium, France, Netherlands).
 * Add new ones to /public/images/gallery/ and reference the path here.
 */

import type { GalleryItem } from "@/types";

export const gallery: GalleryItem[] = [
  {
    image: "/images/gallery/wellness-basen-van-der-valk.jpg",
    imageAlt: "Basen w strefie wellness hotelu Van der Valk Beveren z sufitem napinanym",
    room: "Wellness · Sufit nad basenem",
    city: "Van der Valk, Beveren",
    gridClass: "md:col-span-5 md:row-span-2",
  },
  {
    image: "/images/gallery/butik-paryz-sufit-swietlny.jpg",
    imageAlt: "Butik ART RECHERCHE INDUSTRIE przy rue Perrée w Paryżu z podświetlanym sufitem napinanym",
    room: "Butik · Sufit świetlny",
    city: "Rue Perrée, Paryż",
    gridClass: "md:col-span-4 md:row-span-2",
  },
  {
    image: "/images/gallery/sala-konferencyjna-akustyczna.jpg",
    imageAlt: "Sala konferencyjna z białym akustycznym sufitem napinanym i liniową oprawą LED",
    room: "Sala konferencyjna · Akustyczny",
    city: "Belgia",
    gridClass: "md:col-span-3 md:row-span-2",
  },
  {
    image: "/images/gallery/recepcja-goesten-opdam.jpg",
    imageAlt: "Recepcja biura Goesten Opdam z ciemnym matowym sufitem napinanym",
    room: "Recepcja · Ciemny mat",
    city: "Goesten Opdam",
    gridClass: "md:col-span-4 md:row-span-2",
  },
  {
    image: "/images/gallery/lazienka-fotodruk.jpg",
    imageAlt: "Salon łazienkowy z podświetlanym sufitem napinanym z fotodrukiem",
    room: "Łazienka · Fotodruk podświetlany",
    city: "Salon łazienkowy, Belgia",
    gridClass: "md:col-span-4 md:row-span-2",
  },
  {
    image: "/images/gallery/biuro-open-space.jpg",
    imageAlt: "Biuro open-space z białym sufitem napinanym i oświetleniem szynowym",
    room: "Biuro · Open-space",
    city: "Belgia",
    gridClass: "md:col-span-4 md:row-span-2",
  },
];
