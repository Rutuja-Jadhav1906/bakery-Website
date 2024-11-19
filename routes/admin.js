const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.js");
const { isLoggedIn, adminAuth } = require("../middleware.js");
const multer = require("multer");

const { storage } = require("../cloudconfig.js");

const upload = multer({ storage });

router.get("/admin", adminController.dashboard);

router.get("/form", isLoggedIn, adminController.sentForm);

router.post(
  "/add",
  isLoggedIn,
  upload.single("image"),
  adminController.addItem
);

// CAKE ROUTES

router.get("/cakelist", isLoggedIn, adminController.cakeList);

router.get("/cakes/:id/edit", isLoggedIn, adminController.cakeEdit);

router.delete("/cakes/:id", isLoggedIn, adminController.deleteCake);

router.put(
  "/cakes/:id",
  isLoggedIn,
  upload.single("image"),
  adminController.editCake
);

// COOKIE ROUTES

router.get("/cookielist", isLoggedIn, adminController.cookieList);

router.get("/cookies/:id/edit", isLoggedIn, adminController.cookieEdit);

router.delete("/cookies/:id", isLoggedIn, adminController.deleteCookie);

router.put(
  "/cookies/:id",
  isLoggedIn,
  upload.single("image"),
  adminController.editCookie
);

// CROISSANT ROUTES

router.get("/croissantlist", isLoggedIn, adminController.croissantList);

router.get("/croissants/:id/edit", isLoggedIn, adminController.croissantEdit);

router.delete("/croissants/:id", isLoggedIn, adminController.deleteCroissant);

router.put(
  "/croissants/:id",
  isLoggedIn,
  upload.single("image"),
  adminController.editCroissant
);

// DONUTS ROUTES

router.get("/donutlist", isLoggedIn, adminController.donutList);

router.get("/donuts/:id/edit", isLoggedIn, adminController.donutEdit);

router.delete("/donuts/:id", isLoggedIn, adminController.deleteDonut);

router.put(
  "/donuts/:id",
  isLoggedIn,
  upload.single("image"),
  adminController.editDonut
);

// MACARON ROUTES

router.get("/macaronlist", isLoggedIn, adminController.macaronList);

router.get("/macarons/:id/edit", isLoggedIn, adminController.macaronEdit);

router.delete("/macarons/:id", isLoggedIn, adminController.deleteMacaron);

router.put(
  "/macarons/:id",
  isLoggedIn,
  upload.single("image"),
  adminController.editMacaron
);

// BREAD ROUTES

router.get("/breadlist", isLoggedIn, adminController.breadList);

router.get("/breads/:id/edit", isLoggedIn, adminController.breadEdit);

router.delete("/breads/:id", isLoggedIn, adminController.deleteBread);

router.put(
  "/breads/:id",
  isLoggedIn,
  upload.single("image"),
  adminController.editBread
);

module.exports = router;
