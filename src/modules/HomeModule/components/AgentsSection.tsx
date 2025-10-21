import React from "react";
import { agents } from "../constants/agents";
import AgentCard from "./AgentCard";

const AgentsSection: React.FC = () => {
  return (
    <div className="py-15 px-[133px]">
      <div className="max-w-[1174px] mx-auto gap-10 flex flex-col">
        <h2 className="text-[#141928] text-[48px] font-bold leading-[normal] text-center whitespace-nowrap">
          Meet Our Agents
        </h2>

        <div className="grid grid-cols-4 gap-4">
          {agents.map((agent, index) => (
            <AgentCard key={index} {...agent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentsSection;
