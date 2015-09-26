// var mongoose = require('mongoose');

<<<<<<< HEAD
// stripeSchema = new mongoose.Schema({
//   token: {type: String, required: true},
//   subscription: {
//   	     type: String,
//   		  enum: ['one-time', 
//          'subscription']
//   }
// })
=======
stripeSchema = new mongoose.Schema({
  email: {type: String, required: true},
  token: {type: String, required: true}
})
>>>>>>> dbe5e1812730c8f00aae9e01b27768d68fea24d4

// module.exports = mongoose.model('stripe', stripeSchema)

