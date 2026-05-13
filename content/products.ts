/**
 * Product / solutions data.
 * File path: /content/products.ts
 *
 * Image URLs currently point to Unsplash as placeholders. When you have
 * real Stretch Sufit project photos, upload them to /public/images/products/
 * and swap the `image` field to e.g. "/images/products/poliester.jpg".
 */

import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "sufit-poliestrowy",
    number: "01",
    label: "Poliester",
    title: "Sufit poliestrowy Stretch®",
    italicAccent: "Stretch®",
    description:
      "Bezszwowo do 5,15 m. Montaż na zimno. Bardzo matowa, naturalna powierzchnia — wygląda jak idealna gładź.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80",
    imageAlt: "Sufit poliestrowy — matowa, naturalna powierzchnia",
    linkLabel: "Sufit poliestrowy",
  },
  {
    slug: "sufit-pvc",
    number: "02",
    label: "PVC",
    title: "Sufit PVC recyklingowy",
    italicAccent: "recyklingowy",
    description:
      "Bezszwowo do 5,70 m. Łatwo demontowalny i w 100% recyklingowy do surowca. Doskonały do łazienek i kuchni.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=80",
    imageAlt: "Sufit napinany PVC w nowoczesnej łazience",
    linkLabel: "Sufit PVC",
    featured: true,
  },
  {
    slug: "sufit-akustyczny",
    number: "03",
    label: "Akustyka",
    title: "Sufit akustyczny",
    italicAccent: "akustyczny",
    description:
      "Redukuje pogłos do 75%. Idealny dla biur, restauracji, sal konferencyjnych, kin domowych i studiów.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&q=80",
    imageAlt: "Akustyczny sufit napinany w sali konferencyjnej",
    linkLabel: "Akustyka",
  },
  {
    slug: "sufit-swietlny",
    number: "04",
    label: "Światło",
    title: "Sufit świetlny LED",
    italicAccent: "świetlny",
    description:
      "Cała powierzchnia podświetlona równomiernie. LED-y liniowe, gwiezdne niebo, RGB — kontrola przez smartfon.",
    image: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=400&q=80",
    imageAlt: "Podświetlany sufit LED w sypialni",
    linkLabel: "Light system",
  },
  {
    slug: "sufit-fotodruk",
    number: "05",
    label: "Druk",
    title: "Sufit z fotodrukiem",
    italicAccent: "fotodrukiem",
    description:
      "Dowolny obraz w jakości foto. Dla hoteli, restauracji, sklepów i wnętrz prywatnych. Bez ograniczeń.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&q=80",
    imageAlt: "Sufit z fotodrukiem w restauracji",
    linkLabel: "Print",
  },
  {
    slug: "sufit-prefab",
    number: "06",
    label: "Prefab",
    title: "Sufit prefabrykowany",
    italicAccent: "prefabrykowany",
    description:
      "Gotowe moduły dla budownictwa modułowego, hoteli i obiektów seryjnych. Montaż na placu w godzinach.",
    image: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=400&q=80",
    imageAlt: "Prefabrykowane moduły sufitów napinanych",
    linkLabel: "Prefab",
  },
];
