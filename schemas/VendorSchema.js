const mongoose = require("mongoose");
const { Schema } = mongoose;

const vendorSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  status: {
    type: String,
  },
  user: {
    type: String,
  },
  follower: {
    type: Number,
  },
});

module.exports = vendorSchema;
