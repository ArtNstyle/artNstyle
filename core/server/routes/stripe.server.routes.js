var stripe = require('stripe')('pk_test_m15Rgu5CaL9nnBd1wFvTIiBV');
var stripeCtrl = require('../controllers/stripe.server.controller');


module.exports = function (app) {

    app.post('/api/payment', stripeCtrl.makePayment);

    app.post('/api/firstsubscription', stripeCtrl.createFirstSubscription);

    app.post('/api/addsubscription', stripeCtrl.addSubscription);

    app.post('/api/addinvoiceitem', stripeCtrl.addInvoiceItems);
}

