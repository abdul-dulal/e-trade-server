const mongoose = require("mongoose");
const { Schema } = mongoose;

const cartSchema = Schema({
  user: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
  img: {
    type: String,
  },
  tags: {
    type: String,
  },
  vendorName: {
    type: String,
  },
});

module.exports = cartSchema;
