import { test, expect } from '@playwright/test';
import { loginToSauceDemo } from './utils/loginHelper';

test('test', async ({ page }) => {
  await loginToSauceDemo(page);
  await expect(page).toHaveURL('/inventory.html')
  await expect(page.locator('[data-test="inventory-item"]').first()).toBeVisible();
  
});