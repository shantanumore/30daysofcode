
let students = [
    {name : "shantanu" , age : "18" , class : "CS" , year :"2010"},
    {name : "vivek" , age : "19" , class : "EE" , year :"2009"},
    {name : "radhika" , age : "19" , class : "ME" , year :"2011"},
    {name : "yash" , age : "20" , class : "ME" , year : "2008"},
    {name : "mahim" , age : "21" , class : "CS" , year : "2001"},
    {name : "ritik" , age : "20" , class : "EX" , year : "2019"},
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


// const canDrink = ages.filter(age => age>=18);
// console.log(canDrink);

// const studentClass = students.filter(function(student){
//     if (student.class === 'ME') {
//         return true;
//     }

// })
// console.log(studentClass);

// const studentClass = students.filter(student => student.class === 'ME');
// console.log(studentClass);




//MAP

// const studentAge = students.map(function(student){
//     return student.age;
// }) 

// const studentAge = students.map( student => student.age);

// console.log(studentAge);

// const Sortedyear = students.sort(function(c1,c2){
//     if(c1.year>c2.year){
//         return 1;
//     }
//     else{
//         return -1;
//     }
// });


// const Sortedyear = students.sort((a,b) =>(a.year>b.year ? 1 : -1));
// console.log(Sortedyear);


const ageSum = ages.reduce((total, age) => total+age, 0 );

console.log(ageSum);