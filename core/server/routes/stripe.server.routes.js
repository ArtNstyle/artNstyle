var config = require('../config/config'),
    stripe = require('stripe')(config.STRIPE_PKEY);
var stripeCtrl = require('../controllers/stripe.server.controller');


module.exports = function (app) {

    app.post('/api/payment', stripeCtrl.makePayment);

    app.post('/api/firstsubscription', stripeCtrl.createFirstSubscription);

    app.post('/api/addsubscription', stripeCtrl.addSubscription);

    app.post('/api/addinvoiceitem', stripeCtrl.addInvoiceItems);
}

