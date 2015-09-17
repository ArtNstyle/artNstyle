function artist() {
    return {
        restrict: 'E',
        scope: {
            editing: '=',
            info: '=',
            ctrl: '='
        },
        templateUrl: "./features/artists/artist.template.html",
        controller: function($scope) {
            //console.log("stylist scope", $scope.info);
        }
    }
}

export default angular.module('app.artist', [])
    .directive('artist', artist)
    .name;
