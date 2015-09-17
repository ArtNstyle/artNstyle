import '../events/events.scss';

import mainMenu from '../../directives/mainMenu/mainMenu.directive';

import eventsController from '../events/events.controller.es6';

export default angular.module('app.events', [mainMenu])
    .controller('eventsController', eventsController)
    .name;

