import type { Metadata } from "next";
import { siteContent } from "./site-content";

const siteUrl = "https://www.cayoresort.com";
const siteName = siteContent.brand.name;

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  image = "/images/og/default.jpg",
}: BuildMetadataInput): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  const canonicalUrl = `${siteUrl}${path}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName,
      type: "website",
      locale: "en_GB",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}