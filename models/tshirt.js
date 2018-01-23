const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tshirt = new Schema({
  title: String,
  size: [String],
  price: Number
});

module.exports = mongoose.model('Tshirt', Tshirt);  // Tshirt => tshirt => tshirts