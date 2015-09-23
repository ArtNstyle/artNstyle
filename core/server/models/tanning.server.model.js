var mongoose = require('mongoose');

tanningSchema = new mongoose.Schema({
  noContractPlan: {type: String, required: false, enum: ['Single', '3', '4']},
  monthlyTanning: {type: String, required: false, enum: ['Minimalist', 'Starry Night', 'Mona Lisa']},
  monthlyMoisturizing: {type: String, required: false, enum: ['Dali#1', "Dali#2"]},
  price: {type: Number, required: true}
})

module.exports = mongoose.model('tanning', tanningSchema);
