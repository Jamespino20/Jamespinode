import { test, expect } from "@playwright/test";

const SHOTS = [
  { name: "home", path: "/", scheme: "dark" },
  { name: "home-light", path: "/", scheme: "light" },
  { name: "projects-dark", path: "/projects", scheme: "dark" },
] as const;

for (const { name, path, scheme } of SHOTS) {
  test(`visual: ${name}`, async ({ page }) => {
    await page.emulateMedia({ colorScheme: scheme });
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await page.screenshot({
      path: `test-results/${name}.png`,
      fullPage: true,
    });
  });
}
