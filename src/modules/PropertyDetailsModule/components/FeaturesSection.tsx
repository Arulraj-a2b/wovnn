interface Feature {
  label: string;
  value: string;
}

interface FeaturesSectionProps {
  features: Feature[][];
}

const FeaturesSection = ({ features }: FeaturesSectionProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-[#141928] mb-6">Features</h2>
      <div className="grid grid-cols-2 gap-x-6">
        {features.map((column, colIndex) => (
          <div key={colIndex} className="space-y-0">
            {column.map((feature, featureIndex) => (
              <div key={featureIndex}>
                <div className="flex justify-between items-center py-3.5">
                  <span className="text-[#787d8c] text-base leading-[1.5]">
                    {feature.label}
                  </span>
                  <span className="text-[#505564] text-base font-bold text-right">
                    {feature.value}
                  </span>
                </div>
                {featureIndex < column.length - 1 && (
                  <div className="border-b border-[#e7e7e7]" />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
