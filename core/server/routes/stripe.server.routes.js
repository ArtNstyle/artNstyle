var stripeCtrl = require('../controllers/stripe.server.controller.js');

<<<<<<< HEAD
// module.exports = function (app) {
//     app.route('/api/payment')
=======
module.exports = function (app) {
    app.route('/api/payment')
>>>>>>> parent of 5ca2df7... stripe now does pay

        // .get(artistCtrl.read)
        .post(stripeCtrl.create)
        // .put(artistCtrl.update)
        // .delete(artistCtrl.remove);

};

// app.post('/api/payment', stripeCtrl.makePayment);