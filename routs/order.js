const express=require("express")
const router=express.Router();


router.get("/",(req,resp,next)=>{

    resp.status(200).json({
        mess:"order was created"
    });
});

router.post("/",(req,resp,next)=>{
    const order={
        orderid:req.body.id,
        quantity:req.body.quantity
    }
    resp.status(201).json({
        mess:"handling post request",
        createorder:order

    });
})

router.get("/:orderId",(req,resp,next)=>{
    const id=req.params.productId
   
        resp.status(200).json({
            mess:"orderId sucess",
            orderid:req.params.orderId
        })
})


router.patch("/:orderid",(req,resp,next)=>{
    
    resp.status(200).json({
        mess:"order updates"
    })
})

router.delete("/:orderid",(req,resp,next)=>{
    
    resp.status(200).json({
        mess:"order deleted from orderid deleted"
    })
})

module.exports=router;