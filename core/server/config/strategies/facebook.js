var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy,
    User = require('../../models/user.server.model');

module.exports = function () {
    passport.use(new FacebookStrategy(
        {
            clientID: "1189373614413500",
            clientSecret: "879c35584b90d407f8229e2a48281ea6",
            callbackURL: "http://localhost:5000/auth/facebook/callback",
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
