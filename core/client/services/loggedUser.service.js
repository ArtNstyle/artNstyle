module.exports = function (app) {
    app.service('loggedUser', function ($http) {
        this.loggedUser = $http.get('/checklogin')
        .success(function(data) {
          console.log(data);
          return data;
        })
        .error(function(data) {
          console.log('error: ' + data);
        });
    });
};