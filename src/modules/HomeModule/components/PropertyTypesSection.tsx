import React from "react";
import { useNavigate } from "react-router-dom";
import { propertyTypes } from "../constants/propertyTypes";
import PropertyTypeCard from "./PropertyTypeCard";
import { routes } from "@/routes/routesPath";

const PropertyTypesSection: React.FC = () => {
  const navigate = useNavigate();

  const handlePropertyTypeClick = (subtype?: string) => {
    if (subtype) {
      navigate(`${routes.SEARCH_VIEW}?subtype=${subtype}`);
    }
  };

  return (
    <div className="py-20 px-[122px] bg-white">
      <div className="max-w-[1196px] mx-auto">
        <div className="grid grid-cols-4 gap-[30px] auto-rows-auto">
          <div className="flex flex-col gap-[30px]">
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

            <div className="h-px w-[82.98px] bg-[#141928]"></div>

            <PropertyTypeCard
              {...propertyTypes[0]}
              onClick={() => handlePropertyTypeClick(propertyTypes[0].subtype)}
            />
          </div>

          <div>
            <PropertyTypeCard
              {...propertyTypes[1]}
              onClick={() => handlePropertyTypeClick(propertyTypes[1].subtype)}
            />
          </div>

          <div className="flex flex-col gap-[30px]">
            <PropertyTypeCard
              {...propertyTypes[2]}
              onClick={() => handlePropertyTypeClick(propertyTypes[2].subtype)}
            />
            <PropertyTypeCard
              {...propertyTypes[3]}
              onClick={() => handlePropertyTypeClick(propertyTypes[3].subtype)}
            />
          </div>

          <div className="flex flex-col gap-[30px]">
            <PropertyTypeCard
              {...propertyTypes[4]}
              onClick={() => handlePropertyTypeClick(propertyTypes[4].subtype)}
            />
            <PropertyTypeCard
              {...propertyTypes[5]}
              onClick={() => handlePropertyTypeClick(propertyTypes[5].subtype)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyTypesSection;
