import { UnitType, NeighborhoodSpot, GalleryItem } from "./types";

// High-resolution photography links
export const exteriorImg = "https://lh3.googleusercontent.com/d/1PISRp7qUV4gbbc2YfMZ3L7cKc_rBidZ9";
export const skypoolImg = "https://lh3.googleusercontent.com/d/10vDRK7hUTpdROgM6_y2umOYY4WxXVnXz";
export const interiorImg = "https://lh3.googleusercontent.com/d/1mf8Qoovz2CGwaKRjgeQ3RZx8U0MK2mmX";
export const backgroundImg = "https://lh3.googleusercontent.com/d/1YIoIHzvZ020uTJiSpdQHDzZ0ZL7aRVjo";
export const lobbyImg = "https://lh3.googleusercontent.com/d/18c2QqmcKt4OLaw2Ui2aVFRf99SLvlDPA";
export const dropOffImg = "https://lh3.googleusercontent.com/d/12oCDpJTu3PodC7kAOIh1VanJe-ADrM4v";
export const facilitiesImg = "https://lh3.googleusercontent.com/d/1utgpO7sRtc17MeaBiGUq5tfn5EHmB5uW";
export const locationImg = "https://lh3.googleusercontent.com/d/1F-c0WgqZpkN0V_CRs7bonEfZU6BdP0B-";
export const orionCityViewImg = "https://lh3.googleusercontent.com/d/1uix4Vz1kbusWjJvTSXZC8qfbkax9Uvni";
export const rooftopImg = "https://lh3.googleusercontent.com/d/1ypHs313DiK9bmexgk4pb6syD3RBwoWZ7";
export const skyDiningImg = "https://lh3.googleusercontent.com/d/1kF0UCLktpiUIjCXc57bolv5QXr2df_gd";
export const skyDiningJapaneseImg = "https://lh3.googleusercontent.com/d/1ZuSWa1c3C7h54fNzELinHeIhNrFJ4ebR";
export const skyLoungeImg = "https://lh3.googleusercontent.com/d/194dcoORAyYTpifXcyiNzGkLmm90WUmB9";
export const unitDImg = "https://lh3.googleusercontent.com/d/1dI2XWNcRYFBy6_qqXO4TK7gDebsa0MZd";

// High-resolution Floor Plan Diagrams
export const floorPlanImages: Record<string, string> = {
  "Type-A1": "https://lh3.googleusercontent.com/d/1CzfpaoJsTYh55DDBoGdfLWQTOvhyhOls",
  "Type-B2": "https://lh3.googleusercontent.com/d/12kpw9rTxloako48cbwHiE_07nwWtBM7r",
  "Type-C2": "https://lh3.googleusercontent.com/d/103P6HzzDKfxAR7gvNmR4L_kY0D8iNpCk",
  "Type-C4": "https://lh3.googleusercontent.com/d/1rw6enyAVEciy6ZzWmjVZZGORat6ALNh8",
  "Type-D2": "https://lh3.googleusercontent.com/d/1fg5pjXDK5Q5NzcQ3gUTus8lM6xRRKI62",
  "Type-D4": "https://lh3.googleusercontent.com/d/1zc2tHbdF0HWojcErWoO_1OQGS9VsDdng",
};

export const UNIT_TYPES: UnitType[] = [
  {
    id: "Type-A1",
    name: "Type A1 (Cosmopolitan Suite)",
    subtitle: "1 Bedroom • 1 Bathroom Executive Living",
    sizeSqFt: 495,
    sizeSqM: 46.0,
    bedrooms: 1,
    bathrooms: 1,
    startingPrice: "From RM 1,200,000",
    viewDirection: "TRX & Royal Selangor Golf Club View",
    balconyOrientation: "East (Morning Sun)",
    description: "Intelligently designed for global professionals and astute investors. Features open-concept kitchen systems with built-in appliances, seamless flow into the master bedroom, and premium acoustic glass insulation.",
    keyFeatures: [
      "Open-concept designer living & dining gallery",
      "Floor-to-ceiling acoustic glass wall facade",
      "Concealed Daikin VRF inverter cooling system",
      "German-engineered Häfele smart biometric lock",
      "Full Italian marble bathroom finish with Hansgrohe fixtures"
    ],
    specs: {
      flooring: "Greek Volakas White Marble in Living & Dining; Engineered French Oak in Bedroom",
      kitchen: "Custom German Bulthaup Kitchen Cabinets with Bosch Induction Hob & Hood",
      fittings: "Hansgrohe Raindance Shower & Villeroy & Boch Sanitary Ware",
      lockset: "Häfele Multi-factor Digital Smart Lockset (Biometric / RFID / App)",
      ceiling: "3.4m clear high-volume ceilings with acoustic plaster treatment"
    },
    rooms: [
      {
        id: "a1-foyer",
        name: "Private Entrance Vestibule",
        dimensions: "1.8m x 1.4m",
        description: "Equipped with custom integrated shoe cabinetry and smart energy control panel.",
        materials: "Volakas Marble, Matte Walnut Finishings",
        svgPath: "M 20 20 H 120 V 90 H 20 Z",
        cx: 70,
        cy: 55
      },
      {
        id: "a1-kitchen",
        name: "Gourmet Dry Kitchen",
        dimensions: "2.8m x 2.2m",
        description: "Fitted with built-in Bosch microwave oven, induction hob, and quartz stone countertops.",
        materials: "Silestone Quartz, Soft-close German Blum Hardware",
        svgPath: "M 20 90 H 120 V 220 H 20 Z",
        cx: 70,
        cy: 155
      },
      {
        id: "a1-living",
        name: "Panoramic Living Lounge",
        dimensions: "3.8m x 3.6m",
        description: "Direct connection to the full-height double-glazed balcony with panoramic city views.",
        materials: "Greek Volakas Marble, Acoustic Double Glazing",
        svgPath: "M 120 20 H 280 V 220 H 120 Z",
        cx: 200,
        cy: 120
      },
      {
        id: "a1-master",
        name: "Master Suite Sanctuary",
        dimensions: "4.0m x 3.2m",
        description: "Spacious master bedroom with integrated glass-front wardrobe systems and bedside automation.",
        materials: "Engineered French Oak, Tinted Glass Panels",
        svgPath: "M 280 20 H 450 V 170 H 280 Z",
        cx: 365,
        cy: 95
      },
      {
        id: "a1-bath",
        name: "En-suite Marble Bathroom",
        dimensions: "2.4m x 1.8m",
        description: "Spa-grade bathroom with thermostatic Hansgrohe shower, anti-fog LED vanity, and concealed bidet.",
        materials: "Full Volakas Marble Cladding, Villeroy & Boch Ceramic",
        svgPath: "M 280 170 H 450 V 260 H 280 Z",
        cx: 365,
        cy: 215
      }
    ]
  },
  {
    id: "Type-B2",
    name: "Type B2 (Signature Residence)",
    subtitle: "2 Bedrooms • 2 Bathrooms Skyline Suite",
    sizeSqFt: 710,
    sizeSqM: 66.0,
    bedrooms: 2,
    bathrooms: 2,
    startingPrice: "From RM 1,750,000",
    viewDirection: "Pavilion KL & Bukit Bintang Skyline",
    balconyOrientation: "West (City Lights)",
    description: "An exemplary 2-bedroom residence tailored for modern urban families or executive couples. Offers private dual suites, a spacious dining salon, and sweeping views of Bukit Bintang's fashion boulevard.",
    keyFeatures: [
      "Dual en-suite bedroom layout ensuring ultimate privacy",
      "Expansive corner living salon with dual-aspect glazing",
      "Fully equipped German kitchen with integrated refrigerator",
      "Private laundry utility niche with washer-dryer unit",
      "Centralized hot water supply system to all bathrooms"
    ],
    specs: {
      flooring: "Imported Italian Botticino Classico Marble & Engineered Oak",
      kitchen: "Custom Poliform-style cabinetry with quartz island and Bosch appliances",
      fittings: "Grohe Essence series mixer taps, Axor thermostatic showers",
      lockset: "Samsung / Häfele Touchscreen Biometric Entry with Intercom Linking",
      ceiling: "3.4m ceiling height with recessed architectural shadowline LED bays"
    },
    rooms: [
      {
        id: "b2-foyer",
        name: "Grand Entry Foyer",
        dimensions: "2.0m x 1.6m",
        description: "Private entry buffer zone with leather-finish console paneling.",
        materials: "Botticino Classico Marble",
        svgPath: "M 20 20 H 130 V 100 H 20 Z",
        cx: 75,
        cy: 60
      },
      {
        id: "b2-kitchen",
        name: "Open Chef's Kitchen",
        dimensions: "3.2m x 2.4m",
        description: "Equipped with quartz preparation island, built-in dishwasher, and wine cooler rack.",
        materials: "Caesarstone Quartz, Smoked Mirror Accents",
        svgPath: "M 20 100 H 130 V 230 H 20 Z",
        cx: 75,
        cy: 165
      },
      {
        id: "b2-living",
        name: "Central Living & Dining Gallery",
        dimensions: "4.5m x 3.8m",
        description: "Open hall connecting dining for 6 and direct sunset balcony access.",
        materials: "Botticino Marble, Low-E Solar Acoustic Glass",
        svgPath: "M 130 20 H 310 V 230 H 130 Z",
        cx: 220,
        cy: 125
      },
      {
        id: "b2-master-bed",
        name: "Primary Master Suite",
        dimensions: "4.2m x 3.5m",
        description: "King master room with floor-to-ceiling glass corner and custom walk-through robes.",
        materials: "Engineered Oak Chevron, Walnut Slatted Details",
        svgPath: "M 310 20 H 450 V 150 H 310 Z",
        cx: 380,
        cy: 85
      },
      {
        id: "b2-master-bath",
        name: "Master Marble Bath",
        dimensions: "2.6m x 2.0m",
        description: "Double vanity with LED backlit mirrors and oversized rain shower enclosure.",
        materials: "Full Porcelain Cladding, Duravit Fixtures",
        svgPath: "M 310 150 H 450 V 230 H 310 Z",
        cx: 380,
        cy: 190
      },
      {
        id: "b2-bedroom-2",
        name: "Secondary Guest Suite",
        dimensions: "3.4m x 3.0m",
        description: "Flexible room suitable as a children's bedroom, private study, or creative atelier.",
        materials: "Engineered Oak, Soundproof Solid Timber Door",
        svgPath: "M 130 230 H 310 V 300 H 130 Z",
        cx: 220,
        cy: 265
      }
    ]
  },
  {
    id: "Type-C2",
    name: "Type C2 (Prestige Corner Unit)",
    subtitle: "2+1 Bedrooms • 2 Bathrooms Dual-Key Ready",
    sizeSqFt: 885,
    sizeSqM: 82.2,
    bedrooms: 3,
    bathrooms: 2,
    startingPrice: "From RM 2,180,000",
    viewDirection: "Petronas Twin Towers & KL Tower View",
    balconyOrientation: "North-West (Iconic Skyline)",
    description: "A prestigious corner residence with dedicated study lounge and dual-key conversion capability. Offers panoramic 180° views spanning the Petronas Twin Towers and KL Tower.",
    keyFeatures: [
      "Exclusive corner positioning with 180° dual landmark vistas",
      "Dedicated multi-functional study / guest alcove",
      "Walk-in wardrobe vestibule in master bedroom",
      "Semi-enclosed chef wet kitchen and breakfast island",
      "Smart home integration with automated motorized curtains"
    ],
    specs: {
      flooring: "Selected Greek Statuario White Marble and Natural Walnut Flooring",
      kitchen: "Custom Poggenpohl kitchen with Miele induction, combi steam oven & extractor",
      fittings: "Gessi Italian designer brassware & Antonio Lupi vessel sinks",
      lockset: "Yale Biometric System with Face Recognition and video doorbell",
      ceiling: "3.5m ceiling with acoustic baffle channels and warm architectural lighting"
    },
    rooms: [
      {
        id: "c2-foyer",
        name: "Private Entrance Gallery",
        dimensions: "2.2m x 1.8m",
        description: "Dual-key access junction allowing independent entrance to studio suite.",
        materials: "Statuario White Marble",
        svgPath: "M 20 20 H 120 V 100 H 20 Z",
        cx: 70,
        cy: 60
      },
      {
        id: "c2-kitchen",
        name: "Gourmet Wet & Dry Kitchen",
        dimensions: "3.6m x 2.4m",
        description: "Equipped with Miele combi steam oven, island bar, and integrated wine cellar.",
        materials: "Italian Statuario Marble, Bronze Tint Glass",
        svgPath: "M 20 100 H 120 V 220 H 20 Z",
        cx: 70,
        cy: 160
      },
      {
        id: "c2-living",
        name: "Grand Corner Salon",
        dimensions: "5.2m x 4.0m",
        description: "Panoramic corner living space with direct views of the Petronas Twin Towers.",
        materials: "Statuario Marble, Acoustically Sealed Glazing",
        svgPath: "M 120 20 H 300 V 220 H 120 Z",
        cx: 210,
        cy: 120
      },
      {
        id: "c2-master",
        name: "Presidential Master Suite",
        dimensions: "4.5m x 3.8m",
        description: "Luxurious master sanctuary featuring custom walk-in wardrobe and reading nook.",
        materials: "Natural American Walnut, Brushed Brass Trim",
        svgPath: "M 300 20 H 450 V 160 H 300 Z",
        cx: 375,
        cy: 90
      },
      {
        id: "c2-bath",
        name: "Master Spa Bathroom",
        dimensions: "2.8m x 2.2m",
        description: "Free-standing stone composite bathtub overlooking the KL skyline.",
        materials: "Full Statuario Marble, Gessi Brushed Gold Brassware",
        svgPath: "M 300 160 H 450 V 240 H 300 Z",
        cx: 375,
        cy: 200
      },
      {
        id: "c2-study",
        name: "Executive Study / Bedroom 3",
        dimensions: "3.2m x 2.8m",
        description: "Private library or home office with built-in acoustic partition walls.",
        materials: "Natural Walnut Wood, Acoustic Fabric Panels",
        svgPath: "M 120 220 H 300 V 290 H 120 Z",
        cx: 210,
        cy: 255
      }
    ]
  },
  {
    id: "Type-C4",
    name: "Type C4 (Skyline Executive)",
    subtitle: "3 Bedrooms • 3 Bathrooms Corner View",
    sizeSqFt: 980,
    sizeSqM: 91.0,
    bedrooms: 3,
    bathrooms: 3,
    startingPrice: "From RM 2,450,000",
    viewDirection: "TRX & Merdeka 118 Panoramic Vista",
    balconyOrientation: "South-West (City Horizon)",
    description: "An expansive 3-bedroom residence created for family living and high-level hosting. Features oversized panoramic glass balconies, en-suite baths in all rooms, and a dedicated helper's utility area.",
    keyFeatures: [
      "All 3 bedrooms configured with private ensuite marble bathrooms",
      "Expansive 7-meter wide frontage living and dining hall",
      "Full private laundry room & maid's quarters with separate entrance",
      "Master bath fitted with deep soaking tub and skyline glass",
      "Direct high-speed elevator access with private access cards"
    ],
    specs: {
      flooring: "Book-matched Volakas White Marble & French Oak Parquet",
      kitchen: "Custom Poliform cabinetry with natural granite counters & Miele appliances",
      fittings: "Dornbracht brassware & Toto Neorest intelligent smart washlets",
      lockset: "Schlage Commercial Biometric Smart Lock with Mobile Digital Keys",
      ceiling: "3.5m ceiling with acoustic thermal insulation and architectural coves"
    },
    rooms: [
      {
        id: "c4-foyer",
        name: "Private Lift Lobby / Foyer",
        dimensions: "2.4m x 1.8m",
        description: "Direct elevator access buffer with custom timber veneer wall paneling.",
        materials: "Volakas Marble, Smoked Oak",
        svgPath: "M 20 20 H 120 V 90 H 20 Z",
        cx: 70,
        cy: 55
      },
      {
        id: "c4-kitchen",
        name: "Enclosed Chef's Kitchen",
        dimensions: "3.8m x 2.6m",
        description: "Fully partitioned heavy and light cooking zones with heavy-duty exhaust.",
        materials: "Absolute Black Granite, Stainless Steel Appliances",
        svgPath: "M 20 90 H 120 V 230 H 20 Z",
        cx: 70,
        cy: 160
      },
      {
        id: "c4-living",
        name: "Grand Salon & Dining Hall",
        dimensions: "5.8m x 4.2m",
        description: "Vast entertaining gallery accommodating 10-person formal dining and lounge.",
        materials: "Volakas Marble, Frameless Structural Glass",
        svgPath: "M 120 20 H 300 V 230 H 120 Z",
        cx: 210,
        cy: 125
      },
      {
        id: "c4-master",
        name: "Grand Master Suite",
        dimensions: "4.8m x 4.0m",
        description: "Palatial master bedroom with separate walk-in dressing room and private balcony.",
        materials: "French Oak Parquet, Silk Wall Coverings",
        svgPath: "M 300 20 H 450 V 160 H 300 Z",
        cx: 375,
        cy: 90
      },
      {
        id: "c4-master-bath",
        name: "Royal Master Bath",
        dimensions: "3.0m x 2.4m",
        description: "Freestanding soaking tub with panoramic skyline window, dual vanities, and rain shower.",
        materials: "Book-matched Volakas Marble, Dornbracht Brass",
        svgPath: "M 300 160 H 450 V 240 H 300 Z",
        cx: 375,
        cy: 200
      },
      {
        id: "c4-bed2",
        name: "Guest Suite 2",
        dimensions: "3.6m x 3.2m",
        description: "Generous double suite with private en-suite bathroom and built-in wardrobes.",
        materials: "French Oak Parquet, Matte Lacquer Joinery",
        svgPath: "M 120 230 H 280 V 300 H 120 Z",
        cx: 200,
        cy: 265
      },
      {
        id: "c4-bed3",
        name: "Junior Suite 3",
        dimensions: "3.4m x 3.0m",
        description: "Comfortable third en-suite bedroom with study desk integration.",
        materials: "French Oak Parquet, Integrated Wardrobe",
        svgPath: "M 280 230 H 450 V 300 H 280 Z",
        cx: 365,
        cy: 265
      }
    ]
  },
  {
    id: "Type-D2",
    name: "Type D2 (Imperial Residence)",
    subtitle: "3 Bedrooms • 3 Bathrooms Luxury Sky Flat",
    sizeSqFt: 1165,
    sizeSqM: 108.2,
    bedrooms: 3,
    bathrooms: 3,
    startingPrice: "From RM 2,900,000",
    viewDirection: "Unblocked 270° Panoramic City Panorama",
    balconyOrientation: "Dual Aspect (North & East)",
    description: "An extraordinary sky flat featuring an oversized open-concept entertaining gallery, private elevator vestibule option, and 270-degree unblocked city views. Designed for ultra-high-net-worth residents.",
    keyFeatures: [
      "270-degree wrap-around panoramic skyline glass facade",
      "Private elevator vestibule with direct home entry",
      "Dry and enclosed wet kitchen system with wine cellar",
      "Master bedroom with private study and dressing lounge",
      "2 designated sheltered side-by-side VIP parking bays"
    ],
    specs: {
      flooring: "Italian Calacatta Gold Marble & French Oak Chevron Parquet",
      kitchen: "Custom Varenna Poliform Kitchen with Gaggenau Induction & Oven suite",
      fittings: "Axor Starck Organic brassware & Duravit SensoWash smart toilets",
      lockset: "Biometric Iris & Fingerprint Security System with 24/7 Concierge Link",
      ceiling: "3.5m ceiling height with acoustic shadow margins"
    },
    rooms: [
      {
        id: "d2-foyer",
        name: "Private Lift Vestibule",
        dimensions: "2.4m x 1.8m",
        description: "Exclusive elevator vestibule with marble floor inlays and suede paneling.",
        materials: "Calacatta Gold Marble, Italian Suede Panels",
        svgPath: "M 20 20 H 120 V 100 H 20 Z",
        cx: 70,
        cy: 60
      },
      {
        id: "d2-kitchen",
        name: "Enclosed Gourmet Kitchen",
        dimensions: "3.8m x 2.8m",
        description: "Commercial-grade wet kitchen paired with a sleek dry entertaining island.",
        materials: "Calacatta Gold Countertops, Gaggenau Suite",
        svgPath: "M 20 100 H 120 V 220 H 20 Z",
        cx: 70,
        cy: 160
      },
      {
        id: "d2-living",
        name: "Grand Salon & Sky Lounge",
        dimensions: "6.2m x 4.8m",
        description: "Palatial double-length living salon framed by 270-degree floor-to-ceiling glass.",
        materials: "Calacatta Gold Marble, Low-E Acoustic Double Glazing",
        svgPath: "M 120 20 H 300 V 220 H 120 Z",
        cx: 210,
        cy: 120
      },
      {
        id: "d2-master",
        name: "Imperial Master Retreat",
        dimensions: "5.0m x 4.2m",
        description: "Enormous master suite with private reading study, custom glass wardrobe gallery.",
        materials: "French Oak Chevron, Custom Walnut Joinery",
        svgPath: "M 300 20 H 450 V 160 H 300 Z",
        cx: 375,
        cy: 90
      },
      {
        id: "d2-master-bath",
        name: "Imperial Spa Master Bath",
        dimensions: "3.2m x 2.6m",
        description: "Freestanding Victoria + Albert stone bathtub with dual rain shower pillars.",
        materials: "Calacatta Gold Marble, Axor Starck Brassware",
        svgPath: "M 300 160 H 450 V 240 H 300 Z",
        cx: 375,
        cy: 200
      },
      {
        id: "d2-bed2",
        name: "VIP Bedroom 2",
        dimensions: "3.8m x 3.4m",
        description: "Large guest bedroom with en-suite bath and built-in study nook.",
        materials: "French Oak Chevron, Custom Lacquered Wardrobe",
        svgPath: "M 120 220 H 280 V 290 H 120 Z",
        cx: 200,
        cy: 255
      },
      {
        id: "d2-bed3",
        name: "Guest Suite 3",
        dimensions: "3.4m x 3.2m",
        description: "Comfortable private bedroom with dedicated bathroom.",
        materials: "French Oak Chevron, Acoustic Wall Paneling",
        svgPath: "M 280 220 H 450 V 290 H 280 Z",
        cx: 365,
        cy: 255
      }
    ]
  },
  {
    id: "Type-D4",
    name: "Type D4 (Penthouse Duplex / Sovereign)",
    subtitle: "3+1 Bedrooms • 4 Bathrooms Sovereign Duplex",
    sizeSqFt: 1325,
    sizeSqM: 123.1,
    bedrooms: 4,
    bathrooms: 4,
    startingPrice: "From RM 3,300,000",
    viewDirection: "Direct 360° View of KLCC & TRX Towers",
    balconyOrientation: "Dual Aspect (Corner South-East)",
    description: "The crown jewel of Orion Residence. Palatial double-volume living salon, dedicated private lift vestibule, chef wet & dry kitchen, and sweeping balconies looking straight toward Tun Razak Exchange.",
    keyFeatures: [
      "Palatial double-volume living gallery with 6m architectural void",
      "Private elevator foyer with personalized biometric security keying",
      "Separate heavy wet cooking kitchen and dry entertainment bar",
      "Enormous primary master suite with private boudoir & study",
      "3 allocated prime sheltered basement VIP parking bays"
    ],
    specs: {
      flooring: "Italian Arabescato Marble and French Oak Chevron Parquet",
      kitchen: "Custom Valcucine Kitchen with Gaggenau Induction, Teppanyaki & Sub-Zero Wine Cellar",
      fittings: "Antonio Lupi Soaking Bathtub, Gessi Ovale Brassware, Duravit Smart Toilets",
      lockset: "Integrated face recognition, visual intercom, and direct linking to 24/7 VIP Concierge Desk.",
      ceiling: "3.5m clear ceiling heights with acoustic plaster boards and golden shadow profile margins."
    },
    rooms: [
      {
        id: "d4-foyer",
        name: "Private Lift Vestibule",
        dimensions: "2.4m x 1.8m",
        description: "Secure private elevator lobby finished with premium textured leather wall claddings.",
        materials: "Arabescato Marble, Custom Suede Panels",
        svgPath: "M 20 20 H 120 V 100 H 20 Z",
        cx: 70,
        cy: 60
      },
      {
        id: "d4-heavy-kitchen",
        name: "Enclosed Heavy Kitchen",
        dimensions: "3.4m x 2.6m",
        description: "Heavy-duty wet cooking area fitted with commercial-grade exhaust systems.",
        materials: "Carrara Marble Counters, Custom Heavy Hoods",
        svgPath: "M 20 100 H 120 V 190 H 20 Z",
        cx: 70,
        cy: 145
      },
      {
        id: "d4-living",
        name: "Grand Corner Living Salon",
        dimensions: "6.0m x 4.8m",
        description: "Vast double-height salon hosting formal dining and panoramic corner city lights view.",
        materials: "Arabescato Italian Marble, Double-height Glazing",
        svgPath: "M 120 20 H 300 V 190 H 120 Z",
        cx: 210,
        cy: 105
      },
      {
        id: "d4-balcony",
        name: "L-Shaped 270° Sky Deck",
        dimensions: "1.8m x 6.2m",
        description: "Sweeping structural glass terrace looking directly across KLCC and Tun Razak Exchange.",
        materials: "Premium Burmese Teak Deck, Structural Glass Railing",
        svgPath: "M 20 190 H 300 V 240 H 20 Z",
        cx: 160,
        cy: 215
      },
      {
        id: "d4-master-suite",
        name: "Crown Master Suite",
        dimensions: "4.6m x 4.2m",
        description: "Palatial sleeping suite with separate private study lounge and glass wardrobe racks.",
        materials: "French Oak Chevron, Custom Walnut Joinery",
        svgPath: "M 300 20 H 450 V 150 H 300 Z",
        cx: 375,
        cy: 85
      },
      {
        id: "d4-master-bath",
        name: "Royal Master Bathroom",
        dimensions: "2.8m x 2.4m",
        description: "Luxurious marble bathroom featuring freestanding soaking bathtub and custom dual shower pillars.",
        materials: "Arabescato Marble, Antonio Lupi Soaking Tub",
        svgPath: "M 300 150 H 450 V 230 H 300 Z",
        cx: 375,
        cy: 190
      },
      {
        id: "d4-bedroom-2",
        name: "VIP Guest Suite 2",
        dimensions: "3.6m x 3.0m",
        description: "Comfortable secondary suite equipped with bespoke custom wardrobe closets.",
        materials: "French Oak Chevron, European Walnut Panels",
        svgPath: "M 120 240 H 285 V 295 H 120 Z",
        cx: 202,
        cy: 265
      },
      {
        id: "d4-common-bath",
        name: "Common Bathroom",
        dimensions: "2.0m x 1.8m",
        description: "Fully styled common bath providing clean layouts and high-performance bidet system.",
        materials: "Greek Volakas White Marble, Duravit Smart Toilet",
        svgPath: "M 285 240 H 450 V 295 H 285 Z",
        cx: 367,
        cy: 265
      }
    ]
  }
];

export const NEIGHBORHOOD_SPOTS: NeighborhoodSpot[] = [
  {
    id: "pavilion",
    name: "Pavilion Kuala Lumpur",
    category: "shopping",
    distance: "150m (1-min walk)",
    description: "Malaysia's premier award-winning shopping destination, housing the world's most elite luxury fashion and jewelry brands.",
    coords: { x: 45, y: 35 }
  },
  {
    id: "starhill",
    name: "The Starhill",
    category: "shopping",
    distance: "50m (30-sec walk)",
    description: "The Home of the Refined. Hosts prestigious watch salons, modern luxury fashion houses, and Michelin-starred dining.",
    coords: { x: 52, y: 58 }
  },
  {
    id: "fahrenheit",
    name: "Fahrenheit88 Mall",
    category: "shopping",
    distance: "80m (1-min walk)",
    description: "Vibrant retail hub hosting international cosmetics shops, fashion houses, and direct street connectivity.",
    coords: { x: 30, y: 55 }
  },
  {
    id: "mrt",
    name: "MRT Bukit Bintang Station",
    category: "transit",
    distance: "200m (2-min walk)",
    description: "Strategic underground transit artery connecting directly to TRX, KL Sentral, and the broader Klang Valley.",
    coords: { x: 22, y: 40 }
  },
  {
    id: "lot10",
    name: "Lot 10 Mall & Hutong Heritage",
    category: "dining",
    distance: "250m (3-min walk)",
    description: "A legendary culinary landmark housing iconic heritage food spots under one refined venue.",
    coords: { x: 26, y: 24 }
  },
  {
    id: "trx",
    name: "Tun Razak Exchange (TRX)",
    category: "transit",
    distance: "1 MRT Station / 800m",
    description: "The nation's financial district, hosting the luxurious Exchange TRX shopping mall and premium lifestyle parks.",
    coords: { x: 85, y: 80 }
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: "The Celestial Beacon",
    description: "Rising 46 storeys, featuring customized glass cladding with solar filtration and premium integrated nocturnal lighting bands.",
    image: exteriorImg,
    category: "architecture",
    tag: "Architectural Design",
    subtag: "46 Floors"
  },
  {
    title: "Grand Marble Lobby",
    description: "The double-volume grand reception hall styled with Italian Portoro marble, brass features, and a dedicated concierge lounge.",
    image: lobbyImg,
    category: "facilities",
    tag: "Reception & Lounge",
    subtag: "Level 1"
  },
  {
    title: "Sovereign Drop-Off",
    description: "A private entrance driveway away from public roads, offering absolute exclusivity and a team of professional valets.",
    image: dropOffImg,
    category: "facilities",
    tag: "Arrival Portico",
    subtag: "Ground Floor"
  },
  {
    title: "Infinity Sky Pool",
    description: "Relax on the floating marble pool decks while staring directly at the towering Petronas Twin Towers. Full bar service and private cabanas.",
    image: skypoolImg,
    category: "facilities",
    tag: "VIP Members Only",
    subtag: "Level 40"
  },
  {
    title: "The Oasis Wellness Deck",
    description: "A comprehensive health deck with hydrotherapy dipping pools, state-of-the-art gymnasium, and private yoga pavilions.",
    image: facilitiesImg,
    category: "facilities",
    tag: "Health & Fitness",
    subtag: "Level 10"
  },
  {
    title: "Bespoke Salons",
    description: "Living rooms featuring solid custom book-matched marble floors, integrated ducted VRF air-con systems, and specialized acoustic insulation.",
    image: interiorImg,
    category: "residences",
    tag: "Custom Finishings",
    subtag: "3.4m Ceiling"
  },
  {
    title: "The Japanese Sky Dining",
    description: "An exquisite, high-altitude dining experience with authentic private tatami rooms and a custom sushi counter managed by master chefs.",
    image: skyDiningJapaneseImg,
    category: "facilities",
    tag: "Gourmet Dining",
    subtag: "Level 40"
  },
  {
    title: "The Sky Lounge & Cigar Bar",
    description: "A private cigar lounge and business salon with deep leather armchairs and climate-controlled storage for fine reserves.",
    image: skyLoungeImg,
    category: "facilities",
    tag: "Exclusive Cigar Lounge",
    subtag: "Level 40"
  },
  {
    title: "Rooftop Sunset Lookout",
    description: "An open-air garden terrace situated 160 meters above the city, offering panoramic sunset views across the skyline.",
    image: rooftopImg,
    category: "facilities",
    tag: "Garden Terrace",
    subtag: "Level 46"
  },
  {
    title: "Tranquil Sky Dining Salon",
    description: "A private banquet hall with floor-to-ceiling glass paneling and a complete chef's prep kitchen for hosted dinners.",
    image: skyDiningImg,
    category: "facilities",
    tag: "Banquet Hall",
    subtag: "Level 40"
  },
  {
    title: "Panoramic City Orientations",
    description: "Optimized dual-aspect facade designs ensuring unblocked, dramatic view corridors toward TRX Financial Hub and Merdeka 118.",
    image: orionCityViewImg,
    category: "architecture",
    tag: "Skyline Views",
    subtag: "TRX & Twin Towers"
  },
  {
    title: "The Executive Residence Unit",
    description: "Spacious multi-bedroom suite interior featuring premium custom built-in wardrobe systems and ensuite master bath suites.",
    image: unitDImg,
    category: "residences",
    tag: "Premium Suites",
    subtag: "Type D Suite"
  }
];
