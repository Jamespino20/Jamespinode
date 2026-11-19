"use client";

import Link from "next/link";
import { useCanvasStore } from "@/stores/canvas-store";

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
    <section>
      <h1>JBE Canvas (scaffold)</h1>
      <p>
        Desktop shell placeholder. WebGL scene loads here in Milestone 04.{" "}
        <Link href="/">Exit Canvas</Link>
      </p>
      <ul>
        {APPS.map((a) => (
          <li key={a.id}>
            <button onClick={() => openWindow(a.id, a.title)}>
              Open {a.title}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {windows.map((w) => (
          <li key={w.id}>
            {w.title} {w.isMinimized ? "(minimized)" : ""}
            <button onClick={() => toggleMinimize(w.id)}>min</button>
            <button onClick={() => closeWindow(w.id)}>close</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
