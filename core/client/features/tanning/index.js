import '../tanning/tanning.scss';

import tanningController from '../tanning/tanning.controller.es6';

export default angular.module('app.tanning', [])
    .controller('tanningController', tanningController)
    .name;

