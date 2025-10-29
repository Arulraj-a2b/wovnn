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

const property = {
  price: 540000,
  title: "Home in Merrick Way",
  address: {
    street: "1807 NE 27th St",
    city: "Beaverton",
    state: "FL",
    zip: "33306",
  },
  beds: 6,
  baths: 3,
  sqft: 3000,
  publishedDate: "22-07-2023",
  lastUpdated: "01-08-2023",
  photos: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
  ],
};

const PropertyMainContent = () => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-[#f0f5ff] px-[90px] py-8">
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
            Oregon
          </button>
          <SvgBreadcrumbArrow className="w-4 h-4" />
          <span className="text-[#141928] font-medium">Beaverton</span>
        </div>

        <button className="bg-white border border-[#141928] px-4 py-2 rounded flex items-center gap-3 hover:bg-[#f7f8f9] transition-colors">
          <span className="text-[#141928] text-xs font-bold">Save Listing</span>
          <SvgHeart className="w-3.5 h-3.5 text-[#141928]" />
        </button>
      </div>

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
              <SvgMapPin className="w-5 h-5 text-[#80c342] flex-shrink-0 mt-1" />
              <div className="text-[#505564] text-2xl font-light leading-normal">
                <p className="m-0">{property.address.street},</p>
                <p className="m-0">
                  {property.address.city}, {property.address.state}
                </p>
                <p className="m-0">{property.address.zip}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <SvgBed className="w-[18px] h-[18px] text-[#80c342]" />
                <span className="text-[#141928] text-sm">{property.beds}</span>
              </div>
              <div className="flex items-center gap-2">
                <SvgBath className="w-[18px] h-[18px] text-[#80c342]" />
                <span className="text-[#141928] text-sm">{property.baths}</span>
              </div>
              <div className="flex items-center gap-2">
                <SvgArea className="w-[18px] h-[18px] text-[#80c342]" />
                <span className="text-[#141928] text-sm">{property.sqft}</span>
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
                src={property.photos[0]}
                alt="Property"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="col-span-6 h-[239px]">
            <div className="relative h-full rounded-lg overflow-hidden shadow-[0px_0px_20px_rgba(159,159,159,0.25)]">
              <img
                src={property.photos[1]}
                alt="Property"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="col-span-2 h-[239px]">
            <div className="relative h-full rounded-lg overflow-hidden shadow-[0px_0px_20px_rgba(159,159,159,0.25)]">
              <img
                src={property.photos[2]}
                alt="Property"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-2 h-[239px]">
            <div className="relative h-full rounded-lg overflow-hidden shadow-[0px_0px_20px_rgba(159,159,159,0.25)]">
              <img
                src={property.photos[3]}
                alt="Property"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-2 h-[239px]">
            <div className="relative h-full rounded-lg overflow-hidden shadow-[0px_0px_20px_rgba(159,159,159,0.25)] cursor-pointer group">
              <img
                src={property.photos[4]}
                alt="Property"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-[#80c342] text-white px-3 py-1 rounded text-sm font-bold flex items-center gap-2">
                <button className="hover:opacity-80">
                  <SvgChevronLeft className="w-4 h-4 text-white" />
                </button>
                <span>1 / 5</span>
                <button className="hover:opacity-80">
                  <SvgChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyMainContent;
