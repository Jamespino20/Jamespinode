"use client";

import Link from "next/link";
import { useCanvasStore } from "@/stores/canvas-store";
import { MiniTerminal } from "@/components/mini-terminal";

const APPS = [
  { id: "projects", title: "Projects" },
  { id: "library", title: "Library" },
  { id: "studio", title: "Studio" },
  { id: "workshop", title: "Workshop" },
  { id: "terminal", title: "Terminal" },
  { id: "about", title: "About" },
  { id: "settings", title: "Settings" },
];

export default function CanvasPage() {
  const { windows, openWindow, closeWindow, toggleMinimize } =
    useCanvasStore();
  return (
    <>
      <section className="rounded-2xl border border-[var(--jbe-bark)]/25 bg-gradient-to-br from-[var(--jbe-clay)]/20 via-[var(--jbe-card)] to-[var(--jbe-olive)]/20 p-8">
        <p className="eyebrow">The playful half</p>
        <h1>JBE Canvas</h1>
        <p className="mt-2 max-w-2xl text-sm">
          The simple portfolio is the professional record. This is the
          workshop behind it — open an app, poke around. Some things here
          aren&apos;t meant to be obvious.{" "}
          <Link href="/" className="underline underline-offset-4">
            Exit Canvas
          </Link>
        </p>
      </section>

      <section aria-label="Applications" className="mt-6">
        <ul className="flex flex-wrap gap-2">
          {APPS.map((a) => (
            <li key={a.id}>
              <button
                onClick={() => openWindow(a.id, a.title)}
                className="rounded-full border border-[var(--jbe-bark)]/50 px-3 py-1 text-sm transition-colors hover:border-[var(--jbe-olive)] hover:text-[var(--jbe-moss)]"
              >
                Open {a.title}
              </button>
            </li>
          ))}
        </ul>
        {windows.length > 0 && (
          <ul className="mt-4 space-y-2">
            {windows.map((w) => (
              <li
                key={w.id}
                className="flex items-center gap-3 rounded-lg border border-[var(--jbe-bark)]/30 bg-[var(--jbe-card)] px-4 py-2 text-sm"
              >
                <span className="font-semibold">{w.title}</span>
                {w.isMinimized && (
                  <span className="text-xs opacity-70">(minimized)</span>
                )}
                <span className="ml-auto flex gap-2">
                  <button onClick={() => toggleMinimize(w.id)}>min</button>
                  <button onClick={() => closeWindow(w.id)}>close</button>
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <MiniTerminal />
    </>
  );
}
