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
                    $scope.newItem.image = "http://45.55.16.198:3039/api/pocketScrum/fullpic?id=55f4b2de516b4266230081c2";
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
