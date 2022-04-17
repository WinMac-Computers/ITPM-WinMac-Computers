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
  phone: {
    type: String
  },
  email: {
    type: String,
  },
  image:{
      type: String
  },
  gender:{
    type: String
  }

});

const newCustomer = mongoose.model("customer", Customer); //create database collection

module.exports = newCustomer;