
 function($http, $rootScope) {
  return {
    restrict: 'E',
    scope: true,
    link: function(scope, elem, attrs) {
      console.log('this is directive scope', scope);

      // var handler = StripeCheckout.configure({
      //   key: 'pk_test_dxhB60qLTabpgCmSeQiY7sc1',
      //   // image: './img/cc.png',
      //   token: function(token, args) {
      //     token.amount = scope.total + '00'
      //     var $input = $('<input type=hidden name=stripeToken />').val(
      //       token.id);
      //     $('form').append($input).submit();
      //     console.log('this is token,',
      //       token);

      //     $http.post('/api/payment', token)
      //       .success(function(response) {
      //         console.info('response stripe directive: ',
      //           response);
      //         if (response.paid === true) {
               
      //         }
      //       })
      //       .error(function(err) {
      //         throw new Error(err);
      //       });
      //   }

      //   //end stripeCheckout configure
      // });

      // $('#paymentButton').on('click', function(e) {
      //   // Open Checkout with further options
      //   handler.open({
      //     name: 'GYC Southwest',
      //     description: 'SWYC Registration',
      //     amount: scope.total + '00'
      //   });
      //   e.preventDefault();
      // });

      // // Close Checkout on page navigation
      // $(window).on('popstate', function() {
      //   handler.close();
      // });

      //end link
    }
  }


export default angular.module('directives.payMent', [])
    .directive('payMent', payMent)
    .name;