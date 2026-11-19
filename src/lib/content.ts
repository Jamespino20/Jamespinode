import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { ProjectFrontmatterSchema } from "./project-schema";
import type { Project } from "./project-schema";

export type { Project };

const PROJECTS_DIR = path.join(process.cwd(), "src", "content", "projects");

function readMdxFile(slug: string): { frontmatter: unknown; content: string } {
  const fullPath = path.join(PROJECTS_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const parsed = matter(raw);
  return { frontmatter: parsed.data, content: parsed.content };
}

export function getAllProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
    .map(getProjectBySlug)
    .filter((p): p is Project => p !== null)
    .sort((a, b) => Number(b.featured) - Number(a.featured));
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const { frontmatter, content } = readMdxFile(slug);
    const data = ProjectFrontmatterSchema.parse(frontmatter);
    return { ...data, slug, description: content.slice(0, 4000) };
  } catch {
    return null;
  }
}

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(PROJECTS_DIR)) return [];
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
