const {test} = require('@playwright/test');
test.describe('Login Module',() => {
    test('Aboutpage', async({page}) => {
        await page.goto('https://saucelabs.com/');

        const title = await page.title();
        console.log("About page Title :");
        console.log(title);
    })
})

