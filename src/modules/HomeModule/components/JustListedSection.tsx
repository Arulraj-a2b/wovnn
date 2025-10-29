import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getPropertiesJustListedMiddleWare } from "../store/homeMiddleware";
import { routes } from "@/routes/routesPath";
import ListingCard from "./ListingCard";
import type { GetProperties } from "../store/home.types";

const JustListedSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data, isLoading, error } = useAppSelector(
    (state) => state.getPropertiesJustListedReducers
  );

  useEffect(() => {
    dispatch(
      getPropertiesJustListedMiddleWare({
        limit: 6,
        offset: 0,
      })
    );
  }, [dispatch]);

  const handleViewAll = () => {
    navigate(`${routes.SEARCH_VIEW}?location=Houston`);
  };

  const mapPropertyToListingCard = (property: GetProperties) => {
    const image = property.photos?.[0] || "https://via.placeholder.com/237x178";
    const title = `${property.property.bedrooms} Bed ${property.property.bathsFull} Bath ${property.property.type}`;
    const address = property.address.full;
    const price = `$${property.listPrice.toLocaleString()}`;
    const beds = property.property.bedrooms;
    const baths =
      property.property.bathsFull + (property.property.bathsHalf || 0) * 0.5;
    const sqft = property.property.area;

    return { image, title, address, price, beds, baths, sqft };
  };

  const handlePropertyClick = (mlsId: number) => {
    navigate(`/property-details/${mlsId}`);
  };

  if (isLoading) {
    return (
      <div className="py-20 px-[90px] bg-[#f7f8f9]">
        <div className="max-w-[1260px] mx-auto">
          <div className="flex flex-col mb-14 gap-4">
            <h2 className="text-[#141928] text-[48px] font-bold leading-normal text-center flex-1 whitespace-nowrap">
              Just Listed Homes for Sale in Houston, TX
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-[30px]">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="h-[400px] bg-gray-200 rounded-[10px] animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 px-[90px] bg-[#f7f8f9]">
        <div className="max-w-[1260px] mx-auto">
          <div className="text-center text-red-600">
            <p className="text-xl font-semibold mb-2">
              Failed to load properties
            </p>
            <p className="text-sm">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 px-[90px] bg-[#f7f8f9]">
      <div className="max-w-[1260px] mx-auto">
        <div className="flex flex-col mb-14 gap-4">
          <h2 className="text-[#141928] text-[48px] font-bold leading-normal text-center flex-1 whitespace-nowrap">
            Just Listed Homes for Sale in Houston, TX
          </h2>
          <button
            onClick={handleViewAll}
            className="text-[#141928] text-right text-base font-medium leading-[1.5] whitespace-nowrap cursor-pointer hover:text-[#22a9e0] transition-colors"
          >
            View All Locations
          </button>
        </div>

        <div className="grid grid-cols-2 gap-[30px]">
          {data && data.length > 0 ? (
            data.map((property, index) => {
              const listingProps = mapPropertyToListingCard(property);
              return (
                <ListingCard
                  key={property.mlsId || index}
                  {...listingProps}
                  onClick={() => handlePropertyClick(property.mlsId)}
                />
              );
            })
          ) : (
            <div className="col-span-2 text-center py-20">
              <p className="text-gray-600 text-xl">
                No properties found in Houston, TX
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JustListedSection;
