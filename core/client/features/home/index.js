import '../home/home.scss';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';

import homeController from '../home/home.controller.es6';

export default angular.module('app.home', [mainMenu])
    .controller('homeController', homeController)
    .name;


import '../home/images/coolhair.jpg';
import '../home/images/hstyle2.jpg';
import '../home/images/art10.jpg';
import '../home/images/ttown.jpg';
import '../home/images/flowerGirl.jpg';
import '../home/images/fish.jpeg';
import '../home/images/flower.jpg';


import '../home/images/Hair.jpg';
import '../home/images/hair1.jpg';
import '../home/images/hair2.jpg';
import '../home/images/hair3.jpg';
import '../home/images/artHome.jpg';