import { NextResponse } from "next/server";

const SERVING_CONFIG =
  "projects/absolute-brook-452020-d5/locations/global/collections/default_collection/engines/topfinanzas-uk-search-engi_1744641181584/servingConfigs/default_search";
const BASE_ENDPOINT = "https://discoveryengine.googleapis.com/v1"; // Base endpoint

interface VertexSearchSnippet {
  htmlSnippet?: string;
}

interface VertexSearchDerivedStructData {
  htmlTitle?: string;
  link?: string;
  snippets?: VertexSearchSnippet[];
}

interface VertexSearchResult {
  id?: string;
  document?: {
    derivedStructData?: VertexSearchDerivedStructData;
  };
}

function isVertexSearchResultArray(
  value: unknown,
): value is VertexSearchResult[] {
  return (
    Array.isArray(value) &&
    value.every((item) => typeof item === "object" && item !== null)
  );
}

export async function POST(request: Request) {
  const API_KEY = process.env.VERTEX_AI_SEARCH_API_KEY;

  // Check if the API key is configured
  if (!API_KEY) {
    console.error("VERTEX_AI_SEARCH_API_KEY environment variable is not set.");
    return NextResponse.json(
      { error: "Search configuration error on server." },
      { status: 500 },
    );
  }

  try {
    // Parse the request body to get the query
    const { query } = await request.json();

    // Basic validation for the query
    if (!query || typeof query !== "string" || query.trim() === "") {
      // Return empty results if the query is invalid or empty
      return NextResponse.json({ results: [] });
    }

    console.log(`[API Search Route] Received query: "${query}"`);

    // Construct the full API endpoint URL *inside* the handler
    const API_ENDPOINT = `${BASE_ENDPOINT}/${SERVING_CONFIG}:searchLite?key=${API_KEY}`;

    // Make the request to the Vertex AI Search API
    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        servingConfig: SERVING_CONFIG,
        query: query,
        pageSize: 5, // Limit to 5 results for dropdown/preview display
      }),
      // Optional: Add cache control if appropriate, though search results might not be cacheable long-term
      // cache: 'no-store' // Ensure fresh results, adjust as needed
    });

    // Handle potential errors from the Vertex AI API
    if (!response.ok) {
      const errorBody = await response.text();
      console.error(
        `[API Search Route] Vertex AI Error ${response.status}: ${errorBody}`,
      );
      throw new Error(
        `Vertex AI Search API request failed with status ${response.status}`,
      );
    }

    // Parse the successful response
    const data = await response.json();

    const rawResults: VertexSearchResult[] = isVertexSearchResultArray(
      data.results,
    )
      ? data.results
      : [];

    // Extract and format the results for the frontend
    // Ensure we handle cases where parts of the response might be missing
    const formattedResults = rawResults.map((result) => ({
      id: result.id,
      title: result.document?.derivedStructData?.htmlTitle || "Untitled Result",
      link: result.document?.derivedStructData?.link,
      snippet:
        result.document?.derivedStructData?.snippets?.[0]?.htmlSnippet ||
        "No snippet available.",
    }));

    console.log(
      `[API Search Route] Found ${formattedResults.length} results for query: "${query}"`,
    );

    // Return the formatted results to the client
    return NextResponse.json({ results: formattedResults });
  } catch (error) {
    // Log any unexpected errors during the process
    console.error("[API Search Route] Error fetching search results:", error);
    // Return a generic error response to the client
    return NextResponse.json(
      { error: "Failed to fetch search results." },
      { status: 500 },
    );
  }
}

// Optional: Handle GET requests if necessary, perhaps to explain usage
export async function GET() {
  // Method Not Allowed
  return NextResponse.json(
    {
      message:
        'Method Not Allowed. Please use POST with a JSON body containing a "query" field.',
    },
    { status: 405 },
  );
}
