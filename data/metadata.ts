import type { Metadata } from "next";
import { siteContent } from "./site-content";
import { locales, type Locale } from "../lib/i18n";

export const siteUrl = "https://www.cayoresort.com";
const siteName = siteContent.brand.name;

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  locale?: Locale;
};

const localeMap: Record<Locale, string> = {
  en: "en_GB",
  el: "el_GR",
  de: "de_DE",
};

function withLocale(path: string, locale: Locale) {
  if (path === "/") return `/${locale}`;
  return `/${locale}${path}`;
}

export function buildMetadata({
  title,
  description,
  path,
  image = "/images/og/default.jpg",
  locale = "en",
}: BuildMetadataInput): Metadata {
  const fullTitle = `${title} | ${siteName}`;
  const localizedPath = withLocale(path, locale);
  const canonicalUrl = `${siteUrl}${localizedPath}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${siteUrl}${withLocale(path, "en")}`,
        el: `${siteUrl}${withLocale(path, "el")}`,
        de: `${siteUrl}${withLocale(path, "de")}`,
        "x-default": `${siteUrl}${withLocale(path, "en")}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName,
      type: "website",
      locale: localeMap[locale],
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