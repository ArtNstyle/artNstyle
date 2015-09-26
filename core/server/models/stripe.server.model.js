var mongoose = require('mongoose');


stripeSchema = new mongoose.Schema({
  email: {type: String, required: true},
  token: {type: String, required: true}
})
 module.exports = mongoose.model('stripe', stripeSchema)

