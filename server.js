process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 5000;

// bringing the express and mongoose objects from config
var mongoose = require('./core/server/config/mongoose'),
    express = require('./core/server/config/express');
    // stripe
var stripe = require('stripe')('pk_test_XcGa1WN1ZQKGkxYqksqFTeKE');
var stripeCtrl = require('./stripeCtrl');
// app.post('/api/payment', stripeCtrl.makePayment);


var db = mongoose(),
    app = express();


app.listen(port, function () {
    console.log('listening on ' + port);
});


module.exports = app;