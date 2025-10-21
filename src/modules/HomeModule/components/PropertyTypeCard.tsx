import React from "react";
import { type PropertyTypeCardProps } from "../constants/propertyTypes";
import { SvgArrowDown } from "../../../assets/icons";

const PropertyTypeCard: React.FC<PropertyTypeCardProps> = ({
  image,
  type,
  count,
  tall = "short",
  darkOverlay = false,
}) => {
  let height;

  if (tall === "short") {
    height = "h-[276.66px]";
  } else if (tall === "medium") {
    height = "h-[583.31px]";
  } else if (tall === "full") {
    height = "h-[100%]";
  }

  const overlayOpacity = darkOverlay ? "opacity-75" : "opacity-30";

  return (
    <div
      className={`relative ${height} w-full rounded-[4px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.1)] overflow-hidden group cursor-pointer`}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={type}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Dark Overlay */}
      <div
        className={`absolute inset-0 bg-[#141928] ${overlayOpacity} group-hover:opacity-50 transition-opacity`}
      ></div>

      {/* Content */}
      <div className="absolute inset-0 p-[30px] flex flex-col justify-between">
        {/* Top Section */}
        <div>
          <p className="text-white text-[12px] leading-[1.5] mb-[11px]">
            {count} Properties
          </p>
          <h3 className="text-white text-[20px] font-bold leading-normal">
            {type}
          </h3>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between">
          <span className="text-white text-[12px] leading-[1.5]">
            More Properties
          </span>
          <SvgArrowDown className="w-[15px] h-[15px] text-white" />
        </div>
      </div>
    </div>
  );
};

export default PropertyTypeCard;
