import Link from "next/link";
import Image from "next/image";
import { Loader2, AlertCircle } from "lucide-react";
import { logger } from "@/lib/logger";
import { SearchItem } from "@/lib/search-index"; // Import the interface

interface SearchResultsProps {
  results: SearchItem[];
  isLoading: boolean;
  error: string | null;
  onResultClick: () => void; // Callback when a result is clicked
}

export function SearchResults({
  results,
  isLoading,
  error,
  onResultClick,
}: SearchResultsProps) {
  // Log received props
  logger.info("[SearchResults] Rendering with props:", {
    results,
    isLoading,
    error,
  });

  // --- Debugging Change: Prioritize showing results if they exist ---
  if (results.length > 0) {
    logger.info("[SearchResults] Rendering results list because length > 0"); // Added log
    return (
      <ul className="divide-y divide-gray-100">
        {results.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="block p-4 hover:bg-gray-50 transition-colors group"
              onClick={onResultClick} // Trigger callback on click
            >
              <div className="flex items-start space-x-4">
                {/* Image Placeholder */}
                <div className="flex-shrink-0 w-20 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-400 overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={80}
                      height={64}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-xs">No Image</span>
                  )}
                </div>
                {/* Text Content */}
                <div className="flex-grow">
                  <h3 className="text-md font-semibold text-gray-900 group-hover:text-primary mb-1 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  // Original checks (only run if results.length is 0)
  if (isLoading) {
    return (
      <div className="p-4 flex justify-center items-center text-gray-500">
        <Loader2 className="w-6 h-6 animate-spin mr-2" />
        <span>Loading results...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 flex items-center text-red-600 bg-red-50 border border-red-200 rounded-md">
        <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
        <span>Error: {error}</span>
      </div>
    );
  }

  // If results.length === 0 and not loading and no error
  return <div className="p-4 text-left text-gray-500">No results found.</div>;
}
