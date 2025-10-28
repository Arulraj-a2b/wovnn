import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getPropertiesFeaturedListingsMiddleWare } from "../HomeModule/store/homeMiddleware";
import type { GetProperties } from "../HomeModule/store/home.types";
import MapView from "./components/MapView";
import PropertyCard from "../HomeModule/components/PropertyCard";
import { routes } from "@/routes/routesPath";
import Header from "../HomeModule/components/Header";

const SearchViewScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedProperty, setSelectedProperty] =
    useState<GetProperties | null>(null);

  const { data, isLoading, error, totalCount } = useAppSelector(
    (state) => state.getPropertiesFeaturedListingsReducers
  );

  const cityParam = searchParams.get("city");

  useEffect(() => {
    const fetchParams: { limit: number; offset: number; cities?: string } = {
      limit: 50,
      offset: 0,
    };

    if (cityParam) {
      fetchParams.cities = cityParam;
    }

    dispatch(getPropertiesFeaturedListingsMiddleWare(fetchParams));
  }, [cityParam]);

  const handlePropertyClick = (property: GetProperties) => {
    setSelectedProperty(property);
    setTimeout(() => {
      const element = document.getElementById(`property-${property.mlsId}`);
      element?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }, 100);
  };

  const handleMarkerClick = (property: GetProperties) => {
    setSelectedProperty(property);
    setTimeout(() => {
      const element = document.getElementById(`property-${property.mlsId}`);
      element?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }, 100);
  };

  const handleBackToHome = () => {
    navigate(routes.HOME);
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#22a9e0] mx-auto mb-4"></div>
          <p className="text-gray-600 text-xl">Loading properties...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center max-w-md px-4">
          <p className="text-red-600 text-2xl font-semibold mb-4">
            Failed to load properties
          </p>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={handleBackToHome}
            className="bg-[#22a9e0] text-white px-6 py-3 rounded font-medium hover:bg-[#1c8ab8] transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const properties = data || [];

  return (
    <div className="h-screen w-full relative">
      <div className="bg-[#141928] py-2 px-[90px]">
        <Header isSearchView />
      </div>

      {cityParam && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-white px-6 py-2 rounded-full shadow-lg">
            <p className="text-sm text-[#141928] font-medium">
              <span className="text-[#22a9e0]">Location:</span> {cityParam}
            </p>
          </div>
        </div>
      )}

      <div className=" w-full h-full">
        <MapView
          properties={properties}
          onMarkerClick={handleMarkerClick}
          selectedProperty={selectedProperty}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div>
          <div className="py-4 px-6">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-bold text-[#141928]">
                {totalCount > 0 ? totalCount : properties.length} Properties
                Found
              </h2>
              {selectedProperty && (
                <button
                  onClick={() => setSelectedProperty(null)}
                  className="text-sm text-[#22a9e0] hover:text-[#1c8ab8] font-medium"
                >
                  Clear Selection
                </button>
              )}
            </div>

            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#9ca3af #e5e7eb",
              }}
            >
              {properties.length > 0 ? (
                properties.map((property) => (
                  <div key={property.mlsId} id={`property-${property.mlsId}`}>
                    <PropertyCard
                      property={property}
                      isViewMode={true}
                      onClick={() => handlePropertyClick(property)}
                      isSelected={selectedProperty?.mlsId === property.mlsId}
                    />
                  </div>
                ))
              ) : (
                <div className="w-full text-center py-8">
                  <p className="text-gray-500">No properties found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchViewScreen;
