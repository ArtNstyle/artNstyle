import '../salon/salon.scss';

import angular from 'angular';

import salonController from '../salon/salon.controller.es6';

var app = angular.module('app')
    .controller('salonController', salonController)
    .name;

module.exports = app;
