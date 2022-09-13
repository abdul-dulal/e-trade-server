const router = require("express").Router();
const mongoose = require("mongoose");
const cartSchema = require("../schemas/CartSchema");
const Cart = mongoose.model("Cart", cartSchema);

router.post("/postCart", async (req, res) => {
  try {
    const cart = new Cart(req.body);
    await cart.save();

    res.send("success");
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/get-cartItems", async (req, res) => {
  try {
    const user = req.query.user;
    const cartItems = await Cart.find({ user });
    res.send(cartItems);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.delete("/deleteCart-item/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const item = await Cart.findByIdAndDelete({ _id: id });
    res.send(item);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

module.exports = router;
