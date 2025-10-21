import React from "react";
import { propertyTypes } from "../constants/propertyTypes";
import PropertyTypeCard from "./PropertyTypeCard";

const PropertyTypesSection: React.FC = () => {
  return (
    <div className="py-20 px-[122px] bg-white">
      <div className="max-w-[1196px] mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-4 gap-[30px] auto-rows-auto">
          {/* Column 1: Title Section + Apartment */}
          <div className="flex flex-col gap-[30px]">
            {/* Title Section */}
            <div className="flex flex-col gap-[9.59px]">
              <h2 className="text-[#141928] text-2xl font-bold leading-normal whitespace-nowrap">
                Villa
              </h2>
              <p className="text-[#787d8c] text-base leading-[1.5] whitespace-pre-line">
                Lorem ipsum dolor sit amet,
                <br />
                consectetur adipiscing elit, sed do
                <br />
                eiusmod tempor incidi dunt
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-[82.98px] bg-[#141928]"></div>

            {/* Apartment Card */}
            <PropertyTypeCard {...propertyTypes[0]} />
          </div>

          {/* Column 2: Studio (Tall) */}
          <div>
            <PropertyTypeCard {...propertyTypes[1]} />
          </div>

          {/* Column 3: Single Family Home + Villa */}
          <div className="flex flex-col gap-[30px]">
            <PropertyTypeCard {...propertyTypes[2]} />
            <PropertyTypeCard {...propertyTypes[3]} />
          </div>

          {/* Column 4: Office + Shop */}
          <div className="flex flex-col gap-[30px]">
            <PropertyTypeCard {...propertyTypes[4]} />
            <PropertyTypeCard {...propertyTypes[5]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyTypesSection;
