/**
 * FAQ data — English.
 * File path: /content/en/faq.ts
 *
 * Mirrors the Polish FAQ structure. Uses the same FaqCategory type so the
 * FaqGrid component renders both with the same shape — only labels differ.
 */

import type { FaqEntry, FaqCategory } from "@/content/faq";

export const faqCategoriesEn: Record<
  FaqCategory,
  { label: string; description: string }
> = {
  produkty: {
    label: "Products & materials",
    description: "What it's made of, how variants differ, properties",
  },
  montaz: {
    label: "Installation & prep",
    description: "How install day unfolds, what to prepare",
  },
  ceny: {
    label: "Pricing & quotes",
    description: "How much it costs, what drives the price",
  },
  gwarancja: {
    label: "Warranty & durability",
    description: "What the warranty covers, lifespan",
  },
  logistyka: {
    label: "Timing & logistics",
    description: "When to order, lead time, scheduling",
  },
  zastosowania: {
    label: "Specific applications",
    description: "Bathrooms, offices, old buildings, special projects",
  },
};

export const faqs: FaqEntry[] = [
  // PRODUCTS & MATERIALS
  {
    slug: "what-is-stretch-ceiling",
    category: "produkty",
    q: "What is a stretch ceiling?",
    a: "A stretch ceiling is a membrane (PVC or polyester) stretched onto profiles mounted around the perimeter of the room. It creates a perfectly smooth, even surface, installed 5–15 cm below the original ceiling. It replaces plaster, wood panels or classic drop ceilings — with the difference that installation takes 1 day, with no dust and no major renovation.",
  },
  {
    slug: "pvc-vs-polyester",
    category: "produkty",
    q: "How does a PVC ceiling differ from a polyester one?",
    a: "PVC has a wider palette of colours and finishes (matte, satin, gloss, sparkle, texture, mirror, pearl, metallic, transparent), is seamless up to 6.50 m, 100% waterproof, and hot-installed. We manufacture it in our Alto Design factory in Częstochowa. Polyester has a more natural, deeply matte look (like a perfect plaster ceiling), is seamless up to 5.15 m, cold-installed — and made by Stretch Productions in Belgium. Warranty: 15 years on PVC, 10 years on polyester. PVC is chosen by ~80% of our clients.",
  },
  {
    slug: "how-many-colours",
    category: "produkty",
    q: "How many colours can I choose from?",
    a: "Over 100 colours in PVC as standard, plus the full RAL palette on request. Polyester is available in whites, creams and beiges — its strength is the deep matte, not colour variety. Sample swatches are sent free of charge before the measurement.",
  },
  {
    slug: "what-is-acoustic",
    category: "produkty",
    q: "What is an acoustic ceiling and when do I need one?",
    a: "An acoustic ceiling has a micro-perforated surface (0.2 mm holes, invisible from 50 cm) and a sound absorber behind the membrane. It reduces reverberation in the room by 50–75%, and in premium configurations up to 90%. Needed wherever speech clarity or sound comfort matter: open-plan offices, restaurants, conference rooms, medical practices, home cinemas. Usually unnecessary in typical apartments.",
  },
  {
    slug: "photoprint-resolution",
    category: "produkty",
    q: "What file resolution do I need for photo printing?",
    a: "Minimum 300 DPI at 1:1 scale (i.e. at the final ceiling size). For a 3×3 m ceiling that's a file 35,400×35,400 pixels. We help clients prepare files — often a 4K image (3840×2160) scaled appropriately or an SVG vector is enough. UV printing at up to 1440 DPI guarantees photographic quality.",
  },

  // INSTALLATION & PREP
  {
    slug: "installation-time",
    category: "montaz",
    q: "How long does stretch-ceiling installation take?",
    a: "Standard 1 working day for surfaces up to 50 m². Larger rooms (50–100 m²) — 1–2 days. A full home (4–5 rooms) — 2–3 days with one team. Actual installation of a single room takes 3–6 hours depending on size and number of light points.",
  },
  {
    slug: "what-to-prepare",
    category: "montaz",
    q: "What do I need to prepare before installation?",
    a: "Very little. Furniture must be moved out of the room or pulled away from the walls (at least 1 m). We protect the floor with foil. For PVC installation (hot, up to ~50°C) we recommend taking plants and pets out. Polyester is cold-installed — everything can stay.",
  },
  {
    slug: "is-there-dust",
    category: "montaz",
    q: "Does installation create dust and mess?",
    a: "Practically none. Stretch ceilings are installed on perimeter profiles — we don't touch the original ceiling, don't drill into it, don't sand it. The only dust comes from drilling for the profiles around the room (10–15 wall drill points), which we immediately vacuum with an industrial extractor. After we leave, the room is ready to use.",
  },
  {
    slug: "live-during-install",
    category: "montaz",
    q: "Can I live at home during installation?",
    a: "Yes, although during the actual installation (3–6 hours) it's better not to be in the room. PVC requires heating the room to ~50°C — uncomfortable. Polyester is cold-installed and you can be present. After completion the room returns to ambient temperature within 30–60 minutes.",
  },
  {
    slug: "remove-old-ceiling",
    category: "montaz",
    q: "Do you have to remove the old ceiling?",
    a: "No. We install stretch ceilings on perimeter profiles, regardless of the original ceiling's condition. We can cover cracked ceilings, water stains, damaged plaster, plaster ceiling roses — everything stays. Often the only sensible option in older buildings where tearing out the ceiling would mean a huge renovation.",
  },

  // PRICING & QUOTES
  {
    slug: "how-much-does-it-cost",
    category: "ceny",
    q: "How much does a stretch ceiling cost in 2026?",
    a: "Starting price: around 170 PLN/m² for standard matte PVC with installation. Polyester: from around 220 PLN/m². Acoustic: from around 320 PLN/m². LED light ceiling: from around 480 PLN/m² (full light ceiling) or from 220 PLN/m² (LED lines only). Photo print: from 290 PLN/m². Gloss, mirror, metallic finishes: 30–80% upcharge on base price. Full quote based on a free measurement.",
  },
  {
    slug: "what-drives-price",
    category: "ceny",
    q: "What affects the final price?",
    a: "Six main factors: (1) surface area in m² — larger rooms have a lower per-square-metre price, (2) membrane type (matte PVC vs gloss vs acoustic vs LED), (3) number of light points — each one requires a separate cut and ring, (4) shape complexity (simple rectangles vs curves, multi-level), (5) room height (above 3 m — scaffolding surcharge), (6) location and distance from our HQ in Częstochowa.",
  },
  {
    slug: "is-quote-free",
    category: "ceny",
    q: "Are the measurement and quote free?",
    a: "Yes. Measurement and quote are free and don't commit you to ordering. Our surveyor comes with sample swatches, measures the room, discusses options with you and sends the quote within 24–48 hours. No hidden fees — this is standard practice in the premium segment.",
  },
  {
    slug: "payment",
    category: "ceny",
    q: "How does payment work?",
    a: "Standard: 30% deposit on order (after quote acceptance), the balance after installation is complete and quality is approved by the client. Payment by bank transfer or cash. VAT invoice on request, including for companies deducting VAT.",
  },
  {
    slug: "compared-to-drywall",
    category: "ceny",
    q: "Is a stretch ceiling more expensive than plaster?",
    a: "Per-m² price — yes, stretch is more expensive than plaster (170+ PLN/m² vs 50–80 PLN/m² for plaster with painting). But plaster requires removing the existing ceiling, moving furniture out, vacating the apartment for 5–10 days, generates dust, and cracks in older buildings. Stretch is 1 day, no dust, with a warranty up to 15 years (15 yr PVC, 10 yr polyester). All-in, the total is similar — but far less hassle.",
  },

  // WARRANTY & DURABILITY
  {
    slug: "warranty-length",
    category: "gwarancja",
    q: "How long is the warranty on a stretch ceiling?",
    a: "Up to 15 years of manufacturer material warranty: 15 years on PVC (made in our factory in Poland by Alto Design) and 10 years on polyester (made in Belgium by Stretch Productions). Among the longest warranties on the Polish market. Covers colour stability, no deformation, no cracking, and the durability of the membrane-to-profile bond. LED electronics — 5-year warranty.",
  },
  {
    slug: "what-warranty-covers",
    category: "gwarancja",
    q: "What exactly does the warranty cover?",
    a: "The material warranty (15 years for PVC, 10 years for polyester) covers all factory and process defects: colour fading, membrane expansion, cracking, separation from the profile, deformations. It doesn't cover mechanical damage (cuts from knives or sharp objects) — though such damage is usually repairable without replacing the whole ceiling.",
  },
  {
    slug: "what-if-leak",
    category: "gwarancja",
    q: "What if my upstairs neighbour floods?",
    a: "The PVC membrane holds up to 100 litres of water per m². You'll see characteristic 'sagging' of the ceiling at the leak point. You call us — we come, remove one corner of the membrane, drain the water, and once it dries the ceiling returns to its original shape. In 95% of cases no replacement is needed. Intervention cost is much lower than replacing a whole drywall ceiling.",
  },
  {
    slug: "how-to-clean",
    category: "gwarancja",
    q: "How do I clean a stretch ceiling?",
    a: "Very simply. With a damp cloth and a touch of mild detergent as needed. PVC and polyester don't absorb dust and don't require regular maintenance. Don't use solvents, alcohol, abrasive materials or hard brushes — that's the only restriction.",
  },

  // TIMING & LOGISTICS
  {
    slug: "lead-time",
    category: "logistyka",
    q: "How far in advance should I order a stretch ceiling?",
    a: "Standard 2–3 weeks from enquiry to installation. Measurement within 3–7 working days, membrane production 5–10 working days, installation itself 1 day. In peak season (April–June, September–November) lead times stretch — order 4–6 weeks ahead then.",
  },
  {
    slug: "when-to-order-renovation",
    category: "logistyka",
    q: "At what stage of renovation should I book the measurement?",
    a: "After: plastering, painting, electrical (with light points roughed in), finished floors. Before: furniture, decorations, final touches. Stretch ceiling is the penultimate step in a renovation — almost always before moving into the apartment.",
  },
  {
    slug: "measurement-wait",
    category: "logistyka",
    q: "How long is the wait for a measurement?",
    a: "Częstochowa and area: 1–3 working days. Silesian agglomeration (Katowice, Gliwice, Bielsko-Biała): 3–5 days. Warsaw, Kraków, Wrocław, Łódź: 5–7 days. Gdańsk, Poznań, Płock: 7–10 days. For priority cases (e.g. tight renovation deadline) — we expedite.",
  },
  {
    slug: "service-coverage",
    category: "logistyka",
    q: "Which cities do you cover?",
    a: "We actively serve 17 cities: Warsaw, Kraków, Wrocław, Poznań, Gdańsk, Łódź, Katowice, Częstochowa, Bielsko-Biała, Gliwice, Opole, Kielce, Płock, Piotrków Trybunalski, Radomsko, Brzeg, Jastrzębie-Zdrój. For larger projects (>200 m²) we travel anywhere in Poland — call us, we'll discuss.",
  },

  // SPECIFIC APPLICATIONS
  {
    slug: "bathroom",
    category: "zastosowania",
    q: "Does a stretch ceiling work in a bathroom?",
    a: "Yes, brilliantly. PVC is our most-chosen material for bathrooms — 100% waterproofing, resistance to steam and splashing, easy to clean, doesn't absorb odours. Important: in a bathroom with an unventilated shower or home sauna, always choose PVC (not polyester). In a bathroom with normal ventilation, both work.",
  },
  {
    slug: "heritage-building",
    category: "zastosowania",
    q: "Can I install a stretch ceiling in a heritage-listed tenement?",
    a: "Usually yes, though we always recommend consulting the building manager and the conservator. Stretch ceilings are non-invasive — we don't touch the original ceiling, installation is only on perimeter profiles. Often the only option in protected premises where intervention in the ceiling structure is forbidden but the old ceiling is damaged.",
  },
  {
    slug: "office-after-hours",
    category: "zastosowania",
    q: "Do you install ceilings in offices outside business hours?",
    a: "Yes — it's standard for our B2B clients. We work weekends, evenings, holidays. We can also work under time pressure (e.g. 300 m² open-plan over a single weekend). For projects >200 m² we assign a dedicated project manager to coordinate with building management.",
  },
  {
    slug: "height-loss",
    category: "zastosowania",
    q: "How much height do I lose to a stretch ceiling?",
    a: "Classic stretch ceiling: minimum 5 cm below the original ceiling (typically 5–8 cm). Ceiling with recessed LED lights: 8–10 cm. Full LED light ceiling (entire luminous surface): 10–15 cm. In rooms with 2.5 m height this is acceptable; in low rooms (<2.4 m) plan carefully — sometimes we recommend limiting lighting to perimeter LED lines.",
  },
];
