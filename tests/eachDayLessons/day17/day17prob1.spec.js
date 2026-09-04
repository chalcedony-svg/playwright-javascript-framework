const {test} = require('@playwright/test');

test.describe('SauceDemo', () => {
    test('OpenLoginPage',async({page}) => {
        await page.goto('https://www.saucedemo.com/');
        const title = await page.title();
        console.log(title);
    })
})