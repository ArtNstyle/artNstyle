import paymentService from '../../services/payment.service';
import ordersService from '../../services/orders.service';
import cartService from '../../services/cart.service';

function stripe($q, paymentService, ordersService, cartService) {

    return {
        restrict: 'E',
        templateUrl: "../../directives/stripe/stripe.template.html",
	    link: function(scope, elem, attrs) {
	      //console.log('this is directive scope', scope);
			scope.status = cartService.status;

	      var handler = StripeCheckout.configure({

	        key: 'pk_test_CjsDYe4Aj8fYmJN5m1aYd94A',
	        // image: './img/cc.png',
	        token: function(token, args) {
				var customerEmail = token.email;
				var customerId = "NA";
				token.amount = scope.cart.total * 100;
				var $input = $('<input type=hidden name=stripeToken />').val(token.id);
				$('form').append($input).submit();
				//console.log('this is token,', token);

				function itemsBought(cart) {
					return cart.items && cart.items.length > 0;
				}

				function payItemsIfNeeded(cart, token) {
					token.amount = cart.itemsTotal * 100;
					if (itemsBought(cart)) {
						paymentService.makePayment(token).then((chargeId) => {
							//console.log("payItemsIfNeeded", chargeId);
							ordersService.addItems(customerEmail, chargeId, cart.items);
							cartService.status.reference = chargeId;
						});

					}
					cartService.status.orderSubmitted = true; // this is visible to all UXs needing it
				}

				function addItemsIfNeeded(cart) {
					var amount = cart.itemsTotal * 100;
					if (itemsBought(cart)) {
						paymentService.addInvoiceItem(customerId, amount).then((response) => {
							ordersService.addItems(customerEmail, customerId, cart.items);
						});

					}
					cartService.status.orderSubmitted = true; // this is visible to all UXs needing it
					cartService.status.reference = customerId;
				}

				function addOneSubscription(subscription) {
					var planId = subscription.planId;
					return paymentService.addSubscription(customerId, planId).then((response) => {
						ordersService.addSubscription(customerEmail, customerId, subscription);
						return response;
					}, (err) =>{
						console.log("error adding subscription", subscription);
						return err;
					});
				}

				if(scope.cart.subscriptions && scope.cart.subscriptions.length > 0) {
					var planId = scope.cart.subscriptions[0].planId;
					paymentService.createFirstSubscription(customerEmail, planId, token).then((newCustomerId) => {
						customerId = newCustomerId;
						ordersService.addSubscription(customerEmail, customerId, scope.cart.subscriptions[0]);

						if (scope.cart.subscriptions.length > 1) { // more than one subscriptions

							var restSubs = scope.cart.subscriptions.slice(1);
							$q.all(restSubs.map(function(d){
								return addOneSubscription(d);
							})).then((responses) => {
								//console.log("$q all responses", responses);
								addItemsIfNeeded(scope.cart);
							});

						} else { // one subs
							addItemsIfNeeded(scope.cart);
						}
					});
				} else { // no subs
					payItemsIfNeeded(scope.cart, token);
					// this call does not create customer, only charging item
				}

	        }

	        //end stripeCheckout configure
	      });

	      $('#paymentButton').on('click', function(e) {
	      	//console.log('scope.cart.total', scope.cart.total);

	        // Open Checkout with further options
	        handler.open({
	          name: 'Art-N-Style',
	          description: 'Salon',
	          amount: scope.cart.total * 100
	        });
	        e.preventDefault();
	       	

	      });

	      // Close Checkout on page navigation
	      $(window).on('popstate', function() {
	        handler.close();
	      });

	      // end link
	    }
    }

}

export default angular.module('directives.stripe', [paymentService])
    .directive('stripe', stripe)
    .name;