const inventory = [
   {name:"Backpack", price:29.99},
   {name:"Bike Light", price:9.99},
   {name:"Jacket", price:49.99}
];

const list = inventory.map(item => item.name);
console.log("The names of products in inventory: "+list);
console.log(list);