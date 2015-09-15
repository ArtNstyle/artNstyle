var mongoose = require('mongoose');

artistSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  medium: {type: String},
  bio: {type: String}
  })

module.exports = mongoose.model('artist', artistSchema)