import { test, expect } from "@playwright/test";

test("homepage shows identity and CTAs", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "James Bryant Espino" }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Explore Projects" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Enter Canvas" })).toBeVisible();
});

test("projects index lists seeded projects", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Saphene" })).toBeVisible();
  await expect(page.getByRole("link", { name: /HELM/ })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Salt and Lamp United" }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: /Second-Brain Toolkit/ }),
  ).toBeVisible();
});

test("project detail renders MDX", async ({ page }) => {
  await page.goto("/projects/saphene");
  await expect(
    page.getByRole("heading", { name: "Saphene", exact: true }),
  ).toBeVisible();
  await expect(page.getByText("Claim ledger", { exact: false })).toBeVisible();
  // Frontmatter must be stripped, never rendered
  await expect(page.getByText("lessonsLearned")).not.toBeVisible();
});

test("contact page has direct channels", async ({ page }) => {
  await page.goto("/contact");
  await expect(
    page.getByRole("link", { name: "espino.jamesbryant20@gmail.com" }),
  ).toBeVisible();
});

test("canvas shell opens windows", async ({ page }) => {
  await page.goto("/canvas");
  await page.getByRole("button", { name: "Open Projects" }).click();
  await expect(page.getByRole("button", { name: /close/ }).first()).toBeVisible();
});

test("hero shows portrait and stats", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("img", { name: "Portrait of James Bryant Espino" }),
  ).toBeVisible();
  await expect(page.getByText("Shipped projects")).toBeVisible();
  await expect(page.getByText("Tools I build with")).toBeVisible();
  await expect(page.getByText("TypeScript", { exact: true }).first()).toBeVisible();
});

test("projects browser tabs show counts", async ({ page }) => {
  await page.goto("/projects");
  const tablist = page.getByRole("tablist");
  await expect(tablist.getByRole("tab", { name: /All/ })).toContainText("5");
  await tablist.getByRole("tab", { name: /AI/ }).click();
  await expect(page.getByRole("link", { name: /Saphene/ })).toBeVisible();
});

test("terminal answers easter eggs", async ({ page }) => {
  await page.goto("/canvas");
  const input = page.getByLabel("Terminal command");
  await input.fill("noot");
  await input.press("Enter");
  await expect(page.getByText("Noot noot. The owl approves.")).toBeVisible();
  await input.fill("hire");
  await input.press("Enter");
  await expect(page.getByText(/espino.jamesbryant20/)).toBeVisible();
});
