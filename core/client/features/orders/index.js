import '../orders/orders.scss';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';

import ordersController from '../orders/orders.controller.es6';

import ordersService from '../../services/orders.service';

export default angular.module('app.orders', [mainMenu, ordersService])
    .controller('ordersController', ordersController)
    .name;



