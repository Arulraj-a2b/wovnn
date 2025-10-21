import React from "react";
import { type QuickActionCardProps } from "../constants/quickActions";
import { SvgHome, SvgLocationPin, SvgPhone } from "../../../assets/icons";

const QuickActionCard: React.FC<QuickActionCardProps> = ({
  icon,
  title,
  description,
  bgColor,
}) => {
  const renderIcon = () => {
    const iconClassName = "w-[54px] h-[54px] text-white";

    switch (icon) {
      case "home":
        return <SvgHome className={iconClassName} />;
      case "locationPin":
        return <SvgLocationPin className={iconClassName} />;
      case "phone":
        return <SvgPhone className={iconClassName} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="flex-1 h-[132px] px-8 py-[31px] flex flex-col justify-center cursor-pointer hover:opacity-90 transition-opacity"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="shrink-0">{renderIcon()}</div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white text-2xl font-bold leading-normal">
            {title}
          </h3>
          <p className="text-white text-sm font-normal leading-[1.5]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickActionCard;
