

let student = {

    name : "shantanu",
    age : 18,
    class : "BDA",
    address : {
        home : "327 A",
        city : "indore"
    },
    mobile :{
        main: 9644344712,
        work : 8678456723
    }

}

const { name , age , address : {home , city} , mobile : {main, work}} = student;

console.log(`${name} lives in ${city} his age is ${age} and mobile : ${main}`);