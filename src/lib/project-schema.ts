import { z } from "zod";

export const ProjectStatusSchema = z.enum([
  "completed",
  "ongoing",
  "experimental",
  "planned",
]);

export const ProjectFrontmatterSchema = z.object({
  title: z.string(),
  summary: z.string(),
  category: z.array(z.string()).default([]),
  technologies: z.array(z.string()).default([]),
  status: ProjectStatusSchema,
  featured: z.boolean().default(false),
  year: z.string().optional(),
  kind: z.string().optional(),
  timeline: z
    .object({ start: z.string().optional(), end: z.string().optional() })
    .optional(),
  role: z.string().optional(),
  links: z
    .object({
      repository: z.string().optional(),
      demo: z.string().optional(),
      documentation: z.string().optional(),
    })
    .default({}),
  highlights: z.array(z.string()).default([]),
  challenges: z.array(z.string()).default([]),
  solutions: z.array(z.string()).default([]),
  lessonsLearned: z.array(z.string()).default([]),
});

export type ProjectFrontmatter = z.infer<typeof ProjectFrontmatterSchema>;

export type Project = ProjectFrontmatter & {
  slug: string;
  description: string;
};
