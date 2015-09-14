// here we handle actions for specific routes and verbs

var User = require('mongoose').model('User');


exports.postUser = function (req, res, next) {
    var user = new User(req.body);
    user.save(function (err) {
        if (err) res.send(err);
        else res.json(user);
    });
};


exports.getUsers = function (req, res) {
    var query = {};
    User.find(query, function (err, users) {
        if (err) res.status(500).send(err);
        else res.json(users);
    });
};