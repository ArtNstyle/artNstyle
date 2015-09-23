module.exports = function (app) {
    app.controller('contactController', function ($scope) {
        $scope.map = {
            center: {
                latitude: 36.104283,
                longitude: -95.974135
            },
            zoom: 18
        };
        $scope.marker = {
            coords: {
                latitude: 36.104283,
                longitude: -95.974135
            },
            options: '',
            id: '1'
        };
    });
};