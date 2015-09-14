var angular = require('angular');

var app = angular.module('app')
    .controller('stylistsController', require('../stylists/stylists.controller.es6'));

module.exports = app;