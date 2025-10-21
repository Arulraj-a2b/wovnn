import {
  brokerReciprocityImg,
  rmlsImg,
  willametteValleyBoardImg,
} from "@/assets/images";
import {
  SvgMapMarker,
  SvgPhoneAlt,
  SvgFax,
  SvgEnvelope,
  SvgSkype,
  SvgFacebook,
  SvgRss,
  SvgTwitter,
  SvgDribbble,
  SvgGoogle,
  SvgLinkedIn,
  SvgTumblr,
  SvgPinterest,
  SvgYoutube,
  SvgVimeo,
} from "@/assets/icons";

export interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  type: "address" | "phone" | "fax" | "email" | "skype";
}

export interface SocialLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url?: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: SvgMapMarker,
    text: "20001 SW Tualatin Valley Hwy Beaverton, OR 97003",
    type: "address",
  },
  {
    icon: SvgPhoneAlt,
    text: "503.259.2100",
    type: "phone",
  },
  {
    icon: SvgFax,
    text: "503.259.2100",
    type: "fax",
  },
  {
    icon: SvgEnvelope,
    text: "allprofessionalsre@gmail.com",
    type: "email",
  },
  {
    icon: SvgSkype,
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
  brokerReciprocityImg,
  rmlsImg,
  brokerReciprocityImg, // Duplicate as shown in Figma
  brokerReciprocityImg, // Duplicate as shown in Figma
  willametteValleyBoardImg,
];

export const socialMediaRow1: SocialLink[] = [
  { icon: SvgFacebook, name: "Facebook", url: "#" },
  { icon: SvgRss, name: "RSS", url: "#" },
  { icon: SvgTwitter, name: "Twitter", url: "#" },
  { icon: SvgDribbble, name: "Dribbble", url: "#" },
  { icon: SvgGoogle, name: "Google", url: "#" },
];

export const socialMediaRow2: SocialLink[] = [
  { icon: SvgLinkedIn, name: "LinkedIn", url: "#" },
  { icon: SvgTumblr, name: "Tumblr", url: "#" },
  { icon: SvgPinterest, name: "Pinterest", url: "#" },
  { icon: SvgYoutube, name: "YouTube", url: "#" },
  { icon: SvgVimeo, name: "Vimeo", url: "#" },
];

export const footerLinks: string[] = [
  "Documentation",
  "Video Tutorial",
  "Client Support",
];
