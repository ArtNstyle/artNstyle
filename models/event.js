var mongoose = require('mongoose')
eventSchema = new mongoose.Schema({
  title: {type: String, required: true},
  date: {type: String, required: true},
  time: {type: String, required: true},
  location: {type: String},
  description: {type: String}
})

module.exports = mongoose.model('Event', eventSchema)