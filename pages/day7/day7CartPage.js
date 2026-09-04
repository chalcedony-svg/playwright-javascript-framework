class CartPage {
    openCart() {
        console.log("Cart page is opened");
    }
    removeProduct(productName){
        console.log("Removed "+productName+" from Cart");
    }
}
module.exports = CartPage;