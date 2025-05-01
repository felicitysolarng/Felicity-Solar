import React, { useState, useEffect } from "react";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    return (
        <nav className="flex gap-x-4 items-center">
            <button
                type="button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="min-h-9.5 min-w-9.5 px-3 py-2 text-sm border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 rounded"
                aria-label="Prev"
            >
                Prev
            </button>
            <p>Page {currentPage} of {totalPages}</p>
            <button
                type="button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="min-h-9.5 min-w-9.5 px-3 py-2 text-sm border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 rounded"
                aria-label="Next"
            >
                Next
            </button>
        </nav>
    );
};

export default Pagination;
