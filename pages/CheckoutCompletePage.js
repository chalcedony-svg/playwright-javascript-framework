const {expect,test} = require('@playwright/test');

class CheckoutCompletePage {
    constructor(page) {
        this.page = page;
        this.successMessage = page.getByText ('Thank you for your order!');
        this.backToHomeButton = page.locator('#back-to-products');
    }

    async verifyOrderCompletion() {
        const checkoutCompleteUrl = 'https://www.saucedemo.com/checkout-complete.html';
        await expect(this.page).toHaveURL(checkoutCompleteUrl);
        await expect(this.successMessage).toBeVisible();
    }

    async clickHomeButton() {
        await this.backToHomeButton.click();
    }

    async verifyInventoryPage() {
        const inventoryPageUrl = 'https://www.saucedemo.com/inventory.html'
        await expect(this.page).toHaveURL(inventoryPageUrl);
    }
}

module.exports = CheckoutCompletePage;