import '../cart/cart.scss';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';
import stripe from '../../directives/stripe/stripe.directive';

import cartController from '../cart/cart.controller.es6';

import cartService from '../../services/cart.service';
import ordersService from '../../services/orders.service';

export default angular.module('app.cart', [mainMenu, stripe, cartService, ordersService])
    .controller('cartController', cartController)
    .name;



