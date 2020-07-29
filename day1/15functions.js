// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log(add(10, 6));
// console.log(add(15, 7));
// console.log(add(20,2));

function getUserCredentials(firstName, lastName, email) {
    return `${firstName} ${lastName} | ${email}`
}

const userCredentials = getUserCredentials('Dylan', 'Israel', 'DylansEmail310@gmail.com');

function getPreTaxTotal(cartItems) {
    let total = 0;
    
    for(let cartItem of cartItems) {
        total += cartItem.quantity * cartItem.price;
    }
    
    return total;
}

const cartItems = [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1}
];

const preTaxTotal = getPreTaxTotal(cartItems);

function getTaxedTotal(preTaxTotal) {
    return preTaxTotal *= 1.08;
}

const finalTaxedTotal = getTaxedTotal(preTaxTotal);

console.log(userCredentials)
console.log(preTaxTotal);
console.log(finalTaxedTotal);
