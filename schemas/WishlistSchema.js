const mongoose = require("mongoose");
const { Schema } = mongoose;
const WishlistScema = Schema({
  name: {
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
    type: Number,
    required: true,
  },
  category: {
    type: String,
  },

  tags: {
    type: String,
  },
  review: {
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
  user: {
    type: String,
  },
  ratting: {
    type: String,
  },
});

module.exports = WishlistScema;
