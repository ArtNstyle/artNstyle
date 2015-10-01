"use strict";

class loggedUserService {
    constructor($http) {
        this.authenticated = false;
        this.$http = $http;
        this.url = "";
        this.myUri = "/checklogin";

    }

    authenticate() {
        return this.$http.get(this.url + this.myUri).then((response) => {
            //console.log("authentication response", response);
            this.authenticated = response.data;

            // SET TO TRUE ONLY FOR DEVELOPMENT TESTNG 
            // this.authenticated = true;


            return this.authenticated;
        }, (err) =>{
            console.log('error authenticating: ', err);
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

