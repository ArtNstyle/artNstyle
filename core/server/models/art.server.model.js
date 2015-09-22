var mongoose = require('mongoose');

artSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String},
    artistId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "artist",
        required: true
    },
    orderInList: {type: String}
})

module.exports = mongoose.model('art', artSchema)