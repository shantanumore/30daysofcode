
let students = [
    {name : "shantanu" , age : "18" , class : "CS" , year :"2018"},
    {name : "vivek" , age : "19" , class : "EE" , year :"2018"},
    {name : "radhika" , age : "19" , class : "ME" , year :"2018"},
    {name : "yash" , age : "20" , class : "ME" , year : "2018"},
    {name : "mahim" , age : "21" , class : "CS" , year : "2018"},
    {name : "ritik" , age : "20" , class : "EX" , year : "2018"},
]


ages = [18,34,21,45,22,17,16,55,32,12,16,13,28];


// for (let index = 0; index < students.length; index++) {
   
//     console.log(students[index]);
// }

//for each loop:
// students.forEach( function(student){
//     console.log(student);
// })


//filter

// let canDrink = [];

// for (let index = 0; index < ages.length; index++) {
    
//     if (ages[index]>=18) {
//         canDrink.push(ages[index]);
//     }
    
// }


// const canDrink = ages.filter(function(age){
//      if(age>=18){
//          return true;
//      }
// })


const canDrink = ages.filter(age => age>=18);
console.log(canDrink);