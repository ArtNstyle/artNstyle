var mongoose = require('mongoose');

stripeSchema = new mongoose.Schema({
  token: {type: String, required: true},
  subscription: {
  	     type: String,
  		  enum: ['one-time', 
         'subscription']
  }
})

module.exports = mongoose.model('stripe', stripeSchema)

