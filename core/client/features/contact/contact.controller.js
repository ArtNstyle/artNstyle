module.exports = function (app) {

    app.controller('contactController', ['$scope', '$log', '$location', '$q', 'ticketsService', 'loggedService', contactController]);

    function contactController($scope, $log, $location, $q, ticketsService, loggedService) {

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


        $scope.populateTicketObject = function () {
            this.newTicket = {};
            this.newTicket.name = this.name;
            this.newTicket.email = this.email;
            this.newTicket.phone = this.phone;
            this.newTicket.message = this.message;
        };


        $scope.cleanForm = function () {
            this.name = '';
            this.email = '';
            this.phone = '';
            this.message = '';
        };


        // crud
        $scope.addTicket = function () {
            ticketsService.postNewTicket($scope.newTicket)
                .then(function (message) {
                    $log.info(message); // debugging
                    refreshTickets();
                    $scope.cleanForm();
                })
                .catch(function (errorMsg) {
                    $log.error(errorMsg);
                });
        };


        $scope.editTicket = function (ticket) {
            ticketsService.putTicket(
                {
                    name: ticket.name,
                    email: ticket.email,
                    phone: ticket.phone,
                    message: ticket.message,
                    solved: !ticket.solved
                }
                , ticket._id)
                .then(function (message) {
                    $log.info(message);
                    refreshTickets();
                })
                .catch(function (errorMsg) {
                    $log.error(errorMsg);
                });
        };


        $scope.removeTicket = function (ticket) {
            ticketsService.deleteTicket(ticket._id)
                .then(function (message) {
                    $log.info(message);
                    refreshTickets();
                })
                .catch(function (errorMsg) {
                    $log.error(errorMsg);
                });
        };


        // code to show or hide tickets

        $scope.isUserAuthenticated = function () {
            loggedService.userAuthenticated()
                .then(function (message) {
                    $scope.userAuthenticated = message;
                    $log.info(message);
                });
        };

        $scope.isUserAuthenticated();

    };
};

