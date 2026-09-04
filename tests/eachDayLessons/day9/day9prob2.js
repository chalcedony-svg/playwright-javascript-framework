class Product {
    constructor(item) {
        this.item = item;
    }
    getProductName(){
        return "The product is: "+this.item;
    }
}

const product = new Product("LaptopBag");
console.log(product.getProductName());