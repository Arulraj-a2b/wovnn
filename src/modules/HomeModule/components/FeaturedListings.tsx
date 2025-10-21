import React from "react";
import { featuredProperties } from "../constants/featuredListings";
import PropertyCard from "./PropertyCard";
import PaginationControls from "./PaginationControls";

const FeaturedListings: React.FC = () => {
  return (
    <div className="py-20 px-[90px]">
      <div className="relative max-w-[1260px] mx-auto">
        {/* Property Cards Grid */}
        <div className="grid grid-cols-3 gap-10">
          {featuredProperties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-10">
          <div />
          {/* Pagination Controls */}
          <PaginationControls currentPage={1} totalPages={4} />

          {/* More Listing Button */}
          <div className="flex justify-end mt-10">
            <button className="border border-[#141928] text-[#141928] px-12 py-3 rounded font-medium">
              More Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListings;
