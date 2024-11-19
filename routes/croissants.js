const express = require("express");
const router = express.Router();
const Review = require("../models/review.js");
const Cart = require("../models/cart.js");
const { isLoggedIn, isReviewAuthor } = require("../middleware.js");
const Croissant = require("../models/croissants.js");
const croissantController = require("../controllers/croissants.js");

router.get("/", croissantController.index);

router.get("/:id", croissantController.show);

router.get("/:id/addtocart", isLoggedIn, croissantController.addToCart);

// REVIEWS

// REVIEWS

router.post("/:id/reviews", isLoggedIn, croissantController.addReview);

router.delete(
  "/:id/reviews/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  croissantController.deleteReview
);

module.exports = router;
