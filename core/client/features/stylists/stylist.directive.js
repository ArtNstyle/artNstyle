import angular from 'angular';

function stylist() {
    return {
        restrict: 'E',
        scope: {
            editing: '=',
            info: '=',
            ctrl: '='
        },
        templateUrl: "./features/stylists/stylist.template.html",
        controller: function($scope) {
            //console.log("stylist scope", $scope.info);
        }
    }
}

export default angular.module('app.stylist', [])
    .directive('stylist', stylist)
    .name;
