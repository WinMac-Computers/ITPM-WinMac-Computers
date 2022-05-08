const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Dreport = new Schema({

    id: {
        type: String,
    },
    fullname: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    rider: {
        type: String,
    }
});

const newDreport = mongoose.model("dreport", Dreport);

module.exports = newDreport;