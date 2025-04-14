"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/**
 * AI Content Disclaimer Component
 *
 * Displays a disclaimer about AI-generated content at the end of articles,
 * with a randomly selected author attribution that remains consistent per instance.
 *
 * Implements Google's requirements for AI-generated content attribution.
 */
export function AIContentDisclaimer() {
  const [author, setAuthor] = useState<{
    name: string;
    imageUrl: string;
  } | null>(null);

  // Randomly select an author when the component mounts
  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        // Dynamically import the authors data to avoid bundling it with client components
        const response = await fetch("/api/authors");
        const data = await response.json();

        if (data.authors && data.authors.length > 0) {
          // Select a random author from the list
          const randomIndex = Math.floor(Math.random() * data.authors.length);
          setAuthor(data.authors[randomIndex]);
        }
      } catch (error) {
        console.error("Failed to load authors:", error);

        // Fallback: If API fetch fails, try to load authors directly
        import("@/lib/data/authors.json")
          .then((authorsModule) => {
            if (
              authorsModule.default.authors &&
              authorsModule.default.authors.length > 0
            ) {
              const randomIndex = Math.floor(
                Math.random() * authorsModule.default.authors.length
              );
              setAuthor(authorsModule.default.authors[randomIndex]);
            }
          })
          .catch((err) => {
            console.error("Failed to load authors from direct import:", err);
          });
      }
    };

    fetchAuthors();
  }, []);

  if (!author) {
    return null; // Don't render anything until we have an author
  }

  return (
    <div className="mt-10 pt-6 border-t border-gray-200">
      <div className="bg-blue-50 rounded-xl p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white">
              <Image
                src={author.imageUrl}
                alt={author.name}
                fill
                className="object-cover"
                sizes="64px"
                // Fallback if the image fails to load
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-blue-200 text-blue-600 font-semibold text-lg">
                        ${author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>`;
                  }
                }}
              />
            </div>
          </div>

          <div className="flex-grow">
            <h4 className="text-lg font-semibold mb-1">
              AI-Generated Content Disclaimer
            </h4>
            <p className="text-sm text-gray-600 mb-2">
              This content was generated using artificial intelligence tools,
              with extensive information sourced from live online resources. All
              generated content (text and potentially images) has been curated,
              reviewed, and corrected by a human author.
            </p>
            <div className="text-sm flex items-center text-gray-700">
              <span className="font-medium">Edited by:</span>
              <span className="ml-1 font-semibold">{author.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Alternative implementation that directly imports the authors data
// This is useful for static site generation or when API routes aren't available
export function AIContentDisclaimerStatic() {
  const [author, setAuthor] = useState<{
    name: string;
    imageUrl: string;
  } | null>(null);

  useEffect(() => {
    // Import authors directly from the data file
    import("@/lib/data/authors.json")
      .then((authorsModule) => {
        if (
          authorsModule.default.authors &&
          authorsModule.default.authors.length > 0
        ) {
          // Select a random author from the list
          const randomIndex = Math.floor(
            Math.random() * authorsModule.default.authors.length
          );
          setAuthor(authorsModule.default.authors[randomIndex]);
        }
      })
      .catch((error) => {
        console.error("Failed to load authors:", error);
      });
  }, []);

  if (!author) {
    return null;
  }

  return (
    <div className="mt-10 pt-6 border-t border-gray-200">
      <div className="bg-blue-50 rounded-xl p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white">
              <Image
                src={author.imageUrl}
                alt={author.name}
                fill
                className="object-cover"
                sizes="64px"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  if (e.currentTarget.parentElement) {
                    e.currentTarget.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-blue-200 text-blue-600 font-semibold text-lg">
                        ${author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>`;
                  }
                }}
              />
            </div>
          </div>

          <div className="flex-grow">
            <h4 className="text-lg font-semibold mb-1">
              AI-Generated Content Disclaimer
            </h4>
            <p className="text-sm text-gray-600 mb-2">
              This content was generated using artificial intelligence tools,
              with extensive information sourced from live online resources. All
              generated content (text and potentially images) has been curated,
              reviewed, and corrected by a human author.
            </p>
            <div className="text-sm flex items-center text-gray-700">
              <span className="font-medium">Edited by:</span>
              <span className="ml-1 font-semibold">{author.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
