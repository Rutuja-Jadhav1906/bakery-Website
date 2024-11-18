const Review = require("./models/review.js");

module.exports.isLoggedIn = (req, res, next) => {
  // console.log(req.user);
  if (!req.isAuthenticated()) {
    req.flash("error", "you must be logged in to place order");
    return res.redirect("/login");
  }
  next();
};

module.exports.isAuthor = async (req, res, next) => {
  let { reviewId } = req.params;
  let review = await Review.findById(reviewId);
  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not the author of review");
    res.redirect("/home");
  }
  next();
};

module.exports.adminAuth = async (req, res, next) => {
  const allowedEmails = ["rutujajadhav1906@gmail.com"]; // List of allowed admin emails
  if (req.isAuthenticated() && allowedEmails.includes(req.user.email)) {
    return next();
  } else {
    return res.status(403).send("Access denied. You are not authorized.");
  }
};
