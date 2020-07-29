let studentdetail = {
    name : "shantanu",
    age : 18,
    address : {
         house : "327 A",
         street : "60 feet road",
         city : "indore"
    },
    mobile : ["9644344725","6263091772"]

};


console.log(studentdetail.address.street , studentdetail.mobile[1]);
console.log(Object.keys(studentdetail));
console.log(Object.values(studentdetail));