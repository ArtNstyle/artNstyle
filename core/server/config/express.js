// EXPRESS CONFIGURATION FILE
var config = require('./config'),
    webpackConfig = require('../../../webpack.config'),
    express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    passport = require('passport'),
    webpack = require('webpack'),
    webpackMiddleware = require('webpack-dev-middleware'),
    ejs = require('ejs'),
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;


module.exports = function () {
    // generates the app object
    var app = express();


    // here we set our templating engine
    // route is relative to server.js
    app.set('views', './core/server/views');
    app.set('view engine', 'ejs');


    // this middleware will run no matter the environment
    app.use(cors());
    app.use(bodyParser.urlencoded(
        {
            extended: true
        }));
    app.use(bodyParser.json());
    app.use(methodOverride());


    // Environment-dependant middleware
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));

        app.use(webpackMiddleware(webpack(webpackConfig), {
            inline: true,
            publicPath: '/build/'
        }));
    }
    else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }


    // cookie support
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    // google passport oauth
    app.use(passport.initialize());
    app.use(passport.session());
    passport.use(new GoogleStrategy(
        {
            clientID: "517772876721-87ob4ks1iv2199rc0eiav6odb2jb6u7q.apps.googleusercontent.com",
            clientSecret: "PFu1kBqYyBJGub-bl07R1v0E",
            callbackURL: "http://localhost:5000/auth/google/callback"
        },
        function (req, accessToken, refreshToken, profile, done) {
            done(null, profile);
        }));
    passport.serializeUser(function (user, done) {
        done(null, user);
    });
    passport.deserializeUser(function (user, done) {
        done(null, user);
    });


    // HERE WE INCLUDE THE ROUTES
    // we run the router objects giving them the express app
    require('../routes/users.server.routes.js')(app);
    require('../routes/artists.server.routes.js')(app);
    require('../routes/cart.server.routes.js')(app);
    require('../routes/event.server.routes.js')(app);
    require('../routes/stylists.server.routes.js')(app);
    require('../routes/auth.server.routes.js')(app);


    // THIS WILL BE ANGULAR APP
    // needs to come after setting the rendering engine
    app.use(express.static('./core/client'));


    return app;
};