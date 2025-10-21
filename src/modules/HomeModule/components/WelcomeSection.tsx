import React from "react";
import { welcomeSectionImg } from "../../../assets/images";

const WelcomeSection: React.FC = () => {
  return (
    <div className="py-20 px-[90px]">
      <div className="max-w-[1260px] mx-auto">
        <div className="grid grid-cols-[427px_1fr] gap-[70px] items-start">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Title */}
            <h2 className="text-[#141928] text-[48px] font-bold leading-[100%] mb-[65px] whitespace-nowrap">
              Welcome to Wovnn
            </h2>

            {/* Image */}
            <div className="relative w-full">
              <img
                src={welcomeSectionImg}
                alt="Welcome to Wovnn"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="text-[#787d8c] text-[14px] leading-[1.5] pt-[17px]">
            <p className="mb-0">
              Welcome to the premier resource for all real estate information
              and services in the area. We hope you enjoy your visit and explore
              everything our realty website has to offer, including Aloha,
              Banks, Beaverton, Cornelius, Hillsboro, Newberg, North Plains,
              Portland, Rockaway Beach, Scappoose, Sherwood, Tigard, Tualatin,
              Warren, Garibaldi, Manzanita, Tillamook, Bethany, Cedar Hills,
              Cedar Mill and the Surrounding Areas real estate listings,
              information for homebuyers and sellers, and more About Us.
            </p>

            <p className="mb-0">&nbsp;</p>

            <p className="mb-0">
              Looking for a new home? Use Quick Search or Map Search to browse
              an up-to-date database list of all available properties in the
              area, or use our Dream Home Finder form and we'll conduct a
              personalized search for you.
            </p>

            <p className="mb-0">&nbsp;</p>

            <p>
              If you're planning to sell your home in the next few months,
              nothing is more important than knowing a fair asking price. We
              would love to help you with a FREE Market Analysis. We will use
              comparable sold listings to help you determine the accurate market
              value of your home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
