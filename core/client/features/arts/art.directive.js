function art() {
    return {
        restrict: 'E',
        scope: {
            editing: '=',
            info: '=',
            ctrl: '='
        },
        templateUrl: "./features/arts/art.template.html",
        controller: function($scope) {
            //console.log("art scope", $scope.info);
        }
    }
}

export default angular.module('app.art', [])
    .directive('art', art)
    .name;
