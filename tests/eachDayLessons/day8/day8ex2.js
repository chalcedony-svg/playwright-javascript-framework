class Cart {
    constructor(count) {
        this.count = count;
    }

    showCart(){
        console.log(this.count);
    }
}

const cart = new Cart(5);
cart.showCart();