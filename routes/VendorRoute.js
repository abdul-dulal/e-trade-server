const router = require("express").Router();
const mongoose = require("mongoose");
const vendorSchema = require("../schemas/VendorSchema");
const { route } = require("./ProductRoute");
const Vendor = mongoose.model("Vendor", vendorSchema);

router.post("/vendor", async (req, res) => {
  try {
    const vendor = new Vendor(req.body);
    await vendor.save();
    res.send("success");
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/vendor", async (req, res) => {
  try {
    const vendorData = await Vendor.find({});
    res.send(vendorData);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

module.exports = router;
