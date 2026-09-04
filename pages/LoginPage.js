const {expect} = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameTextbox = page.getByPlaceholder('Username');
        this.passwordTextbox = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button',{name:'Login'});
    }

    async login(username,password) {
        //const username ='standard_user';
        //const password ='secret_sauce';
        //await this.page.goto('https://www.saucedemo.com');
        await this.usernameTextbox.fill(username);
        await this.passwordTextbox.fill(password);
        await this.loginButton.click();
    }

    async verifyLogin(){
        const title = await this.page.title();
        console.log("HomePage title: "+title);
        const inventoryUrl = 'https://www.saucedemo.com/inventory.html';
        await expect(this.page).toHaveURL(inventoryUrl);
        await expect(this.page.getByText('Products')).toBeVisible();
    }
}

module.exports = LoginPage;