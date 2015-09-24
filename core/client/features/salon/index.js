import '../salon/salon.scss';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';

import salonController from '../salon/salon.controller.es6';

export default angular.module('app.salon', [mainMenu])
    .controller('salonController', salonController)
    .name;


import '../salon/images/flower.jpg';

