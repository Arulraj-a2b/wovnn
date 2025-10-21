import React from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { headerSectionImg, wovnnLogoImg } from "../../../assets/images";
import {
  SvgChevronDown,
  SvgMapPin,
  SvgHome,
  SvgSliders,
  SvgDollarSign,
  SvgPalette,
  SvgImage,
  SvgUser,
} from "../../../assets/icons";
import {
  searchMenuItems,
  resourcesMenuItems,
  aboutMenuItems,
  propertyTypes,
  propertyFeatures,
  budgetRanges,
  advancedSearchOptions,
  lifestyleOptions,
} from "../constants/searchOptions";

const HeaderSection: React.FC = () => {
  return (
    <div className="relative w-full h-[430px] overflow-visible">
      {/* Header Background */}
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

        {/* Navigation Bar */}
        <div className="absolute top-[30px] left-[90px] right-[90px] flex items-center justify-between z-20">
          {/* Logo */}
          <div className="h-[70px] w-[135px]">
            <img
              src={wovnnLogoImg}
              alt="Wovnn Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-12">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-white text-base capitalize hover:bg-white/10 hover:text-white"
                >
                  Search
                  <SvgChevronDown className="w-4 h-4 transform" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="z-[100] bg-white border-gray-200">
                {searchMenuItems.map((item) => (
                  <DropdownMenuItem key={item.value} className="cursor-pointer">
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-white text-base capitalize hover:bg-white/10 hover:text-white"
                >
                  Resources
                  <SvgChevronDown className="w-4 h-4 transform" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="z-[100] bg-white border-gray-200">
                {resourcesMenuItems.map((item) => (
                  <DropdownMenuItem key={item.value} className="cursor-pointer">
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-white text-base capitalize hover:bg-white/10 hover:text-white"
                >
                  About
                  <SvgChevronDown className="w-4 h-4 transform" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-[100] bg-white border-gray-200">
                {aboutMenuItems.map((item) => (
                  <DropdownMenuItem key={item.value} className="cursor-pointer">
                    {item.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              className="text-white text-base capitalize hover:bg-white/10 hover:text-white"
            >
              Contact Us
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hover:text-white"
            >
              <SvgUser className="w-6 h-6" />
            </Button>
          </nav>
        </div>
      </div>

      {/* Search Dialog */}
      <div className="absolute top-[271px] left-1/2 transform -translate-x-1/2 w-[990px] z-30">
        <div className="bg-white rounded-xl shadow-[0px_0px_20px_rgba(20,25,40,0.2)] p-6 flex flex-col gap-6">
          {/* First Row of Search Filters */}
          <div className="flex items-center gap-6">
            <div className="flex-1 relative">
              <SvgMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#646978]" />
              <Input
                placeholder="Enter City or Zip Code"
                className="pl-10 border-[#f0f5ff]"
              />
            </div>

            <Select>
              <SelectTrigger className="flex-1 border-[#f0f5ff]">
                <div className="flex items-center gap-2.5">
                  <SvgHome className="w-5 h-5 text-[#646978]" />
                  <SelectValue placeholder="Property Type" />
                </div>
              </SelectTrigger>
              <SelectContent className="z-[100]">
                {propertyTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="flex-1 border-[#f0f5ff]">
                <div className="flex items-center gap-2.5">
                  <SvgSliders className="w-5 h-5 text-[#646978]" />
                  <SelectValue placeholder="Property Features" />
                </div>
              </SelectTrigger>
              <SelectContent className="z-[100]">
                {propertyFeatures.map((feature) => (
                  <SelectItem key={feature.value} value={feature.value}>
                    {feature.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
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

          {/* Second Row of Search Filters */}
          <div className="flex items-start gap-6">
            <Select>
              <SelectTrigger className="flex-1 border-[#f0f5ff]">
                <div className="flex items-center gap-2.5">
                  <SvgPalette className="w-5 h-5 text-[#646978]" />
                  <SelectValue placeholder="Advanced Search (Optional)" />
                </div>
              </SelectTrigger>
              <SelectContent className="z-[100]">
                {advancedSearchOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="flex-1 border-[#f0f5ff]">
                <div className="flex items-center gap-2.5">
                  <SvgImage className="w-5 h-5 text-[#646978]" />
                  <SelectValue placeholder="Lifestyle Search (Optional)" />
                </div>
              </SelectTrigger>
              <SelectContent className="z-[100]">
                {lifestyleOptions.map((lifestyle) => (
                  <SelectItem key={lifestyle.value} value={lifestyle.value}>
                    {lifestyle.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button className="px-16">Search</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
