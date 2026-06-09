const fs = require('fs');
const path = require('path');
const newsDir = 'app/api/admin/news';
const newsIdDir = 'app/api/admin/news/[id]';
const catsDir = 'app/api/admin/news-categories';
const catsIdDir = 'app/api/admin/news-categories/[id]';

[newsDir, newsIdDir, catsDir, catsIdDir].forEach(d => fs.mkdirSync(d, {recursive: true}));

const newsRoute = `import { NextResponse } from "next/server";
import { createNews, getAllNewsForAdmin, normalizePublishedAt, uploadImage, type NewsStatus } from "@/lib/news";
import { cmsUnauthorizedResponse, isCmsRequestAuthenticated } from "@/lib/cms-auth-server";

export async function GET() {
  if (!(await isCmsRequestAuthenticated())) return cmsUnauthorizedResponse();
  try {
    const news = await getAllNewsForAdmin();
    return NextResponse.json({ news });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!(await isCmsRequestAuthenticated())) return cmsUnauthorizedResponse();
  try {
    const formData = await request.formData();
    const title = String(formData.get("title") || "").trim();
    const publishedAtInput = String(formData.get("publishedAt") || "").trim();
    const contentHtml = String(formData.get("contentHtml") || "").trim();
    const categoryId = formData.get("categoryId") ? String(formData.get("categoryId")) : null;
    const featured = String(formData.get("featured") || "false") === "true";
    const status = String(formData.get("status") || "draft") as NewsStatus;
    const imageFile = formData.get("image");

    if (!title || !contentHtml) return NextResponse.json({ error: "Title and content required" }, { status: 400 });

    let coverImageUrl = null, coverImagePath = null;
    if (imageFile instanceof File && imageFile.size > 0) {
      const upload = await uploadImage(imageFile, title);
      coverImageUrl = upload.url; coverImagePath = upload.path;
    }

    const newsItem = await createNews({
      title, publishedAt: normalizePublishedAt(publishedAtInput || null, status),
      contentHtml, featured, status, coverImageUrl, coverImagePath, categoryId
    });
    return NextResponse.json({ newsItem });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Error" }, { status: 500 });
  }
}
`;
fs.writeFileSync(path.join(newsDir, 'route.ts'), newsRoute);

const newsIdRoute = `import { NextResponse } from "next/server";
import { deleteNews, updateNews, normalizePublishedAt, uploadImage, deleteImage, getNewsById, type NewsStatus } from "@/lib/news";
import { cmsUnauthorizedResponse, isCmsRequestAuthenticated } from "@/lib/cms-auth-server";

export async function PATCH(request: Request, props: { params: Promise<{ id: string }> }) {
  if (!(await isCmsRequestAuthenticated())) return cmsUnauthorizedResponse();
  try {
    const params = await props.params;
    const id = params.id;
    const formData = await request.formData();
    const title = String(formData.get("title") || "").trim();
    const publishedAtInput = String(formData.get("publishedAt") || "").trim();
    const contentHtml = String(formData.get("contentHtml") || "").trim();
    const categoryId = formData.get("categoryId") && formData.get("categoryId") !== "null" ? String(formData.get("categoryId")) : null;
    const featured = String(formData.get("featured") || "false") === "true";
    const status = String(formData.get("status") || "draft") as NewsStatus;
    const imageFile = formData.get("image");
    const removeImage = String(formData.get("removeImage") || "false") === "true";

    if (!title || !contentHtml) return NextResponse.json({ error: "Title and content required" }, { status: 400 });

    const existing = await getNewsById(id);
    if (!existing) return NextResponse.json({ error: "Not found" }, { status: 404 });

    let coverImageUrl = existing.cover_image_url;
    let coverImagePath = existing.cover_image_path;

    if (removeImage && coverImagePath) {
      await deleteImage(coverImagePath);
      coverImageUrl = null; coverImagePath = null;
    } else if (imageFile instanceof File && imageFile.size > 0) {
      if (coverImagePath) await deleteImage(coverImagePath);
      const upload = await uploadImage(imageFile, title);
      coverImageUrl = upload.url; coverImagePath = upload.path;
    }

    const newsItem = await updateNews(id, {
      title, publishedAt: normalizePublishedAt(publishedAtInput || null, status),
      contentHtml, featured, status, coverImageUrl, coverImagePath, categoryId
    });
    return NextResponse.json({ newsItem });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Error" }, { status: 500 });
  }
}

export async function DELETE(_: Request, props: { params: Promise<{ id: string }> }) {
  if (!(await isCmsRequestAuthenticated())) return cmsUnauthorizedResponse();
  try {
    const params = await props.params;
    await deleteNews(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Error" }, { status: 500 });
  }
}
`;
fs.writeFileSync(path.join(newsIdDir, 'route.ts'), newsIdRoute);

const catsRoute = `import { NextResponse } from "next/server";
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
`;
fs.writeFileSync(path.join(catsDir, 'route.ts'), catsRoute);

const catsIdRoute = `import { NextResponse } from "next/server";
import { deleteNewsCategory } from "@/lib/news";
import { cmsUnauthorizedResponse, isCmsRequestAuthenticated } from "@/lib/cms-auth-server";

export async function DELETE(_: Request, props: { params: Promise<{ id: string }> }) {
  if (!(await isCmsRequestAuthenticated())) return cmsUnauthorizedResponse();
  try {
    const params = await props.params;
    await deleteNewsCategory(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Error" }, { status: 500 });
  }
}
`;
fs.writeFileSync(path.join(catsIdDir, 'route.ts'), catsIdRoute);
