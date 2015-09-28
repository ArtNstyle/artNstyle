"use strict";

class paymentService {
    constructor($http) {
        this.$http = $http;
        this.url = "/api";

    }

    makePayment(token) {
        return this.$http.post('/api/payment', token).then((response) => {
            console.info('makePayment:', response);
            return response.data.paid;
        }, (err) => {
            console.log('stripe post error', err);
            //throw new Error(err);
            return err;
        });
    }

    createFirstSubscription(token) {
        return this.$http.post('/api/firstsubscription', token).then((response) => {
            console.info('createFirstSubscription:', response);
            return response.data.paid;
        }, (err) => {
            console.log('stripe post error', err);
            //throw new Error(err);
            return err;
        });
    }

    addSubscription(token) {
        return this.$http.post('/api/addsubscription', token).then((response) => {
            console.info('addSubscription:', response);
            return response.data.paid;
        }, (err) => {
            console.log('stripe post error', err);
            //throw new Error(err);
            return err;
        });
    }

}

export default angular.module('services.paymentService', [])
    .service('paymentService', paymentService)
    .name;