import '../events/events.scss';

import angular from 'angular';

import eventsController from '../events/events.controller.es6';

var app = angular.module('app')
    .controller('eventsController', eventsController)
    .name;

module.exports = app;
