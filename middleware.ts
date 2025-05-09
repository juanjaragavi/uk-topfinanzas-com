import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Check if the request is for a static file
  const { pathname } = request.nextUrl;

  // Allow static files to pass through without any processing
  if (
    pathname.includes(".png") ||
    pathname.includes(".ico") ||
    pathname.includes(".webmanifest") ||
    pathname.includes("/fonts/") ||
    pathname.includes("/images/")
  ) {
    return NextResponse.next();
  }

  // For other requests, continue normally
  return NextResponse.next();
}

export const config = {
  // Apply middleware to all routes, but exclude static resources
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|favicon.png|apple-touch-icon.png|site.webmanifest).*)"],
};
