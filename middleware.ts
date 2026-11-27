import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const host = request.headers.get("host")?.toLowerCase() || "";

  const isProductionDomain =
    host === "www.nomyx.io" || host === "nomyx.io";
  const isProductionEnv = process.env.VERCEL_ENV === "production";

  // Prevent indexing on staging, dev, preview, or any non-production domain
  if (!isProductionDomain || !isProductionEnv) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api routes
     * - _next/static (static assets)
     * - _next/image (image optimization)
     * - favicon.ico, images, fonts
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ttf|woff|woff2)$).*)",
  ],
};
