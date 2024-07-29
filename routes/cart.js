const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const Cart = require("../models/cart.js");
router.use(bodyParser.json());
const cartController = require("../controllers/cart.js");

router.get("/", cartController.showCart);

router.delete("/:id", cartController.deleteItem);

router.post("/update-cart/:itemId", cartController.updateCart);

module.exports = router;
