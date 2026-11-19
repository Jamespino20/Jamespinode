import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
  { href: "/canvas", label: "Canvas" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-[var(--jbe-bark)]/30">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-4xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-4"
      >
        <Link href="/" className="text-lg font-bold tracking-tight">
          JBE
        </Link>
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="underline-offset-4 hover:underline">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto text-sm">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
