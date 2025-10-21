import React from "react";
import { type TestimonialCardProps } from "../constants/testimonials";
import { SvgStar } from "../../../assets/icons";

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  image,
  name,
  role,
  testimonial,
  rating,
}) => {
  return (
    <div className="bg-white h-[257.28px] w-[343.33px] rounded-[4px] shadow-[0px_10px_31px_0px_rgba(7,152,255,0.09)] p-[45px] flex flex-col">
      {/* Header: Avatar + Name & Role */}
      <div className="flex items-center gap-[20px] mb-[26px]">
        {/* Avatar */}
        <div className="w-[45px] h-[45px] rounded-full shadow-[0px_10px_31px_0px_rgba(7,152,255,0.09)] overflow-hidden flex-shrink-0">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* Name & Role */}
        <div className="flex flex-col justify-center">
          <h3 className="text-[#141928] text-[18px] font-bold leading-normal whitespace-nowrap">
            {name}
          </h3>
          <p className="text-[#787d8c] text-[14px] leading-[1.5] whitespace-nowrap">
            {role}
          </p>
        </div>
      </div>

      {/* Testimonial Text */}
      <div className="flex-1 mb-[24px]">
        <p className="text-[#787d8c] text-[14px] leading-[1.5]">
          {testimonial}
        </p>
      </div>

      {/* Star Rating */}
      <div className="flex items-center gap-[5.6px]">
        {Array.from({ length: rating }).map((_, index) => (
          <SvgStar
            key={index}
            className="w-[13px] h-[13px] text-[#22a9e0]"
            filled
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
