"use strict";

class loggedUserService {
    constructor($http) {
        this.authenticated = false;
        this.$http = $http;
    }

    authenticate() {
        return this.$http.get('/checklogin').then((response) => {
            console.log("authentication response", response);
            this.authenticated = response.data;
            return this.authenticated;
        }, (err) =>{
            console.log('erro authenticating: ', err);
        });
    }

    isAuthenticated() {
        return this.authenticate().then((response)=> {
            return this.authenticated;
        });
    }
}

export default angular.module('services.loggedUserService', [])
    .service('loggedUserService', loggedUserService)
    .name;

