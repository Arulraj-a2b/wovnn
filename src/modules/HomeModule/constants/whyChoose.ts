export interface FeatureItemProps {
  number: string;
  title: string;
  description: string;
  position?: "left" | "right";
}

export const features: FeatureItemProps[] = [
  {
    number: "01.",
    title: "Market Insights and Technology",
    description:
      "Never miss a sale! It's never been easier to turn leads into real customers",
    position: "left",
  },
  {
    number: "02.",
    title: "Expertise and Experience",
    description:
      "Keep track of your leads without having to pay for an external CRM",
    position: "right",
  },
  {
    number: "03.",
    title: "Exceptional Client Service",
    description:
      "Customize your website according to your expectations and requirements",
    position: "right",
  },
];

export interface FormField {
  name: string;
  type: "text" | "email" | "tel" | "select";
  placeholder: string;
  options?: string[];
  fullWidth?: boolean;
}

export const formFields: FormField[] = [
  {
    name: "type",
    type: "select",
    placeholder: "I'm a",
    options: ["Buyer", "Seller", "Agent", "Other"],
    fullWidth: true,
  },
  {
    name: "firstName",
    type: "text",
    placeholder: "First Name",
    fullWidth: false,
  },
  {
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
    fullWidth: false,
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email Address",
    fullWidth: true,
  },
  {
    name: "mobile",
    type: "tel",
    placeholder: "Mobile No.",
    fullWidth: true,
  },
];

export const locationFields: FormField[] = [
  {
    name: "location",
    type: "select",
    placeholder: "Select",
    options: ["Miami", "Coral Gables", "Hollywood", "Beaverton"],
  },
  {
    name: "zipCode",
    type: "text",
    placeholder: "Zip Code",
  },
];

export const propertyFields: FormField[] = [
  {
    name: "propertyType",
    type: "select",
    placeholder: "Property Type",
    options: ["Apartment", "Villa", "Single Family", "Condo", "Townhouse"],
  },
  {
    name: "budget",
    type: "select",
    placeholder: "Budget",
    options: [
      "$0 - $200,000",
      "$200,000 - $500,000",
      "$500,000 - $1M",
      "$1M - $2M",
      "$2M+",
    ],
  },
];
