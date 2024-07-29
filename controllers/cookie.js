const Cookie = require("../models/cookie.js");
const Review = require("../models/review.js");
const Cart = require("../models/cart.js");

module.exports.index = async (req, res) => {
  const allCookies = await Cookie.find({});
  res.render("./cookies/cookieList.ejs", { allCookies });
};

module.exports.show = async (req, res) => {
  let { id } = req.params;
  const cookie = await Cookie.findById(id).populate({
    path: "review",
    populate: { path: "author" },
  });
  const num = await Cart.countDocuments({ name: cookie.name });
  res.render("./cookies/cookieInfo.ejs", { cookie, num });
};

module.exports.addToCart = async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(req.user._id.toString());
    // Fetch the product details by its ID
    const product = await Cookie.findById(id);

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

module.exports.cookieReview = async (req, res) => {
  let cookie = await Cookie.findById(req.params.id);
  let newReview = new Review(req.body.review);
  newReview.author = req.user._id;
  cookie.review.push(newReview);
  await newReview.save();
  await cookie.save();

  console.log("new Review saved");
  // res.send("new rewiew saved");

  res.redirect(`/cookies/${cookie._id}`);
};

module.exports.deleteReview = async (req, res, next) => {
  try {
    let { id, reviewId } = req.params;
    await Cookie.findByIdAndUpdate(id, { $pull: { review: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/cookies/${id}`);
  } catch (e) {
    next();
  }
};
