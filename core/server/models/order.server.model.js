var mongoose = require('mongoose');

orderSchema = new mongoose.Schema({
  item: {type: String},
  price: {type: Number},
  amount: {type: Number},
  total: {type: Number},
  SubTotal: {type: Number},
  tax: {type: Number},
  orderTotal: {type: Number}
  })

module.exports = mongoose.model('order', orderSchema)