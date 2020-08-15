const express=require('express');
const mysql=require('mysql');
const db=mysql.createConnection({
host:'localhost',
user:'root',
password:'root',
database:'nodeex'
});
db.connect((err)=>{
    if(err)
    throw err;
    console.log("connection established");
});
const app=express();
app.get("/createdb",(req,res)=>{
    let sql="CREATE DATABASE nodeex";
    db.query(sql,(err,result)=>{
if(err) 
throw err;
console.log(result);
res.send("database created");
    })
});
app.get("/createposttable",(req,res)=>{
    let sql="CREATE TABLE POSTS(id int(20) AUTO_INCREMENT,title varchar(50),body varchar(100), PRIMARY KEY(id))";
    db.query(sql,(err,result)=>{
        if(err)
        throw err;
        console.log("table posts created");
        res.send("posts table created");
    })
});
app.get("/insertpost1",(req,res)=>{
    let post={title:'first post',body:'this is the first post'};
    let sql="INSERT INTO posts SET ?";
    let query=db.query(sql,post,(err,result)=>{
        if(err)
        throw err;
        console.log("data inserted into posts");
        res.send("data inserted");
    })
});
app.get("/insertpost2",(req,res)=>{
    let post={title:'second post',body:'this is the second post'};
    let sql="INSERT INTO posts SET ?";
    let query=db.query(sql,post,(err,result)=>{
        if(err)
        throw err;
        console.log("data inserted into posts");
        res.send("data inserted");
    })
});
app.get("/selectposttable",(req,res)=>{
    let sql="SELECT * FROM posts";
    db.query(sql,(err,result)=>{
        if(err)
        throw err;
        console.log(result);
        res.send("data fetched");
    })
});
app.get("/selectsinglepost/:id",(req,res)=>{
    let sql=`SELECT * FROM posts WHERE id=${req.params.id}`;
    db.query(sql,(err,result)=>{
        if(err)
        throw err;
        console.log(result);
        res.send("posts table fetched");
    })
});
app.get("/updateposttable/:id",(req,res)=>{
    let updatedTitle='new title';
    let sql=`UPDATE posts SET title='${updatedTitle}' WHERE id=${req.params.id}`;
    db.query(sql,(err,result)=>{
        if(err)
        throw err;
        console.log(result);
        res.send("data updated");
    })
});
app.get("/deletepost/:id",(req,res)=>{
    let sql=`DELETE FROM posts where id=${req.params.id}`;
    db.query(sql,(err,result)=>{
        if(err)
        throw err;
        console.log(result);
        res.send("post deleted");
    })
});
app.listen(3000,()=>{
    console.log("app listening on port 3000");
});