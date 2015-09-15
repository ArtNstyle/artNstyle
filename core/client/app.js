//console.log('app loaded');

import 'angular-material/angular-material.css';
import './app.scss';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';

import goClick from './directives/goClick.directive';
import editable from './directives/editable.directive';
import stylist from './features/stylists/stylist.directive';

var app = angular.module('app', [uiRouter, ngMaterial, goClick, stylist, editable]);



require('./routes')(app);
//require('./features/home/')(app); // feature implemented in ES5
require('./features/home/'); // feature partly implemented in ES6
require('./features/stylists/'); // feature partly implemented in ES6
require('./features/salon/'); // feature partly implemented in ES6
require('./features/tanning/'); // feature partly implemented in ES6
require('./features/events/'); // feature partly implemented in ES6


