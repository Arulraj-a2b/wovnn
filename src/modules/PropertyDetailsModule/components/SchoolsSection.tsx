interface School {
  name: string;
  rating: string;
  type: string;
  grades: string;
  distance: string;
  servesHome: boolean;
}

interface SchoolsSectionProps {
  district: string;
  schools: School[][];
}

const SchoolsSection = ({ district, schools }: SchoolsSectionProps) => {
  return (
    <div>
      <h2 className="text-xl font-bold text-[#141928] mb-4">Schools</h2>
      <p className="text-[#787d8c] text-base leading-[1.5] mb-2">
        This home is within the <span className="font-bold">{district}</span>.
      </p>
      <p className="text-[#787d8c] text-base leading-[1.5] mb-8">
        Showing nearby schools. Please check the school district website to see
        all schools serving this home.
      </p>

      <div className="grid grid-cols-2 gap-x-6">
        {schools.map((column, colIndex) => (
          <div key={colIndex} className="space-y-0">
            {column.map((school, schoolIndex) => (
              <div key={schoolIndex}>
                <div className="py-6">
                  <div className="flex items-start gap-6">
                    <div className="text-[#505564] text-base font-bold w-10">
                      {school.rating}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#3c4150] text-lg font-bold mb-2">
                        {school.name}
                      </h3>
                      <div className="flex items-center gap-2 text-[#787d8c] text-xs leading-[1.5]">
                        <span>
                          {school.type}, {school.grades}
                        </span>
                        <span className="w-[7px] h-[7px] rounded-full bg-[#787d8c]" />
                        <span>
                          {school.servesHome
                            ? "Serves this home"
                            : "Nearby school"}
                        </span>
                        <span className="w-[7px] h-[7px] rounded-full bg-[#787d8c]" />
                        <span>{school.distance}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {schoolIndex < column.length - 1 && (
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

export default SchoolsSection;
