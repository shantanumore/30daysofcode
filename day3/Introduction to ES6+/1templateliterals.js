let firstname = "shantanu";
let lastname = "more";

let fullname = `${firstname} ${lastname}`;

console.log(fullname);

// let text = "hello \n" + "world";

let text = `${firstname}
${lastname}`;

document.getElementById("paragraph").innerText = text;
console.log(text);