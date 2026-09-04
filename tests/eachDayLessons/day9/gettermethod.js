class Product {
    constructor(productName) {
        this.productName = productName;
    }
    getProductName() {
        return this.productName;
    }
}

const product = new Product("Laptop");
console.log(product.getProductName());