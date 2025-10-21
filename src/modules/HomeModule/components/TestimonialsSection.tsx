import React from "react";
import { testimonials } from "../constants/testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection: React.FC = () => {
  return (
    <div className="py-20 px-[90px] bg-white">
      <div className="max-w-[1120px] mx-auto">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h2 className="text-[#141928] text-[48px] font-bold leading-normal mb-5 whitespace-nowrap">
            Testimonials
          </h2>
          <p className="text-[#787d8c] text-base leading-[1.5] max-w-[560px] mx-auto">
            Publish the best of your client testimonials and let the world know
            what a great agent or real estate agency you are. Testimonials build
            trust.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-3 gap-x-[30px] gap-y-[30px] justify-items-center">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
