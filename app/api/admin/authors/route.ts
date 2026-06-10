import { NextResponse } from "next/server";
import {
  createAuthor,
  getAllAuthorsForAdmin,
  uploadAuthorImage,
} from "@/lib/authors";
import { cmsUnauthorizedResponse, isCmsRequestAuthenticated } from "@/lib/cms-auth-server";

export async function GET() {
  if (!(await isCmsRequestAuthenticated())) {
    return cmsUnauthorizedResponse();
  }

  try {
    const authors = await getAllAuthorsForAdmin();
    return NextResponse.json({ authors });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to load authors";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!(await isCmsRequestAuthenticated())) {
    return cmsUnauthorizedResponse();
  }

  try {
    const formData = await request.formData();
    const name = String(formData.get("name") || "").trim();
    const bioHtml = String(formData.get("bioHtml") || "").trim();
    const designation = formData.has("designation") ? String(formData.get("designation") || "").trim() || null : null;
    const imageFile = formData.get("image");

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    let coverImageUrl: string | null = null;
    let coverImagePath: string | null = null;

    if (imageFile instanceof File && imageFile.size > 0) {
      const upload = await uploadAuthorImage(imageFile, name);
      coverImageUrl = upload.url;
      coverImagePath = upload.path;
    }

    const author = await createAuthor({
      name,
      bioHtml: bioHtml || null,
      designation,
      coverImageUrl,
      coverImagePath,
    });

    return NextResponse.json({ author });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to create author";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
