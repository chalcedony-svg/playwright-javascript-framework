const {expect} = require('@playwright/test');

class InventoryPage {
    constructor(page) {
        this.page = page;
        this.backpackButton = page.locator('#add-to-cart-sauce-labs-backpack');
        this.jacketButton = page.locator('#add-to-cart-sauce-labs-fleece-jacket');
        this.tshirtButton = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
        this.backpackRemoveButton = page.locator('#remove-sauce-labs-backpack');
        this.jacketRemoveButton = page.locator('#remove-sauce-labs-fleece-jacket');
        this.tshirtRemoveButton = page.locator('#remove-sauce-labs-bolt-t-shirt');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async addProduct(productName) {
        await this.page.locator('.inventory_item').filter({hasText: productName})
            .getByRole('button',{ name: 'Add to cart' }).click();
    }

    //async addBackpack() {
        //await this.backpackButton.click();
    //}

    //async addJacket() {
        //await this.jacketButton.click();
    //}

    //async addTshirt() {
        //await this.tshirtButton.click();
    //}
    
    async verifyIfAdded(cartNumber) {
        await expect(this.cartBadge).toHaveText(cartNumber);
    }
}

module.exports = InventoryPage;