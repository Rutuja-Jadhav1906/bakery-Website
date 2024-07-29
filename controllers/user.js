const User = require("../models/user.js");
const Feedback = require("../models/feedback.js");
const passport = require("passport");

module.exports.signUpForm = (req, res) => {
  res.render("users/signup.ejs");
};

module.exports.signUp = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.flash("success", "Welocome");
    res.redirect("/home");
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }

  // req.login(registeredUser,(err)=>{
  //     if(err){
  //         return next(err);
  //     }
  //     req.flash("success","Welcome");
  //     res.redirect("/home")
  // })
};

module.exports.loginForm = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
  req.flash("success", "Welcome , you are logged in");
  res.redirect("/home");
};

module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.flash("success", "you are logged out");
    res.redirect("/home");
  });
};

module.exports.feedbackForm = (req, res) => {
  res.render("users/feedback.ejs");
};

module.exports.feedback = async (req, res) => {
  let newFeedback = new Feedback(req.body.feedback);
  newFeedback.author = req.user._id;
  await newFeedback.save();
  console.log("New Feedback saved");
  req.flash("success", "feedback saved");
  res.redirect("/home");
};
