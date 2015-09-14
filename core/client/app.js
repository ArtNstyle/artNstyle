console.log('app loaded');

var angular = require('angular');
var uiRouter = require('angular-ui-router');
var app = angular.module('app', [uiRouter]);


require('./routes')(app);
require('./features/home/')(app); // feature implemented in ES5
require('./features/stylists/'); // feature partly implemented in ES6