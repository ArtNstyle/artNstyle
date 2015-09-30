import '../home/home.scss';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';

import homeController from '../home/home.controller.es6';

export default angular.module('app.home', [mainMenu])
    .controller('homeController', homeController)
    .name;

import '../home/images/hair.jpg';
import '../home/images/hairart.jpg';
import '../home/images/ttown.jpg';
import '../home/images/art.jpeg';