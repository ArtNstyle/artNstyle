process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 5000;

// bringing the express and mongoose objects from config
var mongoose = require('./core/server/config/mongoose'),
    express = require('./core/server/config/express');

var db = mongoose(),
    app = express();




//for https/ssl

if (process.env.NODE_ENV !== 'development') {
    var fs = require('fs'),
        http = require('http'),
        https = require('https');

    var options = {
        key: fs.readFileSync('./artnstylesalon.com.key'),
        cert: fs.readFileSync('./artnstylesalon.com.crt'),
    };



    var server = https.createServer(options, app).listen(port, function () {
        console.log("Express server listening on port " + port);
    });
}
else {
    app.listen(port, function () {
        console.log('listening on ' + port);
    });
}

module.exports = app;