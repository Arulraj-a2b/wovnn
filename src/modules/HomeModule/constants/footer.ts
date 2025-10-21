export interface ContactInfo {
  icon: string;
  text: string;
  type: "address" | "phone" | "fax" | "email" | "skype";
}

export interface SocialLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: "📍",
    text: "20001 SW Tualatin Valley Hwy Beaverton, OR 97003",
    type: "address",
  },
  {
    icon: "📞",
    text: "503.259.2100",
    type: "phone",
  },
  {
    icon: "📠",
    text: "503.259.2100",
    type: "fax",
  },
  {
    icon: "✉️",
    text: "allprofessionalsre@gmail.com",
    type: "email",
  },
  {
    icon: "💬",
    text: "allprofessionalsre",
    type: "skype",
  },
];

export const featuredCommunities: string[] = [
  "Aloha, OR",
  "Banks, OR",
  "Beaverton, OR",
  "Cornelius, OR",
  "Hillsboro, OR",
  "Newberg, OR",
  "North Plains, OR",
  "Portland, OR",
];

export const partnerLogos: string[] = [
  "https://picsum.photos/seed/logo1/167/35",
  "https://picsum.photos/seed/logo2/120/42",
  "https://picsum.photos/seed/logo3/167/35",
  "https://picsum.photos/seed/logo4/167/35",
  "https://picsum.photos/seed/logo5/143/49",
];

export const footerLinks: string[] = [
  "Documentation",
  "Video Tutorial",
  "Client Support",
];

