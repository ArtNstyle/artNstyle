import './salon.css';

import angular from 'angular';

import SalonController from './salon.controller';

export default angular.module('app.salon', [])
    .controller('SalonController', SalonController)
    .name;

