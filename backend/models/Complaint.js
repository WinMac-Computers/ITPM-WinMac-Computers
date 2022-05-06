const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Complaint = new Schema({
  fname: {
    type: String,
  },
  lname: {
    type: String
  },
 
  email: {
    type: String,
  },
  selectb: {
    type: String
  },
  comment: {
    type: String
  },
  


});

const newComplaint = mongoose.model("complaint", Complaint); //create database collection

module.exports = newComplaint;