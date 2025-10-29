import {
  apartmentImg,
  officeImg,
  shopImg,
  singleFamilyHomeImg,
  studioImg,
  villaImg,
} from "@/assets/images";

export interface PropertyTypeCardProps {
  image: string;
  type: string;
  count: number;
  tall?: "short" | "medium" | "full";
  darkOverlay?: boolean;
  subtype?: string; // API subtype for search
}

export const propertyTypes: PropertyTypeCardProps[] = [
  {
    image: apartmentImg,
    type: "Apartment",
    count: 23,
    tall: "full",
    subtype: "apartment",
  },
  {
    image: studioImg,
    type: "Studio",
    count: 7,
    tall: "medium",
    subtype: "apartment",
  },
  {
    image: singleFamilyHomeImg,
    type: "Single Family Home",
    count: 12,
    subtype: "singlefamilyresidence",
  },
  {
    image: villaImg,
    type: "Villa",
    count: 10,
    darkOverlay: true,
    subtype: "singlefamilyresidence",
  },
  {
    image: officeImg,
    type: "Office",
    count: 3,
    subtype: "officespace",
  },
  {
    image: shopImg,
    type: "Shop",
    count: 3,
    subtype: "retail",
  },
];
