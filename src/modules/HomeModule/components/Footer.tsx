import React from "react";
import {
  contactInfo,
  featuredCommunities,
  partnerLogos,
  footerLinks,
} from "../constants/footer";
import {
  SvgFacebook,
  SvgTwitter,
  SvgLinkedIn,
  SvgYoutube,
  SvgPinterest,
} from "../../../assets/icons";

const Footer: React.FC = () => {
  const socialMediaRow1 = [
    { icon: SvgFacebook, name: "Facebook" },
    { icon: SvgTwitter, name: "RSS" },
    { icon: SvgTwitter, name: "Twitter" },
    { icon: SvgTwitter, name: "Dribbble" },
    { icon: SvgTwitter, name: "Google" },
  ];

  const socialMediaRow2 = [
    { icon: SvgLinkedIn, name: "LinkedIn" },
    { icon: SvgTwitter, name: "Tumblr" },
    { icon: SvgPinterest, name: "Pinterest" },
    { icon: SvgYoutube, name: "YouTube" },
    { icon: SvgTwitter, name: "Vimeo" },
  ];

  return (
    <footer className="bg-[#141928] text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-[45px] py-[30px]">
        <div className="grid grid-cols-[540px_255px_1fr] gap-[44px] relative h-[440px]">
          {/* Contact Us Section */}
          <div className="pt-[45px]">
            <h3 className="text-white text-base font-bold mb-[30px] whitespace-nowrap">
              Contact us
            </h3>
            <div className="space-y-1">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-[#f7f8f9] text-[14px] leading-[1.5] pb-1"
                >
                  <span className="text-[14px]">{contact.icon}</span>
                  <span className="whitespace-nowrap">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Communities Section */}
          <div className="pt-[45px]">
            <h3 className="text-white text-base font-bold mb-5 whitespace-nowrap">
              Featured Communities
            </h3>
            <div className="space-y-1">
              {featuredCommunities.map((community, index) => (
                <div key={index} className="pb-1">
                  <p className="text-[#f7f8f9] text-[14px] leading-[1.5] whitespace-nowrap">
                    {community}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media & Email Section */}
          <div className="pt-[45px] flex flex-col gap-[50px]">
            {/* Social Media Icons */}
            <div className="space-y-[50px]">
              {/* Row 1 */}
              <div className="flex gap-[10px]">
                {socialMediaRow1.map((social, index) => (
                  <button
                    key={index}
                    className="w-[41px] h-[41px] bg-[#505564] border border-[#505564] rounded-[4px] flex items-center justify-center hover:bg-[#646978] transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4 text-[#f7f8f9]" />
                  </button>
                ))}
              </div>
              {/* Row 2 */}
              <div className="flex gap-[10px]">
                {socialMediaRow2.map((social, index) => (
                  <button
                    key={index}
                    className="w-[41px] h-[41px] bg-[#505564] border border-[#505564] rounded-[4px] flex items-center justify-center hover:bg-[#646978] transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4 text-[#f7f8f9]" />
                  </button>
                ))}
              </div>
            </div>

            {/* Homes by Email */}
            <div>
              <h3 className="text-white text-[20px] font-bold leading-normal text-center mb-[3px] whitespace-nowrap">
                Homes by Email
              </h3>
              <p className="text-white text-[12px] leading-[1.5] text-center mb-[17px] whitespace-nowrap">
                Be the first to see new listings as soon as they hit the market!
              </p>
              <div className="flex gap-0">
                <input
                  type="email"
                  placeholder="Enter your email Address"
                  className="flex-1 h-[41px] px-[18px] bg-white border border-[#f0f5ff] rounded-l-[4px] text-[#787d8c] text-[14px] leading-[1.5] outline-none"
                />
                <button className="w-[111px] h-[41px] bg-[#22a9e0] text-white text-base font-medium rounded-r-[4px] shadow-[0px_0px_10px_rgba(182,182,182,0.5)] hover:bg-[#1a8bc2] transition-colors whitespace-nowrap">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos */}
      <div className="max-w-[1260px] mx-auto px-[30px] py-5">
        <div className="flex items-center justify-between gap-[15px]">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className={`bg-white rounded-[10px] w-[233px] h-[115px] flex items-center justify-center px-5 py-10 ${
                index === 0 ? "border-2 border-[#22a9e0]" : ""
              }`}
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Text */}
      <div className="max-w-[1200px] mx-auto px-[45px] text-[#f7f8f9] text-[14px] leading-[1.5]">
        <p>
          <span className="font-bold">
            ©2023, Lincoln County MLS. All rights reserved.{" "}
          </span>
          Information deemed to be reliable but not guaranteed. The data
          relating to real estate for sale on this website comes from Lincoln
          County MLS and the Broker Reciprocity Program.sm. Real estate listings
          held by brokerage firms other than All Professionals Real Estate are
          marked with the BR logo and detailed information about them includes
          the name of the listing brokers. Listing broker has attempted to offer
          accurate data, but buyers are advised to confirm all items.Information
          last updated on 2023-09-12 17:30:13.
        </p>
      </div>

      {/* Sub Footer */}
      <div className="bg-[#141928] w-full h-[60px] flex items-center justify-center px-[120px] mt-8">
        <div className="max-w-[1200px] w-full px-[45px] flex items-center justify-between">
          <p className="text-[#f7f8f9] text-[14px] leading-[1.5] whitespace-nowrap">
            Copyright WOVNN. All Rights Reserved.
          </p>
          <div className="flex items-center gap-[29.3px] text-[#f7f8f9] text-[14px] leading-[1.5]">
            {footerLinks.map((link, index) => (
              <button
                key={index}
                className="whitespace-nowrap hover:text-white transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
