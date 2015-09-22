var tanning = require('../models/tanning.server.model.js');

module.exports = {

create: function(req, res) {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
  var newTanningDocument = new tanning(req.body);
  console.log("###newTanningDocument###", newTanningDocument)
  newTanningDocument.save(function(err,result){
    if(err) return res.status(500).send(err);
    res.send(result);
  })
},

readAll: function(req, res) {
    console.log('in tanning readAll');
    tanning.find()
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },


  read: function(req, res) {
    tanning.findOne({_id: req.query.id})
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },


  remove: function(req, res) {
    tanning.findByIdAndRemove(req.query.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  update: function(req, res) {
    tanning.findByIdAndUpdate(
      req.query.id,
      req.body,
      function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
    });
  }

};
  