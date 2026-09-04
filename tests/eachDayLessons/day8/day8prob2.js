class Product {
    constructor(productName, productPrice){
        this.productName = productName;
        this.productPrice = productPrice;
    }

    showProduct() {
        console.log("Product: "+this.productName);
        console.log("Price: "+this.productPrice);
    }
}

const product = new Product("Bag", "Rs. 5000");
product.showProduct();