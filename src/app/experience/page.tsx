import Link from "next/link";
import { getAllExperience } from "@/content/experience/experience-data";

export default function ExperiencePage() {
  const items = getAllExperience();
  return (
    <>
      <h1>Experience</h1>
      <ol className="mt-6 space-y-6">
        {items.map((e) => (
          <li
            key={e.id}
            className="border-l-2 border-[var(--jbe-olive)] pl-4"
          >
            <h2 className="font-semibold">{e.title}</h2>
            <p className="text-sm opacity-80">
              {e.organization} · {e.period}
            </p>
            <p className="mt-1 max-w-2xl text-sm">{e.summary}</p>
            <p className="mt-1 text-xs opacity-80">{e.skills.join(" · ")}</p>
            {e.relatedProjects?.map((slug) => (
              <Link
                key={slug}
                href={`/projects/${slug}`}
                className="mt-1 inline-block text-xs underline underline-offset-4"
              >
                Related project: {slug} →
              </Link>
            ))}
          </li>
        ))}
      </ol>
    </>
  );
}
