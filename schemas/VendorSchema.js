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
});

module.exports = vendorSchema;
