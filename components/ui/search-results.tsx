import React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

interface SearchResultItem {
  id: string;
  title: string;
  link?: string; // Link might be optional
  snippet: string;
}

interface SearchResultsProps {
  results: SearchResultItem[];
  isLoading: boolean;
  error: string | null;
  onResultClick: () => void; // Callback for when a result is clicked
}

export function SearchResults({
  results,
  isLoading,
  error,
  onResultClick,
}: SearchResultsProps) {
  // Render loading state
  if (isLoading) {
    return (
      <div className="p-4 flex justify-center items-center text-gray-500">
        <Loader2 className="w-5 h-5 animate-spin mr-2" />
        <span>Loading results...</span>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="p-4 text-red-600 bg-red-50 border border-red-200 rounded-md">
        <p className="font-medium">Error loading search results:</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  // Render "No results" state
  if (results.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No results found. Try refining your search query.
      </div>
    );
  }

  // Render the list of results
  return (
    <ul className="divide-y divide-gray-100">
      {results.map((result) => (
        <li key={result.id} className="p-3 hover:bg-gray-50 transition-colors">
          {result.link ? (
            <Link
              href={result.link}
              className="block group"
              onClick={onResultClick} // Call the callback when a result link is clicked
              target="_blank" // Optional: open in new tab
              rel="noopener noreferrer" // Security for target="_blank"
            >
              <h4
                className="text-sm font-medium text-blue-700 group-hover:underline mb-1"
                // Use dangerouslySetInnerHTML for HTML title from API
                dangerouslySetInnerHTML={{ __html: result.title }}
              />
              <p
                className="text-xs text-gray-600 line-clamp-2"
                // Use dangerouslySetInnerHTML for HTML snippet from API
                dangerouslySetInnerHTML={{ __html: result.snippet }}
              />
            </Link>
          ) : (
            // Fallback if link is missing (should ideally not happen with web search)
            <div>
              <h4
                className="text-sm font-medium text-gray-800 mb-1"
                dangerouslySetInnerHTML={{ __html: result.title }}
              />
              <p
                className="text-xs text-gray-600 line-clamp-2"
                dangerouslySetInnerHTML={{ __html: result.snippet }}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
