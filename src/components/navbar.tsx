"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import {
  BookOpenIcon,
  FileTextIcon,
  GithubIcon,
  HomeIcon,
  LanguagesIcon,
} from "lucide-react";
import { useLocale } from "next-intl";

const BLOG_URL = "https://blog.youngwon.me";
const GITHUB_URL = "https://github.com/yw7148";

export default function Navbar() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const nextLocale = locale === "ko" ? "en" : "ko";
  const labels =
    locale === "ko"
      ? {
          navigation: "사이트 메뉴",
          portfolio: "포트폴리오",
          cv: "경력기술서",
          blog: "블로그",
          github: "GitHub (새 창)",
          locale: "English",
          theme: "테마 전환",
        }
      : {
          navigation: "Site navigation",
          portfolio: "Portfolio",
          cv: "CV",
          blog: "Blog",
          github: "GitHub (new tab)",
          locale: "Korean",
          theme: "Toggle theme",
        };

  return (
    <header className="site-header">
      <nav className="site-dock" aria-label={labels.navigation}>
        <Link
          className="dock-item"
          href="/"
          aria-label={labels.portfolio}
          aria-current={pathname === "/" ? "page" : undefined}
          data-tooltip="Portfolio"
        >
          <HomeIcon aria-hidden="true" />
        </Link>
        <Link
          className="dock-item"
          href="/cv"
          aria-label={labels.cv}
          aria-current={pathname === "/cv" ? "page" : undefined}
          data-tooltip="CV"
        >
          <FileTextIcon aria-hidden="true" />
        </Link>
        <a
          className="dock-item"
          href={BLOG_URL}
          aria-label={labels.blog}
          data-tooltip="Blog"
        >
          <BookOpenIcon aria-hidden="true" />
        </a>

        <span className="dock-separator" aria-hidden="true" />

        <a
          className="dock-item"
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={labels.github}
          data-tooltip="GitHub"
        >
          <GithubIcon aria-hidden="true" />
        </a>

        <span className="dock-separator" aria-hidden="true" />

        <button
          type="button"
          className="dock-item"
          aria-label={labels.locale}
          data-tooltip={labels.locale}
          onClick={() => router.replace(pathname, { locale: nextLocale })}
        >
          <LanguagesIcon aria-hidden="true" />
        </button>
        <ModeToggle
          className="dock-item"
          aria-label={labels.theme}
          data-tooltip="Theme"
        />
      </nav>
    </header>
  );
}
