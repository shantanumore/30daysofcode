

let Personalfriends = ["shantanu" , "yash" , "ritik" ];

let friends = ["preet" , ...Personalfriends , "aman"];

console.log(friends);


let student = {
    name : "shantanu",
    age : 18,
    city : "indore"
};

let moredetail = {
    ...student,
    class : "BDA",
    year : "3rd"
}

console.log(moredetail);

