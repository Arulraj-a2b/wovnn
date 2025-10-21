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
    <div className="bg-white h-[257.28px] w-[343.33px] rounded-[4px] shadow-[0px_10px_31px_0px_rgba(7,152,255,0.09)] relative">
      {/* Avatar */}
      <div className="absolute left-[45px] top-[45px] w-[45px] h-[45px] rounded-full shadow-[0px_10px_31px_0px_rgba(7,152,255,0.09)] overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Name */}
      <div className="absolute left-[110px] top-[60.5px] transform -translate-y-1/2">
        <h3 className="text-[#141928] text-[18px] font-bold leading-normal whitespace-nowrap">
          {name}
        </h3>
      </div>

      {/* Role */}
      <div className="absolute left-[110px] top-[82.18px] transform -translate-y-1/2">
        <p className="text-[#787d8c] text-[14px] leading-[1.5] whitespace-nowrap">
          {role}
        </p>
      </div>

      {/* Testimonial Text Box */}
      <div className="absolute left-[45px] right-[45px] top-[116px] h-[69.28px] bg-white rounded-[4px]">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <p className="text-[#787d8c] text-[14px] leading-[1.5]">
            {testimonial}
          </p>
        </div>
      </div>

      {/* Star Rating */}
      <div className="absolute left-[45px] top-[185.28px] flex items-center gap-[5.6px] pt-[14px]">
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
