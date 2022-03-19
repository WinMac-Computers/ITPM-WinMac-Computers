const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Promotion = new Schema({
  productName: String,
  discount: Number,
  season: String,
  dataCreated: Date,
  dataModified: String,
  checkingDate: String,
  resolved: Boolean
});

const newPromotion = mongoose.model("promotion", Promotion);

module.exports = newPromotion;
