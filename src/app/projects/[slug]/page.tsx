import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "@/lib/content";
import { StatusBadge } from "@/components/status-badge";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} — James Bryant Espino`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const Content = (await import(`@/content/projects/${slug}.mdx`)).default;

  return (
    <article>
      <p className="text-sm">
        <Link href="/projects" className="underline underline-offset-4">
          ← All projects
        </Link>
      </p>
      <h1 className="mt-2">{project.title}</h1>
      <p className="mt-2 max-w-2xl">{project.summary}</p>
      <p className="mt-3 flex flex-wrap items-center gap-2 text-xs">
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
      <div className="mt-8 max-w-2xl">
        <Content />
      </div>
      {(project.links.repository ?? project.links.demo) && (
        <p className="mt-8 flex gap-4 text-sm">
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
