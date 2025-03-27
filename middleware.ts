import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Simply pass through all requests without any rewrites
  return NextResponse.next();
}

export const config = {
  // Only apply middleware to specific routes if needed
  matcher: [],
};
