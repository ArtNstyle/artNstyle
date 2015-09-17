//console.log('app loaded');

import 'angular-material/angular-material.css';
import './app.scss';

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
import cart from './features/cart';

<<<<<<< HEAD
var app = angular.module('app', [uiRouter, ngMaterial,  goClick, home, stylists, salon, tanning, events, cart]);  //
=======
var app = angular.module('app', [uiRouter, ngMaterial,  goClick, home, stylists, salon, tanning, artists, events]);  //
>>>>>>> f81b008d572d5e27fc7b7fea381e4d63efd27746



require('./routes')(app);


