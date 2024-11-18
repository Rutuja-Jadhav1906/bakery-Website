const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cakeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  serving_size_guide: String,
  dimensions: String,
  cake_size: String,
  cake_flavor: String,
  weight: Number,
  toppings: String,
  cake_color: String,
  piping_color: String,
  msg_color: String,
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

const Cake = mongoose.model("Cake", cakeSchema);

module.exports = Cake;
