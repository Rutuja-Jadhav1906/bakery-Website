const express = require("express");
const router = express.Router();
const { isLoggedIn, isAuthor } = require("../middleware.js");
const macaronController = require("../controllers/macaron.js");

router.get("/", macaronController.index);

router.get("/:id", macaronController.show);

router.get("/:id/addtocart", isLoggedIn, macaronController.addToCart);

// REVIEWS

router.post("/:id/reviews", isLoggedIn, macaronController.addReview);

router.delete(
  "/:id/reviews/:reviewId",
  isLoggedIn,
  isAuthor,
  macaronController.deleteReview
);

module.exports = router;
