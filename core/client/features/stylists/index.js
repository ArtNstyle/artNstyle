import '../stylists/stylists.scss';
import angular from 'angular';

import stylistsController from '../stylists/stylists.controller.es6';

var app = angular.module('app')
    .controller('stylistsController', stylistsController)
    .name;

module.exports = app;