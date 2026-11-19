import type { Project } from "@/lib/content";

const STATUS_LABEL: Record<Project["status"], string> = {
  completed: "Completed",
  ongoing: "Ongoing",
  experimental: "Experiment",
  planned: "Planned",
};

const STATUS_STYLE: Record<Project["status"], string> = {
  completed:
    "border-[#6b7245]/60 bg-[#6b7245]/15 text-inherit dark:border-[#8ba06a]/60 dark:bg-[#8ba06a]/15",
  ongoing:
    "border-[#a44e2a]/60 bg-[#a44e2a]/12 text-inherit dark:border-[#d97b4f]/60 dark:bg-[#d97b4f]/15",
  experimental:
    "border-[#8a6d1a]/60 bg-[#8a6d1a]/12 text-inherit dark:border-[#e0b93c]/60 dark:bg-[#e0b93c]/15",
  planned:
    "border-current/40 bg-transparent text-inherit opacity-80",
};

export function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span
      className={`rounded-full border px-2 py-0.5 text-xs uppercase tracking-wide ${STATUS_STYLE[status]}`}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}
