import { NextResponse, type NextRequest } from "next/server";
import { isLocale, routing, type Locale } from "@/i18n/routing";

const localeCookieName = "NEXT_LOCALE";

function getLocaleFromPathname(pathname: string): Locale | null {
  const [, segment] = pathname.split("/");

  return isLocale(segment) ? segment : null;
}

function withLocaleCookie(response: NextResponse, locale: Locale) {
  response.cookies.set(localeCookieName, locale, {
    path: "/",
    sameSite: "lax",
  });

  return response;
}

function redirectToDefaultLocale(request: NextRequest) {
  const url = request.nextUrl.clone();
  const pathname = url.pathname === "/" ? "" : url.pathname;

  url.pathname = `/${routing.defaultLocale}${pathname}`;

  return withLocaleCookie(NextResponse.redirect(url), routing.defaultLocale);
}

export function proxy(request: NextRequest) {
  const locale = getLocaleFromPathname(request.nextUrl.pathname);

  if (locale) {
    return withLocaleCookie(NextResponse.next(), locale);
  }

  return redirectToDefaultLocale(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
