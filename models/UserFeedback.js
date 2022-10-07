
//------------Import--------------
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//-------------Define Schema------------

const feedbackSchema = Schema({
  name: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  feedback: {
    type: String,
  },
});


module.exports = mongoose.model("UserFeedback", feedbackSchema);