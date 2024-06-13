function inventoryValue(products) {
    let totalValue = 0;
    for (let i = 0; i < products.length; i++) {
        totalValue += products[i].price * products[i].quantity;
    }
    return totalValue;
}

const products = [
    { name: 'Laptop', price: 1000, quantity: 5 },
    { name: 'Phone', price: 500, quantity: 10 }
];

console.log(inventoryValue(products));