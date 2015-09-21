function event() {
    return {
        restrict: 'E',
        scope: {
            editing: '=',
            info: '=',
            ctrl: '='
        },
        templateUrl: "./features/events/event.template.html",
        controller: function($scope) {
            //console.log("stylist scope", $scope.info);
        }
    }
}

export default angular.module('app.event', [])
    .directive('event', event)
    .name;

