import { Page, expect } from '@playwright/test';

/**
 * SauceDemo sitesine başarılı login yapar
 */
export async function loginToSauceDemo(
  page: Page, 
  username: string = SAUCEDEMO_USERS.STANDARD_USER.username,
  password: string = SAUCEDEMO_USERS.STANDARD_USER.password
): Promise<void> {
  await page.goto('/');
  await expect(page).toHaveURL('/');
  
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill(username);
  
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill(password);
  
  await page.locator('[data-test="login-button"]').click();
  
}

export const SAUCEDEMO_USERS = {
  STANDARD_USER: { username: 'standard_user', password: 'secret_sauce' },
  PROBLEM_USER: { username: 'standard_user', password: 'wrong_password' }
} as const;