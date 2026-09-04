const {test} = require('@playwright/test');

test('Open SauceDemo', async({page}) => {
    await page.goto(
        'https://www.saucedemo.com'
    );
});