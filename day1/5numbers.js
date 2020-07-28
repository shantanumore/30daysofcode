let number = 7.77;

console.log(number.toFixed(5));
console.log(parseInt(number));

let example1 = parseInt("33 World 22"); //will give you null is it starts with an alphabet
let example2 = parseFloat('44 Dylan 33');
let example3 = 55.3333.toFixed(0);
let example4 = 200.0.toFixed(2);

console.log(example1);  
console.log(example2);
console.log(example3);
console.log(example4);

console.log(typeof example1);  //number
console.log(typeof example2);  //number
console.log(typeof example3); //string
console.log(typeof example4);  //string