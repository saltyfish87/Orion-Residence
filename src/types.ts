export interface RoomDetails {
  id: string;
  name: string;
  dimensions: string;
  description: string;
  materials: string;
  svgPath: string;
  cx: number;
  cy: number;
}

export interface UnitType {
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

export interface NeighborhoodSpot {
  id: string;
  name: string;
  category: "shopping" | "transit" | "dining";
  distance: string;
  description: string;
  coords: { x: number; y: number };
}

export interface GalleryItem {
  title: string;
  description: string;
  image: string;
  category: "architecture" | "facilities" | "residences";
  tag: string;
  subtag: string;
}
