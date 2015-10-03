process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 5000;

// bringing the express and mongoose objects from config
var mongoose = require('./core/server/config/mongoose'),
    express = require('./core/server/config/express');

var db = mongoose(),
    app = express();



if (process.env.NODE_ENV === 'development') {
    app.listen(port, function () {
        console.log('listening on ' + port);
    });
}
else if (process.env.NODE_ENV === 'production') {
    var fs = require('fs'),
         http = require('http'),
         https = require('https');

     var options = {
         key: fs.readFileSync('./artnstylesalon.com.key'),
         cert: fs.readFileSync('./bundle.pem'),
     };

     var server = https.createServer(options, app).listen(443, function(){
       console.log("Express server listening on port " + port);
     });

    insecureServer = http.createServer();
    insecureServer.on('request', function (req, res) {
        // TODO also redirect websocket upgrades
        res.setHeader(
            'Location'
            , 'https://artnstylesalon.com'
        );
        res.statusCode = 302;
        res.end();
    });

    insecureServer.listen(port, function(){
        console.log("\nRedirecting all http traffic to https\n");
    });

} else {
    console.log("environment not set")
}



module.exports = app;

