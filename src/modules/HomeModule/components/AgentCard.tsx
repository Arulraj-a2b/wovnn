import React from "react";
import { type AgentCardProps } from "../constants/agents";

const AgentCard: React.FC<AgentCardProps> = ({
  image,
  name,
  role,
  company,
  description,
  companyOnOneLine = false,
}) => {
  const renderCompanyInfo = () => {
    if (companyOnOneLine) {
      // Single line: "Company Agent , All American Real Estate"
      return (
        <div className="text-[#141928] text-[14px] font-normal leading-[1.5] text-center whitespace-nowrap">
          <p className="leading-[1.5] whitespace-pre">{`${role} , ${company}`}</p>
        </div>
      );
    } else {
      // Two lines: "Real Estate Agent , Country" / "House Real Estate"
      const firstWord = company.split(" ")[0];
      const restOfCompany = company.split(" ").slice(1).join(" ");
      return (
        <div className="text-[#141928] text-[14px] font-normal leading-[1.5] text-center whitespace-nowrap">
          <p className="mb-0">{`${role} , ${firstWord}`}</p>
          <p>{restOfCompany}</p>
        </div>
      );
    }
  };

  return (
    <div className="bg-white flex flex-col items-center pt-6 pb-8 rounded-sm justify-between">
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={name}
          className="w-[150px] h-[150px] object-cover rounded-full"
        />

        <div className="flex flex-col items-center gap-2 mt-4">
          <div className="text-[#22a9e0] text-[16px] font-bold leading-[1.5] text-center whitespace-nowrap">
            <p className="leading-[1.5] whitespace-pre">{name}</p>
          </div>

          <div className="w-[205.5px] flex flex-col items-center">
            {renderCompanyInfo()}
          </div>
        </div>

        <div className="px-9 mt-4 mb-6">
          <div className="max-w-[205.5px] text-[#787d8c] text-[14px] font-normal leading-[1.5] text-center">
            <p>{description}</p>
          </div>
        </div>
      </div>

      <button className="text-[#22a9e0] text-[16px] font-bold leading-[normal] whitespace-nowrap cursor-pointer hover:text-[#1a8bc2] transition-colors">
        View Profile
      </button>
    </div>
  );
};

export default AgentCard;
