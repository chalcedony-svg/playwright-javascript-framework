const {expect,test} = require('@playwright/test');

class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.checkoutButton = page.locator('#checkout');
        this.firstNameTextbox = page.locator('#first-name');
        this.lastNameTextbox = page.locator('#last-name');
        this.postalCodeTextbox = page.locator('#postal-code');
        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');
    }

    async getCartProducts(){
        return await this.page.locator('.inventory_item_name').allTextContents();
    }

    async clickOnCheckout() {
        await this.checkoutButton.click();
    }

    async verifyCheckoutPage() {
        const checkoutUrl1 = 'https://www.saucedemo.com/checkout-step-one.html';
        await expect(this.page).toHaveURL(checkoutUrl1);
    }

    async enterCheckoutDetails() {
        await this.firstNameTextbox.fill('Chalce');
        await this.lastNameTextbox.fill('Dony');
        await this.postalCodeTextbox.fill('600103');
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async verifyCheckoutPage2() {
        const checkoutUrl2 = 'https://www.saucedemo.com/checkout-step-two.html';
        await expect(this.page).toHaveURL(checkoutUrl2);
    }

    async getCheckoutProducts() {
        return await this.page.locator('.inventory_item_name').allTextContents();
    }

    async clickFinish() {
        await this.finishButton.click();
    }
}

module.exports = CheckoutPage;