import React from "react";

const Footer: React.FC = () => {
  const socialIcons = [
    { icon: "facebook", label: "Facebook" },
    { icon: "rss", label: "RSS" },
    { icon: "twitter", label: "Twitter" },
    { icon: "dribbble", label: "Dribbble" },
    { icon: "google", label: "Google" },
    { icon: "linkedin", label: "LinkedIn" },
    { icon: "tumblr", label: "Tumblr" },
    { icon: "pinterest", label: "Pinterest" },
    { icon: "youtube", label: "YouTube" },
    { icon: "vimeo", label: "Vimeo" },
  ];

  const featuredCommunities = [
    "Aloha, OR",
    "Banks, OR",
    "Beaverton, OR",
    "Cornelius, OR",
    "Hillsboro, OR",
    "Newberg, OR",
    "North Plains, OR",
    "Portland, OR",
  ];

  const partnerLogos = [
    "/images/partner1.png",
    "/images/partner2.png",
    "/images/partner3.png",
    "/images/partner4.png",
    "/images/partner5.png",
  ];

  return (
    <footer className="bg-[#141928] text-white">
      {/* Partner Logos Section */}
      <div className="py-10 px-[90px]">
        <div className="max-w-[1315px] mx-auto flex items-center justify-between gap-8">
          {partnerLogos.map((logo, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-10 flex items-center justify-center w-[233px] h-[115px] ${
                index === 0 ? "border-2 border-[#22a9e0]" : ""
              }`}
            >
              <div className="w-[167px] h-[35px] bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12 px-[90px]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-[1fr_auto_auto] gap-16">
          {/* Contact Information */}
          <div className="space-y-5">
            <h3 className="text-white text-base font-bold mb-5">Contact us</h3>

            <div className="space-y-1 text-[#f7f8f9] text-sm">
              <div className="flex items-center gap-3">
                <svg
                  className="w-3.5 h-3.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                </svg>
                <span>20001 SW Tualatin Valley Hwy Beaverton, OR 97003</span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-3.5 h-3.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>503.259.2100</span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-3.5 h-3.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span>503.259.2100</span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-3.5 h-3.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span>allprofessionalsre@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-3.5 h-3.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>allprofessionalsre</span>
              </div>
            </div>
          </div>

          {/* Featured Communities */}
          <div className="space-y-5">
            <h3 className="text-white text-base font-bold">
              Featured Communities
            </h3>
            <ul className="space-y-1 text-[#f7f8f9] text-sm">
              {featuredCommunities.map((community, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-white transition-colors"
                >
                  {community}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter and Social */}
          <div className="space-y-6">
            {/* Social Icons */}
            <div className="grid grid-cols-5 gap-2.5">
              {socialIcons.map((social, index) => (
                <button
                  key={index}
                  className="bg-[#505564] border border-[#505564] w-10 h-10 rounded flex items-center justify-center hover:bg-[#22a9e0] hover:border-[#22a9e0] transition-colors"
                  aria-label={social.label}
                >
                  <span className="text-[#f7f8f9] text-base">•</span>
                </button>
              ))}
            </div>

            {/* Newsletter */}
            <div className="space-y-3">
              <h3 className="text-white text-xl font-bold">Homes by Email</h3>
              <p className="text-white text-xs text-center">
                Be the first to see new listings as soon as they hit the market!
              </p>

              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email Address"
                  className="flex-1 border border-[#f0f5ff] bg-white rounded px-3 py-2 text-sm text-[#787d8c] placeholder:text-[#787d8c]"
                />
                <button className="bg-[#22a9e0] text-white px-6 py-2 rounded shadow-[0px_0px_10px_rgba(182,182,182,0.5)]">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer Text */}
      <div className="px-[90px] pb-8">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[#f7f8f9] text-sm leading-relaxed">
            <span className="font-bold">
              ©2023, Lincoln County MLS. All rights reserved.
            </span>{" "}
            Information deemed to be reliable but not guaranteed. The data
            relating to real estate for sale on this website comes from Lincoln
            County MLS and the Broker Reciprocity Program.sm. Real estate
            listings held by brokerage firms other than All Professionals Real
            Estate are marked with the BR logo and detailed information about
            them includes the name of the listing brokers. Listing broker has
            attempted to offer accurate data, but buyers are advised to confirm
            all items. Information last updated on 2023-09-12 17:30:13.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#141928] border-t border-white/10 py-5 px-[90px]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <p className="text-[#f7f8f9] text-sm">
            Copyright WOVNN. All Rights Reserved.
          </p>

          <div className="flex items-center gap-7 text-[#f7f8f9] text-sm">
            <button className="hover:text-white transition-colors">
              Documentation
            </button>
            <button className="hover:text-white transition-colors">
              Video Tutorial
            </button>
            <button className="hover:text-white transition-colors">
              Client Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
