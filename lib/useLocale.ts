"use client";

import { usePathname } from "next/navigation";
import { defaultLocale, isLocale } from "./i18n";

export function useLocale() {
  const pathname = usePathname();
  const segment = pathname.split("/")[1];

  return isLocale(segment) ? segment : defaultLocale;
}