const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const Cart = require("./models/cart.js");
const cakeRouter = require("./routes/cakes.js");
const userRouter = require("./routes/user.js");
const cookieRouter = require("./routes/cookies.js");
const croissantRouter = require("./routes/croissants.js");
const macaronRouter = require("./routes/macarons.js");
const breadRouter = require("./routes/breads.js");
const donutRouter = require("./routes/donuts.js");
const cartRouter = require("./routes/cart.js");
const { isLoggedIn } = require("./middleware.js");
const Razorpay = require("razorpay");
const RAZORPAY_ID_KEY = "rzp_test_FW207lC8d9Vjrh";
const RAZORPAY_SECRET_KEY = "QhlPMv0PMnMkA3YFlszyImZV";
const razorpayInstance = new Razorpay({
  key_id: RAZORPAY_ID_KEY,
  key_secret: RAZORPAY_SECRET_KEY,
});

const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/bakery");
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const sessionOptions = {
  secret: "mysupersecretcode",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  // console.log(req.user);
  next();
});

// CAKE

app.use("/cakes", cakeRouter);

// CROISSANT

app.use("/croissants", croissantRouter);

// COOKIE

app.use("/cookies", cookieRouter);

// MACARON

app.use("/macarons", macaronRouter);

// BREAD

app.use("/breads", breadRouter);

// DONUTS

app.use("/donuts", donutRouter);

// CART

app.use("/cart", cartRouter);

// USER

app.use("/", userRouter);

// ORDER

app.post("/placeorder", isLoggedIn, async (req, res) => {
  const allOrders = await Cart.find({});
  let { totalPrice } = req.body;
  res.render("./cart/order.ejs", { allOrders, totalPrice });
});

app.post("/pay", (req, res) => {
  let { amount } = req.body;
  // console.log(amount);
  res.render("./cart/pay.ejs", { amount, key: PUBLISHABLE_KEY });
});

app.get("/final", (req, res) => {
  req.flash("success", "Order Paced");
  res.redirect("/home");
});

app.get("/nav", (req, res) => {
  const currUser = req.user;
  res.render("./includes/navbar.ejs", { currUser });
});

app.get("/home", async (req, res) => {
  // console.log(req.user);
  res.render("home.ejs");
});

app.post("/payment", (req, res) => {
  const { name, amount, address, mobile, landmark, city, pin, state, email } =
    req.body;
  console.log(name);
  console.log(amount);
  const options = {
    amount: amount * 100, // Convert amount to paisa
    currency: "INR",
    receipt: "order_rcptid_11",
    // payment_capture: '1'
  };
  razorpayInstance.orders.create(options, (err, order) => {
    if (!err) {
      res.status(200).send({
        success: true,
        msg: "Order Placed",
        order_id: order.id,
        amount: amount,
        key_id: RAZORPAY_ID_KEY,
        contact: mobile,
        name: name,
        email: email,
      });
    } else {
      res.status(400).send({ success: false, msg: "Something went wrong" });
    }
  });
});

app.get("/success", (req, res) => {
  req.flash("success", "Payment successful");
  res.redirect("/home");
});

app.post("/payment/success", (req, res) => {
  // Handle successful payment
  req.flash("success", "Payment successful!");
  res.redirect("/home");
});

app.get("/hello", (req, res) => {
  res.send("HELLO");
});

app.listen(3000, (req, res) => {
  console.log("Listening to port 3000");
});