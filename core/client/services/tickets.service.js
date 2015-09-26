module.exports = function (app) {

    app.factory('ticketsService', ['$q', '$http', ticketsService]);

    function ticketsService($q, $http) {
        return {
            getAllTickets: getAllTickets,
            postNewTicket: postNewTicket,
            putTicket: putTicket,
            deleteTicket: deleteTicket,
        };


        // SERVICES FOR SUBJECTS
        function getAllTickets() { // get all
            return $http({
                method: 'GET',
                url: 'api/tickets'
            })
                .then(function (response) {
                    return response.data;
                })
                .catch(function (response) {
                    return $q.reject('Error: ' + response.status);
                });
        }


        function postNewTicket(newTicket) { // post new
            return $http({
                method: 'POST',
                url: 'api/tickets',
                data: newTicket
            })
                .then(function (response) {
                    return 'Keyword added';
                })
                .catch(function (response) {
                    return $q.reject('Error: ' + response.status);
                });
        }


        function putTicket(word, id) { // update one
            return $http({
                method: 'PUT',
                url: 'api/tickets/' + id,
                data: word
            })
                .then(function () {
                    return "Ticket updated.";
                })
                .catch(function () {
                    return "There was an error.";
                });
        }

        function deleteTicket(id) { // delete one
            return $http({
                method: 'DELETE',
                url: 'api/tickets/' + id,
            })
                .then(function () {
                    return "Ticket deleted.";
                })
                .catch(function () {
                    return "There was an error.";
                });
        }

    }

};