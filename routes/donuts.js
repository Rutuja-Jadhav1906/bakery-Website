const express = require("express");
const router = express.Router();
const { isLoggedIn, isReviewAuthor } = require("../middleware.js");
const donutController = require("../controllers/donut.js");

router.get("/", donutController.index);

router.get("/:id", donutController.show);

router.get("/:id/addtocart", isLoggedIn, donutController.addToCart);

// REVIEWS

router.post("/:id/reviews", isLoggedIn, donutController.addReview);

router.delete(
  "/:id/reviews/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  donutController.deleteReview
);

module.exports = router;
