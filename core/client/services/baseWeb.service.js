class BaseWebService {
    constructor($log, $http, $location) {
        this.$log = $log;
        this.$http = $http;

        this.url = "http://" + $location.host() + ":" + $location.port() + "/api";
        this.stylistsUri = "/stylists";
        this.artistsUri = "/artists";
        this.artsUri = "/arts";
        this.eventsUri = "/events";
        this.allUri = "/all";
    }

    getItems(query) {
        var queryUrl = query? this.url + this.myUri + query : this.url + this.myUri + this.allUri;
        //console.log("BaseWebService: getItems", queryUrl);
        return this.$http.get(queryUrl).then((response) => {
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

class artistsService extends BaseWebService {
    constructor($log, $http, $location) {
        super($log, $http, $location);
        this.myUri = this.artistsUri;
    }
}

class artsService extends BaseWebService {
    constructor($log, $http, $location) {
        super($log, $http, $location);
        this.myUri = this.artsUri;
    }

}


class eventsService extends BaseWebService {
    constructor($log, $http, $location) {
        super($log, $http, $location);
        this.myUri = this.eventsUri;
    }

}


export default angular.module('services.base-web', [])
    .service('stylistsService', stylistsService)
    .service('artistsService', artistsService)
    .service('artsService', artsService)
    .service('eventsService', eventsService)
    .name;
