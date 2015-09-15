import '../events/events.scss';

import eventsController from '../events/events.controller.es6';

export default angular.module('app.events', [])
    .controller('eventsController', eventsController)
    .name;

