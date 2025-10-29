import { useState } from "react";
import { SvgChevronDown } from "@/assets/icons";

const InquiryFormSidebar = () => {
  const [formData, setFormData] = useState({
    inquiryType: "",
    userType: "",
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    zipCode: "",
    propertyType: "",
    budget: "",
    gdprConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <div className="sticky top-[20px] w-[404px] bg-white rounded-[10px] p-8 h-fit">
      <h2 className="text-2xl font-bold text-[#141928] mb-8">
        Real Estate Inquiry Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-base font-bold text-[#141928] mb-3">
            Inquiry Type
          </label>
          <div className="relative">
            <select
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              className="w-full h-[41px] px-3 border border-[#f0f5ff] rounded bg-white text-[#787d8c] text-sm appearance-none cursor-pointer focus:outline-none focus:border-[#80c342]"
            >
              <option value="">Select</option>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
              <option value="rent">Rent</option>
            </select>
            <SvgChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-[#787d8c]" />
          </div>
        </div>

        <div>
          <label className="block text-base font-bold text-[#141928] mb-3">
            Information
          </label>

          <div className="relative mb-3">
            <select
              name="userType"
              value={formData.userType}
              onChange={handleChange}
              className="w-full h-[41px] px-3 border border-[#f0f5ff] rounded bg-white text-[#787d8c] text-sm appearance-none cursor-pointer focus:outline-none focus:border-[#80c342]"
            >
              <option value="">I'm a</option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
              <option value="agent">Agent</option>
              <option value="other">Other</option>
            </select>
            <SvgChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-[#787d8c]" />
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="h-[41px] px-3 border border-[#f0f5ff] rounded bg-white text-[#787d8c] text-sm placeholder:text-[#787d8c] focus:outline-none focus:border-[#80c342]"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="h-[41px] px-3 border border-[#f0f5ff] rounded bg-white text-[#787d8c] text-sm placeholder:text-[#787d8c] focus:outline-none focus:border-[#80c342]"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-[41px] px-3 border border-[#f0f5ff] rounded bg-white text-[#787d8c] text-sm placeholder:text-[#787d8c] focus:outline-none focus:border-[#80c342]"
          />
        </div>

        <div>
          <label className="block text-base font-bold text-[#141928] mb-3">
            Location
          </label>

          <div className="grid grid-cols-2 gap-2">
            <div className="relative">
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full h-[41px] px-3 border border-[#f0f5ff] rounded bg-white text-[#787d8c] text-sm appearance-none cursor-pointer focus:outline-none focus:border-[#80c342]"
              >
                <option value="">Select</option>
                <option value="beaverton">Beaverton</option>
                <option value="portland">Portland</option>
                <option value="hillsboro">Hillsboro</option>
              </select>
              <SvgChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-[#787d8c]" />
            </div>

            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={formData.zipCode}
              onChange={handleChange}
              className="h-[41px] px-3 border border-[#f0f5ff] rounded bg-white text-[#787d8c] text-sm placeholder:text-[#787d8c] focus:outline-none focus:border-[#80c342]"
            />
          </div>
        </div>

        <div>
          <label className="block text-base font-bold text-[#141928] mb-3">
            Property
          </label>

          <div className="grid grid-cols-2 gap-2">
            <div className="relative">
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full h-[41px] px-3 border border-[#f0f5ff] rounded bg-white text-[#646978] text-sm appearance-none cursor-pointer focus:outline-none focus:border-[#80c342]"
              >
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="condo">Condo</option>
                <option value="townhouse">Townhouse</option>
              </select>
              <SvgChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-[#646978]" />
            </div>

            <div className="relative">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full h-[41px] px-3 border border-[#f0f5ff] rounded bg-white text-[#646978] text-sm appearance-none cursor-pointer focus:outline-none focus:border-[#80c342]"
              >
                <option value="">Budget</option>
                <option value="0-200k">$0 - $200,000</option>
                <option value="200k-400k">$200,000 - $400,000</option>
                <option value="400k-600k">$400,000 - $600,000</option>
                <option value="600k+">$600,000+</option>
              </select>
              <SvgChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-[#646978]" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-base font-bold text-[#141928] mb-3">
            GDPR Agreement
          </label>
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="gdprConsent"
              checked={formData.gdprConsent}
              onChange={handleChange}
              className="mt-1 w-[13px] h-[13px] border border-[#787d8c] rounded-[2.5px] cursor-pointer accent-[#80c342]"
            />
            <span className="text-[#141928] text-[15px] leading-[25px] font-light">
              I consent to having this website store my submitted information
            </span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-[#80c342] text-white py-3 rounded shadow-[0px_0px_10px_rgba(182,182,182,0.5)] font-medium text-base hover:bg-[#6fa835] transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InquiryFormSidebar;
