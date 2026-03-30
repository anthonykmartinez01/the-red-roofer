export interface Location {
  id: string;
  name: string;
  slug: string;
  description: string;
  content: string;
  neighborhoods: string[];
  landmarks: string[];
  isHomeBase?: boolean;
  nearbyIds: string[];
  metaTitle: string;
  metaDescription: string;
}

export const locations: Location[] = [
  {
    id: "little-elm",
    name: "Little Elm",
    slug: "little-elm",
    description: "Little Elm is our primary service area. From Paloma Creek to Union Park, we provide roofing, handyman, and home repair services to homeowners throughout the city.",
    content: "Little Elm is home base for The Red Roofer. We know this town inside and out because we live and work here. From the established neighborhoods near Little Elm Beach to the newer developments around Union Park, we've worked on roofs, gutters, and homes across every part of this growing community. Little Elm's rapid growth means a mix of new construction and older homes, each with their own maintenance needs. New homes often need minor touch-ups and installations after move-in, while older homes near the lake may need roof repairs, gutter work, or exterior painting after years of exposure to North Texas weather.",
    neighborhoods: ["Paloma Creek", "Union Park", "Lakewood Village"],
    landmarks: ["Lake Lewisville", "Little Elm Beach", "Little Elm Park"],
    isHomeBase: true,
    nearbyIds: ["frisco", "the-colony", "aubrey", "providence-village"],
    metaTitle: "Roofing & Home Services in Little Elm, TX | The Red Roofer",
    metaDescription: "The Red Roofer is based in Little Elm, TX. Expert roofing, gutter, painting, and handyman services. Call +1 940-260-3197 for a free quote!"
  },
  {
    id: "aubrey",
    name: "Aubrey",
    slug: "aubrey",
    description: "We proudly serve Aubrey homeowners with roofing repairs, handyman work, and outdoor services. This fast-growing community knows us by name.",
    content: "Aubrey is a small but fast-growing community north of Little Elm. New neighborhoods are going up quickly, and homeowners here need reliable contractors for everything from post-construction touch-ups to storm damage repairs. The Red Roofer serves Aubrey with roofing, gutter, painting, and handyman services. We're close by in Little Elm and can usually get to Aubrey jobs within a day or two of scheduling.",
    neighborhoods: ["Savannah", "Jackson Ridge"],
    landmarks: ["Aubrey 380 Corridor"],
    nearbyIds: ["little-elm", "pilot-point", "krugerville", "providence-village", "denton"],
    metaTitle: "Roofing & Home Services in Aubrey, TX | The Red Roofer",
    metaDescription: "The Red Roofer serves Aubrey, TX with roofing, gutter, and handyman services. Call +1 940-260-3197 for a free quote!"
  },
  {
    id: "krugerville",
    name: "Krugerville",
    slug: "krugerville",
    description: "Krugerville is right in our backyard. We provide quick, reliable service to this close-knit community for all roofing and home repair needs.",
    content: "Krugerville is right in our backyard, and we provide quick, reliable service to this close-knit community. Whether you need a roof inspection after a storm, gutter cleaning, or general handyman work, The Red Roofer is just minutes away. We treat every Krugerville home like it's our own, delivering quality work at fair prices.",
    neighborhoods: [],
    landmarks: ["US-377 Corridor"],
    nearbyIds: ["aubrey", "pilot-point", "denton", "little-elm"],
    metaTitle: "Roofing & Home Services in Krugerville, TX | The Red Roofer",
    metaDescription: "The Red Roofer serves Krugerville, TX with roofing, gutter, and handyman services. Call +1 940-260-3197 for a free quote!"
  },
  {
    id: "providence-village",
    name: "Providence Village",
    slug: "providence-village",
    description: "Providence Village homeowners trust The Red Roofer for everything from roof repairs to gutter cleaning. We know this community well.",
    content: "Providence Village homeowners trust The Red Roofer for everything from roof repairs to gutter cleaning. This growing community has a strong mix of newer homes that need post-construction services and established properties requiring regular maintenance. We know Providence Village well and serve homeowners here on a regular basis from our nearby Little Elm location.",
    neighborhoods: ["Providence", "Providence Village Estates"],
    landmarks: ["Providence Village Town Center"],
    nearbyIds: ["aubrey", "little-elm", "the-colony", "krugerville"],
    metaTitle: "Roofing & Home Services in Providence Village, TX | The Red Roofer",
    metaDescription: "The Red Roofer serves Providence Village, TX with roofing, gutter, and handyman services. Call +1 940-260-3197 for a free quote!"
  },
  {
    id: "the-colony",
    name: "The Colony",
    slug: "the-colony",
    description: "We serve The Colony with full roofing, handyman, and gutter services. From Grandscape to Stewart Creek, we're just a short drive away.",
    content: "The Colony sits right next to Little Elm along the shores of Lake Lewisville, and we serve homeowners here regularly. The proximity to the lake means homes in The Colony deal with moisture, humidity, and storm exposure that can take a toll on roofs, gutters, and exterior paint. The Red Roofer provides fast, reliable service for roof repairs, inspections, gutter cleaning, exterior painting, and a full range of handyman work.",
    neighborhoods: ["Stewart Creek", "The Tribute"],
    landmarks: ["Grandscape", "Hawaiian Falls"],
    nearbyIds: ["little-elm", "frisco", "lewisville", "plano"],
    metaTitle: "Roofing & Home Services in The Colony, TX | The Red Roofer",
    metaDescription: "The Red Roofer serves The Colony, TX with roofing, gutter, and handyman services. Call +1 940-260-3197 for a free quote!"
  },
  {
    id: "frisco",
    name: "Frisco",
    slug: "frisco",
    description: "Frisco's fast growth means a lot of homes need roofing and repair work. We provide reliable service to Frisco homeowners at fair prices.",
    content: "Frisco is one of the fastest-growing cities in Texas, and that growth means homeowners need reliable contractors they can trust. The Red Roofer serves Frisco with the same quality roofing, gutter, and handyman services we provide in our home base of Little Elm. We're just a short drive away, which means fast response times. Frisco's mix of new and established neighborhoods keeps us busy with everything from roof inspections on newer homes to storm damage repairs and exterior painting.",
    neighborhoods: ["Starwood", "Phillips Creek Ranch", "Richwoods"],
    landmarks: ["Toyota Stadium", "Stonebriar Centre", "The Star"],
    nearbyIds: ["little-elm", "prosper", "mckinney", "plano", "the-colony"],
    metaTitle: "Roofing & Home Services in Frisco, TX | The Red Roofer",
    metaDescription: "The Red Roofer serves Frisco, TX with roofing, gutter, and handyman services. Call +1 940-260-3197 for a free quote!"
  },
  {
    id: "denton",
    name: "Denton",
    slug: "denton",
    description: "Denton homeowners count on The Red Roofer for quality roofing, handyman, and maintenance services. We serve the whole city and surrounding county areas.",
    content: "Denton's unique mix of college-town energy and established residential neighborhoods makes it a diverse market for home services. The Red Roofer serves Denton homeowners with roofing, gutter, painting, and handyman work. From the older homes near the downtown square to the newer developments on the south side, we handle it all. Denton is in Denton County, just like our home base of Little Elm, so we know the area and the weather patterns that affect homes here.",
    neighborhoods: ["Robson Ranch", "Rayzor Ranch"],
    landmarks: ["UNT", "TWU", "Denton Square"],
    nearbyIds: ["aubrey", "little-elm", "lewisville", "sanger", "denton-county"],
    metaTitle: "Roofing & Home Services in Denton, TX | The Red Roofer",
    metaDescription: "The Red Roofer serves Denton, TX with roofing, gutter, and handyman services. Call +1 940-260-3197 for a free quote!"
  },
  {
    id: "celina",
    name: "Celina",
    slug: "celina",
    description: "Celina is one of the fastest-growing cities in Texas. We help Celina homeowners keep up with roofing, repairs, and outdoor maintenance.",
    content: "Celina is growing fast, and with all that new construction comes the need for reliable home services. The Red Roofer provides roofing, gutter, painting, and handyman services to Celina homeowners. Whether your new home needs a ceiling fan installed or your established home took hail damage, we're ready to help. We're based in Little Elm and serve Celina regularly, so you can count on timely appointments and fast emergency response when storms roll through.",
    neighborhoods: ["Light Farms", "Cambridge Crossing"],
    landmarks: ["Downtown Celina Square"],
    nearbyIds: ["prosper", "aubrey", "frisco", "pilot-point"],
    metaTitle: "Roofing & Home Services in Celina, TX | The Red Roofer",
    metaDescription: "The Red Roofer serves Celina, TX with roofing, gutter, and handyman services. Call +1 940-260-3197 for a free quote!"
  },
  {
    id: "prosper",
    name: "Prosper",
    slug: "prosper",
    description: "Prosper homeowners expect quality work, and that's what we deliver. Roofing, fencing, handyman services — we're a trusted name in Prosper.",
    content: "Prosper has seen tremendous growth in recent years, with beautiful new neighborhoods and families moving in from across the DFW area. The Red Roofer serves Prosper homeowners with the full range of roofing, gutter, painting, and handyman services. New construction homes often need minor adjustments and installations after move-in, while the area's exposure to North Texas storms means roof inspections and repairs are a regular need. We're based in nearby Little Elm, so getting to Prosper is quick and easy.",
    neighborhoods: ["Windsong Ranch", "Star Trail", "Whitley Place"],
    landmarks: ["Prosper Town Center"],
    nearbyIds: ["celina", "frisco", "mckinney", "little-elm"],
    metaTitle: "Roofing & Home Services in Prosper, TX | The Red Roofer",
    metaDescription: "The Red Roofer serves Prosper, TX with roofing, gutter, and handyman services. Call +1 940-260-3197 for a free quote!"
  },
  {
    id: "mckinney",
    name: "McKinney",
    slug: "mckinney",
    description: "From historic downtown to the newer communities, McKinney homeowners rely on The Red Roofer for professional roofing and home repair services.",
    content: "McKinney's charm comes from its mix of historic downtown character and modern suburban neighborhoods. The Red Roofer serves homeowners throughout McKinney with roofing, gutter, painting, and handyman services. Older homes in the historic district often need roof repairs, exterior painting, and gutter maintenance, while newer neighborhoods deal with the same North Texas storm damage that affects the entire DFW area. We provide honest assessments, fair pricing, and quality work.",
    neighborhoods: ["Stonebridge Ranch", "Adriatica Village", "Trinity Falls"],
    landmarks: ["Historic Downtown McKinney", "McKinney Performing Arts Center"],
    nearbyIds: ["frisco", "prosper", "plano", "celina"],
    metaTitle: "Roofing & Home Services in McKinney, TX | The Red Roofer",
    metaDescription: "The Red Roofer serves McKinney, TX with roofing, gutter, and handyman services. Call +1 940-260-3197 for a free quote!"
  },
  {
    id: "plano",
    name: "Plano",
    slug: "plano",
    description: "Plano is a major part of our service area. We handle roofing repairs, installations, handyman work, and more for Plano homeowners.",
    content: "Plano is one of the largest cities in the DFW metroplex, with neighborhoods ranging from mid-century homes to brand-new developments. The Red Roofer serves Plano homeowners with roofing, gutter, painting, and handyman services. Many Plano homes are reaching 15-20 years old, which means roofs are hitting the age where problems start showing up. We provide honest inspections, storm damage assessments, and quality repairs across the entire city.",
    neighborhoods: ["West Plano", "Legacy West", "Willow Bend"],
    landmarks: ["Legacy West", "The Shops at Willow Bend"],
    nearbyIds: ["frisco", "mckinney", "the-colony", "lewisville"],
    metaTitle: "Roofing & Home Services in Plano, TX | The Red Roofer",
    metaDescription: "The Red Roofer serves Plano, TX with roofing, gutter, and handyman services. Call +1 940-260-3197 for a free quote!"
  },
  {
    id: "lewisville",
    name: "Lewisville",
    slug: "lewisville",
    description: "Lewisville homeowners trust us for reliable roofing and home services. Located right along Lake Lewisville, we know the area well.",
    content: "Lewisville sits along Lake Lewisville and is one of the more established cities in the DFW metroplex. Many homes here have been around for decades, and they need regular maintenance to stay in good shape. The Red Roofer provides roofing, gutter, painting, and handyman services to Lewisville homeowners. Roof replacements, storm damage repairs, gutter cleaning, exterior painting. We handle it all with the same quality and professionalism we bring to every job. Our Little Elm base is just minutes away.",
    neighborhoods: ["Castle Hills", "Valley Ridge"],
    landmarks: ["Vista Ridge Mall", "Lake Lewisville"],
    nearbyIds: ["the-colony", "denton", "little-elm", "plano"],
    metaTitle: "Roofing & Home Services in Lewisville, TX | The Red Roofer",
    metaDescription: "The Red Roofer serves Lewisville, TX with roofing, gutter, and handyman services. Call +1 940-260-3197 for a free quote!"
  },
  {
    id: "pilot-point",
    name: "Pilot Point",
    slug: "pilot-point",
    description: "We serve Pilot Point and the surrounding rural areas with honest, dependable roofing and handyman services.",
    content: "Pilot Point is a charming rural community north of the DFW metroplex. Homes here tend to be more spread out, and many homeowners struggle to find reliable contractors willing to make the drive. The Red Roofer serves Pilot Point from our Little Elm base, and we're happy to make the trip. Roofing repairs, gutter cleaning, exterior painting, and general handyman work are all services we provide to Pilot Point homeowners.",
    neighborhoods: [],
    landmarks: ["Ray Roberts Lake", "Historic Pilot Point Square"],
    nearbyIds: ["aubrey", "sanger", "denton", "krugerville"],
    metaTitle: "Roofing & Home Services in Pilot Point, TX | The Red Roofer",
    metaDescription: "The Red Roofer serves Pilot Point, TX with roofing, gutter, and handyman services. Call +1 940-260-3197 for a free quote!"
  },
  {
    id: "sanger",
    name: "Sanger",
    slug: "sanger",
    description: "Sanger homeowners can count on The Red Roofer for roofing repairs, gutter cleaning, and general home maintenance.",
    content: "Sanger is a growing community along the I-35 corridor north of Denton. Homeowners here need the same quality roofing and home maintenance services as the rest of the DFW area, and The Red Roofer is happy to serve them. From roof repairs after storms to gutter cleaning and handyman projects, we bring reliable, professional service to Sanger homeowners.",
    neighborhoods: [],
    landmarks: ["I-35 Corridor", "Sanger Rail Trail"],
    nearbyIds: ["denton", "pilot-point", "aubrey", "denton-county"],
    metaTitle: "Roofing & Home Services in Sanger, TX | The Red Roofer",
    metaDescription: "The Red Roofer serves Sanger, TX with roofing, gutter, and handyman services. Call +1 940-260-3197 for a free quote!"
  },
  {
    id: "denton-county",
    name: "Denton County",
    slug: "denton-county",
    description: "We serve homeowners across Denton County — from the smaller towns to the unincorporated areas. Wherever you are in the county, we can help.",
    content: "The Red Roofer serves homeowners across all of Denton County. From the smaller towns to the unincorporated areas, wherever you are in the county, we can help with roofing, gutter, painting, and handyman services. Our Little Elm base puts us right in the heart of Denton County, so we can reach most locations quickly. No matter how rural or remote your property feels, you deserve quality home maintenance and repairs.",
    neighborhoods: [],
    landmarks: ["Denton County Courthouse", "Lewisville Lake"],
    nearbyIds: ["denton", "aubrey", "little-elm", "lewisville", "sanger"],
    metaTitle: "Roofing & Home Services in Denton County, TX | The Red Roofer",
    metaDescription: "The Red Roofer serves all of Denton County, TX with roofing, gutter, and handyman services. Call +1 940-260-3197 for a free quote!"
  }
];

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(l => l.slug === slug);
};
