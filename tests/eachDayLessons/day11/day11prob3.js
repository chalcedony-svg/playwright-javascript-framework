const inventory = [
    { name: "Backpack", price: 29.99 },
    { name: "Bike Light", price: 9.99 },
    { name: "Jacket", price: 49.99 }
];

console.log("The list of products are: ");
inventory.forEach(list => {
    console.log(list);
});
console.log("\n");

console.log("Product names are: ");
inventory.map(i => console.log(i.name));
console.log("\n");

console.log("Products rated above $ 20: ");
const prices = inventory.filter(cost => cost.price > 20);
console.log(prices);