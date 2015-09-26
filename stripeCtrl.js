var exports = module.exports;
var stripe = require("stripe")('pk_test_m15Rgu5CaL9nnBd1wFvTIiBV');

exports.makePayment = function(req, res) {
  console.log('this is in stripeCtrl', req.body);
  var stripeToken = req.body.id;

  var charge = stripe.charges.create({
    amount: req.body.amount,
    currency: "usd",
    source: stripeToken,
    description: "ArtNstyle"
  }, function(err, charge) {
    if (err) return res.status(505).send(err);
    console.log('this is charge', charge);
    return res.json(charge);
  });
}
