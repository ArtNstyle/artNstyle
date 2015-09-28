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
	var stripeToken = req.body.id;
	var charge = stripe.charges.create({
		amount: req.body.amount,
		currency: "usd",
		source: stripeToken,
		description: "ArtNstyle"
	}, function(err, charge) {
		if (err) return res.status(505).send(err);
		return res.json(charge);
	}
	})
}

exports.addSubscription = function(req, res) {
	var stripeToken = req.body.id;
	var charge = stripe.charges.create({
		amount: req.body.amount,
		currency: "usd",
		source: stripeToken,
		description: "ArtNstyle"
	}, function(err, charge) {
		if (err) return res.status(505).send(err);
		return res.json(charge);
	}
	})
}




