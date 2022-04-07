const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Order = new Schema ({
    orderId: {
        type: String,
    },
    orderDetails: {
        type: String,
    },
    orderedDate: {
        type: Date,
    },
    modifiedDate: {
        type: Date,
    },
    status: {
        type: String,
    },
});

const newOrder = mongoose.model("order", Order)  //create database collection

module.exports = newOrder;