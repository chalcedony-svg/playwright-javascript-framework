class CheckoutPage {
    enterDetails(firstname,lastname,address,pincode){
        console.log(firstname);
        console.log(lastname);
        console.log(address);
        console.log(pincode);
    }
    finishOrder(){
        console.log("Order is successfully placed");
    }
}
module.exports = CheckoutPage;