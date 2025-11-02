import { Page, expect } from '@playwright/test';

/**
 * SauceDemo sitesinden başarılı logout yapar
 */
export async function logoutfromSauceDemo(
  page: Page, 
 
): Promise<void> {
  
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await expect(page).toHaveURL('/');
  
}