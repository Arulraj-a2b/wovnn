interface HomeFact {
  label: string;
  value: string;
}

interface HomeFactsSectionProps {
  facts: HomeFact[][];
}

const HomeFactsSection = ({ facts }: HomeFactsSectionProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-[#141928] mb-6">Home Facts</h2>
      <div className="grid grid-cols-2 gap-x-6">
        {facts.map((column, colIndex) => (
          <div key={colIndex} className="space-y-0">
            {column.map((fact, factIndex) => (
              <div key={factIndex}>
                <div className="flex justify-between items-center py-3.5">
                  <span className="text-[#787d8c] text-base leading-[1.5]">
                    {fact.label}
                  </span>
                  <span className="text-[#505564] text-base font-bold text-right">
                    {fact.value}
                  </span>
                </div>
                {factIndex < column.length - 1 && (
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

export default HomeFactsSection;
