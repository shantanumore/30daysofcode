// console.log("hello world");

// function sayHello(){
//     console.log("hello world");

// }

// const fn = sayHello;
// fn();



// function sayHello(){
//     return function(){
//         console.log("hey!");
//     }
// }

// const fn = sayHello();
// let message = fn();

// const nums = [1,2,3,4];

// const number = nums.map(num => num*2 );
// console.log(number);

let input= "  javascript  ";
let output = "<div>"+ input.trim() + "</div>";


const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;

const toLowerCase = () => str.toLowerCase();

const result  = wrapInDiv(toLowerCase(trim(input)));