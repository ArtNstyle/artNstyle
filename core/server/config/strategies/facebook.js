var config = require('../config'),
    passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    User = require('../../models/user.server.model');

module.exports = function () {
    if (! config.FB_clientID || ! config.FB_clientSecret) {
        console.log("no facebook ids");
        return;
    }


    passport.use(new FacebookStrategy(
        {
            clientID: config.FB_clientID,
            clientSecret: config.FB_clientSecret,
            callbackURL: config.FB_callbackURL,
            passReqToCallback: true
        },
        function (req, accessToken, refreshToken, profile, done) {
            var query = {};

            if (req.user) { // Condition never met. Doesn't work.
                if (req.user.google) {
                    console.log('google');
                    query = { 'google.id': req.user.google.id };
                }
                else if (req.user.twitter) {
                    console.log('twitter');
                    query = { 'twitter.id': req.user.twitter.id };
                }

                User.findOne(query, function (error, user) {
                    if (user) {
                        user.facebook = {};
                        user.facebook.id = profile.id;
                        user.facebook.token = accessToken;

                        user.save();
                        done(null, user);
                    }
                });
            }
            else { // Always this. Can't avoid repetition of users in database
                query = { 'facebook.id': profile.id };

                User.findOne(query, function (error, user) {
                    if (user) {
                        console.log('Facebook user found in database: ', user);
                        done(null, user);
                    }
                    else {
                        console.log('Facebook user not found in database');
                        user = new User;
                        user.displayName = profile.displayName;

                        user.facebook = {};
                        user.facebook.id = profile.id;
                        user.facebook.token = accessToken;

                        user.save();
                        done(null, user);
                    }
                });
            }
        }));
};
