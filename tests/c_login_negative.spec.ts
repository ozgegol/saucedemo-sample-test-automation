import { test, expect } from '@playwright/test';
import { loginToSauceDemo, SAUCEDEMO_USERS } from './utils/loginHelper';

test('test', async ({ page }) => {
  await loginToSauceDemo(page,SAUCEDEMO_USERS.PROBLEM_USER.username, SAUCEDEMO_USERS.PROBLEM_USER.password); 
  await expect(page.locator('[data-test="error"]')).toBeVisible();
  await expect(page.locator('[data-test="login-button"]')).toBeVisible(); //login olamadığı için login butonu hala visible.
});