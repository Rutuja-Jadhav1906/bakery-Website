const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const croissantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  filling: String,
  toppings: String,
  quantity: {
    type: Number,
    default: 1,
  },
  image: {
    url: String,
    filename: String,
  },
  review: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

const Croissant = mongoose.model("Croissant", croissantSchema);

module.exports = Croissant;
