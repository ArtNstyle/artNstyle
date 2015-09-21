
//console.log('app loaded');
// import 'bootstrap/fonts/glyphicons-halflings-regular.eot';
// import 'animate.css/animate.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'angular-material/angular-material.css';
import './app.scss';

import jQuery from 'jquery';
global.$ = jQuery;
// import jQuery from 'jquery/dist/jquery.js';
import bootstrap from 'bootstrap';   

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';


import goClick from './directives/goClick.directive';

import home from './features/home';
import stylists from './features/stylists';
import salon from './features/salon';
import tanning from './features/tanning';
import artists from './features/artists';
import events from './features/events';

var app = angular.module('app', [uiRouter, ngMaterial,  goClick, home, stylists, salon, tanning, artists, events]);  //



require('./routes')(app);


