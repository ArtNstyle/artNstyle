var exports = module.exports;

var stripe = require("stripe")('sk_test_fgfZJsb4ZDW0L2huWhoNYF72');

exports.makePayment = function(req, res) {
   console.log('this is in stripeCtrl', req.body);
  var stripeToken = req.body.id;
  console.log('stripeToken', stripeToken)
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

  // RESPONSE FOR TESTING
  //var response = {
  //    paid: true
  //};
  //res.send(response);
}


exports.createFirstSubscription = function(req, res) {
  console.log('createFirstSubscription', req.body);
  var stripeToken = req.body.id;
  console.log('stripeToken', stripeToken);
  // TO BE IMPLEMENTED

  // RESPONSE FOR TESTING
  var response = {
    //paid: true,
    customerId: "test123"
  };
  res.send(response);
}

exports.addSubscription = function(req, res) {
  console.log('addSubscription', req.body);
  var stripeToken = req.body.id;
  console.log('stripeToken', stripeToken)
  // TO BE IMPLEMENTED

  // RESPONSE FOR TESTING
  var response = {
    //paid: true
  };
  res.send(response);
}
