/**
 * VeloCraft — Modern Bicycle Catalog & Interactive Discovery Engine
 * 10 Core Bicycle Categories with Filtering, Searching, Sorting, Detailed Views & Comparison
 */

// ==========================================================================
// 1. Comprehensive Bicycle Dataset
// ==========================================================================
const BIKES_DATA = [
  {
    id: "road-bike",
    name: "Road Bike",
    category: "speed",
    categoryLabel: "Speed & Sport",
    priceRange: "$600 – $5,500+",
    priceMin: 600,
    priceMax: 5500,
    description: "Engineered for aerodynamic efficiency, lightweight climbing, and blisteringly fast rides on smooth tarmac.",
    fullDescription: "Road bikes are built purely for paved performance. With aggressive drop handlebars that position the rider low against the wind, razor-thin slick tires that minimize rolling resistance, and stiff, lightweight frames (carbon fiber or hydroformed aluminum), these machines transform every watt of pedal power directly into raw forward velocity.",
    imageUrl: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=80",
    tags: ["Drop Bars", "Ultra-Light", "Slick Tires", "Aero Frame"],
    specs: {
      weight: "15 – 21 lbs (6.8 – 9.5 kg)",
      tires: "700c x 25–28mm high-pressure slick",
      gears: "2x11 or 2x12 speed electronic/mechanical",
      posture: "Aggressive forward aerodynamic lean",
      braking: "Hydraulic flat-mount disc brakes"
    },
    keyFeatures: [
      { bold: "Featherweight Construction", detail: "High-modulus carbon fiber or ultralight aluminum alloy chassis." },
      { bold: "Aerodynamic Drop Handlebars", detail: "Allows multiple hand positions to cut wind resistance during sprints." },
      { bold: "High-Ratio Gearing", detail: "Compact or semi-compact chainrings engineered for high cruising speeds." },
      { bold: "Narrow High-PSI Slicks", detail: "Minimal rolling resistance designed specifically for clean pavement." }
    ],
    idealTerrain: [
      { name: "Paved Highways", suitability: "Optimal (100%)", icon: "🛣️" },
      { name: "City Bike Corridors", suitability: "Great (85%)", icon: "🏙️" },
      { name: "Dirt or Gravel Trails", suitability: "Not Recommended", icon: "⚠️" }
    ],
    priceBreakdown: {
      entry: "$600 – $1,200 (Aluminum frame, Shimano Claris/Sora)",
      mid: "$1,300 – $3,200 (Carbon fork or full carbon, Shimano 105)",
      pro: "$3,500 – $10,000+ (Aero carbon, Ultegra/Dura-Ace Di2, carbon wheels)"
    },
    pros: [
      "Fastest bicycle category on smooth paved surfaces",
      "Extremely lightweight and responsive handling",
      "Multiple hand positions prevent numbness on 50+ mile rides",
      "Superior pedaling efficiency with minimal power loss"
    ],
    cons: [
      "Aggressive riding posture can strain unconditioned necks and lower backs",
      "Skinny tires are prone to pinch flats on potholes and cobblestones",
      "Virtually incapable of handling unpaved dirt, mud, or loose gravel",
      "Typically lacks mounts for heavy cargo racks or child seats"
    ]
  },
  {
    id: "mountain-bike",
    name: "Mountain Bike (MTB)",
    category: "off-road",
    categoryLabel: "Off-Road & Trail",
    priceRange: "$500 – $6,500+",
    priceMin: 500,
    priceMax: 6500,
    description: "Built tough with wide knobby tires and robust suspension to master rugged dirt singletracks, roots, and rock gardens.",
    fullDescription: "Mountain bikes are heavy-duty off-road explorers designed to tame backcountry nature. Featuring wide, aggressive knobby tires for loose dirt grip, wide flat handlebars for maximum steering leverage, and sophisticated air suspension (hardtail front fork or full front/rear shocks), they soak up punishing impacts on technical trails.",
    imageUrl: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1000&q=80",
    tags: ["Front/Full Suspension", "Knobby 2.4\" Tires", "Hydraulic Discs", "Dropper Post"],
    specs: {
      weight: "26 – 33 lbs (11.8 – 15 kg)",
      tires: "29\" or 27.5\" x 2.3–2.6\" knobby tread",
      gears: "1x12 wide-range drivetrain (10-52T cassette)",
      posture: "Upright, dynamic athletic control",
      braking: "4-piston hydraulic disc brakes with 180-203mm rotors"
    },
    keyFeatures: [
      { bold: "Heavy-Duty Suspension", detail: "100mm to 170mm travel air shocks damp rock strikes and drops." },
      { bold: "High-Traction Knobby Tires", detail: "Aggressive side lugs bite into mud, loose gravel, and slippery roots." },
      { bold: "Climbing-Optimized 1x12 Gearing", detail: "Massive rear cogs make crawling up 20% alpine inclines possible." },
      { bold: "Dropper Seatpost Support", detail: "Instantly lower your saddle on descents for body clearance." }
    ],
    idealTerrain: [
      { name: "Singletrack Trails", suitability: "Optimal (100%)", icon: "🚵‍♂️" },
      { name: "Rocky Descents & Roots", suitability: "Superb (95%)", icon: "⛰️" },
      { name: "Flat City Pavement", suitability: "Sluggish (50%)", icon: "🐌" }
    ],
    priceBreakdown: {
      entry: "$500 – $950 (Hardtail with coil spring fork, mechanical discs)",
      mid: "$1,200 – $3,000 (Air fork hardtail or entry full-suspension, hydraulic brakes)",
      pro: "$3,500 – $8,000+ (Full carbon enduro/trail, Fox Factory suspension, carbon rims)"
    },
    pros: [
      "Go-anywhere rugged durability that withstands brutal abuse",
      "Supreme grip and control on mud, loose gravel, and steep drops",
      "Suspension dramatically reduces joint fatigue over rough terrain",
      "Upright riding position provides broad trail visibility"
    ],
    cons: [
      "Heavier and significantly more sluggish on smooth paved roads",
      "High rolling friction makes long road commutes tiring",
      "Suspension pivots and shocks require periodic mechanical servicing",
      "Knobby tires wear down rapidly if used extensively on hot tarmac"
    ]
  },
  {
    id: "hybrid-bike",
    name: "Hybrid Bike",
    category: "city",
    categoryLabel: "City & Commute",
    priceRange: "$350 – $1,500",
    priceMin: 350,
    priceMax: 1500,
    description: "The versatile sweet spot blending road speed with mountain comfort, ideal for daily commutes, fitness, and casual parks.",
    fullDescription: "Hybrid bikes bridge the gap between road and mountain disciplines. They feature the comfortable upright seating and flat handlebars of a mountain bike paired with the lighter, faster-rolling 700c wheels of a road bike. Equipped with medium-width tires and eyelets for racks and fenders, they are the quintessential all-round daily workhorse.",
    imageUrl: "https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?auto=format&fit=crop&w=1000&q=80",
    tags: ["Upright Comfort", "Pannier Mounts", "All-Rounder", "Flat Bars"],
    specs: {
      weight: "24 – 29 lbs (10.8 – 13.2 kg)",
      tires: "700c x 32–38mm semi-slick with puncture belt",
      gears: "1x9, 2x8, or 3x8 commuter gearing",
      posture: "Relaxed upright with natural head angle",
      braking: "Mechanical or hydraulic disc brakes"
    },
    keyFeatures: [
      { bold: "Ergonomic Flat Handlebars", detail: "Promotes an upright riding posture that eliminates neck and wrist strain." },
      { bold: "Puncture-Resistant Mid-Width Tires", detail: "35mm wide tires easily handle railway tracks, curbs, and light gravel." },
      { bold: "Commuter Utility Mounts", detail: "Dedicated braze-ons for pannier racks, full-length fenders, and kickstands." },
      { bold: "Cushioned Gel Saddle", detail: "Designed for comfortable everyday riding without needing padded bib shorts." }
    ],
    idealTerrain: [
      { name: "Paved City Bike Paths", suitability: "Optimal (100%)", icon: "🏙️" },
      { name: "Packed Park Gravel", suitability: "Great (80%)", icon: "🌳" },
      { name: "Technical Downhill Trails", suitability: "Not Capable", icon: "⛔" }
    ],
    priceBreakdown: {
      entry: "$350 – $600 (Steel/Alloy frame, rim brakes, 7-speed)",
      mid: "$650 – $1,050 (Lightweight aluminum, hydraulic disc brakes, 2x9 gearing)",
      pro: "$1,100 – $1,600 (Carbon fork, internal cable routing, premium drivetrain)"
    },
    pros: [
      "Outstanding all-around versatility for commutes, errands, and fitness",
      "Very comfortable, natural upright riding posture",
      "Easy to outfit with baskets, racks, and child carriers",
      "Affordable price point and widely available replacement parts"
    ],
    cons: [
      "Jack of all trades, master of none: slower than road bikes on tarmac",
      "Lacks the suspension travel needed for gnarly mountain trails",
      "Single hand position can lead to wrist fatigue on rides over 30 miles",
      "Heavier than dedicated performance road bikes"
    ]
  },
  {
    id: "ebike",
    name: "Electric Bike (e-bike)",
    category: "electric",
    categoryLabel: "Electric Assist",
    priceRange: "$1,200 – $6,000+",
    priceMin: 1200,
    priceMax: 6000,
    description: "Equipped with a quiet battery and motor that effortlessly flattens brutal hills and extends your commuting range.",
    fullDescription: "Electric bicycles supercharge your natural pedaling efforts using an integrated lithium-ion battery and electric motor (hub-drive or mid-drive). Offering multi-level pedal assist and top speeds typically between 20 mph (Class 1 & 2) and 28 mph (Class 3), e-bikes replace car trips, eradicate headwind struggles, and make cycling accessible to everyone.",
    imageUrl: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1000&q=80",
    tags: ["250-750W Motor", "40-70 Mile Range", "Pedal Assist", "Integrated Lights"],
    specs: {
      weight: "38 – 56 lbs (17 – 25.5 kg)",
      tires: "27.5\" or 700c x 2.0–2.4\" e-bike rated tires",
      gears: "8 to 11 speed or Enviolo stepless internal hub",
      posture: "Comfortable upright or active commuter",
      braking: "Heavy-duty 4-piston hydraulic disc brakes"
    },
    keyFeatures: [
      { bold: "Intelligent Pedal Assist Sensor", detail: "Torque sensors smoothly amplify your pedal pressure up to 300%." },
      { bold: "High-Capacity Removable Battery", detail: "400Wh to 750Wh cells provide 35 to 70+ miles per single charge." },
      { bold: "Integrated Cockpit Display", detail: "Backlit screen shows real-time speed, battery level, odometer, and assist mode." },
      { bold: "Built-In Running Lights", detail: "Hardwired front headlight and rear brake light powered directly by main battery." }
    ],
    idealTerrain: [
      { name: "Hilly Urban Commutes", suitability: "Flawless (100%)", icon: "⚡" },
      { name: "Suburban Bike Paths", suitability: "Superb (95%)", icon: "🛣️" },
      { name: "Long Distance Touring", suitability: "Great with charging (85%)", icon: "🔋" }
    ],
    priceBreakdown: {
      entry: "$1,200 – $1,800 (Rear hub motor, cadence sensor, 36V battery)",
      mid: "$2,000 – $3,800 (Mid-drive Bosch/Shimano motor, torque sensor, 500Wh battery)",
      pro: "$4,000 – $8,000+ (Ultra-light stealth carbon e-bike, high-end integration)"
    },
    pros: [
      "Virtually eliminates the fatigue of steep inclines and strong headwinds",
      "Arrive at work fresh and sweat-free without needing a shower",
      "Extends cycling range for older riders or those recovering from injury",
      "Legitimate car replacement for groceries and daily urban transit"
    ],
    cons: [
      "Substantially heavier (45+ lbs), making staircases and transit racks harder",
      "Requires routine charging and eventual costly battery replacement ($500+)",
      "Higher upfront purchase price and electronic repair complexity",
      "Subject to local municipal speed and path regulations (Class 1/2/3 laws)"
    ]
  },
  {
    id: "bmx",
    name: "BMX Bike",
    category: "speed",
    categoryLabel: "Speed & Sport",
    priceRange: "$250 – $1,200",
    priceMin: 250,
    priceMax: 1200,
    description: "Compact, bulletproof bikes with 20-inch wheels built specifically for skateparks, dirt jumps, pump tracks, and street stunts.",
    fullDescription: "BMX (Bicycle Motocross) machines are built with supreme simplicity and near-indestructible strength. Featuring ultra-compact frames constructed from 4130 Chromoly steel, rigid forks, 20-inch spoked wheels, single-speed gearing, and optional gyro handlebar detanglers for 360-degree barspins, they thrive in skateparks and jump lines.",
    imageUrl: "https://images.unsplash.com/photo-1565103681498-84dc2d44933a?auto=format&fit=crop&w=1000&q=80",
    tags: ["20\" Wheels", "Chromoly Frame", "Single-Speed", "Stunt Ready"],
    specs: {
      weight: "22 – 28 lbs (10 – 12.7 kg)",
      tires: "20\" x 2.2–2.4\" high-pressure street or dirt tread",
      gears: "Single speed (25T chainring x 9T driver)",
      posture: "Standing / athletic crouching (low saddle)",
      braking: "Rear U-brake with gyro rotor or brakeless"
    },
    keyFeatures: [
      { bold: "4130 Chromoly Steel Frame", detail: "Engineered to withstand heavy drop-ins, flat landings, and grind impacts." },
      { bold: "20-Inch Heavy-Spoke Wheels", detail: "Compact diameter provides immense rotational strength and fast spin tricks." },
      { bold: "Detangler Gyro System", detail: "Enables unlimited 360-degree handlebar rotations without tangling brake cables." },
      { bold: "Grind Peg Capability", detail: "Axle-mounted metal or plastic pegs allow sliding on handrails and ledges." }
    ],
    idealTerrain: [
      { name: "Concrete Skateparks", suitability: "Optimal (100%)", icon: "🛹" },
      { name: "Dirt Jumps & Pump Tracks", suitability: "Superb (95%)", icon: "🔥" },
      { name: "Long Distance Commutes", suitability: "Uncomfortable (20%)", icon: "⚠️" }
    ],
    priceBreakdown: {
      entry: "$250 – $400 (Hi-ten steel frame, unsealed bearings, single-wall rims)",
      mid: "$450 – $750 (Full chromoly frame/fork/bars, sealed cassette hub)",
      pro: "$800 – $1,300+ (Custom aftermarket parts, titanium bolts, freecoaster hub)"
    },
    pros: [
      "Extremely durable and nearly indestructible under extreme abuse",
      "Very low maintenance with minimal moving parts and no gears to calibrate",
      "Small and lightweight, easy to fit inside car trunks and closets",
      "Unmatched agility for learning technical bike control and air tricks"
    ],
    cons: [
      "Not designed for seated distance riding; causes intense knee fatigue",
      "Single gear limits cruising speed to around 10-12 mph",
      "No suspension means hard landings transfer directly to wrists and ankles",
      "Inappropriate for commuting or carrying cargo"
    ]
  },
  {
    id: "gravel-bike",
    name: "Gravel Bike",
    category: "off-road",
    categoryLabel: "Off-Road & Trail",
    priceRange: "$900 – $4,500",
    priceMin: 900,
    priceMax: 4500,
    description: "The modern adventure champion pairing drop-bar speed with wide tire clearance for unpaved forest and gravel roads.",
    fullDescription: "Gravel bikes are the fastest-growing category in cycling because of their incredible versatility. They feature road bike-style drop handlebars with flared drops for enhanced descending control, generous frame clearances allowing 38mm to 50mm tires, relaxed endurance geometry, and numerous bolt-on mounts for bikepacking frame bags and water cages.",
    imageUrl: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=1000&q=80",
    tags: ["Flared Drop Bars", "38-45mm Tires", "Bikepacking Ready", "Disc Brakes"],
    specs: {
      weight: "18 – 23 lbs (8.2 – 10.5 kg)",
      tires: "700c x 38–45mm or 650b x 47mm tubeless",
      gears: "1x11, 1x12 or 2x11 gravel-specific (Shimano GRX / SRAM XPLR)",
      posture: "Endurance endurance lean (more upright than road)",
      braking: "Hydraulic disc brakes with 160mm rotors"
    },
    keyFeatures: [
      { bold: "Flared Ergonomic Drop Bars", detail: "Provides a wider, rock-solid grip and leverage when descending rough gravel." },
      { bold: "Massive Tire Clearance", detail: "Room for 40-50mm tubeless tires run at low PSI for cushion and traction." },
      { bold: "Multi-Mount Bikepacking Frame", detail: "Bosses for top-tube fuel bags, fork cargo cages, and extra water bottles." },
      { bold: "Endurance-Tuned Geometry", detail: "Slacker head angles and longer wheelbases keep the bike stable on loose descents." }
    ],
    idealTerrain: [
      { name: "Unpaved Gravel Roads", suitability: "Optimal (100%)", icon: "🌾" },
      { name: "Smooth Asphalt Highways", suitability: "Fast (90%)", icon: "🛣️" },
      { name: "Light Forest Singletrack", suitability: "Capable (75%)", icon: "🌲" }
    ],
    priceBreakdown: {
      entry: "$900 – $1,400 (Aluminum frame, mechanical disc brakes, Shimano Sora/GRX400)",
      mid: "$1,500 – $2,800 (Carbon fork or full carbon, Shimano GRX600/800 hydraulic)",
      pro: "$3,000 – $6,500+ (High-end carbon/titanium, wireless SRAM AXS, carbon wheels)"
    },
    pros: [
      "Supreme all-surface flexibility: transitions seamlessly from asphalt to dirt",
      "Tubeless tire compatibility virtually eliminates thorns and pinch flats",
      "Very fast on open roads compared to flat-bar mountain bikes",
      "The premier choice for multi-day bikepacking and wilderness touring"
    ],
    cons: [
      "More expensive than basic hybrids or entry road bikes",
      "Rigid fork transmits vibration on heavily washboarded roads",
      "Cannot handle large drop-offs or boulder-strewn technical downhill trails",
      "Drop handlebars feel less intuitive to beginner casual riders"
    ]
  },
  {
    id: "cruiser",
    name: "Cruiser Bike",
    category: "city",
    categoryLabel: "City & Commute",
    priceRange: "$250 – $900",
    priceMin: 250,
    priceMax: 900,
    description: "Laid-back, retro-styled bicycles engineered for effortless weekend coastal rides, boardwalks, and sunny neighborhood trips.",
    fullDescription: "Beach cruisers are the quintessential relaxation machines. With sweeping curved handlebars, extra-wide plush dual-spring saddles, balloon tires that float over sidewalk seams, and a laid-back feet-forward pedaling position, cruisers invite you to slow down and enjoy the sunshine in total comfort.",
    imageUrl: "https://images.unsplash.com/photo-1502744688674-c619d3864003?auto=format&fit=crop&w=1000&q=80",
    tags: ["Swept-Back Bars", "Spring Saddle", "Balloon Tires", "Retro Styling"],
    specs: {
      weight: "32 – 40 lbs (14.5 – 18.2 kg)",
      tires: "26\" x 2.125\" plush balloon tires",
      gears: "Single-speed or 3-speed internal gear hub",
      posture: "100% upright relaxed posture",
      braking: "Coaster brake (pedal backwards) or simple hand rim brake"
    },
    keyFeatures: [
      { bold: "Swept-Back Cruiser Handlebars", detail: "Puts grips right at hand level without requiring any leaning forward." },
      { bold: "Ultra-Wide Dual-Spring Saddle", detail: "Sofa-like cushioning that absorbs bumps on boardwalks and streets." },
      { bold: "Wide 2.125\" Balloon Tires", detail: "Provides a pillowy ride quality and floats smoothly over beach sand." },
      { bold: "Simple Coaster Brake System", detail: "Pedal backwards to stop with zero brake cables cluttering the aesthetic." }
    ],
    idealTerrain: [
      { name: "Beach Boardwalks", suitability: "Optimal (100%)", icon: "🏖️" },
      { name: "Flat Coastal Neighborhoods", suitability: "Superb (95%)", icon: "🏡" },
      { name: "Steep Hills or Mountains", suitability: "Extremely Difficult (10%)", icon: "⛰️" }
    ],
    priceBreakdown: {
      entry: "$250 – $400 (Steel frame, single speed, coaster brake)",
      mid: "$450 – $650 (Lightweight aluminum frame, 3-speed Nexus internal hub)",
      pro: "$700 – $1,200 (Handcrafted retro edition, leather saddle, basket, 7-speed)"
    },
    pros: [
      "The most comfortable upright sitting position of any bicycle style",
      "Timeless, charming retro aesthetic that turns heads",
      "Very low mechanical maintenance (especially single-speed coaster models)",
      "Gentle learning curve: anyone can hop on and pedal immediately"
    ],
    cons: [
      "Extremely heavy steel frames make carrying up apartment stairs difficult",
      "Single-speed models make climbing even moderate hills exhausting",
      "Slow top speed and inefficient power transfer for athletic fitness",
      "Coaster brakes can overheat on prolonged steep downhill descents"
    ]
  },
  {
    id: "folding-bike",
    name: "Folding Bike",
    category: "city",
    categoryLabel: "City & Commute",
    priceRange: "$400 – $2,800",
    priceMin: 400,
    priceMax: 2800,
    description: "Compact, clever engineering that folds down in under 20 seconds for seamless subway transfers, small apartments, and travel.",
    fullDescription: "Folding bikes are the ultimate urban space-savers. Designed around 16\" or 20\" wheels with quick-release central hinges and telescoping stems, they collapse into compact luggage that you can carry onto crowded commuter trains, tuck beneath your office desk, or store inside a small studio closet — completely eliminating bike theft concerns.",
    imageUrl: "https://images.unsplash.com/photo-1528629297340-d1d461b55f91?auto=format&fit=crop&w=1000&q=80",
    tags: ["20-Second Fold", "Under-Desk Storage", "Multi-Modal", "Anti-Theft"],
    specs: {
      weight: "22 – 29 lbs (10 – 13.2 kg)",
      tires: "16\" or 20\" x 1.5–1.75\" high-pressure puncture resistant",
      gears: "6 to 8 speed derailleur or 3-speed internal hub",
      posture: "Upright to moderate commuter angle",
      braking: "V-brakes or compact disc brakes"
    },
    keyFeatures: [
      { bold: "Quick-Lock Hinge Mechanism", detail: "Patented latches fold the frame in half in 15 to 30 seconds." },
      { bold: "Telescoping Stem & Seatpost", detail: "Accommodates riders from 4'11\" to 6'3\" on a single unified frame." },
      { bold: "Compact Folded Footprint", detail: "Rolls like wheeled luggage into train coaches and car trunks." },
      { bold: "Theft Prevention by Design", detail: "Never lock your bike outside overnight — simply bring it inside with you." }
    ],
    idealTerrain: [
      { name: "Urban Commute & Train Links", suitability: "Optimal (100%)", icon: "🚇" },
      { name: "Paved City Streets", suitability: "Great (85%)", icon: "🏙️" },
      { name: "Rough Trails or Cobbles", suitability: "Jarring (30%)", icon: "⚠️" }
    ],
    priceBreakdown: {
      entry: "$400 – $700 (Steel/Alloy frame, 7-speed derailleur, 28 lbs)",
      mid: "$750 – $1,400 (Lighter aluminum, quick magnetic latch, 8-speed)",
      pro: "$1,500 – $3,500 (Brompton ultra-compact fold, titanium frame parts, 24 lbs)"
    },
    pros: [
      "Solves the 'last-mile' problem: allowed on all trains, subways, and buses",
      "Virtually impossible to steal when brought inside offices and apartments",
      "Adjustable to fit multiple family members of different heights",
      "Fits easily into compact car trunks, RVs, and boat cabins"
    ],
    cons: [
      "Smaller 16-20\" wheels feel potholes and rough bumps much more sharply",
      "Hinged frame is less structurally rigid than traditional triangular frames",
      "Proprietary folding parts can be harder to replace at standard shops",
      "Lower top cruising speed compared to full-sized 700c wheels"
    ]
  },
  {
    id: "touring-bike",
    name: "Touring Bike",
    category: "city",
    categoryLabel: "City & Commute",
    priceRange: "$1,000 – $3,500",
    priceMin: 1000,
    priceMax: 3500,
    description: "Indestructible long-distance pack mules engineered to carry heavy camping panniers smoothly across entire continents.",
    fullDescription: "Touring bicycles are built for the epic trans-continental traveler. Crafted from compliant Chromoly steel or titanium with extended wheelbases for rock-solid loaded stability, they feature reinforced 36-spoke wheels, low granny gears for climbing mountain passes with 50 lbs of cargo, and mounting points for front and rear pannier racks.",
    imageUrl: "https://images.unsplash.com/photo-1474962558142-9ca83af74bb7?auto=format&fit=crop&w=1000&q=80",
    tags: ["Heavy-Duty Steel", "Front/Rear Racks", "Triple Chainset", "Long Wheelbase"],
    specs: {
      weight: "27 – 34 lbs (12.2 – 15.5 kg)",
      tires: "700c x 35–42mm or 26\" heavy puncture-armored",
      gears: "3x9 or 3x10 ultra-wide granny gear drivetrain",
      posture: "All-day endurance comfort",
      braking: "Mechanical disc or long-arm rim brakes (easy field repairs)"
    },
    keyFeatures: [
      { bold: "High-Strength Chromoly Steel Frame", detail: "Provides a smooth, shock-absorbing ride and can be welded in remote villages." },
      { bold: "Extended Chainstays & Wheelbase", detail: "Prevents your heels from striking bulky rear panniers when pedaling." },
      { bold: "36-Spoke Heavy-Duty Wheels", detail: "Built to support 250+ lbs of rider and camping gear without breaking spokes." },
      { bold: "Ultra-Wide Low Ratio Gearing", detail: "Specialized low gearing allows spinning up mountain passes fully laden." }
    ],
    idealTerrain: [
      { name: "Paved Highways & Byways", suitability: "Optimal (100%)", icon: "🛣️" },
      { name: "Packed Gravel Routes", suitability: "Great (85%)", icon: "🌾" },
      { name: "Urban Grocery Hauling", suitability: "Very Capable (85%)", icon: "🛒" }
    ],
    priceBreakdown: {
      entry: "$1,000 – $1,500 (Trek 520 / Fuji Touring, steel frame, rear rack included)",
      mid: "$1,600 – $2,400 (Surly Disc Trucker, full rack mounts, bar-end shifters)",
      pro: "$2,600 – $4,500 (Rohloff 14-speed internal oil-bath hub, Gates belt drive)"
    },
    pros: [
      "Supreme loaded stability: the bike actually handles better when packed with gear",
      "Steel frames absorb road vibration for comfortable 8-hour riding days",
      "Virtually indestructible components designed for worldwide field repairability",
      "Massive carrying capacity for tents, stoves, water, and clothing"
    ],
    cons: [
      "Heavy and sluggish to accelerate when unloaded for quick neighborhood spins",
      "Long wheelbase makes tight cornering and navigating city traffic slower",
      "Lacks the snappy, agile acceleration of dedicated lightweight road bikes",
      "Overkill for short, unloaded daily commuting"
    ]
  },
  {
    id: "fat-bike",
    name: "Fat Bike",
    category: "off-road",
    categoryLabel: "Off-Road & Trail",
    priceRange: "$700 – $3,200",
    priceMin: 700,
    priceMax: 3200,
    description: "Monster 4-to-5 inch tires running at ultra-low air pressure to float over deep snow, loose beach sand, and muddy bogs.",
    fullDescription: "Fat bikes are the unstoppable monster trucks of the cycling world. Originally developed for the frozen Alaskan Iditabike race and New Mexico desert dunes, their enormous 4\" to 5\" tires run at ultra-low pressures (as low as 5 to 8 PSI), creating a massive contact patch that floats on top of soft surfaces where all other bikes sink and stop.",
    imageUrl: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=1000&q=80",
    tags: ["4.8\" Monster Tires", "5-8 PSI Flotation", "Winter Snow Ready", "Sand Explorer"],
    specs: {
      weight: "31 – 37 lbs (14 – 16.8 kg)",
      tires: "26\" x 4.0\" – 4.8\" studdable ultra-wide tires",
      gears: "1x10, 1x11 or 1x12 wide-range drivetrain",
      posture: "Upright, commanding trail posture",
      braking: "Cold-weather DOT fluid hydraulic or mechanical disc brakes"
    },
    keyFeatures: [
      { bold: "Giant 4.0\" to 5.0\" Tires", detail: "Provides flotation over deep snow crust, dunes, and marshy bogland." },
      { bold: "Ultra-Low Pressure Riding (5-10 PSI)", detail: "The massive tire volume acts as natural suspension, absorbing rocks and logs." },
      { bold: "Cold-Weather Engineered", detail: "Mechanical disc or DOT fluid brakes that won't freeze in sub-zero winters." },
      { bold: "Extra-Wide Bottom Bracket & Hubs", detail: "197mm rear hub spacing to clear the enormous tire tread without chain rub." }
    ],
    idealTerrain: [
      { name: "Packed & Deep Winter Snow", suitability: "Unmatched (100%)", icon: "❄️" },
      { name: "Loose Beach Sand & Dunes", suitability: "Optimal (100%)", icon: "🏖️" },
      { name: "Rocky Muddy Backcountry", suitability: "Superb (90%)", icon: "🌲" }
    ],
    priceBreakdown: {
      entry: "$700 – $1,100 (Aluminum rigid frame, 4.0\" tires, mechanical discs)",
      mid: "$1,200 – $2,200 (Carbon fork or Manitou Mastodon suspension fork, 4.8\" tires)",
      pro: "$2,400 – $4,500 (Full ultralight carbon frame, carbon rims, studded winter tires)"
    },
    pros: [
      "Rides where no other bicycle can go: snow trails, coastal sand, and deep mud",
      "Tires provide remarkable natural cushion and shock absorption",
      "Turns cycling into a genuine year-round sport in snowy northern climates",
      "Provides enormous confidence and traction for riders fearful of slipping"
    ],
    cons: [
      "Substantial rolling resistance makes pedaling on dry asphalt slow and noisy",
      "Heavy wheels and tire rotating mass slow down steering responsiveness",
      "Replacement tires and tubes are expensive and bulkier to transport",
      "Wider bottom bracket stance (Q-factor) can feel unusual on hip joints"
    ]
  }
];

// ==========================================================================
// 2. Application State & Storage
// ==========================================================================
const state = {
  activeFilter: "all",
  searchQuery: "",
  sortOption: "default",
  comparedBikes: new Set(), // Set of bike IDs
  currentModalBikeId: null
};

// ==========================================================================
// 3. DOM Element References
// ==========================================================================
const elements = {
  // Navigation & Theme
  themeToggle: document.getElementById("theme-toggle"),
  mobileMenuBtn: document.getElementById("mobile-menu-btn"),
  mobileDrawer: document.getElementById("mobile-drawer"),
  navLinks: document.querySelectorAll(".nav-link, .mobile-nav-link"),
  navCompareCount: document.getElementById("nav-compare-count"),
  mobileCompareCount: document.getElementById("mobile-compare-count"),
  compareBubbleCount: document.getElementById("compare-bubble-count"),

  // Filter & Search Controls
  filterPills: document.querySelectorAll(".filter-pill"),
  searchInput: document.getElementById("bike-search-input"),
  clearSearchBtn: document.getElementById("clear-search-btn"),
  sortSelect: document.getElementById("bike-sort-select"),
  resultsCountText: document.getElementById("results-count-text"),
  resetFiltersBtn: document.getElementById("reset-filters-btn"),

  // Grid & Empty State
  bikeGrid: document.getElementById("bike-grid"),
  emptyState: document.getElementById("empty-state"),
  emptyResetBtn: document.getElementById("empty-reset-btn"),

  // Modals
  detailModal: document.getElementById("detail-modal-backdrop"),
  detailModalContent: document.getElementById("modal-content"),
  detailModalClose: document.getElementById("modal-close-btn"),

  compareModal: document.getElementById("compare-modal-backdrop"),
  compareMatrixContainer: document.getElementById("compare-matrix-container"),
  compareModalClose: document.getElementById("compare-close-btn"),
  openCompareBtn: document.getElementById("open-compare-btn"),
  launchComparisonBtn: document.getElementById("launch-comparison-btn"),
  selectedCompareChips: document.getElementById("selected-compare-chips"),

  quizModal: document.getElementById("quiz-modal-backdrop"),
  quizContainer: document.getElementById("quiz-container"),
  quizModalClose: document.getElementById("quiz-close-btn"),
  heroQuizBtn: document.getElementById("hero-quiz-btn"),
  quizCtaBtn: document.getElementById("quiz-cta-btn"),
  mobileQuizCtaBtn: document.getElementById("mobile-quiz-cta-btn"),
  footerQuizTrigger: document.getElementById("footer-quiz-trigger"),

  // Forms & Toasts
  newsletterForm: document.getElementById("newsletter-form"),
  formFeedback: document.getElementById("form-feedback"),
  toastContainer: document.getElementById("toast-container")
};

// ==========================================================================
// 4. Utility Functions
// ==========================================================================

/** Display transient toast message */
function showToast(message, type = "info") {
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let icon = "🚴";
  if (type === "success") icon = "✓";
  if (type === "warning") icon = "⚠️";

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) {
      toast.parentNode.removeChild(toast);
    }
  }, 3200);
}

/** Fallback SVG Data URL for bike images */
function getBikePlaceholderSvg(bikeName, category) {
  const bg = category === 'off-road' ? '%23f59e0b' : category === 'city' ? '%2306b6d4' : category === 'speed' ? '%23ef4444' : '%2310b981';
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect width="800" height="500" fill="%23121927"/><circle cx="400" cy="230" r="140" fill="${bg}" opacity="0.15"/><text x="50%" y="240" font-family="sans-serif" font-size="34" font-weight="bold" fill="%23f8fafc" text-anchor="middle">${bikeName}</text><text x="50%" y="280" font-family="sans-serif" font-size="18" fill="%2394a3b8" text-anchor="middle">VeloCraft Bicycle Guide</text></svg>`;
}

// ==========================================================================
// 5. Grid Rendering & Interactive Cards
// ==========================================================================

function getFilteredAndSortedBikes() {
  let list = [...BIKES_DATA];

  // 1. Category Filter
  if (state.activeFilter !== "all") {
    list = list.filter(bike => {
      if (state.activeFilter === "off-road") {
        return bike.category === "off-road";
      }
      if (state.activeFilter === "city") {
        return bike.category === "city";
      }
      if (state.activeFilter === "speed") {
        return bike.category === "speed";
      }
      if (state.activeFilter === "electric") {
        return bike.category === "electric";
      }
      return true;
    });
  }

  // 2. Search Query Filter
  if (state.searchQuery.trim() !== "") {
    const q = state.searchQuery.toLowerCase().trim();
    list = list.filter(bike => {
      const matchName = bike.name.toLowerCase().includes(q);
      const matchDesc = bike.description.toLowerCase().includes(q);
      const matchCategory = bike.categoryLabel.toLowerCase().includes(q);
      const matchTags = bike.tags.some(tag => tag.toLowerCase().includes(q));
      const matchTerrain = bike.idealTerrain.some(t => t.name.toLowerCase().includes(q));
      const matchFeatures = bike.keyFeatures.some(f => f.bold.toLowerCase().includes(q) || f.detail.toLowerCase().includes(q));
      return matchName || matchDesc || matchCategory || matchTags || matchTerrain || matchFeatures;
    });
  }

  // 3. Sorting
  if (state.sortOption === "price-asc") {
    list.sort((a, b) => a.priceMin - b.priceMin);
  } else if (state.sortOption === "price-desc") {
    list.sort((a, b) => b.priceMax - a.priceMax);
  } else if (state.sortOption === "name-asc") {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else if (state.sortOption === "name-desc") {
    list.sort((a, b) => b.name.localeCompare(a.name));
  }

  return list;
}

function renderBikeGrid() {
  const bikes = getFilteredAndSortedBikes();
  elements.bikeGrid.innerHTML = "";

  // Update counter text
  elements.resultsCountText.textContent = `Showing ${bikes.length} of ${BIKES_DATA.length} bikes`;
  
  const hasFilterActive = state.activeFilter !== "all" || state.searchQuery.trim() !== "" || state.sortOption !== "default";
  elements.resetFiltersBtn.style.display = hasFilterActive ? "inline-block" : "none";

  if (bikes.length === 0) {
    elements.emptyState.style.display = "block";
    elements.bikeGrid.style.display = "none";
    return;
  }

  elements.emptyState.style.display = "none";
  elements.bikeGrid.style.display = "grid";

  // Create cards
  bikes.forEach(bike => {
    const isCompared = state.comparedBikes.has(bike.id);
    const card = document.createElement("article");
    card.className = "bike-card";
    card.setAttribute("data-bike-id", bike.id);
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `View specifications for ${bike.name}`);

    // Fallback image handling
    const fallback = getBikePlaceholderSvg(encodeURIComponent(bike.name), bike.category);

    card.innerHTML = `
      <div class="card-media">
        <img 
          src="${bike.imageUrl}" 
          alt="${bike.name} showcase photo" 
          class="card-img" 
          loading="lazy" 
          onerror="this.onerror=null; this.src='${fallback}';"
        >
        <div class="card-media-overlay"></div>
        <div class="card-badge-row">
          <span class="category-badge ${bike.category}">${bike.categoryLabel}</span>
          <span class="price-pill">${bike.priceRange}</span>
        </div>
      </div>

      <div class="card-body">
        <div class="card-header-row">
          <h3 class="bike-title">${bike.name}</h3>
        </div>
        <p class="bike-desc">${bike.description}</p>
        
        <div class="feature-tags">
          ${bike.tags.slice(0, 3).map(tag => `<span class="feature-tag">${tag}</span>`).join("")}
        </div>

        <div class="card-specs-row">
          <div class="spec-item">
            <span class="spec-caption">Prime Surface</span>
            <span class="spec-val">${bike.idealTerrain[0].name.split(" ")[0]}</span>
          </div>
          <div class="spec-item" style="text-align: right;">
            <span class="spec-caption">Weight</span>
            <span class="spec-val">${bike.specs.weight.split(" ")[0]} lbs</span>
          </div>
        </div>
      </div>

      <div class="card-footer">
        <button class="view-details-btn" tabindex="-1">
          <span>View Specs & Pros/Cons</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        <label class="compare-checkbox-label" title="Compare side-by-side with other bikes" onclick="event.stopPropagation();">
          <input 
            type="checkbox" 
            class="compare-checkbox" 
            data-id="${bike.id}" 
            ${isCompared ? "checked" : ""}
          >
          <span>Compare</span>
        </label>
      </div>
    `;

    // Click handler to expand detail modal
    card.addEventListener("click", () => {
      openDetailModal(bike.id);
    });

    // Enter key navigation support
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        if (e.target === card) {
          e.preventDefault();
          openDetailModal(bike.id);
        }
      }
    });

    // Compare checkbox change handler
    const checkbox = card.querySelector(".compare-checkbox");
    checkbox.addEventListener("change", (e) => {
      toggleBikeComparison(bike.id, e.target.checked);
    });

    elements.bikeGrid.appendChild(card);
  });
}

// ==========================================================================
// 6. Detail View Modal Dialog (Expanded Card View)
// ==========================================================================

function openDetailModal(bikeId) {
  const bike = BIKES_DATA.find(b => b.id === bikeId);
  if (!bike) return;

  state.currentModalBikeId = bikeId;
  const isCompared = state.comparedBikes.has(bike.id);
  const fallback = getBikePlaceholderSvg(encodeURIComponent(bike.name), bike.category);

  elements.detailModalContent.innerHTML = `
    <div class="modal-hero">
      <img 
        src="${bike.imageUrl}" 
        alt="${bike.name}" 
        class="modal-hero-img" 
        onerror="this.onerror=null; this.src='${fallback}';"
      >
      <div class="modal-hero-overlay"></div>
      <div class="modal-hero-content">
        <div>
          <span class="category-badge ${bike.category}" style="margin-bottom: 0.5rem; display: inline-block;">${bike.categoryLabel}</span>
          <h2 class="modal-bike-title" id="modal-bike-name">${bike.name}</h2>
        </div>
        <div class="modal-price-pill">${bike.priceRange}</div>
      </div>
    </div>

    <div class="modal-body">
      <!-- Full narrative description -->
      <p class="modal-desc-full">${bike.fullDescription}</p>

      <!-- Key Features Breakdown -->
      <div class="detail-section">
        <h3 class="detail-section-title">
          <span>⚡</span>
          <span>Key Engineered Features</span>
        </h3>
        <div class="features-list">
          ${bike.keyFeatures.map(item => `
            <div class="feature-item-box">
              <span class="feature-bullet-icon">●</span>
              <div>
                <span class="feature-text-bold">${item.bold}</span>
                <span class="feature-text-sub">${item.detail}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Ideal Terrain & Use Cases -->
      <div class="detail-section">
        <h3 class="detail-section-title">
          <span>🗺️</span>
          <span>Ideal Terrain & Environments</span>
        </h3>
        <div class="terrain-cards-grid">
          ${bike.idealTerrain.map(terrain => `
            <div class="terrain-box">
              <div class="terrain-icon">${terrain.icon}</div>
              <span class="terrain-name">${terrain.name}</span>
              <span class="terrain-suitability">${terrain.suitability}</span>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Pros and Cons Split View -->
      <div class="detail-section">
        <h3 class="detail-section-title">
          <span>⚖️</span>
          <span>Pros & Cons Breakdown</span>
        </h3>
        <div class="pros-cons-grid">
          <div class="pros-box">
            <h4 class="pros-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Advantages & Strengths</span>
            </h4>
            <div class="pro-con-list">
              ${bike.pros.map(pro => `
                <div class="pro-con-item">
                  <span class="icon" style="color: var(--color-green);">✓</span>
                  <span>${pro}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="cons-box">
            <h4 class="cons-heading">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>Considerations & Trade-offs</span>
            </h4>
            <div class="pro-con-list">
              ${bike.cons.map(con => `
                <div class="pro-con-item">
                  <span class="icon" style="color: var(--color-amber);">!</span>
                  <span>${con}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>

      <!-- Average Price Tiers -->
      <div class="detail-section">
        <h3 class="detail-section-title">
          <span>🏷️</span>
          <span>Market Price Tiers</span>
        </h3>
        <div class="features-list">
          <div class="feature-item-box">
            <span class="feature-bullet-icon">💵</span>
            <div>
              <span class="feature-text-bold">Entry-Level Tier</span>
              <span class="feature-text-sub">${bike.priceBreakdown.entry}</span>
            </div>
          </div>
          <div class="feature-item-box">
            <span class="feature-bullet-icon">🚴</span>
            <div>
              <span class="feature-text-bold">Mid-Range Enthusiast</span>
              <span class="feature-text-sub">${bike.priceBreakdown.mid}</span>
            </div>
          </div>
          <div class="feature-item-box" style="grid-column: 1 / -1;">
            <span class="feature-bullet-icon">🏆</span>
            <div>
              <span class="feature-text-bold">High-End Performance / Pro</span>
              <span class="feature-text-sub">${bike.priceBreakdown.pro}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal-footer">
      <button class="btn btn-secondary" id="modal-compare-toggle-btn">
        <span>${isCompared ? "✓ In Comparison Matrix" : "+ Add to Compare"}</span>
      </button>

      <button class="btn btn-primary" id="modal-done-btn">
        <span>Done Exploring</span>
      </button>
    </div>
  `;

  // Hook modal action buttons
  const modalCompareBtn = document.getElementById("modal-compare-toggle-btn");
  modalCompareBtn.addEventListener("click", () => {
    const isNowCompared = !state.comparedBikes.has(bike.id);
    toggleBikeComparison(bike.id, isNowCompared);
    modalCompareBtn.querySelector("span").textContent = isNowCompared ? "✓ In Comparison Matrix" : "+ Add to Compare";
  });

  document.getElementById("modal-done-btn").addEventListener("click", closeDetailModal);

  // Show modal
  elements.detailModal.classList.add("open");
  elements.detailModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  elements.detailModalClose.focus();
}

function closeDetailModal() {
  elements.detailModal.classList.remove("open");
  elements.detailModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  state.currentModalBikeId = null;
}

// ==========================================================================
// 7. Comparison Matrix Logic & Modal
// ==========================================================================

function toggleBikeComparison(bikeId, shouldAdd) {
  if (shouldAdd) {
    if (state.comparedBikes.size >= 3) {
      showToast("Comparison limit reached (max 3 bikes at once)", "warning");
      renderBikeGrid();
      return;
    }
    state.comparedBikes.add(bikeId);
    const bike = BIKES_DATA.find(b => b.id === bikeId);
    showToast(`Added ${bike ? bike.name : 'bike'} to comparison matrix`, "success");
  } else {
    state.comparedBikes.delete(bikeId);
    showToast("Removed from comparison", "info");
  }

  updateComparisonUI();
}

function updateComparisonUI() {
  const count = state.comparedBikes.size;

  // Update navbar badge counts
  elements.navCompareCount.textContent = count;
  elements.mobileCompareCount.textContent = count;
  elements.compareBubbleCount.textContent = count;

  // Update banner chips
  if (count === 0) {
    elements.selectedCompareChips.innerHTML = `
      <span class="no-selection-prompt">No bikes selected yet. Click the "Compare" checkbox on any card above to get started!</span>
    `;
  } else {
    elements.selectedCompareChips.innerHTML = Array.from(state.comparedBikes).map(id => {
      const bike = BIKES_DATA.find(b => b.id === id);
      if (!bike) return "";
      return `
        <div class="selected-chip">
          <span>${bike.name}</span>
          <button class="chip-remove-btn" data-remove-id="${bike.id}" aria-label="Remove ${bike.name} from comparison">✕</button>
        </div>
      `;
    }).join("");

    // Attach chip remove listeners
    elements.selectedCompareChips.querySelectorAll(".chip-remove-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-remove-id");
        toggleBikeComparison(id, false);
      });
    });
  }

  // Sync checkboxes in grid
  document.querySelectorAll(".compare-checkbox").forEach(cb => {
    const id = cb.getAttribute("data-id");
    cb.checked = state.comparedBikes.has(id);
  });
}

function openComparisonModal() {
  if (state.comparedBikes.size === 0) {
    // Proactively select the top 2 popular bikes if none selected
    state.comparedBikes.add("road-bike");
    state.comparedBikes.add("gravel-bike");
    updateComparisonUI();
    showToast("Selected Road Bike vs Gravel Bike for comparison", "info");
  }

  const selectedBikes = Array.from(state.comparedBikes).map(id => BIKES_DATA.find(b => b.id === id)).filter(Boolean);

  elements.compareMatrixContainer.innerHTML = `
    <div class="comparison-matrix-grid">
      ${selectedBikes.map(bike => {
        const fallback = getBikePlaceholderSvg(encodeURIComponent(bike.name), bike.category);
        return `
          <div class="compare-col-card">
            <img 
              src="${bike.imageUrl}" 
              alt="${bike.name}" 
              class="compare-col-img"
              onerror="this.onerror=null; this.src='${fallback}';"
            >
            <div>
              <span class="category-badge ${bike.category}" style="display:inline-block; margin-bottom:0.4rem;">${bike.categoryLabel}</span>
              <h3 class="compare-col-name">${bike.name}</h3>
            </div>

            <div class="compare-spec-row">
              <span class="compare-spec-label">Average Price Range</span>
              <span class="compare-spec-val" style="color: var(--accent-primary); font-size: 1rem;">${bike.priceRange}</span>
            </div>

            <div class="compare-spec-row">
              <span class="compare-spec-label">Ideal Surface</span>
              <span class="compare-spec-val">${bike.idealTerrain[0].name} (${bike.idealTerrain[0].suitability})</span>
            </div>

            <div class="compare-spec-row">
              <span class="compare-spec-label">Typical Weight</span>
              <span class="compare-spec-val">${bike.specs.weight}</span>
            </div>

            <div class="compare-spec-row">
              <span class="compare-spec-label">Riding Posture</span>
              <span class="compare-spec-val">${bike.specs.posture}</span>
            </div>

            <div class="compare-spec-row">
              <span class="compare-spec-label">Tire Spec</span>
              <span class="compare-spec-val">${bike.specs.tires}</span>
            </div>

            <div class="compare-spec-row">
              <span class="compare-spec-label">Key Advantage</span>
              <span class="compare-spec-val" style="color: var(--color-green);">✓ ${bike.pros[0]}</span>
            </div>

            <div class="compare-spec-row">
              <span class="compare-spec-label">Primary Trade-Off</span>
              <span class="compare-spec-val" style="color: var(--color-amber);">! ${bike.cons[0]}</span>
            </div>

            <button class="btn btn-outline btn-block" onclick="openDetailModal('${bike.id}'); closeComparisonModal();">
              Full Details
            </button>
          </div>
        `;
      }).join("")}
    </div>
  `;

  elements.compareModal.classList.add("open");
  elements.compareModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  elements.compareModalClose.focus();
}

function closeComparisonModal() {
  elements.compareModal.classList.remove("open");
  elements.compareModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ==========================================================================
// 8. "Find My Fit" Bike Matcher Interactive Quiz
// ==========================================================================

const quizState = {
  terrain: null,
  goal: null,
  ebike: null
};

function openQuizModal() {
  // Reset quiz steps
  quizState.terrain = null;
  quizState.goal = null;
  quizState.ebike = null;

  showQuizStep(1);
  elements.quizModal.classList.add("open");
  elements.quizModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  elements.quizModalClose.focus();
}

function closeQuizModal() {
  elements.quizModal.classList.remove("open");
  elements.quizModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function showQuizStep(stepNumber) {
  const steps = elements.quizContainer.querySelectorAll(".quiz-step");
  const resultView = document.getElementById("quiz-result-view");

  steps.forEach(step => {
    step.style.display = parseInt(step.getAttribute("data-step"), 10) === stepNumber ? "block" : "none";
  });
  if (resultView) resultView.style.display = "none";
}

function calculateQuizResult() {
  let matchedBikeId = "hybrid-bike";

  if (quizState.ebike === "yes") {
    matchedBikeId = "ebike";
  } else if (quizState.terrain === "extreme") {
    matchedBikeId = "fat-bike";
  } else if (quizState.goal === "stunts") {
    matchedBikeId = "bmx";
  } else if (quizState.terrain === "road") {
    matchedBikeId = (quizState.goal === "speed") ? "road-bike" : "hybrid-bike";
  } else if (quizState.terrain === "trail") {
    matchedBikeId = "mountain-bike";
  } else if (quizState.terrain === "gravel") {
    matchedBikeId = (quizState.goal === "adventure") ? "gravel-bike" : "touring-bike";
  } else if (quizState.terrain === "city") {
    if (quizState.goal === "comfort") {
      matchedBikeId = "cruiser";
    } else if (quizState.goal === "adventure") {
      matchedBikeId = "touring-bike";
    } else {
      matchedBikeId = "folding-bike";
    }
  }

  const bike = BIKES_DATA.find(b => b.id === matchedBikeId) || BIKES_DATA[0];
  const resultView = document.getElementById("quiz-result-view");
  const fallback = getBikePlaceholderSvg(encodeURIComponent(bike.name), bike.category);

  resultView.innerHTML = `
    <div class="quiz-result-card">
      <div class="result-celebration">🎉</div>
      <span class="section-tag">PERFECT MATCH</span>
      <h3>Your Recommended Ride:</h3>

      <div class="quiz-result-bike-box">
        <img 
          src="${bike.imageUrl}" 
          alt="${bike.name}" 
          class="result-bike-img"
          onerror="this.onerror=null; this.src='${fallback}';"
        >
        <div class="result-bike-details">
          <span class="category-badge ${bike.category}" style="display:inline-block; margin-bottom: 0.5rem;">${bike.categoryLabel}</span>
          <h4 class="result-bike-name">${bike.name}</h4>
          <p class="result-bike-desc">${bike.description}</p>
          <div style="font-weight: 700; color: var(--accent-primary); font-size: 1.1rem; margin-bottom: 1rem;">
            Average Range: ${bike.priceRange}
          </div>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            <button class="btn btn-primary" id="quiz-inspect-btn">
              <span>View Full Specifications</span>
            </button>
            <button class="btn btn-secondary" id="quiz-restart-btn">
              <span>Retake Quiz</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Hide steps and show result
  elements.quizContainer.querySelectorAll(".quiz-step").forEach(s => s.style.display = "none");
  resultView.style.display = "block";

  document.getElementById("quiz-inspect-btn").addEventListener("click", () => {
    closeQuizModal();
    openDetailModal(bike.id);
  });

  document.getElementById("quiz-restart-btn").addEventListener("click", () => {
    openQuizModal();
  });
}

// ==========================================================================
// 9. Event Listeners & Interactions
// ==========================================================================

function initEventListeners() {
  // Theme Toggle (Dark / Light)
  elements.themeToggle.addEventListener("click", () => {
    const currentTheme = document.body.getAttribute("data-theme") || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("velocraft_theme", newTheme);
    showToast(`Switched to ${newTheme} mode`, "info");
  });

  // Mobile Menu Toggle
  elements.mobileMenuBtn.addEventListener("click", () => {
    const isOpen = elements.mobileDrawer.classList.contains("open");
    if (isOpen) {
      elements.mobileDrawer.classList.remove("open");
      elements.mobileMenuBtn.setAttribute("aria-expanded", "false");
    } else {
      elements.mobileDrawer.classList.add("open");
      elements.mobileMenuBtn.setAttribute("aria-expanded", "true");
    }
  });

  // Close mobile drawer when clicking any link inside it
  elements.mobileDrawer.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", () => {
      elements.mobileDrawer.classList.remove("open");
      elements.mobileMenuBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Category Filter Pills
  elements.filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      elements.filterPills.forEach(p => {
        p.classList.remove("active");
        p.setAttribute("aria-selected", "false");
      });
      pill.classList.add("active");
      pill.setAttribute("aria-selected", "true");
      
      state.activeFilter = pill.getAttribute("data-filter");
      renderBikeGrid();
    });
  });

  // Search Input with Debounce / Instant Response
  elements.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    elements.clearSearchBtn.style.display = state.searchQuery ? "block" : "none";
    renderBikeGrid();
  });

  elements.clearSearchBtn.addEventListener("click", () => {
    elements.searchInput.value = "";
    state.searchQuery = "";
    elements.clearSearchBtn.style.display = "none";
    renderBikeGrid();
    elements.searchInput.focus();
  });

  // Sort Dropdown
  elements.sortSelect.addEventListener("change", (e) => {
    state.sortOption = e.target.value;
    renderBikeGrid();
  });

  // Reset Filters Buttons
  const resetAll = () => {
    state.activeFilter = "all";
    state.searchQuery = "";
    state.sortOption = "default";
    elements.searchInput.value = "";
    elements.clearSearchBtn.style.display = "none";
    elements.sortSelect.value = "default";

    elements.filterPills.forEach(p => {
      const isAll = p.getAttribute("data-filter") === "all";
      p.classList.toggle("active", isAll);
      p.setAttribute("aria-selected", isAll ? "true" : "false");
    });

    renderBikeGrid();
    showToast("Filters reset to default view", "info");
  };

  elements.resetFiltersBtn.addEventListener("click", resetAll);
  elements.emptyResetBtn.addEventListener("click", resetAll);

  // Detail Modal Close Handlers
  elements.detailModalClose.addEventListener("click", closeDetailModal);
  elements.detailModal.addEventListener("click", (e) => {
    if (e.target === elements.detailModal) closeDetailModal();
  });

  // Comparison Modal Handlers
  elements.openCompareBtn.addEventListener("click", openComparisonModal);
  elements.launchComparisonBtn.addEventListener("click", openComparisonModal);
  document.getElementById("nav-compare-link").addEventListener("click", (e) => {
    e.preventDefault();
    openComparisonModal();
  });
  elements.compareModalClose.addEventListener("click", closeComparisonModal);
  elements.compareModal.addEventListener("click", (e) => {
    if (e.target === elements.compareModal) closeComparisonModal();
  });

  // Quiz Modal Triggers & Handlers
  [elements.heroQuizBtn, elements.quizCtaBtn, elements.mobileQuizCtaBtn, elements.footerQuizTrigger].forEach(btn => {
    if (btn) btn.addEventListener("click", openQuizModal);
  });
  elements.quizModalClose.addEventListener("click", closeQuizModal);
  elements.quizModal.addEventListener("click", (e) => {
    if (e.target === elements.quizModal) closeQuizModal();
  });

  // Quiz Option Step Progression
  elements.quizContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".quiz-option-card");
    if (!card) return;

    if (card.hasAttribute("data-answer-terrain")) {
      quizState.terrain = card.getAttribute("data-answer-terrain");
      showQuizStep(2);
    } else if (card.hasAttribute("data-answer-goal")) {
      quizState.goal = card.getAttribute("data-answer-goal");
      showQuizStep(3);
    } else if (card.hasAttribute("data-answer-ebike")) {
      quizState.ebike = card.getAttribute("data-answer-ebike");
      calculateQuizResult();
    }
  });

  // Global ESC key to close open modals
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (elements.detailModal.classList.contains("open")) closeDetailModal();
      if (elements.compareModal.classList.contains("open")) closeComparisonModal();
      if (elements.quizModal.classList.contains("open")) closeQuizModal();
      if (elements.mobileDrawer.classList.contains("open")) {
        elements.mobileDrawer.classList.remove("open");
        elements.mobileMenuBtn.setAttribute("aria-expanded", "false");
      }
    }
  });

  // Footer Quick Category Filter links
  document.querySelectorAll("[data-quick-filter]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const filter = link.getAttribute("data-quick-filter");
      const targetPill = document.querySelector(`.filter-pill[data-filter="${filter}"]`);
      if (targetPill) {
        targetPill.click();
      }
      const gallery = document.getElementById("bikes-gallery");
      if (gallery) gallery.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Footer Quick Bike Open links
  document.querySelectorAll("[data-open-bike]").forEach(btn => {
    btn.addEventListener("click", () => {
      const bikeId = btn.getAttribute("data-open-bike");
      openDetailModal(bikeId);
    });
  });

  // Newsletter Form Submit
  elements.newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("newsletter-email");
    const val = emailInput.value.trim();

    if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      elements.formFeedback.className = "form-feedback error";
      elements.formFeedback.textContent = "Please provide a valid email address.";
      emailInput.focus();
      return;
    }

    elements.formFeedback.className = "form-feedback success";
    elements.formFeedback.textContent = "Thank you! Your personalized bicycle guide has been sent to your inbox.";
    showToast("Guide & recommendations dispatched!", "success");
    emailInput.value = "";

    setTimeout(() => {
      elements.formFeedback.textContent = "";
    }, 5000);
  });
}

// ==========================================================================
// 10. Initialization
// ==========================================================================
function initApp() {
  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem("velocraft_theme") || "dark";
  document.body.setAttribute("data-theme", savedTheme);

  // Set initial copyright year
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Render initial bike catalog
  renderBikeGrid();
  updateComparisonUI();
  initEventListeners();
}

// Run when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
