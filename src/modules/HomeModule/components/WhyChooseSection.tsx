import React from "react";
import { whyChooseSectionImg } from "../../../assets/images";
import { features } from "../constants/whyChoose";
import FeatureItem from "./FeatureItem";
import InquiryForm from "./InquiryForm";

const WhyChooseSection: React.FC = () => {
  const leftFeatures = features.filter((f) => f.position === "left");
  const rightFeatures = features.filter((f) => f.position === "right");

  return (
    <div className="relative py-10 px-20 bg-cover bg-center bg-no-repeat">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={whyChooseSectionImg}
          alt="Why Choose Wovnn"
          className="absolute h-full left-0 max-w-none top-0 w-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-[1260px] mx-auto flex items-start justify-between">
        {/* Left Side: Title and Features */}
        <div className="w-[709px] flex flex-col">
          {/* Title */}
          <h2 className="text-white text-[48px] font-bold leading-normal w-[324px] mb-[68px]">
            Why Wovnn Is The Perfect Choice?
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-x-[61px]">
            {/* Left Column */}
            <div className="space-y-0">
              {leftFeatures.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-0">
              {rightFeatures.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Inquiry Form */}
        <InquiryForm />
      </div>
    </div>
  );
};

export default WhyChooseSection;
