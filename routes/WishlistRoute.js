const router = require("express").Router();
const mongoose = require("mongoose");
const wishlistScema = require("../schemas/WishlistSchema");
const Wishlist = mongoose.model("Wishlist", wishlistScema);

router.post("/post-wishlistItems", async (req, res) => {
  const wishlistItem = req.body;

  try {
    const query = {
      name: wishlistItem.name,
      user: wishlistItem.user,
    };
    const exist = await Wishlist.findOne(query);
    if (exist) {
      return res.send({ success: false, exist });
    } else {
      const item = new Wishlist(req.body);
      await item.save();
      res.send({ success: true, exist });
    }
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/get-wishlist", async (req, res) => {
  try {
    const user = req.query.user;
    const cartItems = await Wishlist.find({ user });
    res.send(cartItems);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.delete("/delete-item/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deleteItem = await Wishlist.findByIdAndDelete({ _id: id });
    res.send(deleteItem);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/wishlist-items/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Wishlist.findOne({ _id: id });

    res.send(item);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

module.exports = router;
