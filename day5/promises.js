const posts = [
    {title : 'Post One', body : 'this is post one'},
    {title : 'Post Two', body : 'this is post two'},
];


function getPost(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error =false;

            if(!error){
                 resolve();
            }
            else{
                reject("'Error': something went wrong");
            }
        },2000);
    });
} 
 
// createPost({title:'Post three', body : 'this is post three'})
//   .then(getPost)
//   .catch(err => console.log(err));

//Async / Await

// async function init(){
//     await createPost({title:'Post three', body : 'this is post three'});

//     getPost();
// }

// init();

//Async / await with fetch
async function fetchUser(){
    const res = await  fetch('https://jsonplaceholder.typicode.com/users');
    
    const data =  await res.json();

    console.log(data);
}

fetchUser();

//promise.all

// const promise1 = Promise.resolve('hello World');
// const promise2 =10;
// const promise3 = new Promise ((resolve,reject)=>
// setTimeout(resolve,2000,'Goodbye'));


// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=> res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then(values=> console.log(values));
