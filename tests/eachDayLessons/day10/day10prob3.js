const prod = [
    {
        name: "SauceLabs Backpack",
        price: 29.99
    },
    {
        name: "SauceLabs BikeLight",
        price: 9.99
    },
    {
        name: "Sauce Labs Fleece Jacket",
        price: 49.99
    },
    {
        name: "Sauce Labs T-Shirt",
        price: 15.99
    } 
];

for(let i=0; i<prod.length;i++){
    if(prod[i].price>20.0 && prod[i].name.includes("Backpack")){
        console.log(prod[i]);
    }
}