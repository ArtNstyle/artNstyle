import angular from 'angular';

function addItem() {
    return {
        restrict: 'E',
        scope: {
            ctrl: '=',
            label: "@"
        },
        templateUrl: "../directives/addItem.template.html",
        link: function( $scope, lElem, lAttr ){
            $scope.newItem = {};

            $scope.addItem = function() {
                if($scope.newItem.name) {
                    $scope.ctrl.addItem($scope.newItem);
                }
                $scope.newItem = "";
            }
        }
    }
}


export default angular.module('directives.addItem', [])
    .directive('addItem', addItem)
    .name;
