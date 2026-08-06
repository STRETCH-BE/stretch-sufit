/**
 * Blog articles — English.
 * File path: /content/en/blog-posts.ts
 *
 * Faithful translations of /content/blog-posts.ts, same array order.
 * Slug correspondence lives in /lib/i18n-routes.ts (blogPostSlugs).
 */

import type { BlogPost } from "@/content/blog-posts";

export const blogPosts: BlogPost[] = [
  /* ── 01 · Stretch ceiling cost ─────────────────────────── */
  {
    slug: "stretch-ceiling-cost",
    category: "Pricing",
    title: "How much does a stretch ceiling cost in 2026? A manufacturer's price guide",
    metaDescription:
      "A stretch ceiling costs from around 170 PLN/m² installed. Full 2026 price guide from the manufacturer: PVC, polyester, acoustic, LED, photo print. Three worked estimates and what really drives the price.",
    excerpt:
      "Online you will find prices from 80 to 300 PLN/m² — written by bedding shops and door stores. We manufacture and install stretch ceilings, so we publish a real price guide: ranges, worked estimates and the list of things that genuinely change the price.",
    datePublished: "2026-08-06",
    readTime: "9 min",
    intro: [
      "A standard PVC stretch ceiling installed costs from around 170 PLN/m² net. Polyester starts at around 220 PLN/m², an acoustic ceiling from around 320 PLN/m², and a backlit LED ceiling from around 390 PLN/m² including the lighting. Measurement and quotation are always free, and every quote stays valid for 30 days.",
      "That is the one-paragraph answer. The rest of this article explains where the differences between offers come from, what genuinely raises the price, and what the estimate looks like for three typical projects — from a small bathroom to an open-plan office. We write this as the manufacturer: our PVC is made in our factory in Częstochowa, Poland, and the polyester in the Stretch group's plant in Belgium. We are not copying prices from the internet — these are our own numbers.",
    ],
    sections: [
      {
        heading: "Why online prices vary so wildly",
        paragraphs: [
          "Search for stretch ceiling prices and you will find articles quoting 80–120 PLN, 90–300 PLN or 120–250 PLN per square metre. The problem: most of those texts are published by websites that have never seen a stretch ceiling — furniture shops, interior portals, SEO content farms. The numbers are copied from other articles, often years old, and they mix up three different things: the price of the material alone, material with installation, and promotional prices without profiles or finishing.",
          "The second reason is more honest: a stretch ceiling is priced individually. The same membrane in a simple rectangular room and in a room with eight light cut-outs, a hidden curtain track and slopes are two different prices. That is why a reliable answer always comes as a range plus a list of factors — and that is exactly how we present it below.",
        ],
      },
      {
        heading: "Indicative 2026 price list — installed",
        paragraphs: [
          "The ranges below include material, profiles, labour and standard finishing. The lower end is a simple, regular room; the upper end covers projects with more cut-outs, unusual geometry or premium material. All prices net, per square metre.",
        ],
        table: {
          headers: ["Ceiling type", "From (PLN/m²)", "Typical range (PLN/m²)"],
          rows: [
            ["PVC matte", "170", "170–220"],
            ["PVC gloss / satin", "185", "185–240"],
            ["Polyester (deep matte)", "220", "220–290"],
            ["Acoustic", "320", "320–450"],
            ["Backlit LED (lighting included)", "390", "390–600"],
            ["Photo print", "260", "260–380"],
          ],
        },
      },
      {
        heading: "What really drives the price",
        paragraphs: [
          "Five factors account for almost the entire difference between the bottom and the top of the range. Know them before you compare offers — the cheapest quote on paper usually omits one of them.",
        ],
        list: [
          "Area and minimum order value — for small rooms (bathroom, WC) a minimum order applies, usually around 1,400–1,600 PLN. Travel, measurement, production and the crew cost the same at 4 m² as at 12 m².",
          "Geometry and cut-outs — every opening for a light fitting, sensor, curtain track or pipe means extra work with a reinforced ring. One cut-out is a small cost; twelve points in a living room make a difference.",
          "Lighting — an LED line in a profile, a starry sky or full backlighting of a translucent membrane are separate estimate items: profile, strip, power supply, control.",
          "Height and installation conditions — rooms above 3.5 m, scaffold work, or installation outside a venue's opening hours raise the labour cost.",
          "Material — PVC from our Polish production is the most cost-effective. Belgian polyester and acoustic membranes cost more, because the material itself and its transport cost more.",
        ],
      },
      {
        heading: "Three worked estimates",
        paragraphs: [
          "Bathroom, 5 m², PVC gloss, one cut-out for a ceiling light. The per-metre rate alone would give about 950 PLN — here the minimum order kicks in, so the realistic cost is around 1,400–1,600 PLN net, installed in one morning.",
          "Living room, 25 m², PVC matte, an LED line along one wall, six light points. Membrane installed around 4,500–5,200 PLN, LED profile with strip and power supply around 1,500–2,500 PLN depending on length and control. Total: around 6,000–7,700 PLN net, installed in one day.",
          "Open-plan office, 100 m², acoustic ceiling. At this scale the unit rate drops towards the bottom of the range: around 32,000–38,000 PLN net, with installation spread over 2–3 working days, weekends possible. Additional absorption in the plenum above the membrane is quoted after a reverberation measurement.",
        ],
      },
      {
        heading: "Stretch ceiling vs plasterboard — cost over time",
        paragraphs: [
          "A suspended plasterboard ceiling costs less on day one: typically 70–150 PLN/m² including skim coat and painting. An honest comparison, however, has to look beyond the renovation invoice. Boards move at the joints — after 2–3 years many interiors develop cracks that need filling and repainting, and every refresh means cost and dust all over again.",
          "A stretch ceiling costs more on the first day, but through 15 years of warranty on PVC (10 years on polyester) it needs no painting, filling or touch-ups. Over a decade the difference in starting price usually evens out — and the difference in the number of renovations stays on the stretch ceiling's side. Add one-day installation, no furniture removal and no dust, which plasterboard cannot promise.",
        ],
      },
      {
        heading: "How to read a quote — a checklist",
        paragraphs: [
          "When comparing offers, check not just the rate per metre but above all the scope. Our quote always includes: a free measurement with material samples at your place, the material from our production, profiles, full installation, cut-outs per the design, and the warranty card. Payment: a 30% deposit on order, the remaining 70% within 7 days after installation. The quote is valid for 30 days — no asterisks.",
          "One more thing competitor articles never mention: for residential premises up to 150 m², stretch ceiling installation in Poland can qualify for the 8% VAT rate instead of 23% — based on a buyer's declaration we prepare together with the contract. On larger projects that is a real difference in the gross price.",
        ],
      },
    ],
    faq: [
      {
        q: "How much does a square metre of stretch ceiling cost installed?",
        a: "From around 170 PLN/m² net for a standard matte PVC ceiling installed. Polyester from around 220 PLN/m², acoustic from around 320 PLN/m², backlit LED from around 390 PLN/m². We give the exact price after a free measurement.",
      },
      {
        q: "Are the measurement and quote paid?",
        a: "No. The measurement with material samples at your home and the detailed quote are always free and non-binding. The quote stays valid for 30 days.",
      },
      {
        q: "Is there a minimum order value?",
        a: "Yes — for very small rooms (bathroom, WC, hallway) the minimum order value is around 1,400–1,600 PLN net, because travel, production and crew costs are fixed regardless of the area.",
      },
      {
        q: "Is lighting included in the ceiling price?",
        a: "Cut-outs for fittings are part of the ceiling quote. LED lines, starry skies and full backlighting are separate estimate items — profile, strip, power supply and control are quoted individually at the measurement.",
      },
      {
        q: "Can I pay with 8% VAT?",
        a: "For residential premises up to 150 m², installation can qualify for the 8% VAT rate based on a buyer's declaration — this applies to private individuals and to companies buying for housing purposes. We prepare the document together with the contract.",
      },
      {
        q: "Why do prices online differ so much?",
        a: "Because most price articles are written by websites unrelated to the trade, copying old data. Some offers also quote material only, without installation and profiles. Always compare the full scope of the quote, not just the per-metre rate.",
      },
    ],
    related: [
      { label: "PVC ceiling — made in Poland", href: "/en/solutions/pvc-ceiling" },
      { label: "Acoustic ceiling", href: "/en/solutions/acoustic-ceiling" },
      { label: "Free measurement — form", href: "/en#cta" },
    ],
  },

  /* ── 02 · PVC vs polyester ─────────────────────────────── */
  {
    slug: "pvc-vs-polyester-ceiling",
    category: "Materials",
    title: "PVC or polyester stretch ceiling? A comparison from the maker of both",
    metaDescription:
      "PVC or polyester — which stretch ceiling to choose? A comparison from the company that manufactures both: parameters, seamless widths, behaviour in a flood, 15 vs 10 year warranty and five scenarios for each material.",
    excerpt:
      "We are the only company in Poland manufacturing both materials: PVC in Częstochowa, polyester at the Stretch group's Belgian plant. This comparison does not need to favour anyone — we show the parameters and say plainly when each material is the only right choice.",
    datePublished: "2026-08-06",
    readTime: "8 min",
    intro: [
      "The short answer: for the bathroom, kitchen and anywhere with a risk of flooding from above — PVC. Where the deepest premium matte and cold installation around sensitive furnishings matter — polyester. The rest of this article is the parameters behind that answer.",
      "Most comparisons online are written by a company that sells only one of these materials — and the conclusions are easy to predict. We are in a different position: our PVC film is made in our own factory in Częstochowa, and the polyester membranes are produced at Stretch Productions in Belgium, part of the same international Stretch group. We earn on both. So we can recommend the one that actually fits your interior.",
    ],
    sections: [
      {
        heading: "Two materials, two factories, one system",
        paragraphs: [
          "A stretch ceiling is always the same concept: a membrane tensioned onto an aluminium profile at the walls. The difference starts at the material. PVC film is heated with a heat gun during installation — the membrane becomes elastic and tensions perfectly as it cools. Polyester is a polyurethane-coated fabric installed cold — no heat gun, no raising the room temperature.",
          "Both materials are produced within the Stretch group: PVC in Poland (which means a shorter production time — 5 working days), polyester in Belgium (5 days for standard versions, up to 15 days for colours and print, plus about 3 days of transport). Both are installed by the same trained crew following the same protocol.",
        ],
      },
      {
        heading: "Parameter comparison",
        paragraphs: [
          "The table below lists the parameters that genuinely decide the choice. Pay particular attention to three rows: seamless width, behaviour in a flood, and warranty.",
        ],
        table: {
          headers: ["Parameter", "PVC", "Polyester"],
          rows: [
            ["Seamless width", "up to 6.50 m", "up to 5.15 m"],
            ["Installation", "hot (heat gun)", "cold"],
            [
              "Finishes",
              "matte, gloss, satin, sparkle, translucent, photo print",
              "deep matte, photo print",
            ],
            ["Behaviour in a flood", "holds water like a membrane", "lets water through slowly"],
            ["Humidity and bathrooms", "fully resistant", "resistant, but not for wet zones"],
            ["Production", "Poland, 5 working days", "Belgium, 5–15 days + transport"],
            ["Warranty", "15 years", "10 years"],
            ["Price", "most cost-effective", "usually approx. 20–30% higher"],
          ],
        },
      },
      {
        heading: "When PVC is the only right choice",
        paragraphs: [
          "Some scenarios leave no room for debate — we will recommend PVC even if you arrived set on fabric.",
        ],
        list: [
          "Bathroom, kitchen, laundry room — PVC absorbs no water, steam condenses on the surface and disappears after airing. This material was made for humid zones.",
          "A flat in an apartment block with flooding risk — PVC film holds water from a neighbour's leak like a membrane. Polyester lets water through slowly, so the protection of your furnishings is incomparably weaker.",
          "Gloss, satin, sparkle, translucent — these finishes exist only in PVC. Polyester has one finish, but an outstanding one: the deepest matte on the market.",
          "Wide rooms up to 6.50 m — our PVC film is the widest seamless membrane on the market. A living room 6 m wide: PVC without a seam, polyester already with a join.",
          "Budget and timeline — PVC from Polish production is cheaper and ready in 5 working days, with no transport from abroad.",
        ],
      },
      {
        heading: "When polyester wins",
        paragraphs: [
          "Polyester is not a worse PVC — it is a material for different jobs. In these five situations we will recommend exactly that.",
        ],
        list: [
          "Premium interiors with a deep matte — the polyester surface looks like a flawless painted skim coat. No PVC matte goes that low on sheen.",
          "Cold installation — in rooms with sensitive furnishings (antiques, instruments, artworks, server rooms) the absence of a heat gun can be a hard requirement.",
          "Acoustic ceilings — our acoustic membranes are based on micro-perforated A2-class polyester. For offices, restaurants and conference rooms it is the natural choice.",
          "Large cool spaces — polyester keeps stable tension across a wider temperature range, which commercial premises and spaces lightly heated in winter appreciate.",
          "Fidelity to the architect's design — if the design calls for a specific matte, fabric-like character of the surface, polyester will render it more faithfully than any film matte.",
        ],
      },
      {
        heading: "The myth: fabric breathes, film does not",
        paragraphs: [
          "That sentence appears in every second comparison and sounds convincing, but in practice it means little. No ceiling — stretch, suspended or concrete — replaces room ventilation. The membrane's vapour permeability does not affect the air you breathe; the ventilation grille and extractor do. That is why we always check the ventilation at the measurement, regardless of the chosen material.",
          "The real difference is elsewhere: behaviour with water. PVC acts as a sealed membrane — an advantage in a flood. Polyester lets water through slowly — sometimes an advantage where you want any moisture above the ceiling not to be trapped. Both behaviours are predictable; we pick the one that fits the room.",
        ],
      },
      {
        heading: "How we choose at the measurement",
        paragraphs: [
          "You do not have to settle this debate before our visit. We arrive at the free measurement with samples of both materials in every finish — you will see the difference in matte live, in your light, against your walls. The advisor walks through the rooms with you and recommends a material for each, with the reasoning. It happens that we install both in one flat: polyester in the living room and bedroom, PVC in the bathroom and kitchen. The system is one, the profile is the same — only the membrane differs.",
        ],
      },
    ],
    faq: [
      {
        q: "Which ceiling is cheaper — PVC or polyester?",
        a: "PVC. We make it in our own factory in Poland, so there is no cost of transport from abroad. Belgian-made polyester is usually around 20–30% more expensive per metre.",
      },
      {
        q: "Which material for the bathroom?",
        a: "Definitely PVC. It absorbs no water, is fully humidity-resistant and in a flood from above it holds water like a membrane. Polyester is suited to dry rooms.",
      },
      {
        q: "Will polyester hold water in a flood from the neighbours?",
        a: "Not like PVC. Polyester fabric lets water through slowly, so it will not protect your furnishings to the degree a sealed PVC film does. In apartment blocks, for rooms at risk of flooding, we recommend PVC.",
      },
      {
        q: "Does a PVC ceiling smell after installation?",
        a: "Right after hot installation a faint odour can be noticeable; it disappears with airing within 24–48 hours. Our films carry hygiene certificates approving them for residential rooms.",
      },
      {
        q: "Which material is more matte?",
        a: "Polyester. Its surface has the deepest matte available in stretch ceilings and looks like a perfect painted finish. PVC matte is very good, but in side light it yields slightly to the fabric.",
      },
    ],
    related: [
      { label: "Recyclable PVC ceiling", href: "/en/solutions/pvc-ceiling" },
      { label: "Polyester stretch ceiling", href: "/en/solutions/polyester-ceiling" },
      { label: "How much does a stretch ceiling cost", href: "/en/blog/stretch-ceiling-cost" },
    ],
  },

  /* ── 03 · Bathroom & flooding ──────────────────────────── */
  {
    slug: "stretch-ceiling-bathroom",
    category: "Bathroom",
    title: "A stretch ceiling in the bathroom: humidity, mould and floods — facts from the service crew",
    metaDescription:
      "Is a stretch ceiling right for a bathroom? Yes — PVC absorbs no moisture and holds water in a flood from above. A step-by-step flood protocol, the truth about ventilation and mould — from the crew that handles these call-outs.",
    excerpt:
      "The bathroom is the hardest room for any ceiling: constant humidity plus the risk of flooding from above. We describe how PVC film really behaves with steam and during a neighbour's leak — including the step-by-step service protocol you will not find in articles rewritten from press releases.",
    datePublished: "2026-08-06",
    readTime: "7 min",
    intro: [
      "Yes — a PVC stretch ceiling is one of the best solutions for a bathroom. It absorbs no water, steam condenses on the surface and disappears after airing, and in a flood from above the membrane holds the water and protects the room. But there are two conditions the marketing articles stay silent about: working ventilation and the right response to a leak.",
      "We write this from the perspective of the crew that installs bathrooms and drives out to floods. You will find the exact step-by-step protocol here — what you do, what we do — and an honest answer to the mould question, which no ceiling alone can solve.",
    ],
    sections: [
      {
        heading: "Why the bathroom is the hardest room",
        paragraphs: [
          "Two threats act on a bathroom ceiling at once. The first is daily: steam from the shower and bath, which settles on the coldest surface in the room — usually the ceiling. A painted slab absorbs that moisture, peels over time and becomes food for mould. The second threat is random but real in apartment blocks: a plumbing failure one floor up. A burst washing-machine hose can turn a bathroom refresh into a full renovation within an hour.",
          "A PVC stretch ceiling answers both threats with one material: a film that does not absorb water and that water does not destroy.",
        ],
      },
      {
        heading: "How PVC film behaves with humidity",
        paragraphs: [
          "PVC has zero water absorption. After a bath, steam condenses on the membrane into fine droplets that simply evaporate once the bathroom is aired — exactly as on tiles or a mirror. The membrane does not swell, peel, discolour or need painting. On the film itself, mould has nothing to feed on.",
          "The space between the membrane and the slab stays dry, because moisture does not pass through the film. You do not need additional ceiling waterproofing — the membrane itself is the barrier. In service practice, the most common bathroom maintenance is wiping the ceiling with a soft cloth every few months.",
        ],
      },
      {
        heading: "Honestly: a ceiling will not fix bad ventilation",
        paragraphs: [
          "Here we have to say something you will not find in advertising copy: no ceiling solves a bathroom without working ventilation. If the grille is blocked or the extractor does not run, the moisture will not disappear — it will settle on walls, grout and silicone, and mould will appear there regardless of what is above your head. A stretch ceiling is resistant to the effects of humidity, but it does not remove its cause.",
          "That is why during the free measurement our advisor checks the ventilation and says plainly if it needs clearing before installation. We would rather move the date by a week than install a ceiling in a bathroom where you will be fighting fungus on the walls a year later.",
        ],
      },
      {
        heading: "A flood from the neighbours — the step-by-step protocol",
        paragraphs: [
          "This is the scenario for which many customers in apartment blocks choose a stretch ceiling in the first place. In a leak from above, PVC film behaves like a membrane: it stretches, forms a visible sag and holds the water — in a typical bathroom from several dozen to over a hundred litres, depending on the area. The water does not pour onto furniture, electronics and the floor. What to do when it happens:",
        ],
        list: [
          "Shut off the source — turn off your water and alert the neighbour upstairs or the building manager to stop the leak. That is always step one.",
          "Do not puncture the membrane — piercing the film means an uncontrolled release of all the water at once and usually a membrane replacement. A tensioned film full of water looks alarming, but it holds.",
          "Do not prop it up and do not bail water over the edge — leave the sag alone, and switch off any recessed lighting if water is collecting near it.",
          "Call us — +48 730 700 333. We schedule a service call-out; describe where the water is collecting and whether the leak at the source is already under control.",
          "Our crew drains the water in a controlled way — through a light-fitting opening or an unclipped corner of the membrane, into containers. Without flooding the room.",
          "Drying and re-tensioning — the space above the membrane is dried, and after heating with a heat gun the film returns to perfect tension. In most cases with no membrane replacement and no trace of the incident.",
        ],
      },
      {
        heading: "A flood and the warranty — how it is settled",
        paragraphs: [
          "A flood caused by a neighbour or a plumbing failure is a random event — not a product defect — so formally it is settled from your or the culprit's home insurance, just like a ruined floor or furniture. The good news: a service call-out on a stretch ceiling is usually many times cheaper than renovating a flooded bathroom without one. In most cases we save the membrane without replacement, and we issue the intervention report in a form ready to go straight into the insurer's claim file.",
        ],
      },
      {
        heading: "Matte or gloss, lighting and other bathroom decisions",
        paragraphs: [
          "Gloss visually enlarges small bathrooms and reflects light beautifully — the most common choice up to 6 m². Matte and satin give a calmer, more hotel-like character and mask droplet marks near the shower better. In wet zones we use fittings rated at least IP44; we plan their layout at the measurement so the cut-outs land exactly where you need light — over the mirror and in the bathing zone.",
          "The standard drop is about 3 cm at the profile alone, and 5–7 cm with recessed fittings — in a typical apartment-block bathroom the difference is unnoticeable, and you gain a perfectly even, washable surface with a 15-year warranty.",
        ],
      },
    ],
    faq: [
      {
        q: "Will a stretch ceiling hold water in a flood from the neighbours?",
        a: "Yes. PVC film stretches and holds water like a membrane — in a typical bathroom from several dozen to over a hundred litres. Do not puncture the sag; call the service line and we will drain the water in a controlled way and restore the membrane's tension, usually without replacing it.",
      },
      {
        q: "Does mould grow under a stretch ceiling in the bathroom?",
        a: "Mould does not grow on the PVC film itself — the material absorbs no water and offers nothing to feed on. The condition of a healthy bathroom remains working ventilation: without it, moisture will settle on walls and grout regardless of the ceiling type.",
      },
      {
        q: "Is additional ceiling waterproofing needed?",
        a: "No. The PVC membrane is itself a moisture barrier — the space above the ceiling stays dry. Fewer layers, lower renovation cost.",
      },
      {
        q: "How much height does a stretch ceiling take in a bathroom?",
        a: "From about 3 cm at the wall profile alone up to 5–7 cm with recessed fittings. In a typical apartment-block bathroom the difference is practically unnoticeable.",
      },
      {
        q: "Matte or gloss for a small bathroom?",
        a: "For small areas we most often recommend gloss — it visually enlarges the room and adds light. Matte and satin give a calmer character and mask droplet marks near the shower better. You will see both finishes on samples during the free measurement.",
      },
    ],
    related: [
      { label: "PVC ceiling — ideal for bathrooms", href: "/en/solutions/pvc-ceiling" },
      { label: "PVC vs polyester — comparison", href: "/en/blog/pvc-vs-polyester-ceiling" },
      { label: "Warranty up to 15 years", href: "/en/warranty" },
    ],
  },
];

export function findPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
