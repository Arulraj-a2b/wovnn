import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getPropertiesFeaturedListingsMiddleWare } from "../HomeModule/store/homeMiddleware";
import type { GetProperties } from "../HomeModule/store/home.types";
import MapView from "./components/MapView";
import PropertyListView from "./components/PropertyListView";
import { routes } from "@/routes/routesPath";
import { SvgChevronLeft } from "@/assets/icons";

const SearchViewScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selectedProperty, setSelectedProperty] =
    useState<GetProperties | null>(null);
  const [viewMode, setViewMode] = useState<"split" | "map" | "list">("split");

  const { data, isLoading, error } = useAppSelector(
    (state) => state.getPropertiesFeaturedListingsReducers
  );

  useEffect(() => {
    // Fetch all properties (increase limit to get more properties)
    dispatch(
      getPropertiesFeaturedListingsMiddleWare({
        limit: 50,
        offset: 0,
      })
    );
  }, [dispatch]);

  const handlePropertyClick = (property: GetProperties) => {
    setSelectedProperty(property);
  };

  const handleMarkerClick = (property: GetProperties) => {
    setSelectedProperty(property);
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
    <div className="h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 shadow-sm z-10">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBackToHome}
              className="flex items-center gap-2 text-[#141928] hover:text-[#22a9e0] transition-colors"
            >
              <SvgChevronLeft className="w-6 h-6" />
              <span className="font-medium">Back to Home</span>
            </button>
            <div className="h-8 w-px bg-gray-300" />
            <h1 className="text-2xl font-bold text-[#141928]">
              Property Search
            </h1>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 mr-2">View:</span>
            <button
              onClick={() => setViewMode("split")}
              className={`px-4 py-2 rounded-l font-medium transition-colors ${
                viewMode === "split"
                  ? "bg-[#22a9e0] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Split
            </button>
            <button
              onClick={() => setViewMode("map")}
              className={`px-4 py-2 font-medium transition-colors ${
                viewMode === "map"
                  ? "bg-[#22a9e0] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Map
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`px-4 py-2 rounded-r font-medium transition-colors ${
                viewMode === "list"
                  ? "bg-[#22a9e0] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              List
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden">
        {viewMode === "split" && (
          <div className="h-full flex">
            {/* Properties List - Left Side */}
            <div className="w-1/2 h-full border-r border-gray-200">
              <PropertyListView
                properties={properties}
                onPropertyClick={handlePropertyClick}
                selectedProperty={selectedProperty}
              />
            </div>

            {/* Map - Right Side */}
            <div className="w-1/2 h-full">
              <MapView
                properties={properties}
                onMarkerClick={handleMarkerClick}
                selectedProperty={selectedProperty}
              />
            </div>
          </div>
        )}

        {viewMode === "map" && (
          <div className="h-full">
            <MapView
              properties={properties}
              onMarkerClick={handleMarkerClick}
              selectedProperty={selectedProperty}
            />
          </div>
        )}

        {viewMode === "list" && (
          <div className="h-full">
            <PropertyListView
              properties={properties}
              onPropertyClick={handlePropertyClick}
              selectedProperty={selectedProperty}
            />
          </div>
        )}
      </main>

      {/* Selected Property Info Bar (Optional) */}
      {selectedProperty && (
        <div className="bg-white border-t border-gray-200 px-6 py-4 shadow-lg">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={
                  selectedProperty.photos && selectedProperty.photos[0]
                    ? selectedProperty.photos[0]
                    : "https://via.placeholder.com/80x80?text=No+Image"
                }
                alt={selectedProperty.address?.full}
                className="w-20 h-20 object-cover rounded"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/80x80?text=No+Image";
                }}
              />
              <div>
                <h3 className="text-lg font-bold text-[#141928]">
                  {selectedProperty.address?.full}
                </h3>
                <p className="text-[#22a9e0] font-semibold">
                  ${selectedProperty.listPrice?.toLocaleString()}
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedProperty(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchViewScreen;
