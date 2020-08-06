// const person = {
//     name : "shantanu",
//     age : 18
// }

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greet(){
        console.log(`my name is ${this.name} and my age is ${this.age}`);
    }
}

module.exports = Person;