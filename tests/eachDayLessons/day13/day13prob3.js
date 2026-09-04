const loginData = {
    username: "standard_user",
    password: "secret_sauce",
    products: [
        "Backpack",
        "Bike Light",
        "Jacket"
    ]
};
console.log("Username: "+loginData.username);
console.log("Purchased items: ");
loginData.products.forEach(item => {
    console.log(item);
})