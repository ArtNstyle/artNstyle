var angular = require('angular');

var app = angular.module('app')
    .controller('stylistsController', require('../stylists/stylists.controller.es6'))
    .name;

module.exports = app;