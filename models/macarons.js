const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const macaronSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  flavor: String,
  filling: String,
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

const Macaron = mongoose.model("Macaron", macaronSchema);

module.exports = Macaron;
