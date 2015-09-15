var mongoose = require('mongoose');

cartSchema = new mongoose.Schema({
  item: {type: String, required: true},
  price: {type: Number, required: true},
  number: {type: Number, required: true},
  total: {type: Number, required: true}
  })

module.exports = mongoose.model('cart', cartSchema)