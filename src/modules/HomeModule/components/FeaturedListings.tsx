import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "@/routes/routesPath";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getPropertiesFeaturedListingsMiddleWare } from "../store/homeMiddleware";
import PropertyCard from "./PropertyCard";
import PaginationControls from "./PaginationControls";

const FeaturedListings: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 3;

  const { data, isLoading, error, totalCount } = useAppSelector(
    (state) => state.getPropertiesFeaturedListingsReducers
  );

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  useEffect(() => {
    fetchProperties(currentPage);
  }, [currentPage]);

  const fetchProperties = (page: number) => {
    const offset = (page - 1) * ITEMS_PER_PAGE;
    dispatch(
      getPropertiesFeaturedListingsMiddleWare({
        limit: ITEMS_PER_PAGE,
        offset: offset,
      })
    );
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="py-20 px-[90px]">
        <div className="relative max-w-[1260px] mx-auto">
          <div className="grid grid-cols-3 gap-10">
            {[...Array(ITEMS_PER_PAGE)].map((_, index) => (
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
      <div className="py-20 px-[90px]">
        <div className="relative max-w-[1260px] mx-auto">
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
    <div className="py-20 px-[90px]">
      <div className="relative max-w-[1260px] mx-auto">
        <div className="grid grid-cols-3 gap-10">
          {data && data.length > 0 ? (
            data.map((property, index) => (
              <PropertyCard key={property.mlsId || index} property={property} />
            ))
          ) : (
            <div className="col-span-3 text-center py-20">
              <p className="text-gray-600 text-xl">No properties found</p>
            </div>
          )}
        </div>

        {data && data.length > 0 && totalPages > 0 && (
          <div className="grid grid-cols-3 gap-10 items-center mt-10">
            <div />

            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />

            <div className="flex justify-end">
              <button
                onClick={() => navigate(routes.SEARCH_VIEW)}
                className="border border-[#141928] text-[#141928] px-12 py-3 rounded font-medium cursor-pointer hover:bg-[#141928] hover:text-white transition-colors"
              >
                More Listing
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedListings;
