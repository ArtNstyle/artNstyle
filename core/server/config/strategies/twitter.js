var passport = require('passport'),
    TwitterStrategy = require('passport-twitter').Strategy;

module.exports = function () {
    passport.use(new TwitterStrategy({
        consumerKey: 'ufQBFSAXpFnrTxtkTRkVtpoWw',
        consumerSecret: 'uPompKDR1BL5OY0N9EtW8jXiLtrD1Pa0fKjK4mWlMltSJVnKXt',
        callbackURL: 'http://localhost:5000/auth/twitter/callback',
        passRecToCallback: true
    }, function (req, token, tokenSecret, profile, done) {
        var user = {};

        // user.email = profile.emails[0].value;
        // user.image = profile._json.image.URL;
        user.displayName = profile.displayName;

        user.twitter = {};
        user.twitter.id = profile.id;
        user.twitter.token = token;

        done(null, user);
    }));
};