import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      <Button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        variant="secondary"
        className="px-4 py-2 text-sm font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Previous
      </Button>
      <span className="text-sm text-gray-700">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        variant="secondary"
        className="px-4 py-2 text-sm font-medium rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Next
      </Button>
    </div>
  );
}
