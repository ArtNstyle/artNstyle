process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 5000;

// bringing the express and mongoose objects from config
var mongoose = require('./core/server/config/mongoose'),
    express = require('./core/server/config/express');
    // stripe
var stripe = require('stripe')('pk_test_31ZEa41V3AWPDgXegf0z7uAD');
var stripeCtrl = require('./stripeCtrl');
console.log('do you see me');


var db = mongoose(),
    app = express();

//stripe post
app.post('/api/payment', stripeCtrl.makePayment);


app.listen(port, function () {
    console.log('listening on ' + port);
});


module.exports = app;