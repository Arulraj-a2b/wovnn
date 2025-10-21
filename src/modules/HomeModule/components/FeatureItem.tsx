import React from "react";
import { type FeatureItemProps } from "../constants/whyChoose";

const FeatureItem: React.FC<FeatureItemProps> = React.memo(
  ({ number, title, description }) => {
    return (
      <div className="space-y-6">
        {/* Divider Line */}
        <div className="h-px w-[97px] bg-white"></div>

        {/* Number */}
        <p className="text-white text-[32px] font-bold leading-normal">
          {number}
        </p>

        {/* Title */}
        <h3 className="text-white text-2xl font-bold leading-normal whitespace-nowrap">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white text-base leading-[1.5] w-[324px]">
          {description}
        </p>
      </div>
    );
  }
);

FeatureItem.displayName = "FeatureItem";

export default FeatureItem;
