export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  content: string;
  serviceIds: string[];
  metaTitle: string;
  metaDescription: string;
}

export const categories: Category[] = [
  {
    id: "handyman",
    name: "Handyman / Handyperson",
    slug: "handyman",
    description: "Need a reliable handyman in Little Elm, TX? The Red Roofer handles everything from fan installs to painting to general home repairs. We show up on time, do the job right, and clean up after ourselves.",
    content: "Most homeowners around Little Elm and Paloma Creek have a list of small projects that keep getting pushed off. A wobbly ceiling fan. A room that needs painting. A TV that's been sitting on the floor for months. That's where we come in. We handle all those little jobs so you don't have to. We've been doing handyman work across Denton County for years. We know what North Texas homes need — from drywall patches after summer storms to fixing exterior trim that took a beating from the heat. No job is too small. If it's broken, loose, or just needs to get done, give us a call.",
    serviceIds: ["exterior-painting", "fan-installation", "furniture-assembly", "general-repairs", "gutter-cleaning", "home-maintenance-repairs", "interior-painting", "roof-repair", "tv-mounting", "landscaping"],
    metaTitle: "Handyman Services Little Elm, TX | The Red Roofer",
    metaDescription: "Need a handyman in Little Elm, TX? The Red Roofer offers painting, fan installs, general repairs, and more. Call +1 940-260-3197 for a free quote!"
  },
  {
    id: "contractor",
    name: "Contractor",
    slug: "contractor",
    description: "Looking for a dependable contractor in Little Elm, TX? The Red Roofer provides professional contracting services for homes across Little Elm, Union Park, and the surrounding DFW area.",
    content: "When you hire a contractor, you want someone who actually shows up and does what they say. That's how we run things at The Red Roofer. From roof installs to gutter work to painting the outside of your house — we handle it. We work with homeowners all over Little Elm, from the newer builds in Union Park to the established neighborhoods near Lake Lewisville. Texas weather puts your home through a lot. We help you keep up with it. Whether it's a roof repair after a hailstorm or a full exterior paint job before summer, we get it done right.",
    serviceIds: ["exterior-painting", "fan-installation", "furniture-assembly", "general-repairs", "gutter-cleaning", "roof-repair", "tv-mounting", "roof-installation"],
    metaTitle: "Contractor in Little Elm, TX | The Red Roofer",
    metaDescription: "Trusted contractor in Little Elm, TX. The Red Roofer handles roof installs, repairs, painting, and more. Call +1 940-260-3197 for a free estimate!"
  },
  {
    id: "landscaper",
    name: "Landscaper",
    slug: "landscaper",
    description: "Need landscaping help in Little Elm, TX? The Red Roofer offers professional landscaping services that keep your yard looking great through every season — even the brutal North Texas summers.",
    content: "Keeping a yard looking good in Little Elm isn't easy. Between the summer heat, the clay soil, and the occasional ice storm, your landscaping takes a beating. We help homeowners around Paloma Creek, Providence Village, and Little Elm Beach keep their outdoor spaces in shape. Whether you need basic lawn cleanup, mulching, plant beds, or a full yard makeover, we've got you covered. We know what grows well in this part of Texas and what doesn't. No fancy sales pitch — just honest work that makes your property look better.",
    serviceIds: ["landscaping"],
    metaTitle: "Landscaper in Little Elm, TX | The Red Roofer",
    metaDescription: "Professional landscaping in Little Elm, TX. The Red Roofer helps keep your yard looking great. Call +1 940-260-3197 for a free landscaping quote!"
  },
  {
    id: "gutter-service",
    name: "Gutter Service",
    slug: "gutter-service",
    description: "Need gutter service in Little Elm, TX? The Red Roofer provides gutter cleaning, repairs, and maintenance to protect your home from water damage year-round.",
    content: "Gutters don't get much attention until something goes wrong. A clogged gutter during a spring downpour near Lake Lewisville can cause water to back up under your shingles, pool around your foundation, and create problems that cost thousands to fix. We clean and repair gutters for homes throughout Little Elm, Paloma Creek, and Union Park. After the fall leaf drop and again after spring storms — those are the times your gutters need the most help. We clear them out, check the downspouts, and make sure everything is draining the right way. Simple service that saves you big money down the road.",
    serviceIds: [],
    metaTitle: "Gutter Service Little Elm, TX | The Red Roofer",
    metaDescription: "Gutter service in Little Elm, TX. The Red Roofer cleans and repairs gutters to prevent water damage. Call +1 940-260-3197 for a free estimate!"
  },
  {
    id: "chimney-services",
    name: "Chimney Services",
    slug: "chimney-services",
    description: "Need chimney repair or maintenance in Little Elm, TX? The Red Roofer provides professional chimney services including flashing repair, cap installation, and leak prevention.",
    content: "Chimneys are one of the most overlooked parts of a roof. And in North Texas, where we get hail, high winds, and temperature swings from 30 to 90 degrees in the same week, chimney problems show up fast. The flashing around your chimney is usually the first thing to fail. When it does, water gets in and starts damaging your attic, ceiling, and walls. We see this all the time in Little Elm homes — especially near Paloma Creek and the older neighborhoods around Little Elm Beach. We repair chimney flashing, install chimney caps, and fix cracks in the mortar. If your chimney is leaking or you just want someone to check it, give us a call.",
    serviceIds: [],
    metaTitle: "Chimney Services Little Elm, TX | The Red Roofer",
    metaDescription: "Chimney repair and maintenance in Little Elm, TX. The Red Roofer fixes flashing, caps, and leaks. Call +1 940-260-3197 for a free inspection!"
  },
  {
    id: "fence-contractor",
    name: "Fence Contractor",
    slug: "fence-contractor",
    description: "Need a fence installed or repaired in Little Elm, TX? The Red Roofer builds and repairs wood, vinyl, and chain link fences for homes across Little Elm and the DFW area.",
    content: "A good fence does a lot for your home. Privacy, security, curb appeal — it all starts with a solid fence. We install and repair fences for homeowners throughout Little Elm, Union Park, Providence Village, and surrounding neighborhoods. North Texas weather is hard on fences. Wind storms knock panels loose. The summer heat warps wood. And after a bad hail event, you might need a full section replaced. We work with wood, vinyl, and chain link — whatever fits your yard and your budget. We also know the local HOA requirements in most Little Elm communities, so we can help make sure your new fence passes inspection.",
    serviceIds: [],
    metaTitle: "Fence Contractor Little Elm, TX | The Red Roofer",
    metaDescription: "Fence installation and repair in Little Elm, TX. The Red Roofer builds wood, vinyl, and chain link fences. Call +1 940-260-3197 for a free quote!"
  },
  {
    id: "general-contractor",
    name: "General Contractor",
    slug: "general-contractor",
    description: "Looking for a general contractor in Little Elm, TX? The Red Roofer provides a full range of home improvement services — from roof installs to exterior repairs and everything in between.",
    content: "When you need more than just one thing fixed, you need a general contractor who can handle the full scope. That's what we do at The Red Roofer. Roof installation, gutter work, exterior painting, fan installs, TV mounting — we do it all under one roof (pun intended). We work with homeowners all across Little Elm, from the growing communities near Union Park to the homes along Lake Lewisville. Having one contractor handle multiple projects saves you time, money, and the headache of coordinating between different guys. We keep it simple. One call, one crew, one job done right.",
    serviceIds: ["exterior-painting", "fan-installation", "furniture-assembly", "gutter-cleaning", "roof-repair", "tv-mounting", "roof-installation"],
    metaTitle: "General Contractor Little Elm, TX | The Red Roofer",
    metaDescription: "General contractor in Little Elm, TX. The Red Roofer handles roofing, painting, repairs, and more. Call +1 940-260-3197 for a free estimate!"
  },
  {
    id: "gutter-cleaning-service",
    name: "Gutter Cleaning Service",
    slug: "gutter-cleaning-service",
    description: "Need your gutters cleaned in Little Elm, TX? The Red Roofer provides fast, thorough gutter cleaning to prevent water damage and keep your home protected.",
    content: "Clogged gutters cause more damage than most people realize. Water overflows, runs down your siding, pools around your foundation, and can even back up under your roof shingles. In Little Elm, where spring storms drop heavy rain in a short time, clean gutters aren't optional — they're essential. We clean gutters for homes across Little Elm, Paloma Creek, Union Park, and Providence Village. We remove leaves, debris, and buildup, flush the downspouts, and check for any damage while we're up there. Most jobs take less than an hour. It's a small investment that prevents big problems.",
    serviceIds: [],
    metaTitle: "Gutter Cleaning Little Elm, TX | The Red Roofer",
    metaDescription: "Gutter cleaning service in Little Elm, TX. The Red Roofer clears debris and prevents water damage. Call +1 940-260-3197 for fast service!"
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};
