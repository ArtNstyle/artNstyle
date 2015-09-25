import '../tanning/tanning.scss';
// import ngDialog from 'ng-dialog';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';

import tanningController from '../tanning/tanning.controller.js';

import cartService from '../../services/cart.service';

export default angular.module('app.tanning', [mainMenu])
    .controller('tanningController', tanningController)
    .name;

