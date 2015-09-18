var mongoose = require('mongoose');

artistSchema = new mongoose.Schema({
  name: {type: String, required: true},
  medium: {type: String},
  bio: {type: String},
  image: {type: String}
})

module.exports = mongoose.model('artist', artistSchema)