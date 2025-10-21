export interface QuickActionCardProps {
  icon: "home" | "locationPin" | "phone";
  title: string;
  description: string;
  bgColor: string;
}

export const quickActions: QuickActionCardProps[] = [
  {
    icon: "home",
    title: "What's Your Home Worth?",
    description:
      "Let us quickly and accurately assess your home's current value.",
    bgColor: "#505564",
  },
  {
    icon: "locationPin",
    title: "Search by Area",
    description: "Easy home search broken down by area and price.",
    bgColor: "#646978",
  },
  {
    icon: "phone",
    title: "Contact Us",
    description: "Have a question? Let's get in touch.",
    bgColor: "#787d8c",
  },
];
