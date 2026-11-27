import type { Metadata } from "next";

export const SITE_URL = "https://www.nomyx.io";
export const DEFAULT_OG_IMAGE_PATH = "/nomyx-og-image.png";

export const DEFAULT_SHARE_IMAGE = {
  url: `${SITE_URL}${DEFAULT_OG_IMAGE_PATH}`,
  width: 1200,
  height: 630,
  alt: "Nomyx - Agile Infrastructure for Institutional Capital",
};

export type PageMetadataOptions = {
  title: string;
  description: string;
  pathname?: string;
  image?: string | null;
  imageAlt?: string | null;
  type?: "website" | "article" | "profile";
};

export function createPageMetadata({
  title,
  description,
  pathname = "",
  image,
  imageAlt,
  type = "website",
}: PageMetadataOptions): Metadata {
  const cleanPath = pathname
    ? pathname.startsWith("/")
      ? pathname
      : `/${pathname}`
    : "";
  const url = `${SITE_URL}${cleanPath}`;

  const resolvedImage = image
    ? {
        url: image,
        alt: imageAlt || title,
      }
    : DEFAULT_SHARE_IMAGE;

  const twitterImageUrl =
    typeof resolvedImage.url === "string" ? resolvedImage.url : resolvedImage;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Nomyx",
      type,
      images: [resolvedImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [twitterImageUrl],
    },
  };
}
