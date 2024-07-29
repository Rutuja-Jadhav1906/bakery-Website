const Cart = require("../models/cart.js");
const Donut = require("../models/donut.js");
const Review = require("../models/review.js");

module.exports.index = async (req, res) => {
  const allDonuts = await Donut.find({});
  res.render("./donuts/donutList.ejs", { allDonuts });
};

module.exports.show = async (req, res) => {
  let { id } = req.params;
  const donut = await Donut.findById(id).populate({
    path: "review",
    populate: { path: "author" },
  });
  const num = await Cart.countDocuments({ name: donut.name });
  console.log(donut.name);
  res.render("./donuts/donutInfo.ejs", { donut, num });
};

module.exports.addToCart = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(req.user._id.toString());
    // Fetch the product details by its ID
    const product = await Donut.findById(id);

    if (!product) {
      req.flash("error", "Product not found");
      return res.redirect("/home"); // Redirect to homepage or any other page
    }

    // Access the signed-in user's ID from req.user
    const userId = req.user._id.toString(); // Assuming user ID is stored in _id field
    console.log(userId);
    const newCartItem = new Cart({
      name: product.name,
      price: product.price,
      image: product.image,
      // quantity: 1, // Default quantity is 1
      // productId: product._id,
      userId, // Associate the cart item with the user
    });

    // Save the new cart item
    await newCartItem.save();

    req.flash("success", "Item added to cart successfully");
    res.redirect("/home"); // Redirect to homepage or any other page
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/home"); // Redirect back to the homepage
  }
};

module.exports.addReview = async (req, res) => {
  let donut = await Donut.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  donut.review.push(newReview);
  await newReview.save();
  await donut.save();

  console.log("new Review saved");
  // res.send("new rewiew saved");

  res.redirect(`/donuts/${donut._id}`);
};

module.exports.deleteReview = async (req, res, next) => {
  try {
    let { id, reviewId } = req.params;
    await Donut.findByIdAndUpdate(id, { $pull: { review: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/donuts/${id}`);
  } catch (e) {
    next();
  }
};
