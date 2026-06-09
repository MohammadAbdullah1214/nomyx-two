import { NextResponse } from "next/server";
import { deleteNewsCategory, updateNewsCategory, reassignNewsCategory } from "@/lib/news";
import { cmsUnauthorizedResponse, isCmsRequestAuthenticated } from "@/lib/cms-auth-server";

export async function PATCH(request: Request, props: { params: Promise<{ id: string }> }) {
  if (!(await isCmsRequestAuthenticated())) return cmsUnauthorizedResponse();
  try {
    const params = await props.params;
    const { name, status } = await request.json();
    if (!name || !status) return NextResponse.json({ error: "Name and status required" }, { status: 400 });
    const category = await updateNewsCategory(params.id, name, status);
    return NextResponse.json({ category });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Error" }, { status: 500 });
  }
}

export async function DELETE(request: Request, props: { params: Promise<{ id: string }> }) {
  if (!(await isCmsRequestAuthenticated())) return cmsUnauthorizedResponse();
  try {
    const params = await props.params;
    const url = new URL(request.url);
    const transferToCategoryId = url.searchParams.get("transferToCategoryId");
    
    if (transferToCategoryId) {
      await reassignNewsCategory(params.id, transferToCategoryId === "none" ? null : transferToCategoryId);
    }
    
    await deleteNewsCategory(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Error" }, { status: 500 });
  }
}
