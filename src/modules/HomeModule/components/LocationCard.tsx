import React from "react";
import { type LocationCardProps } from "../constants/locations";

interface LocationCardComponentProps extends LocationCardProps {
  onClick?: () => void;
}

const LocationCard: React.FC<LocationCardComponentProps> = React.memo(
  ({ image, name, onClick }) => {
    return (
      <div
        onClick={onClick}
        className="relative h-[293px] w-full rounded-[3px] shadow-[0px_10px_31px_0px_rgba(7,152,255,0.09)] overflow-hidden group cursor-pointer transition-shadow duration-300 hover:shadow-[0px_15px_35px_0px_rgba(7,152,255,0.15)]"
      >
        <img
          src={image}
          alt={name}
          className="absolute h-full left-[-25%] max-w-none top-0 w-[150%] object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Location Badge */}
        <div className="absolute bottom-4 left-4 bg-[#f0f5ff] px-4 py-2 rounded-[50px] group-hover:bg-[#22a9e0] transition-colors duration-300">
          <p className="text-[#505564] text-sm font-normal leading-[1.5] whitespace-nowrap group-hover:text-white transition-colors duration-300">
            {name}
          </p>
        </div>
      </div>
    );
  }
);

LocationCard.displayName = "LocationCard";

export default LocationCard;
