import React, { useEffect, useState, useRef, useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { routes } from "@/routes/routesPath";
import { getPropertiesFeaturedListingsMiddleWare } from "../HomeModule/store/homeMiddleware";
import type { GetProperties } from "../HomeModule/store/home.types";
import PropertyCard from "../HomeModule/components/PropertyCard";
import Header from "../HomeModule/components/Header";
import MapView from "./components/MapView";

const SearchViewScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedProperty, setSelectedProperty] =
    useState<GetProperties | null>(null);
  const [allProperties, setAllProperties] = useState<GetProperties[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const ITEMS_PER_PAGE = 12;

  const { data, isLoading, error, totalCount } = useAppSelector(
    (state) => state.getPropertiesFeaturedListingsReducers
  );

  const location = searchParams.get("location") || "";
  const type = searchParams.get("type") || "";
  const subtype = searchParams.get("subtype") || "";
  const budget = searchParams.get("budget") || "";

  const parseBudget = (
    budgetValue: string
  ): { minprice: number; maxprice: number } => {
    if (!budgetValue) return { minprice: 0, maxprice: 0 };

    const budgetMap: Record<string, { minprice: number; maxprice: number }> = {
      "0-100k": { minprice: 0, maxprice: 100000 },
      "100k-200k": { minprice: 100000, maxprice: 200000 },
      "200k-300k": { minprice: 200000, maxprice: 300000 },
      "300k-400k": { minprice: 300000, maxprice: 400000 },
      "400k-500k": { minprice: 400000, maxprice: 500000 },
      "500k-600k": { minprice: 500000, maxprice: 600000 },
      "600k-700k": { minprice: 600000, maxprice: 700000 },
      "700k-800k": { minprice: 700000, maxprice: 800000 },
      "800k-900k": { minprice: 800000, maxprice: 900000 },
      "900k-1m": { minprice: 900000, maxprice: 1000000 },
      "1m-1.5m": { minprice: 1000000, maxprice: 1500000 },
      "1.5m-2m": { minprice: 1500000, maxprice: 2000000 },
      "2m-2.5m": { minprice: 2000000, maxprice: 2500000 },
      "2.5m-3m": { minprice: 2500000, maxprice: 3000000 },
      "3m-4m": { minprice: 3000000, maxprice: 4000000 },
      "4m-5m": { minprice: 4000000, maxprice: 5000000 },
      "5m+": { minprice: 5000000, maxprice: 0 },
    };

    return budgetMap[budgetValue] || { minprice: 0, maxprice: 0 };
  };

  const isPostalCode = (location: string): boolean => {
    return /^\d+$/.test(location);
  };

  useEffect(() => {
    setCurrentPage(1);
    setAllProperties([]);
    setSelectedProperty(null);
  }, [location, type, subtype, budget]);

  useEffect(() => {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const { minprice, maxprice } = parseBudget(budget);

    const fetchParams: {
      limit: number;
      offset: number;
      cities?: string;
      subtype?: string;
      type?: string;
      minprice?: number;
      maxprice?: number;
      postalCodes?: string[];
    } = {
      limit: ITEMS_PER_PAGE,
      offset: offset,
    };

    if (subtype) {
      fetchParams.subtype = subtype;
    }

    if (type) {
      fetchParams.type = type;
    }

    if (minprice || maxprice) {
      fetchParams.minprice = minprice;
      fetchParams.maxprice = maxprice;
    }

    if (location) {
      if (isPostalCode(location)) {
        fetchParams.postalCodes = [location];
      } else {
        fetchParams.cities = location;
      }
    }

    dispatch(getPropertiesFeaturedListingsMiddleWare(fetchParams));
  }, [location, type, subtype, budget, currentPage, dispatch]);

  useEffect(() => {
    if (data && !isLoading) {
      if (currentPage === 1) {
        setAllProperties(data);
      } else {
        setAllProperties((prev) => [...prev, ...data]);
      }
      setIsLoadingMore(false);
    }
  }, [data, currentPage, isLoading]);

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

  const handleScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container || isLoadingMore || isLoading) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const scrollPercentage = (scrollLeft + clientWidth) / scrollWidth;

    if (scrollPercentage > 0.8) {
      const hasMoreData = allProperties.length < totalCount;
      if (hasMoreData) {
        setIsLoadingMore(true);
        setCurrentPage((prev) => prev + 1);
      }
    }
  }, [isLoadingMore, isLoading, allProperties.length, totalCount]);

  if (isLoading && currentPage === 1) {
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

  // Show empty state if no properties found
  if (!isLoading && allProperties.length === 0) {
    return (
      <div className="h-screen w-full flex flex-col">
        <div className="bg-[#141928] py-2 px-[90px]">
          <Header isSearchView />
        </div>
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center max-w-md px-4">
            <div className="mb-6">
              <svg
                className="mx-auto h-24 w-24 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              No Properties Found
            </h2>
            <p className="text-gray-600 mb-6">
              We couldn't find any properties matching your search criteria. Try
              adjusting your filters or search in a different location.
            </p>
            <button
              onClick={handleBackToHome}
              className="bg-[#22a9e0] text-white px-6 py-3 rounded font-medium hover:bg-[#1c8ab8] transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="bg-[#141928] py-2 px-[90px]">
        <Header isSearchView />
      </div>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-96 h-full">
          <iframe
            src="https://chat.a2v2.ai/6919f4310b514c50bac0fcea"
            width="100%"
            allow="clipboard-write"
            style={{ height: "100%", minHeight: "700px", border: "none" }}
            title="Chat Assistant"
          />
        </div>

        <div className="flex-1 h-full relative overflow-hidden">
          {/* Map section */}
          <div className="w-full h-full">
            <MapView
              properties={allProperties}
              onMarkerClick={handleMarkerClick}
              selectedProperty={selectedProperty}
            />
          </div>

          {/* Property cards section at bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-20">
            <div className="py-4 px-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold text-[#141928]">
                  {totalCount > 0 ? totalCount : allProperties.length}{" "}
                  Properties Found{" "}
                  {allProperties.length < totalCount &&
                    `(Showing ${allProperties.length})`}
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
                onScroll={handleScroll}
                className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "#9ca3af #e5e7eb",
                }}
              >
                {allProperties.length > 0 ? (
                  <>
                    {allProperties.map((property) => (
                      <div
                        key={property.mlsId}
                        id={`property-${property.mlsId}`}
                      >
                        <PropertyCard
                          property={property}
                          isViewMode
                          onClick={() => handlePropertyClick(property)}
                          isSelected={
                            selectedProperty?.mlsId === property.mlsId
                          }
                        />
                      </div>
                    ))}
                    {isLoadingMore && (
                      <div className="w-[280px] h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#22a9e0] mx-auto mb-2"></div>
                          <p className="text-[#22a9e0] text-sm">
                            Loading more...
                          </p>
                        </div>
                      </div>
                    )}
                  </>
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
    </div>
  );
};

export default SearchViewScreen;
