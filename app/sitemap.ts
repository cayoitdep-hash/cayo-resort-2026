import type { MetadataRoute } from "next";
import { locales } from "../lib/i18n";
import { rooms } from "../data/rooms";
import { suites } from "../data/suites";

const siteUrl = "https://www.cayoresort.com";

const staticRoutes = [
  "",
  "/the-resort",
  "/accommodation",
  "/accommodation/rooms",
  "/accommodation/suites",
  "/dining",
  "/wellness",
  "/experiences",
  "/facilities",
  "/events",
  "/offers",
  "/guest-information",
  "/contact",
  "/career-opportunities",
  "/privacy-policy",
  "/cookie-policy",
  "/environmental-policy-sustainability",
  "/website-terms-of-use",
  "/policy-on-the-prevention-and-combating-of-violence-and-harassment",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const roomRoutes = rooms.map((room) => `/accommodation/rooms/${room.slug}`);
  const suiteRoutes = suites.map(
    (suite) => `/accommodation/suites/${suite.slug}`
  );

  const allRoutes = [...staticRoutes, ...roomRoutes, ...suiteRoutes];

  return locales.flatMap((locale) =>
    allRoutes.map((route) => ({
      url: `${siteUrl}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : route.includes("accommodation") ? 0.9 : 0.7,
      alternates: {
        languages: {
          en: `${siteUrl}/en${route}`,
          el: `${siteUrl}/el${route}`,
          de: `${siteUrl}/de${route}`,
        },
      },
    }))
  );
}