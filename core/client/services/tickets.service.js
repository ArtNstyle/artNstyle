(function () {
    "use strict";

    module.exports = function (app) {
        app.factory('ticketsResource', ['$resource', ticketsResource]);


        function ticketsResource($resource) {
            return $resource(
                'api/tickets/:id',
                { id: '@_id' },
                {
                    'update': { method: 'PUT' }
                });
        }

    };

} ());