var passport = require('passport'),
    TwitterStrategy = require('passport-twitter').Strategy,
    User = require('../../models/user.server.model');

module.exports = function () {
    passport.use(new TwitterStrategy({
        consumerKey: 'ufQBFSAXpFnrTxtkTRkVtpoWw',
        consumerSecret: 'uPompKDR1BL5OY0N9EtW8jXiLtrD1Pa0fKjK4mWlMltSJVnKXt',
        callbackURL: 'http://artnstylesalon.com/auth/twitter/callback',
        passRecToCallback: true
    },
        function (req, token, tokenSecret, profile, done) {
            var query = {};

            if (req.user) { // Condition never met. Doesn't work.
                if (req.user.google) {
                    console.log('google');
                    query = { 'google.id': req.user.google.id };
                }
                else if (req.user.facebook) {
                    console.log('facebook');
                    query = { 'facebook.id': req.user.facebook.id };
                }

                User.findOne(query, function (error, user) {
                    if (user) {
                        user.twitter = {};
                        user.twitter.id = profile.id;
                        user.twitter.token = token;
                        user.twitter.tokenSecret = tokenSecret;

                        user.save();
                        done(null, user);
                    }
                });
            }
            else { // Always this. Can't avoid repetition of users in database
                query = { 'twitter.id': profile.id };

                User.findOne(query, function (error, user) {
                    if (user) {
                        console.log('Twitter user found in database: ', user);
                        done(null, user);
                    }
                    else {
                        console.log('Twitter user not found in database');
                        user = new User;
                        // user.email = profile.emails[0].value;
                        // user.image = profile._json.image.url;
                        user.displayName = profile.displayName;

                        user.twitter = {};
                        user.twitter.id = profile.id;
                        user.twitter.token = token;
                        user.twitter.tokenSecret = tokenSecret;

                        user.save();
                        done(null, user);
                    }
                });
            }
        }));
};