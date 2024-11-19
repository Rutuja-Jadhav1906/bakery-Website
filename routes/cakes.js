const express = require("express");
const router = express.Router();
const Cake = require("../models/cake.js");
const Review = require("../models/review.js");
const { isLoggedIn, isReviewAuthor } = require("../middleware.js");
const Cart = require("../models/cart.js");
const cakeController = require("../controllers/cakes.js");

router.get("/", cakeController.index);

router.get("/:id", cakeController.show);

router.post("/:id/addtocart", isLoggedIn, cakeController.addToCart);

// REVIEWS

router.post("/:id/reviews", isLoggedIn, cakeController.addCakeReviews);

router.delete(
  "/:id/reviews/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  cakeController.deleteCakeReview
);

module.exports = router;
