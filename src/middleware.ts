import { NextResponse, NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  if (path === "/event/Security-leaders") {
    const url = req.nextUrl.clone();
    url.pathname = "/event/security-leaders";
    return NextResponse.redirect(url, 307);
  }
}

export const config = {
  matcher: ["/event/:path*"],
};
