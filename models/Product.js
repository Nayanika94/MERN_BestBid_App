//--------------Import-------------
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//---------------Define Schema----------

const productSchema = Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
  },
  sold: {
    type: String,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

//---------------Export----------------

module.exports = mongoose.model("Product", productSchema);