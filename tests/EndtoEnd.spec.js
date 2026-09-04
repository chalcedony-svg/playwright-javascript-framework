const {test,expect} = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const CheckoutCompletePage = require('../pages/CheckoutCompletePage');
const users = require('../testData/users');
const products = require('../testData/products');

test.beforeEach(async({page}) => {
    await test.step('Login into Swag Labs Portal', async () => {
        await page.goto('https://www.saucedemo.com');
        const loginPage = new LoginPage(page);
        await loginPage.login(
        users.standardUser.username,
        users.standardUser.password);
        await loginPage.verifyLogin();
    });
});

test('Add products to cart and Checkout', async({page},testInfo) => {
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);
    let cartProducts;
    const checkoutCompletePage = new CheckoutCompletePage(page);

    await test.step('Add product to Cart', async() => {
        //Add products to Cart
        await inventoryPage.addProduct(products.backpack);
        await inventoryPage.addProduct(products.jacket);
        await inventoryPage.addProduct(products.tShirt);
        await inventoryPage.verifyIfAdded('3');
    });

    await test.step('Checkout Products', async() => {
        //verify Cartpage and checkout products
        const cartPage = new CartPage(page);
        await cartPage.clickOnCartIcon();
        await cartPage.verifyCartPage();
        cartProducts = await checkoutPage.getCartProducts();
        await checkoutPage.clickOnCheckout();
        await checkoutPage.verifyCheckoutPage();
    });

    await test.step('Enter Delivery Details', async() => {
        //enter checkoutdetails and verify
        await checkoutPage.enterCheckoutDetails();
        await checkoutPage.clickContinue();
        await checkoutPage.verifyCheckoutPage2();
        //check if same products are there in Cart list and Checkout List
        const checkoutProducts = await checkoutPage.getCheckoutProducts();
        expect(checkoutProducts).toEqual(cartProducts);
    });

    await test.step('Complete Order', async() => {
        //complete order and verify success message
        await checkoutPage.clickFinish();
        await checkoutCompletePage.verifyOrderCompletion();
        await checkoutCompletePage.clickHomeButton();
        await checkoutCompletePage.verifyInventoryPage();
        console.log("Order placed Successfully")
    });

    await testInfo.attach('Execution Summary', {
        body:
        'LogIn successful\n' +
        'Products Added\n' +
        'Checkout Complete\n' +
        'Order placed',
        contentType: 'text/plain'
    });
});

test.afterEach(async({page}, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        await page.screenshot({
            path: `screenshots/${testInfo.title}.png`,
            fullPage: true
        })
    }
})