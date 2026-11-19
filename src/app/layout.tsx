import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeEffect } from "@/components/theme-effect";

const SITE_NAME = "James Bryant Espino";
const SITE_TAGLINE = "Developer, Systems Thinker, Writer";

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Portfolio of James Bryant Espino: verified projects, experience, and an optional interactive canvas.",
  metadataBase: new URL("https://jamespinode-portfolio.vercel.app"),
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Verified projects, experience, and an optional interactive canvas.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: "Verified projects and experience.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t="system";try{var s=JSON.parse(localStorage.getItem("jbe-theme")||"null");t=(s&&s.state&&s.state.theme)||s.theme||"system";}catch(e){}var d=t==="dark"||(t==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d);}catch(e){}})();`}
        </Script>
        <ThemeEffect />
        <SiteHeader />
        <main className="mx-auto max-w-4xl px-4 py-8">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
