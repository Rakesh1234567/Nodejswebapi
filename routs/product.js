const express=require("express")
const router=express.Router();
const fs=require("fs");
const {  } = require("../app");
const { json } = require("body-parser");

class product {
    constructor(id ,name){
        this.id=id,
        this.name=name
    }
}

const product1=new product(101,"pen")
const product2=new product(102,"pencil")
const product3=new product(103,"notebook")
const product4=new product(104,"book")
const product5=new product(105,"compas box")

const product_Array=[product1,product2,product3, product4, product5];


router.get("/",(req,resp,next)=>{

    resp.status(200).json({
       product_Array

    });
});


//add new product
router.post("/",(req,resp,next)=>{
    const temproduct={
        "id":req.body.id, 
        "name":req.body.name
    }
   product_Array.push(temproduct)
    
   const addedproduct=temproduct
    resp.status(201).json({
        temproduct  
    });
})


//get product by there id 
router.get("/:productId",(req,resp,next)=>{
    const id=req.params.productId
     let txt=" "
     let speical=" "
     for(let i=0;i<product_Array.length;i++){
        if(id==product_Array[i].id){
            txt=id,
            speical +=product_Array[i].id+" "+product_Array[i].name
        }
     }
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
    let id=req.params.productId

           const newarray=product_Array.filter((val)=>{return val.id !=id})
            resp.status(200).json({
               newarray
            })
        
     }

    

)



//update product by id
router.patch("/:productId",(req,resp,next)=>{
    const id=req.params.productId
    const body={
        "id":req.body.id,
        "name":req.body.name
    }

    for(let i=0;i<product_Array.length;i++){
        if(id==product_Array[i].id){
             product_Array[i].name=body.name
        }
    }


            resp.status(200).json({
               product_Array
            })
        
    

    resp.status(200).json({
        mess:"text updates",
        
    })
})



module.exports=router;
