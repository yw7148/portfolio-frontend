"use client";

import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import type { ButtonHTMLAttributes } from "react";

type ModeToggleProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick">;

export function ModeToggle({ className, ...props }: ModeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className={cn(className)}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      {...props}
    >
      <SunIcon className="theme-icon-sun" aria-hidden="true" />
      <MoonIcon className="theme-icon-moon" aria-hidden="true" />
    </button>
  );
}
