import Link from "next/link";
import { getFeaturedProjects } from "@/lib/content";
import { getAllSkills } from "@/content/skills/skills-data";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  const featured = getFeaturedProjects();
  const skills = getAllSkills();
  return (
    <>
      <section aria-labelledby="hero">
        <h1 id="hero">James Bryant Espino</h1>
        <p className="text-lg">Developer. Systems thinker. Writer.</p>
        <p className="mt-4 max-w-2xl">
          I build systems that solve practical problems, explore the
          engineering behind them, and bring a creative perspective to the way
          technology is designed and experienced.
        </p>
        <p className="mt-4 flex gap-4">
          <Link href="/projects" className="underline underline-offset-4">
            Explore Projects
          </Link>
          <Link href="/canvas" className="underline underline-offset-4">
            Enter Canvas
          </Link>
        </p>
      </section>

      <section aria-labelledby="featured" className="mt-12">
        <h2 id="featured">Featured Projects</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section aria-labelledby="competencies" className="mt-12">
        <h2 id="competencies">Technical Competencies</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {skills.map((g) => (
            <li
              key={g.category}
              className="rounded-lg border border-[var(--jbe-bark)]/30 p-4"
            >
              <h3 className="font-semibold">{g.category}</h3>
              <ul className="mt-2 space-y-1 text-sm">
                {g.skills.map((s) => (
                  <li key={s.name}>
                    <strong>{s.name}</strong> — {s.detail}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="contact-cta" className="mt-12">
        <h2 id="contact-cta">Contact</h2>
        <p>
          Open to collaboration and development work.{" "}
          <Link href="/contact" className="underline underline-offset-4">
            Get in touch
          </Link>
          .
        </p>
      </section>
    </>
  );
}
