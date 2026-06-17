import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getPortfolio } from "@/content";
import { routing, isLocale } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const data = getPortfolio(locale);

  return {
    title: data.name,
    description: data.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ko: "/ko",
      },
    },
    openGraph: {
      title: data.name,
      description: data.description,
      url: `/${locale}`,
      siteName: data.name,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={{}}>
      <ThemeProvider attribute="class" defaultTheme="light">
        <TooltipProvider delayDuration={0}>
          <div
            lang={locale}
            className={cn(
              "min-h-screen bg-background font-sans text-foreground antialiased relative",
              locale === "ko" && "break-keep"
            )}
          >
            <div className="absolute inset-0 top-0 left-0 right-0 h-[120px] overflow-hidden z-0">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <div className="relative z-10 max-w-5xl mx-auto py-12 pb-28 sm:py-20 px-6">
              {children}
            </div>
            <Navbar />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
