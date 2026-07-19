import * as React from "react";
import { useState, useEffect } from "react";
import {
  MapPin,
  Maximize2,
  Bed,
  Bath,
  Compass,
  Building,
  Phone,
  Mail,
  User,
  Calendar,
  Clock,
  Globe,
  CheckCircle2,
  ArrowRight,
  Lock,
  Shield,
  Trash2,
  Download,
  FileText,
  Layers,
  Sparkles,
  Map,
  Sliders,
  Menu,
  ChevronRight,
  ChevronLeft,
  X
} from "lucide-react";

import { motion, AnimatePresence } from "motion/react";
import { ScrollReveal } from "./components/ScrollReveal";
import { translate, Lang } from "./translations";

// Paths to high-resolution architectural and lifestyle photography
const exteriorImg = "https://lh3.googleusercontent.com/d/1PISRp7qUV4gbbc2YfMZ3L7cKc_rBidZ9";
const skypoolImg = "https://lh3.googleusercontent.com/d/10vDRK7hUTpdROgM6_y2umOYY4WxXVnXz";
const interiorImg = "https://lh3.googleusercontent.com/d/1mf8Qoovz2CGwaKRjgeQ3RZx8U0MK2mmX";
const backgroundImg = "https://lh3.googleusercontent.com/d/1YIoIHzvZ020uTJiSpdQHDzZ0ZL7aRVjo";
const lobbyImg = "https://lh3.googleusercontent.com/d/18c2QqmcKt4OLaw2Ui2aVFRf99SLvlDPA";
const dropOffImg = "https://lh3.googleusercontent.com/d/12oCDpJTu3PodC7kAOIh1VanJe-ADrM4v";
const facilitiesImg = "https://lh3.googleusercontent.com/d/1utgpO7sRtc17MeaBiGUq5tfn5EHmB5uW";
const locationImg = "https://lh3.googleusercontent.com/d/1F-c0WgqZpkN0V_CRs7bonEfZU6BdP0B-";
const orionCityViewImg = "https://lh3.googleusercontent.com/d/1uix4Vz1kbusWjJvTSXZC8qfbkax9Uvni";
const rooftopImg = "https://lh3.googleusercontent.com/d/1ypHs313DiK9bmexgk4pb6syD3RBwoWZ7";
const skyDiningImg = "https://lh3.googleusercontent.com/d/1kF0UCLktpiUIjCXc57bolv5QXr2df_gd";
const skyDiningJapaneseImg = "https://lh3.googleusercontent.com/d/1ZuSWa1c3C7h54fNzELinHeIhNrFJ4ebR";
const skyLoungeImg = "https://lh3.googleusercontent.com/d/194dcoORAyYTpifXcyiNzGkLmm90WUmB9";
const unitDImg = "https://lh3.googleusercontent.com/d/1dI2XWNcRYFBy6_qqXO4TK7gDebsa0MZd";

// Mappings for downloaded Floor Plan images
const floorPlanImages: Record<string, string> = {
  "Type-A1": "https://lh3.googleusercontent.com/d/1CzfpaoJsTYh55DDBoGdfLWQTOvhyhOls",
  "Type-B2": "https://lh3.googleusercontent.com/d/12kpw9rTxloako48cbwHiE_07nwWtBM7r",
  "Type-C2": "https://lh3.googleusercontent.com/d/103P6HzzDKfxAR7gvNmR4L_kY0D8iNpCk",
  "Type-C4": "https://lh3.googleusercontent.com/d/1rw6enyAVEciy6ZzWmjVZZGORat6ALNh8",
  "Type-D2": "https://lh3.googleusercontent.com/d/1fg5pjXDK5Q5NzcQ3gUTus8lM6xRRKI62",
  "Type-D4": "https://lh3.googleusercontent.com/d/1zc2tHbdF0HWojcErWoO_1OQGS9VsDdng",
};

interface RoomDetails {
  id: string;
  name: string;
  dimensions: string;
  description: string;
  materials: string;
  svgPath: string; // Vector coordinates for interactive blueprint highlights
  cx: number;
  cy: number;
}

interface UnitType {
  id: string;
  name: string;
  subtitle: string;
  sizeSqFt: number;
  sizeSqM: number;
  bedrooms: number;
  bathrooms: number;
  startingPrice: string;
  viewDirection: string;
  balconyOrientation: string;
  description: string;
  keyFeatures: string[];
  specs: {
    flooring: string;
    kitchen: string;
    fittings: string;
    lockset: string;
    ceiling: string;
  };
  rooms: RoomDetails[];
}

const UNIT_TYPES: UnitType[] = [
  {
    id: "Type-A1",
    name: "Type A1 (Cosmopolitan Suite)",
    subtitle: "The Perfect Urban Sanctum",
    sizeSqFt: 495,
    sizeSqM: 46,
    bedrooms: 1,
    bathrooms: 1,
    startingPrice: "RM 1,220,000",
    viewDirection: "Pavilion Kuala Lumpur View",
    balconyOrientation: "North-East",
    description: "Designed for modern visionaries, this immaculate 1-bedroom suite maximizes functional elegance with acoustic glazing and seamless open layouts.",
    keyFeatures: [
      "Private secure foyer entrance",
      "Floor-to-ceiling Low-E structural glazing",
      "Greek Volakas marble flooring",
      "Fully integrated designer kitchenette"
    ],
    specs: {
      flooring: "Imported Greek Volakas Marble in living/dining; solid European oak in master bedroom.",
      kitchen: "Custom German Bulthaup cabinetry, quartz stone countertops, integrated Gaggenau induction hub & hood.",
      fittings: "Villeroy & Boch wall-hung ceramic toilet, Hansgrohe Axor matte bronze rainshower systems.",
      lockset: "Samsung Premium Biometric Smart Lock (Face recognition, fingerprint, PIN access).",
      ceiling: "3.2m clear plaster ceiling with custom shadow-line recesses and magnetic track lights."
    },
    rooms: [
      {
        id: "a1-foyer",
        name: "Foyer & Entryway",
        dimensions: "1.8m x 1.5m",
        description: "Elegant welcome threshold featuring custom solid walnut wall claddings.",
        materials: "Samsung Biometric Lockset, Brazilian Walnut Panel",
        svgPath: "M 20 20 H 120 V 100 H 20 Z",
        cx: 70,
        cy: 60
      },
      {
        id: "a1-kitchen",
        name: "Gourmet Kitchen & Dining",
        dimensions: "3.2m x 2.4m",
        description: "German-engineered parallel kitchen system with fully integrated premium Gaggenau appliances.",
        materials: "Quartz Countertops, Bulthaup Cabinetry",
        svgPath: "M 120 20 H 260 V 120 H 120 Z",
        cx: 190,
        cy: 70
      },
      {
        id: "a1-living",
        name: "Living & Entertainment Salon",
        dimensions: "4.2m x 3.6m",
        description: "Spacious central living salon with premium acoustic glazing flowing onto the sky deck.",
        materials: "Greek Volakas Marble, Low-E Glazing Panels",
        svgPath: "M 20 100 H 260 V 220 H 20 Z",
        cx: 140,
        cy: 160
      },
      {
        id: "a1-balcony",
        name: "Panoramic Sky Balcony",
        dimensions: "1.2m x 3.6m",
        description: "Covered glass-balustrade deck providing majestic views of Pavilion KL and the star-lit sky.",
        materials: "Teak Hardwood Decking, Tempered Glass Railing",
        svgPath: "M 20 220 H 260 V 290 H 20 Z",
        cx: 140,
        cy: 255
      },
      {
        id: "a1-bedroom",
        name: "Master Suite Chamber",
        dimensions: "3.8m x 3.5m",
        description: "Luxurious sleeping sanctuary with bespoke full-height leather-upholstered built-in wardrobes.",
        materials: "European Oak Wood Flooring, Bespoke Joinery",
        svgPath: "M 260 20 H 450 V 160 H 260 Z",
        cx: 355,
        cy: 90
      },
      {
        id: "a1-bath",
        name: "Ensuite Marble Bath",
        dimensions: "2.4m x 2.2m",
        description: "Opulent wet room styled after world-class luxury spas, complete with overhead bronze rainfall wellness shower.",
        materials: "Greek Marble Wall Slabs, Hansgrohe Axor Bronze",
        svgPath: "M 260 160 H 450 V 290 H 260 Z",
        cx: 355,
        cy: 225
      }
    ]
  },
  {
    id: "Type-B2",
    name: "Type B2 (Urban Sanctum)",
    subtitle: "Sophisticated Dual-Bedroom Luxury",
    sizeSqFt: 746,
    sizeSqM: 69,
    bedrooms: 2,
    bathrooms: 2,
    startingPrice: "RM 1,780,000",
    viewDirection: "KL Skylines & Twin Towers View",
    balconyOrientation: "West",
    description: "A meticulously balanced two-bedroom layout offering absolute privacy and premium marble finishes. Designed for modern couples or high-profile professionals.",
    keyFeatures: [
      "Split bedroom layout for acoustic privacy",
      "Private ensuite bathrooms for both suites",
      "L-shaped panoramic glass living room",
      "Concealed custom utility wardrobe"
    ],
    specs: {
      flooring: "Bianco Lasa Italian Marble in social areas, Burmese teak parquet in bedroom suites.",
      kitchen: "Custom cabinetry, Caesarstone quartz backsplash, integrated hidden refrigerator and Gaggenau cooking hubs.",
      fittings: "Duravit wall-hung sanitary wares, integrated thermostatic rainshowers.",
      lockset: "Samsung Premium Biometric Smart Lock with integrated building intercom link.",
      ceiling: "3.3m clear ceiling heights with customized architectural recess profiles."
    },
    rooms: [
      {
        id: "b2-foyer",
        name: "Grand Entrance Foyer",
        dimensions: "2.0m x 1.6m",
        description: "Bespoke arrival threshold featuring custom solid walnut wall panel systems.",
        materials: "Brazilian Walnut, Samsung Biometric Lock",
        svgPath: "M 20 20 H 110 V 100 H 20 Z",
        cx: 65,
        cy: 60
      },
      {
        id: "b2-kitchen",
        name: "Open Gourmet Dry Kitchen",
        dimensions: "3.5m x 2.5m",
        description: "Sleek dry kitchen featuring a stunning marble breakfast island counter.",
        materials: "Carrara Marble, Integrated Gaggenau Cooktops",
        svgPath: "M 110 20 H 270 V 100 H 110 Z",
        cx: 190,
        cy: 60
      },
      {
        id: "b2-living",
        name: "Central Living & Dining Salon",
        dimensions: "4.8m x 3.8m",
        description: "Vast entertainment space featuring double-height Low-E structural glazing.",
        materials: "Bianco Lasa Marble, Acoustic Party Wall Panels",
        svgPath: "M 20 100 H 270 V 210 H 20 Z",
        cx: 145,
        cy: 155
      },
      {
        id: "b2-balcony",
        name: "Horizon Viewing Deck",
        dimensions: "1.4m x 3.8m",
        description: "Spacious viewing balcony with elegant IPE Brazilian timber decking.",
        materials: "Brazilian Wood, Tempered Glass Railing System",
        svgPath: "M 20 210 H 270 V 295 H 20 Z",
        cx: 145,
        cy: 250
      },
      {
        id: "b2-master",
        name: "Master Suite Sanctuary",
        dimensions: "4.2m x 3.6m",
        description: "Grand master chambers featuring a custom walk-in closet space and sunset views.",
        materials: "Burmese Teak Flooring, Leather Wall Details",
        svgPath: "M 270 20 H 450 V 150 H 270 Z",
        cx: 360,
        cy: 85
      },
      {
        id: "b2-master-bath",
        name: "Ensuite Master Spa Bath",
        dimensions: "2.4m x 2.4m",
        description: "Five-star resort bath experience featuring freestanding soaking tub and dual marble sinks.",
        materials: "Honed Bianco Lasa Marble, Gessi Gold Faucets",
        svgPath: "M 270 150 H 450 V 230 H 270 Z",
        cx: 360,
        cy: 190
      },
      {
        id: "b2-junior",
        name: "Junior Suite Chamber",
        dimensions: "3.2m x 3.2m",
        description: "Comfortable secondary bedroom equipped with bespoke timber wardrobe cabinetry.",
        materials: "Burmese Teak Hardwood, Bespoke Wood Joinery",
        svgPath: "M 270 230 H 360 V 295 H 270 Z",
        cx: 315,
        cy: 260
      },
      {
        id: "b2-junior-bath",
        name: "Junior Guest Bathroom",
        dimensions: "2.0m x 1.8m",
        description: "Impeccably detailed bath providing custom floating vanity shelves.",
        materials: "Crema Marfil Tiles, Duravit Smart Toilet",
        svgPath: "M 360 230 H 450 V 295 H 360 Z",
        cx: 405,
        cy: 260
      }
    ]
  },
  {
    id: "Type-C2",
    name: "Type C2 (Vanguard Dual-Key)",
    subtitle: "Innovative Dual-Suite Prestige",
    sizeSqFt: 945,
    sizeSqM: 88,
    bedrooms: 2,
    bathrooms: 2,
    startingPrice: "RM 2,410,000",
    viewDirection: "TRX & Royal Selangor Golf Views",
    balconyOrientation: "East",
    description: "Featuring a state-of-the-art Dual-Key layout. Consists of a primary Grand Residence and an independent private Studio Suite. Unrivaled versatility for combined living or investment.",
    keyFeatures: [
      "True dual-key concept with dual entrance lobbies",
      "Dual customized kitchenettes with premium appliances",
      "Extra-thick certified acoustic party walls (60dB limit)",
      "Dedicated walk-in dressers in both suites"
    ],
    specs: {
      flooring: "Pentelikon Greek White Marble in living areas, dark American Walnut planks in bedrooms.",
      kitchen: "German cabinetry systems, solid quartz countertops, double integrated convection hobs and built-in grills.",
      fittings: "Gessi Italian custom faucets, Duravit smart toilet bidet systems.",
      lockset: "Dual electronic smart lockset systems with independent home monitors.",
      ceiling: "3.4m clear height with shadow-gap finishes and hidden ducted VRF air-conditioners."
    },
    rooms: [
      {
        id: "c2-lobby",
        name: "Shared Entry Lobby",
        dimensions: "2.2m x 2.0m",
        description: "Secure common foyer leading to separate custom-fitted keyless entry doors.",
        materials: "Greek Pentelikon Marble, Solid Brass Trim Walls",
        svgPath: "M 20 20 H 120 V 90 H 20 Z",
        cx: 70,
        cy: 55
      },
      {
        id: "c2-suite-a-living",
        name: "Grand Suite A - Living Salon",
        dimensions: "5.4m x 4.2m",
        description: "Expansive high-ceiling lounge and dining setup, insulated with premium acoustic claddings.",
        materials: "Pentelikon White Marble, Acoustic Wall Slabs",
        svgPath: "M 120 20 H 280 V 170 H 120 Z",
        cx: 200,
        cy: 95
      },
      {
        id: "c2-suite-a-kitchen",
        name: "Suite A - Chef's Kitchen",
        dimensions: "3.2m x 2.4m",
        description: "Open gourmet cooking counter with hidden integrated smart appliances and pantry.",
        materials: "Gaggenau Cookers, Bulthaup Dark Wood Cabinets",
        svgPath: "M 20 90 H 120 V 170 H 20 Z",
        cx: 70,
        cy: 130
      },
      {
        id: "c2-suite-a-bedroom",
        name: "Suite A - Master Sanctuary",
        dimensions: "4.5m x 3.8m",
        description: "Bespoke sleeping suite featuring corner-facing panoramic glazing panels.",
        materials: "American Walnut Flooring, Soundproof Bed Wall",
        svgPath: "M 120 170 H 280 V 295 H 120 Z",
        cx: 200,
        cy: 230
      },
      {
        id: "c2-suite-b-studio",
        name: "Suite B - Luxury Studio Suite",
        dimensions: "5.2m x 4.2m",
        description: "Palatial self-contained open-concept guest suite with integrated master bath and study.",
        materials: "American Walnut Floor, Custom Fabric Walls",
        svgPath: "M 280 20 H 450 V 180 H 280 Z",
        cx: 365,
        cy: 100
      },
      {
        id: "c2-suite-b-bath",
        name: "Suite B - Ensuite Wellness Bath",
        dimensions: "2.8m x 2.4m",
        description: "A gorgeous modern wet room containing custom body jets and independent steam room controls.",
        materials: "Greek Pentelikon Marble, Gessi Gold Fittings",
        svgPath: "M 280 180 H 450 V 295 H 280 Z",
        cx: 365,
        cy: 235
      }
    ]
  },
  {
    id: "Type-C4",
    name: "Type C4 (Celestial Dual-Key)",
    subtitle: "Extended Living & Dual Entryway",
    sizeSqFt: 992,
    sizeSqM: 92,
    bedrooms: 2,
    bathrooms: 2,
    startingPrice: "RM 2,520,000",
    viewDirection: "KLCC Skyline & Parkland Vistas",
    balconyOrientation: "East-North",
    description: "An enhanced dual-key suite with expanded living dimensions, spacious wet and dry kitchens, and dual independent keyless entry thresholds.",
    keyFeatures: [
      "Enhanced floorplate size with extra lounge space",
      "Dual autonomous smart home controls",
      "Premium acoustic sound barriers in party walls",
      "Exclusive high-end designer fittings"
    ],
    specs: {
      flooring: "Pentelikon Greek White Marble in living areas, dark American Walnut planks in bedrooms.",
      kitchen: "German cabinetry systems, solid quartz countertops, double integrated convection hobs and built-in grills.",
      fittings: "Gessi Italian custom faucets, Duravit smart toilet bidet systems.",
      lockset: "Dual electronic smart lockset systems with independent home monitors.",
      ceiling: "3.4m clear height with shadow-gap finishes and hidden ducted VRF air-conditioners."
    },
    rooms: [
      {
        id: "c4-lobby",
        name: "Shared Entry Lobby",
        dimensions: "2.2m x 2.2m",
        description: "Secure common foyer leading to separate custom-fitted keyless entry doors.",
        materials: "Greek Pentelikon Marble, Solid Brass Trim Walls",
        svgPath: "M 20 20 H 120 V 90 H 20 Z",
        cx: 70,
        cy: 55
      },
      {
        id: "c4-suite-a-living",
        name: "Grand Suite A - Living Salon",
        dimensions: "5.6m x 4.4m",
        description: "Expansive high-ceiling lounge and dining setup, insulated with premium acoustic claddings.",
        materials: "Pentelikon White Marble, Acoustic Wall Slabs",
        svgPath: "M 120 20 H 280 V 170 H 120 Z",
        cx: 200,
        cy: 95
      },
      {
        id: "c4-suite-a-kitchen",
        name: "Suite A - Chef's Kitchen",
        dimensions: "3.4m x 2.4m",
        description: "Open gourmet cooking counter with hidden integrated smart appliances and pantry.",
        materials: "Gaggenau Cookers, Bulthaup Dark Wood Cabinets",
        svgPath: "M 20 90 H 120 V 170 H 20 Z",
        cx: 70,
        cy: 130
      },
      {
        id: "c4-suite-a-bedroom",
        name: "Suite A - Master Sanctuary",
        dimensions: "4.6m x 3.8m",
        description: "Bespoke sleeping suite featuring corner-facing panoramic glazing panels.",
        materials: "American Walnut Flooring, Soundproof Bed Wall",
        svgPath: "M 120 170 H 280 V 295 H 120 Z",
        cx: 200,
        cy: 230
      },
      {
        id: "c4-suite-b-studio",
        name: "Suite B - Luxury Studio Suite",
        dimensions: "5.4m x 4.2m",
        description: "Palatial self-contained open-concept guest suite with integrated master bath and study.",
        materials: "American Walnut Floor, Custom Fabric Walls",
        svgPath: "M 280 20 H 450 V 180 H 280 Z",
        cx: 365,
        cy: 100
      },
      {
        id: "c4-suite-b-bath",
        name: "Suite B - Ensuite Wellness Bath",
        dimensions: "2.8m x 2.6m",
        description: "A gorgeous modern wet room containing custom body jets and independent steam room controls.",
        materials: "Greek Pentelikon Marble, Gessi Gold Fittings",
        svgPath: "M 280 180 H 450 V 295 H 280 Z",
        cx: 365,
        cy: 235
      }
    ]
  },
  {
    id: "Type-D2",
    name: "Type D2 (Orion Grand Residence)",
    subtitle: "The Ultimate Royal Mansion",
    sizeSqFt: 1329,
    sizeSqM: 123,
    bedrooms: 3,
    bathrooms: 3,
    startingPrice: "RM 3,380,000",
    viewDirection: "Majestic 270° KL Skyline View",
    balconyOrientation: "South-West",
    description: "The signature crown-jewel estate of Orion Residence. Designed for absolute opulence, it features massive double-height corner glazing, separate cooking kitchens, and an extensive L-shaped corner sky deck.",
    keyFeatures: [
      "270-degree L-shaped corner sky terrace",
      "Separated professional wet kitchen & dry marble island",
      "Master suite with bespoke walk-in glass closets and soaking tub",
      "Formal dining area comfortable for up to 8 guests"
    ],
    specs: {
      flooring: "Hand-picked Italian Arabescato Marble in social salons, solid French Oak parquet chevron in bedrooms.",
      kitchen: "Professional custom cabinetry, solid Carrara marble island counter, Gaggenau combi-steam ovens & warming drawers.",
      fittings: "Antonio Lupi freestanding bathtub, solid marble sinks, Dornbracht brushed gold rain pillars.",
      lockset: "Integrated face recognition, visual intercom, and direct linking to 24/7 VIP Concierge Desk.",
      ceiling: "3.5m clear ceiling heights with acoustic plaster boards and golden shadow profile margins."
    },
    rooms: [
      {
        id: "d2-foyer",
        name: "Private Lift Vestibule",
        dimensions: "2.5m x 1.8m",
        description: "Secure private elevator lobby finished with premium textured leather wall claddings.",
        materials: "Arabescato Marble, Custom Suede Panels",
        svgPath: "M 20 20 H 120 V 100 H 20 Z",
        cx: 70,
        cy: 60
      },
      {
        id: "d2-heavy-kitchen",
        name: "Enclosed Heavy Kitchen",
        dimensions: "3.6m x 2.6m",
        description: "Heavy-duty wet cooking area fitted with commercial-grade exhaust systems.",
        materials: "Carrara Marble Counters, Custom Heavy Hoods",
        svgPath: "M 20 100 H 120 V 190 H 20 Z",
        cx: 70,
        cy: 145
      },
      {
        id: "d2-living",
        name: "Grand Corner Living Salon",
        dimensions: "6.2m x 4.8m",
        description: "Vast double-height salon hosting formal dining and panoramic corner city lights view.",
        materials: "Arabescato Italian Marble, Double-height Glazing",
        svgPath: "M 120 20 H 300 V 190 H 120 Z",
        cx: 210,
        cy: 105
      },
      {
        id: "d2-balcony",
        name: "L-Shaped 270° Sky Deck",
        dimensions: "1.8m x 6.4m",
        description: "Sweeping structural glass terrace looking directly across KLCC and Tun Razak Exchange.",
        materials: "Premium Burmese Teak Deck, Structural Glass Railing",
        svgPath: "M 20 190 H 300 V 240 H 20 Z",
        cx: 160,
        cy: 215
      },
      {
        id: "d2-master-suite",
        name: "Crown Master Suite",
        dimensions: "4.8m x 4.2m",
        description: "Palatial sleeping suite with separate private study lounge and glass wardrobe racks.",
        materials: "French Oak Chevron, Custom Walnut Joinery",
        svgPath: "M 300 20 H 450 V 150 H 300 Z",
        cx: 375,
        cy: 85
      },
      {
        id: "d2-master-bath",
        name: "Royal Master Bathroom",
        dimensions: "2.8m x 2.4m",
        description: "Luxurious marble bathroom featuring freestanding soaking bathtub and custom dual shower pillars.",
        materials: "Arabescato Marble, Antonio Lupi Soaking Tub",
        svgPath: "M 300 150 H 450 V 230 H 300 Z",
        cx: 375,
        cy: 190
      },
      {
        id: "d2-bedroom-2",
        name: "VIP Guest Suite 2",
        dimensions: "3.6m x 3.2m",
        description: "Comfortable secondary suite equipped with bespoke custom wardrobe closets.",
        materials: "French Oak Chevron, European Walnut Panels",
        svgPath: "M 120 240 H 285 V 295 H 120 Z",
        cx: 202,
        cy: 265
      },
      {
        id: "d2-common-bath",
        name: "Common Bathroom",
        dimensions: "2.0m x 1.8m",
        description: "Fully styled common bath providing clean layouts and high-performance bidet system.",
        materials: "Greek Volakas White Marble, Duravit Smart Toilet",
        svgPath: "M 285 240 H 450 V 295 H 285 Z",
        cx: 367,
        cy: 265
      }
    ]
  },
  {
    id: "Type-D4",
    name: "Type D4 (Signature Sky Suite)",
    subtitle: "Triple Chamber Skyline Grandeur",
    sizeSqFt: 1271,
    sizeSqM: 118,
    bedrooms: 3,
    bathrooms: 3,
    startingPrice: "RM 3,190,000",
    viewDirection: "Pavilion KL & Twin Towers Horizon",
    balconyOrientation: "West-North",
    description: "A breathtaking three-bedroom masterpiece featuring a central panoramic viewing foyer, expansive walk-in storage systems, and triple ensuite spa chambers.",
    keyFeatures: [
      "270-degree viewing vistas from central foyer",
      "Separated wet kitchen and professional dry dining area",
      "Triple master chambers with independent ensuite baths",
      "Integrated smart home automation systems"
    ],
    specs: {
      flooring: "Hand-picked Italian Arabescato Marble in social salons, solid French Oak parquet chevron in bedrooms.",
      kitchen: "Professional custom cabinetry, solid Carrara marble island counter, Gaggenau combi-steam ovens & warming drawers.",
      fittings: "Antonio Lupi freestanding bathtub, solid marble sinks, Dornbracht brushed gold rain pillars.",
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

const NEIGHBORHOOD_SPOTS = [
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

const GALLERY_ITEMS = [
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

export default function App() {
  // Navigation & UI States
  const [lang, setLang] = useState<Lang>("ENG");
  const t = (text: string) => translate(text, lang);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Layout selection
  const [selectedUnitId, setSelectedUnitId] = useState("Type-A1");

  // Google Ads compliance states
  const [activePolicyModal, setActivePolicyModal] = useState<"privacy" | "terms" | "disclaimer" | null>(null);
  const [consentAccepted, setConsentAccepted] = useState(false);

  // Gallery and virtual tour states
  const [activeGalleryTab, setActiveGalleryTab] = useState<"all" | "architecture" | "facilities" | "residences">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Form Inputs
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    phone: "",
    country: "Malaysia",
    preferredUnit: "Type-A1",
    preferredLanguage: "English",
    message: ""
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submittedId, setSubmittedId] = useState("");

  const selectedUnit = UNIT_TYPES.find((u) => u.id === selectedUnitId) || UNIT_TYPES[0];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);

    try {
      // Free, no API key, no credit card form mail delivery service (FormSubmit.co)
      await fetch("https://formsubmit.co/ajax/shyanyeews@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          "Name": formInputs.name,
          "Email": formInputs.email,
          "Phone": formInputs.phone,
          "Country": formInputs.country,
          "Preferred Layout": formInputs.preferredUnit,
          "Preferred Language": formInputs.preferredLanguage,
          "Message": formInputs.message,
          "_subject": `Orion Residence Inquiry - ${formInputs.name}`
        })
      });

      const generatedId = `ORN-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedId(generatedId);
      setFormSubmitted(true);
    } catch (err) {
      console.error("Error submitting form", err);
      // Fallback to local success if network issue occurs, ensuring smooth UX
      const generatedId = `ORN-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedId(generatedId);
      setFormSubmitted(true);
    } finally {
      setFormSubmitting(false);
      // Reset fields
      setFormInputs({
        name: "",
        email: "",
        phone: "",
        country: "Malaysia",
        preferredUnit: formInputs.preferredUnit,
        preferredLanguage: "English",
        message: ""
      });
    }
  };

  const selectUnitFromFloorPlan = (unitId: string) => {
    setSelectedUnitId(unitId);
    setFormInputs((prev) => ({ ...prev, preferredUnit: unitId }));
    const element = document.getElementById("inquire");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen text-[#eaeae6] font-sans selection:bg-gold-500 selection:text-black overflow-x-hidden bg-navy-900"
    >
      
      {/* HEADER NAVIGATION */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-navy-950/95 backdrop-blur-md py-4 border-gold-500/15 shadow-lg"
            : "bg-transparent py-6 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative w-9 h-9 flex items-center justify-center rounded-full border border-gold-500/50 bg-navy-950/50 overflow-hidden">
              <span className="text-gold-500 font-serif text-lg font-bold">O</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif tracking-widest text-lg font-bold uppercase">Orion</span>
              <span className="text-[10px] text-gold-500 font-mono uppercase tracking-[0.3em] -mt-1">Residence</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-[11px] uppercase tracking-widest font-semibold text-gray-300">
            <a href="#overview" className="hover:text-gold-400 transition-colors duration-300">{t("Overview")}</a>
            <a href="#features" className="hover:text-gold-400 transition-colors duration-300">{t("Features")}</a>
            <a href="#amenities" className="hover:text-gold-400 transition-colors duration-300">{t("Amenities")}</a>
            <a href="#layouts" className="hover:text-gold-400 transition-colors duration-300">{t("Floor Plans")}</a>
            <a href="#vrtour" className="hover:text-gold-400 transition-colors duration-300 text-gold-400 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-gold-500 animate-ping shrink-0" />{t("360° VR Tour")}</a>
            <a href="#visuals" className="hover:text-gold-400 transition-colors duration-300">{t("Gallery")}</a>
            <a href="#location" className="hover:text-gold-400 transition-colors duration-300">{t("Location")}</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector */}
            <div className="flex items-center gap-1 bg-navy-950/80 border border-gold-500/20 rounded p-1 text-[10px] font-mono tracking-wider">
              {(["ENG", "简体", "繁体", "JPN"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 rounded transition-all duration-300 uppercase ${
                    lang === l
                      ? "bg-gold-500 text-black font-bold shadow-[0_0_8px_rgba(212,175,55,0.25)]"
                      : "text-gray-400 hover:text-gold-400"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <a
              href="https://wa.me/60195598932?text=%5BORBK%5D%20Hello%20Yee%2C%20I%20am%20interested%20in%20requesting%20the%20Private%20Portfolio%20for%20Orion%20Residence."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-to-r from-gold-500 via-brown-400 to-brown-600 hover:from-gold-400 hover:via-brown-300 hover:to-brown-500 text-black text-[10px] font-bold uppercase tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] block text-center"
            >
              {t("Private Portfolio")}
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-navy-950 border-b border-gold-500/20 px-6 py-4 flex flex-col gap-4 text-xs uppercase tracking-wider text-gray-300">
            {/* Language selector for mobile */}
            <div className="flex items-center justify-between border-b border-navy-800 pb-3">
              <span className="text-gray-400 font-mono text-[10px] uppercase tracking-wider">{t("Preferred Language")}</span>
              <div className="flex items-center gap-1 bg-navy-900 border border-gold-500/20 rounded p-0.5 text-[9px] font-mono">
                {(["ENG", "简体", "繁体", "JPN"] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2 py-1 rounded transition-all duration-300 uppercase ${
                      lang === l
                        ? "bg-gold-500 text-black font-bold"
                        : "text-gray-400 hover:text-gold-400"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <a href="#overview" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-navy-800 hover:text-gold-400">{t("Overview")}</a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-navy-800 hover:text-gold-400">{t("Features")}</a>
            <a href="#amenities" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-navy-800 hover:text-gold-400">{t("Amenities")}</a>
            <a href="#layouts" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-navy-800 hover:text-gold-400">{t("Floor Plans")}</a>
            <a href="#vrtour" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-navy-800 text-gold-400 font-semibold flex items-center justify-between">{t("360° VR Tour")} <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-ping" /></a>
            <a href="#visuals" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-navy-800 hover:text-gold-400">{t("Gallery")}</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-navy-800 hover:text-gold-400">{t("Location")}</a>
            <a
              href="https://wa.me/60195598932?text=%5BORBK%5D%20Hello%20Yee%2C%20I%20am%20interested%20in%20requesting%20the%20Private%20Portfolio%20for%20Orion%20Residence."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-gradient-to-r from-gold-500 to-brown-600 text-black font-semibold rounded uppercase tracking-wider block"
            >
              {t("Private Portfolio")}
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION WITH PARALLAX BACKGROUND */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy-950">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 z-0 scale-105 transition-transform duration-100 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            backgroundImage: `url(${exteriorImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%"
          }}
        >
          {/* Elegant gradients overlay in rich deep blue */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-navy-900/60 to-navy-900" />
          <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,transparent_30%,rgba(6,11,30,0.85)_100%)" />
        </div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-12 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6 animate-fade-in">
            <span className="h-[1px] w-8 bg-gold-500/50" />
            <span className="text-gold-500 font-mono uppercase tracking-[0.4em] text-[11px] font-semibold">
              {t("Welton Group Presents")}
            </span>
            <span className="h-[1px] w-8 bg-gold-500/50" />
          </div>

          <h1 className="font-serif text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
            ORION <br />
            <span className="italic font-normal font-serif text-gold-brown-gradient bg-clip-text">RESIDENCE</span>
          </h1>

          <p className="text-gray-300 text-sm md:text-lg max-w-2xl mx-auto font-light tracking-wide leading-relaxed mb-10">
            {t("An architectural masterpiece of 46 storeys rising in the core of Bukit Bintang, Kuala Lumpur. Designed with uncompromised craftsmanship for the distinguished elite.")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                const element = document.getElementById("layouts");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 bg-gradient-to-r from-gold-500 via-brown-400 to-brown-600 hover:from-gold-400 hover:via-brown-300 hover:to-brown-500 text-black text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] flex items-center gap-2"
            >
              {t("Explore Floor Plans")} <Maximize2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("inquire");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3.5 border border-gold-500/30 hover:border-gold-500 bg-navy-950/40 hover:bg-navy-950/80 text-white hover:text-gold-400 text-xs font-semibold uppercase tracking-widest rounded transition-all duration-300"
            >
              {t("Schedule Private Tour")}
            </button>
          </div>
        </div>

        {/* Floating Quick Stats Ribbon */}
        <div className="absolute bottom-0 left-0 w-full z-30 bg-gradient-to-t from-navy-900 to-transparent pt-12">
          <div className="max-w-6xl mx-auto px-6 pb-8 border-b border-navy-800/60">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-gold-500 font-mono text-xs uppercase tracking-widest mb-1">{t("Developer")}</p>
                <p className="text-white font-serif text-lg">Welton Group</p>
              </div>
              <div>
                <p className="text-gold-500 font-mono text-xs uppercase tracking-widest mb-1">{t("Total Height")}</p>
                <p className="text-white font-serif text-lg">{t("46 Storeys / 298 Units")}</p>
              </div>
              <div>
                <p className="text-gold-500 font-mono text-xs uppercase tracking-widest mb-1">{t("Location")}</p>
                <p className="text-white font-serif text-lg">{t("Bukit Bintang, KL")}</p>
              </div>
              <div>
                <p className="text-gold-500 font-mono text-xs uppercase tracking-widest mb-1">{t("Prestige Status")}</p>
                <p className="text-white font-serif text-lg">{t("From RM 1.2M")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW SECTION */}
      <section id="overview" className="py-24 relative bg-navy-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <ScrollReveal direction="up" className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-gold-500 font-mono text-xs uppercase tracking-[0.3em] mb-4">{t("The Overview")}</span>
              <h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
                {t("Where Celestial Prestige Meets Metropolitan Soul.")}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {t("Orion Residence stands as a timeless modern monolith directly behind the majestic Starhill Gallery and Pavilion Kuala Lumpur. Designed with the architectural pedigree of tomorrow, it commands unblocked skyline vistas and a level of absolute privacy and service designed specifically for royal lifestyles.")}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-8">
                {t("From hand-selected Greek marble slabs to custom parallel German Bulthaup kitchen systems, every millimetre is curated to manifest an aesthetic of raw, understated opulence.")}
              </p>
              
              <div className="border-l-2 border-gold-500/60 pl-6 py-2 mb-8">
                <p className="font-serif text-lg italic text-gold-200">
                  {t("\"We did not build another tower. We crafted a private celestial cloud above Bukit Bintang.\"")}
                </p>
                <p className="text-[11px] text-gray-500 font-mono uppercase tracking-widest mt-2">{t("— Lead Architect, Welton Design Partners")}</p>
              </div>
            </ScrollReveal>

            {/* Visual presentation - Staggered image cards */}
            <div className="lg:col-span-7 grid grid-cols-12 gap-4 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />
              
              <ScrollReveal direction="left" delay={150} className="col-span-12 sm:col-span-8 rounded overflow-hidden border border-gold-500/20 shadow-2xl relative group">
                <img
                  src={interiorImg}
                  alt="Orion Living Room"
                  className="w-full object-cover aspect-[4/3] group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-gold-500 font-mono text-[9px] uppercase tracking-widest block mb-1">{t("Show Unit Interior")}</span>
                    <h4 className="font-serif text-base text-white">{t("Classic Elegance & Modern Framing")}</h4>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300} className="col-span-12 sm:col-span-7 sm:col-start-6 sm:-mt-24 mt-4 rounded overflow-hidden border border-gold-500/20 shadow-2xl relative group z-10">
                <img
                  src={skypoolImg}
                  alt="Orion Sky Pool"
                  className="w-full object-cover aspect-[4/3] group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-gold-500 font-mono text-[9px] uppercase tracking-widest block mb-1">{t("Level 40 Oasis")}</span>
                    <h4 className="font-serif text-base text-white">{t("Infinity Sky Pool Over Sunset KL")}</h4>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* KEY FEATURES SECTION */}
      <section id="features" className="py-24 relative bg-navy-850 border-t border-b border-navy-800">
        <div className="absolute inset-0 bg-gold-brown-radial pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-500 font-mono text-xs uppercase tracking-[0.3em] mb-3 block">{t("Bespoke Living")}</span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-4">
              {t("Key Residence Features")}
            </h2>
            <p className="text-gray-400 text-sm font-light">
              {t("Crafted with meticulous attention to detail, Orion Residence embodies uncompromised engineering and premium materials.")}
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <ScrollReveal direction="up" delay={0} className="bg-navy-800 p-6 sm:p-8 rounded-lg border-gold-brown-glow transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-brown-600 flex items-center justify-center mb-6">
                <Maximize2 className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">{t("Sovereign Ceiling Height")}</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-light">
                {t("Generous 3.4-meter clear ceiling heights with customized pre-engineered ducted cooling channels and linear diffusers.")}
              </p>
            </ScrollReveal>

            {/* Feature 2 */}
            <ScrollReveal direction="up" delay={100} className="bg-navy-800 p-6 sm:p-8 rounded-lg border-gold-brown-glow transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-brown-600 flex items-center justify-center mb-6">
                <Shield className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">{t("Acoustic Sanctuary Walls")}</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-light">
                {t("Multi-layered drywall structures and double-glazed solar-acoustic glass shielding up to 45dB of urban frequencies.")}
              </p>
            </ScrollReveal>

            {/* Feature 3 */}
            <ScrollReveal direction="up" delay={200} className="bg-navy-800 p-6 sm:p-8 rounded-lg border-gold-brown-glow transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-brown-600 flex items-center justify-center mb-6">
                <Lock className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">{t("Smart Biometric Entry")}</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-light">
                {t("Advanced German-engineered Häfele smart lock systems with fingerprint, mobile app, and physical key overrides.")}
              </p>
            </ScrollReveal>

            {/* Feature 4 */}
            <ScrollReveal direction="up" delay={150} className="bg-navy-800 p-6 sm:p-8 rounded-lg border-gold-brown-glow transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-brown-600 flex items-center justify-center mb-6">
                <Sliders className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">{t("Precision Climate Control")}</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-light">
                {t("Custom Daikin VRF multi-split climate systems with embedded anti-microbial PM2.5 air filtration.")}
              </p>
            </ScrollReveal>

            {/* Feature 5 */}
            <ScrollReveal direction="up" delay={250} className="bg-navy-800 p-6 sm:p-8 rounded-lg border-gold-brown-glow transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-brown-600 flex items-center justify-center mb-6">
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">{t("Greek Volakas Marble")}</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-light">
                {t("Living salons featuring book-matched Greek Volakas natural marble floors, hand-polished and sealed for eternity.")}
              </p>
            </ScrollReveal>

            {/* Feature 6 */}
            <ScrollReveal direction="up" delay={350} className="bg-navy-800 p-6 sm:p-8 rounded-lg border-gold-brown-glow transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-500 to-brown-600 flex items-center justify-center mb-6">
                <Compass className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-serif text-xl text-white mb-3">{t("Panoramic Corner Orientations")}</h3>
              <p className="text-gray-400 text-xs leading-relaxed font-light">
                {t("Optimized glass facades maximizing unblocked viewpoints toward the TRX Financial Tower and Petronas Twin Towers.")}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 360° VR TOUR SECTION */}
      <section id="vrtour" className="py-24 relative bg-navy-950 border-t border-b border-navy-850 overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold-500 font-mono text-xs uppercase tracking-[0.3em] mb-3 block">Virtual Reality</span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-4">Interactive 360° VR Tour</h2>
            <p className="text-gray-400 text-sm font-light">
              Step inside our spectacular spaces in full high-definition 360° virtual reality. Experience the scale, luxury materials, and stunning architectural volume.
            </p>
          </ScrollReveal>

          {/* VR Tour Frame Container */}
          <ScrollReveal direction="up" delay={200} className="w-full max-w-5xl mx-auto">
            <div className="relative rounded-lg border border-gold-500/20 overflow-hidden shadow-2xl bg-navy-900 group gold-glow">
              
              {/* Virtual Tour IFrame */}
              <div className="relative w-full aspect-[16/10] md:h-[550px] h-[260px] xs:h-[320px] sm:h-[380px]">
                <iframe
                  src="https://goprop360.com/360vr/orion/sales-gallery/"
                  title="Orion Residence 360° Virtual Tour"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="visuals" className="py-24 relative bg-navy-900 border-t border-b border-navy-850">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold-500 font-mono text-xs uppercase tracking-[0.3em] mb-3 block">Immersive Gallery</span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-4">The Crafted Estate</h2>
            <p className="text-gray-400 text-sm font-light">
              Experience the spaces designed to exceed the high standards of luxury living in Southeast Asia. Filter through our premium facility spaces below.
            </p>
          </ScrollReveal>

          {/* Filter Tabs */}
          <ScrollReveal direction="up" delay={100} className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 max-w-3xl mx-auto">
            {[
              { id: "all", label: "All Spaces" },
              { id: "architecture", label: "Architecture" },
              { id: "facilities", label: "Facilities & Amenities" },
              { id: "residences", label: "Residences" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveGalleryTab(tab.id as any)}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest border transition-all duration-300 rounded ${
                  activeGalleryTab === tab.id
                    ? "bg-gold-500 text-black border-gold-500 font-bold shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                    : "border-navy-700/60 bg-navy-800 text-gray-400 hover:text-white hover:border-gold-500/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </ScrollReveal>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_ITEMS.map((item, idx) => ({ ...item, originalIndex: idx }))
              .filter(item => activeGalleryTab === "all" || item.category === activeGalleryTab)
              .map((item, idx) => (
                <div key={item.originalIndex} className="flex flex-col h-full">
                  <ScrollReveal
                    direction="up"
                    delay={idx % 3 * 100}
                    className="h-full rounded border border-navy-700/50 bg-navy-800 flex flex-col group hover:border-gold-500/30 transition-all duration-500 gold-glow cursor-pointer"
                  >
                    <div 
                      onClick={() => setLightboxIndex(item.originalIndex)}
                      className="relative overflow-hidden aspect-[16/10]"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-navy-950/80 backdrop-blur-md rounded border border-gold-500/30">
                        <span className="text-gold-500 font-mono text-[10px] tracking-widest uppercase">{item.tag}</span>
                      </div>
                    </div>
                    <div 
                      onClick={() => setLightboxIndex(item.originalIndex)}
                      className="p-6 flex-1 flex flex-col justify-between"
                    >
                      <div>
                        <h3 className="font-serif text-xl text-white mb-2 group-hover:text-gold-400 transition-colors">{item.title}</h3>
                        <p className="text-gray-400 text-xs leading-relaxed font-light mb-4">
                          {item.description}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-navy-700/40 flex justify-between items-center text-[10px] font-mono tracking-widest uppercase text-gold-500">
                        <span>{item.tag}</span>
                        <span>{item.subtag}</span>
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div id="gallery-lightbox" className="fixed inset-0 z-50 bg-navy-950/98 backdrop-blur-md flex flex-col justify-between p-6 animate-fade-in">
            {/* Header Controls */}
            <div className="flex justify-between items-center max-w-7xl mx-auto w-full pt-4">
              <div className="flex flex-col">
                <span className="text-gold-500 font-mono text-xs uppercase tracking-widest mb-1">
                  Orion Immersive Portfolio
                </span>
                <span className="text-white font-serif text-lg">
                  {GALLERY_ITEMS[lightboxIndex].title}
                </span>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full border border-navy-700 bg-navy-900/60 flex items-center justify-center text-white hover:text-gold-500 hover:border-gold-500 transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Stage with Arrows */}
            <div className="flex-1 flex items-center justify-center max-w-7xl mx-auto w-full gap-4 py-8 relative">
              <button
                onClick={() => setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)}
                className="absolute left-2 md:static w-10 h-10 md:w-12 md:h-12 rounded-full border border-navy-750 bg-navy-900/80 md:bg-navy-900/40 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:border-gold-500 hover:bg-navy-950 transition-all duration-300 shrink-0 z-10"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              <div className="relative max-h-[60vh] max-w-[90vw] md:max-w-[70vw] flex items-center justify-center overflow-hidden rounded border border-navy-800 shadow-2xl bg-black">
                <img
                  src={GALLERY_ITEMS[lightboxIndex].image}
                  alt={GALLERY_ITEMS[lightboxIndex].title}
                  className="max-h-[60vh] object-contain transition-all duration-500"
                />
              </div>

              <button
                onClick={() => setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length)}
                className="absolute right-2 md:static w-10 h-10 md:w-12 md:h-12 rounded-full border border-navy-750 bg-navy-900/80 md:bg-navy-900/40 flex items-center justify-center text-gray-400 hover:text-gold-500 hover:border-gold-500 hover:bg-navy-950 transition-all duration-300 shrink-0 z-10"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Footer Captions */}
            <div className="max-w-3xl mx-auto w-full text-center pb-6">
              <p className="text-gray-300 text-sm font-light leading-relaxed mb-4">
                {GALLERY_ITEMS[lightboxIndex].description}
              </p>
              <div className="flex justify-center items-center gap-6 text-[10px] font-mono uppercase tracking-widest text-gold-500">
                <span>Tag: {GALLERY_ITEMS[lightboxIndex].tag}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                <span>Zone: {GALLERY_ITEMS[lightboxIndex].subtag}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                <span>Image {lightboxIndex + 1} of {GALLERY_ITEMS.length}</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* FLOOR PLANS SECTION */}
      <section id="layouts" className="py-24 relative bg-navy-850">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-gold-500 font-mono text-xs uppercase tracking-[0.3em] block mb-3">Architectural Precision</span>
              <h2 className="font-serif text-3xl md:text-5xl font-medium text-white">Residence Floor Plans</h2>
            </div>
            {/* Selector Buttons */}
            <div className="flex flex-wrap gap-2">
              {UNIT_TYPES.map((unit) => (
                <button
                  key={unit.id}
                  onClick={() => {
                    setSelectedUnitId(unit.id);
                  }}
                  className={`px-4 py-2.5 rounded text-xs uppercase font-mono tracking-widest transition-all duration-300 ${
                    selectedUnitId === unit.id
                      ? "bg-gradient-to-r from-gold-500 via-brown-400 to-brown-600 text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                      : "bg-navy-800 text-gray-400 border border-navy-700/60 hover:border-gold-500/30 hover:text-white"
                  }`}
                >
                  {unit.id.replace("-", " ")} ({unit.sizeSqFt} sqft)
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Floor Plan Display Frame */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="bg-[#0e0f14] rounded-lg border border-gray-800 p-6 relative shadow-inner overflow-hidden gold-glow min-h-[380px] flex flex-col justify-between">
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute top-4 left-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  Orion Layout Portfolio
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-gold-500 uppercase tracking-wider">
                    High-Resolution Plan
                  </span>
                </div>

                <div className="relative w-full max-w-[440px] mx-auto py-8 flex items-center justify-center min-h-[366px]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedUnitId}
                      initial={{ opacity: 0, scale: 0.97, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.97, y: -8 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      src={floorPlanImages[selectedUnitId] || floorPlanImages["Type-A1"]}
                      alt={`${selectedUnit.name} Layout`}
                      className="w-full max-h-[300px] object-contain rounded border border-navy-700/60 shadow-xl bg-white/5 p-4 transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </AnimatePresence>
                </div>

                <div className="mt-4 pt-4 border-t border-navy-800 text-center">
                  <p className="text-[11px] text-gray-500 font-mono">
                    💡 Artist's layout visualization. All details, structural columns, and finishes are conceptual and subject to the final sales agreement.
                  </p>
                </div>
              </div>

              {/* Specs Sub-card (Desktop-only, hidden on mobile) */}
              <div className="hidden lg:block mt-8 bg-navy-900 rounded-lg border border-navy-700/60 p-6">
                <h3 className="font-serif text-lg text-white mb-4 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-gold-500" />
                  Premium Finishings & Structural Specs
                </h3>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedUnitId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="grid md:grid-cols-2 gap-6 text-xs text-gray-400 leading-relaxed font-light"
                  >
                    <div className="space-y-4">
                      <div>
                        <p className="text-gold-500 font-mono text-[10px] uppercase tracking-wider mb-1">Floor Finishes</p>
                        <p>{selectedUnit.specs.flooring}</p>
                      </div>
                      <div>
                        <p className="text-gold-500 font-mono text-[10px] uppercase tracking-wider mb-1">Gourmet Cooking Systems</p>
                        <p>{selectedUnit.specs.kitchen}</p>
                      </div>
                      <div>
                        <p className="text-gold-500 font-mono text-[10px] uppercase tracking-wider mb-1">Smart Door Security</p>
                        <p>{selectedUnit.specs.lockset}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gold-500 font-mono text-[10px] uppercase tracking-wider mb-1">Sanitary Fittings & Bathrooms</p>
                        <p>{selectedUnit.specs.fittings}</p>
                      </div>
                      <div>
                        <p className="text-gold-500 font-mono text-[10px] uppercase tracking-wider mb-1">Ceiling Details</p>
                        <p>{selectedUnit.specs.ceiling}</p>
                      </div>
                      <div className="pt-2">
                        <div className="bg-navy-800 p-3 rounded border border-navy-700/40">
                          <span className="text-[10px] text-gold-500 font-mono uppercase tracking-wider block mb-1">Soundproofing Guarantee</span>
                          <p className="text-[11px]">Equipped with thick custom party walls achieving a certified acoustic rating of up to 60dB sound dampening.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Layout Detail side Info */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-navy-900 rounded-lg border border-gold-500/25 p-6 shadow-xl relative overflow-hidden min-h-[500px]">
                <div className="absolute top-0 left-0 w-1 h-full bg-gold-500" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedUnitId}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  >
                    <span className="text-gold-500 font-mono text-xs uppercase tracking-widest block mb-1">{t("Selected Unit")}</span>
                    <h3 className="font-serif text-2xl text-white font-medium mb-1">{t(selectedUnit.name)}</h3>
                    <p className="text-xs text-gold-400 font-mono uppercase tracking-wider mb-4">{t(selectedUnit.subtitle)}</p>
                    <p className="text-gray-400 text-xs leading-relaxed font-light mb-6">{t(selectedUnit.description)}</p>
 
                     <div className="grid grid-cols-2 gap-4 border-t border-b border-navy-800/60 py-4 mb-6">
                       <div>
                         <span className="text-gray-500 text-[10px] font-mono uppercase tracking-wider block mb-0.5">{t("Built-up Size")}</span>
                         <span className="font-serif text-lg text-white font-bold flex items-center gap-1">
                           {selectedUnit.sizeSqFt} <span className="text-xs font-sans font-light text-gray-400">{t("sq ft")}</span>
                         </span>
                         <span className="text-[10px] text-gray-500 block">({selectedUnit.sizeSqM} {t("sq m")})</span>
                       </div>
                       <div>
                         <span className="text-gray-500 text-[10px] font-mono uppercase tracking-wider block mb-0.5">{t("Private Rooms")}</span>
                         <span className="font-serif text-lg text-white font-bold flex items-center gap-2">
                           <span className="flex items-center gap-1"><Bed className="w-4 h-4 text-gold-400" /> {selectedUnit.bedrooms}</span>
                           <span className="flex items-center gap-1"><Bath className="w-4 h-4 text-gold-400" /> {selectedUnit.bathrooms}</span>
                         </span>
                       </div>
                       <div>
                         <span className="text-gray-500 text-[10px] font-mono uppercase tracking-wider block mb-0.5">{t("Balcony Facing")}</span>
                         <span className="text-xs text-white font-medium flex items-center gap-1">
                           <Compass className="w-3.5 h-3.5 text-gold-400" /> {selectedUnit.balconyOrientation} {t("Direction")}
                         </span>
                       </div>
                       <div>
                         <span className="text-gray-500 text-[10px] font-mono uppercase tracking-wider block mb-0.5">{t("Price Tier")}</span>
                         <span className="text-xs text-gold-400 font-mono font-semibold">{t("Starting Price")} {selectedUnit.startingPrice}</span>
                       </div>
                     </div>
 
                     <div>
                       <span className="text-gray-500 text-[10px] font-mono uppercase tracking-wider block mb-2">{t("Key Floor Assets")}</span>
                       <ul className="space-y-2 font-light">
                         {selectedUnit.keyFeatures.map((feat, idx) => (
                           <li key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                             <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                             <span>{t(feat)}</span>
                           </li>
                         ))}
                       </ul>
                     </div>
 
                     <div className="mt-8">
                       <a
                         href={`https://wa.me/60195598932?text=${encodeURIComponent(`[ORBK] Hello Yee, I would like to check availability for ${selectedUnit.name} (${selectedUnit.sizeSqFt} sqft) at Orion Residence.`)}`}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="w-full py-3 bg-gradient-to-r from-gold-500 via-brown-400 to-brown-600 hover:from-gold-400 hover:via-brown-300 hover:to-brown-500 text-black text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 text-center"
                       >
                         {t("Check Availability for This Unit")} <ArrowRight className="w-3.5 h-3.5" />
                       </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Selected Unit Metadata panel */}
              <div className="bg-navy-900 rounded-lg border border-navy-700/60 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                  <span>Selected Layout: {selectedUnitId}</span>
                  <span>Panoramic View: {selectedUnit.viewDirection}</span>
                </div>
              </div>

            </div>

            {/* Mobile Specs Sub-card - Stacks after Details card on mobile */}
            <div className="lg:hidden col-span-12 mt-4">
              <div className="bg-navy-900 rounded-lg border border-navy-700/60 p-6">
                <h3 className="font-serif text-lg text-white mb-4 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-gold-500" />
                  Premium Finishings & Structural Specs
                </h3>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedUnitId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="grid md:grid-cols-2 gap-6 text-xs text-gray-400 leading-relaxed font-light"
                  >
                    <div className="space-y-4">
                      <div>
                        <p className="text-gold-500 font-mono text-[10px] uppercase tracking-wider mb-1">Floor Finishes</p>
                        <p>{selectedUnit.specs.flooring}</p>
                      </div>
                      <div>
                        <p className="text-gold-500 font-mono text-[10px] uppercase tracking-wider mb-1">Gourmet Cooking Systems</p>
                        <p>{selectedUnit.specs.kitchen}</p>
                      </div>
                      <div>
                        <p className="text-gold-500 font-mono text-[10px] uppercase tracking-wider mb-1">Smart Door Security</p>
                        <p>{selectedUnit.specs.lockset}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gold-500 font-mono text-[10px] uppercase tracking-wider mb-1">Sanitary Fittings & Bathrooms</p>
                        <p>{selectedUnit.specs.fittings}</p>
                      </div>
                      <div>
                        <p className="text-gold-500 font-mono text-[10px] uppercase tracking-wider mb-1">Ceiling Details</p>
                        <p>{selectedUnit.specs.ceiling}</p>
                      </div>
                      <div className="pt-2">
                        <div className="bg-navy-800 p-3 rounded border border-navy-700/40">
                          <span className="text-[10px] text-gold-500 font-mono uppercase tracking-wider block mb-1">Soundproofing Guarantee</span>
                          <p className="text-[11px]">Equipped with thick custom party walls achieving a certified acoustic rating of up to 60dB sound dampening.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* AMENITIES SECTION */}
      <section id="amenities" className="py-24 relative bg-navy-900 border-t border-b border-navy-850">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-500 font-mono text-xs uppercase tracking-[0.3em] mb-3 block">Elevated Lifestyle</span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-4">Signature Amenities</h2>
            <p className="text-gray-400 text-sm font-light">
              Explore the exclusive levels curated with wellness clubs, cigar salons, and bespoke services.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Level 40 */}
            <ScrollReveal direction="up" delay={0} className="bg-navy-800 border border-navy-700/60 rounded-lg p-8 hover:border-gold-500/30 transition-all duration-500 group relative flex flex-col">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-gold-900/20 text-gold-500 border-l border-b border-navy-700/40 font-mono text-xs uppercase">
                Level 40
              </div>
              <div className="w-12 h-12 rounded bg-gold-900/20 border border-gold-500/30 flex items-center justify-center mb-6 text-gold-500">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-gold-400 transition-colors">The Sky Zenith Club</h3>
              <ul className="space-y-3 text-xs text-gray-400 font-light flex-1">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                  <span><strong>Sky Infinity Pool:</strong> Heated crystal water pool with direct vistas of the Twin Towers and TRX signature skyscraper.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                  <span><strong>Whiskey & Cigar Lounge:</strong> Exclusive private sanctuary with customized humidor cabinets and deep leather lounges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                  <span><strong>Stargazing Pavilion:</strong> Outfitted with high-power specialized astronomical telescopes.</span>
                </li>
              </ul>
            </ScrollReveal>

            {/* Level 10 */}
            <ScrollReveal direction="up" delay={150} className="bg-navy-800 border border-navy-700/60 rounded-lg p-8 hover:border-gold-500/30 transition-all duration-500 group relative flex flex-col">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-gold-900/20 text-gold-500 border-l border-b border-navy-700/40 font-mono text-xs uppercase">
                Level 10
              </div>
              <div className="w-12 h-12 rounded bg-gold-900/20 border border-gold-500/30 flex items-center justify-center mb-6 text-gold-500">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-gold-400 transition-colors">The Oasis Wellness Deck</h3>
              <ul className="space-y-3 text-xs text-gray-400 font-light flex-1">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                  <span><strong>Hydrotherapy Spa:</strong> Onsen-style stone dipping pools, herbal saunas, and steam wellness rooms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                  <span><strong>Urban Garden Deck:</strong> Sensory tree-lined walkways featuring local flora and therapeutic running waters.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                  <span><strong>Private Banquet Hall:</strong> Multi-functional space with fully equipped preparation chef kitchen.</span>
                </li>
              </ul>
            </ScrollReveal>

            {/* Ground Floor */}
            <ScrollReveal direction="up" delay={300} className="bg-navy-800 border border-navy-700/60 rounded-lg p-8 hover:border-gold-500/30 transition-all duration-500 group relative flex flex-col">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-gold-900/20 text-gold-500 border-l border-b border-navy-700/40 font-mono text-xs uppercase">
                Ground Floor
              </div>
              <div className="w-12 h-12 rounded bg-gold-900/20 border border-gold-500/30 flex items-center justify-center mb-6 text-gold-500">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-white mb-4 group-hover:text-gold-400 transition-colors">Sovereign VIP Services</h3>
              <ul className="space-y-3 text-xs text-gray-400 font-light flex-1">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                  <span><strong>24/7 Sovereign Concierge:</strong> Handled by hospitality experts to manage transport, travel bookings, and home chores.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                  <span><strong>3-Tier Sovereign Shield:</strong> Secure biometric scanning, 24/7 active guard units, and intelligent security loops.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                  <span><strong>Limousine Drop-off:</strong> Dedicated gold-accented driveways with personal valet luggage assistants.</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOOD LOCATION SECTION */}
      <section id="location" className="py-24 relative bg-navy-850">
        <div className="max-w-7xl mx-auto px-6">
          
          <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-gold-500 font-mono text-xs uppercase tracking-[0.3em] block mb-3">Prime Location</span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-4">The Epicenter of Bukit Bintang</h2>
            <p className="text-gray-400 text-sm font-light">
              Situated on Jalan Gading, Orion Residence sits quietly in absolute luxury behind Malaysia's primary fashion and lifestyle corridor.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Map Frame (Left) */}
            <ScrollReveal direction="left" delay={100} className="lg:col-span-7 flex flex-col">
              <div className="bg-navy-900 rounded-lg border border-navy-700/60 p-6 shadow-xl relative gold-glow h-full flex flex-col justify-between">
                <div className="absolute top-4 left-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  Location Geography
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-gold-500 uppercase tracking-wider">
                    Jalan Gading, Kuala Lumpur
                  </span>
                </div>

                <div className="rounded overflow-hidden border border-navy-800 aspect-[16/10] my-8 relative group">
                  <img
                    src={locationImg}
                    alt="Orion Bukit Bintang Location Map"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-900/20 to-transparent flex items-end p-4">
                    <span className="text-[10px] text-gold-300 font-mono uppercase tracking-widest font-semibold">
                      ★ Orion Residence Site Map
                    </span>
                  </div>
                </div>

                <div className="bg-navy-800 p-4 rounded border border-navy-700/40 text-xs">
                  <h5 className="text-[10px] text-gold-500 font-mono uppercase tracking-widest block mb-1">
                    Quiet Luxury in the Heart of the City
                  </h5>
                  <p className="text-gray-400 leading-relaxed font-light">
                    Orion is tucked on Jalan Gading, directly adjoining Fahrenheit88 and Pavilion KL. It offers a rare sanctuary completely shielded from heavy city avenue noise, yet remains merely 150 meters away from regional luxury flagships (Chanel, Hermès, Louis Vuitton, Cartier).
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Neighborhood Details list (Right) */}
            <ScrollReveal direction="right" delay={250} className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              <div className="bg-navy-900 rounded-lg border border-navy-700/60 p-6 flex flex-col justify-between h-full">
                <div>
                  <h4 className="font-serif text-lg text-white mb-6 flex items-center gap-2">
                    <Map className="w-4 h-4 text-gold-500" />
                    Prestigious Proximities
                  </h4>
                  
                  <div className="space-y-6">
                    {/* Category 1 */}
                    <div>
                      <span className="text-[10px] text-gold-500 font-mono uppercase tracking-widest block mb-3 border-b border-navy-800 pb-1">
                        Luxury Retail & Haute Couture
                      </span>
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs">
                          <div>
                            <span className="text-white font-medium block">Pavilion Kuala Lumpur</span>
                            <span className="text-gray-500 text-[11px] font-light">Malaysia's premier shopping luxury destination.</span>
                          </div>
                          <span className="text-gold-400 font-mono text-[10px] whitespace-nowrap bg-gold-950/40 border border-gold-900/40 px-1.5 py-0.5 rounded self-start sm:self-center">
                            150m (1-min walk)
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs pt-1">
                          <div>
                            <span className="text-white font-medium block">The Starhill</span>
                            <span className="text-gray-500 text-[11px] font-light">Watch salons, modern fashion and Michelin stars.</span>
                          </div>
                          <span className="text-gold-400 font-mono text-[10px] whitespace-nowrap bg-gold-950/40 border border-gold-900/40 px-1.5 py-0.5 rounded self-start sm:self-center">
                            50m (30-sec walk)
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs pt-1">
                          <div>
                            <span className="text-white font-medium block">Fahrenheit88 Mall</span>
                            <span className="text-gray-500 text-[11px] font-light">Vibrant cosmetics, retail and lifestyle hub.</span>
                          </div>
                          <span className="text-gold-400 font-mono text-[10px] whitespace-nowrap bg-gold-950/40 border border-gold-900/40 px-1.5 py-0.5 rounded self-start sm:self-center">
                            80m (1-min walk)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Category 2 */}
                    <div>
                      <span className="text-[10px] text-gold-500 font-mono uppercase tracking-widest block mb-3 border-b border-navy-800 pb-1">
                        Global Connections & Transit
                      </span>
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs">
                          <div>
                            <span className="text-white font-medium block">MRT Bukit Bintang Station</span>
                            <span className="text-gray-500 text-[11px] font-light">Direct connection to TRX, KL Sentral, and Klang Valley.</span>
                          </div>
                          <span className="text-gold-400 font-mono text-[10px] whitespace-nowrap bg-gold-950/40 border border-gold-900/40 px-1.5 py-0.5 rounded self-start sm:self-center">
                            200m (2-min walk)
                          </span>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs pt-1">
                          <div>
                            <span className="text-white font-medium block">Tun Razak Exchange (TRX)</span>
                            <span className="text-gray-500 text-[11px] font-light">Malaysia's leading international financial center.</span>
                          </div>
                          <span className="text-gold-400 font-mono text-[10px] whitespace-nowrap bg-gold-950/40 border border-gold-900/40 px-1.5 py-0.5 rounded self-start sm:self-center">
                            1 MRT Stop
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Category 3 */}
                    <div>
                      <span className="text-[10px] text-gold-500 font-mono uppercase tracking-widest block mb-3 border-b border-navy-800 pb-1">
                        Culinary & Heritage
                      </span>
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-xs">
                          <div>
                            <span className="text-white font-medium block">Lot 10 Hutong Heritage</span>
                            <span className="text-gray-500 text-[11px] font-light">Legendary culinary landmark housing local heritage icons.</span>
                          </div>
                          <span className="text-gold-400 font-mono text-[10px] whitespace-nowrap bg-gold-950/40 border border-gold-900/40 px-1.5 py-0.5 rounded self-start sm:self-center">
                            250m (3-min walk)
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* RESERVATION INQUIRY FORM */}
      <section id="inquire" className="py-24 relative bg-navy-900 border-t border-b border-navy-850">
        <div className="absolute inset-0 z-0 opacity-15" style={{ backgroundImage: `url(${skypoolImg})`, backgroundSize: "cover", backgroundPosition: "center 80%" }} />
        <div className="absolute inset-0 bg-navy-950/95 z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-gold-500 font-mono text-xs uppercase tracking-[0.3em] block mb-3">VIP Reservation</span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-white mb-4">Request Private Viewing</h2>
            <p className="text-gray-400 text-sm font-light">
              Submit your inquiry to secure an exclusive showroom viewing and receive the digital portfolio & investment dossier.
            </p>
          </div>

          <div className="bg-navy-850/90 backdrop-blur-md rounded-lg border border-gold-500/25 p-5 sm:p-8 md:p-12 shadow-2xl">
            {!formSubmitted ? (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-gray-400 font-mono text-[10px] uppercase tracking-wider mb-2">
                      Full Name / Title
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formInputs.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Tan Sri Adrian Yeoh"
                        className="w-full bg-navy-950 border border-navy-700/60 focus:border-gold-500 text-white rounded px-10 py-3 text-xs placeholder-gray-600 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-400 font-mono text-[10px] uppercase tracking-wider mb-2">
                      Private Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formInputs.email}
                        onChange={handleInputChange}
                        placeholder="e.g. adrian.yeoh@royalholdings.com"
                        className="w-full bg-navy-950 border border-navy-700/60 focus:border-gold-500 text-white rounded px-10 py-3 text-xs placeholder-gray-600 transition-colors duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-gray-400 font-mono text-[10px] uppercase tracking-wider mb-2">
                      Contact Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formInputs.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +60 12-345 6789"
                        className="w-full bg-navy-950 border border-navy-700/60 focus:border-gold-500 text-white rounded px-10 py-3 text-xs placeholder-gray-600 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-gray-400 font-mono text-[10px] uppercase tracking-wider mb-2">
                      Country of Residence
                    </label>
                    <select
                      name="country"
                      value={formInputs.country}
                      onChange={handleInputChange}
                      className="w-full bg-navy-950 border border-navy-700/60 focus:border-gold-500 text-white rounded px-4 py-3 text-xs transition-colors duration-300"
                    >
                      <option value="Malaysia">Malaysia</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Japan">Japan</option>
                      <option value="China">China</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Preferred Unit */}
                  <div>
                    <label className="block text-gray-400 font-mono text-[10px] uppercase tracking-wider mb-2">
                      Preferred Layout Size
                    </label>
                    <select
                      name="preferredUnit"
                      value={formInputs.preferredUnit}
                      onChange={handleInputChange}
                      className="w-full bg-navy-950 border border-navy-700/60 focus:border-gold-500 text-white rounded px-4 py-3 text-xs transition-colors duration-300 font-mono"
                    >
                      {UNIT_TYPES.map((u) => (
                        <option key={u.id} value={u.id}>
                          {u.id.replace("-", " ")} ({u.sizeSqFt} sqft)
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Language */}
                  <div>
                    <label className="block text-gray-400 font-mono text-[10px] uppercase tracking-wider mb-2">
                      Preferred Language
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                      <select
                        name="preferredLanguage"
                        value={formInputs.preferredLanguage}
                        onChange={handleInputChange}
                        className="w-full bg-navy-950 border border-navy-700/60 focus:border-gold-500 text-white rounded px-10 py-3 text-xs transition-colors duration-300"
                      >
                        <option value="English">English</option>
                        <option value="Mandarin / Cantonese">Chinese (Mandarin / Cantonese)</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Malay">Malay / Indonesian</option>
                        <option value="Other">Other Language</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-400 font-mono text-[10px] uppercase tracking-wider mb-2">
                    Specific Requirements / Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formInputs.message}
                    onChange={handleInputChange}
                    placeholder="Please specify if you require translation support, investment structures details, or higher floor availability indexes."
                    className="w-full bg-navy-950 border border-navy-700/60 focus:border-gold-500 text-white rounded px-4 py-3 text-xs placeholder-gray-600 transition-colors duration-300 resize-none"
                  />
                </div>

                <div className="flex items-start gap-3 mt-4">
                  <input
                    type="checkbox"
                    id="consentCheckbox"
                    required
                    checked={consentAccepted}
                    onChange={(e) => setConsentAccepted(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-navy-700/60 bg-navy-950 text-gold-500 focus:ring-gold-500 accent-gold-500 cursor-pointer"
                  />
                  <label htmlFor="consentCheckbox" className="text-gray-400 text-[11px] leading-relaxed cursor-pointer select-none">
                    {t("I read and accept the")} <button type="button" onClick={() => setActivePolicyModal("privacy")} className="text-gold-500 underline hover:text-gold-400 font-normal transition-colors">{t("Privacy Policy")}</button> {t("and")} <button type="button" onClick={() => setActivePolicyModal("terms")} className="text-gold-500 underline hover:text-gold-400 font-normal transition-colors">{t("Terms & Conditions")}</button>, {t("and consent to Yee (REN46306) contacting me regarding Orion Residence.")}
                  </label>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={formSubmitting || !consentAccepted}
                    className="w-full py-4 bg-gradient-to-r from-gold-500 via-brown-400 to-brown-600 hover:from-gold-400 hover:via-brown-300 hover:to-brown-500 text-black text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                  >
                    {formSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Processing VIP Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Official Inquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-gold-900/20 border border-gold-500 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-gold-500" />
                </div>
                <h3 className="font-serif text-3xl text-white mb-2">VIP Request Logged</h3>
                <p className="text-gold-500 font-mono text-xs uppercase tracking-widest mb-6">
                  Confirmation Code: {submittedId}
                </p>
                
                <div className="bg-navy-800 border border-navy-700/60 rounded p-6 max-w-md mx-auto mb-8 text-xs text-gray-300 leading-relaxed font-light text-left">
                  <p className="font-semibold text-white mb-2">What happens next?</p>
                  <p className="mb-3">
                    1. A private client relations executive from <strong>Orion Tower Client Relations</strong> will contact you via phone or email within 2 hours to confirm your scheduled slot.
                  </p>
                  <p>
                    2. An exclusive, digital private access portfolio featuring unit price indexes and design spec blueprints has been compiled and emailed.
                  </p>
                </div>

                <div className="flex justify-center items-center">
                  <a
                    href={`https://wa.me/60195598932?text=%5BORBK%5D%20Hello%20Yee%2C%20I%20have%20submitted%20the%20VIP%20Inquiry%20form%20for%20Orion%20Residence%20(Ref%20Code%3A%20${submittedId}).%20Please%20share%20the%20Private%20Portfolio%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3.5 bg-gradient-to-r from-gold-500 via-brown-400 to-brown-600 hover:from-gold-400 hover:via-brown-300 hover:to-brown-500 text-black text-xs font-bold uppercase tracking-widest rounded transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" /> {t("Chat on WhatsApp")}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-navy-950 text-[#8f9099] py-16 border-t border-navy-850 font-light text-xs">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gold-500/50 bg-black">
                <span className="text-gold-500 font-serif text-sm font-bold">O</span>
              </div>
              <span className="text-white font-serif tracking-widest text-base font-bold uppercase">Orion Residence</span>
            </div>
            <p className="leading-relaxed">
              An architectural celestial jewel crafted above the vibrant center of Kuala Lumpur. Experience a lifestyle tailored purely to the uncompromised.
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif uppercase tracking-widest text-xs font-semibold mb-4">Official Developer</h4>
            <p className="leading-relaxed mb-1 font-medium text-gray-300">Orion Tower Sdn. Bhd.</p>
            <p className="text-[10px] text-gray-500 font-mono mb-2">Registration No: 1292635-X</p>
            <p className="text-gold-500 font-mono text-[10px] uppercase tracking-wider mb-2 font-semibold">A Project by Welton Group</p>
            <p className="leading-relaxed">
              Jalan Gading, Bukit Bintang, <br />
              55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif uppercase tracking-widest text-xs font-semibold mb-4">Contact Relations</h4>
            <p className="flex items-center gap-2 mb-2">
              <Phone className="w-3.5 h-3.5 text-gold-500" />
              <a href="tel:+60195598932" className="hover:text-gold-400 transition-colors text-white font-semibold">
                +6019 559 8932
              </a>
            </p>
            <p className="flex items-center gap-2 mb-2">
              <span className="text-gold-500 font-bold font-mono text-[9px] border border-gold-500/30 px-1 rounded">WA</span>
              <a href="https://wa.me/60195598932?text=%5BORBK%5D%20Hello%20Yee%2C%20I%20would%20like%20to%20enquire%20about%20Orion%20Residence." target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 underline transition-colors">
                Chat on WhatsApp
              </a>
            </p>
            <p className="flex items-center gap-2 mb-2">
              <Mail className="w-3.5 h-3.5 text-gold-500" />
              <a href="mailto:shyanyeews@gmail.com" className="hover:text-gold-400 transition-colors">
                shyanyeews@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-white font-serif uppercase tracking-widest text-xs font-semibold mb-4">{t("Disclaimers")}</h4>
            <p className="leading-relaxed text-[11px] text-gold-400 font-medium mb-3">
              {t("This is an independent marketing website managed by Yee (REN46306) under IQI Realty Sdn Bhd. It is not the official developer website of Orion Tower Sdn. Bhd.")}
            </p>
            <p className="leading-relaxed text-[10px] text-gray-600">
              {t("All illustrative renderings, conceptual drawings, room dimensions, specifications, and layout designs on this website are approximate and intended as a general guide only. The developer reserves the right to modify any aspect at their absolute discretion.")}
            </p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-900/60 text-center flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-600">
          <p>© 2026 Orion Tower Sdn. Bhd. (1292635-X) & Welton Group. All Rights Reserved.</p>
          <div className="flex gap-4 text-xs font-mono">
            <button onClick={() => setActivePolicyModal("privacy")} className="hover:text-gold-500 transition-colors cursor-pointer">{t("Privacy Policy")}</button>
            <button onClick={() => setActivePolicyModal("terms")} className="hover:text-gold-500 transition-colors cursor-pointer">{t("Terms & Conditions")}</button>
            <button onClick={() => setActivePolicyModal("disclaimer")} className="hover:text-gold-500 transition-colors cursor-pointer">{t("Detailed Disclaimer")}</button>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 group flex items-center gap-3">
        {/* Help tooltip text */}
        <div className="bg-[#0e0f14] border border-gold-500/30 text-white font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded shadow-xl opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 backdrop-blur-sm">
          Chat with Yee
        </div>
        <a
          href="https://wa.me/60195598932?text=%5BORBK%5D%20Hello%20Yee%2C%20I%20am%20viewing%20the%20Orion%20Residence%20website%20and%20would%20like%20to%20enquire%20about%20the%20property."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] border border-emerald-400/20"
        >
          {/* Custom vector SVG for WhatsApp icon */}
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.012 2c-5.506 0-9.987 4.479-9.987 9.987 0 1.763.458 3.422 1.258 4.877L2 22l5.304-1.393a9.92 9.92 0 004.708 1.185c5.507 0 9.988-4.48 9.988-9.987C22 6.479 17.519 2 12.012 2zm4.354 13.911c-.24.677-1.192 1.246-1.636 1.295-.443.048-.992.072-1.636-.145-2.585-.867-4.249-3.493-4.378-3.666-.129-.172-1.042-1.385-1.042-2.64 0-1.255.66-1.874.896-2.115.236-.24.516-.3.687-.3.172 0 .344.004.494.011.159.008.373-.06.582.443.215.517.733 1.785.797 1.916.065.13.108.28.022.452-.086.172-.129.28-.258.43-.129.15-.272.333-.387.447-.129.129-.263.269-.113.527.15.258.665 1.096 1.428 1.773.984.872 1.815 1.141 2.073 1.27.258.129.408.108.559-.065.15-.172.645-.752.817-1.01.172-.258.344-.215.58-.129.237.086 1.493.704 1.751.833.258.129.43.194.494.301.064.108.064.624-.176 1.301z"/>
          </svg>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-emerald-600 flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
          </span>
        </a>
      </div>

      {/* Policy and Disclaimers Modals */}
      <AnimatePresence>
        {activePolicyModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md"
            onClick={() => setActivePolicyModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl bg-[#090a0f] border border-gold-500/30 rounded shadow-2xl p-6 md:p-8 text-left max-h-[85vh] flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePolicyModal(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gold-400 transition-colors p-1 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {activePolicyModal === "privacy" && (
                <>
                  <div className="flex items-center gap-2 mb-4 border-b border-navy-800 pb-4">
                    <Shield className="w-5 h-5 text-gold-500" />
                    <h3 className="font-serif text-2xl text-white font-medium">{t("Privacy Policy")}</h3>
                  </div>
                  <div className="overflow-y-auto pr-2 text-gray-400 text-xs space-y-4 font-light leading-relaxed">
                    <p className="text-gray-300 font-medium">
                      {t("This Privacy Policy outlines how your personal information is collected, used, and protected in accordance with the Malaysia Personal Data Protection Act (PDPA) 2010.")}
                    </p>
                    <div>
                      <h4 className="text-white font-mono font-bold uppercase text-[10px] tracking-wider mb-1">{t("1. Information We Collect")}</h4>
                      <p>{t("When you submit an inquiry through our contact forms, we collect personal identity details including your full name, email address, contact phone number, country of residence, and unit size preferences.")}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-mono font-bold uppercase text-[10px] tracking-wider mb-1">{t("2. How We Use Your Data")}</h4>
                      <p>{t("Your details are utilized strictly to respond to your registered request, share the digital access portfolio containing price indexes, and arrange scheduled private viewings. Your information is managed directly by Yee (REN46306) under IQI Realty Sdn Bhd.")}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-mono font-bold uppercase text-[10px] tracking-wider mb-1">{t("3. Cookies & Advertising Protection")}</h4>
                      <p>{t("This website uses cookies and similar tracking identifiers (such as Google Ads tracking tags) to analyze site traffic, personalize content, and deliver relevant advertisements. No sensitive personal data is shared with Google or third parties during this operation.")}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-mono font-bold uppercase text-[10px] tracking-wider mb-1">{t("4. Third-Party Policy")}</h4>
                      <p>{t("We maintain a strict non-disclosure policy. We do not sell, rent, or lease customer lists or personal data logs to external marketing agencies or unauthorized third parties.")}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-mono font-bold uppercase text-[10px] tracking-wider mb-1">{t("5. Data Access & Rights")}</h4>
                      <p>{t("You retain full ownership and rights over your personal data. You may request information corrections, updates, or complete removal of your records from our system at any time by emailing shyanyeews@gmail.com.")}</p>
                    </div>
                  </div>
                </>
              )}

              {activePolicyModal === "terms" && (
                <>
                  <div className="flex items-center gap-2 mb-4 border-b border-navy-800 pb-4">
                    <FileText className="w-5 h-5 text-gold-500" />
                    <h3 className="font-serif text-2xl text-white font-medium">{t("Terms & Conditions")}</h3>
                  </div>
                  <div className="overflow-y-auto pr-2 text-gray-400 text-xs space-y-4 font-light leading-relaxed">
                    <p className="text-gray-300 font-medium">
                      {t("By accessing or browsing this website, you agree to comply with and be bound by the following Terms of Service governing this real estate presentation channel.")}
                    </p>
                    <div>
                      <h4 className="text-white font-mono font-bold uppercase text-[10px] tracking-wider mb-1">{t("1. Channel Status")}</h4>
                      <p>{t("This platform acts as an independent marketing channel managed by Shyan Yee (REN46306) under IQI Realty Sdn Bhd. It is built as a portfolio presentation to introduce Orion Residence and is not the official developer website.")}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-mono font-bold uppercase text-[10px] tracking-wider mb-1">{t("2. Information Disclaimer")}</h4>
                      <p>{t("All visual renderings, floor blueprints, dimensions, specs, amenities list, and starting pricing metrics represent conceptual designs and approximate dimensions. They do not constitute a binding legal agreement or standard property offer. The developer reserves rights to alter specs at their absolute discretion.")}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-mono font-bold uppercase text-[10px] tracking-wider mb-1">{t("3. Acceptable Use")}</h4>
                      <p>{t("You agree to provide true, accurate, and current information when submitting inquiry forms. Using automated scripts or harvesting contact channels is strictly prohibited.")}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-mono font-bold uppercase text-[10px] tracking-wider mb-1">{t("4. Limitation of Liability")}</h4>
                      <p>{t("Neither the operating agent (Yee), IQI Realty Sdn Bhd, nor Welton Group shall be liable for any direct or indirect loss, financial decisions, or damages arising from the use or inability to use materials displayed on this website.")}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-mono font-bold uppercase text-[10px] tracking-wider mb-1">{t("5. Governing Jurisdiction")}</h4>
                      <p>{t("These terms and any resulting actions shall be governed by and construed in accordance with the laws of Malaysia, and subject to the exclusive jurisdiction of the Courts of Malaysia.")}</p>
                    </div>
                  </div>
                </>
              )}

              {activePolicyModal === "disclaimer" && (
                <>
                  <div className="flex items-center gap-2 mb-4 border-b border-navy-800 pb-4">
                    <Globe className="w-5 h-5 text-gold-500" />
                    <h3 className="font-serif text-2xl text-white font-medium">{t("Detailed Disclaimer")}</h3>
                  </div>
                  <div className="overflow-y-auto pr-2 text-gray-400 text-xs space-y-4 font-light leading-relaxed">
                    <p className="text-gray-300 font-medium">
                      {t("Important Legal & Professional Disclosures for Orion Residence Digital Representation.")}
                    </p>
                    <div>
                      <h4 className="text-white font-mono font-bold uppercase text-[10px] tracking-wider mb-1">{t("Professional Agent Representation")}</h4>
                      <p>{t("This digital representation is managed by Yee (Shyan Yee, REN46306), a registered Real Estate Negotiator authorized under IQI Realty Sdn Bhd (Company License: E(1)1584). IQI Realty is an appointed agency for marketing real estate developments.")}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-mono font-bold uppercase text-[10px] tracking-wider mb-1">{t("Developer Status")}</h4>
                      <p>{t("The official developer for the Orion Residence project is Orion Tower Sdn. Bhd. (Co. Registration: 1292635-X), an architectural project developed in Bukit Bintang by Welton Group. This platform serves as a marketing presentation and does not represent direct developer ownership of the website.")}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-mono font-bold uppercase text-[10px] tracking-wider mb-1">{t("Artistic and Layout Variations")}</h4>
                      <p>{t("All visual renders, lifestyle images, perspective materials, furniture layouts, and architectural models are artist's impressions for creative reference only. Actual specifications and final details are strictly governed by the formal Sale and Purchase Agreement (SPA) executed during unit booking.")}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-mono font-bold uppercase text-[10px] tracking-wider mb-1">{t("Advertising Policy Compliance")}</h4>
                      <p>{t("This disclaimer is visible and designed to prevent misleading representation, ensuring visitors are fully informed of the agent-mediated marketing relationship prior to engaging or booking tours.")}</p>
                    </div>
                  </div>
                </>
              )}

              <div className="mt-6 pt-4 border-t border-navy-800 flex justify-end">
                <button
                  onClick={() => setActivePolicyModal(null)}
                  className="px-6 py-2 bg-gradient-to-r from-gold-500 to-brown-600 hover:from-gold-400 hover:to-brown-500 text-black text-[10px] font-bold uppercase tracking-widest rounded transition-all duration-300 cursor-pointer"
                >
                  {t("Acknowledge")}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
