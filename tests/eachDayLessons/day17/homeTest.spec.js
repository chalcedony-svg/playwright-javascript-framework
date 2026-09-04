const {test} = require('@playwright/test');

test.describe('Homepage Tests',() => {
    test('Open HomePage',async({page}) => {
        await page.goto('https://www.saucedemo.com/inventory.html');
        const title = await page.title();
        console.log("Home page Title :");
        console.log(title);
    })
})