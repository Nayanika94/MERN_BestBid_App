//--------------Import-------------
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//---------------Define Schema----------
const paymentSchema = Schema({
    pname: {
        type: String,
        require: true,
    },
    cardNo: {
        type: String,
        require: true,
    },
    cvv: {
        type: String,
        require: true,
    },
    expiry: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    paymentAmount: {
        type: String,
        require: true,
    }
});

//---------------Export----------------
module.exports = mongoose.model("Payment", paymentSchema);