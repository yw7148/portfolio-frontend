import { notFound } from "next/navigation";
import { portfolioEn } from "./portfolio.en";
import { portfolioKo } from "./portfolio.ko";
import type { PortfolioData } from "./schema";
import { isLocale, type Locale } from "@/i18n/routing";

const content = {
  en: portfolioEn,
  ko: portfolioKo,
} satisfies Record<Locale, PortfolioData>;

export function getPortfolio(locale: string): PortfolioData {
  if (!isLocale(locale)) {
    notFound();
  }

  return content[locale];
}
