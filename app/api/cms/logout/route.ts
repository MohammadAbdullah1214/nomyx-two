import { NextResponse } from "next/server";

import { CMS_SESSION_COOKIE, cmsSessionCookieOptions } from "@/lib/cms-auth";

export async function POST() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(CMS_SESSION_COOKIE, "", {
    ...cmsSessionCookieOptions(),
    maxAge: 0,
  });

  return response;
}
