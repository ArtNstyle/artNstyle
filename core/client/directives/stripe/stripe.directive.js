import paymentService from '../../services/payment.service';

function stripe($q, paymentService) {

	console.log('hello')
    return {
        restrict: 'E',
        templateUrl: "../../directives/stripe/stripe.template.html",
	    link: function(scope, elem, attrs) {
	      console.log('this is directive scope', scope);

	      var handler = StripeCheckout.configure({

	        key: 'pk_test_CjsDYe4Aj8fYmJN5m1aYd94A',
	        // image: './img/cc.png',
	        token: function(token, args) {
				token.amount = scope.cart.total * 100;
				var $input = $('<input type=hidden name=stripeToken />').val(token.id);
				$('form').append($input).submit();
				console.log('this is token,', token);

				function itemsBought(cart) {
					return cart.items && cart.items.length > 0;
				}

				function payItemsIfNeeded(cart, token) {
					token.amount = cart.itemsTotal * 100;
					if (itemsBought(cart)) {
						paymentService.makePayment(token).then((response) => {
						});
					}
					scope.disable = true;
				}

				if(scope.cart.subscriptions && scope.cart.subscriptions.length > 0) {
					token.amount = scope.cart.subscriptions[0].price * 100;
					paymentService.createFirstSubscription(token).then((response) => {
						if (scope.cart.subscriptions.length > 1) { // many subs
							token.amount = scope.cart.subscriptions[1].price * 100;
							paymentService.addSubscription(token).then((response) => {
								payItemsIfNeeded(scope.cart, token);
							});
						} else { // one subs
							payItemsIfNeeded(scope.cart, token);
						}
					});
				} else { // no subs
					payItemsIfNeeded(scope.cart, token);
				}

	        }

	        //end stripeCheckout configure
	      });

	      $('#paymentButton').on('click', function(e) {
	      	console.log('scope.cart.total', scope.cart.total);

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