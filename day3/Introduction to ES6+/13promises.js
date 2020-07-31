//promises 

// const buyFlightTicket = () => {
//     return new Promise((resolve , reject)=>{

//       setTimeout( ()=>{
//           const error = true;

//          if(error){
//              reject("sorry payment was not successfull")
//          }else{
//              resolve("Thanku payment was successfull");
//          }

//       }, 3000)

//     })
// }

// buyFlightTicket()
// .then( (success) => console.log(success))
// .catch( (error) => console.log(error) );

const userData = new Promise((resolve , reject) => {
    const error =false;

    if (error){
        reject('500 level error');
    }else{
        resolve({
            firstname: 'shantanu more',
            age : 18,
            email: 'shantanumore20@gmail.com'
        });
    }
});

userData
   .then((data)=> console.log(data))
   .catch((error) => console.log(error));

   