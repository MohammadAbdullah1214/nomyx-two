import { NextResponse } from "next/server";
import { getAllLeads } from "@/lib/leads";
import { cmsUnauthorizedResponse, isCmsRequestAuthenticated } from "@/lib/cms-auth-server";

export async function GET() {
  if (!(await isCmsRequestAuthenticated())) {
    return cmsUnauthorizedResponse();
  }

  try {
    const leads = await getAllLeads();
    return NextResponse.json({ leads });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to load leads";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
