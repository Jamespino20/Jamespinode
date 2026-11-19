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
