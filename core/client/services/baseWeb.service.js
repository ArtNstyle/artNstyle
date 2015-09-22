class BaseWebService {
    constructor($log, $http, $location) {
        this.$log = $log;
        this.$http = $http;

        this.url = "http://" + $location.host() + ":" + $location.port() + "/api";
        this.stylistsUri = "/stylists";
<<<<<<< HEAD

        this.artistsUri = "/artists";

=======
        this.artistsUri = "/artists";
        this.eventsUri = "/events";
>>>>>>> 2506e1d5124547d7280585ca61aeec577bbf763c
        this.allUri = "/all";
    }

    getItems() {
        return this.$http.get(this.url + this.myUri + this.allUri).then((response) => {
            return response.data;
        }, (err) => {
            this.$log.warn("error at getItems", err);
        });
    }

    addItem(item) {
        //console.log("BaseWebService: addItem", item);
        return this.$http.post(this.url + this.myUri, item).then((response) => {
            return response.data;
        }, (err) => {
            this.$log.warn("error at addItem", err);
        });
    }

    saveItem(item) {
        //console.log("BaseWebService: saveItem", item);
        return this.$http.put(this.url + this.myUri + "?id=" + item._id, item).then((response) => {
            return response.data;
        }, (err) => {
            this.$log.warn("error at saveItem", err);
        });
    }

    deleteItem(item) {
        //console.log("BaseWebService: deleteItem", item);
        return this.$http.delete(this.url + this.myUri + "?id=" + item._id, item).then((response) => {
            return response.data;
        }, (err) => {
            this.$log.warn("error at deleteItem", err);
        });
    }

}

class stylistsService extends BaseWebService {
    constructor($log, $http, $location) {
        super($log, $http, $location);
        this.myUri = this.stylistsUri;
    }

}

<<<<<<< HEAD

class artistsService extends BaseWeb {
=======
class artistsService extends BaseWebService {
>>>>>>> 2506e1d5124547d7280585ca61aeec577bbf763c
    constructor($log, $http, $location) {
        super($log, $http, $location);
        this.myUri = this.artistsUri;
    }

}

<<<<<<< HEAD
export default angular.module('services.base-web', [])
    .service('stylistsService', stylistsService)
    .service('artistsService', artistsService)
=======
class eventsService extends BaseWebService {
    constructor($log, $http, $location) {
        super($log, $http, $location);
        this.myUri = this.eventsUri;
    }

}


export default angular.module('services.base-web', [])
    .service('stylistsService', stylistsService)
    .service('artistsService', artistsService)
    .service('eventsService', eventsService)
>>>>>>> 2506e1d5124547d7280585ca61aeec577bbf763c
    .name;
