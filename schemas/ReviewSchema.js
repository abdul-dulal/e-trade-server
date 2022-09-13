const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = Schema({
  review: {
    type: String,
    required: true,
  },
  vendorName: {
    type: String,
    required: true,
  },
  reviewName: {
    type: String,
    required: true,
  },
  reviewImg: {
    type: String,
    required: true,
  },
});

module.exports = reviewSchema;
