"use client";

import { useState } from "react";
import { useThemeStore, type Theme } from "@/stores/theme-store";

type Line = { text: string; kind: "in" | "out" };

const HELP = [
  "help — this list",
  "about · projects · skills · experience — jump links",
  "theme light|dark|system — actually changes the theme",
  "noot — ???",
  "hire — the correct answer",
  "clear — wipe the screen",
  "exit — back to the boring half",
];

const EGGS: Record<string, string[]> = {
  noot: ["Noot noot. The owl approves.", "Curiosity logged. Carry on."],
  hire: [
    "Correct. Email espino.jamesbryant20@gmail.com.",
    "Response time: faster than this terminal renders.",
  ],
  sudo: ["Nice try. This terminal has no powers and no secrets."],
  hello: ["Hello. The owl blinks exactly once."],
};

export function MiniTerminal() {
  const [lines, setLines] = useState<Line[]>([
    { text: "jbe-canvas ~ type 'help' (there are hidden ones)", kind: "out" },
  ]);
  const [value, setValue] = useState("");
  const setTheme = useThemeStore((s) => s.setTheme);

  function run(raw: string) {
    const cmd = raw.trim().toLowerCase();
    const out: Line[] = [{ text: `> ${raw}`, kind: "in" }];
    if (cmd === "") {
      setLines((l) => [...l, ...out]);
      return;
    }
    if (cmd === "clear") {
      setLines([]);
      return;
    }
    if (cmd === "help") {
      out.push(...HELP.map((text) => ({ text, kind: "out" as const })));
    } else if (cmd === "exit") {
      window.location.href = "/";
      return;
    } else if (["about", "projects", "skills", "experience"].includes(cmd)) {
      const target = cmd === "skills" ? "/#toolbox" : `/${cmd}`;
      window.location.href = target;
      out.push({ text: `navigating to ${target} …`, kind: "out" });
    } else if (cmd.startsWith("theme ")) {
      const theme = cmd.slice(6) as Theme;
      if (["light", "dark", "system"].includes(theme)) {
        setTheme(theme);
        out.push({ text: `theme → ${theme}`, kind: "out" });
      } else {
        out.push({ text: "usage: theme light|dark|system", kind: "out" });
      }
    } else if (cmd in EGGS) {
      out.push(...EGGS[cmd].map((text) => ({ text, kind: "out" as const })));
    } else {
      out.push({ text: `unknown command: ${cmd} — try 'help'`, kind: "out" });
    }
    setLines((l) => [...l, ...out]);
  }

  return (
    <div className="mt-8 rounded-xl border border-[var(--jbe-bark)]/40 bg-black/85 p-4 font-mono text-sm text-green-200">
      <div aria-live="polite" className="space-y-1">
        {lines.map((l, i) => (
          <p
            key={i}
            className={l.kind === "in" ? "text-[var(--jbe-gold)]" : undefined}
          >
            {l.text}
          </p>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          run(value);
          setValue("");
        }}
        className="mt-2 flex gap-2"
      >
        <span aria-hidden>$</span>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          aria-label="Terminal command"
          autoComplete="off"
          spellCheck={false}
          className="w-full bg-transparent outline-none"
        />
      </form>
    </div>
  );
}
