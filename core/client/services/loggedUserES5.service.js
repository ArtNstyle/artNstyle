module.exports = function (app) {

    app.factory('loggedService', ['$q', '$http', loggedService]);

    function loggedService($q, $http) {
        return {
            userAuthenticated: userAuthenticated,
        };

        function userAuthenticated() {
            return $http({
                method: 'GET',
                url: '/checklogin'
            })
                .then(function (response) {
                    return response.data;
                })
                .catch(function (response) {
                    return $q.reject('Error: ' + response.status);
                });
        }
    }

};