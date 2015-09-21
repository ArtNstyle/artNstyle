var passport = require('passport'),
    FacebookStrategy = require('passport-facebook').Strategy;

module.exports = function () {
    passport.use(new FacebookStrategy(
        {
            clientID: "1527150407576361",
            clientSecret: "f6130a59bf4bb6794c8a8a6eec874109",
            callbackURL: "http://localhost:5000/auth/facebook/callback",
            passReqToCallback: true
        },
        function (req, accessToken, refreshToken, profile, done) {
            var user = {};

            // user.email = profile.emails[0].value;
            // user.image = profile._json.image.url;
            user.displayName = profile.displayName;

            user.facebook = {};
            user.facebook.id = profile.id;
            user.facebook.token = accessToken;

            done(null, user);
        }));
};
