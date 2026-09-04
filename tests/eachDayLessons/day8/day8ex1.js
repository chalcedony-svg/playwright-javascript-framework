class Product {
    constructor(productName) {
        this.productName = productName;
    }
    showProduct() {
        console.log(this.productName);
    }
}
const product = new Product("Backpack");
product.showProduct();