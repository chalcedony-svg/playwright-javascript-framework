async function getProduct() {
    return "Laptop";
}

async function display() {
    const product = await getProduct();
    console.log(product);
}

display();