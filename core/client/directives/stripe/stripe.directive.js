function stripe($http, $rootScope) {

	console.log('hello')
    return {
        restrict: 'E',
        templateUrl: "../../directives/stripe/stripe.template.html",
	    link: function(scope, elem, attrs) {
	      console.log('this is directive scope', scope);

	      var handler = StripeCheckout.configure({
		        key: 'pk_test_31ZEa41V3AWPDgXegf0z7uAD',
		        // image: './img/cc.png',
		        token: function(token, args) {
		          token.amount = scope.cart.total * 100
		          var $input = $('<input type=hidden name=stripeToken />').val(token.id);
		          $('form').append($input).submit();
		          console.log('this is token,', token);

		          $http.post('/api/payment', token)
		            .success(function(response) {
		              console.info('response stripe directive: ', response);
			            if (response.paid === true) {
			               
			            }
		            })
		            .error(function(err) {
		              throw new Error(err);
		            });
		        }
				//end stripeCheckout configure
	        });

	      $('#paymentButton').on('click', function(e) {
		      	console.log('hi')
		        // Open Checkout with further options
		        handler.open({
		          name: 'Art-N-Style',
		          description: 'Salon',
		          amount: scope.total + '00'
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

export default angular.module('directives.stripe', [])
    .directive('stripe', stripe)
    .name;