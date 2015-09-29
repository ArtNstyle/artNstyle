"use strict";

class paymentService {
    constructor($http) {
        this.$http = $http;
        this.url = "/api";

    }

    // makePayment(token) {
        
    //     return this.$http.post('/api/payment', token).then((response) => {
    //         console.info('makePayment:', response);
    //         return response.data.paid;
    //     }, (err) => {
    //         console.log('makePayment error', err);
    //         //throw new Error(err);
    //         return err;
    //     });
    // }

    makePayment(token) {
        var data = {
            customerId: "cus_74N8yD4VwSKdEP",
            amount: 1000,
            currency: "usd",
            description: "ArtnStyle"
        };
        
        return this.$http.post('/api/payment', data).then((response) => {
            console.info('makePayment:', response);
            return response.data.paid;
        }, (err) => {
            console.log('makePayment error', err);
            //throw new Error(err);
            return err;
        });
    }

    createFirstSubscription(customerEmail, planId, token) {
        var data = {
            token: token,
            email: customerEmail,
            plan: planId
        };
        return this.$http.post('/api/firstsubscription', data).then((response) => {
            console.info('createFirstSubscription:', response);
            return response.data.id;
        }, (err) => {
            console.log('createFirstSubscription error', err);
            //throw new Error(err);
            return err;
        });
    }

    addSubscription(customerId, planId) {
        var data = {
            customerId: customerId,
            plan: planId
        }
        return this.$http.post('/api/addsubscription', data).then((response) => {
            console.info('addSubscription:', response);
            return response.data;
        }, (err) => {
            console.log('addSubscription  error', err);
            //throw new Error(err);
            return err;
        });
    }

    // cus_74N8yD4VwSKdEP

}


export default angular.module('services.paymentService', [])
    .service('paymentService', paymentService)
    .name;