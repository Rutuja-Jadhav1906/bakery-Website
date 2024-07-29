const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:String,
    quantity:{
        type:Number,
        default:1
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
});

const Cart = mongoose.model("Cart",cartSchema);

module.exports = Cart;