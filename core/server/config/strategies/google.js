var passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    User = require('../../models/user.server.model');


module.exports = function () {
    passport.use(new GoogleStrategy(
        {
            clientID: "517772876721-87ob4ks1iv2199rc0eiav6odb2jb6u7q.apps.googleusercontent.com",
            clientSecret: "PFu1kBqYyBJGub-bl07R1v0E",
            callbackURL: "http://localhost:5000/auth/google/callback"
        },
        function (req, accessToken, refreshToken, profile, done) {
            var query = { 'google.id': profile.id };

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