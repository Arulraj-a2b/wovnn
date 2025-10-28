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

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow + 2) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage <= 3) {
        // Near the start
        for (let i = 2; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("ellipsis-end");
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Near the end
        pages.push("ellipsis-start");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // In the middle
        pages.push("ellipsis-start");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("ellipsis-end");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="bg-white border border-[#e5e7eb] text-[#141928] w-10 h-10 rounded-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer hover:border-[#22a9e0] hover:text-[#22a9e0] transition-colors"
      >
        <SvgChevronLeft className="w-4 h-4" />
      </button>

      <div className="flex items-center gap-1">
        {pageNumbers.map((page, index) => {
          if (typeof page === "string") {
            return (
              <span
                key={`${page}-${index}`}
                className="w-10 h-10 flex items-center justify-center text-[#787d8c] text-sm"
              >
                ...
              </span>
            );
          }

          return (
            <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-all cursor-pointer ${
                page === currentPage
                  ? "bg-[#22a9e0] text-white shadow-md"
                  : "bg-white text-[#141928] border border-[#e5e7eb] hover:border-[#22a9e0] hover:text-[#22a9e0]"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="bg-[#22a9e0] text-white w-10 h-10 rounded-lg flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer hover:bg-[#1c8ab8] transition-colors"
      >
        <SvgChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PaginationControls;
