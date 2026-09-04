const {test} = require('@playwright/test');
test.describe('Login Module',() => {
    test('Open SauceDemo', async({page}) => {
        await page.goto('https://www.saucedemo.com/');

        const title = await page.title();
        console.log(title);
        console.log("From Test")
    })
})

