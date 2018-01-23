const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tshirt = new Schema({
  title: String,
  size: [String],
  price: Number,
  image: String
})

module.exports = mongoose.model('Tshirt', Tshirt);