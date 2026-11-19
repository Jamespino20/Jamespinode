"use client";

import { useThemeStore, type Theme } from "@/stores/theme-store";

const OPTIONS: Theme[] = ["light", "dark", "system"];

export function ThemeToggle() {
  const { theme, setTheme } = useThemeStore();
  return (
    <label>
      Theme{" "}
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as Theme)}
      >
        {OPTIONS.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
