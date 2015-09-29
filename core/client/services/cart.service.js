"use strict";

class cartService {
    constructor() {
        this.items = [];
        this.subscriptions = [];

        this.tax = 0; // 0 %
        this.sessionId = 1;

        this.status = {
            orderSubmitted: false
        };
        this.cartSupported = true;
    }

    getItems() {
        return this.items;
    }

    getSubscriptions() {
        return this.subscriptions;
    }

    addItem(item) {
        item.id = this.sessionId++;
        item.amount = item.amount || 1;
        this.items.push(item);
        this.countTotals();
    }

    addSubscription(item) {
        item.id = this.sessionId++;
        item.amount = item.amount || 1;
        this.subscriptions.push(item);
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

    deleteSubscription(item) {
        for(var i = 0; i < this.subscriptions.length; i++) {
            if(this.subscriptions[i].id === item.id) {
                this.subscriptions.splice(i, 1);
            }
        }
        this.countTotals();

    }

    countTotals() {
        this.itemsTotal= 0;
        for(var i = 0; i < this.items.length; i++) {
            this.itemsTotal += this.items[i].price;
        }
        this.subTotal = this.itemsTotal;
        for(var i = 0; i < this.subscriptions.length; i++) {
            this.subTotal += this.subscriptions[i].price;
        }
        this.taxTotal = this.tax/100 * this.subTotal;
        this.total = this.subTotal + this.taxTotal;
    }

}

export default angular.module('services.cartService', [])
    .service('cartService', cartService)
    .name;