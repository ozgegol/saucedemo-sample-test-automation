import { test, expect } from '@playwright/test';
import { loginToSauceDemo } from './utils/loginHelper';
import { logoutfromSauceDemo } from './utils/logoutHelper';
test('test', async ({ page }) => {
  await loginToSauceDemo(page);
  await expect(page).toHaveURL('/inventory.html')
  await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
  await page.locator('[data-test="item-4-title-link"]').click();
  const productName1 = await page.locator('[data-test="inventory-item-name"]').first().innerText();
  console.log(productName1); // örnek çıktı: Sauce Labs Backpack
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="back-to-products"]').click();

  await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible();
  await page.locator('[data-test="item-0-title-link"]').click();
  const productName2 = await page.locator('[data-test="inventory-item-name"]').first().innerText();
  console.log(productName2); // örnek çıktı: Sauce Labs Backpack
  await page.locator('[data-test="add-to-cart"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2');

  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2');
 
  const productNames = await page.locator('[data-test="inventory-item-name"]').allInnerTexts();
  console.log(productNames);

  expect(productNames).toContain(productName1);
  expect(productNames).toContain(productName2);

  await page.locator('[data-test="checkout"]').click();
  await expect(page).toHaveURL('/checkout-step-one.html')

  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('ozge');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('gol');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('16000');
  await page.locator('[data-test="continue"]').click();

  await expect(page).toHaveURL('/checkout-step-two.html')
  await page.locator('[data-test="finish"]').click();

  await expect(page).toHaveURL('/checkout-complete.html')
  await expect(page.locator('[data-test="complete-header"]')).toBeVisible();

  await logoutfromSauceDemo(page);

  await page.goto('/inventory.html');
  await expect(page).toHaveURL('/');
});