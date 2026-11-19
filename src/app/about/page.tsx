import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <div className="mt-4 flex flex-col gap-6 sm:flex-row">
        <div className="max-w-2xl">
          <p>
            I&apos;m James Bryant Espino, an Information Technology student,
            software developer, and novelist. My work moves between engineering
            and storytelling — database systems and worldbuilding, architecture
            diagrams and character arcs.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/jamespino_pic.png"
          alt="Portrait of James Bryant Espino"
          className="aspect-square w-40 shrink-0 rounded-2xl border border-[var(--jbe-bark)]/40 object-cover shadow-sm"
        />
      </div>

      <h2 className="mt-8">Professional Background</h2>
      <p className="mt-2 max-w-2xl text-sm">
        Capstone developer on HELM, an inventory and business management
        system. Builder of Saphene, an evidence-backed verification layer for
        AI agent memory. Brand designer for Casa Lahardin, a private rental
        and events venue.
      </p>

      <h2 className="mt-8">Technical Interests</h2>
      <ul className="mt-2 list-disc pl-6 text-sm">
        <li>Software development — TypeScript, Next.js, modular architecture</li>
        <li>Database engineering — modeling, integrity, query design</li>
        <li>System architecture — clear boundaries, maintainable services</li>
        <li>AI and automation — verification, not vibes</li>
      </ul>

      <h2 className="mt-8">Certifications</h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        <li className="overflow-hidden rounded-xl border border-[var(--jbe-bark)]/30 bg-[var(--jbe-card)] shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/certs/databases_cert.png"
            alt="Database certification"
            className="h-auto w-full"
          />
        </li>
        <li className="overflow-hidden rounded-xl border border-[var(--jbe-bark)]/30 bg-[var(--jbe-card)] shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/certs/notion_cert.png"
            alt="Notion certification"
            className="h-auto w-full"
          />
        </li>
      </ul>

      <h2 className="mt-8">Creative Interests</h2>
      <ul className="mt-2 list-disc pl-6 text-sm">
        <li>Creative writing and long-form fiction</li>
        <li>Worldbuilding — politics, religion, language, myth</li>
        <li>Graphic design and visual communication</li>
      </ul>

      <h2 className="mt-8">Development Philosophy</h2>
      <p className="mt-2 max-w-2xl text-sm">
        Readable code over clever code. Evidence over assertion. Systems that
        outlive their demos.
      </p>

      <p className="mt-8">
        <Link href="/projects" className="underline underline-offset-4">
          See the work
        </Link>{" "}
        ·{" "}
        <Link href="/contact" className="underline underline-offset-4">
          Contact
        </Link>
      </p>
    </>
  );
}
