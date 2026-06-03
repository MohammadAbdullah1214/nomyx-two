import { NextResponse } from "next/server";

import {
  CMS_SESSION_COOKIE,
  cmsSessionCookieOptions,
  createCmsSession,
  isCmsAuthConfigured,
  verifyCmsCredentials,
} from "@/lib/cms-auth";

type LoginBody = {
  password?: unknown;
  username?: unknown;
};

export async function POST(request: Request) {
  if (!isCmsAuthConfigured()) {
    return NextResponse.json(
      { error: "CMS authentication is not configured." },
      { status: 500 }
    );
  }

  let body: LoginBody;

  try {
    body = (await request.json()) as LoginBody;
  } catch {
    return NextResponse.json({ error: "Invalid login request." }, { status: 400 });
  }

  const username = typeof body.username === "string" ? body.username : "";
  const password = typeof body.password === "string" ? body.password : "";
  const validCredentials = await verifyCmsCredentials(username, password);

  if (!validCredentials) {
    return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
  }

  const session = await createCmsSession();
  const response = NextResponse.json({ success: true });
  response.cookies.set(CMS_SESSION_COOKIE, session, cmsSessionCookieOptions());

  return response;
}
