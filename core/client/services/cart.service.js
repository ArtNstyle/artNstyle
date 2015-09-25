"use strict";

class cartService {
    constructor($http) {
        this.$http = $http;
        this.items = [];

        this.tax = 1; // 1 %
        this.sessionId = 1;

        this.cartSupported = true;
    }

    getItems() {
        return this.items;
    }

    countItemTotal(item) {
        item.total = item.amount * item.price;
    }

    addItem(item) {
        item.id = this.sessionId++;
        item.amount = item.amount || 1;
        this.countItemTotal(item);
        this.items.push(item);
        this.countTotals();
    }

    deleteItem(item) {
        for(var i = 0; i < this.items.length; i++) {
            if(this.items[i].id === item.id) {
                this.items.splice(i, 1);
            }
        }
        this.countTotals();

    }

    countTotals() {
        this.subTotal= 0;
        for(var i = 0; i < this.items.length; i++) {
            this.subTotal += this.items[i].total;
        }
        this.taxTotal = this.tax/100 * this.subTotal;
        this.total = this.subTotal + this.taxTotal;
    }

    submitOrder() {

    }

}

export default angular.module('services.cartService', [])
    .service('cartService', cartService)
    .name;