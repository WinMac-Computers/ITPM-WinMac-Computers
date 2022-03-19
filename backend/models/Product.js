const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  productNumber: {
    type: String,
  },
  productName: {
    type: String
  },
  productCatergory: {
    type: String
  },
  productPrice: {
    type: Number
  },
  qty: {
    type: Number,
  },
  image: {
    type: String
  },
  dateCreated: {
    type: Date
  },
  dateModified: {
    type: String
  },
  status: {
    type: String
  },
  resolved: {
    type: Boolean
  },
});

const newProduct = mongoose.model("product", Product); //create database collection

module.exports = newProduct;
