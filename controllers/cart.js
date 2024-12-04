const Cart = require("../models/cart.js");

module.exports.showCart = async (req, res) => {
  // console.log(req.user._id.toString());
  try {
    const userId = req.user._id.toString();
    console.log(userId);
    const allOrders = await Cart.find({ userId: userId });
    res.render("./cart/cartList.ejs", { allOrders });
  } catch (err) {
    req.flash("error", "Cart is Empty,Please Log-in");
    res.redirect("/");
  }
};

module.exports.deleteItem = async (req, res) => {
  let { id } = req.params;
  // res.send(`id is:${id}`)
  const removedOrder = await Cart.findByIdAndDelete(id);
  // res.send("Removed Successfully");
  res.redirect("/cart");
  console.log(removedOrder);
};

module.exports.updateCart = (req, res) => {
  const itemId = parseInt(req.params.itemId);
  const { quantity } = req.body;

  // Update the quantity of the item in the cart
  allOrders = allOrders.map((item) => {
    if (item.id === itemId) {
      item.quantity = quantity;
    }
    return item;
  });

  // Recalculate prices or any other necessary operations

  res.json(allOrders); // Sending back updated cart data
};
