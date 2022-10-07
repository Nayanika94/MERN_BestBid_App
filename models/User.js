
//-----------------Import---------------
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//---------------Define Schema-----------

const userSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  photo: {
    type: String,
  },
});


//------------Export---------------

module.exports = mongoose.model("User", userSchema);