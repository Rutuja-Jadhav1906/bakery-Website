const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const breadSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  slice_count: Number,
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

const Bread = mongoose.model("Bread", breadSchema);

module.exports = Bread;
