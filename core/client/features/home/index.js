import '../home/home.scss';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';

import homeController from '../home/home.controller.es6';

export default angular.module('app.home', [mainMenu])
    .controller('homeController', homeController)
    .name;


