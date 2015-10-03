var config = require('../config'),
    passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    User = require('../../models/user.server.model');


module.exports = function () {
    if (! config.GOOG_clientID || ! config.GOOG_clientSecret) {
        console.log("no google ids");
        return;
    }

    passport.use(new GoogleStrategy(
        {
            clientID: config.GOOG_clientID,
            clientSecret: config.GOOG_clientSecret,
            callbackURL: "https://artnstylesalon.com/auth/google/callback"
        },
        function (req, accessToken, refreshToken, profile, done) {
            var query = {'google.id': profile.id};

            User.findOne(query, function (error, user) {
                if (user) {
                    console.log('Google user found in database: ', user);
                    done(null, user);
                }
                else {
                    console.log('Google user not found in database');
                    user = new User;
                    user.email = profile.emails[0].value;
                    user.image = profile._json.image.url;
                    user.displayName = profile.displayName;

                    user.google = {};
                    user.google.id = profile.id;
                    user.google.token = accessToken;

                    user.save();
                    done(null, user);
                }
            });


        }));
};