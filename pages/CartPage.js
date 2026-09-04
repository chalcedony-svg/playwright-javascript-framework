const {expect,test} = require('@playwright/test');

class CartPage {
    constructor(page) {
        this.page = page;
        this.cartIcon = page.locator('.shopping_cart_link');
        this.cartBadge = page.locator('.shopping_cart_badge');
        ///this.productItem = page.locator('inventory_item_name');
    }

    async clickOnCartIcon() {
        await this.cartIcon.click();
    }

    async verifyCartPage() {
        const cartUrl = 'https://www.saucedemo.com/cart.html';
        await expect(this.page).toHaveURL(cartUrl);
    }

    async removeProduct(productName) {
        const cartItem = this.page.locator('.cart_item').filter({hasText: productName});
        const productTitle = await cartItem.textContent();
        await cartItem.getByRole('button',{name:'Remove'}).click();
        console.log("Product: "+productTitle+" removed successfully");
    }
}

module.exports = CartPage;