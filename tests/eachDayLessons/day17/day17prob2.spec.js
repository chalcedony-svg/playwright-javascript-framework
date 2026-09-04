const {test} = require('@playwright/test');

test.describe('SauceDemo', () => {
    test('OpenLoginPage1',async({page}) => {
        await page.goto('https://www.saucedemo.com/');
        console.log("Test 1 opened");
        const title = await page.title();
        console.log(title);
    })

    test('OpenLoginPage2',async({page}) => {
        await page.goto('https://www.saucedemo.com/');
        console.log("Test 2 opened");
        const title = await page.title();
        console.log(title);
    })

     test('OpenLoginPage3',async({page}) => {
        await page.goto('https://demoqa.com');
        console.log("Test 3 opened");
        const title = await page.title();
        console.log(title);
    })
})