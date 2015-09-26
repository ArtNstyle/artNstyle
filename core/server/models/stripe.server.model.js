var mongoose = require('mongoose');

<<<<<<< HEAD

stripeSchema = new mongoose.Schema({
  email: {type: String, required: true},
  token: {type: String, required: true}
})
 module.exports = mongoose.model('stripe', stripeSchema)
=======
stripeSchema = new mongoose.Schema({
  token: {type: String, required: true},
  subscription: {
  	     type: String,
  		  enum: ['one-time', 
         'subscription']
  }
})

module.exports = mongoose.model('stripe', stripeSchema)
>>>>>>> parent of 5ca2df7... stripe now does pay

