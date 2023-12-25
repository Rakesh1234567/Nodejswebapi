const express=require("express")
const router=express.Router();
const fs=require("fs");
const { map } = require("../app");

const product = new Map([
    [500,"bottle"],
    [300,"pen" ],
    [ 200,"notebook"]
  ]);
  
product.set(90,'pencil')

let a='';

//get all product
product.forEach (function(value, key) {
    a +=  value+"," +" "
  })
router.get("/",(req,resp,next)=>{

    resp.status(200).json({
       a

    });
});


//add new product
router.post("/",(req,resp,next)=>{
    const eight={
        "name":req.body.name, 
        "price":req.body.price
    }
     const yara=eight
    product.set(eight)
     const shiru=product.size
    
    resp.status(201).json({
        mess:"handling post request",
        shiru,
        yara
    });
})


//get product by there id 
router.get("/:productId",(req,resp,next)=>{
    const id=req.params.productId
     let txt=""
     let speical=" "
     product.forEach(function(value,key){
        if(id==key){
            txt +=key
            speical+=key+" "+value
        }
     })
    if(id==txt){
        resp.status(200).json({
            speical
        })
    }else{
        resp.status(200).json({
            mess:"somethng went wrong"
        })
    }

})

//delete product by id
router.delete("/:productId",(req,resp,next)=>{
    const id=req.params.productId
     
    product.forEach(function(value, key){
        if(id==key){
            product.delete(key)

            let a='';
            product.forEach (function(value, key) {
                a += key + ' = ' + value 
              })
            let size=product.size;
            resp.status(200).json({
                done:"you deleted",
                size,
                a
            })
        }
     })

     if(id){
        resp.status(200).json({
            done:"you deleted"
        })
    }else{
        resp.status(200).json({
            mess:"somethng went wrong"
        })
    }


})



//update product by id
router.patch("/:productId",(req,resp,next)=>{
    const id=req.params.productId
    const eight={
        "price":req.body.price, 
    }
  const kalu=eight
    product.forEach(function(value,key){
        if(id==key){
            product.set(id,"kalu")
            let a='';
            product.forEach (function(value, key) {
                a += key + ' = ' + value 
              })
            resp.status(200).json({
                done:"you updated",
                a
            })
        }
    })

    resp.status(200).json({
        mess:"text updates",
        
    })
})



module.exports=router;