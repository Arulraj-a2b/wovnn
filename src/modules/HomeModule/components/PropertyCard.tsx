import React from "react";
import {
  SvgCamera,
  SvgVideo,
  SvgHeart,
  SvgMapPin,
  SvgBed,
  SvgBath,
  SvgArea,
} from "../../../assets/icons";
import type { GetProperties } from "../store/home.types";

type PropertyCardProps = {
  property: GetProperties;
};
const PropertyCard: React.FC<PropertyCardProps> = React.memo(({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-[0px_0px_20px_rgba(174,168,168,0.25)] overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="relative h-[267px]">
        <img
          src={property.photos?.[0]}
          className="w-full h-full object-cover"
        />

        {/* Tags Overlay */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex justify-between items-center">
          {/* Status Tags */}
          {/* <div className="flex gap-2.5">
            {property.property.type === "Featured" && (
              <span className="bg-[#22a9e0] border-2 border-[#22a9e0] text-white text-xs px-3 py-1 rounded-full">
                Featured
              </span>
            )}
            {property.property.type === "Hot" && (
              <span className="bg-[#141928] border-2 border-[#141928] text-white text-xs px-3 py-1 rounded-full">
                Hot
              </span>
            )}
          </div> */}
          <div />

          {/* Media Count */}
          <div className="flex gap-2.5">
            {property?.photos?.length && property?.photos?.length > 0 && (
              <div className="bg-white px-2.5 py-1 rounded-full flex items-center gap-1">
                <SvgCamera className="w-3.5 h-4 text-[#22a9e0]" />
                <span className="text-[#22a9e0] text-xs">
                  {property.photos?.length}
                </span>
              </div>
            )}

            {property.virtualTourUrl && (
              <div className="bg-white px-2.5 py-1 rounded-full flex items-center gap-1">
                <SvgVideo className="w-3.5 h-4 text-[#22a9e0]" />
                <span className="text-[#22a9e0] text-xs">1</span>
              </div>
            )}
            <button className="bg-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
              <SvgHeart className="w-4 h-4 text-[#22a9e0]" />
            </button>
          </div>
        </div>

        {/* Logo Overlay */}
        <div className="absolute bottom-2.5 left-2.5">
          <div className="inline-flex items-center self-start bg-[#f0f5ff] px-4 py-2 rounded-full">
            <span className="text-[#141928] text-sm">
              {property.property.type}
            </span>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-4 flex flex-col gap-3">
        <h3 className="text-[#141928] text-lg font-bold">
          {property.address.full}
        </h3>

        <div className="flex gap-1.5">
          <SvgMapPin className="w-4 h-4 text-[#787d8c]" />
          <p className="text-[#787d8c] text-sm">
            {property.address.full}, {property.address.city},{" "}
            {property.address.state}, {property.address.postalCode}
          </p>
        </div>

        {/* Price and Amenities */}
        <div className="flex items-center justify-between">
          <p className="text-[#141928] text-lg font-bold">
            ${property.listPrice}
          </p>

          <div className="flex items-center gap-3.5">
            <div className="flex items-center gap-2.5">
              <SvgBed className="w-4 h-4 text-[#141928]" />
              <span className="text-[#141928] text-base">
                {property.property.bedrooms}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <SvgBath className="w-4 h-4 text-[#141928]" />
              <span className="text-[#141928] text-base">
                {property.property.bathrooms}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <SvgArea className="w-4 h-4 text-[#141928]" />
              <span className="text-[#141928] text-base">
                {property.property.area}
              </span>
              <span className="text-[#787d8c] text-xs">sq ft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

PropertyCard.displayName = "PropertyCard";

export default PropertyCard;
