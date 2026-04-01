import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  return NextResponse.redirect(
    new URL("https://accelerateux.org", req.url)
  );
}

export const config = {
  matcher: "/:path*",
};