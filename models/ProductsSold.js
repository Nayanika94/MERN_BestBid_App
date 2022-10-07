//--------------Import-------------
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//---------------Define Schema----------

const productsSoldSchema = Schema({
  productId: {
    type: String,
    require: true,
  },
  userId: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

//---------------Export----------------

module.exports = mongoose.model("ProductSold", productsSoldSchema);