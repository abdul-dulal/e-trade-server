const router = require("express").Router();
const mongoose = require("mongoose");
const userSchema = require("../schemas/UserSchema");
const User = mongoose.model("User", userSchema);

router.post("/post-userInfo", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.send("success");
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.put("/put-userInfo/:user", async (req, res) => {
  const data = req.body;
  try {
    const user = req.params.user;
    const result = await User.findOneAndUpdate(
      { user },
      {
        $set: {
          name: data.name,
          phone: data.phone,
        },
      }
    );
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

module.exports = router;
