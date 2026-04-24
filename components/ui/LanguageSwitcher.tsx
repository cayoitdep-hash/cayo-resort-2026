"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocale, locales, type Locale } from "../../lib/i18n";

const labels: Record<Locale, string> = {
  en: "EN",
  el: "EL",
  de: "DE",
};

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const currentLocale = isLocale(segments[1]) ? segments[1] : "en";

  function getLocalizedPath(locale: Locale) {
    if (isLocale(segments[1])) {
      const rest = segments.slice(2).join("/");
      return rest ? `/${locale}/${rest}` : `/${locale}`;
    }

    return `/${locale}${pathname === "/" ? "" : pathname}`;
  }

  return (
    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-black/55">
      {locales.map((locale) => (
        <Link
          key={locale}
          href={getLocalizedPath(locale)}
          className={`transition hover:text-black ${
            locale === currentLocale ? "text-black" : "text-black/45"
          }`}
        >
          {labels[locale]}
        </Link>
      ))}
    </div>
  );
}