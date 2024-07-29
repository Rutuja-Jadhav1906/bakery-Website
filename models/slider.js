const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sliderSchema = new Schema({
    image:String
});

const Slider = mongoose.model("Slider",sliderSchema);

module.exports = Slider;