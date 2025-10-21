import React from "react";
import { locations } from "../constants/locations";
import LocationCard from "./LocationCard";

const LocationsSection: React.FC = () => {
  return (
    <div className="py-20 px-[90px]">
      <div className="max-w-[1260px] mx-auto bg-white rounded-sm shadow-[0px_10px_31px_rgba(7,152,255,0.09)] p-[30px]">
        {/* Header */}
        <div className="flex flex-col mb-10">
          <h2 className="text-[#141928] text-5xl font-bold text-center flex-1">
            View by Locations
          </h2>
          <button className="text-[#141928] text-right text-base font-medium whitespace-nowrap cursor-pointer hover:text-[#22a9e0] transition-colors">
            View All Locations
          </button>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-4 gap-[37px]">
          {locations.map((location, index) => (
            <LocationCard key={index} {...location} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationsSection;
