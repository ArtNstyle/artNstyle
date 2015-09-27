import '../orders/orders.scss';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';

import ordersController from '../orders/orders.controller.es6';

import ordersService from '../../services/orders.service';

var reverse = function  () {
    return function(items) {
        if(items && items.length) {
            return items.slice().reverse();
        }
        return items;
    };
};

export default angular.module('app.orders', [mainMenu, ordersService])
    .filter('reverse', reverse)
    .controller('ordersController', ordersController)
    .name;



