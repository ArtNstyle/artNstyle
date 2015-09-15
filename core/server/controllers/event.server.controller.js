var event = require('../models/event.server.model.js');

module.exports = {

create: function(req, res) {
  var newEventDocument = new event(req.body);
  newEventDocument.save(function(err,result){
    if(err) return res.status(500).send(err);
    res.send(result);
  })
},

readAll: function(req, res) {
    event.find()
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },


  read: function(req, res) {
    console.log(req.body);
    event.findOne({_id: req.query.id})
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  remove: function(req, res) {
    event.findByIdAndRemove(req.query.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  update: function(req, res) {
    console.log('in find')
    event.findByIdAndUpdate(
      req.query.id,
      req.body,
      function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
    });
  }
  
  

};
