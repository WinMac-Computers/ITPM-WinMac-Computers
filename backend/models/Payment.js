const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Payment = new Schema({
    itemDetails: {
        type: String,
    },
    qty: {
        type: Number,
    },
    payDate: {
        type: Date,
    },
    cardType: {
        type: String,
    },
    netPrice: {
        type: Number,
    },
});

const newPayment = mongoose.model("payment", Payment); //create database collection

module.exports = newPayment;