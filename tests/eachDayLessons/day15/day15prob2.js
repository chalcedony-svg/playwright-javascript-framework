const inventory = [
    {name: "Backpack", price: 29.99},
    {name: "BikeLight", price:9.99},
    {name: "Jacket", price:49.99}
];


const namelist = inventory.filter(rate => rate.price > 20);
namelist.forEach(print => {
    console.log(print.name);
})