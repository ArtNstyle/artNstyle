module.exports = function (app) {

    app.controller('contactController', ['$scope', '$log', '$location', '$q', 'ticketsService', contactController]);

    function contactController($scope, $log, $location, $q, ticketsService) {

        // code for the google map
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

        

        // code for tickets
        (refreshTickets());

        function refreshTickets() {
            ticketsService.getAllTickets()
                .then(function (data) {
                    console.log(data); // debugging
                    $scope.tickets = data; // atención
                    $scope.ticketsKind = "Tickets";
                })
                .catch(function (errorMsg) {
                    console.log('Error: ' + errorMsg);
                });

        }


        $scope.addTicket = function () {
            ticketsService.postNewTicket({ name: $scope.newTicket })
                .then(function (message) {
                    $log.info(message); // debugging
                    refreshTickets();
                })
                .catch(function (errorMsg) {
                    $log.error(errorMsg);
                });
        };


        $scope.editTicket = function () {
            ticketsService.putTicket($scope.currentTicket, $scope.currentTicket._id)
                .then(function (message) {
                    $log.info(message);
                    refreshTickets();
                })
                .catch(function (errorMsg) {
                    $log.error(errorMsg);
                });
        };


        $scope.removeTicket = function () {
            ticketsService.deleteTicket($scope.currentTicket._id)
                .then(function (message) {
                    $log.info(message);
                    refreshTickets();
                })
                .catch(function (errorMsg) {
                    $log.error(errorMsg);
                });
        };

    };
};

