var stripeCtrl = require('../controllers/stripe.server.controller.js');

module.exports = function (app) {
    app.route('/api/payment')

        // .get(artistCtrl.read)
        .post(stripeCtrl.create)
        // .put(artistCtrl.update)
        // .delete(artistCtrl.remove);

};

// app.post('/api/payment', stripeCtrl.makePayment);