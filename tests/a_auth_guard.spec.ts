import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/inventory.html');
  await expect(page).toHaveURL('/');
  await expect(page.locator('[data-test="username"]')).toBeVisible();
  await expect(page.locator('[data-test="password"]')).toBeVisible();
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});