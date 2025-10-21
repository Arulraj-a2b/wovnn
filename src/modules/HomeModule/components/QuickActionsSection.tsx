import React from "react";
import { quickActions } from "../constants/quickActions";
import QuickActionCard from "./QuickActionCard";

const QuickActionsSection: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex">
        {quickActions.map((action, index) => (
          <QuickActionCard key={index} {...action} />
        ))}
      </div>
    </div>
  );
};

export default QuickActionsSection;
