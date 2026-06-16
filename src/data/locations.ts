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
    id: "colorado-springs",
    name: "Colorado Springs",
    slug: "colorado-springs",
    description: "Colorado Springs is our primary service area. From Briargate to the Broadmoor, we provide roofing, handyman, and home repair services to homeowners throughout the city.",
    content: "Colorado Springs is home base for The Red Roofer. We know this city inside and out because we live and work here. From the established neighborhoods around Old Colorado City to the newer developments out on the Powers corridor and up in Briargate, we've worked on roofs, gutters, and homes across every part of this fast-growing city. Colorado Springs sits right in the heart of Colorado's Hail Alley, so storm damage is a constant. Add intense high-altitude sun, heavy winter snow loads, and big day-to-night temperature swings, and roofs here take a real beating. Whether it's hail damage after a summer storm or a worn-out roof that's seen one too many winters, we handle it.",
    neighborhoods: ["Briargate", "Old Colorado City", "Powers", "Rockrimmon", "Broadmoor"],
    landmarks: ["Pikes Peak", "Garden of the Gods", "Cheyenne Mountain"],
    isHomeBase: true,
    nearbyIds: ["monument", "fountain", "manitou-springs", "falcon", "cimarron-hills"],
    metaTitle: "Roofing & Home Services in Colorado Springs, CO | The Red Roofer",
    metaDescription: "The Red Roofer is based in Colorado Springs, CO. Expert roofing, gutter, painting, and handyman services. Call +1 719-602-6758 for a free quote!"
  },
  {
    id: "monument",
    name: "Monument",
    slug: "monument",
    description: "We proudly serve Monument homeowners with roofing repairs, handyman work, and outdoor services. From Jackson Creek to Woodmoor, we're just up I-25.",
    content: "Monument sits just north of Colorado Springs along the I-25 corridor, and we serve homeowners here regularly. The higher elevation around Monument and the Tri-Lakes area means heavier snowfall and brutal hailstorms rolling off the Palmer Divide, which is hard on roofs, gutters, and exterior paint. The Red Roofer provides roofing, gutter, painting, and handyman services to Monument and Woodmoor homeowners. We're close by in Colorado Springs and can usually reach Monument jobs within a day or two of scheduling.",
    neighborhoods: ["Jackson Creek", "Woodmoor", "Kings Deer"],
    landmarks: ["Mount Herman", "Monument Rock", "Palmer Lake"],
    nearbyIds: ["colorado-springs", "black-forest", "falcon", "woodland-park"],
    metaTitle: "Roofing & Home Services in Monument, CO | The Red Roofer",
    metaDescription: "The Red Roofer serves Monument, CO with roofing, gutter, and handyman services. Call +1 719-602-6758 for a free quote!"
  },
  {
    id: "fountain",
    name: "Fountain",
    slug: "fountain",
    description: "Fountain homeowners count on The Red Roofer for quality roofing, handyman, and maintenance services. We serve the whole city and surrounding areas.",
    content: "Fountain sits just south of Colorado Springs near Fort Carson, and it's a growing community with a strong mix of established homes and new construction. The Red Roofer serves Fountain homeowners with roofing, gutter, painting, and handyman services. Homes here see the same Front Range hail and high-altitude sun that wears out roofs across the region, plus wind coming off the plains. From storm damage repairs to gutter cleaning and exterior painting, we bring reliable, professional service to Fountain at fair prices.",
    neighborhoods: ["Mesa Ridge", "Cross Creek", "Ventana"],
    landmarks: ["Fountain Creek Regional Park", "Aga Park"],
    nearbyIds: ["colorado-springs", "security-widefield", "peyton"],
    metaTitle: "Roofing & Home Services in Fountain, CO | The Red Roofer",
    metaDescription: "The Red Roofer serves Fountain, CO with roofing, gutter, and handyman services. Call +1 719-602-6758 for a free quote!"
  },
  {
    id: "security-widefield",
    name: "Security-Widefield",
    slug: "security-widefield",
    description: "Security-Widefield homeowners trust The Red Roofer for everything from roof repairs to gutter cleaning. We know this community well.",
    content: "Security-Widefield is an established community south of Colorado Springs, and many of the homes here have been around for decades. That means roofs reaching the end of their life, gutters that need attention, and exteriors worn down by years of Colorado sun and hail. The Red Roofer serves Security-Widefield homeowners with roofing, gutter, painting, and handyman services. Roof replacements, storm damage repairs, gutter cleaning, exterior painting — we handle it all from our nearby Colorado Springs base.",
    neighborhoods: ["Security", "Widefield", "Stratmoor"],
    landmarks: ["Widefield Community Park", "Fountain Creek"],
    nearbyIds: ["fountain", "colorado-springs", "cimarron-hills"],
    metaTitle: "Roofing & Home Services in Security-Widefield, CO | The Red Roofer",
    metaDescription: "The Red Roofer serves Security-Widefield, CO with roofing, gutter, and handyman services. Call +1 719-602-6758 for a free quote!"
  },
  {
    id: "cimarron-hills",
    name: "Cimarron Hills",
    slug: "cimarron-hills",
    description: "We serve Cimarron Hills with full roofing, handyman, and gutter services. From Springs Ranch to the Powers corridor, we're just a short drive away.",
    content: "Cimarron Hills sits on the east side of Colorado Springs along the busy Powers corridor, and we serve homeowners here regularly. The neighborhoods around Springs Ranch and Claremont Ranch are full of homes that take the brunt of the hailstorms that sweep across the eastern part of the city. The Red Roofer provides fast, reliable service for roof repairs, inspections, gutter cleaning, exterior painting, and a full range of handyman work. We're minutes away, which means quick response times after a storm.",
    neighborhoods: ["Springs Ranch", "Claremont Ranch"],
    landmarks: ["Powers Corridor", "Cimarron Hills Park"],
    nearbyIds: ["colorado-springs", "falcon", "security-widefield"],
    metaTitle: "Roofing & Home Services in Cimarron Hills, CO | The Red Roofer",
    metaDescription: "The Red Roofer serves Cimarron Hills, CO with roofing, gutter, and handyman services. Call +1 719-602-6758 for a free quote!"
  },
  {
    id: "falcon",
    name: "Falcon",
    slug: "falcon",
    description: "Falcon's fast growth means a lot of homes need roofing and repair work. We provide reliable service to Falcon homeowners at fair prices.",
    content: "Falcon is one of the fastest-growing areas northeast of Colorado Springs, and that growth means homeowners need reliable contractors they can trust. The Red Roofer serves Falcon and the Meridian Ranch and Woodmen Hills communities with the same quality roofing, gutter, and handyman services we provide in our home base of Colorado Springs. Out on the plains, Falcon homes catch heavy hail and high winds, so roof inspections and storm damage repairs are a regular need. We're a short drive away, which means fast response times.",
    neighborhoods: ["Meridian Ranch", "Woodmen Hills", "Latigo"],
    landmarks: ["Falcon Regional Park", "Highway 24 Corridor"],
    nearbyIds: ["colorado-springs", "peyton", "black-forest", "cimarron-hills"],
    metaTitle: "Roofing & Home Services in Falcon, CO | The Red Roofer",
    metaDescription: "The Red Roofer serves Falcon, CO with roofing, gutter, and handyman services. Call +1 719-602-6758 for a free quote!"
  },
  {
    id: "manitou-springs",
    name: "Manitou Springs",
    slug: "manitou-springs",
    description: "From the historic district to the homes tucked into the foothills, Manitou Springs homeowners rely on The Red Roofer for professional roofing and home repair.",
    content: "Manitou Springs sits right at the base of Pikes Peak, just west of Colorado Springs, and its charm comes from its historic homes and foothill setting. Those older homes and the steep, wooded terrain bring their own challenges — aging roofs, tricky access, moisture, and snow that lingers. The Red Roofer serves Manitou Springs homeowners with roofing, gutter, painting, and handyman services. We provide honest assessments, fair pricing, and quality work, and we're just minutes away from our Colorado Springs base.",
    neighborhoods: ["Manitou Springs Historic District", "Crystal Hills"],
    landmarks: ["Manitou Incline", "Garden of the Gods", "Pikes Peak Cog Railway"],
    nearbyIds: ["colorado-springs", "woodland-park"],
    metaTitle: "Roofing & Home Services in Manitou Springs, CO | The Red Roofer",
    metaDescription: "The Red Roofer serves Manitou Springs, CO with roofing, gutter, and handyman services. Call +1 719-602-6758 for a free quote!"
  },
  {
    id: "woodland-park",
    name: "Woodland Park",
    slug: "woodland-park",
    description: "We serve Woodland Park and the surrounding mountain communities with honest, dependable roofing and handyman services.",
    content: "Woodland Park sits up in the mountains west of Colorado Springs, about 8,500 feet above sea level, and homes here face real weather — heavy snow loads, intense UV exposure, freeze-thaw cycles, and wildfire risk. Many homeowners up here struggle to find reliable contractors willing to make the drive. The Red Roofer serves Woodland Park from our Colorado Springs base, and we're happy to make the trip. Roof repairs, snow and ice damage, gutter work, exterior painting, and general handyman services are all part of what we do for Woodland Park homeowners.",
    neighborhoods: ["Tamarac", "Sunnywood", "Paradise Estates"],
    landmarks: ["Pikes Peak", "Rampart Range", "Rampart Reservoir"],
    nearbyIds: ["manitou-springs", "colorado-springs", "monument"],
    metaTitle: "Roofing & Home Services in Woodland Park, CO | The Red Roofer",
    metaDescription: "The Red Roofer serves Woodland Park, CO with roofing, gutter, and handyman services. Call +1 719-602-6758 for a free quote!"
  },
  {
    id: "peyton",
    name: "Peyton",
    slug: "peyton",
    description: "Peyton homeowners can count on The Red Roofer for roofing repairs, gutter cleaning, and general home maintenance across the eastern plains.",
    content: "Peyton is a rural community on the eastern plains of El Paso County, where homes are more spread out and many properties sit on acreage. Out here, the open plains mean homes catch the full force of hail and wind with nothing to slow them down. The Red Roofer serves Peyton homeowners with roofing, gutter, painting, and handyman services. From roof repairs after storms to gutter cleaning and handyman projects, we bring reliable, professional service to Peyton and we're happy to make the drive from Colorado Springs.",
    neighborhoods: [],
    landmarks: ["Highway 24 Corridor", "Peyton Pines"],
    nearbyIds: ["falcon", "black-forest", "colorado-springs", "calhan"],
    metaTitle: "Roofing & Home Services in Peyton, CO | The Red Roofer",
    metaDescription: "The Red Roofer serves Peyton, CO with roofing, gutter, and handyman services. Call +1 719-602-6758 for a free quote!"
  },
  {
    id: "black-forest",
    name: "Black Forest",
    slug: "black-forest",
    description: "Black Forest homeowners trust The Red Roofer for roofing, gutter, and home repair services that hold up to mountain weather and wildfire risk.",
    content: "Black Forest is a wooded community north of Colorado Springs, known for its tall pines and large lots. The dense tree cover means gutters fill with needles fast, branches fall on roofs, and homeowners stay especially mindful of wildfire risk after the 2013 fire. The Red Roofer serves Black Forest with roofing, gutter cleaning, painting, and handyman services. We clear gutters, repair storm and hail damage, and help keep roofs and exteriors in good shape against the heavy snow and intense sun at this elevation. We're nearby in Colorado Springs and serve Black Forest regularly.",
    neighborhoods: ["Cathedral Pines", "Walden", "High Forest Ranch"],
    landmarks: ["Black Forest Regional Park", "Black Forest Section 16"],
    nearbyIds: ["colorado-springs", "monument", "falcon", "peyton"],
    metaTitle: "Roofing & Home Services in Black Forest, CO | The Red Roofer",
    metaDescription: "The Red Roofer serves Black Forest, CO with roofing, gutter, and handyman services. Call +1 719-602-6758 for a free quote!"
  },
  {
    id: "calhan",
    name: "Calhan",
    slug: "calhan",
    description: "We serve Calhan and the surrounding eastern plains with honest, dependable roofing and handyman services for rural homeowners.",
    content: "Calhan is a small town far out on the eastern plains of El Paso County. Homes here are spread out across open country, and many homeowners struggle to find contractors willing to drive out. The Red Roofer serves Calhan from our Colorado Springs base, and we're glad to make the trip. The exposed plains mean homes catch heavy hail and relentless wind, so roof repairs and storm damage work are common. Roofing, gutter cleaning, exterior painting, and general handyman work are all services we provide to Calhan homeowners.",
    neighborhoods: [],
    landmarks: ["Paint Mines Interpretive Park", "Highway 24 Corridor"],
    nearbyIds: ["peyton", "falcon", "colorado-springs"],
    metaTitle: "Roofing & Home Services in Calhan, CO | The Red Roofer",
    metaDescription: "The Red Roofer serves Calhan, CO with roofing, gutter, and handyman services. Call +1 719-602-6758 for a free quote!"
  },
  {
    id: "el-paso-county",
    name: "El Paso County",
    slug: "el-paso-county",
    description: "We serve homeowners across El Paso County — from the city to the smaller towns and unincorporated areas. Wherever you are in the county, we can help.",
    content: "The Red Roofer serves homeowners across all of El Paso County. From Colorado Springs and its suburbs to the smaller towns and unincorporated areas out on the plains, wherever you are in the county, we can help with roofing, gutter, painting, and handyman services. Our central Colorado Springs base puts us right in the heart of El Paso County, so we can reach most locations quickly. With the Front Range's frequent hail, heavy snow, and intense high-altitude sun, every home in the county deserves quality maintenance and repairs, and we're here to provide it.",
    neighborhoods: [],
    landmarks: ["Pikes Peak", "Garden of the Gods", "El Paso County Courthouse"],
    nearbyIds: ["colorado-springs", "fountain", "falcon", "monument", "peyton"],
    metaTitle: "Roofing & Home Services in El Paso County, CO | The Red Roofer",
    metaDescription: "The Red Roofer serves all of El Paso County, CO with roofing, gutter, and handyman services. Call +1 719-602-6758 for a free quote!"
  }
];

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(l => l.slug === slug);
};
