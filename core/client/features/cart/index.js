import '../cart/cart.scss';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';

<<<<<<< HEAD
import stripe from '../../directives/stripe/stripe.directive';

import cartController from '../cart/cart.controller.es6';

export default angular.module('app.cart', [mainMenu, stripe])
    .controller('cartController', cartController)
    .name;


=======
import cartController from '../cart/cart.controller.es6';
export default angular.module('app.cart', [mainMenu])
    .controller('cartController',cartController)
    .name;

>>>>>>> 44850be5d1735c20356a80ae338d240648fb58d6
