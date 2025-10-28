import React from "react";
import type { GetProperties } from "@/modules/HomeModule/store/home.types";
import { SvgBed, SvgBath, SvgArea, SvgLocationPin } from "@/assets/icons";

interface PropertyListViewProps {
  properties: GetProperties[];
  onPropertyClick?: (property: GetProperties) => void;
  selectedProperty?: GetProperties | null;
}

const PropertyListView: React.FC<PropertyListViewProps> = ({
  properties,
  onPropertyClick,
  selectedProperty,
}) => {
  if (properties.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <p className="text-gray-600 text-xl">No properties found</p>
          <p className="text-gray-500 text-sm mt-2">
            Try adjusting your search criteria
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-6 space-y-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-[#141928]">
            {properties.length} Properties Found
          </h2>
        </div>

        {properties.map((property) => (
          <PropertyCard
            key={property.mlsId}
            property={property}
            onClick={() => onPropertyClick?.(property)}
            isSelected={selectedProperty?.mlsId === property.mlsId}
          />
        ))}
      </div>
    </div>
  );
};

interface PropertyCardProps {
  property: GetProperties;
  onClick?: () => void;
  isSelected?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onClick,
  isSelected,
}) => {
  const primaryImage =
    property.photos && property.photos.length > 0
      ? property.photos[0]
      : "https://via.placeholder.com/400x300?text=No+Image";

  const price = property.listPrice
    ? `$${property.listPrice.toLocaleString()}`
    : "Price N/A";

  const address = property.address?.full || "Address not available";
  const city = property.address?.city || "";
  const state = property.address?.state || "";
  const zipCode = property.address?.postalCode || "";

  const bedrooms = property.property?.bedrooms || 0;
  const bathrooms = property.property?.bathsFull || 0;
  const sqft = property.property?.area || 0;

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl ${
        isSelected ? "ring-2 ring-[#22a9e0] shadow-xl" : ""
      }`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
          <img
            src={primaryImage}
            alt={address}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://via.placeholder.com/400x300?text=No+Image";
            }}
          />
          <div className="absolute top-3 right-3 bg-[#22a9e0] text-white px-3 py-1 rounded-md font-semibold shadow-lg">
            {property.mls?.status || "Active"}
          </div>
        </div>

        {/* Content */}
        <div className="md:w-3/5 p-4 flex flex-col justify-between">
          {/* Price */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-[#22a9e0]">{price}</h3>
              {property.mls?.daysOnMarket !== undefined && (
                <span className="text-sm text-gray-600">
                  {property.mls.daysOnMarket} days on market
                </span>
              )}
            </div>

            {/* Address */}
            <div className="flex items-start gap-2 mb-3">
              <SvgLocationPin className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-[#141928] font-medium">{address}</p>
                <p className="text-gray-600 text-sm">
                  {city}
                  {state && `, ${state}`}
                  {zipCode && ` ${zipCode}`}
                </p>
              </div>
            </div>

            {/* Property Details */}
            <div className="flex items-center gap-6 mb-3">
              {bedrooms > 0 && (
                <div className="flex items-center gap-2">
                  <SvgBed className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">
                    {bedrooms} Bed{bedrooms > 1 ? "s" : ""}
                  </span>
                </div>
              )}
              {bathrooms > 0 && (
                <div className="flex items-center gap-2">
                  <SvgBath className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">
                    {bathrooms} Bath{bathrooms > 1 ? "s" : ""}
                  </span>
                </div>
              )}
              {sqft > 0 && (
                <div className="flex items-center gap-2">
                  <SvgArea className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 font-medium">
                    {sqft.toLocaleString()} sqft
                  </span>
                </div>
              )}
            </div>

            {/* Property Type */}
            {property.property?.type && (
              <div className="mb-3">
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {property.property.type}
                </span>
              </div>
            )}

            {/* Remarks Preview */}
            {property.remarks && (
              <p className="text-gray-600 text-sm line-clamp-2">
                {property.remarks}
              </p>
            )}
          </div>

          {/* Action Button */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <button className="w-full bg-[#22a9e0] text-white py-2 px-4 rounded font-medium hover:bg-[#1c8ab8] transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListView;
