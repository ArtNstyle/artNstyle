import '../home/home.scss';

import angular from 'angular';

import homeController from '../home/home.controller.es6';

var app = angular.module('app')
    .controller('homeController', homeController)
    .name;

module.exports = app;

