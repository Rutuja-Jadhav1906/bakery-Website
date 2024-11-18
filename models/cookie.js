const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cookieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
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

const Cookie = mongoose.model("Cookie", cookieSchema);

module.exports = Cookie;
