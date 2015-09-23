var exports = module.exports;
var stripe = require("stripe")('sk_test_Ns26RNDadYy1USJuPMbjalcS');

exports.makePayment = function(req, res) {
  console.log('this is in stripeCtrl', req.body);
  var stripeToken = req.body.id;

  var charge = stripe.charges.create({
    amount: req.body.amount,
    currency: "usd",
    source: stripeToken,
    description: "SWYC Registration"
  }, function(err, charge) {
    if (err) return res.status(505).send(err);
    console.log('this is charge', charge);
    return res.json(charge);
  });
}
