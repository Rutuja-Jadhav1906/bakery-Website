const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const donutSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    topping:String,
    filling:String,
    flavor:String,
    image:String,
    review:[{
        type:Schema.Types.ObjectId,
        ref:"Review"
    },
    ]
});

const Donut = mongoose.model("Donut",donutSchema);

module.exports = Donut;