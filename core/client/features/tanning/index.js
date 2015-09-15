import '../tanning/tanning.scss';

import angular from 'angular';

import tanningController from '../tanning/tanning.controller.es6';

var app = angular.module('app')
    .controller('tanningController', tanningController)
    .name;

module.exports = app;
