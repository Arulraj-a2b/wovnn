import React from "react";
import { SvgChevronLeft, SvgChevronRight } from "../../../assets/icons";

interface PaginationControlsProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage = 1,
  totalPages = 4,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1 && onPageChange) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages && onPageChange) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-10">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="bg-[#f7f8f9] border border-[#22a9e0] text-[#22a9e0] w-11 h-11 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover:bg-[#22a9e0] hover:text-white transition-colors"
      >
        <SvgChevronLeft className="w-4 h-4" />
      </button>

      <div className="bg-white shadow-[0px_0px_7px_-2px_rgba(0,0,0,0.19)] rounded-full px-5 py-2 flex items-center gap-5">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`rounded-full transition-all cursor-pointer ${
              page === currentPage
                ? "w-3.5 h-3.5 border-2 border-[#22a9e0] relative"
                : "w-1.5 h-1.5 bg-[#22a9e0] hover:w-2 hover:h-2"
            }`}
          >
            {page === currentPage && (
              <div className="absolute inset-1 bg-[#22a9e0] rounded-full"></div>
            )}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="bg-[#22a9e0] text-white w-11 h-11 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover:bg-[#1a8bc2] transition-colors"
      >
        <SvgChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PaginationControls;
