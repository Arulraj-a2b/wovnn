import {
  SvgArea,
  SvgBath,
  SvgBed,
  SvgHeart,
  SvgMapPin,
  SvgBreadcrumbArrow,
  SvgClock,
  SvgPlayCircle,
  SvgChevronRight,
  SvgChevronLeft,
} from "@/assets/icons";
import { routes } from "@/routes/routesPath";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface PropertyMainContentProps {
  property: {
    price: number;
    title: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      full?: string;
      unit?: string;
    };
    beds: number;
    baths: number;
    sqft: number;
    publishedDate: string;
    lastUpdated: string;
    photos: string[];
    geo: {
      lat: number;
      lng: number;
      directions?: string;
    };
  };
}

const PropertyMainContent = ({ property }: PropertyMainContentProps) => {
  const navigate = useNavigate();
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const photos =
    property.photos.length > 0
      ? property.photos
      : ["https://via.placeholder.com/800x600?text=No+Image+Available"];

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  // Display up to 5 photos in the grid
  const displayPhotos = photos.slice(0, 5);
  const mainPhoto = photos[currentPhotoIndex];
  const gridPhotos = displayPhotos.slice(1, 5);

  return (
    <div className="bg-[#f0f5ff]">
      <div className="px-[90px] py-8">
        <div className="flex justify-between items-center pb-4">
          <div className="flex items-center gap-2 text-sm mb-6">
            <button
              onClick={() => navigate(routes.HOME)}
              className="text-[#787d8c] hover:text-[#22a9e0] transition-colors"
            >
              United States
            </button>
            <SvgBreadcrumbArrow className="w-4 h-4" />
            <button
              onClick={() => navigate(routes.HOME)}
              className="text-[#787d8c] hover:text-[#22a9e0] transition-colors"
            >
              {property.address.state}
            </button>
            <SvgBreadcrumbArrow className="w-4 h-4" />
            <span className="text-[#141928] font-medium">
              {property.address.city}
            </span>
          </div>

          <button className="bg-white border border-[#141928] px-4 py-2 rounded flex items-center gap-3 hover:bg-[#f7f8f9] transition-colors">
            <span className="text-[#141928] text-xs font-bold">
              Save Listing
            </span>
            <SvgHeart className="w-3.5 h-3.5 text-[#141928]" />
          </button>
        </div>

        {/* Property Header with Images */}
        <div className="flex gap-8">
          <div
            className="flex-col flex justify-between"
            style={{ width: "360px" }}
          >
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold text-[#141928] mb-4">
                {property.title}
              </h1>

              <div className="flex items-start gap-2 mb-6">
                <SvgMapPin className="w-5 h-5 mt-1" fill="#80c342" />
                <div className="text-[#505564] text-2xl font-light leading-normal">
                  <p className="m-0">{property.address.street}</p>
                  {property.address.unit && (
                    <p className="m-0">Unit {property.address.unit}</p>
                  )}
                  <p className="m-0">
                    {property.address.city}, {property.address.state}
                  </p>
                  <p className="m-0">{property.address.zip}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <SvgBed fill="#80c342" className="w-[18px] h-[18px]" />
                  <span className="text-[#141928] text-sm">
                    {property.beds || 0}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <SvgBath fill="#80c342" className="w-[18px] h-[18px]" />
                  <span className="text-[#141928] text-sm">
                    {property.baths || 0}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <SvgArea fill="#80c342" className="w-[18px] h-[18px]" />
                  <span className="text-[#141928] text-sm">
                    {property.sqft?.toLocaleString() || 0}
                  </span>
                  <span className="text-[#787d8c] text-xs">sq ft</span>
                </div>
              </div>
            </div>

            <h2 className="text-5xl font-bold text-[#141928] mb-8">
              ${property.price.toLocaleString()}
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <SvgClock className="w-6 h-6" />
                <span className="text-[#787d8c]">Published on : </span>
                <span className="text-[#787d8c]">{property.publishedDate}</span>
              </div>
              <div className="flex items-center gap-3">
                <SvgPlayCircle className="w-6 h-6" />
                <span className="text-[#787d8c]">Last Updated on : </span>
                <span className="text-[#787d8c]">{property.lastUpdated}</span>
              </div>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-12 gap-4">
            <div className="col-span-6 row-span-2 h-full">
              <div className="relative h-full rounded-lg overflow-hidden shadow-[0px_0px_20px_rgba(159,159,159,0.25)]">
                <img
                  src={mainPhoto}
                  alt="Property"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {gridPhotos.length > 0 && (
              <>
                <div className="col-span-6 h-[239px]">
                  <div className="relative h-full rounded-lg overflow-hidden shadow-[0px_0px_20px_rgba(159,159,159,0.25)]">
                    <img
                      src={gridPhotos[0]}
                      alt="Property"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {gridPhotos[1] && (
                  <div className="col-span-2 h-[239px]">
                    <div className="relative h-full rounded-lg overflow-hidden shadow-[0px_0px_20px_rgba(159,159,159,0.25)]">
                      <img
                        src={gridPhotos[1]}
                        alt="Property"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                {gridPhotos[2] && (
                  <div className="col-span-2 h-[239px]">
                    <div className="relative h-full rounded-lg overflow-hidden shadow-[0px_0px_20px_rgba(159,159,159,0.25)]">
                      <img
                        src={gridPhotos[2]}
                        alt="Property"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                {gridPhotos[3] && (
                  <div className="col-span-2 h-[239px]">
                    <div className="relative h-full rounded-lg overflow-hidden shadow-[0px_0px_20px_rgba(159,159,159,0.25)] cursor-pointer group">
                      <img
                        src={gridPhotos[3]}
                        alt="Property"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 right-4 bg-[#80c342] text-white px-3 py-1 rounded text-sm font-bold flex items-center gap-2">
                        <button
                          onClick={handlePrevPhoto}
                          className="hover:opacity-80"
                        >
                          <SvgChevronLeft className="w-4 h-4 text-white" />
                        </button>
                        <span>
                          {currentPhotoIndex + 1} / {photos.length}
                        </span>
                        <button
                          onClick={handleNextPhoto}
                          className="hover:opacity-80"
                        >
                          <SvgChevronRight className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyMainContent;
