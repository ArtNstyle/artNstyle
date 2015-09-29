"use strict";

class ordersService {
    constructor($http) {
        this.$http = $http;
        this.url = "/api";
        this.myUri = "/order";
        this.allUri = "/all";
        this.idSelector = "?id=";

        this.items = [];

    }

    getItems() {
        return this.$http.get(this.url + this.myUri + this.allUri).then((response) => {
            //console.log("ordersService: getItems", response);
            return response.data;
        })
    }

    addItems(customerEmail, customerId, items) {
        for(var i = 0; i < items.length; i++ ) {
            items[i].customer = customerEmail;
            items[i].customerId = customerId;
            items[i].time = Date().slice(0, -18); // e.g. Sat Sep 26 2015 18:18
            items[i].type = "item";
            this.$http.post(this.url + this.myUri, items[i]).then((response) => {
                //console.log("added order", response.data)
            }, (err) => {
                console.log("error adding order", items[i]);
            })
        }
    }

    addSubscription(customerEmail, customerId, subscription) {
        subscription.customer = customerEmail;
        subscription.customerId = customerId;
        subscription.time = Date().slice(0, -18); // e.g. Sat Sep 26 2015 18:18
        subscription.type = "subscription";
        this.$http.post(this.url + this.myUri, subscription).then((response) => {
            //console.log("added subscription", response.data)
        }, (err) => {
            console.log("error adding subscription", subscriptions[i]);
        });
    }

    deleteItem(item) {
        //console.log("deleting order", item);
        return this.$http.delete(this.url + this.myUri + this.idSelector + item._id).then((response) => {
        }, (err) => {
            console.log("error deleting order", item);
        })
    }

    saveItem(item) {
        return this.$http.put(this.url + this.myUri + this.idSelector + item._id, item).then((response) => {
        }, (err) => {
            console.log("error saving order", item);
        })
    }

}

export default angular.module('services.ordersService', [])
    .service('ordersService', ordersService)
    .name;