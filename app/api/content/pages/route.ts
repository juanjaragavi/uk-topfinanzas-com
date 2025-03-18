/**
 * API route for updating page content files
 * This endpoint allows for programmatic updates to content JSON files by LLM-based agents
 */

import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  // Extract the page path from the query parameters
  const { searchParams } = new URL(request.url);
  const pagePath = searchParams.get("path");

  if (!pagePath) {
    return NextResponse.json(
      { error: "Missing required query parameter: path" },
      { status: 400 }
    );
  }

  try {
    // Construct full path to the content file
    const contentPath = path.join(process.cwd(), pagePath);

    // Check if the file exists
    if (!fs.existsSync(contentPath)) {
      return NextResponse.json(
        { error: `Content file not found: ${pagePath}` },
        { status: 404 }
      );
    }

    // Read the content file
    const content = fs.readFileSync(contentPath, "utf8");

    // Parse and return the content
    return NextResponse.json(JSON.parse(content));
  } catch (error) {
    console.error(`Error reading content file:`, error);
    return NextResponse.json(
      { error: "Failed to read content file" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate required fields
    if (!body.path || !body.content) {
      return NextResponse.json(
        { error: "Missing required fields: path and content are required" },
        { status: 400 }
      );
    }

    // Construct full path to the content file
    const contentPath = path.join(process.cwd(), body.path);

    // Check if the file exists
    if (!fs.existsSync(contentPath)) {
      return NextResponse.json(
        { error: `Content file not found: ${body.path}` },
        { status: 404 }
      );
    }

    // Validate that the content is valid JSON
    let contentObject;
    try {
      if (typeof body.content === "string") {
        contentObject = JSON.parse(body.content);
      } else {
        contentObject = body.content;
      }
    } catch (error) {
      return NextResponse.json(
        { error: "Invalid JSON content provided" },
        { status: 400 }
      );
    }

    // Write content to file
    // Format with 2-space indentation for readability
    fs.writeFileSync(
      contentPath,
      JSON.stringify(contentObject, null, 2),
      "utf8"
    );

    return NextResponse.json({
      success: true,
      message: `Content updated successfully: ${body.path}`,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error(`Error updating content file:`, error);
    return NextResponse.json(
      { error: "Failed to update content file" },
      { status: 500 }
    );
  }
}
