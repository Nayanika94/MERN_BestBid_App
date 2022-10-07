//--------------Import-------------
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//---------------Define Schema----------
const teamSchema = Schema({
    name: {
        type: String,
        require: [true, "Please add team member name"]
    },
    description: {
        type: String,
        require: [true, "Please add team member description"]
    },
});


//----------Export--------------
module.exports = mongoose.model('TeamMember', teamSchema);