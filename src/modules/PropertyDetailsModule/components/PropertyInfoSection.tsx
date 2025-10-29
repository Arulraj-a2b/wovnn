interface InfoItem {
  text: string;
}

interface InfoCategory {
  title: string;
  items: InfoItem[][];
}

interface PropertyInfoSectionProps {
  categories: InfoCategory[];
}

const PropertyInfoSection = ({ categories }: PropertyInfoSectionProps) => {
  return (
    <div className="space-y-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white rounded-[5px] shadow-[0px_0px_20px_rgba(231,231,231,0.25)] p-6"
        >
          <h3 className="text-xl font-bold text-[#141928] mb-4">
            {category.title}
          </h3>
          <div className="grid grid-cols-2 gap-x-8">
            {category.items.map((column, colIndex) => (
              <ul
                key={colIndex}
                className="list-disc pl-5 space-y-1 text-[#505564] text-sm leading-[1.5]"
              >
                {column.map((item, itemIndex) => (
                  <li key={itemIndex}>{item.text}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyInfoSection;
