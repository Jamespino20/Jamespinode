export type Experience = {
  id: string;
  title: string;
  organization: string;
  period: string;
  summary: string;
  skills: string[];
  relatedProjects?: string[];
};

export const experienceData: Experience[] = [
  {
    id: "capstone-helm",
    title: "Capstone Developer — HELM",
    organization: "Academic Capstone",
    period: "2025 – 2026",
    summary:
      "Inventory and business management system. Architecture, database implementation, and web conversion.",
    skills: ["Next.js", "TypeScript", "Database Design"],
    relatedProjects: ["helm"],
  },
  {
    id: "oss-toolkit",
    title: "Open-Source Contributor — AI Second-Brain Toolkit",
    organization: "github.com/ahronvincegingco",
    period: "2026",
    summary:
      "Security-hardening review and recall verification for a fail-closed memory engine. PR #8 merged upstream.",
    skills: ["Python", "Security Review", "MCP"],
    relatedProjects: ["ai-second-brain-toolkit"],
  },
  {
    id: "slu-web",
    title: "Developer — Salt and Lamp United Website",
    organization: "Salt and Lamp United",
    period: "2026",
    summary:
      "Live organization website: Next.js, Prisma on NeonDB, Tailwind v4, deployed on Vercel.",
    skills: ["Next.js", "Prisma", "PostgreSQL"],
    relatedProjects: ["salt-lamp-united"],
  },
];

export function getAllExperience(): Experience[] {
  return experienceData;
}
