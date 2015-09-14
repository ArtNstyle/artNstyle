var cart = require('../models/cart');

module.exports = {

  create: function(req, res) {
    var newCartDocument = new cart(req.body);
    newCartDocument.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },


  read: function(req, res) {
    cart.findOne({_id: req.query.id})
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  // remove: function(req, res) {
  //   artist.findByIdAndRemove(req.query.id, function(err, result) {
  //     if (err) return res.status(500).send(err);
  //     res.send(result);
  //   });
  // },

  update: function(req, res) {
    cart.findByIdAndUpdate(
      req.query.id,
      req.body,
      function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
    });
  }

};
