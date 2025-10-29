interface MarketData {
  medianListPrice: string;
  medianSoldPrice: string;
  medianSoldListPercent: string;
  avgDaysOnMarket: string;
}

interface MarketReportSectionProps {
  marketData: MarketData;
  location?: string;
}

const MarketReportSection = ({
  marketData,
  location = "Wilton Manors",
}: MarketReportSectionProps) => {
  const tabs = ["Brookhaven", "West Beaverton", "97007", "Beaverton"];

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#141928] mb-6">Market Report</h2>

      {/* Tabs */}
      <div className="bg-white rounded-[5px] shadow-[0px_0px_20px_rgba(231,231,231,0.25)] inline-flex overflow-hidden mb-8">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-8 py-2 text-sm ${
              index === 0
                ? "bg-[#80c342] text-white font-bold"
                : "bg-white text-[#80c342]"
            } hover:bg-[#80c342] hover:text-white transition-colors`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="flex items-start gap-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"
              fill="#80c342"
            />
            <text
              x="12"
              y="16"
              fontSize="10"
              fill="white"
              textAnchor="middle"
              fontWeight="bold"
            >
              $
            </text>
          </svg>
          <div>
            <p className="text-2xl font-bold text-[#141928] mb-1">
              {marketData.medianListPrice}
            </p>
            <p className="text-sm text-[#646978]">Median List Price</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"
              fill="#80c342"
            />
            <text
              x="12"
              y="16"
              fontSize="10"
              fill="white"
              textAnchor="middle"
              fontWeight="bold"
            >
              $
            </text>
          </svg>
          <div>
            <p className="text-2xl font-bold text-[#141928] mb-1">
              {marketData.medianSoldPrice}
            </p>
            <p className="text-sm text-[#646978]">Median Sold Price</p>
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold text-[#141928] mb-1">
            {marketData.medianSoldListPercent}
          </p>
          <p className="text-sm text-[#646978]">Median Sold/List %</p>
        </div>

        <div>
          <p className="text-2xl font-bold text-[#141928] mb-1">
            {marketData.avgDaysOnMarket}
          </p>
          <p className="text-sm text-[#646978]">Avg Days on Market</p>
        </div>
      </div>

      {/* Chart Title */}
      <div className="flex items-center gap-3 mb-6">
        <h3 className="text-lg font-bold text-[#3c4150]">Median Home Prices</h3>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 14l5-5 5 5" stroke="#787d8c" strokeWidth="2" />
        </svg>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white rounded-[5px] shadow-[0px_0px_20px_rgba(231,231,231,0.25)] p-6 h-[400px] flex items-center justify-center">
        <div className="w-full h-full relative">
          {/* Chart Area */}
          <div className="absolute inset-0 flex items-end justify-around px-8 pb-12">
            {[200, 400, 600, 500, 700, 600, 800].map((height, index) => (
              <div
                key={index}
                className="bg-gradient-to-t from-[#80c342] to-[#a8d96f] w-16 rounded-t"
                style={{ height: `${(height / 1000) * 100}%` }}
              />
            ))}
          </div>

          {/* Y-axis labels */}
          <div className="absolute left-0 top-0 bottom-12 flex flex-col justify-between text-xs text-[#646978]">
            <span>$1,000k</span>
            <span>$800k</span>
            <span>$600k</span>
            <span>$400k</span>
            <span>$200k</span>
            <span>0</span>
          </div>

          {/* X-axis labels */}
          <div className="absolute bottom-0 left-8 right-8 flex justify-around text-xs text-[#646978]">
            <span>2021</span>
            <span>2022</span>
            <span>2023</span>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="mt-6">
        <div className="bg-white rounded-t-[5px] shadow-[0px_0px_20px_rgba(231,231,231,0.25)]">
          <div className="grid grid-cols-3 border-b border-[#e7e7e7] py-3 px-6">
            <span className="text-sm text-[#3c4150]">Location</span>
            <span className="text-sm text-[#787d8c]">Data</span>
            <span className="text-sm text-[#787d8c]">Growth</span>
          </div>
          <div className="grid grid-cols-3 py-3 px-6">
            <div className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                  fill="#80c342"
                />
              </svg>
              <span className="text-base font-bold text-[#505564]">
                {location}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="9"
                  y="13"
                  fontSize="12"
                  fill="#505564"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  $
                </text>
              </svg>
              <span className="text-base font-bold text-[#505564]">
                782,000
              </span>
            </div>
            <span className="text-base font-bold text-[#505564]">+1.5%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketReportSection;
