import { test, expect } from '@playwright/test';

test('login example', async ({ page }) => {
  await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Your store. Login");


   //validate email inputbox visible on page
   await expect(page.locator('#email')).toBeVisible();

   //enter email
   await page.fill('#email', 'admin@yourstore.com');

   //enter password 
   await page.fill('#password', 'admin');

// to login
   await page.click('button[type="submit"]')


    // Expect a url "to contain" a substring.
    await expect(page).toHaveURL("https://admin-demo.nopcommerce.com/admin/");

    //Expect a title.
    await expect(page).toHaveTitle("Dashboard / nopCommerce administration");

    //Logout.
    await page.click('a[href="/logout"]');

    //Expect a url.
    await expect(page).toHaveURL("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F");

});