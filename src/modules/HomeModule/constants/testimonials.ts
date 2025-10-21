export interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  testimonial: string;
  rating: number;
}

export const testimonials: TestimonialCardProps[] = [
  {
    image: "https://picsum.photos/seed/dana/100/100",
    name: "Dana Gilmore",
    role: "developer",
    testimonial:
      "I reviewed and purchased a number of different WordPress Themes before settling on Wp Residence.",
    rating: 5,
  },
  {
    image: "https://picsum.photos/seed/susan/100/100",
    name: "Susan Barkley",
    role: "happy seller",
    testimonial:
      "The WP Estate team did an outstanding job helping me buy and create my first real estate website.",
    rating: 5,
  },
  {
    image: "https://picsum.photos/seed/lisa/100/100",
    name: "Lisa Simpson",
    role: "happy buyer",
    testimonial:
      "We hired the WP Estate team as our buyer agent because they are the perfect team for real estate projects.",
    rating: 5,
  },
  {
    image: "https://picsum.photos/seed/sara/100/100",
    name: "Sara Loreley",
    role: "buyer",
    testimonial:
      "I reviewed and purchased a number of different WordPress Themes before settling on Wp Residence.",
    rating: 5,
  },
  {
    image: "https://picsum.photos/seed/virginia/100/100",
    name: "Virginia Wolf",
    role: "happy seller",
    testimonial:
      "The WP Estate team did an outstanding job helping me buy and create my first real estate website.",
    rating: 5,
  },
  {
    image: "https://picsum.photos/seed/jessica/100/100",
    name: "Jessica Fowley",
    role: "happy buyer",
    testimonial:
      "We hired the WP Estate team as our buyer agent because they are the perfect team for real estate projects.",
    rating: 5,
  },
];
