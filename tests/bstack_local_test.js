const { expect, test } = require('@playwright/test');
const sleep = require('util').promisify(setTimeout)
test('BStack local is working', async ({ page }) => {
  await page.goto('https://www.google.com/');
});
