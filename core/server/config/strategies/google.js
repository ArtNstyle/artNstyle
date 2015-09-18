var passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = function () {
    passport.use(new GoogleStrategy(
        {
            clientID: "517772876721-87ob4ks1iv2199rc0eiav6odb2jb6u7q.apps.googleusercontent.com",
            clientSecret: "PFu1kBqYyBJGub-bl07R1v0E",
            callbackURL: "http://localhost:5000/auth/google/callback"
        },
        function (req, accessToken, refreshToken, profile, done) {
            done(null, profile);
        }));
};