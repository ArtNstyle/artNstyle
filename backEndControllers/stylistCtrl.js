var stylist = require('../models/stylist');

module.exports = {

create: function(req, res) {
  var newStylistDocument = new stylist(req.body);
  newStylistDocument.save(function(err,result){
    if(err) return res.status(500).send(err);
    res.send(result);
  })
},

readAll: function(req, res) {
    // console.log('in bookCtrl readAll');
    stylist.find()
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },


  read: function(req, res) {
    stylist.findOne({_id: req.query.id})
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },


  remove: function(req, res) {
    stylist.findByIdAndRemove(req.query.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  update: function(req, res) {
    stylist.findByIdAndUpdate(
      req.query.id,
      req.body,
      function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
    });
  }
  
  

};
