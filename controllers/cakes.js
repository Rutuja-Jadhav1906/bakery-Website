const Cake = require("../models/cake.js");
const Review = require("../models/review.js");
const Cart = require("../models/cart.js");

module.exports.index = async (req, res) => {
  // console.log(req.user);
  const allCakes = await Cake.find({});
  res.render("./cakes/cakeList.ejs", { allCakes });
};

module.exports.show = async (req, res) => {
  let { id } = req.params;
  const cake = await Cake.findById(id).populate({
    path: "review",
    populate: { path: "author" },
  });
  const num = await Cart.countDocuments({ name: cake.name });

  console.log(cake.name);
  res.render("./cakes/cakeInfo.ejs", { cake, num });
};

module.exports.addToCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    // console.log(req.user._id.toString());
    // Fetch the product details by its ID
    const product = await Cake.findById(id);
    console.log(quantity);
    if (!product) {
      req.flash("error", "Product not found");
      return res.redirect("/"); // Redirect to homepage or any other page
    }

    // Access the signed-in user's ID from req.user
    const userId = req.user._id.toString(); // Assuming user ID is stored in _id field
    console.log(userId);
    const newCartItem = new Cart({
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity, // Default quantity is 1
      // productId: product._id,
      userId, // Associate the cart item with the user
    });

    // Save the new cart item
    await newCartItem.save();

    req.flash("success", "Item added to cart successfully");
    res.redirect("/"); // Redirect to homepage or any other page
  } catch (err) {
    req.flash("error", err.message);
    res.redirect("/"); // Redirect back to the homepage
  }
};

module.exports.addCakeReviews = async (req, res) => {
  let cake = await Cake.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  // console.log(newReview)
  cake.review.push(newReview);
  await newReview.save();
  await cake.save();

  console.log("new Review saved");
  // res.send("new rewiew saved");

  res.redirect(`/cakes/${cake._id}`);
};

module.exports.deleteCakeReview = async (req, res, next) => {
  try {
    let { id, reviewId } = req.params;
    await Cake.findByIdAndUpdate(id, { $pull: { review: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/cakes/${id}`);
  } catch (e) {
    next();
  }
};
