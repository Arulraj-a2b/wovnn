export interface AgentCardProps {
  image: string;
  name: string;
  role: string;
  company: string;
  description: string;
  companyOnOneLine?: boolean; // For cases like Brittany where company fits on one line
}

export const agents: AgentCardProps[] = [
  {
    image: "https://picsum.photos/seed/picsum/200/300",
    name: "Vincent Fuller",
    role: "Real Estate Agent",
    company: "Country House Real Estate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,...",
  },
  {
    image: "https://picsum.photos/seed/picsum/200/300",
    name: "Brittany Watkins",
    role: "Company Agent",
    company: "All American Real Estate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,...",
    companyOnOneLine: true,
  },
  {
    image: "https://picsum.photos/seed/picsum/200/300",
    name: "Michelle Ramirez",
    role: "Company Agent",
    company: "Modern House Real Estate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,...",
  },
  {
    image: "https://picsum.photos/seed/picsum/200/300",
    name: "Samuel Palmer",
    role: "Company Agent",
    company: "Modern House Real Estate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta justo eget risus consectetur,...",
  },
];
