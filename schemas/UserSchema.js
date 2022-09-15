const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = Schema({
  zip: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    rerquired: true,
  },
  city: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
});

module.exports = userSchema;
