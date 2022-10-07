//--------------Import-------------
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//---------------Define Schema----------
const faqSchema = Schema({
    question: {
        type: String,
        require: [true, "Please add question of FAQ"]
    },
    answer: {
        type: String,
        require: [true, "Please add answer of the question"]
    },
});


//----------Export--------------
module.exports = mongoose.model('Faq', faqSchema);