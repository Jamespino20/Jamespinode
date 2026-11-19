"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/content";
import { ProjectCard } from "./project-card";

type Tab = { name: string; count: number };

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const tabs: Tab[] = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of projects) {
      for (const c of p.category) counts.set(c, (counts.get(c) ?? 0) + 1);
    }
    return [
      { name: "All", count: projects.length },
      ...[...counts.entries()]
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([name, count]) => ({ name, count })),
    ];
  }, [projects]);
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <div>
      <div role="tablist" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.name}
            role="tab"
            aria-selected={active === t.name}
            onClick={() => setActive(t.name)}
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${
              active === t.name
                ? "border-[var(--jbe-olive)] bg-[var(--jbe-olive)] text-white dark:text-[var(--jbe-charcoal)]"
                : "border-[var(--jbe-bark)]/50 hover:border-[var(--jbe-olive)] hover:text-[var(--jbe-moss)]"
            }`}
          >
            {t.name}{" "}
            <span className="opacity-70" aria-label={`${t.count} projects`}>
              {t.count}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2" role="tabpanel">
        {visible.map((p) => (
          <ProjectCard
            key={p.slug}
            project={p}
            index={projects.indexOf(p)}
          />
        ))}
      </div>
      {visible.length === 0 && <p>No projects in this category yet.</p>}
    </div>
  );
}
