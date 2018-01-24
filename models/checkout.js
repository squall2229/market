const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Checkout = new Schema({
  title: String,
  count: Number,
  price: Number
})

module.exports = mongoose.model('Checkout', Checkout);