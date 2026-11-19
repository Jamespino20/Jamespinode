import Link from "next/link";
import type { Project } from "@/lib/content";
import { StatusBadge } from "./status-badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-[var(--jbe-bark)]/30 p-4">
      <h3 className="text-lg font-semibold">
        <Link
          href={`/projects/${project.slug}`}
          className="underline-offset-4 hover:underline"
        >
          {project.title}
        </Link>
      </h3>
      <p className="mt-1 text-sm">{project.summary}</p>
      <p className="mt-2 flex flex-wrap items-center gap-2 text-xs">
        <StatusBadge status={project.status} />
        {project.category.map((c) => (
          <span key={c} className="rounded bg-[var(--jbe-olive)]/15 px-2 py-0.5">
            {c}
          </span>
        ))}
      </p>
      {project.technologies.length > 0 && (
        <p className="mt-2 text-xs opacity-80">
          {project.technologies.join(" · ")}
        </p>
      )}
      {(project.links.repository ?? project.links.demo) && (
        <p className="mt-2 flex gap-3 text-xs">
          {project.links.repository && (
            <a href={project.links.repository} rel="noreferrer" target="_blank">
              Repository ↗
            </a>
          )}
          {project.links.demo && (
            <a href={project.links.demo} rel="noreferrer" target="_blank">
              Demo ↗
            </a>
          )}
        </p>
      )}
    </article>
  );
}
