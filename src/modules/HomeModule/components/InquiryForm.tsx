import React from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  formFields,
  locationFields,
  propertyFields,
} from "../constants/whyChoose";

const InquiryForm: React.FC = () => {
  // Group consecutive non-fullWidth fields together
  const renderFormFields = () => {
    const elements: React.ReactNode[] = [];
    let i = 0;

    while (i < formFields.length) {
      const field = formFields[i];

      // Check if this is a non-fullWidth field and if the next one is also non-fullWidth
      if (!field.fullWidth && field.type !== "select") {
        // Collect consecutive non-fullWidth fields
        const gridFields = [];
        while (
          i < formFields.length &&
          !formFields[i].fullWidth &&
          formFields[i].type !== "select"
        ) {
          gridFields.push(formFields[i]);
          i++;
        }

        // Render them in a grid
        elements.push(
          <div
            key={`grid-${gridFields[0].name}`}
            className="grid grid-cols-2 gap-4"
          >
            {gridFields.map((f) => (
              <Input
                key={f.name}
                type={f.type}
                placeholder={f.placeholder}
                className="bg-white border-[#f0f5ff]"
              />
            ))}
          </div>
        );
      } else if (field.type === "select") {
        // Render select field
        elements.push(
          <Select key={field.name}>
            <SelectTrigger className="w-full bg-white border-[#f0f5ff]">
              <SelectValue placeholder={field.placeholder} />
            </SelectTrigger>
            <SelectContent className="z-[100] bg-white border-gray-200">
              {field.options?.map((option) => (
                <SelectItem
                  key={option}
                  value={option.toLowerCase()}
                  className="cursor-pointer"
                >
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
        i++;
      } else {
        // Render fullWidth input field
        elements.push(
          <Input
            key={field.name}
            type={field.type}
            placeholder={field.placeholder}
            className="w-full bg-white border-[#f0f5ff]"
          />
        );
        i++;
      }
    }

    return elements;
  };

  return (
    <div className="w-[404px] bg-white rounded-[10px] p-8 space-y-6">
      <h3 className="text-[#141928] text-2xl font-bold leading-normal whitespace-nowrap">
        Real Estate Inquiry Form
      </h3>

      {/* Information Section */}
      <div className="space-y-4">
        <label className="text-[#141928] text-base font-bold leading-[1.5] block">
          Information
        </label>

        {renderFormFields()}
      </div>

      {/* Location Section */}
      <div className="space-y-4">
        <label className="text-[#141928] text-base font-bold leading-[1.5] block">
          Location
        </label>

        <div className="grid grid-cols-2 gap-4">
          {locationFields.map((field) =>
            field.type === "select" ? (
              <Select key={field.name}>
                <SelectTrigger className="bg-white border-[#f0f5ff] w-full">
                  <SelectValue placeholder={field.placeholder} />
                </SelectTrigger>

                <SelectContent className="z-[100] bg-white border-gray-200">
                  {field.options?.map((option) => (
                    <SelectItem
                      key={option}
                      value={option.toLowerCase()}
                      className="cursor-pointer"
                    >
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Input
                key={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="bg-white border-[#f0f5ff]"
              />
            )
          )}
        </div>
      </div>

      {/* Property Section */}
      <div className="space-y-4">
        <label className="text-[#141928] text-base font-bold leading-[1.5] block">
          Property
        </label>

        <div className="grid grid-cols-2 gap-4">
          {propertyFields.map((field) => (
            <Select key={field.name}>
              <SelectTrigger className="bg-white border-[#f0f5ff] w-full">
                <SelectValue placeholder={field.placeholder} />
              </SelectTrigger>
              <SelectContent className="z-[100] bg-white border-gray-200">
                {field.options?.map((option) => (
                  <SelectItem
                    key={option}
                    value={option.toLowerCase()}
                    className="cursor-pointer"
                  >
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ))}
        </div>
      </div>

      {/* GDPR Agreement */}
      <div className="space-y-3">
        <label className="text-[#141928] text-base font-bold leading-[1.5] block">
          GDPR Agreement
        </label>

        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            id="gdpr"
            className="w-[13px] h-[13px] mt-1 border border-[#787d8c] rounded-sm"
          />
          <label
            htmlFor="gdpr"
            className="text-[#141928] text-[15px] leading-[25px] flex-1"
          >
            I consent to having this website store my submitted information
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button className="w-[233px] h-[47px] bg-[#22a9e0] text-white text-base font-medium rounded-[4px] shadow-[0px_0px_10px_rgba(182,182,182,0.5)] hover:bg-[#1a8bc2] transition-colors cursor-pointer">
          Submit
        </button>
      </div>
    </div>
  );
};

export default InquiryForm;
