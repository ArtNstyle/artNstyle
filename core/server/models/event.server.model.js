var mongoose = require('mongoose')
eventSchema = new mongoose.Schema({
  name: {type: String, required: true},
  image: {type: String},
  date: {type: String},
  time: {type: String},
  location: {type: String},
  description: {type: String},
  linkToEventSite: {type: String},
  orderInList: {type: String}
})

module.exports = mongoose.model('event', eventSchema)