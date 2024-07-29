const express = require("express");
const router = express.Router();
const flash = require("connect-flash");
const Review = require("../models/review.js");
const { isLoggedIn, isAuthor } = require("../middleware.js");
const Cart = require("../models/cart.js");
const Bread = require("../models/bread.js");
const breadController = require("../controllers/bread.js");

router.get("/", breadController.index);

router.get("/:id", breadController.show);

router.get("/:id/addtocart", isLoggedIn, breadController.addToCart);

// REVIEWS

router.post("/:id/reviews", isLoggedIn, breadController.addReview);

router.delete(
  "/:id/reviews/:reviewId",
  isLoggedIn,
  isAuthor,
  breadController.deleteReview
);

module.exports = router;
