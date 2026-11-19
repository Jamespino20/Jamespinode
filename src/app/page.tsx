import Link from "next/link";
import Image from "next/image";
import { getAllProjects, getAllTechnologies } from "@/lib/content";
import { getAllSkills } from "@/content/skills/skills-data";
import { ProjectCard } from "@/components/project-card";
import { Toolbox } from "@/components/toolbox";

export default function Home() {
  const projects = getAllProjects();
  const featured = projects.filter((p) => p.featured);
  const skills = getAllSkills();
  const techs = getAllTechnologies();
  const stats = [
    { value: String(projects.length).padStart(2, "0"), label: "Shipped projects" },
    { value: "01", label: "Hackathon build" },
    { value: "01", label: "Merged OSS contribution" },
    { value: "02", label: "Certifications" },
  ];
  return (
    <>
      <section
        aria-labelledby="hero"
        className="rounded-2xl border border-[var(--jbe-bark)]/25 bg-gradient-to-br from-[var(--jbe-olive)]/25 via-[var(--jbe-card)] to-[var(--jbe-clay)]/15 p-8"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">Portfolio — open to collaboration</p>
            <h1 id="hero" className="mt-2">
              James Bryant Espino
            </h1>
            <p className="mt-1 text-lg text-[var(--jbe-moss)]">
              Developer. Systems thinker. Writer.
            </p>
          </div>
          <Image
            src="/images/jamespino_pic.png"
            alt="Portrait of James Bryant Espino"
            width={512}
            height={512}
            priority
            className="aspect-square w-36 shrink-0 rounded-2xl border border-[var(--jbe-bark)]/40 object-cover shadow-sm sm:w-44"
          />
        </div>
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
        <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-[var(--jbe-bark)]/30 bg-[var(--jbe-card)]/70 px-4 py-3"
            >
              <dt className="order-2 mt-1 text-xs opacity-80">{s.label}</dt>
              <dd className="order-1 text-2xl font-bold text-[var(--jbe-moss)]">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="featured" className="mt-12">
        <p className="eyebrow">Selected work</p>
        <h2 id="featured">Featured Projects</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {projects
            .filter((p) => p.featured)
            .map((p) => (
              <ProjectCard
                key={p.slug}
                project={p}
                index={projects.indexOf(p)}
              />
            ))}
        </div>
      </section>

      <section aria-labelledby="toolbox" className="mt-12">
        <p className="eyebrow">Toolbox</p>
        <h2 id="toolbox">Tools I build with</h2>
        <Toolbox techs={techs} />
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
