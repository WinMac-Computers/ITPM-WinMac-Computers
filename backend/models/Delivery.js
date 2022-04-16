const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const delivery = new Schema({

  
    name: { 
        type: String},

    phone: { 
        type: String},

    email: { 
        type: String},

    nic: { 
        type: String},
    
});

const NewRider = mongoose.model("rider", delivery);
module.exports = NewRider;