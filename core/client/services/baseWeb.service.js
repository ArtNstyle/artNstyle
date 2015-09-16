class BaseWeb {
    constructor($http, $location) {
        this.$http = $http;

        this.url = "http://" + $location.host() + ":" + $location.port() + "/api";
        this.stylistsUri = "/stylists";
        this.allUri = "/all";
    }

    getItems() {
        return this.$http.get(this.url + this.myUri + this.allUri).then((response) => {
            return response.data;
        })
    }

    saveItem(item) {
        console.log("saveItem", item)
    }
}

class stylistsService extends BaseWeb {
    constructor($http, $location) {
        super($http, $location);
        this.myUri = this.stylistsUri;
    }

}

export default angular.module('services.base-web', [])
    .service('stylistsService', stylistsService)
    .name;
