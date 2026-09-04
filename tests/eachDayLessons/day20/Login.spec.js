const {test,expect} = require('@playwright/test');

test.describe('Login Module',() => {
    test('Valid Login', async ({page}) => {
        //Arrange
        const loginUrl = 'https://www.saucedemo.com';
        await page.goto(loginUrl);

        //Act
        const username = "standard_user";
        const password = "secret_sauce";
        await page.getByPlaceholder('Username').fill(username);
        await page.getByPlaceholder('Password').fill(password);
        await page.getByRole('button',{name:'Login'}).click();

        const title = await page.title();
        console.log("Page Title: " +title);

        //Assert
        const inventoryUrl = "https://www.saucedemo.com/inventory.html";
        await expect(page).toHaveURL(inventoryUrl);
        await expect(page.getByText('Products')).toBeVisible();
    })
})