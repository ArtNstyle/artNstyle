var exports = module.exports;

var stripe = require("stripe")('sk_test_fgfZJsb4ZDW0L2huWhoNYF72');

exports.makePayment = function(req, res) {
  // console.log('this is in stripeCtrl', req.body);
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
}

exports.createFirstSubscription = function(req, res) {
	// var stripeToken = req.body.id;
	console.log(req.body);
	var customer = stripe.customers.create({
		source: req.body.token.id,
		plan: req.body.plan,
		email: req.body.email
	}, function(err, customer) {
		if (err) return res.status(505).send(err);
		return res.json(customer);
	});
}



exports.addSubscription = function(req, res) {
	// var stripeToken = req.body.id;
	console.log('##@@##########&&&&&&&&&&&&&&&&&&&req.body!!!!',req.body);

	stripe.customers.createSubscription(req.body.customerId, {plan: req.body.plan
	}, function(err, subscription) {
		if (err) return res.status(505).send(err);
		return res.json(subscription);
	});
}


// var stripe = require("stripe")(
//   "sk_test_fgfZJsb4ZDW0L2huWhoNYF72"
// );

// stripe.customers.createSubscription(
//   "cus_74HCc6pPzNKPYY",
//   {plan: "Minimalist"},
//   function(err, subscription) {
//     // asynchronously called
//   }
// );


// // (Assuming you're using express - expressjs.com)
// // Get the credit card details submitted by the form
// var stripeToken = request.body.stripeToken;

// stripe.customers.create({
//   source: stripeToken,
//   plan: "Dali #1",
//   email: "payinguser@example.com"
// }, function(err, customer) {
//   // ...
// });




// stripe.customers.create({
//   source: stripeToken,
//   plan: "gold",
//   email: "payinguser@example.com"
// }, function(err, customer) {
//   // ...
// });
