var artist = require('../models/artist.server.model.js');

module.exports = {

  create: function(req, res) {
    var newArtistDocument = new artist(req.body);
    newArtistDocument.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  readAll: function(req, res) {
    // console.log('in bookCtrl readAll');
    artist.find()
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },


  read: function(req, res) {
    console.log(req.query.lastName);
    artist.findOne({_id: req.query.id})
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  remove: function(req, res) {
    artist.findByIdAndRemove(req.query.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  update: function(req, res) {
    artist.findByIdAndUpdate(
      req.query.id,
      req.body,
      function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
    });
  },
  
  

};
