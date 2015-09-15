import angular from 'angular';

class BaseWeb {
    constructor($http) {
        this.names = ['John', 'Elisa', 'Mark', 'Annie'];
        this.$http = $http;
    }

    saveItem(item) {
        console.log("saveItem", item)
    }
}

class stylistsService extends BaseWeb {
    constructor($http, $q) {
        super($http);
        this.$q = $q;
    }

    getItems() {
        this.stylists =[];

        for(var i = 0; i < 5; i++) {
            this.stylists[i] = {visibilities: {}};
            this.stylists[i].name = "Jane Doe";
            this.stylists[i].title = "Stylist" + i;
            this.stylists[i].bio = "Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes";
            if(i%2 === 0) {
                this.stylists[i].link = "https://www.google.com/";
            }
            this.stylists[i].image = "http://45.55.16.198:3039/api/pocketScrum/fullpic?id=55f4b2de516b4266230081c2";
        }

        return this.$q.when(this.stylists);
    }
}

export default angular.module('services.base-web', [])
    .service('stylistsService', stylistsService)
    .name;
