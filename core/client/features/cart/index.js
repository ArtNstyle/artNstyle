import '../cart/cart.scss';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';

import cartController from './cart.controller.js';

export default angular.module('app.cart', [mainMenu])
    .controller('cartController',cartController)
    .name;

