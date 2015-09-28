var stripe = require('stripe')('pk_test_m15Rgu5CaL9nnBd1wFvTIiBV');
var stripeCtrl = require('./core/server/controllers/stripe.server.controller');


var db = mongoose(),
    app = express();

app.post('/api/payment', stripeCtrl.makePayment);

app.post('api/firstsubscription', stripeCtrl.createFirstSubscription);

app.post('api/addsubscription', stripeCtrl. addSubscription);




// var stripeCtrl = require('../controllers/stripe.server.controller.js');



//         // .get(artistCtrl.read)
//         .post(stripeCtrl.create)
//         // .put(artistCtrl.update)
//         // .delete(artistCtrl.remove);

// };

// // app.post('/api/payment', stripeCtrl.makePayment);