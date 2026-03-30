export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  content: string;
  parentCategoryIds: string[];
  metaTitle: string;
  metaDescription: string;
  commonIssues: string[];
  benefits: string[];
  isCritical?: boolean;
}

export const services: Service[] = [
  {
    id: "exterior-painting",
    name: "Exterior Painting",
    slug: "exterior-painting",
    description: "Professional exterior painting services for homes in Little Elm, TX. We prep, prime, and paint to protect your home from the North Texas elements.",
    content: "The Texas sun is brutal on paint. After a few years, your home's exterior starts to fade, peel, and crack — especially on south-facing walls. We see this all the time in Little Elm neighborhoods like Paloma Creek and Union Park. A fresh coat of paint does more than make your house look good. It protects the wood, siding, and trim from moisture, UV damage, and insects. We handle all the prep work — scraping, sanding, priming — so the new paint actually sticks and lasts. We use quality paints rated for Texas heat. No shortcuts. Your home's exterior is the first impression people get, and after a brutal summer or damage from a hail storm, it needs professional care. We've painted hundreds of homes across Little Elm, Denton County, and the DFW area. Whether it's a small refresh or a complete exterior overhaul, we deliver clean lines, even coverage, and a finish that lasts.",
    parentCategoryIds: ["handyman", "contractor", "general-contractor"],
    metaTitle: "Exterior Painting Little Elm, TX | The Red Roofer",
    metaDescription: "Exterior painting in Little Elm, TX. The Red Roofer preps, primes, and paints your home to last. Call +1 940-260-3197 for a free painting estimate!",
    commonIssues: ["Peeling paint from sun exposure", "Faded siding from UV damage", "Wood rot under old paint", "Cracking around window frames"],
    benefits: ["Quality paints rated for Texas heat", "Full surface prep included", "Protects against moisture and UV", "Boosts curb appeal and home value"]
  },
  {
    id: "fan-installation",
    name: "Fan Installation",
    slug: "fan-installation",
    description: "Ceiling fan installation for homes in Little Elm, TX. We install, replace, and wire ceiling fans safely and quickly.",
    content: "A ceiling fan makes a huge difference in a Texas home. It helps circulate air, takes pressure off your AC, and can lower your energy bill. If you've got a fan that wobbles, a light kit that stopped working, or you just want a new fan in a room that doesn't have one — we can help. We install ceiling fans in homes all over Little Elm, from new builds in Union Park to older homes near Lake Lewisville. We make sure the mounting is solid, the wiring is safe, and the fan runs smooth. Most installs take about an hour. Beyond the installation itself, we handle all the electrical work to code, ensure proper balance so there's no wobbling or noise, and leave everything clean. If you have an existing fan that needs replacing, we'll remove the old one, handle any repairs to the ceiling box, and install your new fan with the same precision. Many homeowners don't realize how much a ceiling fan improves comfort and energy efficiency — it's one of the simplest upgrades you can make.",
    parentCategoryIds: ["handyman", "contractor", "general-contractor"],
    metaTitle: "Fan Installation Little Elm, TX | The Red Roofer",
    metaDescription: "Ceiling fan installation in Little Elm, TX. The Red Roofer installs and replaces fans safely. Call +1 940-260-3197 to schedule your install!",
    commonIssues: ["Wobbly or noisy ceiling fan", "No fan in room that needs one", "Outdated fan with no remote", "Light kit not working"],
    benefits: ["Safe, secure mounting", "Clean wiring with no exposed cables", "Most installs done in under an hour", "Lower energy bills with better airflow"]
  },
  {
    id: "furniture-assembly",
    name: "Furniture Assembly",
    slug: "furniture-assembly",
    description: "Furniture assembly services in Little Elm, TX. We put together beds, desks, shelving, and more — so you don't have to fight with the instructions.",
    content: "Nobody likes assembling furniture. The instructions never make sense, you always end up with extra screws, and it takes three times longer than the box says. We do furniture assembly for homeowners all over Little Elm and Denton County. Beds, desks, bookshelves, entertainment centers, patio furniture — you name it, we've put it together. We bring the right tools, follow the manufacturer's specs, and make sure everything is level, tight, and sturdy. Just point us to the boxes and we'll handle the rest. Whether you've just moved into a new home in Paloma Creek or Providence Village and need everything assembled, or you've got a basement full of flat-pack furniture from a home improvement project, we save you hours of frustration. We take care of all the packaging and cleanup, too — no mess left behind. Your furniture will be installed correctly and safely, so you can enjoy your space without worrying about wobbling shelves or drawers that don't close right.",
    parentCategoryIds: ["handyman", "contractor", "general-contractor"],
    metaTitle: "Furniture Assembly Little Elm, TX | The Red Roofer",
    metaDescription: "Furniture assembly in Little Elm, TX. The Red Roofer assembles beds, desks, shelves, and more. Call +1 940-260-3197 to schedule!",
    commonIssues: ["Complex furniture with confusing instructions", "Heavy items that need two people", "Wall-mounted shelves and units", "Patio furniture setup"],
    benefits: ["Proper tools and hardware included", "Level, tight, and sturdy assembly", "Wall anchoring for safety", "All packaging cleaned up"]
  },
  {
    id: "general-repairs",
    name: "General Repairs",
    slug: "general-repairs",
    description: "General home repairs in Little Elm, TX. From drywall patches to door fixes, The Red Roofer handles the small stuff so you don't have to.",
    content: "Every home has a list of small things that need fixing. A door that won't close right. A hole in the drywall. A leaky faucet. A broken towel bar. These little things add up, and most people don't have the time or tools to deal with them. That's what we're here for. We do general home repairs for families across Little Elm, Paloma Creek, Providence Village, and the surrounding area. No job is too small. If it's broken, we'll fix it. If it's loose, we'll tighten it. Simple as that. We bring a full toolbox and the expertise to handle common household problems quickly. Squeaky doors, stuck windows, loose cabinet handles, caulking around tubs and sinks, weatherstripping that's come loose — these are all things we fix every week. Most repairs can be done the same day, and we'll clean up after ourselves. It's those little fixes that keep a home comfortable and functioning properly, and we take pride in being the contractor you can call for whatever needs attention.",
    parentCategoryIds: ["handyman", "contractor"],
    metaTitle: "General Repairs Little Elm, TX | The Red Roofer",
    metaDescription: "General home repairs in Little Elm, TX. The Red Roofer fixes drywall, doors, faucets, and more. Call +1 940-260-3197 for fast service!",
    commonIssues: ["Drywall holes and cracks", "Doors that stick or won't latch", "Loose handles and hardware", "Minor plumbing fixes"],
    benefits: ["No job too small", "Same-week appointments available", "Fair, upfront pricing", "Experienced with all types of home repairs"]
  },
  {
    id: "gutter-cleaning",
    name: "Gutter Cleaning",
    slug: "gutter-cleaning",
    description: "Gutter cleaning services in Little Elm, TX. We remove debris, flush downspouts, and check for damage to keep your gutters working right.",
    content: "Gutters clog up fast in North Texas. Between the oak leaves in fall, the pollen in spring, and the storm debris year-round, your gutters fill up quicker than you'd think. When they're clogged, rainwater has nowhere to go. It overflows, runs down your walls, and pools around your foundation. We've seen this cause real damage in Little Elm homes — especially around Lake Lewisville and Paloma Creek where the trees are thick. We climb up, clear everything out by hand, flush the downspouts, and check for any loose brackets or damage. Takes about an hour for most homes. Easy, affordable, and it prevents expensive water damage. Regular gutter cleaning is one of the simplest ways to protect your roof, siding, and foundation. Most homes need cleaning twice a year — once after the fall leaf drop and again in spring after storms. We handle both, and we'll even set up a maintenance reminder so you don't have to remember. Clean gutters are happy gutters, and happy gutters mean a happy home.",
    parentCategoryIds: ["handyman", "contractor", "general-contractor"],
    metaTitle: "Professional Gutter Cleaning Little Elm, TX | The Red Roofer",
    metaDescription: "Gutter cleaning in Little Elm, TX. The Red Roofer removes debris and prevents water damage. Call +1 940-260-3197 for fast gutter cleaning!",
    commonIssues: ["Leaf and debris buildup", "Overflowing gutters during storms", "Clogged downspouts", "Sagging gutter sections"],
    benefits: ["Full hand cleaning and flushing", "Downspout inspection included", "Damage check at no extra cost", "Prevents foundation and roof damage"],
    isCritical: true
  },
  {
    id: "home-maintenance-repairs",
    name: "Home Maintenance & Repairs",
    slug: "home-maintenance-repairs",
    description: "Home maintenance and repair services in Little Elm, TX. The Red Roofer keeps your home in top shape with regular upkeep and quick fixes.",
    content: "Keeping a home in good shape takes consistent work. Most people fall behind — not because they don't care, but because life gets busy. That's where we step in. We offer home maintenance and repair services for homeowners throughout Little Elm, Union Park, and Providence Village. Think of us as your go-to person for everything around the house. Seasonal checkups, minor repairs, preventive maintenance — whatever keeps your home running smooth. Texas weather doesn't go easy on houses. The heat expands and contracts materials. Storms loosen things. Humidity causes mold and rot. Regular maintenance catches small problems before they turn into big, expensive ones. We can handle roof inspections after storms, check your gutters and downspouts, inspect exterior caulking and weatherstripping, check for water intrusion, and handle any repairs we find. Many of our customers set up spring and fall maintenance visits — it's way cheaper to prevent problems than to fix them after they've caused damage. If you're selling your home, we can do a pre-sale inspection and fix any issues that might come up during the buyer's inspection.",
    parentCategoryIds: ["handyman"],
    metaTitle: "Home Maintenance Little Elm, TX | The Red Roofer",
    metaDescription: "Home maintenance and repairs in Little Elm, TX. The Red Roofer keeps your home in shape year-round. Call +1 940-260-3197 for a free quote!",
    commonIssues: ["Seasonal wear and tear", "Caulking and weatherstripping failure", "Exterior trim damage", "Pre-sale home prep needs"],
    benefits: ["Preventive care saves money long-term", "One call covers multiple small jobs", "Seasonal maintenance packages available", "Trusted by Little Elm families"]
  },
  {
    id: "interior-painting",
    name: "Interior Painting",
    slug: "interior-painting",
    description: "Interior painting services in Little Elm, TX. The Red Roofer delivers clean, professional paint jobs for any room in your home.",
    content: "A fresh coat of paint changes everything. It makes a room feel bigger, brighter, and cleaner. Whether you're prepping your Little Elm home for sale, updating a kid's bedroom, or just tired of looking at the same beige walls — we can help. We do clean, professional interior painting for homes across Little Elm, Paloma Creek, Union Park, and Providence Village. We tape, cover your floors and furniture, and leave crisp, even lines. No splatters. No mess. Just a room that looks brand new when we're done. We also offer color consultation if you're stuck on what shade will work best in your space. Some colors feel warm and cozy, while others are bright and energizing. We've done enough interior painting to know what works and what doesn't. We use quality paints that resist staining and fading, so your walls look good for years. Whether it's a single accent wall or every room in the house, we bring the same professionalism and attention to detail. A fresh paint job is one of the quickest, most affordable ways to refresh your home's interior.",
    parentCategoryIds: ["handyman"],
    metaTitle: "Interior Painting Little Elm, TX | The Red Roofer",
    metaDescription: "Interior painting in Little Elm, TX. The Red Roofer delivers clean, professional results. Call +1 940-260-3197 for a free painting estimate!",
    commonIssues: ["Scuffed and marked walls", "Outdated paint colors", "Water stain cover-ups", "Accent wall requests"],
    benefits: ["Full prep and protection of floors and furniture", "Clean, crisp lines every time", "Low-VOC paint options available", "Fast turnaround for most rooms"]
  },
  {
    id: "roof-repair",
    name: "Roof Repair",
    slug: "roof-repair",
    description: "Professional roof repair in Little Elm, TX. The Red Roofer fixes leaks, storm damage, and worn shingles fast to protect your home.",
    content: "When your roof has a problem, you need it fixed — not next week, not next month, now. Water doesn't wait. A small leak turns into a big one fast, especially during spring storm season in Little Elm. We repair roofs all over Little Elm, from the homes along Lake Lewisville to the newer builds in Union Park and Paloma Creek. Shingle damage from hail, flashing leaks around chimneys and vents, soft spots from moisture — we've seen it all and we fix it all. We do a thorough inspection first, so you know exactly what needs fixing. No surprises, no upselling. Just honest work at a fair price. If your ceiling is stained or you hear dripping when it rains, we'll climb up and figure out exactly where the water is coming from. Sometimes the leak is traveling along a rafter and showing up in a different spot than where it enters. We find the source, make the repair properly, and verify that it holds before we leave. Many roof leaks are covered by insurance if they're from storm damage, and we'll help document the damage and work with your adjuster to make sure you're covered.",
    parentCategoryIds: ["handyman", "contractor", "general-contractor"],
    metaTitle: "Roof Repair Little Elm, TX | The Red Roofer",
    metaDescription: "Roof repair in Little Elm, TX. The Red Roofer fixes leaks, storm damage, and shingle issues fast. Call +1 940-260-3197 for a free inspection!",
    commonIssues: ["Missing or damaged shingles", "Leaks around vents and chimneys", "Hail and wind damage", "Sagging or soft spots on the roof"],
    benefits: ["Fast response for emergency repairs", "Thorough inspection before any work", "Quality materials that last", "Honest pricing with no upselling"],
    isCritical: true
  },
  {
    id: "tv-mounting",
    name: "TV Mounting",
    slug: "tv-mounting",
    description: "TV mounting service in Little Elm, TX. We mount your TV on the wall, hide the cables, and make sure it's level and secure.",
    content: "A wall-mounted TV looks clean, saves space, and keeps your screen at the right height. But getting it right takes the right tools and a little know-how. If you hit a stud wrong or use the wrong anchors, that TV is coming down — and that's an expensive mistake. We mount TVs for homeowners all over Little Elm and Denton County. We find the studs, use heavy-duty mounts, run the cables through the wall when possible, and make sure everything is level. Whether it's a 55-inch in the living room or a 75-inch above the fireplace, we've got you covered. We also handle the cable management — no ugly wires hanging down the wall. We can run cables inside the wall, through conduit, or hide them behind a trim ring so everything looks professional. Your TV will be securely mounted and the installation will look like it was done by a professional, because it was. We work with all VESA standard mounts and all TV sizes and brands.",
    parentCategoryIds: ["handyman", "contractor", "general-contractor"],
    metaTitle: "TV Mounting Little Elm, TX | The Red Roofer",
    metaDescription: "TV mounting in Little Elm, TX. The Red Roofer mounts TVs securely with hidden cables. Call +1 940-260-3197 to schedule your TV mount!",
    commonIssues: ["TV sitting on a stand taking up space", "Cables hanging loose behind the TV", "Crooked or unstable mount", "Need mount above fireplace"],
    benefits: ["Secure stud-mounted installation", "Cable management and concealment", "Level and centered every time", "Works with all TV sizes and brands"]
  },
  {
    id: "landscaping",
    name: "Landscaping",
    slug: "landscaping",
    description: "Landscaping services in Little Elm, TX. The Red Roofer helps homeowners improve their yards with planting, mulching, and outdoor cleanup.",
    content: "A good-looking yard makes your whole property feel different. It's the first thing people see, and in Little Elm neighborhoods like Paloma Creek and Union Park, curb appeal matters. We help homeowners with basic to mid-level landscaping work — planting, mulching, bed cleanup, shrub trimming, and general yard improvements. We know what grows well in North Texas and what doesn't survive the summer heat. No point planting something that'll be dead by August. We pick the right plants for your soil and sun exposure, lay down proper mulch, and leave your yard looking better than we found it. If you're selling your home, good landscaping can add real value and help it sell faster. If you're staying put, a well-maintained yard is a great place to spend time with family. We can clean up overgrown beds, remove dead shrubs, plant new beds with shade-loving plants under trees, add mulch for a finished look, and trim back overgrown foundation plantings. Many of our landscaping clients ask us back every spring to freshen up their beds and add seasonal color.",
    parentCategoryIds: ["handyman"],
    metaTitle: "Landscaping Little Elm, TX | The Red Roofer",
    metaDescription: "Landscaping in Little Elm, TX. The Red Roofer offers planting, mulching, and yard cleanup. Call +1 940-260-3197 for a free landscaping quote!",
    commonIssues: ["Overgrown beds and shrubs", "Dead plants from summer heat", "Bare spots in the yard", "Mulch that needs refreshing"],
    benefits: ["Plants suited for North Texas climate", "Clean, professional bed edges", "Mulching and soil prep included", "Improves curb appeal and property value"]
  },
  {
    id: "roof-installation",
    name: "Roof Installation",
    slug: "roof-installation",
    description: "Roof installation in Little Elm, TX. The Red Roofer installs new roofs with quality materials built to handle North Texas storms.",
    content: "If your roof is past its prime — 20+ years old, multiple layers of patches, or just plain worn out — it might be time for a full replacement. We install new roofs for homeowners across Little Elm, Union Park, Paloma Creek, and the surrounding DFW area. We use quality shingles rated for the high winds and hail we get in North Texas. We tear off the old roof, inspect the decking, replace any damaged boards, and install the new system from scratch. Underlayment, flashing, ridge vents, drip edge — the whole thing done right. A new roof protects your home for 25-30 years. It's a big investment, and we treat it that way. Before we start, we give you a detailed estimate and explain every step. We answer questions. We show you material options so you understand what you're getting. During the installation, we work methodically — no cutting corners. We nail every shingle according to manufacturer specs, seal every flashing joint, and make sure every vent is properly installed. When we're done, we clean up every nail, every shingle scrap, and every piece of debris. Your new roof will be something you can trust for decades to come.",
    parentCategoryIds: ["contractor", "general-contractor"],
    metaTitle: "Roof Installation Little Elm, TX | The Red Roofer",
    metaDescription: "Roof installation in Little Elm, TX. The Red Roofer installs quality roofs built for Texas storms. Call +1 940-260-3197 for a free estimate!",
    commonIssues: ["Aging roof past 20 years", "Multiple layers of old shingles", "Extensive storm damage", "Failed inspection for home sale"],
    benefits: ["Full tear-off and deck inspection", "Quality shingles rated for hail and wind", "All flashing and ventilation included", "25-30 year material warranty"],
    isCritical: true
  },
  {
    id: "roof-inspection",
    name: "Roof Inspection",
    slug: "roof-inspection",
    description: "Roof inspection services in Little Elm, TX. The Red Roofer checks your roof for damage, wear, and potential problems before they get worse.",
    content: "You can't fix what you can't see. And most roof problems start small — a cracked shingle, a gap in the flashing, a soft spot you'd never notice from the ground. That's why regular roof inspections matter. We inspect roofs for homeowners all over Little Elm, from the established neighborhoods near Little Elm Beach to the newer developments around Union Park. We check the shingles, flashing, vents, gutters, and decking. We look for hail damage, wind damage, and normal wear. After we're done, we give you a straight answer about what needs attention — and what can wait. No pressure. Just the facts. If you're buying a home, a professional roof inspection will show you exactly what you're getting into. If you own your home, a yearly inspection after winter and another after spring storm season keeps problems small. We document everything with photos so you have a record. If insurance or a home sale requires proof that the roof is in good condition, we provide that documentation. Many roof problems only show up after an inspection — small things that are cheap to fix now but would be expensive later.",
    parentCategoryIds: [],
    metaTitle: "Roof Inspection Little Elm, TX | The Red Roofer",
    metaDescription: "Roof inspection in Little Elm, TX. The Red Roofer checks for damage and wear so you know where you stand. Call +1 940-260-3197 for a free inspection!",
    commonIssues: ["Unknown roof age or condition", "Post-storm damage assessment", "Pre-purchase home inspection", "Insurance claim documentation"],
    benefits: ["Thorough top-to-bottom inspection", "Honest, no-pressure report", "Photo documentation provided", "Catches small issues before they grow"],
    isCritical: true
  },
  {
    id: "gutter-repairs",
    name: "Gutter Repairs",
    slug: "gutter-repairs",
    description: "Gutter repair services in Little Elm, TX. The Red Roofer fixes leaks, sagging sections, and damaged gutters to keep water flowing away from your home.",
    content: "Gutters take a beating in North Texas. High winds pull them loose. Ice expands the seams. Debris causes them to sag under the weight. When your gutters aren't working right, water goes where it shouldn't — into your fascia, down your walls, and around your foundation. We repair gutters for homeowners across Little Elm, Paloma Creek, and Providence Village. We resecure loose sections, patch leaks, replace damaged hangers, and realign downspouts. If a section is too far gone, we replace it. Simple, affordable, and way cheaper than fixing the water damage that comes from ignoring it. If you notice water overflowing from your gutters during rain, or if you see gaps between the gutter and your fascia, those are signs that repairs are needed. The longer you wait, the more damage happens — water seeping into your soffit, your fascia boards rotting, and eventual damage to your foundation. We can usually fix gutter problems the same day. We bring the right tools and materials, and we work quickly and efficiently. After the repair, your gutters will be back to doing what they're supposed to do — directing water away from your home.",
    parentCategoryIds: [],
    metaTitle: "Gutter Repairs Little Elm, TX | The Red Roofer",
    metaDescription: "Gutter repairs in Little Elm, TX. The Red Roofer fixes leaks, sagging, and damage fast. Call +1 940-260-3197 for a free gutter repair estimate!",
    commonIssues: ["Sagging or pulling away from fascia", "Leaking seams and joints", "Damaged or missing hangers", "Misaligned downspouts"],
    benefits: ["Fast repair turnaround", "Prevents costly water damage", "All hardware and materials included", "Full gutter system check with every repair"],
    isCritical: true
  },
  {
    id: "roof-damage-repair",
    name: "Roof Damage Repair",
    slug: "roof-damage-repair",
    description: "Roof damage repair in Little Elm, TX. The Red Roofer restores your roof after hail, storms, falling debris, and general wear and tear.",
    content: "Roof damage doesn't always come from one big storm. Sometimes it's years of sun, heat, and small weather events that add up. Either way, when your roof is damaged, you need someone who knows what they're doing. We repair all types of roof damage for homeowners in Little Elm, Union Park, Paloma Creek, and the surrounding area. Hail dents in the shingles, lifted edges from wind, cracked tiles, punctures from fallen branches — we handle it all. We assess the full extent of the damage first. Sometimes what looks like one bad spot is actually a bigger issue underneath. We'll give you the honest picture and fix what needs fixing. After a hail storm or severe wind event, it's important to get a professional inspection quickly. Insurance companies want to see the damage documented, and the longer you wait, the more additional damage can occur (water getting in after the initial damage). We provide photo documentation for insurance claims, and we've worked with dozens of adjusters — we know what they need to see and how they evaluate damage. If the damage is extensive, a full roof replacement might make more sense than piecemeal repairs.",
    parentCategoryIds: [],
    metaTitle: "Roof Damage Repair Little Elm, TX | The Red Roofer",
    metaDescription: "Roof damage repair in Little Elm, TX. The Red Roofer fixes hail, wind, and storm damage fast. Call +1 940-260-3197 for a free damage assessment!",
    commonIssues: ["Hail dents and bruising on shingles", "Wind-lifted shingle edges", "Punctures from fallen branches", "Accumulated wear from UV exposure"],
    benefits: ["Full damage assessment before repair", "Works with insurance claims", "Quality materials matched to your roof", "Fast response for urgent damage"],
    isCritical: true
  },
  {
    id: "storm-wind-damage-repair",
    name: "Roof Repair for Storm & Wind Damage",
    slug: "storm-wind-damage-repair",
    description: "Storm and wind damage roof repair in Little Elm, TX. The Red Roofer responds fast after severe weather to protect your home from further damage.",
    content: "When a big storm rolls through Little Elm — and they do, especially in spring — the calls start coming in. Missing shingles. Leaks in the ceiling. Branches through the roof. We respond fast to storm and wind damage because we know every hour counts. Water getting into your home after a storm causes mold, rot, and structural problems that get worse by the day. We serve homeowners across Little Elm, Paloma Creek, Lake Lewisville, and Providence Village. After a storm, we do a thorough inspection, document everything for your insurance, and get the repairs started as soon as possible. We've helped dozens of families through the claims process — we know what the insurance companies need to see. If your roof is heavily damaged, we can provide emergency tarping to prevent additional water damage while you wait for the insurance adjuster to assess the damage. We'll communicate directly with your insurance company and provide all the documentation they need. Many homeowners don't realize that hail and wind damage is often covered by homeowner's insurance, even with a deductible. Let us help you navigate the process and get your roof restored properly.",
    parentCategoryIds: [],
    metaTitle: "Storm Damage Roof Repair Little Elm, TX | Red Roofer",
    metaDescription: "Storm and wind damage roof repair in Little Elm, TX. The Red Roofer responds fast after severe weather. Call +1 940-260-3197 for emergency help!",
    commonIssues: ["Missing shingles after high winds", "Leaks appearing after storms", "Tree branch damage to roof", "Hail damage across large areas"],
    benefits: ["Fast emergency response", "Insurance claim documentation", "Tarping and temporary protection available", "Full repair or replacement as needed"],
    isCritical: true
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug);
};

export const getCriticalServices = (): Service[] => {
  const priority = ["roof-repair", "roof-installation", "roof-inspection"];
  return services
    .filter(s => s.isCritical)
    .sort((a, b) => {
      const ai = priority.indexOf(a.id);
      const bi = priority.indexOf(b.id);
      if (ai !== -1 && bi !== -1) return ai - bi;
      if (ai !== -1) return -1;
      if (bi !== -1) return 1;
      return 0;
    });
};
