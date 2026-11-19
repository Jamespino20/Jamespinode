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
];

export function getAllExperience(): Experience[] {
  return experienceData;
}
