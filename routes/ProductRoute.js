const router = require("express").Router();
const mongoose = require("mongoose");
const productSchema = require("../schemas/ProductSchema");
const Product = mongoose.model("Product", productSchema);

router.post("/product", async (req, res) => {
  const product = new Product(req.body);
  try {
    await product.save();

    res.send("succcess");
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/get-Bycategory", async (req, res) => {
  try {
    const category = req.query.category;
    const product = await Product.find({ category });
    res.send(product);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/get-featured", async (req, res) => {
  try {
    const highlights = req.query.highlights;
    const featuredProduct = await Product.find({ highlights });
    res.send(featuredProduct);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});
router.get("/get-vendor", async (req, res) => {
  try {
    const vendor = await Product.find({});
    res.send(vendor);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/reviews", async (req, res) => {
  try {
    const reviews = await Product.find({});
    res.send(reviews);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/baldata/:user", async (req, res) => {
  const user = req.params.user;
  console.log(user);
  try {
    const bal = await Product.find({ user });
    res.send(bal);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

module.exports = router;
