const { test, expect } = require('@playwright/test');

test.beforeEach(async ({page}) => {
    await page.goto('http://automationpractice.com/index.php')
});

test.describe('Store Test Scenarios', () => {
    
    test('Should make a simple search', async ({ page }) => {
        await page.locator('#search_query_top').fill('Teste');
    });
});