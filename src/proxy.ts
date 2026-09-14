import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";

  if (host.includes("dhruvisoftwaresolutions.in")) {
    const url = request.nextUrl.clone();
    url.hostname = "www.dhruvisoftwaresolutions.com";
    url.port = "";
    url.protocol = "https";
    return NextResponse.redirect(url.toString(), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
