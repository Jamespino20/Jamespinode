import Link from "next/link";
import { getFeaturedProjects } from "@/lib/content";
import { getAllSkills } from "@/content/skills/skills-data";
import { ProjectCard } from "@/components/project-card";

export default function Home() {
  const featured = getFeaturedProjects();
  const skills = getAllSkills();
  return (
    <>
      <section
        aria-labelledby="hero"
        className="rounded-2xl border border-[var(--jbe-bark)]/25 bg-gradient-to-br from-[var(--jbe-olive)]/25 via-[var(--jbe-card)] to-[var(--jbe-clay)]/15 p-8"
      >
        <p className="eyebrow">Portfolio — open to collaboration</p>
        <h1 id="hero" className="mt-2">
          James Bryant Espino
        </h1>
        <p className="mt-1 text-lg text-[var(--jbe-moss)]">
          Developer. Systems thinker. Writer.
        </p>
        <p className="mt-4 max-w-2xl">
          I build systems that solve practical problems, explore the
          engineering behind them, and bring a creative perspective to the way
          technology is designed and experienced.
        </p>
        <p className="mt-6 flex flex-wrap gap-3">
          <Link href="/projects" className="btn-primary">
            Explore Projects
          </Link>
          <Link href="/canvas" className="btn-secondary">
            Enter Canvas
          </Link>
        </p>
      </section>

      <section aria-labelledby="featured" className="mt-12">
        <p className="eyebrow">Selected work</p>
        <h2 id="featured">Featured Projects</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section aria-labelledby="competencies" className="mt-12">
        <p className="eyebrow">Capabilities</p>
        <h2 id="competencies">Technical Competencies</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {skills.map((g) => (
            <li
              key={g.category}
              className="rounded-xl border border-[var(--jbe-bark)]/30 border-t-4 border-t-[var(--jbe-olive)] bg-[var(--jbe-card)] p-4 shadow-sm"
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
