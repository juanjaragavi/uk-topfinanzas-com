import { NextRequest, NextResponse } from "next/server";
import {
  RECOMMENDER_LOCK_COOKIE,
  parseLockFromRequestCookie,
} from "@/lib/navigation/recommender-lock";

const QUIZ_PATHS = ["/quiz", "/quiz-2"];

function isRestrictedQuizPath(pathname: string): boolean {
  return QUIZ_PATHS.some(
    (basePath) => pathname === basePath || pathname.startsWith(`${basePath}/`),
  );
}

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

  if (isRestrictedQuizPath(pathname)) {
    const lock = parseLockFromRequestCookie(
      request.cookies.get(RECOMMENDER_LOCK_COOKIE),
    );

    if (lock) {
      const targetUrl = request.nextUrl.clone();
      targetUrl.pathname = lock.pathname;
      targetUrl.search = lock.search ?? "";

      return NextResponse.redirect(targetUrl, 307);
    }
  }

  // For other requests, continue normally
  return NextResponse.next();
}

export const config = {
  // Apply middleware to all routes, but exclude static resources
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|favicon.png|apple-touch-icon.png|site.webmanifest).*)",
  ],
};
