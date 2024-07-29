const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const Feedback = require("../models/feedback.js");
const passport = require("passport");
const userController = require("../controllers/user.js");

router.get("/signup", userController.signUpForm);

router.post("/signup", userController.signUp);

router.get("/login", userController.loginForm);

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  userController.login
);

router.get("/logout", userController.logout);

router.get("/feedback", userController.feedbackForm);

router.post("/feedback", userController.feedback);

module.exports = router;
