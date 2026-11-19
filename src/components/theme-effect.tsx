"use client";

import { useEffect } from "react";
import { resolveTheme, useThemeStore } from "@/stores/theme-store";

export function ThemeEffect() {
  const theme = useThemeStore((s) => s.theme);

  useEffect(() => {
    const resolved = resolveTheme(theme);
    document.documentElement.classList.toggle("dark", resolved === "dark");
  }, [theme]);

  return null;
}
