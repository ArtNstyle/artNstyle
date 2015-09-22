
function stripe() {
    return {
        restrict: 'E',
        templateUrl: "../../directives/stripe/stripe.template.html",
        link: function( $scope, lElem, lAttr ){
        }
    }
}

export default angular.module('directives.stripe', [])
    .directive('stripe', stripe)
    .name;

