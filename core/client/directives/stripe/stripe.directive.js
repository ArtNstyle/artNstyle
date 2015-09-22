
function stripe() {
    return {
        restrict: 'E',
        templateUrl: "../../directives/stripe/stripe.template.html",
        link: function( $scope, lElem, lAttr ){
        }
    }
}
$scope.handleStripe = function(status, response){
  if(response.error) {
    // there was an error. Fix it.
  } else {
    // got stripe token, now charge it or smt
    token = response.id
  }
}


export default angular.module('directives.stripe', [])
    .directive('stripe', stripe)
    .name;

