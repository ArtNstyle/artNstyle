import '../cart/cart.scss';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';

import stripe from '../../directives/stripe/stripe.directive';

import cartController from '../cart/cart.controller.es6';
export default angular.module('app.cart', [mainMenu, stripe])
    .controller('cartController', cartController)
    .name;


