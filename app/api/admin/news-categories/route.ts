import { NextResponse } from "next/server";
import { getNewsCategories, createNewsCategory } from "@/lib/news";
import { cmsUnauthorizedResponse, isCmsRequestAuthenticated } from "@/lib/cms-auth-server";

export async function GET() {
  if (!(await isCmsRequestAuthenticated())) return cmsUnauthorizedResponse();
  try {
    const categories = await getNewsCategories();
    return NextResponse.json({ categories });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!(await isCmsRequestAuthenticated())) return cmsUnauthorizedResponse();
  try {
    const { name } = await request.json();
    if (!name) return NextResponse.json({ error: "Name required" }, { status: 400 });
    const category = await createNewsCategory(name);
    return NextResponse.json({ category });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Error" }, { status: 500 });
  }
}
