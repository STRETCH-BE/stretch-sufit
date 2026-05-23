/**
 * 6 products in the Stretch Sufit system — English.
 * File path: /content/en/products.ts
 *
 * Same source-of-truth pattern as Polish: each entry powers the homepage
 * Solutions card AND its dedicated landing page at /en/solutions/[slug].
 * Slugs are English. Order matches Polish so the featured PVC card stays
 * in the second slot.
 */

import type { Product } from "@/types";

export const products: Product[] = [
  // 01 — Polyester
  {
    slug: "polyester-ceiling",
    number: "01",
    label: "Polyester",
    title: "Polyester stretch ceiling",
    italicAccent: "Polyester",
    description:
      "Seamless up to 5.15 m. Cold install. A deeply matte, natural finish — looks like flawless plaster.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
    imageAlt: "Polyester ceiling — matte, natural surface",
    linkLabel: "Polyester ceiling",

    tagline: "Woven polyester membrane with a polyurethane coating",
    intro:
      "The polyester Stretch ceiling is the material closest to a classic plaster finish — deeply matte, natural in feel, with none of the gloss or plastic look. Produced in Belgium by Stretch Productions BV from a woven polyester membrane with a durable polyurethane coating. Installed cold (no heating of the room), which makes it ideal for renovations in homes that remain occupied.",
    features: [
      {
        title: "Seamless up to 5.15 m",
        body: "A single piece of membrane covers a room up to 5.15 m wide — no welds, no visible joints.",
      },
      {
        title: "Cold install",
        body: "No heat guns, no gas cylinders. A clean one-day installation, fully compatible with occupied homes — including plants and pets.",
      },
      {
        title: "Deeply matte surface",
        body: "Gloss factor below 5%. It looks like a perfect plaster finish — no plastic effect.",
      },
      {
        title: "10-year warranty",
        body: "Material warranty from the manufacturer (Stretch Productions BV, Belgium). The polyurethane coating protects the fabric from dust, moisture and discolouration.",
      },
    ],
    useCases: [
      {
        context: "Living rooms & dining rooms",
        body: "The most common use — large, open spaces where you want a perfectly smooth, neutral ceiling without visual compromise.",
      },
      {
        context: "Bedrooms & studies",
        body: "The matte surface doesn't reflect light or create glare — ideal for rooms where you turn on bedside lamps in the evening.",
      },
      {
        context: "Renovations in occupied homes",
        body: "Cold installation means no open flame. No need to move pets out, empty cabinets of electronics or take pictures off the walls.",
      },
    ],
    specs: [
      { label: "Material", value: "Woven polyester + polyurethane coating" },
      { label: "Manufactured in", value: "Belgium (Stretch Productions BV)" },
      { label: "Max seamless width", value: "5.15 m" },
      { label: "Install type", value: "Cold install" },
      { label: "Membrane thickness", value: "0.35–0.40 mm" },
      { label: "Gloss factor", value: "< 5% (deep matte)" },
      { label: "Fire class", value: "B-s2,d0" },
      { label: "Warranty", value: "10 years" },
    ],
    comparedTo:
      "Choose polyester if you want a perfectly matte, natural surface and don't need 100% moisture resistance. For bathrooms or kitchens — choose PVC. For acoustics — choose the acoustic ceiling.",
    faq: [
      {
        q: "How does polyester differ from PVC?",
        a: "Polyester is more deeply matte and more natural-looking — it reads like a perfect plaster ceiling. PVC comes in a broader palette of colours and finishes (including high-gloss, sparkle and texture). Polyester is cold-installed (made in Belgium), PVC is hot-installed (made in our factory in Poland). Warranty: 10 years on polyester, 15 years on PVC.",
      },
      {
        q: "Is polyester suitable for a bathroom?",
        a: "Yes, but we usually recommend PVC for standard bathrooms because of its 100% waterproofing. Polyester is moisture-resistant, but in high-condensation conditions (sauna, an unventilated shower) PVC performs better.",
      },
      {
        q: "How do I clean a polyester ceiling?",
        a: "With a damp cloth and a mild detergent. The polyurethane coating protects the fabric from stains and dust. Don't use solvents or abrasive materials.",
      },
      {
        q: "Can LED lighting be integrated with a polyester ceiling?",
        a: "Yes — recessed spotlights, LED lines, starry-sky effects. The matte structure diffuses light evenly. Ideal under perimeter indirect lighting.",
      },
      {
        q: "How much does a polyester ceiling cost?",
        a: "Pricing starts at around 220 PLN/m² installed in a typical residential room. Full quote based on a free on-site measurement — no commitment.",
      },
    ],
  },

  // 02 — PVC (featured)
  {
    slug: "pvc-ceiling",
    number: "02",
    label: "PVC",
    title: "Recyclable PVC ceiling",
    italicAccent: "recyclable",
    description:
      "Seamless up to 6.50 m. Manufactured in our factory in Poland. Removable and 100% recyclable. Excellent for bathrooms, kitchens and living rooms.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    imageAlt: "PVC stretch ceiling in a modern bathroom",
    linkLabel: "PVC ceiling",
    featured: true,

    tagline: "PVC membrane from our factory in Poland — 100% recyclable, removable",
    intro:
      "PVC is our most popular product and Stretch Sufit's flagship specialty. We manufacture it in the Alto Design factory in Częstochowa (part of the Belgian Stretchgroup) — a versatile material, ideal for most residential and commercial interiors. Available in 100+ colours and 9 finishes (matte, satin, gloss, sparkle, texture, mirror, pearl, metallic, transparent). 100% waterproof — if a leak occurs from above, the ceiling holds the water and can simply be drained.",
    features: [
      {
        title: "Seamless up to 6.50 m",
        body: "The widest seamless width on the market. Covers virtually any Polish room in a single piece of membrane — no visible joints.",
      },
      {
        title: "100% waterproof",
        body: "In the event of a leak from above, the membrane holds up to 100 litres of water per m². Once the water is drained, it returns to its original shape.",
      },
      {
        title: "Removable and recyclable",
        body: "Can be removed and reinstalled (e.g. after wall renovations). 100% recyclable back to raw material.",
      },
      {
        title: "100+ colours, 9 finishes",
        body: "Matte, satin, gloss (up to 200% light reflection), sparkle, texture, mirror, pearl, metallic, transparent. Full sample swatches available to view.",
      },
    ],
    useCases: [
      {
        context: "Bathrooms & kitchens",
        body: "Classic use — full resistance to steam, splashing, and cooking vapours. Easy to clean, doesn't absorb odours.",
      },
      {
        context: "Living rooms with a gloss effect",
        body: "Gloss finish visually doubles ceiling height through reflection. Premium look for modern apartments. Sparkle and texture — for interiors with character.",
      },
      {
        context: "Restaurants & cafés",
        body: "Meets HACCP hygiene standards. Doesn't absorb odours, easy to wipe down, doesn't require periodic renovation.",
      },
      {
        context: "Developer projects",
        body: "Short install time (1 day per apartment) and low per-unit cost on bulk orders. Standard in premium residential development.",
      },
    ],
    specs: [
      { label: "Material", value: "PVC with stabilising additives" },
      { label: "Manufactured in", value: "Alto Design, Częstochowa (Poland)" },
      { label: "Max seamless width", value: "6.50 m" },
      { label: "Install type", value: "Hot (room heated to ~50°C)" },
      { label: "Membrane thickness", value: "0.17–0.35 mm" },
      { label: "Waterproofing", value: "100% (holds up to 100 l/m²)" },
      { label: "Finishes", value: "Matte, satin, gloss, sparkle, texture, mirror, pearl, metallic, transparent" },
      { label: "Colours", value: "100+ standard + RAL on request" },
      { label: "Fire class", value: "B-s2,d0" },
      { label: "Warranty", value: "15 years" },
    ],
    comparedTo:
      "Choose PVC if you want versatility, moisture resistance and a rich colour palette. It's the most common choice for around 80% of our clients. Choose polyester only if you want a deeply matte plaster-like finish in a dry room.",
    faq: [
      {
        q: "Is PVC safe for health?",
        a: "Yes. Our PVC membranes are certified to the A+ standard (highest level of indoor air quality), fire class B-s2,d0. They don't emit harmful VOCs after installation.",
      },
      {
        q: "Can I choose any colour?",
        a: "Yes. Over 100 colours are stocked as standard, and we can match any RAL colour on request. Sample swatches are sent free of charge before the measurement.",
      },
      {
        q: "What happens if my upstairs neighbour floods?",
        a: "The PVC membrane holds up to 100 litres of water per m². You'll see the ceiling visibly sag. You call us — we drain it through one corner, and once it dries it returns to its original shape. Usually no replacement needed.",
      },
      {
        q: "Will the PVC yellow over time?",
        a: "No — all of our PVC membranes have UV and colour stabilisers. The 15-year warranty covers colour retention too. After 10–15 years the colour is virtually indistinguishable from the original.",
      },
      {
        q: "How much does a PVC ceiling cost?",
        a: "Starting price: around 170 PLN/m² for matte PVC. Gloss, sparkle, texture and mirror finishes: from around 250 PLN/m². Full quote based on a free measurement.",
      },
    ],
  },

  // 03 — Acoustic
  {
    slug: "acoustic-ceiling",
    number: "03",
    label: "Acoustic",
    title: "Acoustic ceiling",
    italicAccent: "Acoustic",
    description:
      "Reduces reverberation by up to 75%. Ideal for offices, restaurants, conference rooms, home cinemas and studios.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    imageAlt: "Acoustic stretch ceiling in a conference room",
    linkLabel: "Acoustic",

    tagline: "Micro-perforated membrane with an acoustic absorber",
    intro:
      "The acoustic Stretch ceiling combines the aesthetics of a stretch membrane with real acoustic value. It consists of a micro-perforated surface and a sound-absorbing backing placed in the cavity above. The result: a reduction in reverberation time of up to 75%, and — combined with our sound-grade absorbers — up to 90% sound absorption.",
    features: [
      {
        title: "Up to 90% absorption",
        body: "With the right absorber behind the membrane — Class A absorption per ISO 354. Standard configuration: up to 75% reverberation reduction.",
      },
      {
        title: "Micro-perforation invisible at a distance",
        body: "Holes 0.2 mm in diameter — invisible at distances over 50 cm. The ceiling looks smooth, the acoustics do the work.",
      },
      {
        title: "Fire class A2 / B-s2,d0",
        body: "Meets requirements for public buildings. Approved for offices, restaurants, hotels, cinemas, schools.",
      },
      {
        title: "Combines with LED and photo print",
        body: "Can be paired with lighting (LED line, spots) and printing. Full design freedom with no acoustic compromise.",
      },
    ],
    useCases: [
      {
        context: "Open-plan offices",
        body: "The most common use. Reverberation reduction lets people talk on the phone and focus normally — the difference between a noisy room and a workspace.",
      },
      {
        context: "Restaurants and cafés",
        body: "A room with 1.2 s vs 0.4 s reverb is a completely different experience. Guests stay longer, talk more easily, return more often.",
      },
      {
        context: "Meeting and conference rooms",
        body: "Speech intelligibility in a 30-seat room depends more on the acoustics than the microphone. An acoustic ceiling fixes that without wall panels.",
      },
      {
        context: "Home cinemas and studios",
        body: "Standard class is for general use — for audiophiles we offer Class A with 90% absorption. Full control of the sound environment.",
      },
    ],
    specs: [
      { label: "Material", value: "Micro-perforated PVC or polyester + absorber" },
      { label: "Absorption class (ISO 354)", value: "Class A (with absorber)" },
      { label: "NRC", value: "0.75–0.90" },
      { label: "Perforation diameter", value: "0.2 mm (invisible from 50 cm)" },
      { label: "Max seamless width", value: "5.15 m (polyester) / 6.50 m (PVC)" },
      { label: "Fire class", value: "A2-s1,d0 / B-s2,d0" },
      { label: "Warranty", value: "15 years (PVC) / 10 years (polyester)" },
    ],
    comparedTo:
      "Choose the acoustic ceiling wherever speech clarity or sound comfort matter. Often unnecessary in typical homes. For offices, restaurants, medical practices, classrooms — almost always worth it. ROI measured in team productivity.",
    faq: [
      {
        q: "How does an acoustic ceiling work?",
        a: "Tiny perforations in the membrane let sound waves pass into the cavity above, where the absorber (mineral wool or specialist Stretch-sound material) is placed. The sound loses energy in the absorber and doesn't reflect back into the room.",
      },
      {
        q: "Can the perforations be seen?",
        a: "From more than 50 cm away — virtually no. The holes are 0.2 mm in diameter and form a uniform pattern. Up close they're visible; at normal viewing distance the ceiling looks smooth.",
      },
      {
        q: "How much will reverb drop in my meeting room?",
        a: "Typically from 1.0–1.5 s to 0.3–0.5 s. The difference between sounding like an empty swimming pool and sounding like a recording studio. Class A with absorber goes lower still.",
      },
      {
        q: "Can the acoustic ceiling be combined with photo printing?",
        a: "Yes — we print directly onto the acoustic membrane. Restaurants often pair acoustics with decorative motifs. Full palette and pattern, no impact on acoustic performance.",
      },
      {
        q: "How much does an acoustic ceiling cost?",
        a: "Starting price: around 320 PLN/m² in Standard class (NRC 0.75). Class A with premium absorber: from around 450 PLN/m². Custom quote based on room acoustics.",
      },
    ],
  },

  // 04 — Light
  {
    slug: "light-ceiling",
    number: "04",
    label: "Light",
    title: "LED light ceiling",
    italicAccent: "Light",
    description:
      "The whole surface evenly backlit. Linear LEDs, starry skies, RGB — smartphone-controlled.",
    image: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=800&q=80",
    imageAlt: "Backlit LED ceiling in a bedroom",
    linkLabel: "Light system",

    tagline: "Translucent membrane + LED system behind the ceiling",
    intro:
      "The Stretch light ceiling turns the entire ceiling (or part of it) into an evenly luminous surface. A translucent membrane with 30–70% transmission, installed above an LED system, creates undisturbed, soft light. Control colour, brightness and scenes from your phone — from daylight to evening mood in one tap.",
    features: [
      {
        title: "Even light, no hot spots",
        body: "LEDs mounted at the correct spacing behind the membrane create a uniform luminous surface — no visible points or hot spots.",
      },
      {
        title: "Full RGB control",
        body: "16.7 million colours, 0–100% brightness, programmable scenes. Control via app, voice assistant (Alexa, Google) or a standard wall switch.",
      },
      {
        title: "Starry sky in fibre optics",
        body: "Optional — fibre-optic points create a map of stars. Each star individually adjustable.",
      },
      {
        title: "Low energy use",
        body: "LEDs use 80% less energy than halogen bulbs. A full light ceiling draws roughly as much as 3 standard spotlights.",
      },
    ],
    useCases: [
      {
        context: "Bedrooms",
        body: "The most common use. A full-ceiling 'sunrise' scene simulates daylight and helps you wake up. 'Evening' in warm orange tones prepares the body for sleep.",
      },
      {
        context: "Bathrooms & spas",
        body: "Change colour during a bath (red, violet, blue light). Standard in premium hotels, increasingly popular in private bathrooms.",
      },
      {
        context: "Children's rooms",
        body: "Starry skies with motion, themed colours (pink, green, blue). A safe alternative to glow-in-the-dark stickers.",
      },
      {
        context: "Restaurants & clubs",
        body: "A full luminous wall as part of the decor. Change the scene as the evening progresses — bright at lunch, atmospheric by dinner.",
      },
    ],
    specs: [
      { label: "Material", value: "Translucent PVC or polyester (30–70% transmission)" },
      { label: "LED type", value: "RGB+CCT, 24 V, IP44" },
      { label: "LED density", value: "Min. 96 LEDs/m" },
      { label: "Control", value: "App (iOS/Android), voice, wall, scenes" },
      { label: "Power use", value: "~15 W/m² at 100% brightness" },
      { label: "LED lifetime", value: "min. 50,000 hours (~17 years at 8 h/day)" },
      { label: "Warranty", value: "15 years on membrane, 5 years on electronics" },
    ],
    comparedTo:
      "Choose the light ceiling if lighting is part of the interior style, not just a function. A light ceiling replaces chandeliers, ceiling lamps and often floor lamps. Requires 8–10 cm clearance between the original ceiling and the membrane — check your room height.",
    faq: [
      {
        q: "How much height do I lose with a light ceiling?",
        a: "A minimum of 8 cm — that's what the LED system behind the membrane requires. Typically 8–12 cm. Acceptable in rooms with 2.5 m ceilings; in low rooms (<2.4 m) it's worth considering alternatives (LED lines).",
      },
      {
        q: "Can I control it from my phone?",
        a: "Yes — compatibility with Casambi, Tuya Smart, Philips Hue (via bridge). The app allows colour, brightness, scenes and schedules.",
      },
      {
        q: "What if the LEDs stop working?",
        a: "The membrane is removable — in case of LED failure we open the ceiling, swap the module and close it again. The 5-year electronics warranty covers most cases.",
      },
      {
        q: "Does the light ceiling get hot?",
        a: "Practically not. RGB LEDs draw 15 W/m² — less than a single bulb. The membrane can withstand temperatures up to 60°C; the system never reaches them.",
      },
      {
        q: "How much does a light ceiling cost?",
        a: "Starting price: around 480 PLN/m² for a full light ceiling with RGB and app control. Perimeter LED lines alone: from around 220 PLN/m². Custom quote.",
      },
    ],
  },

  // 05 — Print
  {
    slug: "print-ceiling",
    number: "05",
    label: "Print",
    title: "Photo-print ceiling",
    italicAccent: "Photo-print",
    description:
      "Any image at photographic quality. For hotels, restaurants, retail and private interiors. No limits.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
    imageAlt: "Photo-printed stretch ceiling in a restaurant",
    linkLabel: "Print",

    tagline: "High-resolution UV print on a stretch membrane",
    intro:
      "The photo-print ceiling is unlimited design freedom — we print any image on a Stretch membrane: a photograph, an illustration, a custom graphic, a star map, a painting. UV printing at up to 1440 DPI delivers photographic quality. Maximum single-piece size: 5.10 m wide × 50 m long.",
    features: [
      {
        title: "1440 DPI — photographic quality",
        body: "Full-colour UV print. Details readable from 30 cm — for a ceiling viewed from 2.5 m, this means practical perfection.",
      },
      {
        title: "No motif limitations",
        body: "Your photo, custom graphic, a classical artwork, a star map, abstract. The only limit is the minimum file resolution (300 DPI at 1:1 scale).",
      },
      {
        title: "Combines with acoustics and backlighting",
        body: "We also print on acoustic (micro-perforated) and translucent (back-lit) membranes. Full combinatorial freedom.",
      },
      {
        title: "15-year colour stability",
        body: "UV-stabilised inks — 15-year colour guarantee. No bleed, fading or yellowing, even in heavily sunlit rooms.",
      },
    ],
    useCases: [
      {
        context: "Hotels and boutique guesthouses",
        body: "A different ceiling in every room — custom artwork, local motifs, abstract. A photo-printed ceiling turns a standard hotel room into an experience.",
      },
      {
        context: "Distinctive restaurants",
        body: "The ceiling is the last thing a guest sees before leaving. A good print is an investment in memory — and organic social-media content.",
      },
      {
        context: "Shops and showrooms",
        body: "Branding on the ceiling. Logo, key motif, brand story — an experience element the customer won't see anywhere else.",
      },
      {
        context: "Children's rooms",
        body: "A fairy tale, favourite animals, a cosmic theme, a world map. The ceiling as an educational, magical element children will love.",
      },
    ],
    specs: [
      { label: "Print technology", value: "UV at up to 1440 DPI" },
      { label: "Max print size", value: "5.10 m × 50 m (single piece)" },
      { label: "Print substrates", value: "PVC, polyester, acoustic, translucent" },
      { label: "Required file resolution", value: "300 DPI at 1:1 (e.g. for 3×3 m → 35,400×35,400 px)" },
      { label: "Colour calibration", value: "ICC profile, sample print before production" },
      { label: "Colour stability", value: "15 years (colour warranty)" },
      { label: "Warranty", value: "15 years" },
    ],
    comparedTo:
      "Choose photo print when the ceiling should be part of the interior identity, not just a backdrop. A plain ceiling is 'invisible' — a photo print is intentional. Higher investment than a standard ceiling (typically 1.5–2× standard PVC), but the effect is on another level.",
    faq: [
      {
        q: "What file resolution do I need to provide?",
        a: "Minimum 300 DPI at 1:1 scale (i.e. at the final size). For a 3×3 m ceiling that means a file 35,400×35,400 pixels. We help clients prepare files — often a 4K image (3840×2160) scaled appropriately is enough.",
      },
      {
        q: "Are seams or joins visible?",
        a: "No. We print on a single piece up to 5.10 m × 50 m. Larger surfaces are joined with a calibrated graphic transition that's invisible.",
      },
      {
        q: "Can I use a stock photo?",
        a: "Yes, provided you have a valid commercial licence. We help clients choose the motif — we sometimes work with premium stock (Adobe Stock, Shutterstock).",
      },
      {
        q: "Can I order a sample print before production?",
        a: "Yes — we send a 30×30 cm sample for colour and quality approval. Standard process for premium projects (>20 m²). Sample cost included in project price.",
      },
      {
        q: "How much does a photo-print ceiling cost?",
        a: "Starting price: around 290 PLN/m² (PVC + standard photo print). For larger projects with custom artwork and a sample print: from 400 PLN/m². Individual quote.",
      },
    ],
  },

  // 06 — Prefab
  {
    slug: "prefab-ceiling",
    number: "06",
    label: "Prefab",
    title: "Prefabricated ceiling",
    italicAccent: "Prefabricated",
    description:
      "Ready-made modules for modular construction, hotels and series builds. On-site installation in hours.",
    image: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=800&q=80",
    imageAlt: "Prefabricated stretch ceiling modules",
    linkLabel: "Prefab",

    tagline: "Modules ready to install — produced in the factory, installed on site",
    intro:
      "Stretch Prefab is the system's modular-construction variant for hotel chains and developers. We produce the ceilings fully in our Alto Design hall in Częstochowa — stretched, wired, with the LED install already in place — and on the construction site they're simply mounted into prepared frames. Installation time per module: 1–2 hours.",
    features: [
      {
        title: "Off-site production",
        body: "All the work — stretching, wiring, LED calibration, photo print — happens in a controlled hall environment. No dust, no installation errors.",
      },
      {
        title: "Identical quality at scale",
        body: "For developers and hotel chains — a guarantee that room 14 looks identical to room 132. No installer tolerance.",
      },
      {
        title: "Faster schedule",
        body: "On-site install time drops from 1 day/unit to 1–2 hours. Lets you handle many rooms in parallel in a single day.",
      },
      {
        title: "Full BIM integration",
        body: "We work with architecture firms in BIM. Each module labelled, classified and assigned to a specific room.",
      },
    ],
    useCases: [
      {
        context: "Hotel chains",
        body: "Chains (Marriott, Hilton, Accor) require identical rooms in the same category. Prefab guarantees that even when renovating 200 rooms in a single hotel.",
      },
      {
        context: "Modular construction",
        body: "Modular apartments (e.g. KODA Living, Saint-Gobain Habitat) — ceiling installed at the module factory, ready to ship.",
      },
      {
        context: "Retail and franchise networks",
        body: "Identical visual identity at every location. Branded ceilings installed in 2 hours.",
      },
      {
        context: "Large developer projects",
        body: "Apartment buildings with 100+ units — parallel installation in many apartments simultaneously, with no installation bottleneck.",
      },
    ],
    specs: [
      { label: "Production", value: "Off-site (Alto Design hall, Częstochowa)" },
      { label: "Max module size", value: "6.50 m × 30 m" },
      { label: "On-site install time", value: "1–2 hours/module" },
      { label: "Available finishes", value: "All — PVC, polyester, acoustic, light, photo print" },
      { label: "Minimum order", value: "20 m² (typically 200+ m² for optimal pricing)" },
      { label: "BIM integration", value: ".ifc, .rvt files on request" },
      { label: "Warranty", value: "15 years (PVC) / 10 years (polyester)" },
    ],
    comparedTo:
      "Prefab is chosen by serial investors — developers, hotels, retail chains. Doesn't make sense for a single apartment (unit cost is higher than classic installation). Break-even threshold: around 200 m² of uniform surface or 20+ repeatable rooms.",
    faq: [
      {
        q: "What project scale makes Prefab worthwhile?",
        a: "Break-even is around 200 m² of uniform surface, or 20+ rooms with a repeatable pattern (e.g. hotel rooms). Below that — classic on-site installation is cheaper.",
      },
      {
        q: "Can I see a sample before ordering a series?",
        a: "Yes — for series orders we always produce a 1:1 sample of one module, install it in the showroom for client approval before producing the full series.",
      },
      {
        q: "How long does the whole process take from order to installation?",
        a: "Standard: 2 weeks of production + 3–5 days of on-site installation. For very large projects (500+ units) — custom schedule, typically 6–10 weeks.",
      },
      {
        q: "Do you work with architects and design studios?",
        a: "Yes — about 60% of our Prefab projects. We provide BIM files, material samples, technical consultations. For projects >500 m² we assign a dedicated project manager.",
      },
      {
        q: "How much does Prefab cost?",
        a: "Pricing depends on scale and specification. Typical range: 180–350 PLN/m² (vs 170–500 PLN/m² for classic install). The main savings are in time and on-site logistics, not material cost.",
      },
    ],
  },
];
