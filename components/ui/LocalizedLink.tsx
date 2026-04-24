"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isLocale, defaultLocale } from "../../lib/i18n";

type LocalizedLinkProps = React.ComponentProps<typeof Link>;

function getCurrentLocale(pathname: string) {
  const firstSegment = pathname.split("/")[1];
  return isLocale(firstSegment) ? firstSegment : defaultLocale;
}

function localizeHref(href: LocalizedLinkProps["href"], locale: string) {
  if (typeof href !== "string") return href;

  if (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  const firstSegment = href.split("/")[1];

  if (isLocale(firstSegment)) {
    return href;
  }

  return `/${locale}${href}`;
}

export default function LocalizedLink(props: LocalizedLinkProps) {
  const pathname = usePathname();
  const locale = getCurrentLocale(pathname);

  return <Link {...props} href={localizeHref(props.href, locale)} />;
}