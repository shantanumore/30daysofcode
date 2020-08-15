const express=require('express');
const Joi=require('joi');
const app=express();
app.use(express.json());
app.listen(5000,()=>{
    console.log("app listening on port 5000");
})
app.get("/",(req,res)=>{
    res.send("your page is loaded successfully");
})
const customers=[
    {title:"joshua",id:1},
    {title:"klaus",id:2},
    {title:"rebekah",id:3},
    {title:"elijah",id:4},
    {title:"kol",id:5},
];
app.get("/customers",(req,res)=>{
   res.send(customers);
})
app.get("/customers/:id",(req,res)=>{
  const customer=customers.find(c=>c.id===parseInt(req.params.id));
  if(!customer){
      res.send(status(404));
  }
  else{
      res.send(customer);
  }
   
});
app.post("/customers",(req,res)=>{
    const {error}=validateCustomer(req.body);
    if(error)
    {
        res.status(400).send(error.details[0].message);
    }
        const customer={
            title:req.body.title,
            id:customers.length+1
        }
        customers.push(customer);
        res.send(customers);
});
app.put("/customers/:id",(req,res)=>{
    const customer=customers.find(c=>c.id===parseInt(req.params.id));
       if(!customer)
       {
           res.send(status(404));
       }
       const {error}=validateCustomer(req.body);
       if(error)
       {
           res.send(status(400));
       }
       customer.title=req.body.title;
       res.send(customer);

});

app.delete("/customers/:id",(req,res)=>{
    const customer=customers.find(c=>c.id===parseInt(req.params.id));
       if(!customer)
       {
           res.send(status(404));
       }
       const index=customers.indexOf(customer);
       customers.splice(index,1);
       res.send(customer);
      // customers.id=customers.length-1;
});

function validateCustomer(customer){
const schema={title:Joi.string().min(3).required()};
return Joi.validate(customer,schema);
}
