class BaseWeb {
    constructor($log, $http, $location) {
        this.$log = $log;
        this.$http = $http;

        this.url = "http://" + $location.host() + ":" + $location.port() + "/api";
        this.stylistsUri = "/stylists";
        this.allUri = "/all";
    }

    getItems() {
        return this.$http.get(this.url + this.myUri + this.allUri).then((response) => {
            return response.data;
        }, (err) => {
            this.$log.warn("error at getItems", err);
        });
    }

    saveItem(item) {
        //console.log("BaseWeb: saveItem", item);
        return this.$http.put(this.url + this.myUri + "?id=" + item._id, item).then((response) => {
            return response.data;
        }, (err) => {
            this.$log.warn("error at saveItem", err);
        });
    }
}

class stylistsService extends BaseWeb {
    constructor($log, $http, $location) {
        super($log, $http, $location);
        this.myUri = this.stylistsUri;
    }

}

export default angular.module('services.base-web', [])
    .service('stylistsService', stylistsService)
    .name;
