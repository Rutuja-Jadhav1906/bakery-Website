const Cake = require("../models/cake.js");
const Bread = require("../models/bread.js");
const Cookie = require("../models/cookie.js");
const Croissant = require("../models/croissants.js");
const Donut = require("../models/donut.js");
const Macaron = require("../models/macarons.js");

module.exports.dashboard = async (req, res) => {
  res.render("admin/dashboard.ejs");
};

module.exports.sentForm = async (req, res) => {
  // res.send("Success");
  res.render("admin/add.ejs");
};

module.exports.addItem = async (req, res) => {
  const {
    type,
    name,
    price,
    slice_count,
    image,
    serving_size_guide,
    dimensions,
    cake_size,
    cake_flavor,
    weight,
    // toppings,
    cake_color,
    piping_color,
    msg_color,
    cake_toppings,
    // filling,
    quantity,

    croissant_toppings,
    croissant_filling,
    donut_toppings,
    donut_flavour,
    donut_filling,
    macaron_flavour,
    macaron_filling,
  } = req.body;

  if (type == "cake") {
    const newCake = new Cake({
      name,
      price,
      serving_size_guide,
      dimensions,
      cake_size,
      cake_flavor,
      weight,
      toppings: cake_toppings,
      cake_color,
      piping_color,
      msg_color,
      image,
    });

    await newCake.save();
  } else if (type == "bread") {
    const newBread = new Bread({ name, price, slice_count, image });
    await newBread.save();
  } else if (type == "cookie") {
    const newCookie = new Cookie({ name, price, image });
    await newCookie.save();
  } else if (type == "croissant") {
    const newCroissant = new Croissant({
      name,
      price,
      filling: croissant_filling,
      toppings: croissant_toppings,
      quantity,
      image,
    });
    await newCroissant.save();
  } else if (type == "donut") {
    const newDonut = new Donut({
      name,
      price,
      topping: donut_toppings,
      filling: donut_filling,
      flavor: donut_flavour,
      image,
    });
    await newDonut.save();
  } else if (type == "macaron") {
    const newMacaron = new Macaron({
      name,
      price,
      flavor: macaron_flavour,
      filling: macaron_filling,
      image,
    });
    await newMacaron.save();
  } else {
    req.flash("error", "Server error");
  }
  console.log("Success");
  req.flash("success", "Item added successfully");
  res.redirect("/admin");
};

// CAKE CONTROLLERS
module.exports.cakeList = async (req, res) => {
  const allCakes = await Cake.find({});
  // console.log(allItems);
  res.render("./admin/cakeList.ejs", { allCakes });
  // res.send("Success");
};

module.exports.cakeEdit = async (req, res) => {
  let { id } = req.params;
  const cake = await Cake.findById(id);
  res.render("./admin/cakeEdit.ejs", { cake });
  // res.send("Success");
};

module.exports.editCake = async (req, res) => {
  let { id } = req.params;
  const updatedData = req.body;
  let cake = await Cake.findByIdAndUpdate(id, updatedData);
  await cake.save();

  req.flash("success", "Edited successfully");
  res.redirect("/cakelist");
};

module.exports.deleteCake = async (req, res) => {
  let { id } = req.params;
  let deletedCake = await Cake.findByIdAndDelete(id);
  console.log(deletedCake);
  req.flash("success", "Deleted successfully");
  res.redirect("/cakelist");
};

// COOKIE CONTROLLERS

module.exports.cookieList = async (req, res) => {
  const allCookies = await Cookie.find({});
  res.render("./admin/cookieList.ejs", { allCookies });
};

module.exports.cookieEdit = async (req, res) => {
  let { id } = req.params;
  const cookie = await Cookie.findById(id);
  res.render("./admin/cookieEdit.ejs", { cookie });
  // res.send("Success");
};

module.exports.editCookie = async (req, res) => {
  let { id } = req.params;
  const updatedData = req.body;
  let cookie = await Cookie.findByIdAndUpdate(id, updatedData);
  await cookie.save();

  req.flash("success", "Edited successfully");
  res.redirect("/cookielist");
};

module.exports.deleteCookie = async (req, res) => {
  let { id } = req.params;
  let deletedCookie = await Cookie.findByIdAndDelete(id);
  console.log(deletedCookie);
  req.flash("success", "Deleted successfully");
  res.redirect("/cookielist");
};

// CROISSANT CONTROLLER

module.exports.croissantList = async (req, res) => {
  const allCroissant = await Croissant.find({});
  res.render("./admin/croissantList.ejs", { allCroissant });
};

module.exports.croissantEdit = async (req, res) => {
  let { id } = req.params;
  const croissant = await Croissant.findById(id);
  res.render("./admin/croissantEdit.ejs", { croissant });
  // res.send("Success");
};

module.exports.editCroissant = async (req, res) => {
  let { id } = req.params;
  const updatedData = req.body;
  let croissant = await Croissant.findByIdAndUpdate(id, updatedData);
  await croissant.save();

  req.flash("success", "Edited successfully");
  res.redirect("/croissantlist");
};

module.exports.deleteCroissant = async (req, res) => {
  let { id } = req.params;
  let deletedCroissant = await Croissant.findByIdAndDelete(id);
  console.log(deletedCroissant);
  req.flash("success", "Deleted successfully");
  res.redirect("/croissantlist");
};

// DONUTS CONTROLLER

module.exports.donutList = async (req, res) => {
  const allDonuts = await Donut.find({});
  res.render("./admin/donutList.ejs", { allDonuts });
};

module.exports.donutEdit = async (req, res) => {
  let { id } = req.params;
  const donut = await Donut.findById(id);
  res.render("./admin/donutEdit.ejs", { donut });
  // res.send("Success");
};

module.exports.editDonut = async (req, res) => {
  let { id } = req.params;
  const updatedData = req.body;
  let donut = await Donut.findByIdAndUpdate(id, updatedData);
  await donut.save();

  req.flash("success", "Edited successfully");
  res.redirect("/donutlist");
};

module.exports.deleteDonut = async (req, res) => {
  let { id } = req.params;
  let deletedDonut = await Donut.findByIdAndDelete(id);
  console.log(deletedDonut);
  req.flash("success", "Deleted successfully");
  res.redirect("/donutlist");
};

// MACARON CONTROLLER

module.exports.macaronList = async (req, res) => {
  const allMacarons = await Macaron.find({});
  res.render("./admin/macaronList.ejs", { allMacarons });
};

module.exports.macaronEdit = async (req, res) => {
  let { id } = req.params;
  const macaron = await Macaron.findById(id);
  res.render("./admin/macaronEdit.ejs", { macaron });
  // res.send("Success");
};

module.exports.editMacaron = async (req, res) => {
  let { id } = req.params;
  const updatedData = req.body;
  let macaron = await Macaron.findByIdAndUpdate(id, updatedData);
  await macaron.save();

  req.flash("success", "Edited successfully");
  res.redirect("/macaronlist");
};

module.exports.deleteMacaron = async (req, res) => {
  let { id } = req.params;
  let deletedMacaron = await Macaron.findByIdAndDelete(id);
  console.log(deletedMacaron);
  req.flash("success", "Deleted successfully");
  res.redirect("/macaronlist");
};

// BREAD CONTROLLER

module.exports.breadList = async (req, res) => {
  const allBreads = await Bread.find({});
  res.render("./admin/breadList.ejs", { allBreads });
};

module.exports.breadEdit = async (req, res) => {
  let { id } = req.params;
  const bread = await Bread.findById(id);
  res.render("./admin/breadEdit.ejs", { bread });
  // res.send("Success");
};

module.exports.editBread = async (req, res) => {
  let { id } = req.params;
  const updatedData = req.body;
  let bread = await Bread.findByIdAndUpdate(id, updatedData);
  await bread.save();

  req.flash("success", "Edited successfully");
  res.redirect("/breadlist");
};

module.exports.deleteBread = async (req, res) => {
  let { id } = req.params;
  let deletedBread = await Bread.findByIdAndDelete(id);
  console.log(deletedBread);
  req.flash("success", "Deleted successfully");
  res.redirect("/breadlist");
};
