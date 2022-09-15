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

router.get("/get-vendorPorudct", async (req, res) => {
  try {
    const user = req.query.user;
    const product = await Product.find({ user });
    res.send(product);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/getProuduct-byUser", async (req, res) => {
  const email = req.query.email;
  console.log(email);
  try {
    const product = await Product.find({ email });
    res.send(product);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.delete("/delete-product/:id", async (req, res) => {
  try {
    const remove = await Product.findByIdAndDelete({ _id: req.params.id });
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/edit-product/:id", async (req, res) => {
  try {
    const result = await Product.findById({ _id: req.params.id });
    res.send(result);
  } catch (err) {
    res.json({
      message: er.message,
    });
  }
});

module.exports = router;
