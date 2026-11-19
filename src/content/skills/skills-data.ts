export type SkillGroup = {
  category: string;
  skills: { name: string; detail: string; relatedProjects?: string[] }[];
};

export const skillsData: SkillGroup[] = [
  {
    category: "Development",
    skills: [
      {
        name: "TypeScript + Next.js",
        detail: "App Router, server/client boundaries, MDX content systems.",
        relatedProjects: ["saphene", "helm"],
      },
      {
        name: "Database Engineering",
        detail: "Modeling, constraints, referential integrity.",
        relatedProjects: ["helm"],
      },
    ],
  },
  {
    category: "AI and Automation",
    skills: [
      {
        name: "Evidence-backed verification",
        detail: "Claim ledgers, verification workflows, traceability.",
        relatedProjects: ["saphene"],
      },
    ],
  },
  {
    category: "Design",
    skills: [
      {
        name: "Brand Identity",
        detail: "Logo, palette, typography, promotional materials.",
        relatedProjects: ["casa-lahardin"],
      },
    ],
  },
];

export function getAllSkills(): SkillGroup[] {
  return skillsData;
}
