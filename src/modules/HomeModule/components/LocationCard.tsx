import React from "react";
import { type LocationCardProps } from "../constants/locations";

const LocationCard: React.FC<LocationCardProps> = ({ image, name }) => {
  return (
    <div className="relative h-[293px] w-full rounded-[3px] shadow-[0px_10px_31px_0px_rgba(7,152,255,0.09)] overflow-hidden group cursor-pointer">
      <img
        src={image}
        alt={name}
        className="absolute h-full left-[-25%] max-w-none top-0 w-[150%] object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Location Badge */}
      <div className="absolute bottom-4 left-4 bg-[#f0f5ff] px-4 py-2 rounded-[50px]">
        <p className="text-[#505564] text-sm font-normal leading-[1.5] whitespace-nowrap">
          {name}
        </p>
      </div>
    </div>
  );
};

export default LocationCard;
