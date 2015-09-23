var lodash = require('lodash');
//console.log('app loaded');

import jQuery from 'jquery';
import bootstrap from 'bootstrap';
// import 'font-awesome/css/font-awesome.css';
import 'animate.css/animate.css'
import 'hover.css/css/hover.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'angular-material/angular-material.css';
import './app.scss';


import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
// import ngDialog from 'ng-dialog';
import ngFileUpload from 'ng-file-upload';

import goClick from './directives/goClick.directive';

import home from './features/home';
import stylists from './features/stylists';
import salon from './features/salon';
import tanning from './features/tanning';
import artists from './features/artists';
import arts from './features/arts';
import events from './features/events';
import cart from './features/cart';


var angularSimpleLogger = require('angular-simple-logger');
var angularGoogleMaps = require('angular-google-maps');


var app = angular.module('app', [lodash, uiRouter, ngMaterial, ngFileUpload, goClick, home, stylists, salon, tanning, artists, arts, events, cart, 'uiGmapgoogle-maps']); 


require('./routes')(app);
require('./features/contact/')(app);


