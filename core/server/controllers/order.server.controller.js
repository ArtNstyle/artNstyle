var order = require('../models/order.server.model.js');

module.exports = {

  create: function(req, res) {
    var newOrderDocument = new order(req.body);
    newOrderDocument.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  readAll: function(req, res) {
    // console.log('in bookCtrl readAll');
    order.find()
        .exec(function(err, result) {
          if (err) return res.status(500).send(err);
          res.send(result);
        });
  },

  read: function(req, res) {
    order.findOne({_id: req.query.id})
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  remove: function(req, res) {
    order.findByIdAndRemove(req.query.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  update: function(req, res) {
    order.findByIdAndUpdate(
      req.query.id,
      req.body,
      function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
    });
  }

};
