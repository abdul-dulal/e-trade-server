const router = require("express").Router();
const mongoose = require("mongoose");
const handleReview = require("../schemas/ReviewSchema");
const Review = mongoose.model("Review", handleReview);

router.post("/review", async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.send("success");
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

router.get("/all-review", async (req, res) => {
  try {
    const allReviews = await Review.find({});
    res.send(allReviews);
  } catch (err) {
    res.json({
      message: err.message,
    });
  }
});

module.exports = router;
