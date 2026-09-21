/**
 * Full city content for /en/stretch-ceilings/[city] pages — English.
 * File path: /content/en/cities-full.ts
 *
 * Full pages: Warsaw, Kraków, Wrocław plus the Silesian home region
 * (Katowice, Częstochowa). The other cities show in the homepage Cities
 * block + the /en/stretch-ceilings hub but link to the hub itself.
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

  // Silesian home region — added 2026-09 (full pages)
  {
    slug: "katowice",
    name: "Katowice",
    genitive: "Katowice",
    region: "Silesian",
    subregion: "aglomeracja-katowicka",
    locative: "in Katowice",
    populationDisplay: "282 K residents",
    distanceFromHq: 75,
    travel: { minutes: 55, route: "A1", noTravelFee: true },
    metaTitle: "Stretch Ceilings Katowice — PVC from 170 PLN/m², 1-day fit",
    metaDescription:
      "Stretch ceilings in Katowice: PVC from our own factory in Częstochowa, 75 km along the A1, no travel fee. Measurement in 3–5 working days, from 170 PLN/m².",
    intro:
      "We reach Katowice from our factory in Częstochowa on the A1 motorway — 75 km, about 55 minutes. For us the city is a cross-section of the whole of Silesia: the tenements of Śródmieście and Koszutka, prefabricated panel blocks on Osiedle Tysiąclecia and Paderewskiego, the red-brick familoki (miners' terraces) of Nikiszowiec, new apartment buildings in Brynów and Zawodzie, and the office towers along al. Roździeńskiego. In the blocks we mostly do bathrooms and kitchens, in the offices acoustic ceilings, in living rooms backlit membranes. We make the PVC film ourselves in Częstochowa; the polyester is produced for us in Belgium.",
    trustBlocks: [
      {
        title: "An hour down the A1",
        body: "From our hall at ul. Legionów 59 to the centre of Katowice is 75 km, or about 55 minutes on the A1 motorway. The city lies within 100 km of the factory, so we add no travel costs to the quote — neither for the measurement nor for the installation — whether the address is in Kostuchna or Dąbrówka Mała.",
      },
      {
        title: "Film from our own hall",
        body: "The PVC comes off our own Alto Design production line in Częstochowa, and the polyester is made for us at the Belgian plant of the Stretch group, which we belong to. A membrane for a Katowice address is cut to the dimensions taken at the measurement and fitted by our own crews — one company answers for the material, the installation and the warranty.",
      },
      {
        title: "A ceiling you can take down",
        body: "The membrane clips into an aluminium profile on the walls, so it can be taken down and re-tensioned without replacing the framework — when you change the lighting in a few years' time, or a plumber needs to get at the pipes above the ceiling. Warranty: 15 years on PVC and 10 on polyester, with an expected service life of 25 years.",
      },
    ],
    sections: [
      {
        heading: "Bathroom and kitchen in a Katowice block of flats — Tysiąclecie, Paderewskiego, Giszowiec",
        body:
          "In the tower blocks of Osiedle Tysiąclecia and the blocks on Paderewskiego, a bathroom is usually four or five square metres, with a ceiling of visible slab joints and ventilation that does not always keep up with the shower. For rooms like these we suggest PVC film: it does not absorb steam, it does not flake like paint, and a wipe with a damp cloth is all it needs. The membrane is watertight — when a pipe bursts on the floor above, the water collects on the film like in a bowl, and our fitter drains it through a light-fitting opening and tensions the ceiling back into place. Walls and furniture stay dry.\n\nIn the kitchen the film behaves the same way, and a matt finish does not reflect the cooker hood or the cupboard fronts. The drop in ceiling height is minimal — we cover this in the questions below — so at 2.5 m you cannot see the difference, and the slab joints vanish beneath one smooth plane. PVC is tensioned hot with a heat gun; for a day or two you may notice a faint smell, then it goes. A whole bathroom is usually one morning's work for two fitters, with no chiselling and no dust.",
        links: [
          { label: "PVC stretch ceiling", href: "/en/solutions/pvc-ceiling" },
          { label: "Stretch ceilings in the bathroom — guide", href: "/en/blog/stretch-ceiling-bathroom" },
        ],
      },
      {
        heading: "Acoustics for Katowice offices on al. Roździeńskiego and Chorzowska",
        body:
          "The office buildings on al. Roździeńskiego, along Chorzowska and around the Spodek arena share one trait: open floors of glass, concrete and hard flooring, where a conversation at the far end of the room is as audible as one at your own desk. An acoustic ceiling is micro-perforated polyester tensioned over a layer of absorber; in this arrangement absorption reaches class A and reverberation drops by up to 75%. We design it for a specific result — RT60 below 0.8 s in open-plan space and below 0.6 s in meeting rooms, where speech intelligibility on video calls is what counts.\n\nThe system is 50 mm deep and reads as a single flat, matt plane, with no grid and no visible panels; the polyester is also non-combustible (class A2-s1,d0), which makes the conversation with the building manager easier. An office floor of 100 m² takes us 2–3 days. It works the same way in a clinic or a classroom, where noise is just as tiring. What such a ceiling looks like in gloss black with an acoustic layer, we show on the AFAS Lounge in Antwerp.",
        links: [
          { label: "Acoustic ceiling", href: "/en/solutions/acoustic-ceiling" },
          { label: "Acoustic ceilings for offices — guide", href: "/en/blog/acoustic-ceiling-office" },
          { label: "Case study: AFAS Lounge, Antwerp (Polish page)", href: "/realizacje/afas-lounge-antwerpia" },
        ],
      },
      {
        heading: "Stretch ceiling prices in Katowice and 8% VAT for flats",
        body:
          "Our prices are net of VAT, with installation, per square metre of ceiling. PVC film from our own production costs 170–240 PLN/m² — the lower end covers simple, light-coloured ceilings in a single room, the upper end gloss finishes and surfaces with many cut-outs for light fittings. Polyester from Belgium is 220–290 PLN/m²; an acoustic ceiling falls within 320–450 PLN/m². What drives the price is mainly the number of rooms, light points and corners; the floor area itself matters less, because on small ceilings the fixed part of the cost — profiles, rings, the crew's journey — is spread over only a few metres.\n\nFor a flat of up to 150 m² or a house of up to 300 m² we add 8% VAT, because fitting a ceiling counts as part of a renovation in a residential building; larger floor areas are apportioned, and commercial premises and offices fall under the 23% rate. Measurement and quotation in Katowice are free of charge, the quote stays valid for 30 days, and we call back within 24 hours. The deposit is 30%, and the remaining 70% is paid within a week of handover of the ceiling.",
        links: [
          { label: "How much does a stretch ceiling cost — 2026 price guide", href: "/en/blog/stretch-ceiling-cost" },
          { label: "8% VAT on stretch ceilings", href: "/en/blog/stretch-ceiling-vat-8-poland" },
          { label: "Free quote for Katowice", href: "/en#cta" },
        ],
      },
      {
        heading: "Light ceilings and LED lines in the living rooms of Katowice's new apartment buildings",
        body:
          "In the apartment buildings going up in Brynów, Zawodzie and Dąb, the living room comes from the developer with a smooth white ceiling and a single light point in the middle. A stretch ceiling lets you design the lighting from scratch without chasing cable runs into the plaster: we recess LED lines into a profile that forms a glowing slot a few centimetres wide in the membrane, and run them along the window or above the kitchen island. A full light ceiling is a translucent membrane over LED panels — even, shadowless light across the whole surface, useful in north-facing rooms and windowless kitchens. The colour temperature can be adjusted from warm to cool (Tunable White), as in our project on rue Perrée in Paris.\n\nIn the detached houses of Piotrowice and Kostuchna, a starry sky suits the bedroom: hundreds of optical fibres threaded through a dark membrane, on a dimmer. An LED light ceiling costs 390–600 PLN/m² including the backlighting, and in a room with extensive lighting we plan its installation over two days; the power supplies go above the membrane, at the point marked in the design.",
        links: [
          { label: "LED light ceiling", href: "/en/solutions/light-ceiling" },
          { label: "Case study: rue Perrée, Paris (Polish page)", href: "/realizacje/rue-perree-paryz" },
        ],
      },
    ],
    districts: [
      "Śródmieście",
      "Koszutka",
      "Bogucice",
      "Zawodzie",
      "Ligota-Panewniki",
      "Brynów-Osiedle Zgrzebnioka",
      "Piotrowice-Ochojec",
      "Nikiszowiec",
      "Giszowiec",
      "Dąb",
      "Wełnowiec-Józefowiec",
      "Załęże",
      "Osiedle Tysiąclecia",
      "Osiedle Paderewskiego-Muchowiec",
      "Szopienice-Burowiec",
    ],
    nearbyTowns: ["Siemianowice Śląskie", "Świętochłowice", "Piekary Śląskie", "Będzin", "Czeladź", "Jaworzno", "Mikołów", "Tarnowskie Góry"],
    nearbySlugs: ["chorzow", "sosnowiec", "myslowice", "tychy", "ruda-slaska", "gliwice", "czestochowa"],
    faq: [
      {
        q: "How much does a stretch ceiling cost in Katowice?",
        a: "The simplest PVC ceiling starts at about 170 PLN/m² net of VAT, installation included; polyester and acoustic ceilings cost more, and light ceilings cost the most. We give a firm figure after a free measurement. The quote itemises the membrane, profiles, light fittings and labour separately, so you can see what you are paying for, and the exact ranges for every type of membrane are in the price section above.",
      },
      {
        q: "How long is the wait for a stretch ceiling measurement in Katowice?",
        a: "Usually 3–5 working days from your enquiry — that is how long it takes us to slot a Katowice address into the route of the measuring crew coming from Częstochowa. During the measurement we check the level of the ceiling slab and the services above it, and agree where the light fittings go. From measurement to installation is usually about 5 working days for PVC; for polyester from Belgium it is 5–15 days, plus about 3 days in transit.",
      },
      {
        q: "I live in a tower block on Osiedle Tysiąclecia — how much height will a stretch ceiling take at 2.5 m?",
        a: "In the standard arrangement the perimeter profile lowers the ceiling by 15 mm, which is less than plasterboard on a frame. At the 2.5 m typical of Tysiąclecie the room keeps practically the same height, and the membrane hides the joints between the floor slabs, which can never be fully filled over. Only recessed fittings need more room — then we match the drop to their height, usually over part of the ceiling.",
      },
      {
        q: "Does a stretch ceiling suit a red-brick familok in Nikiszowiec?",
        a: "Yes. The change is confined to the interior and does not touch the façade or the structure; in a listed building it is still worth confirming with the heritage conservator, and we supply a description of the system. Ceilings in familoki are often uneven, with cracks and traces of old wiring — a membrane fixed to a profile on the walls covers them without hacking off the plaster. Here we recommend a matt film in a light shade, or polyester if the flat is tall and you want to avoid the heating.",
      },
      {
        q: "Can you install in an office on al. Roździeńskiego at the weekend, so work is not interrupted?",
        a: "Yes — for offices on Roździeńskiego, Chorzowska or in Śródmieście we schedule installation for Saturday and Sunday or after hours, once access to the goods lift and the car park has been agreed with the building manager. The work is dry and dust-free, so there is no need to move desks out or shut down the network; we cover only the workstations directly beneath the ceiling. Because the membrane arrives ready-made, the floor is back in use as soon as it has been signed off.",
      },
      {
        q: "What does installation look like in a tenement in central Katowice, where parking is difficult?",
        a: "Śródmieście, Koszutka and the streets around ul. Mariacka mean paid parking zones and narrow courtyards, so we plan the unloading before we arrive: the membrane comes folded in a box, and the profiles are cut into lengths we can carry up a staircase with no lift. The high ceilings of tenements we measure from a platform, and we usually leave the cornice visible, stopping the membrane on a profile just below it. For the installation itself we need neither water nor a three-phase supply.",
      },
      {
        q: "Do you travel to Siemianowice Śląskie, Mikołów, Będzin and the other municipalities around Katowice?",
        a: "Yes. Siemianowice Śląskie, Świętochłowice, Piekary Śląskie, Czeladź, Będzin, Jaworzno, Mikołów and Tarnowskie Góry are served on the same terms and the same lead times as Katowice. Chorzów, Sosnowiec, Tychy, Mysłowice, Ruda Śląska and Gliwice each have a page of their own in the Polish part of the site, with prices, districts and measurement lead times — just pick the city from the list below or enter it in the quote form.",
      },
    ],
    image: "/images/gallery/openspace-katowice.jpg",
    imageAlt: "Open-plan office with a class A2 acoustic stretch ceiling, Katowice",
    imageCaption: "Open-plan office with an acoustic stretch ceiling — project in Katowice",
    updatedAt: "2026-09-20",
  },
  {
    slug: "czestochowa",
    name: "Częstochowa",
    genitive: "Częstochowa",
    region: "Silesian",
    subregion: "czestochowski",
    locative: "in Częstochowa",
    populationDisplay: "213 K residents",
    distanceFromHq: 0,
    travel: { minutes: 0, route: "", noTravelFee: true },
    isHq: true,
    metaTitle: "Stretch Ceilings Częstochowa — from 170 PLN/m², own factory",
    metaDescription:
      "Stretch ceilings in Częstochowa from the manufacturer at ul. Legionów 59: showroom, measurement in 1–3 working days, PVC from about 170 PLN/m² fitted.",
    intro:
      "Częstochowa is our home address: at ul. Legionów 59 we manufacture PVC film for stretch ceilings, run our showroom, and it is from here that the installation crews set out. For a client in Tysiąclecie, Północ, Raków or Parkitka that means a short path from measurement to installation, and a membrane that travels to site straight from the hall, with no warehouse in between. We install in prefabricated panel blocks, in the tenements along Aleje NMP and in the Old Town, in houses in Lisiniec and Kiedrzyn, and in the surrounding rural municipalities; polyester for taller interiors we bring in from the Stretch group's plant in Belgium.",
    trustBlocks: [
      {
        title: "Membrane straight from the hall",
        body: "A ceiling for a Częstochowa address is cut and welded in the same hall the showroom stands next to. There is no transport leg from another city and no waiting for a delivery: after the measurement the film goes into production, and once finished it goes out to be fitted. Polyester, which we do not make, is ordered from Belgium — the only material that takes longer to wait for in Częstochowa.",
      },
      {
        title: "Measurement without waiting for a route",
        body: "For cities in Silesia or the Łódź region we plan measuring routes so that one crew can cover several addresses in a trip. In Częstochowa we do not need to — a measurement in Wrzosowiak, Stradom or Grabówka is slotted in between installations, and the installation date can often be set for a week later, if you choose a film from current production.",
      },
      {
        title: "Helpline in Polish and Ukrainian",
        body: "Call +48 730 700 333 or, if you would rather speak Ukrainian, +48 455 444 475 — our office in Częstochowa answers. We arrange a showroom visit, a measurement, or a preliminary quote if you send us a floor plan of the room with dimensions. The form on the website works the same way, and we call back no later than the next working day.",
      },
    ],
    sections: [
      {
        heading: "Showroom and factory at ul. Legionów 59 in Częstochowa — what you will see on site",
        body:
          "The showroom beside the Alto Design production hall is open Monday to Friday, 9:00–15:30, with no need to book a particular time. Laid out on site are large samples of PVC film in matt, satin and gloss, in many colours, alongside polyester fabric, micro-perforated acoustic polyester and photo-print samples that show how a graphic behaves once tensioned. We also show the profiles themselves — perimeter, LED-line, and two-colour dividers — and backlit sections of ceiling, so you can compare linear light with a full light panel. There is parking in front of the building; it is worth ringing ahead, so someone from the office is waiting with samples chosen for the room in question, and while you are here you can look into the hall and see how we weld the film.\n\nA measurement in Częstochowa is usually arranged within 1–3 working days. The crew leaves from this same address, measures the room once the walls are finished and agrees the positions of the light fittings; on that basis the hall cuts the membrane and you receive a quote with a firm installation date.",
        links: [
          { label: "Contact and directions to the showroom", href: "/en/contact" },
          { label: "About us — the factory and the Stretch group", href: "/en/about" },
        ],
      },
      {
        heading: "PVC for a bathroom in a block of flats in Częstochowa's Północ, Tysiąclecie and Raków",
        body:
          "The blocks in Północ and Tysiąclecie have bathrooms from the seventies and eighties: a small floor area, a ceiling with pronounced slab joints, and passive ventilation that leaves steam on the ceiling after every shower. PVC film stands up to this — it does not soak it up, it does not come away in flakes like paint, and it does not need repainting every few years. When the neighbour upstairs floods the flat, the membrane takes the water and bulges, but does not split; we drain it through a light-fitting opening, dry it, and the ceiling returns to shape. In the older parts of Raków, where ceilings are often uneven after past renovations, the membrane evens out the plane with no skim coat and no sanding.\n\nIn the kitchen the usual choice is matt or satin in white, because they do not show marks around the cooker hood and do not throw reflections by a window on the balcony side. The film is tensioned with a heat gun, so the room warms up on installation day, and the faint smell goes within a day or two of airing. Every opening for light fittings, ventilation and the carbon monoxide detector is reinforced with a ring, so the membrane does not stretch around them.",
        links: [
          { label: "PVC film — properties and colours", href: "/en/solutions/pvc-ceiling" },
          { label: "Stretch ceilings in the bathroom", href: "/en/blog/stretch-ceiling-bathroom" },
        ],
      },
      {
        heading: "Stretch ceiling prices in Częstochowa direct from the manufacturer",
        body:
          "Because we make the film ourselves, in Częstochowa there is no wholesaler or distributor between us and the client. A PVC ceiling with installation costs 170–240 PLN/m² net of VAT; at the lower end of the range are white matt ceilings in regular-shaped rooms, at the upper end gloss, dark colours and ceilings with many openings for light fittings. Polyester from the group's Belgian plant is 220–290 PLN/m²; acoustic polyester with an absorber comes to 320–450 PLN/m². Light fittings and LED lines are priced separately, so you can compare them with what an electrical retailer offers.\n\nVAT depends on the building, not the membrane: you pay 8% when a flat is up to 150 m² or a house up to 300 m²; above those thresholds the reduced rate applies in proportion to the floor area, and a shop on Aleje NMP or a consulting room in Parkitka is charged at 23%. The quote after measurement is free and valid for 30 days. Payment is in two instalments — 30% on ordering, 70% within 7 days of handover.",
        links: [
          { label: "Stretch ceiling price guide 2026", href: "/en/blog/stretch-ceiling-cost" },
          { label: "When 8% VAT applies", href: "/en/blog/stretch-ceiling-vat-8-poland" },
          { label: "Free quote in Częstochowa", href: "/en#cta" },
        ],
      },
      {
        heading: "Installation day in Częstochowa — from a tenement on Aleje NMP to a house in Kiedrzyn",
        body:
          "The crew leaves Legionów in the morning with a membrane cut for your room, so up to 50 m² we finish the same day; a whole flat, or a living room with extensive lighting, we plan over two days. In a tenement on Aleje NMP or in the Old Town we first sort out vehicle access — narrow gateways and the paid parking zone call for unloading first thing in the morning — and tall rooms we fit out from a platform. In a block in Ostatni Grosz or Wrzosowiak it is the lift that matters: the profiles go up in lengths, and the membrane itself fits in a box.\n\nThe sequence is always the same: protective sheeting over furniture and floor, the perimeter profile levelled with a laser, sub-frames for the light fittings, tensioning, and the edge trim. We do not chisel, sand or use water, so in a house in Lisiniec or Kiedrzyn there is no need to carry the sofa out or take the curtains down in the next room. Before we leave we test the lighting, sign the handover report and leave the warranty card — 15 years on PVC, 10 on polyester.",
        links: [
          { label: "Stretch ceiling installation step by step", href: "/en/blog/stretch-ceiling-installation-steps" },
          { label: "Warranty terms", href: "/en/warranty" },
        ],
      },
    ],
    districts: [
      "Śródmieście",
      "Stare Miasto",
      "Podjasnogórska",
      "Tysiąclecie",
      "Północ",
      "Raków",
      "Ostatni Grosz",
      "Wrzosowiak",
      "Zawodzie-Dąbie",
      "Częstochówka-Parkitka",
      "Trzech Wieszczów",
      "Stradom",
      "Lisiniec",
      "Grabówka",
      "Kiedrzyn",
      "Błeszno",
      "Wyczerpy-Aniołów",
    ],
    nearbyTowns: ["Kłobuck", "Myszków", "Zawiercie", "Lubliniec", "Blachownia", "Poraj", "Olsztyn", "Koniecpol", "Kłomnice", "Mstów", "Janów", "Konopiska"],
    nearbySlugs: ["katowice", "radomsko", "piotrkow-trybunalski", "dabrowa-gornicza", "gliwice", "opole"],
    faq: [
      {
        q: "How much does a stretch ceiling cost in Częstochowa?",
        a: "The simplest option — white matt PVC — starts at about 170 PLN/m² (net of VAT, installation included), and we hold the same rate across the whole city and the surrounding municipalities. The final figure depends on the type of membrane, the number of light fittings and whether the ceiling is to be backlit. We write up the quote after the measurement, with separate lines for material, profiles, labour and lighting, so it is easy to set against another offer.",
      },
      {
        q: "How long is the wait for a measurement in Częstochowa?",
        a: "Usually 1–3 working days, because the measuring crew sets off from Legionów 59 and does not have to plan a route across half the province. If the flat is still being renovated, we set the measurement for after the walls are finished and the tiles are laid, so the membrane is made to the final dimensions. The PVC installation date usually falls about 5 working days after the measurement; polyester from Belgium needs 5–15 days plus roughly 3 days in transit.",
      },
      {
        q: "Can I bring a floor plan of my flat to the showroom at Legionów 59 and get a quote straight away?",
        a: "Yes — with the plan from your developer's contract or your own sketch with dimensions, we prepare a preliminary quote on the spot, based on the sample you choose. The final figure and date come from the measurement, because only that shows the level of the slab, the run of the services and where the light fittings will go. If you live in Częstochowa, we link the two visits: first the samples at the hall, then a few days later the measurement at your home.",
      },
      {
        q: "I live in a block in Wrzosowiak — will a stretch ceiling hide the joints between the floor slabs?",
        a: "Yes. In Wrzosowiak and Ostatni Grosz the slab ceilings have visible joints that come back as shadows after every repaint. The membrane does not touch the slab — it is held by the profile on the walls and forms one even plane above you, so the joints are out of sight however uneven the ceiling is. The standard drop is 15 mm, so at the typical 2.5 m the room does not become noticeably lower.",
      },
      {
        q: "In a tenement on Aleje NMP, will a stretch ceiling let me keep the stucco?",
        a: "Yes, if we stop the ceiling short of the cornice: the profile is fixed to the wall below the cove, so the cove and cornice stay exposed and we cover only the flat, cracked field of the ceiling. In the tall rooms of the tenements on Aleje NMP and in the Old Town we more often suggest polyester — tensioned cold, it needs no heating of three and a half metres of space, and its matt, fabric-like texture does not clash with old plaster.",
      },
      {
        q: "Do you travel to Kłobuck, Blachownia, Olsztyn and Mstów?",
        a: "Yes — the whole of Częstochowa and Kłobuck counties, as well as Myszków, Lubliniec and Koniecpol, are served from the same calendar as the city. In detached houses in Olsztyn, Mstów, Poraj or Konopiska a single unbroken sheet comes into its own: we make PVC seamless up to 6.50 m wide and polyester up to 5.15 m, so an open-plan living room and kitchen goes without a visible join. Travel within this radius is not charged separately.",
      },
      {
        q: "Can a ceiling in a restaurant or guesthouse in Podjasnogórska be done out of season, at night or at the weekend?",
        a: "Yes. Venues around Jasna Góra have most of their guests in summer, so we schedule the installation for the weeks after the season, or for nights and weekends — the work is dry and dust-free, and the room is back in use as soon as it has been signed off. In restaurant dining rooms we combine photo print on the membrane with acoustic polyester above part of the tables, so the buzz does not turn into reverberation; we show this on the Van der Valk hotel project in Beveren, where the banqueting hall was given the 50 mm system.",
      },
    ],
    image: "/images/about/hala-czestochowa.jpg",
    imageAlt: "Stretch Sufit production hall and showroom at ul. Legionów 59 in Częstochowa",
    imageCaption: "Production hall and showroom — ul. Legionów 59, Częstochowa",
    updatedAt: "2026-09-20",
  },
];
