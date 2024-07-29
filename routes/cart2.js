const express = require("express");
const router = express.Router();
const Carts = require("../models/cart2.js");
// const Cart = require("../models/cart");
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

router.post("/add-to-cart",async(req,res)=>{
    try{
        const newCart = new Carts({
            product_id:req.body._id,
            price:req.body.price,
            user_id:req.body.user_id
        })
        await newCart.save();
        res.send("SUCCESS");
        console.log("Added to cart");

    }catch(err){
        res.status(400).send({success:false,msg:err.message})
    }
})

module.exports = router;