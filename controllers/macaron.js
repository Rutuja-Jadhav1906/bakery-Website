const Cart = require("../models/cart.js");
const Macaron = require("../models/macarons.js");
const Review = require("../models/review.js");

module.exports.index = async (req, res) => {
  const allMacarons = await Macaron.find({});
  res.render("./macarons/macaronList.ejs", { allMacarons });
};

module.exports.show = async (req, res) => {
  let { id } = req.params;
  const macaron = await Macaron.findById(id).populate({
    path: "review",
    populate: { path: "author" },
  });
  const num = await Cart.countDocuments({ name: macaron.name });
  console.log(macaron.name);
  res.render("./macarons/macaronInfo.ejs", { macaron, num });
};

module.exports.addToCart = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(req.user._id.toString());
    // Fetch the product details by its ID
    const product = await Macaron.findById(id);

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
  let macaron = await Macaron.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  macaron.review.push(newReview);
  await newReview.save();
  await macaron.save();

  console.log("new Review saved");
  // res.send("new rewiew saved");

  res.redirect(`/macarons/${macaron._id}`);
};

module.exports.deleteReview = async (req, res, next) => {
  try {
    let { id, reviewId } = req.params;
    await Macaron.findByIdAndUpdate(id, { $pull: { review: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/macarons/${id}`);
  } catch (e) {
    next();
  }
};
