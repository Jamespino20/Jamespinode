import { getAllProjects } from "@/lib/content";
import { ProjectFilter } from "@/components/project-filter";

export default function ProjectsPage() {
  const projects = getAllProjects();
  return (
    <>
      <h1>Projects</h1>
      <p className="mt-2 max-w-2xl text-sm">
        Verified work with implementation detail — what was built, why, and
        what was learned. Planned integrations are labeled planned until they
        ship.
      </p>
      <div className="mt-6">
        <ProjectFilter projects={projects} />
      </div>
    </>
  );
}
