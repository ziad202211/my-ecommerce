// components/ui/PaginationBtn.tsx
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  hasNextPage: boolean;
}

export function PaginationButton({ currentPage, hasNextPage }: PaginationProps) {
  // We can reuse the classes from your Button component so they look identical
  const buttonStyles = "inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-blue-500 px-6 py-3 text-lg gap-2.5";
  const disabledStyles = "opacity-50 pointer-events-none";

  return (
    <div className="flex gap-4">
      <Link 
        href={`?page=${currentPage - 1}`}
        className={`${buttonStyles} ${currentPage <= 1 ? disabledStyles : ""}`}
        aria-disabled={currentPage <= 1}
      >
        Previous Page
      </Link>
      
      <Link 
        href={`?page=${currentPage + 1}`}
        className={`${buttonStyles} ${!hasNextPage ? disabledStyles : ""}`}
        aria-disabled={!hasNextPage}
      >
        Next Page
      </Link>
    </div>
  );
}
