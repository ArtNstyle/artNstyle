process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 5000;

// bringing the express and mongoose objects from config
var mongoose = require('./core/server/config/mongoose'),
    express = require('./core/server/config/express');
    // stripe
var stripe = require('stripe')('sk_test_fgfZJsb4ZDW0L2huWhoNYF72');
var stripeCtrl = require('./stripeCtrl');




var db = mongoose(),
    app = express();

app.post('/api/payment', stripeCtrl.makePayment);
app.post('/api/firstsubscription', stripeCtrl.createFirstSubscription);
app.post('/api/addsubscription', stripeCtrl.addSubscription);


app.listen(port, function () {
    console.log('listening on ' + port);
});


module.exports = app;