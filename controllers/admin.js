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
  let url = req.file.path;
  let filename = req.file.filename;
  // console.log(url, "....", filename);
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
    //   // filling,
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
    newCake.image = { url, filename };
    await newCake.save();
  } else if (type == "bread") {
    const newBread = new Bread({ name, price, slice_count, image });
    newBread.image = { url, filename };
    await newBread.save();
  } else if (type == "cookie") {
    const newCookie = new Cookie({ name, price, image });
    newCookie.image = { url, filename };
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
    newCroissant.image = { url, filename };
    newCroissant.image = { url, filename };
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
    newDonut.image = { url, filename };
    await newDonut.save();
  } else if (type == "macaron") {
    const newMacaron = new Macaron({
      name,
      price,
      flavor: macaron_flavour,
      filling: macaron_filling,
      image,
    });
    newMacaron.image = { url, filename };
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
  let originalImg = cake.image.url;
  originalImg = originalImg.replace("/upload", "/upload/h_300,w_250");
  res.render("./admin/cakeEdit.ejs", { cake, originalImg });
  // res.send("Success");
};

module.exports.editCake = async (req, res) => {
  let { id } = req.params;
  const updatedData = req.body;
  let cake = await Cake.findByIdAndUpdate(id, updatedData);
  if (typeof req.file != "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    cake.image = { url, filename };
    await cake.save();
  }

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

  let originalImg = cookie.image.url;
  originalImg = originalImg.replace("/upload", "/upload/h_300,w_250");
  res.render("./admin/cookieEdit.ejs", { cookie, originalImg });
  // res.send("Success");
};

module.exports.editCookie = async (req, res) => {
  let { id } = req.params;
  const updatedData = req.body;
  let cookie = await Cookie.findByIdAndUpdate(id, updatedData);
  if (typeof req.file != "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    cookie.image = { url, filename };
    await cookie.save();
  }

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
  let originalImg = croissant.image.url;
  originalImg = originalImg.replace("/upload", "/upload/h_300,w_250");
  res.render("./admin/croissantEdit.ejs", { croissant, originalImg });
  // res.send("Success");
};

module.exports.editCroissant = async (req, res) => {
  let { id } = req.params;
  const updatedData = req.body;
  let croissant = await Croissant.findByIdAndUpdate(id, updatedData);
  if (typeof req.file != "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    croissant.image = { url, filename };
    await croissant.save();
  }

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
  let originalImg = donut.image.url;
  originalImg = originalImg.replace("/upload", "/upload/h_300,w_250");
  res.render("./admin/donutEdit.ejs", { donut, originalImg });
  // res.send("Success");
};

module.exports.editDonut = async (req, res) => {
  let { id } = req.params;
  const updatedData = req.body;
  let donut = await Donut.findByIdAndUpdate(id, updatedData);
  if (typeof req.file != "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    donut.image = { url, filename };
    await donut.save();
  }

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
  let originalImg = macaron.image.url;
  originalImg = originalImg.replace("/upload", "/upload/h_300,w_250");
  res.render("./admin/macaronEdit.ejs", { macaron, originalImg });
  // res.send("Success");
};

module.exports.editMacaron = async (req, res) => {
  let { id } = req.params;
  const updatedData = req.body;
  let macaron = await Macaron.findByIdAndUpdate(id, updatedData);
  if (typeof req.file != "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    macaron.image = { url, filename };
    await macaron.save();
  }

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
  let originalImg = bread.image.url;
  originalImg = originalImg.replace("/upload", "/upload/h_300,w_250");
  res.render("./admin/breadEdit.ejs", { bread, originalImg });
  // res.send("Success");
};

module.exports.editBread = async (req, res) => {
  let { id } = req.params;
  const updatedData = req.body;
  let bread = await Bread.findByIdAndUpdate(id, updatedData);
  if (typeof req.file != "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    bread.image = { url, filename };
    await bread.save();
  }
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
