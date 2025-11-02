import { test, expect } from '@playwright/test';
import { loginToSauceDemo, SAUCEDEMO_USERS } from './utils/loginHelper';

test('test', async ({ page }) => {
  // Recording...
 await loginToSauceDemo(page);
  await expect(page).toHaveURL('/inventory.html')
  await expect(page.locator('[data-test="inventory-item"]').first()).toBeVisible();
  await page.locator('[data-test="product-sort-container"]').selectOption('az')
  const productNamesArray1 = await page.locator('[data-test="inventory-item-name"]').allTextContents();
  const productNamesArray2 = productNamesArray1.sort();
  expect(productNamesArray1).toEqual(productNamesArray2);
 
  await page.locator('[data-test="product-sort-container"]').selectOption('za')
  const productNamesArray3 = await page.locator('[data-test="inventory-item-name"]').allTextContents();
  const productNamesArray4 = productNamesArray3.sort().reverse();
  expect(productNamesArray3).toEqual(productNamesArray4);

  await page.locator('[data-test="product-sort-container"]').selectOption('lohi');
  const productPricesArray5 = await page.locator('[data-test="inventory-item-price"]').allTextContents();
  const productPricesArray6 = [...productPricesArray5].sort((a, b) => {
    const priceA = parseFloat(a.replace('$', ''));
    const priceB = parseFloat(b.replace('$', ''));
    return priceA - priceB;  
  });
  expect(productPricesArray5).toEqual(productPricesArray6);

  await page.locator('[data-test="product-sort-container"]').selectOption('hilo');
  const productPricesArray7 = await page.locator('[data-test="inventory-item-price"]').allTextContents();
  const productPricesArray8 = [...productPricesArray7].sort((a, b) => {
    const priceA = parseFloat(a.replace('$', ''));
    const priceB = parseFloat(b.replace('$', ''));
    return priceB - priceA;
  });
  
  expect(productPricesArray7).toEqual(productPricesArray8);
 
});