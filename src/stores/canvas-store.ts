"use client";

import { create } from "zustand";

export type CanvasWindow = {
  id: string;
  appId: string;
  title: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
};

type CanvasState = {
  windows: CanvasWindow[];
  focusedId: string | null;
  activeApp: string | null;
  openWindow: (appId: string, title: string) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  toggleMinimize: (id: string) => void;
  toggleMaximize: (id: string) => void;
};

let zCounter = 10;

export const useCanvasStore = create<CanvasState>()((set, get) => ({
  windows: [],
  focusedId: null,
  activeApp: null,
  openWindow: (appId, title) => {
    const existing = get().windows.find(
      (w) => w.appId === appId && w.isOpen,
    );
    if (existing) {
      set({
        focusedId: existing.id,
        activeApp: appId,
        windows: get().windows.map((w) =>
          w.id === existing.id
            ? { ...w, isMinimized: false, zIndex: ++zCounter }
            : w,
        ),
      });
      return;
    }
    const id = `${appId}-${Date.now()}`;
    const win: CanvasWindow = {
      id,
      appId,
      title,
      position: { x: 40 + get().windows.length * 28, y: 40 + get().windows.length * 28 },
      size: { width: 640, height: 440 },
      zIndex: ++zCounter,
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
    };
    set({
      windows: [...get().windows, win],
      focusedId: id,
      activeApp: appId,
    });
  },
  closeWindow: (id) =>
    set({
      windows: get().windows.filter((w) => w.id !== id),
      focusedId: null,
    }),
  focusWindow: (id) =>
    set({
      focusedId: id,
      windows: get().windows.map((w) =>
        w.id === id ? { ...w, zIndex: ++zCounter } : w,
      ),
    }),
  toggleMinimize: (id) =>
    set({
      windows: get().windows.map((w) =>
        w.id === id ? { ...w, isMinimized: !w.isMinimized } : w,
      ),
    }),
  toggleMaximize: (id) =>
    set({
      windows: get().windows.map((w) =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w,
      ),
    }),
}));
