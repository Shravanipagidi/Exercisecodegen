import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.locator('#nav-global-location-popover-link').click();
  await page.getByLabel('or enter an Indian pincode').click();
  await page.getByLabel('or enter an Indian pincode').fill('500039');
  await page.getByLabel('Apply').click();
  await page.getByLabel('navigation').getByLabel('Choose a language for').click();
  await page.locator('#nav-cover').click();
  await page.locator('label').filter({ hasText: 'తెలుగు - TE - అనువాదం' }).locator('i').click();
  await page.getByLabel('మార్పులను సేవ్ చేయి').click();
});