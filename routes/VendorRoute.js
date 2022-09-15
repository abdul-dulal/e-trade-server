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
router.get("/get-user/:email", async (req, res) => {
  try {
    const getUser = await Vendor.findOne({ user: req.params.email });
    res.send(getUser);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/vendorInfo/:id", async (req, res) => {
  try {
    const vendorInfo = await Vendor.findById({ _id: req.params.id });
    res.send(vendorInfo);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.put("/update-follwer/:id", async (req, res) => {
  const data = req.body;

  try {
    const id = req.params.id;
    const result = await Vendor.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          follower: data.follower,
        },
      }
    );
    res.send(result);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.get("/user/:user", async (req, res) => {
  try {
    const getUser = await Vendor.findOne({ user: req.params.user });
    res.send(getUser);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});
router.put("/update-vendorInfo/:user", async (req, res) => {
  const data = req.body;

  try {
    const updateVendor = await Vendor.findOneAndUpdate(
      { email: req.params.user },
      {
        $set: {
          name: data.name,
          img: data.img,
        },
      }
    );
    res.send(updateVendor);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

module.exports = router;
