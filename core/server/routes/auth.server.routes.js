var usersCtrl = require('../controllers/auth.server.controller.js');
var passport = require('passport');

module.exports = function (app) {

    // GOOGLE AUTHENTICATION ROUTES
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


    // TWITTER AUTHENTICATION ROUTES
    app.route('/auth/twitter/callback')
        .get(passport.authenticate('twitter', {
            successRedirect: '/loggeduser',
            failure: '/error/'
        }));

    app.route('/auth/twitter')
        .get(passport.authenticate('twitter'));


    // FACEBOOK AUTHENTICATION ROUTES
    app.route('/auth/facebook')
        .get(passport.authenticate('facebook', {
            scope: ['email']
        }));

    app.route('/auth/facebook/callback')
        .get(passport.authenticate('facebook', {
            successRedirect: '/loggeduser',
            failureRedirect: '/error/'
        }));


    // SUCCESS REDIRECT
    app.route('/loggeduser')
        .get(function (req, res) {
            res.render('loggeduser', {
                user: req.user
            });
            console.log(req.user);
        });


    // CHECKING IF LOGIN
    app.route('/checklogin')
        .get(function (req, res) {
            //added && to restrict everyone but these users
            console.log(req + 'IS THIS WORKING');
            if (req.user  && 
            (req.user.facebook.id === '1059982527348070' || req.user.facebook.id === '1193411814019187' )) {
             res.send(true);   
          }
            else res.send(false);
        });


    // LOGING OUT
    app.route('/logout')
        .get(function (req, res) {
            req.logout();
            res.redirect('/');
        });


    // PROTECTING ROUTES
    app.route('/notallowed')
        .get(function (req, res, next) {
            if (!req.user) {
                res.redirect('/auth/google');
            }
            next();
        });
};