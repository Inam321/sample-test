import { test, expect } from '@playwright/test';

test('DISP', async ({ page }) => {
  await page.goto('https://sec-dev.intechww.com/');
    await page.getByLabel('Badge ID').fill('adminqa');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('123');
  await page.getByLabel('Password').press('Enter');
  await page.getByRole('button', { name: 'Dispatcher Logger' }).click();
  await page.getByRole('button', { name: 'New', exact: true }).click();
  await page.locator('#desk_id').nth(1).click();
  await page.getByRole('option', { name: 'SOA Supervisor' }).click();
  await page.locator('#log_category_id').nth(0).click();
  await page.getByRole('option', { name: 'General' }).click();
  await page.locator('#log_type_id').nth(1).click();
  await page.getByRole('option', { name: 'Leaving' }).click();
  await page.getByRole('button', { name: 'Select Facility Short Name' }).click();
  await page.getByRole('textbox', { name: 'Facility' }).click();
  await page.getByRole('option', { name: '9019-GT-54' }).locator('span').click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.getByPlaceholder('Enter Subject').click();
  await page.getByPlaceholder('Enter Subject').fill('Dispatcher');
  await page.getByPlaceholder('Enter Details').click();
  await page.getByPlaceholder('Enter Details').fill('TESTING_QA');
  await page.getByPlaceholder('Enter Date & Time').click();
  await page.getByPlaceholder('Enter Date & Time').press('ArrowLeft');
  await page.getByPlaceholder('Enter Date & Time').press('ArrowDown');
  await page.getByPlaceholder('Enter Date & Time').press('Enter');
  await page.getByRole('button', { name: 'Create' }).click();
//update
  await page.getByRole('button', { name: 'Dispatcher Logger' }).click();
  await page.getByRole('row', { name: 'Leaving' }).nth(0).getByTitle('Edit row').click();
  await page.getByPlaceholder('Enter Subject').fill('testing12_QA');
  await page.locator('#desk_id').nth(1).click();
  await page.getByRole('option', { name: 'EOA Supervisor' }).click();
  await page.getByRole('button', { name: 'Update' }).click();  
//Delete
  await page.getByRole('button', { name: 'Dispatcher Logger' }).click();
  await page.getByRole('row', { name: 'Leaving' }).nth(0).getByTitle('Delete row').click();
  await page.getByRole('button', { name: 'Yes' }).click(); 
});
