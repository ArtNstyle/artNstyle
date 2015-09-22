var art = require('../models/art.server.model.js');

module.exports = {

    create: function(req, res) {
        var newArtDocument = new art(req.body);
        newArtDocument.save(function(err, result) {
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    },

    readAll: function(req, res) {
        art.find()
            .populate("artistId")
            .exec(function(err, result) {
                if (err) return res.status(500).send(err);
                res.send(result);
            });
    },


    read: function(req, res) {
        //console.log(req.query);
        art.find(req.query)
            .populate("artistId")
            .exec(function(err, result) {
                if (err) return res.status(500).send(err);
                res.json(result);
            });
    },

    remove: function(req, res) {
        art.findByIdAndRemove(req.query.id, function(err, result) {
            if (err) return res.status(500).send(err);
            res.send(result);
        });
    },

    update: function(req, res) {
        art.findByIdAndUpdate(
            req.query.id,
            req.body,
            function(err, result) {
                if (err) return res.status(500).send(err);
                res.send(result);
            });
    },



};
