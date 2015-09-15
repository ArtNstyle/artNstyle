import './salon.css';

import angular from 'angular';
require('angular-material');
import ngMaterial from 'angular-material';

import SalonController from './salon.controller';

export default angular.module('app.salon', [ngMaterial])
    .controller('SalonController', SalonController)
    .name;
