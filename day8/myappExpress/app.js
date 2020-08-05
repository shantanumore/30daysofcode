const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// import Express from "express";

// const app = Express();
// const port =3000;

// //  get,put,post,delete

// app.get("/",(req,res)=>{
//     req.send("Hello world");
// })

// app.listen(port , ()=> console.log("listening to ",port));


