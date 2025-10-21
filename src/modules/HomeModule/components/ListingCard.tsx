import React from "react";
import { type ListingCardProps } from "../constants/justListed";
import { SvgMapPin, SvgBed, SvgBath, SvgArea } from "../../../assets/icons";

const ListingCard: React.FC<ListingCardProps> = React.memo(
  ({ image, title, address, price, beds, baths, sqft }) => {
    return (
      <div className="bg-white rounded-[10px] shadow-[0px_0px_20px_0px_rgba(208,208,208,0.25)] overflow-hidden flex">
        {/* Image Section */}
        <div className="w-[237px] h-[178px] shrink-0">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          {/* Title */}
          <h3 className="text-[#505564] text-[18px] font-bold leading-normal">
            {title}
          </h3>

          {/* Address */}
          <div className="flex items-center gap-2.5">
            <SvgMapPin className="w-[11px] h-4 text-[#787d8c]" />
            <p className="text-[#787d8c] text-[14px] leading-[1.5]">
              {address}
            </p>
          </div>

          {/* Amenities */}
          <div className="flex items-center gap-[14.8px]">
            <div className="flex items-center gap-2.5">
              <SvgBed className="w-[18px] h-[18px] text-[#141928]" />
              <span className="text-[#141928] text-[14px] leading-[1.5]">
                {beds}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <SvgBath className="w-[18px] h-[18px] text-[#141928]" />
              <span className="text-[#141928] text-[14px] leading-[1.5]">
                {baths}
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <SvgArea className="w-[18px] h-[18px] text-[#141928]" />
              <span className="text-[#141928] text-[14px] leading-[1.5]">
                {sqft}
              </span>
              <span className="text-[#787d8c] text-[12px] leading-[1.5]">
                sq ft
              </span>
            </div>
          </div>

          {/* Price */}
          <p className="text-[#141928] text-2xl font-bold leading-normal">
            {price}
          </p>
        </div>
      </div>
    );
  }
);

ListingCard.displayName = "ListingCard";

export default ListingCard;
