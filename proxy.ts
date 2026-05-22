import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LAUNCH_DATE = new Date("2026-07-01T00:00:00");

export function proxy(request: NextRequest) {
  const launched = Date.now() >= LAUNCH_DATE.getTime();

  if (launched) return NextResponse.next();

  const { pathname } = request.nextUrl;

  // Allow the countdown page itself and all Next.js internals
  if (
    pathname === "/" ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // Lock everything else — redirect to countdown
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
