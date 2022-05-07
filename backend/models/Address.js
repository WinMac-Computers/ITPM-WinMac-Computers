const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Address = new Schema({

    name: {
        type: String,
    },
    phone: {
        type: String,
    },
    province: {
        type: String,
    },
    city: {
        type: String,
    },
    address: {
        type: String,
    }
});

const newAddress = mongoose.model("address", Address);

module.exports = newAddress;