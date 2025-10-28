import {
  location1Img,
  location2Img,
  location3Img,
  location4Img,
} from "@/assets/images";

export interface LocationCardProps {
  image: string;
  name: string;
}

export const locations: LocationCardProps[] = [
  {
    image: location1Img,
    name: "Houston",
  },
  {
    image: location2Img,
    name: "Oak Ridge",
  },
  {
    image: location3Img,
    name: "Cypress",
  },
  {
    image: location4Img,
    name: "Katy",
  },
];
