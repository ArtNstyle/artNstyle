"use strict";

class ordersService {
    constructor($http) {
        this.$http = $http;
        this.items = [];

    }

    getItems() {
        return this.$http.get('/api/order/all').then((response) => {
            //console.log("ordersService: getItems", response);
            return response.data;
        })
    }

    addItems(customerEmail, items) {
        for(var i = 0; i < items.length; i++ ) {
            items[i].customer = customerEmail;
            items[i].type = "item";
            this.$http.post('/api/order', items[i]).then((response) => {
                //console.log("added order", response.data)
            }, (err) => {
                console.log("error adding order", items[i]);
            })
        }
    }

    addSubscriptions(customerEmail, subscriptions) {
        for(var i = 0; i < subscriptions.length; i++ ) {
            subscriptions[i].customer = customerEmail;
            subscriptions[i].type = "subscription";
            this.$http.post('/api/order', subscriptions[i]).then((response) => {
                //console.log("added subscription", response.data)
            }, (err) => {
                console.log("error adding subscription", subscriptions[i]);
            })
        }
    }

    addOrders(customerEmail, items, subscriptions) {
        this.addItems(customerEmail, items);
        this.addSubscriptions(customerEmail, subscriptions);
    }



    deleteItem(item) {
        //console.log("deleting order", item);
        return this.$http.delete('/api/order?id=' + item._id).then((response) => {
        }, (err) => {
            console.log("error deleting order", item);
        })
    }

}

export default angular.module('services.ordersService', [])
    .service('ordersService', ordersService)
    .name;