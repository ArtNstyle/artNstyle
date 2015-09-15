import '../salon/salon.scss';

import salonController from '../salon/salon.controller.es6';

export default angular.module('app.salon', [])
    .controller('salonController', salonController)
    .name;

