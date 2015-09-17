import '../tanning/tanning.scss';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';
import tanningController from '../tanning/tanning.controller.es6';

export default angular.module('app.tanning', [mainMenu])
    .controller('tanningController', tanningController)
    .name;

