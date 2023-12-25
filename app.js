const express=require("express");
const app=express();
const morgon=require("morgan")
const bodyparser=require("body-parser")

const productrouts=require("./routs/product");
const orderrouts=require("./routs/order")

app.use(morgon("dev"));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use("/products", productrouts)
app.use("/order", orderrouts)

app.use((req,resp,next)=>{
     const error=new Error('not found');
     error.status(400);
     next(error);
})

app.use((error,req,resp,next)=>{
    resp.status(error.status||500);
    resp.json({
        error:{
            message:error.message
        }
    })
})


module.exports=app;