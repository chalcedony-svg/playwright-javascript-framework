const {test,expect} = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const CheckoutCompletePage = require('../pages/CheckoutCompletePage');

test('Valid Login',async ({page}) => {
    //Login to Swag Labs Portal
    const loginPage = new LoginPage(page);
    await loginPage.loginSauceDemo();
    await loginPage.verifyLogin();
    console.log("Logged into Swag Labs portal");
});

test('Add products to cart', async({page}) => {
    //Login to Swag Labs Portal
    const loginPage = new LoginPage(page);
    await loginPage.loginSauceDemo();
    await loginPage.verifyLogin();
    console.log("Logged into Swag Labs portal");
    //Add products to Cart
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addBackpack();
    await inventoryPage.addJacket();
    await inventoryPage.addTshirt();
    await inventoryPage.verifyIfAdded('3');
    console.log("Added to cart successfully");
});

test('Verify Cart and Remove Product',async({page}) => {
    //Login to Swag Labs Portal
    const loginPage = new LoginPage(page);
    await loginPage.loginSauceDemo();
    await loginPage.verifyLogin();
    console.log("Logged into Swag Labs portal");

    //Add products to Cart
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addBackpack();
    await inventoryPage.addJacket();
    await inventoryPage.addTshirt();
    await inventoryPage.verifyIfAdded('3');
    console.log("Added to cart successfully");

    //Remove a product from Cart
    const cartPage = new CartPage(page);
    await cartPage.clickOnCartIcon();
    await cartPage.verifyCartPage();
    await cartPage.removeProduct('Backpack');
});

test('Add products to cart and Checkout', async({page}) => {
    //Login to Swag Labs Portal
    const loginPage = new LoginPage(page);
    await loginPage.loginSauceDemo();
    await loginPage.verifyLogin();
    console.log("Logged into Swag Labs portal");

    //Add products to Cart
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.addBackpack();
    await inventoryPage.addJacket();
    await inventoryPage.addTshirt();
    await inventoryPage.verifyIfAdded('3');
    console.log("Added to cart successfully");

    //verify Cartpage and checkout products
    const cartPage = new CartPage(page);
    await cartPage.clickOnCartIcon();
    await cartPage.verifyCartPage();
    const checkoutPage = new CheckoutPage(page);
    const cartProducts = await checkoutPage.getCartProducts();
    await checkoutPage.clickOnCheckout();
    await checkoutPage.verifyCheckoutPage();

    //enter checkoutdetails and verify
    await checkoutPage.enterCheckoutDetails();
    await checkoutPage.clickContinue();
    await checkoutPage.verifyCheckoutPage2();

    //check if same products are there in Cart list and Checkout List
    const checkoutProducts = await checkoutPage.getCheckoutProducts();
    expect(checkoutProducts).toEqual(cartProducts);

    //complete order and verify success message
    await checkoutPage.clickFinish();
    const checkoutCompletePage = new CheckoutCompletePage(page);
    await checkoutCompletePage.verifyOrderCompletion();
    await checkoutCompletePage.clickHomeButton();
    await checkoutCompletePage.verifyInventoryPage();
    console.log("Order placed Successfully")
});