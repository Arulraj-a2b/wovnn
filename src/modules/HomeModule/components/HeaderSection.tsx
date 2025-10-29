import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { headerSectionImg } from "../../../assets/images";
import {
  SvgMapPin,
  SvgHome,
  SvgSliders,
  SvgDollarSign,
} from "../../../assets/icons";
import {
  PROPERTY_TYPE_OPTIONS,
  PROPERTY_FEATURES_OPTIONS,
  budgetRanges,
} from "../constants/searchOptions";
import Header from "./Header";
import { routes } from "@/routes/routesPath";

const HeaderSection: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    location: "",
    propertyType: "",
    propertyFeatures: "",
    budget: "",
  });

  const handleSearch = () => {
    const queryParams = new URLSearchParams();

    if (searchParams.location) {
      queryParams.append("location", searchParams.location);
    }
    if (searchParams.propertyType) {
      queryParams.append("type", searchParams.propertyType);
    }
    if (searchParams.propertyFeatures) {
      queryParams.append("subtype", searchParams.propertyFeatures);
    }
    if (searchParams.budget) {
      queryParams.append("budget", searchParams.budget);
    }

    navigate(`${routes.SEARCH_VIEW}?${queryParams.toString()}`);
  };

  return (
    <div className="relative w-full h-[430px] overflow-visible">
      <div className="absolute inset-0 h-[350px] overflow-visible">
        <div className="absolute inset-0">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={headerSectionImg}
              alt="Header Background"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#141928] opacity-60"></div>

          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold text-center whitespace-nowrap z-10">
            Your Search, Your Way
          </h1>
        </div>

        <Header />
      </div>

      <div className="absolute top-[271px] left-1/2 transform -translate-x-1/2 w-[990px] z-30">
        <div className="bg-white rounded-xl shadow-[0px_0px_20px_rgba(20,25,40,0.2)] p-6 flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <div className="flex-1 relative">
              <SvgMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#646978]" />
              <Input
                placeholder="Enter City or Zip Code"
                className="pl-10 border-[#f0f5ff]"
                value={searchParams.location}
                onChange={(e) =>
                  setSearchParams({ ...searchParams, location: e.target.value })
                }
              />
            </div>

            <Select
              value={searchParams.propertyType}
              onValueChange={(value) =>
                setSearchParams({ ...searchParams, propertyType: value })
              }
            >
              <SelectTrigger className="flex-1 border-[#f0f5ff]">
                <div className="flex items-center gap-2.5">
                  <SvgHome className="w-5 h-5 text-[#646978]" />
                  <SelectValue placeholder="Property Type" />
                </div>
              </SelectTrigger>
              <SelectContent className="z-[100]">
                {PROPERTY_TYPE_OPTIONS.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={searchParams.propertyFeatures}
              onValueChange={(value) =>
                setSearchParams({ ...searchParams, propertyFeatures: value })
              }
            >
              <SelectTrigger className="flex-1 border-[#f0f5ff]">
                <div className="flex items-center gap-2.5">
                  <SvgSliders className="w-5 h-5 text-[#646978]" />
                  <SelectValue placeholder="Property Features" />
                </div>
              </SelectTrigger>
              <SelectContent className="z-[100]">
                {PROPERTY_FEATURES_OPTIONS.map((feature) => (
                  <SelectItem key={feature.value} value={feature.value}>
                    {feature.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={searchParams.budget}
              onValueChange={(value) =>
                setSearchParams({ ...searchParams, budget: value })
              }
            >
              <SelectTrigger className="flex-1 border-[#f0f5ff]">
                <div className="flex items-center gap-2.5">
                  <SvgDollarSign className="w-5 h-5 text-[#646978]" />
                  <SelectValue placeholder="Budget" />
                </div>
              </SelectTrigger>
              <SelectContent className="z-[100]">
                {budgetRanges.map((budget) => (
                  <SelectItem key={budget.value} value={budget.value}>
                    {budget.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start gap-6 justify-end">
            <Button className="px-16" onClick={handleSearch}>
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
