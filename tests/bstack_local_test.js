import { test, expect } from '@playwright/test';

test.describe('test',async()=>{

test('Non AD User Login & Logout', async ({ page }) => {
    //Application URL
    await page.goto('https://stg.empowergpt.ai/');
    const hold = ms => new Promise(resolve => setTimeout(resolve, ms))
    await hold(15000)
})



})
