const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Customer = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number
  },
  address: {
    type: String
  },
  phoneNumber: {
    type: Number
  },
  email: {
    type: String,
  },
  password: {
    type: Number
  },
  image:{
      type: String
  },
  gender:{
    type: Boolean
  }

});

const newCustomer = mongoose.model("customer", Customer); //create database collection

module.exports = newCustomer;