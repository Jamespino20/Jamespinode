"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type RenderQuality = "low" | "medium" | "high";

type SettingsState = {
  reducedMotion: boolean;
  quality: RenderQuality;
  setReducedMotion: (v: boolean) => void;
  setQuality: (q: RenderQuality) => void;
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      reducedMotion: false,
      quality: "medium",
      setReducedMotion: (v) => set({ reducedMotion: v }),
      setQuality: (q) => set({ quality: q }),
    }),
    { name: "jbe-settings" },
  ),
);
