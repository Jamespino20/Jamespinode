import type { Project } from "@/lib/content";

const STATUS_LABEL: Record<Project["status"], string> = {
  completed: "Completed",
  ongoing: "Ongoing",
  experimental: "Experiment",
  planned: "Planned",
};

export function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span className="rounded-full border border-current px-2 py-0.5 text-xs uppercase tracking-wide">
      {STATUS_LABEL[status]}
    </span>
  );
}
