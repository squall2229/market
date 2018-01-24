const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tshirt = new Schema({
  title: String,
  price: Number,
  image: String,
  size: [{ type: String }]
})

module.exports = mongoose.model('Tshirt', Tshirt);