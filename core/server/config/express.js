// EXPRESS CONFIGURATION FILE
var config = require('./config'),
    express = require('express'),
    cors = require('cors'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    webpack = require('webpack'),
    webpackConfig = require('../../../webpack.config'),
    webpackMiddleware = require('webpack-dev-middleware'),
<<<<<<< HEAD
    ejs = require('ejs')
=======
    ejs = require('ejs');
>>>>>>> 2506e1d5124547d7280585ca61aeec577bbf763c


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
    require('./passport.js')(app);


    // HERE WE INCLUDE THE ROUTES
    require('../routes/users.server.routes.js')(app);
    require('../routes/artists.server.routes.js')(app);
    require('../routes/cart.server.routes.js')(app);
    require('../routes/event.server.routes.js')(app);
    require('../routes/stylists.server.routes.js')(app);
<<<<<<< HEAD
    require('../routes/auth.server.routes.js')(app);
    require('../routes/tanning.server.routes.js')(app);

=======
    require('../routes/pic.server.routes.js')(app);
    require('../routes/auth.server.routes.js')(app);
>>>>>>> 2506e1d5124547d7280585ca61aeec577bbf763c

    // THIS WILL BE ANGULAR APP
    // needs to come after setting the rendering engine
    app.use(express.static('./core/client'));


    return app;
};