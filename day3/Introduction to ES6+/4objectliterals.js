
// function addressmake( flat , street , city){
    
//     const newAddress = {flat , street, city};

//     console.log(newAddress);

// }

// addressmake('327', '60feetroad' , 'indore');

function addressmaker(address){
    const {city,state} = address;

    let newAddress = {
        city,
        state,
        country : "india"
    };
    
    console.log(`${newAddress.city} , ${newAddress.state} ,${newAddress.country}`);


}

addressmaker({city : 'indore' , state: 'madhya pradesh'});