const ICON_BASE =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

/** Tech name → devicon path. Missing entries render as text-only pills. */
const TECH_ICONS: Record<string, string> = {
  TypeScript: "typescript/typescript-original.svg",
  "Node.js": "nodejs/nodejs-original.svg",
  "Next.js": "nextjs/nextjs-original.svg",
  Prisma: "prisma/prisma-original.svg",
  PostgreSQL: "postgresql/postgresql-original.svg",
  "Tailwind CSS": "tailwindcss/tailwindcss-original.svg",
  Python: "python/python-original.svg",
  SQLite: "sqlite/sqlite-original.svg",
};

export function techIconUrl(tech: string): string | null {
  const path = TECH_ICONS[tech];
  return path ? `${ICON_BASE}/${path}` : null;
}
