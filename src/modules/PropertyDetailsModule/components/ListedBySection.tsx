import { useState } from "react";

interface ListedBySectionProps {
  agentName: string;
  brokerageName: string;
  phoneNumber: string;
  agentImage?: string;
}

const ListedBySection = ({
  agentName,
  brokerageName,
  phoneNumber,
  agentImage,
}: ListedBySectionProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message:", message);
    // Handle form submission
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-[#141928] mb-8">Listed by</h2>

      <div className="flex gap-6 items-start">
        <div className="w-[100px] h-[100px] rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
          {agentImage ? (
            <img
              src={agentImage}
              alt={agentName}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#e7e7e7]">
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="8" r="4" fill="#b4b9c8" />
                <path
                  d="M4 20c0-4 4-6 8-6s8 2 8 6"
                  stroke="#b4b9c8"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Agent Info */}
        <div className="flex-1">
          <h3 className="text-[#3c4150] text-2xl font-bold mb-1">
            {brokerageName}
          </h3>
          <p className="text-[#646978] text-base leading-[1.5] mb-12">
            Regional MLS (PMAR, EMAR, CCAR)
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <div className="border border-[#b4b9c8] rounded-[10px] h-[215px] mb-6 p-6">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a Message......"
                className="w-full h-full text-[#b4b9c8] text-base resize-none outline-none"
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="bg-[#80c342] text-white px-16 py-3 rounded shadow-[0px_0px_10px_rgba(182,182,182,0.5)] font-medium text-base hover:bg-[#6fa835] transition-colors"
              >
                Ask a Question
              </button>

              <div>
                <p className="text-[#646978] text-base mb-1">Text or call</p>
                <p className="text-[#3c4150] text-xl font-bold">
                  {phoneNumber}
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListedBySection;
