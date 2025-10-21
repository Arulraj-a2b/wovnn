import React from "react";
import { justListedProperties } from "../constants/justListed";
import ListingCard from "./ListingCard";

const JustListedSection: React.FC = () => {
  return (
    <div className="py-20 px-[90px] bg-[#f7f8f9]">
      <div className="max-w-[1260px] mx-auto">
        {/* Header */}
        <div className="flex flex-col mb-14 gap-4">
          <h2 className="text-[#141928] text-[48px] font-bold leading-normal text-center flex-1 whitespace-nowrap">
            Just Listed Homes for Sale in Beaverton, OR
          </h2>
          <button className="text-[#141928] text-right text-base font-medium leading-[1.5] whitespace-nowrap cursor-pointer hover:text-[#22a9e0] transition-colors">
            View All Locations
          </button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-2 gap-[30px]">
          {justListedProperties.map((property, index) => (
            <ListingCard key={index} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JustListedSection;
