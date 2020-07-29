// let total=0;

// numArray = [1,2,3,4,5]

// for (let i = 0; i< numArray.length ; i++){
    
//     console.log(numArray[i]);
//     total+= numArray[i];
    
// }

// console.log(total);


const cartItems = [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1}
];
total = 0;
for (let i= 0; i< cartItems.length; i++) {
    
    total += cartItems[i].price * cartItems[i].quantity;
}

// total = total * 1.08;
total *= 1.08;

console.log(total);