interface AboutPropertySectionProps {
  description: string;
  listingAgent: string;
}

const AboutPropertySection = ({
  description,
  listingAgent,
}: AboutPropertySectionProps) => {
  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-[#141928] mb-3.5">
        About this Property
      </h2>
      <p className="text-[#787d8c] text-base leading-[1.5] mb-6">
        {description}
      </p>
      <div className="flex items-center gap-3">
        <p className="text-[#b4b9c8] text-sm leading-[1.5]">
          Listed by {listingAgent}
        </p>
      </div>
    </div>
  );
};

export default AboutPropertySection;
