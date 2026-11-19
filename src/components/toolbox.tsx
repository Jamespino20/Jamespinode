"use client";

import { useState } from "react";
import { techIconUrl } from "@/lib/tech-icons";

function TechPill({ tech }: { tech: string }) {
  const [iconOk, setIconOk] = useState(true);
  const url = techIconUrl(tech);
  return (
    <li className="flex items-center gap-1.5 rounded-full border border-[var(--jbe-bark)]/40 bg-[var(--jbe-card)] px-3 py-1 text-xs shadow-sm">
      {url && iconOk && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={url}
          alt=""
          aria-hidden
          width={14}
          height={14}
          loading="lazy"
          onError={() => setIconOk(false)}
        />
      )}
      {tech}
    </li>
  );
}

export function Toolbox({ techs }: { techs: string[] }) {
  return (
    <ul aria-label="Tools" className="mt-4 flex flex-wrap gap-2">
      {techs.map((t) => (
        <TechPill key={t} tech={t} />
      ))}
    </ul>
  );
}
