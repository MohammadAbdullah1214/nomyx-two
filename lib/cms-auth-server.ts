import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { CMS_SESSION_COOKIE, verifyCmsSession } from "@/lib/cms-auth";

export async function isCmsRequestAuthenticated() {
  const cookieStore = await cookies();
  const session = cookieStore.get(CMS_SESSION_COOKIE)?.value;

  return verifyCmsSession(session);
}

export async function cmsUnauthorizedResponse() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
