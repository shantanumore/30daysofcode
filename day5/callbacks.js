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

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}
 
createPost({title: 'post three', body:'this is post three'}, getPost);

 //callbacks are use when we want to run the code properly with max time interval