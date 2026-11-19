import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p className="mt-4 max-w-2xl">
        I&apos;m James Bryant Espino, an Information Technology student,
        software developer, and novelist. My work moves between engineering and
        storytelling — database systems and worldbuilding, architecture diagrams
        and character arcs.
      </p>

      <h2 className="mt-8">Professional Background</h2>
      <p className="mt-2 max-w-2xl text-sm">
        Capstone developer on HELM, an inventory and business management
        system. Builder of Saphene, an evidence-backed verification layer for
        AI agent memory. Brand designer for Casa Lahardin, a private rental and
        events venue.
      </p>

      <h2 className="mt-8">Technical Interests</h2>
      <ul className="mt-2 list-disc pl-6 text-sm">
        <li>Software development — TypeScript, Next.js, modular architecture</li>
        <li>Database engineering — modeling, integrity, query design</li>
        <li>System architecture — clear boundaries, maintainable services</li>
        <li>AI and automation — verification, not vibes</li>
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
