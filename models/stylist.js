var mongoose = require('mongoose');

stylistSchema = new mongoose.Schema ({
  name: {type: String, required: true},
  yearsOfExperience: {type: Number},
  speciality: {type: String},
  bio: {type: String},
  image: {type: String}
})

module.exports = mongoose.model('stylist',stylistSchema)


