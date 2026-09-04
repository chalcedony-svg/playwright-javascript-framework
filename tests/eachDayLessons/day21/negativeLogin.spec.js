const {test,expect} = require('@playwright/test');

test.describe('Negative Login Tests',() => {
    test('Invalid Username', async({page}) => {
        
        //Login SauceDemo
        const username = 'invalid_user';
        const password = 'secret_sauce';
        await page.goto('https://www.saucedemo.com');
        await page.getByPlaceholder('Username').fill(username);
        await page.getByPlaceholder('Password').fill(password);
        await page.getByRole('button',{name:'Login'}).click();

        //Invalid Verification
        await expect(page.locator('[data-test="error"]')).toContainText('do not match');

        //Close warning message
        const missingError = await page.locator('[data-test="error"]').textContent();
        console.log("Error occured: "+missingError);
        await page.locator('[data-test="error-button"]').click();
    })

    test('Invalid Password', async({page}) => {
        
        //Login SauceDemo
        const username = 'standard_user';
        const password = 'invalid_sauce';
        await page.goto('https://www.saucedemo.com');
        await page.getByPlaceholder('Username').fill(username);
        await page.getByPlaceholder('Password').fill(password);
        await page.getByRole('button',{name:'Login'}).click();

        //Invalid Verification
        await expect(page.locator('[data-test="error"]')).toContainText('do not match');

        //Close warning message
        const missingError = await page.locator('[data-test="error"]').textContent();
        console.log("Error occured: "+missingError);
        await page.locator('[data-test="error-button"]').click();
    })

    test('Missing Username', async({page}) => {
        
        //Login SauceDemo
        const password = "secret_sauce";
        await page.goto('https://www.saucedemo.com');
        await page.getByPlaceholder('Password').fill(password);
        await page.getByRole('button',{name:'Login'}).click();

        //Invalid Verification
        await expect(page.locator('[data-test="error"]')).toContainText('required');

        //Close warning message
        const missingError = await page.locator('[data-test="error"]').textContent();
        console.log("Error occured: "+missingError);
        await page.locator('[data-test="error-button"]').click();
    })

    test('Missing Password', async({page}) => {
        
        //Login SauceDemo
        const username = "standard_user";
        await page.goto('https://www.saucedemo.com');
        await page.getByPlaceholder('Username').fill(username);
        await page.getByRole('button',{name:'Login'}).click();

        //Invalid Verification
        await expect(page.locator('[data-test="error"]')).toContainText('required');
        const missingError = await page.locator('[data-test="error"]').textContent();
        console.log("Error occured: "+missingError);
    })
})