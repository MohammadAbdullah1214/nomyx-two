import { NextRequest, NextResponse } from "next/server";

import { CMS_SESSION_COOKIE, verifyCmsSession } from "@/lib/cms-auth";

function isProtectedCmsPath(pathname: string) {
  return pathname.startsWith("/cms") && !pathname.startsWith("/cms/login");
}

function getLoginRedirect(request: NextRequest) {
  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = "/cms/login";
  loginUrl.searchParams.set("next", `${request.nextUrl.pathname}${request.nextUrl.search}`);

  return loginUrl;
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAdminApiPath = pathname.startsWith("/api/admin");
  const shouldProtect = isAdminApiPath || isProtectedCmsPath(pathname);

  if (!shouldProtect) {
    return NextResponse.next();
  }

  const session = request.cookies.get(CMS_SESSION_COOKIE)?.value;
  const authenticated = await verifyCmsSession(session);

  if (authenticated) {
    return NextResponse.next();
  }

  if (isAdminApiPath) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.redirect(getLoginRedirect(request));
}

export const config = {
  matcher: ["/cms/:path*", "/api/admin/:path*"],
};
