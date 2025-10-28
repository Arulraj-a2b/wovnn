import React from "react";
import { useNavigate } from "react-router-dom";
import { locations } from "../constants/locations";
import LocationCard from "./LocationCard";
import { routes } from "@/routes/routesPath";

const LocationsSection: React.FC = () => {
  const navigate = useNavigate();

  const handleLocationClick = (locationName: string) => {
    // Navigate to search view with city parameter
    navigate(`${routes.SEARCH_VIEW}?city=${encodeURIComponent(locationName)}`);
  };

  const handleViewAllLocations = () => {
    // Navigate to search view without filters to show all locations
    navigate(routes.SEARCH_VIEW);
  };

  return (
    <div className="py-20 px-[90px]">
      <div className="max-w-[1260px] mx-auto bg-white rounded-sm shadow-[0px_10px_31px_rgba(7,152,255,0.09)] p-[30px]">
        {/* Header */}
        <div className="flex flex-col mb-10">
          <h2 className="text-[#141928] text-5xl font-bold text-center flex-1">
            View by Locations
          </h2>
          <button
            onClick={handleViewAllLocations}
            className="text-[#141928] text-right text-base font-medium whitespace-nowrap cursor-pointer hover:text-[#22a9e0] transition-colors"
          >
            View All Locations
          </button>
        </div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-4 gap-[37px]">
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              {...location}
              onClick={() => handleLocationClick(location.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationsSection;
