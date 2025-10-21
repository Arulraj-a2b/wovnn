export interface PropertyCardProps {
  image: string;
  title: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  type: string;
  featured?: boolean;
  hot?: boolean;
  photoCount?: number;
  videoCount?: number;
}

export const featuredProperties: PropertyCardProps[] = [
  {
    image: "https://picsum.photos/seed/picsum/200/300",
    title: "Home in Merrick Way",
    address: "Merrick Way, Miami, FL 33134, USA",
    price: "$540,000",
    beds: 3,
    baths: 3,
    sqft: 3000,
    type: "Single Family",
    featured: true,
    hot: true,
    photoCount: 6,
    videoCount: 1,
  },
  {
    image: "https://picsum.photos/seed/picsum/200/300",
    title: "Villa in Coral Gables",
    address: "Deering Bay Drive, Coral Gables, FL 33158, USA",
    price: "$820,000",
    beds: 3,
    baths: 3,
    sqft: 4300,
    type: "Villa",
    featured: true,
    hot: true,
    photoCount: 6,
    videoCount: 1,
  },
  {
    image: "https://picsum.photos/seed/picsum/200/300",
    title: "Villa on Hollywood Boulevard",
    address: "Hatteras Lane, Hollywood, FL 33019, USA",
    price: "$700,000",
    beds: 2,
    baths: 1,
    sqft: 3500,
    type: "Single Family",
    featured: true,
    hot: true,
    photoCount: 6,
    videoCount: 1,
  },
];
