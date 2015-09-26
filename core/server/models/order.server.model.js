var mongoose = require('mongoose');

orderSchema = new mongoose.Schema({
  customer: {type: String},
  name: {type: String},
  price: {type: Number},
  amount: {type: Number},
  type: {type: String, enum: ["item", "subscription"]},
  delivered: {type: Boolean, default: false}
  })

module.exports = mongoose.model('order', orderSchema)