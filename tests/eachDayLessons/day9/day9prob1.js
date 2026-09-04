class CartCheck {
    constructor(count) {
        this.count = count;
    }
    getCount() {
        return this.count;
    }
}

const cartcheck = new CartCheck(5);
//if(cartcheck > 0){
    console.log(cartcheck.getCount());
//}
//else{
//    console.log("Cart is empty");
//}