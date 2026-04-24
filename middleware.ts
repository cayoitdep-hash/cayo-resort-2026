import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale } from "./lib/i18n";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/logo") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/videos") ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/");
  const possibleLocale = segments[1];

  if (isLocale(possibleLocale)) {
    const pathnameWithoutLocale = "/" + segments.slice(2).join("/");

    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname =
      pathnameWithoutLocale === "/" ? "/" : pathnameWithoutLocale;

    const response = NextResponse.rewrite(rewriteUrl);

    response.cookies.set("NEXT_LOCALE", possibleLocale, {
      path: "/",
      sameSite: "lax",
    });

    return response;
  }

  const savedLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const locale =
    savedLocale && isLocale(savedLocale) ? savedLocale : defaultLocale;

  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};