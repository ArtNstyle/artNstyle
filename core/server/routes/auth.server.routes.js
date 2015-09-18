var usersCtrl = require('../controllers/auth.server.controller.js');
var passport = require('passport');

module.exports = function (app) {
    app.route('/auth/google/callback')
        .get(passport.authenticate('google', {
            successRedirect: '/loggeduser',
            failure: '/error/'
        }));

    app.route('/auth/google')
        .get(passport.authenticate('google', {
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'
            ]
        }));

    app.route('/loggeduser')
        .get(function (req, res) {
            res.render('loggeduser', {
                user: {
                    name: req.user.displayName,
                    image: req.user._json.image.url
                }
            });
        });

    app.route('/notallowed')
        .get(function (req, res, next) {
            if (!req.user) {
                res.redirect('/auth/google');
            }
            next();
        });
};