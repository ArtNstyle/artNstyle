require('angular');


module.exports = angular.module('app.events', [])
    .controller('EventsController', function($scope) {
        $scope.test = 'Hello from EventsController';

        $scope.changeName = function () {
            $scope.name = 'angular-tips';
        }
    })
    .name;