import '../cart/cart.scss';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';
import stripe from '../../directives/stripe/stripe.directive';

import cartController from '../cart/cart.controller.es6';

import cartService from '../../services/cart.service';

export default angular.module('app.cart', [mainMenu, stripe, cartService])
    .controller('cartController', cartController)
    .name;



