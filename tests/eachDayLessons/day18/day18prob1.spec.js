const {test} = require('@playwright/test');

test('LoginPage', async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    const title = await page.title();
        console.log(title);
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button',{name: 'Login'}).click();
    const homepage = await page.locator("//span[text()='Products']").textContent();
    console.log(homepage);
})