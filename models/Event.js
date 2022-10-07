//--------------Import-------------
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//---------------Define Schema----------
const eventSchema = Schema({
  date: {
    type: String,
    require: true,

  },
  month: {
    type: String,
    require: true,

  },
  eventName: {
    type: String,
    require: true,
  },
  eventDetails: {
    type: String,
    require: true,
  },
});


//----------Export--------------
module.exports = mongoose.model('Event', eventSchema);