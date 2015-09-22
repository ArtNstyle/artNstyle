var mongoose = require('mongoose');

artistSchema = new mongoose.Schema({
  name: {type: String, required: true},
  medium: {type: String},
  bio: {type: String},
<<<<<<< HEAD
  image: {type: String}
=======
  image: {type: String},
  orderInList: {type: String}
>>>>>>> 2506e1d5124547d7280585ca61aeec577bbf763c
})

module.exports = mongoose.model('artist', artistSchema)