const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.js");

router.get("/admin", adminController.dashboard);

router.get("/form", adminController.sentForm);

router.post("/add", adminController.addItem);

// CAKE ROUTES

router.get("/cakelist", adminController.cakeList);

router.get("/cakes/:id/edit", adminController.cakeEdit);

router.delete("/cakes/:id", adminController.deleteCake);

router.put("/cakes/:id", adminController.editCake);

// COOKIE ROUTES

router.get("/cookielist", adminController.cookieList);

router.get("/cookies/:id/edit", adminController.cookieEdit);

router.delete("/cookies/:id", adminController.deleteCookie);

router.put("/cookies/:id", adminController.editCookie);

// CROISSANT ROUTES

router.get("/croissantlist", adminController.croissantList);

router.get("/croissants/:id/edit", adminController.croissantEdit);

router.delete("/croissants/:id", adminController.deleteCroissant);

router.put("/croissants/:id", adminController.editCroissant);

// DONUTS ROUTES

router.get("/donutlist", adminController.donutList);

router.get("/donuts/:id/edit", adminController.donutEdit);

router.delete("/donuts/:id", adminController.deleteDonut);

router.put("/donuts/:id", adminController.editDonut);

// MACARON ROUTES

router.get("/macaronlist", adminController.macaronList);

router.get("/macarons/:id/edit", adminController.macaronEdit);

router.delete("/macarons/:id", adminController.deleteMacaron);

router.put("/macarons/:id", adminController.editMacaron);

// BREAD ROUTES

router.get("/breadlist", adminController.breadList);

router.get("/breads/:id/edit", adminController.breadEdit);

router.delete("/breads/:id", adminController.deleteBread);

router.put("/breads/:id", adminController.editBread);

module.exports = router;
