const mongoose = require("mongoose");
const { Schema } = mongoose;
const productSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  price2: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  highlights: {
    type: String,
  },
  user: {
    type: String,
  },
  tags: {
    type: String,
  },
  reviews: {
    type: String,
  },
  reviewImg: {
    type: String,
  },
  reviewName: {
    type: String,
  },
  vendorName: {
    type: String,
  },
  author: {
    type: String,
  },
  ratting: {
    type: Number,
  },
  follower: {
    type: Number,
  },
});

module.exports = productSchema;
