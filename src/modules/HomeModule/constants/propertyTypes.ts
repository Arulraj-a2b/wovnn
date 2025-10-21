export interface PropertyTypeCardProps {
  image: string;
  type: string;
  count: number;
  tall?: boolean; // For Studio card
  darkOverlay?: boolean; // For Villa card with more opacity
}

export const propertyTypes: PropertyTypeCardProps[] = [
  {
    image: "https://picsum.photos/seed/apartment/400/400",
    type: "Apartment",
    count: 23,
  },
  {
    image: "https://picsum.photos/seed/studio/400/600",
    type: "Studio",
    count: 7,
    tall: true,
  },
  {
    image: "https://picsum.photos/seed/family/400/400",
    type: "Single Family Home",
    count: 12,
  },
  {
    image: "https://picsum.photos/seed/villa/400/400",
    type: "Villa",
    count: 10,
    darkOverlay: true,
  },
  {
    image: "https://picsum.photos/seed/office/400/400",
    type: "Office",
    count: 3,
  },
  {
    image: "https://picsum.photos/seed/shop/400/400",
    type: "Shop",
    count: 3,
  },
];
