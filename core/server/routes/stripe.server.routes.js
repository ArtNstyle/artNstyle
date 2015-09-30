var stripe = require('stripe')('pk_live_6RmNbGwe5vNDt7vE96HErgTd');
var stripeCtrl = require('../controllers/stripe.server.controller');


module.exports = function (app) {

    app.post('/api/payment', stripeCtrl.makePayment);

    app.post('/api/firstsubscription', stripeCtrl.createFirstSubscription);

    app.post('/api/addsubscription', stripeCtrl.addSubscription);

    app.post('/api/addinvoiceitem', stripeCtrl.addInvoiceItems);
}

