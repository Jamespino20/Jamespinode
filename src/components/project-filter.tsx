"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/lib/content";
import { ProjectCard } from "./project-card";

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const p of projects) for (const c of p.category) set.add(c);
    return ["All", ...[...set].sort()];
  }, [projects]);
  const [active, setActive] = useState("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`rounded-full border px-3 py-1 text-sm ${
              active === c ? "bg-[var(--jbe-olive)] text-white" : ""
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
      {visible.length === 0 && <p>No projects in this category yet.</p>}
    </div>
  );
}
