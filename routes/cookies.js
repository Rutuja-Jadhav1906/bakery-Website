const express = require("express");
const router = express.Router();
const Cookie = require("../models/cookie.js");
const Review = require("../models/review.js");
const { isLoggedIn, isReviewAuthor } = require("../middleware.js");
const Cart = require("../models/cart.js");
const cookieController = require("../controllers/cookie.js");

router.get("/", cookieController.index);

router.get("/:id", cookieController.show);

router.get("/:id/addtocart", isLoggedIn, cookieController.addToCart);

// REVIEWS

router.post("/:id/reviews", isLoggedIn, cookieController.cookieReview);

router.delete(
  "/:id/reviews/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  cookieController.deleteReview
);
module.exports = router;
