"use strict";

class cartService {
    constructor() {
        this.items = [];
        this.subscriptions = [];

        this.tax = 1; // 1 %
        this.sessionId = 1;

        this.cartSupported = true;
        //
        //this.TANNING_SUBS = {
        //    MINIMALIST: "Minimalist",
        //    STARRYNIGHT: "Starry Night",
        //    MONALISA: "Mona Lisa",
        //    DALI1: "Dali #1",
        //    DALI2: "Dali #2"
        //};
        //
        //this.TANNING_ITEMS = {
        //    SINGLE: "Single Tan",
        //    TANS3: "3 Tans",
        //    TANS4: "4 Tans"
        //};
    }

    getItems() {
        return this.items;
    }

    getSubscriptions() {
        return this.subscriptions;
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

    addSubscription(item) {
        item.id = this.sessionId++;
        item.amount = item.amount || 1;
        this.countItemTotal(item);
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
        this.subTotal= 0;
        for(var i = 0; i < this.items.length; i++) {
            this.subTotal += this.items[i].total;
        }
        for(var i = 0; i < this.subscriptions.length; i++) {
            this.subTotal += this.subscriptions[i].total;
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