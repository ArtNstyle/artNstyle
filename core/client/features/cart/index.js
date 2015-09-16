import '../cart/cart.scss';

import cartController from '../cart/cart.controller.es6';

export default angular.module('app.cart', [])
    .controller('cartController', cartController)
    .name;
