/**
 * All of the site's words, links and media live here.
 * Edit this file to change copy — no need to touch the components.
 *
 * Photos live in /public/images, videos in /public/media.
 * Facts come from the 2024 company profile (source-material/company-profile.pdf)
 * and the captions on the WhatsApp photos. Anything marked TODO needs confirming
 * with Ekimi Jemy before launch.
 */

export const site = {
  name: "Ekimi Jemy Nig. Ltd.",
  shortName: "Ekimi Jemy",
  tagline: "Your trusted engineering partner.",
  description:
    "Ekimi Jemy Nig. Ltd. supplies marine and heavy equipment, and delivers dredging, land reclamation, shoreline piling and construction across Nigeria. Lagos · Ondo · Delta.",
  founded: 2012,
  rcNumber: "RC 1006872",
  founder: "Engr. Jemine Ekimimosugha Teddy",
  email: "jemyekimi@gmail.com",
  phone: "+234 807 405 6607",
  /** International format, digits only (used for wa.me links). */
  whatsapp: "2348074056607",
  address: {
    street: "Okira Nla, Addo Road",
    locality: "Ajah",
    region: "Lagos State",
    country: "NG",
  },
  /** TODO: the profile lists Ondo, Delta and Lagos on p.2 but only Lagos and Ondo on p.6 — confirm. */
  branches: ["Lagos (HQ)", "Ondo", "Delta"],
  logo: "/images/logo.png",
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Fleet & lease", href: "/services#fleet" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const hero = {
  eyebrow: "Marine · Dredging · Piling · Heavy equipment",
  title: ["Engineering", "at the", "water's edge."],
  body: "Since 2012 we have moved barges, reclaimed land, driven shoreline piles and hauled heavy plant across Nigeria's coast and creeks.",
  primary: { label: "Request a quote", href: "/contact#quote" },
  secondary: { label: "See our projects", href: "/projects" },
  /** Landscape loop behind the headline. */
  video: { src: "/media/haulage-loading-wide.mp4", poster: "/images/equipment-haulage.jpg" },
};

/** Headline numbers. Keep these strictly to things the client can stand behind. */
export const stats = [
  { value: "2012", label: "Incorporated", note: "CAC RC 1006872" },
  { value: "1.5 km", label: "Shoreline piling", note: "Addo Road, Ajah" },
  { value: "1,000", label: "Precast piles", note: "Cast & driven on site" },
  { value: "3", label: "State bases", note: "Lagos · Ondo · Delta" },
  { value: "20+", label: "Professionals", note: "On staff" },
];

export const intro = {
  kicker: "Who we are",
  statement:
    "From humble beginnings with no office, we've grown into a marine and heavy-equipment contractor that clients call when the ground is soft and the job can't wait.",
  body: "We supply and move the equipment, then put it to work: dredging and reclaiming land, protecting shorelines with precast piles, and building for the communities we work in.",
  link: { label: "About the company", href: "/about" },
};

export type Service = {
  id: string;
  code: string;
  title: string;
  summary: string;
  body: string;
  image: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "dredging",
    code: "DRG",
    title: "Dredging & land reclamation",
    summary: "Sand-fill, channel clearing and reclamation of waterlogged plots.",
    body: "We mobilise cutter-suction and side dredgers, prepare the site and pump sand to turn swamp and shallow water into buildable land.",
    image: "/images/cutter-dredger.jpg",
    points: ["Cutter-suction & side dredgers", "Site preparation & clearing", "Sand pumping & filling"],
  },
  {
    id: "piling",
    code: "PIL",
    title: "Shoreline protection & piling",
    summary: "Precast concrete piles cast on site and driven to hold the shore.",
    body: "We cast precast concrete sheet piles on site and drive them with crawler cranes to protect reclaimed land and waterfront property from erosion. We also do underground piling for foundations.",
    image: "/images/pile-driving-ajah.jpg",
    points: ["Precast concrete sheet piles", "Crane-driven installation", "Foundation & underground piling"],
  },
  {
    id: "haulage",
    code: "HAU",
    title: "Heavy-equipment haulage",
    summary: "Low-bed transport for excavators, dozers, swamp buggies and barges.",
    body: "You can trust us to move your heavy equipment. We load, secure and deliver plant between sites and across states on our low-bed trailers, with crane support for barges and dredgers.",
    image: "/images/swamp-buggy-lowbed.jpg",
    points: ["Low-bed trailers", "Crane lifts for barges & dredgers", "Interstate delivery"],
  },
  {
    id: "marine",
    code: "MAR",
    title: "Marine equipment & supply",
    summary: "Barges, houseboats, speedboats, tugs — and AGO, PMS and water.",
    body: "We supply marine equipment to the oil & gas, dredging and construction sectors: mud barges, houseboats, inboard and outboard speedboats, plus AGO (diesel), PMS (petrol) and potable water.",
    image: "/images/tug-and-barge.jpg",
    points: ["Mud barges & houseboats", "Speedboats (inboard / outboard)", "AGO, PMS & potable water"],
  },
  {
    id: "equipment",
    code: "EQP",
    title: "Heavy-equipment supply & lease",
    summary: "Swamp buggies, excavators, bulldozers and concrete mixers.",
    body: "We supply and lease heavy plant for land and swamp work: amphibious swamp buggies, excavators, bulldozers and mobile concrete mixers.",
    image: "/images/equipment-haulage.jpg",
    points: ["Swamp buggies (amphibious)", "Excavators & bulldozers", "Mobile concrete mixers"],
  },
  {
    id: "geotechnical",
    code: "GEO",
    title: "Geotechnical investigation",
    summary: "Soil boring on site before anything is designed or built.",
    body: "Before reclamation, piling or construction, we carry out geotechnical drilling to understand the soil, so the design rests on real data.",
    image: "/images/geotechnical-rig-a.jpg",
    points: ["Percussion boring rigs", "Soil sampling", "Waterfront & swamp sites"],
  },
  {
    id: "construction",
    code: "CON",
    title: "Building & construction",
    summary: "Schools, jetties and community infrastructure.",
    body: "We build — from classrooms and a marine school campus to community jetties and access roads — often in remote, riverine locations other contractors avoid.",
    image: "/images/marine-school-complete.jpg",
    points: ["Institutional buildings", "Jetties", "Access roads & earthworks"],
  },
  {
    id: "maintenance",
    code: "MNT",
    title: "Maintenance & repairs",
    summary: "Keeping equipment, speedboats and machinery working.",
    body: "Repair and maintenance for heavy equipment, speedboats and other machinery, so your operations keep running with minimal downtime.",
    image: "/images/barge-lift-b.jpg",
    points: ["Heavy equipment", "Speedboats & engines", "Marine machinery"],
  },
];

/** Equipment on the "Fleet & lease" section. Only mark `lease: true` when confirmed. */
export const fleet = [
  { name: "Mud barge", detail: "Open-hold barge for spoil, sand and materials", image: "/images/mud-barge.jpg", lease: true },
  { name: "Tug & barge", detail: "River towing and barge movements", image: "/images/tug-and-barge.jpg", lease: false },
  { name: "Swamp buggy", detail: "CAT 320B amphibious excavator", image: "/images/swamp-buggy-lowbed.jpg", lease: false },
  { name: "Low-bed haulage", detail: "Excavators, dozers and plant moved between sites", image: "/images/equipment-haulage.jpg", lease: false },
];

export const fleetNote =
  "Our mud barge is available for lease now. Ask about availability of other plant and marine equipment.";

export type Project = {
  id: string;
  title: string;
  location: string;
  category: string;
  scope: string;
  summary: string;
  image: string;
  gallery?: string[];
  figure?: { value: string; label: string };
};

export const projects: Project[] = [
  {
    id: "ajah-shoreline",
    title: "Addo Road shoreline protection",
    location: "Addo Road, Ajah, Lagos",
    category: "Piling",
    scope: "Precast pile casting & installation",
    summary:
      "About 1,000 precast concrete piles cast on site and driven at the same time to form 1.5 km of shoreline protection along the lagoon.",
    image: "/images/shoreline-wall-ajah.jpg",
    gallery: ["/images/piling-site-ajah.jpg", "/images/pile-driving-ajah.jpg"],
    figure: { value: "1.5 km", label: "of soil protection" },
  },
  {
    id: "ajah-reclamation",
    title: "Reclamation of 10 plots",
    location: "Addo Road, Ajah, Lagos",
    category: "Dredging",
    scope: "Dredging & land reclamation",
    summary: "Dredging and sand-filling to reclaim ten plots of waterfront land for development.",
    image: "/images/cutter-dredger.jpg",
    gallery: ["/images/dredge-site-prep.jpg", "/images/sand-pumping.jpg"],
    figure: { value: "10", label: "plots reclaimed" },
  },
  {
    id: "ugbonla-marine-school",
    title: "School of Marine Transport & Logistics",
    location: "Ugbonla, Ilaje, Ondo State",
    category: "Construction",
    scope: "Building construction & access road",
    summary: "Construction of a school of marine transport and logistics centre, from earthworks and blockwork to roofing and access road.",
    image: "/images/marine-school-complete.jpg",
    gallery: ["/images/marine-school-build.jpg", "/images/marine-school-roofing.jpg", "/images/marine-school-access-road.jpg"],
  },
  {
    id: "falomo-piling",
    title: "Underground piling works",
    location: "Falomo, Lagos",
    category: "Piling",
    scope: "Foundation piling",
    summary: "Underground piling and foundation works on a constrained urban site in Falomo.",
    image: "/images/falomo-piling.jpg",
  },
  {
    id: "arogbo-jetty",
    title: "Community jetty",
    location: "Arogbo, Ondo State",
    category: "Construction",
    scope: "Jetty construction",
    summary: "Completed a community jetty giving residents safe access to the waterway.",
    image: "/images/tug-and-barge.jpg", // TODO: replace with a photo of the Arogbo jetty
  },
  {
    id: "bolowou-classrooms",
    title: "Six classrooms",
    location: "Bolowou, Ondo State",
    category: "Community",
    scope: "Classroom block",
    summary: "Built six classrooms for the Bolowou community as part of our commitment to education.",
    image: "/images/marine-school-build.jpg", // TODO: replace with a photo of the Bolowou classrooms
    figure: { value: "6", label: "classrooms" },
  },
  {
    id: "equipment-moves",
    title: "Heavy-equipment transfers",
    location: "Ondo → Niger State, and Lagos",
    category: "Haulage",
    scope: "Low-bed haulage & crane lifts",
    summary: "Safe delivery of a bulldozer and excavator from Ondo to Niger State, swamp buggy relocations, and crane lifts of barges and dredgers.",
    image: "/images/equipment-haulage.jpg",
    gallery: ["/images/swamp-buggy-lowbed.jpg", "/images/barge-lift-a.jpg", "/images/dredger-crane-lift.jpg"],
  },
  {
    id: "geotechnical",
    title: "Geotechnical investigation",
    location: "Lagos waterfront",
    category: "Geotechnical",
    scope: "Soil boring",
    summary: "Percussion boring to establish soil conditions ahead of reclamation and piling.",
    image: "/images/geotechnical-rig-b.jpg",
    gallery: ["/images/geotechnical-rig-a.jpg"],
  },
];

export type VideoItem = {
  title: string;
  length: string;
  poster: string;
  src: string;
};

export const videos: VideoItem[] = [
  { title: "Towing a barge upriver", length: "0:07", poster: "/images/posters/tug-towing-barge.jpg", src: "/media/tug-towing-barge.mp4" },
  { title: "Lifting barges at the sand-fill yard", length: "0:04", poster: "/images/posters/crane-barge-yard.jpg", src: "/media/crane-barge-yard.mp4" },
  { title: "Loading a dozer for delivery", length: "0:07", poster: "/images/posters/haulage-loading.jpg", src: "/media/haulage-loading.mp4" },
  { title: "Barge on the sand-fill", length: "0:10", poster: "/images/posters/barge-on-sandfill.jpg", src: "/media/barge-on-sandfill.mp4" },
];

export const clients = ["Dangote Group", "Conoil Nig. Ltd."];

export const values = [
  { title: "Timely response", body: "We respond to client needs promptly, so your operations see minimal downtime." },
  { title: "Quality work", body: "High-quality products and services, delivered to the highest quality-assurance standards." },
  { title: "Customer first", body: "Your requirements shape how we plan, staff and equip every job." },
  { title: "Environmental care", body: "We work to the highest environmental standards on land and water." },
];

export const about = {
  title: ["Built from", "the ground up."],
  lead: "Ekimi Jemy Nig. Ltd. was incorporated in 2012 to provide a reliable, sustainable supply of marine equipment and services to Nigeria's oil & gas, dredging and construction sectors.",
  paragraphs: [
    "We began with no office and a small team. Today we operate from bases in Lagos, Ondo and Delta States with more than 20 dedicated professionals, and we have supplied equipment to organisations including the Dangote Group and Conoil Nig. Ltd.",
    "Our work spans dredging and reclamation, shoreline piling, heavy-equipment supply and haulage, marine supply, maintenance and construction, much of it in riverine communities where logistics are hard and reliability matters most.",
  ],
  mission:
    "To provide a reliable and sustainable supply of marine equipment to oil and gas industries, dredging and soil protection services, and maintenance services, while adhering to the highest quality assurance and environmental standards.",
  vision:
    "To be the leading provider of marine equipment and a major importer of heavy equipment to Nigeria, committed to environmental sustainability, social responsibility and creating employment opportunities.",
  image: "/images/barge-lift-a.jpg",
  wide: "/images/tug-and-barge.jpg",
};

export const community = {
  title: "Beyond the job site",
  body: "We invest in the communities we work in.",
  items: [
    { title: "WAEC scholarships", body: "We cover WAEC examination fees for secondary-school students." },
    { title: "Community building", body: "Six classrooms in Bolowou and a community jetty in Arogbo, Ondo State." },
    { title: "Recognition", body: "Recognised by Igbinedion University for our contributions and achievements." },
  ],
  goals: [
    "Become a major importer of heavy equipment and expand our product offering",
    "Prioritise climate-change initiatives and environmental sustainability",
    "Keep creating jobs and funding scholarships",
    "Provide free healthcare outreach to communities in need",
  ],
};

export const founder = {
  name: "Engr. Jemine Ekimimosugha Teddy",
  role: "Founder & Managing Director",
  portrait: "/images/founder.jpg",
  onSite: "/images/founder-on-site.jpg",
  bio: [
    "Jemine is a petroleum engineer from Ondo State. He holds a B.Eng in Petroleum Engineering from Igbinedion University, Okada (2016) and an M.Eng in Petroleum Engineering from Afe Babalola University, Ado-Ekiti (2023).",
    "Before and alongside Ekimi Jemy, he was Production Manager at Tuwasco Marine Service Ltd, building fibre boats and mounting outboard engines; a research assistant at the Petroleum Training Institute during NYSC; and QA/QC personnel with Bradama International Skill Works on the NNPC/ZAKHEM ELP 2 gas pipeline project.",
    "In 2022–23 he served as the liaison between Conoil and host communities for its AX4 operations in Ondo State, and he supervised the training of 800 Niger Delta youths in welding and fabrication for the Office of the Special Adviser to the President on Niger Delta.",
  ],
  credentials: [
    "B.Eng Petroleum Engineering — Igbinedion University",
    "M.Eng Petroleum Engineering — Afe Babalola University",
    "Drilling & Well Completion; QA/QC in Production Engineering — PTI Warri",
    "Safety in Petrochemical & Allied Industries",
    "Conflict Management & Reconciliation, Levels I & II",
  ],
};

export const cta = {
  title: "Have a site, a shoreline or a machine to move?",
  body: "Tell us what you need and where. We'll come back with a plan and a quote.",
  primary: { label: "Request a quote", href: "/contact#quote" },
};

export const footer = {
  groups: [
    {
      title: "Services",
      links: [
        { label: "Dredging & reclamation", href: "/services#dredging" },
        { label: "Shoreline piling", href: "/services#piling" },
        { label: "Equipment haulage", href: "/services#haulage" },
        { label: "Marine supply", href: "/services#marine" },
        { label: "Fleet & lease", href: "/services#fleet" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy", href: "/privacy" },
      ],
    },
  ],
};
