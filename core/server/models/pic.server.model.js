var mongoose = require('mongoose');

var schema = new mongoose.Schema ({
    img: { data: Buffer, contentType: String, name: String },
    thumbnail: { data: Buffer, contentType: String, name: String}
});

module.exports = mongoose.model('Pic', schema);
